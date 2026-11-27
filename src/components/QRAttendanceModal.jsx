// sloppy-allow-file: WORD_BUDGET_EXCEEDED
import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Html5Qrcode } from 'html5-qrcode';
import { IconClose, IconQR, IconCheck, IconCamera, IconMedia } from './Icons';

export default function QRAttendanceModal({
  isOpen,
  onClose,
  event,
  currentUser,
  mode, // 'coordinator' | 'student'
  onRecordAttendance,
  onRegisterEvent
}) {
  const [qrType, setQrType] = useState('entry'); // 'entry' | 'exit'
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [scanStep, setScanStep] = useState('idle'); // 'idle' | 'starting' | 'scanning' | 'success' | 'error'
  const [scanResult, setScanResult] = useState(null);
  const [scanError, setScanError] = useState('');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraDevices, setCameraDevices] = useState([]);
  const [selectedCameraIdx, setSelectedCameraIdx] = useState(0);

  const dialogRef = useRef(null);
  const scannerRef = useRef(null);
  const fileInputRef = useRef(null);

  // Dialog show/close handling
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  // Query available cameras on mount/open
  useEffect(() => {
    if (isOpen && mode === 'student') {
      Html5Qrcode.getCameras()
        .then((devices) => {
          if (devices && devices.length > 0) {
            setCameraDevices(devices);
          }
        })
        .catch((err) => {
          console.info('Camera discovery note:', err);
        });
    }
  }, [isOpen, mode]);

  // Coordinator: Generate QR code when event or qrType changes
  useEffect(() => {
    if (event && isOpen) {
      const payload = JSON.stringify({
        eventId: event.id,
        eventTitle: event.title,
        type: qrType,
        token: `${event.qrPayload || event.id}_${qrType.toUpperCase()}_${Date.now()}`
      });

      QRCode.toDataURL(payload, { width: 220, margin: 1, color: { dark: '#000000', light: '#ffffff' } })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('QR generation error:', err));
    }
  }, [event, qrType, isOpen]);

  // Clean up scanner helper
  const stopScannerSafely = async () => {
    if (scannerRef.current) {
      try {
        if (scannerRef.current.isScanning) {
          await scannerRef.current.stop();
        }
        await scannerRef.current.clear();
      } catch (err) {
        console.warn('QR scanner cleanup note:', err);
      } finally {
        scannerRef.current = null;
        setIsCameraActive(false);
      }
    }
  };

  // Close cleanup
  useEffect(() => {
    if (!isOpen) {
      stopScannerSafely();
      setScanStep('idle');
      setScanResult(null);
      setScanError('');
    }
  }, [isOpen]);

  if (!isOpen || !event) return null;

  const isCoordinator = mode === 'coordinator' || currentUser.roleKey !== 'student';
  const existingAttendance = event.attendance?.find((a) => a.usn === currentUser.usn);

  // Process decoded QR payload
  const handleVerifyDecodedQR = (decodedText) => {
    setScanError('');
    let parsed = null;

    try {
      parsed = JSON.parse(decodedText);
    } catch {
      // Fallback: Check if plain string contains event identifier
      if (typeof decodedText === 'string' && (decodedText.includes(event.qrPayload || '') || decodedText.includes(event.id))) {
        parsed = { eventId: event.id, type: qrType };
      }
    }

    if (!parsed) {
      setScanError('Unrecognized QR code format. Please scan the official event QR.');
      return;
    }

    // Verify event matching
    if (parsed.eventId && parsed.eventId !== event.id) {
      setScanError(`QR code belongs to "${parsed.eventTitle || parsed.eventId}", not "${event.title}".`);
      return;
    }

    const detectedType = parsed.type || qrType;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newRecord = {
      usn: currentUser.usn,
      name: currentUser.name,
      checkIn: detectedType === 'entry'
        ? timeStr
        : (existingAttendance?.checkIn || timeStr),
      checkOut: detectedType === 'exit'
        ? timeStr
        : (existingAttendance?.checkOut || 'In Progress'),
      status: detectedType === 'exit' ? 'Completed' : 'Checked In'
    };

    onRecordAttendance(event.id, newRecord);
    setScanResult({ ...newRecord, actionType: detectedType });
    setScanStep('success');
    stopScannerSafely();
  };

  // Start live device camera scanner
  const handleStartCamera = async (targetCameraOverride) => {
    setScanError('');
    setScanStep('starting');

    await stopScannerSafely();
    // Allow hardware camera stream to release
    await new Promise((resolve) => setTimeout(resolve, 150));

    const elementId = 'qr-camera-viewport';
    const scanner = new Html5Qrcode(elementId);
    scannerRef.current = scanner;

    const qrConfig = {
      fps: 10,
      qrbox: { width: 220, height: 220 }
    };

    // Determine target camera: explicit device ID or facing mode
    let targetCamera = targetCameraOverride;
    if (!targetCamera) {
      if (cameraDevices.length > 0 && cameraDevices[selectedCameraIdx]?.id) {
        targetCamera = cameraDevices[selectedCameraIdx].id;
      } else {
        targetCamera = { facingMode: 'environment' };
      }
    }

    try {
      await scanner.start(
        targetCamera,
        qrConfig,
        (decodedText) => {
          handleVerifyDecodedQR(decodedText);
        },
        () => {
          // Routine frame decode misses
        }
      );
      setIsCameraActive(true);
      setScanStep('scanning');

      // Refresh camera devices with permission granted
      Html5Qrcode.getCameras()
        .then((devices) => {
          if (devices && devices.length > 0) {
            setCameraDevices(devices);
          }
        })
        .catch(() => {});
    } catch (err) {
      console.warn('Primary camera start error:', err);

      // Fallback for single-webcam laptops (e.g. MacBook) where { facingMode: 'environment' } fails:
      if (typeof targetCamera === 'object' && targetCamera.facingMode === 'environment') {
        try {
          await scanner.start(
            { facingMode: 'user' },
            qrConfig,
            (decodedText) => handleVerifyDecodedQR(decodedText),
            () => {}
          );
          setIsCameraActive(true);
          setScanStep('scanning');
          Html5Qrcode.getCameras().then((devs) => devs?.length && setCameraDevices(devs)).catch(() => {});
          return;
        } catch (fallbackErr) {
          console.warn('Fallback camera start error:', fallbackErr);
        }
      }

      setIsCameraActive(false);
      setScanStep('error');
      const msg = err?.name === 'NotAllowedError'
        ? 'Camera permission denied. Allow camera access in your browser address bar.'
        : (err?.message || 'Camera is unavailable or unsupported on this device.');
      setScanError(msg);
    }
  };

  // Flip camera between available devices
  const handleFlipCamera = async () => {
    setScanError('');

    // If only 1 camera exists on the device (e.g. laptop webcam):
    if (cameraDevices.length <= 1) {
      const currentLabel = cameraDevices[0]?.label || 'Default Camera';
      setScanError(`Only 1 camera detected (${currentLabel}). Flip Camera is active on dual-camera devices like mobile phones or tablets.`);
      return;
    }

    // Multiple cameras available (phone front/back or external USB cam)
    const nextIdx = (selectedCameraIdx + 1) % cameraDevices.length;
    setSelectedCameraIdx(nextIdx);
    const nextCamera = cameraDevices[nextIdx];

    await handleStartCamera(nextCamera.id);
  };

  // Scan from uploaded file / screenshot fallback
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setScanError('');
    setScanStep('starting');

    try {
      const scanner = new Html5Qrcode('qr-file-detector');
      const decodedText = await scanner.scanFile(file, true);
      handleVerifyDecodedQR(decodedText);
    } catch (err) {
      setScanStep('error');
      setScanError('Could not detect a valid QR code in this image. Try a clearer photo.');
    }
  };

  // Fast demo verification fallback
  const handleFastVerify = (type) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newRecord = {
      usn: currentUser.usn,
      name: currentUser.name,
      checkIn: type === 'entry' ? timeStr : (existingAttendance?.checkIn || '09:00 AM'),
      checkOut: type === 'exit' ? timeStr : 'In Progress',
      status: type === 'exit' ? 'Completed' : 'Checked In'
    };

    onRecordAttendance(event.id, newRecord);
    setScanResult({ ...newRecord, actionType: type });
    setScanStep('success');
    stopScannerSafely();
  };

  // Export attendance CSV
  const handleExportCSV = () => {
    const records = event.attendance || [];
    if (records.length === 0) {
      alert('No attendance records to export.');
      return;
    }

    const headers = ['USN', 'Student Name', 'Check-In Timestamp', 'Check-Out Timestamp', 'Status'];
    const rows = records.map((r) => [r.usn, r.name, r.checkIn, r.checkOut, r.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}_Attendance_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      className="x-modal"
      onClose={() => {
        stopScannerSafely();
        onClose();
      }}
      style={{ maxWidth: 640 }}
    >
      <div className="modal-dialog-content">
        <div className="modal-header">
          <h2 className="modal-heading">
            {isCoordinator ? 'Event QR Attendance & Roster' : 'Live QR Attendance Scanner'}
          </h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => {
              stopScannerSafely();
              onClose();
            }}
            aria-label="Close dialog"
          >
            <IconClose />
          </button>
        </div>

        <div className="modal-body qr-modal-body">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: 17, fontWeight: 700 }}>{event.title}</h3>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
              {event.venue} · {event.date}
            </p>
          </div>

          {/* Coordinator Mode */}
          {isCoordinator ? (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Toggle Entry vs Exit QR */}
              <div style={{ display: 'inline-flex', background: 'var(--card-bg)', padding: 4, borderRadius: 9999, border: '1px solid var(--border-color)', marginBottom: 8 }}>
                <button
                  type="button"
                  className={`filter-pill ${qrType === 'entry' ? 'active' : ''}`}
                  onClick={() => setQrType('entry')}
                  style={{ border: 'none' }}
                >
                  Entry Check-In
                </button>
                <button
                  type="button"
                  className={`filter-pill ${qrType === 'exit' ? 'active' : ''}`}
                  onClick={() => setQrType('exit')}
                  style={{ border: 'none' }}
                >
                  Exit Check-Out
                </button>
              </div>

              <div className="qr-canvas-box">
                {qrDataUrl && <img src={qrDataUrl} alt="Event QR Code" className="qr-code-img" />}
              </div>
              <span className="qr-helper-text">
                Display this official QR on projector or kiosk. Students scan using their phone camera to record verified attendance.
              </span>

              {/* Attendance Roster Summary */}
              <div className="attendance-roster-section">
                <div className="attendance-roster-header">
                  <h4 className="attendance-roster-title">
                    Live Attendance Roster ({event.attendance?.length || 0} Recorded)
                  </h4>
                  <button
                    type="button"
                    className="btn-primary-post attendance-export-btn"
                    onClick={handleExportCSV}
                  >
                    Export CSV Report
                  </button>
                </div>

                <div className="attendance-table-container">
                  <table className="attendance-logs-table">
                    <colgroup>
                      <col className="attendance-col-usn" />
                      <col className="attendance-col-name" />
                      <col className="attendance-col-in" />
                      <col className="attendance-col-out" />
                      <col className="attendance-col-status" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th className="attendance-th-usn">USN</th>
                        <th className="attendance-th-name">Name</th>
                        <th className="attendance-th-in">Check-In</th>
                        <th className="attendance-th-out">Check-Out</th>
                        <th className="attendance-th-status">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {event.attendance && event.attendance.length > 0 ? (
                        event.attendance.map((record) => (
                          <tr key={record.usn}>
                            <td className="attendance-cell-usn">{record.usn}</td>
                            <td className="attendance-cell-name" title={record.name}>{record.name}</td>
                            <td className="attendance-cell-in">{record.checkIn}</td>
                            <td className="attendance-cell-out">{record.checkOut}</td>
                            <td className="attendance-cell-status">
                              <span className="qr-status-pill">{record.status}</span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: 16 }}>
                            No student scans recorded yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* Student Mode: Real Camera Viewfinder & Attendance Verification */
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              {/* Unregistered warning notice */}
              {!event.isRegistered && onRegisterEvent && (
                <div style={{ width: '100%', padding: '10px 14px', borderRadius: 8, backgroundColor: 'rgba(255, 122, 0, 0.1)', border: '1px solid #ff7a00', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ color: '#ff7a00', fontWeight: 600 }}>
                    You have not registered for this event yet.
                  </span>
                  <a
                    href={event.link || 'https://docs.google.com/forms/d/e/1FAIpQLSfPzeFRunxDAwmcZNHQDBOziyT3qCQ327DA-4tWFjiGFsvDsg/viewform?usp=publish-editor'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-post"
                    style={{ fontSize: 12, padding: '4px 10px', textDecoration: 'none' }}
                  >
                    Register via Google Form
                  </a>
                </div>
              )}

              {/* Status pill */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="qr-scan-badge">
                  {existingAttendance ? `Current Status: ${existingAttendance.status}` : 'Not Checked In'}
                </span>
                {existingAttendance?.checkIn && (
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                    (Check-in: {existingAttendance.checkIn})
                  </span>
                )}
              </div>

              {/* Success Result View */}
              {scanStep === 'success' && scanResult && (
                <div
                  style={{
                    width: '100%',
                    padding: 20,
                    borderRadius: 12,
                    backgroundColor: 'rgba(0, 186, 124, 0.1)',
                    border: '1px solid #00ba7c',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ display: 'inline-flex', padding: 8, borderRadius: '50%', backgroundColor: '#00ba7c', color: '#fff', marginBottom: 8 }}>
                    <IconCheck style={{ width: 24, height: 24 }} />
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: '#00ba7c' }}>
                    Attendance Verified Successfully
                  </h4>
                  <div style={{ marginTop: 10, fontSize: 14, color: 'var(--text-primary)', lineHeight: '20px' }}>
                    <div><strong>Student:</strong> {currentUser.name} ({currentUser.usn})</div>
                    <div><strong>Event:</strong> {event.title}</div>
                    <div><strong>Check-In:</strong> {scanResult.checkIn}</div>
                    <div><strong>Check-Out:</strong> {scanResult.checkOut}</div>
                    <div><strong>Action:</strong> {scanResult.actionType === 'exit' ? 'Exit Check-Out' : 'Entry Check-In'}</div>
                  </div>
                  <button
                    type="button"
                    className="btn-primary-post"
                    onClick={() => {
                      stopScannerSafely();
                      onClose();
                    }}
                    style={{ marginTop: 14, fontSize: 13 }}
                  >
                    Done
                  </button>
                </div>
              )}

              {/* Active Camera Viewfinder */}
              {scanStep !== 'success' && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                  <div className="qr-scanner-wrapper">
                    {/* Viewfinder container always exists for Html5Qrcode to attach */}
                    <div id="qr-camera-viewport" style={{ opacity: isCameraActive ? 1 : 0, pointerEvents: isCameraActive ? 'auto' : 'none' }} />
                    
                    {/* Scanning laser and border crosshairs */}
                    {isCameraActive && (
                      <>
                        <div className="qr-scanner-laser" />
                        <div className="qr-viewfinder-frame" />
                      </>
                    )}
                    
                    {/* Centered inactive placeholder */}
                    {!isCameraActive && scanStep !== 'starting' && (
                      <div className="qr-scanner-placeholder">
                        <div className="qr-camera-icon-badge">
                          <IconCamera style={{ width: 28, height: 28, color: 'var(--accent-color)' }} />
                        </div>
                        <p className="qr-placeholder-text">
                          Camera is inactive. Click below to start scanning the event QR code.
                        </p>
                      </div>
                    )}

                    {/* Starting state */}
                    {scanStep === 'starting' && (
                      <div className="qr-scanner-placeholder">
                        <div className="qr-camera-icon-badge" style={{ animation: 'pulse 1.5s infinite' }}>
                          <IconCamera style={{ width: 28, height: 28, color: 'var(--accent-color)' }} />
                        </div>
                        <p className="qr-placeholder-text">
                          Initializing camera viewfinder...
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Scan error / camera note notice */}
                  {scanError && (
                    <div style={{ padding: '8px 14px', borderRadius: 8, backgroundColor: 'rgba(244, 33, 46, 0.1)', border: '1px solid #f4212e', color: '#f4212e', fontSize: 12, maxWidth: 360, textAlign: 'center', lineHeight: 1.4 }}>
                      {scanError}
                    </div>
                  )}

                  {/* Controls */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {!isCameraActive ? (
                      <button
                        type="button"
                        className="btn-primary-post"
                        onClick={() => handleStartCamera()}
                        style={{ fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                      >
                        <IconCamera style={{ width: 16, height: 16 }} />
                        <span>Start Camera Scanner</span>
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="btn-qr-action"
                          onClick={stopScannerSafely}
                          style={{ fontSize: 13 }}
                        >
                          Stop Camera
                        </button>
                        <button
                          type="button"
                          className="btn-qr-action"
                          onClick={handleFlipCamera}
                          style={{ fontSize: 13 }}
                          title={cameraDevices.length > 1 ? `Switch camera (${selectedCameraIdx + 1} of ${cameraDevices.length})` : 'Only 1 camera detected on this computer'}
                        >
                          Flip Camera {cameraDevices.length > 1 ? `(${selectedCameraIdx + 1}/${cameraDevices.length})` : ''}
                        </button>
                      </>
                    )}

                    {/* File upload scanner fallback */}
                    <button
                      type="button"
                      className="btn-qr-action"
                      onClick={() => fileInputRef.current?.click()}
                      style={{ fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    >
                      <IconMedia style={{ width: 14, height: 14 }} />
                      <span>Upload QR Photo</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleFileUpload}
                    />

                    {/* Fast verification fallback for presentations without camera access */}
                    <button
                      type="button"
                      className="btn-qr-action"
                      onClick={() => handleFastVerify(existingAttendance ? 'exit' : 'entry')}
                      style={{ fontSize: 13 }}
                      title="Quick verification without camera hardware"
                    >
                      Quick Verify ({existingAttendance ? 'Exit' : 'Entry'})
                    </button>
                  </div>

                  {/* Hidden file reader target container */}
                  <div id="qr-file-detector" style={{ display: 'none' }} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
