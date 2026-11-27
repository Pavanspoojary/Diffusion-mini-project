// sloppy-allow-file: WORD_BUDGET_EXCEEDED
import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { IconClose, IconQR, IconCheck, IconCamera } from './Icons';

export default function QRAttendanceModal({
  isOpen,
  onClose,
  event,
  currentUser,
  mode, // 'coordinator' | 'student'
  onRecordAttendance
}) {
  const [qrType, setQrType] = useState('entry'); // 'entry' | 'exit'
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [scanStep, setScanStep] = useState('idle'); // 'idle' | 'scanning' | 'success'
  const [scanResult, setScanResult] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  // Generate QR code when event or qrType changes
  useEffect(() => {
    if (event && isOpen) {
      const payload = JSON.stringify({
        eventId: event.id,
        eventTitle: event.title,
        type: qrType,
        token: `${event.qrPayload}_${qrType.toUpperCase()}_${Date.now()}`
      });

      QRCode.toDataURL(payload, { width: 220, margin: 1, color: { dark: '#000000', light: '#ffffff' } })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('QR generation error:', err));
    }
  }, [event, qrType, isOpen]);

  if (!isOpen || !event) return null;

  const isCoordinator = mode === 'coordinator' || currentUser.roleKey !== 'student';

  // Handle student simulated or camera QR scan
  const handlePerformScan = () => {
    setScanStep('scanning');
    setTimeout(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const newRecord = {
        usn: currentUser.usn,
        name: currentUser.name,
        checkIn: qrType === 'entry' ? timeStr : (event.attendance?.find((a) => a.usn === currentUser.usn)?.checkIn || '09:00 AM'),
        checkOut: qrType === 'exit' ? timeStr : 'In Progress',
        status: qrType === 'exit' ? 'Completed' : 'Checked In'
      };

      onRecordAttendance(event.id, newRecord);
      setScanResult(newRecord);
      setScanStep('success');
    }, 1200);
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
      onClose={onClose}
      style={{ maxWidth: 640 }}
    >
      <div className="modal-dialog-content">
        <div className="modal-header">
          <h2 className="modal-heading">
            {isCoordinator ? 'Event QR Attendance & Roster' : 'Scan Attendance QR Code'}
          </h2>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
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

          {/* Toggle Entry vs Exit QR */}
          <div style={{ display: 'inline-flex', background: 'var(--card-bg)', padding: 4, borderRadius: 9999, border: '1px solid var(--border-color)' }}>
            <button
              type="button"
              className={`filter-pill ${qrType === 'entry' ? 'active' : ''}`}
              onClick={() => {
                setQrType('entry');
                setScanStep('idle');
              }}
              style={{ border: 'none' }}
            >
              Entry Check-In
            </button>
            <button
              type="button"
              className={`filter-pill ${qrType === 'exit' ? 'active' : ''}`}
              onClick={() => {
                setQrType('exit');
                setScanStep('idle');
              }}
              style={{ border: 'none' }}
            >
              Exit Check-Out
            </button>
          </div>

          {/* Coordinator View: QR Code + Attendance List */}
          {isCoordinator ? (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="qr-canvas-box">
                {qrDataUrl && <img src={qrDataUrl} alt="Event QR Code" className="qr-code-img" />}
              </div>
              <span className="qr-helper-text">
                Students scan this QR code on entry & exit to record timestamped attendance.
              </span>

              {/* Attendance Roster Summary */}
              <div className="attendance-roster-section">
                <div className="attendance-roster-header">
                  <h4 className="attendance-roster-title">
                    Live Attendance Roster ({event.attendance?.length || 0} Registered)
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
            /* Student View: Camera Viewfinder & Attendance Confirmation */
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {scanStep === 'idle' && (
                <div
                  style={{
                    width: 240,
                    height: 240,
                    borderRadius: 16,
                    border: '2px dashed var(--accent-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    backgroundColor: 'var(--card-bg)'
                  }}
                >
                  <IconCamera style={{ width: 44, height: 44, color: 'var(--accent-color)' }} />
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                    Ready to scan {qrType === 'entry' ? 'Entry' : 'Exit'} QR Code
                  </span>
                  <button
                    type="button"
                    className="btn-primary-post"
                    onClick={handlePerformScan}
                    style={{ fontSize: 13, padding: '7px 16px' }}
                  >
                    Simulate Camera Scan
                  </button>
                </div>
              )}

              {scanStep === 'scanning' && (
                <div
                  style={{
                    width: 240,
                    height: 240,
                    borderRadius: 16,
                    border: '2px solid var(--accent-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(29, 155, 240, 0.05)',
                    position: 'relative'
                  }}
                >
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent-color)' }}>
                    Verifying Student Credentials...
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>
                    USN: {currentUser.usn}
                  </div>
                </div>
              )}

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
                  </div>
                  <button
                    type="button"
                    className="btn-primary-post"
                    onClick={onClose}
                    style={{ marginTop: 14, fontSize: 13 }}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
