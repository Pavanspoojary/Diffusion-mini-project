import React, { useRef } from 'react';
import { IconVideo, IconMedia, IconArticle } from './Icons';

/**
 * LinkedIn-style post starter bar.
 * Sits at the top of the feed:
 *   [avatar]  [ Start a post ............ ]
 *             [Video]   [Photo]   [Write article]
 */
export default function LinkedInComposer({ currentUser, onOpenCompose }) {
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const formatFileSize = (bytes) => {
    if (!bytes) return '';
    return bytes > 1024 * 1024
      ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.round(bytes / 1024)} KB`;
  };

  const handleFileChosen = (e, kind) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onOpenCompose({
          mode: kind,
          initialMedia: event.target.result,
          initialMediaKind: kind,
          initialMediaName: file.name,
          initialMediaSize: formatFileSize(file.size)
        });
      };
      reader.readAsDataURL(file);
    } else {
      onOpenCompose({ mode: kind });
    }
    e.target.value = '';
  };

  return (
    <section className="li-composer" aria-label="Create a post">
      {/* Hidden file pickers for direct native upload */}
      <input
        type="file"
        ref={photoInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => handleFileChosen(e, 'photo')}
      />
      <input
        type="file"
        ref={videoInputRef}
        accept="video/*"
        style={{ display: 'none' }}
        onChange={(e) => handleFileChosen(e, 'video')}
      />

      <div
        className="avatar avatar-md li-composer-avatar"
        style={{ background: currentUser.avatarBg }}
      >
        <span>{currentUser.avatarChar}</span>
      </div>

      <div className="li-composer-main">
        <button
          type="button"
          className="li-start-post"
          onClick={() => onOpenCompose({ mode: 'text' })}
        >
          Start a post
        </button>

        <div className="li-composer-actions">
          <button
            type="button"
            className="li-composer-action"
            onClick={() => {
              if (videoInputRef.current) {
                videoInputRef.current.click();
              } else {
                onOpenCompose({ mode: 'video' });
              }
            }}
          >
            <span className="li-composer-action-icon video">
              <IconVideo />
            </span>
            <span>Video</span>
          </button>

          <button
            type="button"
            className="li-composer-action"
            onClick={() => {
              if (photoInputRef.current) {
                photoInputRef.current.click();
              } else {
                onOpenCompose({ mode: 'photo' });
              }
            }}
          >
            <span className="li-composer-action-icon photo">
              <IconMedia className="li-icon" />
            </span>
            <span>Photo</span>
          </button>

          <button
            type="button"
            className="li-composer-action"
            onClick={() => onOpenCompose({ mode: 'article' })}
          >
            <span className="li-composer-action-icon article">
              <IconArticle />
            </span>
            <span>Write article</span>
          </button>
        </div>
      </div>
    </section>
  );
}
