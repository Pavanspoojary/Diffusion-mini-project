import React from 'react';
import { IconVideo, IconMedia, IconArticle } from './Icons';

/**
 * LinkedIn-style post starter bar.
 * Sits at the top of the feed:
 *   [avatar]  [ Start a post ............ ]
 *             [Video]   [Photo]   [Write article]
 */
export default function LinkedInComposer({ currentUser, onOpenCompose }) {
  const open = (mode) => () => onOpenCompose({ mode });

  return (
    <section className="li-composer" aria-label="Create a post">
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
          onClick={open('text')}
        >
          Start a post
        </button>

        <div className="li-composer-actions">
          <button type="button" className="li-composer-action" onClick={open('video')}>
            <span className="li-composer-action-icon video">
              <IconVideo />
            </span>
            <span>Video</span>
          </button>

          <button type="button" className="li-composer-action" onClick={open('photo')}>
            <span className="li-composer-action-icon photo">
              <IconMedia className="li-icon" />
            </span>
            <span>Photo</span>
          </button>

          <button type="button" className="li-composer-action" onClick={open('article')}>
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
