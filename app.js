/**
 * X.com (Twitter) Web Client Clone
 * High-fidelity, reactive, modern web standards
 * Adheres strictly to Zero Emojis Policy
 */

(() => {
  'use strict';

  // --- CURRENT USER PROFILE ---
  const CURRENT_USER = {
    name: 'Pavan Poojary',
    handle: '@pavanspoojary',
    avatarChar: 'P',
    verified: true,
    verifiedType: 'blue'
  };

  // --- SEED INITIAL POSTS ---
  const INITIAL_POSTS = [
    {
      id: 'post-1',
      author: 'Elon Musk',
      handle: '@elonmusk',
      verified: true,
      verifiedType: 'gold',
      avatarChar: 'E',
      avatarBg: '#23272a',
      time: '1h',
      timestamp: Date.now() - 3600000,
      text: 'Starship Flight 8 completed orbital insertion and precision booster return to the launch tower. Full reuse of rapid interplanetary transport is becoming reality.',
      media: 'https://images.unsplash.com/photo-1517976487502-d5cb69427b5f?auto=format&fit=crop&w=1200&q=80',
      replies: 12450,
      reposts: 28310,
      likes: 184500,
      views: '4.2M',
      isLiked: false,
      isReposted: false,
      isBookmarked: false,
      isUserPost: false
    },
    {
      id: 'post-2',
      author: 'Google DeepMind',
      handle: '@GoogleDeepMind',
      verified: true,
      verifiedType: 'gold',
      avatarChar: 'G',
      avatarBg: '#1a73e8',
      time: '3h',
      timestamp: Date.now() - 10800000,
      text: 'Announcing Gemini 2.5 Flash: 1M token context window standard, sub-100ms latency, native multimodal reasoning, and state-of-the-art agentic tool execution benchmarks.',
      media: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      replies: 1820,
      reposts: 5490,
      likes: 38200,
      views: '980K',
      isLiked: false,
      isReposted: false,
      isBookmarked: false,
      isUserPost: false
    },
    {
      id: 'post-3',
      author: 'React',
      handle: '@reactjs',
      verified: true,
      verifiedType: 'blue',
      avatarChar: 'R',
      avatarBg: '#087ea4',
      time: '6h',
      timestamp: Date.now() - 21600000,
      text: 'React 19 is now available on npm. Highlights include Actions for form handling, useOptimistic for immediate state feedback, server components stabilization, and asset preloading.',
      linkCard: {
        domain: 'react.dev',
        title: 'React 19 Release Notes and Upgrade Guide',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80'
      },
      replies: 940,
      reposts: 3120,
      likes: 24700,
      views: '640K',
      isLiked: false,
      isReposted: false,
      isBookmarked: false,
      isUserPost: false
    },
    {
      id: 'post-4',
      author: 'Pavan Poojary',
      handle: '@pavanspoojary',
      verified: true,
      verifiedType: 'blue',
      avatarChar: 'P',
      avatarBg: 'linear-gradient(135deg, #1d9bf0, #7856ff)',
      time: '8h',
      timestamp: Date.now() - 28800000,
      text: 'Shipped a clean, responsive, and completely standalone X clone built with modern web standards: dialogs with light-dismiss, native SVG icon assets, customizable theme palettes, and zero dependencies.',
      media: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      replies: 42,
      reposts: 89,
      likes: 512,
      views: '18.4K',
      isLiked: true,
      isReposted: false,
      isBookmarked: true,
      isUserPost: true
    }
  ];

  // --- SEED TRENDS ---
  const TRENDS_DATA = [
    { category: 'Technology · Trending', topic: '#Claude37Sonnet', count: '94.2K posts' },
    { category: 'Artificial Intelligence · Trending', topic: 'DeepMind', count: '142.8K posts' },
    { category: 'Space · Trending', topic: 'Starship Flight 8', count: '68.5K posts' },
    { category: 'Coding · Trending', topic: '#TypeScript', count: '41.3K posts' },
    { category: 'Web Development · Trending', topic: '#Nextjs15', count: '29.7K posts' }
  ];

  // --- SEED WHO TO FOLLOW ---
  const WHO_TO_FOLLOW = [
    {
      id: 'who-1',
      name: 'Yann LeCun',
      handle: '@ylecun',
      avatarChar: 'Y',
      avatarBg: '#3b5998',
      verified: true,
      verifiedType: 'blue',
      following: false
    },
    {
      id: 'who-2',
      name: 'Vercel',
      handle: '@vercel',
      avatarChar: 'V',
      avatarBg: '#000000',
      verified: true,
      verifiedType: 'blue',
      following: false
    },
    {
      id: 'who-3',
      name: 'Sam Altman',
      handle: '@sama',
      avatarChar: 'S',
      avatarBg: '#10a37f',
      verified: true,
      verifiedType: 'blue',
      following: true
    }
  ];

  // --- APPLICATION STATE ---
  let posts = [];
  let currentTab = 'for-you';
  let activeNav = 'home';
  let searchQuery = '';
  let followingUsers = new Set(['@sama', '@reactjs', '@GoogleDeepMind']);
  let activeReplyPostId = null;

  // --- LOCAL STORAGE HELPERS ---
  const STORAGE_KEYS = {
    POSTS: 'x_clone_posts_v2',
    THEME: 'x_clone_theme_v2',
    COLOR: 'x_clone_color_v2',
    FOLLOWS: 'x_clone_follows_v2'
  };

  function loadState() {
    try {
      const savedPosts = localStorage.getItem(STORAGE_KEYS.POSTS);
      posts = savedPosts ? JSON.parse(savedPosts) : INITIAL_POSTS;

      const savedFollows = localStorage.getItem(STORAGE_KEYS.FOLLOWS);
      if (savedFollows) {
        followingUsers = new Set(JSON.parse(savedFollows));
      }

      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
      const savedColor = localStorage.getItem(STORAGE_KEYS.COLOR) || 'blue';
      applyTheme(savedTheme, false);
      applyColor(savedColor, false);
    } catch (e) {
      console.warn('Storage read error, using defaults:', e);
      posts = INITIAL_POSTS;
    }
  }

  function savePosts() {
    try {
      localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
    } catch (e) {
      console.warn('Failed to save posts:', e);
    }
  }

  function saveFollows() {
    try {
      localStorage.setItem(STORAGE_KEYS.FOLLOWS, JSON.stringify([...followingUsers]));
    } catch (e) {
      console.warn('Failed to save follows:', e);
    }
  }

  // --- TOAST NOTIFICATION ---
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('globalToast');
    const msgEl = document.getElementById('toastMessage');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.hidden = false;

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2800);
  }

  // --- NUMBER FORMATTER ---
  function formatCount(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + 'K';
    return num > 0 ? num.toString() : '';
  }

  // --- SVG ICON DEFINITIONS (Strictly Zero Emojis) ---
  const ICONS = {
    verifiedBlue: `<svg viewBox="0 0 22 22" class="badge-icon verified-blue" aria-label="Verified account"><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.136 2.136 5.485-5.58 1.302 1.293-6.787 6.88z" fill="currentColor"></path></svg>`,
    verifiedGold: `<svg viewBox="0 0 22 22" class="badge-icon verified-gold" aria-label="Verified organization"><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.136 2.136 5.485-5.58 1.302 1.293-6.787 6.88z" fill="currentColor"></path></svg>`,
    reply: `<svg viewBox="0 0 24 24" aria-hidden="true" class="action-icon"><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-1.602.88 1.157 2.65c.294.67-.197 1.43-.923 1.43H8.25C4.664 22.2 1.751 19.28 1.751 15.7V10zm8.005-6c-3.317 0-6.005 2.69-6.005 6v5.7c0 2.48 2.02 4.5 4.5 4.5h5.539l-.74-1.69c-.312-.72-.057-1.56.59-1.92 2.14-1.18 3.46-3.41 3.46-5.86 0-3.38-2.75-6.13-6.13-6.13H9.756z"></path></svg>`,
    repost: `<svg viewBox="0 0 24 24" aria-hidden="true" class="action-icon"><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 20.12l-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14z"></path></svg>`,
    heartOutline: `<svg viewBox="0 0 24 24" aria-hidden="true" class="action-icon"><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.807 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-2.415.11-4.304 2.08-4.304 4.58 0 4.39 5.868 9.29 9 11.23 3.132-1.94 9-6.84 9-11.23 0-2.5-1.889-4.47-4.303-4.58zm-4.697 13.92C8.75 17.29 5 13.1 5 10.08c0-1.45 1.07-2.58 2.39-2.63.99-.04 2.17.47 3.01 1.76l1.6 2.18 1.6-2.18c.84-1.29 2.02-1.8 3.01-1.76 1.32.05 2.39 1.18 2.39 2.63 0 3.02-3.75 7.21-7 9.34z"></path></svg>`,
    heartFilled: `<svg viewBox="0 0 24 24" aria-hidden="true" class="action-icon" style="fill: var(--like-color);"><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></svg>`,
    views: `<svg viewBox="0 0 24 24" aria-hidden="true" class="action-icon"><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></svg>`,
    bookmarkOutline: `<svg viewBox="0 0 24 24" aria-hidden="true" class="action-icon"><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v16.71a.75.75 0 0 1-1.215.59L12 16.48l-6.785 5.32a.75.75 0 0 1-1.215-.59V4.5zm2.5-.5a.5.5 0 0 0-.5.5v14.49l5.535-4.34a.75.75 0 0 1 .93 0L18 18.99V4.5c0-.28-.224-.5-.5-.5h-11z"></path></svg>`,
    bookmarkFilled: `<svg viewBox="0 0 24 24" aria-hidden="true" class="action-icon" style="fill: var(--accent-color);"><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v16.71a.75.75 0 0 1-1.215.59L12 16.48l-6.785 5.32a.75.75 0 0 1-1.215-.59V4.5z"></path></svg>`,
    share: `<svg viewBox="0 0 24 24" aria-hidden="true" class="action-icon"><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41L7.71 9.71 6.3 8.29 12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21.01 3 19.9 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></svg>`,
    more: `<svg viewBox="0 0 24 24" aria-hidden="true" class="icon-sm"><path d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path></svg>`
  };

  // --- TEXT FORMATTER (Highlight hashtags, handles, URLs) ---
  function formatTweetText(rawText) {
    if (!rawText) return '';
    const escaped = rawText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    return escaped
      .replace(/(#[\w\d_]+)/g, '<a href="#" class="post-link" data-search="$1">$1</a>')
      .replace(/(@[\w\d_]+)/g, '<a href="#" class="post-link" data-search="$1">$1</a>')
      .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="post-link">$1</a>');
  }

  // --- RENDER POSTS FEED ---
  function renderFeed() {
    const container = document.getElementById('postsFeedContainer');
    if (!container) return;

    // Filter posts
    let displayList = posts;

    // Filter by tab
    if (currentTab === 'following') {
      displayList = displayList.filter(p => p.isUserPost || followingUsers.has(p.handle));
    }

    // Filter by navigation
    if (activeNav === 'bookmarks') {
      displayList = displayList.filter(p => p.isBookmarked);
    } else if (activeNav === 'profile') {
      displayList = displayList.filter(p => p.isUserPost);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      displayList = displayList.filter(p =>
        p.text.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.handle.toLowerCase().includes(q)
      );
    }

    if (displayList.length === 0) {
      container.innerHTML = `
        <div style="padding: 48px 24px; text-align: center; color: var(--text-secondary);">
          <h3 style="font-size: 20px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">No posts to show</h3>
          <p style="font-size: 15px;">Try searching for another topic or explore what's happening.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = displayList.map(post => {
      const badgeIcon = post.verified
        ? (post.verifiedType === 'gold' ? ICONS.verifiedGold : ICONS.verifiedBlue)
        : '';

      const isPostLiked = post.isLiked;
      const isPostReposted = post.isReposted;
      const isPostBookmarked = post.isBookmarked;

      let mediaHtml = '';
      if (post.media) {
        mediaHtml = `
          <div class="post-media-container">
            <img src="${post.media}" alt="Post media" class="post-media-img" data-img-src="${post.media}">
          </div>
        `;
      } else if (post.linkCard) {
        mediaHtml = `
          <div class="post-link-card">
            <img src="${post.linkCard.image}" alt="" class="link-card-img">
            <div class="link-card-content">
              <div class="link-card-domain">${post.linkCard.domain}</div>
              <div class="link-card-title">${post.linkCard.title}</div>
            </div>
          </div>
        `;
      }

      return `
        <article class="post-card" data-post-id="${post.id}">
          <div class="post-avatar-col">
            <div class="avatar avatar-md" style="background: ${post.avatarBg};">
              <span>${post.avatarChar}</span>
            </div>
          </div>

          <div class="post-content-col">
            <div class="post-header-line">
              <div class="post-user-info">
                <span class="post-user-name">${post.author}</span>
                ${badgeIcon}
                <span class="post-user-handle">${post.handle}</span>
                <span class="post-dot">·</span>
                <time class="post-timestamp">${post.time}</time>
              </div>
              <button type="button" class="post-more-btn" data-action="options" data-id="${post.id}" aria-label="More options">
                ${ICONS.more}
              </button>
            </div>

            <div class="post-text">${formatTweetText(post.text)}</div>

            ${mediaHtml}

            <div class="post-actions-row">
              <button type="button" class="action-btn-group action-reply" data-action="reply" data-id="${post.id}" aria-label="Reply">
                <div class="action-icon-wrap">${ICONS.reply}</div>
                <span>${formatCount(post.replies)}</span>
              </button>

              <button type="button" class="action-btn-group action-repost ${isPostReposted ? 'active' : ''}" data-action="repost" data-id="${post.id}" aria-label="Repost">
                <div class="action-icon-wrap">${ICONS.repost}</div>
                <span>${formatCount(post.reposts)}</span>
              </button>

              <button type="button" class="action-btn-group action-like ${isPostLiked ? 'active' : ''}" data-action="like" data-id="${post.id}" aria-label="Like">
                <div class="action-icon-wrap">${isPostLiked ? ICONS.heartFilled : ICONS.heartOutline}</div>
                <span>${formatCount(post.likes)}</span>
              </button>

              <button type="button" class="action-btn-group action-views" data-action="views" data-id="${post.id}" aria-label="Views">
                <div class="action-icon-wrap">${ICONS.views}</div>
                <span>${post.views}</span>
              </button>

              <div class="action-extra-tools">
                <button type="button" class="action-btn-group action-bookmark ${isPostBookmarked ? 'active' : ''}" data-action="bookmark" data-id="${post.id}" aria-label="Bookmark">
                  <div class="action-icon-wrap">${isPostBookmarked ? ICONS.bookmarkFilled : ICONS.bookmarkOutline}</div>
                </button>
                <button type="button" class="action-btn-group action-share" data-action="share" data-id="${post.id}" aria-label="Share">
                  <div class="action-icon-wrap">${ICONS.share}</div>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // --- RENDER TRENDS ---
  function renderTrends() {
    const container = document.getElementById('trendsListContainer');
    if (!container) return;

    container.innerHTML = TRENDS_DATA.map(item => `
      <div class="trend-item" data-topic="${item.topic}">
        <div class="trend-info">
          <span class="trend-category">${item.category}</span>
          <span class="trend-tag">${item.topic}</span>
          <span class="trend-count">${item.count}</span>
        </div>
        <button type="button" class="trend-more-btn" aria-label="Options for this trend">
          ${ICONS.more}
        </button>
      </div>
    `).join('');
  }

  // --- RENDER WHO TO FOLLOW ---
  function renderWhoToFollow() {
    const container = document.getElementById('whoToFollowContainer');
    if (!container) return;

    container.innerHTML = WHO_TO_FOLLOW.map(user => {
      const isFollowing = followingUsers.has(user.handle);
      return `
        <div class="who-item" data-handle="${user.handle}">
          <div class="who-user-wrap">
            <div class="avatar avatar-md" style="background: ${user.avatarBg};">
              <span>${user.avatarChar}</span>
            </div>
            <div class="who-meta">
              <div class="who-name-line">
                <span class="who-name">${user.name}</span>
                ${user.verified ? ICONS.verifiedBlue : ''}
              </div>
              <span class="who-handle">${user.handle}</span>
            </div>
          </div>
          <button type="button" class="btn-follow ${isFollowing ? 'following' : ''}" data-action="follow-toggle" data-handle="${user.handle}">
            ${isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      `;
    }).join('');
  }

  // --- ACTION HANDLERS ---
  function handlePostAction(action, postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    switch (action) {
      case 'like':
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
        savePosts();
        renderFeed();
        break;

      case 'repost':
        post.isReposted = !post.isReposted;
        post.reposts += post.isReposted ? 1 : -1;
        savePosts();
        renderFeed();
        if (post.isReposted) showToast('Reposted to your profile');
        break;

      case 'bookmark':
        post.isBookmarked = !post.isBookmarked;
        savePosts();
        renderFeed();
        showToast(post.isBookmarked ? 'Added to your Bookmarks' : 'Removed from your Bookmarks');
        break;

      case 'share':
        if (navigator.clipboard) {
          navigator.clipboard.writeText(`https://x.com/${post.handle.replace('@', '')}/status/${post.id}`)
            .then(() => showToast('Copied link to clipboard'))
            .catch(() => showToast('Link ready to share'));
        } else {
          showToast('Copied link to clipboard');
        }
        break;

      case 'reply':
        openReplyModal(post);
        break;

      case 'options':
        if (post.isUserPost) {
          if (confirm('Delete this post?')) {
            posts = posts.filter(p => p.id !== postId);
            savePosts();
            renderFeed();
            showToast('Your post was deleted');
          }
        } else {
          showToast(`Not interested in ${post.handle}`);
        }
        break;
    }
  }

  // --- CREATE NEW POST ---
  function createPost(text, mediaUrl = '') {
    const trimmed = text.trim();
    if (!trimmed && !mediaUrl) return;

    const newPost = {
      id: 'post-' + Date.now(),
      author: CURRENT_USER.name,
      handle: CURRENT_USER.handle,
      verified: CURRENT_USER.verified,
      verifiedType: CURRENT_USER.verifiedType,
      avatarChar: CURRENT_USER.avatarChar,
      avatarBg: 'linear-gradient(135deg, #1d9bf0, #7856ff)',
      time: 'Just now',
      timestamp: Date.now(),
      text: trimmed,
      media: mediaUrl || null,
      replies: 0,
      reposts: 0,
      likes: 0,
      views: '1',
      isLiked: false,
      isReposted: false,
      isBookmarked: false,
      isUserPost: true
    };

    posts.unshift(newPost);
    savePosts();
    renderFeed();
    showToast('Your post was sent.');
  }

  // --- CHARACTER RING UPDATER ---
  function updateCharProgress(textarea, ringProgressEl, charWrapEl, charNumEl, submitBtn, hasMedia) {
    const len = textarea.value.length;
    const max = 280;
    const circumference = 69.115; // 2 * pi * 11

    if (len > 0 || hasMedia) {
      charWrapEl.hidden = false;
      submitBtn.disabled = len > max;
    } else {
      charWrapEl.hidden = true;
      submitBtn.disabled = true;
      return;
    }

    const ratio = Math.min(len / max, 1);
    const offset = circumference * (1 - ratio);
    ringProgressEl.style.strokeDashoffset = offset;

    // Ring colors based on threshold
    ringProgressEl.classList.remove('ring-warning', 'ring-danger');
    if (len >= max) {
      ringProgressEl.classList.add('ring-danger');
      charNumEl.hidden = false;
      charNumEl.textContent = max - len;
      charNumEl.style.color = '#f4212e';
    } else if (len >= max - 20) {
      ringProgressEl.classList.add('ring-warning');
      charNumEl.hidden = false;
      charNumEl.textContent = max - len;
      charNumEl.style.color = '#ffd400';
    } else {
      charNumEl.hidden = true;
    }
  }

  // --- REPLY MODAL LOGIC ---
  function openReplyModal(parentPost) {
    activeReplyPostId = parentPost.id;
    const previewContainer = document.getElementById('replyParentPostPreview');
    const dialog = document.getElementById('replyModalDialog');
    const textarea = document.getElementById('replyModalTextarea');
    const submitBtn = document.getElementById('submitReplyBtn');

    if (!dialog || !previewContainer) return;

    previewContainer.innerHTML = `
      <div class="post-avatar-col">
        <div class="avatar avatar-md" style="background: ${parentPost.avatarBg};">
          <span>${parentPost.avatarChar}</span>
        </div>
      </div>
      <div class="post-content-col">
        <div class="post-header-line">
          <div class="post-user-info">
            <span class="post-user-name">${parentPost.author}</span>
            ${parentPost.verified ? (parentPost.verifiedType === 'gold' ? ICONS.verifiedGold : ICONS.verifiedBlue) : ''}
            <span class="post-user-handle">${parentPost.handle}</span>
            <span class="post-dot">·</span>
            <time class="post-timestamp">${parentPost.time}</time>
          </div>
        </div>
        <div class="post-text">${formatTweetText(parentPost.text)}</div>
        <div style="margin-top: 8px; font-size: 14px; color: var(--text-secondary);">
          Replying to <span style="color: var(--accent-color);">${parentPost.handle}</span>
        </div>
      </div>
    `;

    textarea.value = '';
    submitBtn.disabled = true;
    dialog.showModal();
  }

  // --- THEME & ACCENT COLOR ---
  function applyTheme(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'light' ? '#ffffff' : (theme === 'dim' ? '#15202b' : '#000000'));
    }

    // Update radios in display modal
    document.querySelectorAll('input[name="bgTheme"]').forEach(radio => {
      const parent = radio.closest('.bg-option');
      if (radio.value === theme) {
        radio.checked = true;
        parent?.classList.add('active');
      } else {
        parent?.classList.remove('active');
      }
    });

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
      } catch (e) {}
    }
  }

  function applyColor(color, save = true) {
    document.documentElement.setAttribute('data-color', color);

    // Update swatches in modal
    document.querySelectorAll('.color-swatch-btn').forEach(btn => {
      if (btn.dataset.color === color) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEYS.COLOR, color);
      } catch (e) {}
    }
  }

  // --- ATTACH MODERN DIALOG LIGHT-DISMISS FALLBACKS ---
  // Guidance: modern-web-guidance for light-dismiss-a-dialog
  function setupDialogLightDismiss(dialog) {
    if (!dialog) return;
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isDialogContent) {
          dialog.close();
        }
      });
    }
  }

  // --- SAMPLE IMAGES FOR INSTANT COMPOSER TESTING ---
  const SAMPLE_IMAGES = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
  ];

  // --- INITIALIZE DOM LISTENERS ---
  function init() {
    loadState();
    renderFeed();
    renderTrends();
    renderWhoToFollow();

    // Register light dismiss on all dialogs
    document.querySelectorAll('dialog').forEach(setupDialogLightDismiss);

    // --- Tab Switching ---
    const tabForYou = document.getElementById('tabForYou');
    const tabFollowing = document.getElementById('tabFollowing');

    tabForYou?.addEventListener('click', () => {
      currentTab = 'for-you';
      tabForYou.classList.add('active');
      tabForYou.setAttribute('aria-selected', 'true');
      tabFollowing.classList.remove('active');
      tabFollowing.setAttribute('aria-selected', 'false');
      renderFeed();
    });

    tabFollowing?.addEventListener('click', () => {
      currentTab = 'following';
      tabFollowing.classList.add('active');
      tabFollowing.setAttribute('aria-selected', 'true');
      tabForYou.classList.remove('active');
      tabForYou.setAttribute('aria-selected', 'false');
      renderFeed();
    });

    // --- Navigation Links ---
    document.querySelectorAll('.nav-item[data-nav], .mobile-nav-item[data-nav]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const nav = item.dataset.nav;
        activeNav = nav;

        document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(el => el.classList.remove('active'));
        document.querySelectorAll(`[data-nav="${nav}"]`).forEach(el => el.classList.add('active'));

        if (nav === 'home') {
          searchQuery = '';
          const searchInput = document.getElementById('timelineSearchInput');
          if (searchInput) searchInput.value = '';
          document.getElementById('searchClearBtn').hidden = true;
          renderFeed();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (nav === 'bookmarks') {
          renderFeed();
          showToast('Viewing Bookmarks');
        } else if (nav === 'profile') {
          renderFeed();
          showToast(`Viewing ${CURRENT_USER.handle}`);
        } else {
          showToast(`Opened ${nav.charAt(0).toUpperCase() + nav.slice(1)}`);
        }
      });
    });

    // --- Inline Compose Box Logic ---
    let inlineAttachedMedia = '';
    const inlineTextarea = document.getElementById('inlinePostTextarea');
    const inlineRing = document.getElementById('inlineRingProgress');
    const inlineCharWrap = document.getElementById('inlineCharCountWrap');
    const inlineCharNum = document.getElementById('inlineCharNum');
    const inlineSubmitBtn = document.getElementById('inlineSubmitPostBtn');
    const inlineMediaPreview = document.getElementById('inlineMediaPreview');
    const inlineMediaImg = document.getElementById('inlineMediaImg');
    const inlineRemoveMediaBtn = document.getElementById('inlineRemoveMediaBtn');
    const inlineFileInput = document.getElementById('inlineFileInput');
    const inlineMediaUploadBtn = document.getElementById('inlineMediaUploadBtn');
    const inlineSampleImgBtn = document.getElementById('inlineSampleImgBtn');

    function syncInlineControls() {
      updateCharProgress(inlineTextarea, inlineRing, inlineCharWrap, inlineCharNum, inlineSubmitBtn, !!inlineAttachedMedia);
      if (inlineAttachedMedia) {
        inlineSubmitBtn.disabled = false;
      }
    }

    inlineTextarea?.addEventListener('input', () => {
      inlineTextarea.style.height = 'auto';
      inlineTextarea.style.height = inlineTextarea.scrollHeight + 'px';
      syncInlineControls();
    });

    inlineSampleImgBtn?.addEventListener('click', () => {
      const randomImg = SAMPLE_IMAGES[Math.floor(Math.random() * SAMPLE_IMAGES.length)];
      inlineAttachedMedia = randomImg;
      inlineMediaImg.src = randomImg;
      inlineMediaPreview.hidden = false;
      syncInlineControls();
    });

    inlineMediaUploadBtn?.addEventListener('click', () => {
      inlineFileInput?.click();
    });

    inlineFileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        inlineAttachedMedia = event.target.result;
        inlineMediaImg.src = inlineAttachedMedia;
        inlineMediaPreview.hidden = false;
        syncInlineControls();
      };
      reader.readAsDataURL(file);
    });

    inlineRemoveMediaBtn?.addEventListener('click', () => {
      inlineAttachedMedia = '';
      inlineMediaPreview.hidden = true;
      inlineMediaImg.src = '';
      if (inlineFileInput) inlineFileInput.value = '';
      syncInlineControls();
    });

    inlineSubmitBtn?.addEventListener('click', () => {
      createPost(inlineTextarea.value, inlineAttachedMedia);
      inlineTextarea.value = '';
      inlineTextarea.style.height = 'auto';
      inlineAttachedMedia = '';
      inlineMediaPreview.hidden = true;
      inlineMediaImg.src = '';
      syncInlineControls();
    });

    // --- Modal Compose Box Logic ---
    let modalAttachedMedia = '';
    const postModalDialog = document.getElementById('postModalDialog');
    const openSidebarPostModalBtn = document.getElementById('openSidebarPostModalBtn');
    const mobileFabBtn = document.getElementById('mobileFabBtn');
    const closePostModalBtn = document.getElementById('closePostModalBtn');
    const modalTextarea = document.getElementById('modalPostTextarea');
    const modalRing = document.getElementById('modalRingProgress');
    const modalCharWrap = document.getElementById('modalCharCountWrap');
    const modalCharNum = document.getElementById('modalCharNum');
    const modalSubmitBtn = document.getElementById('modalSubmitPostBtn');
    const modalMediaPreview = document.getElementById('modalMediaPreview');
    const modalMediaImg = document.getElementById('modalMediaImg');
    const modalRemoveMediaBtn = document.getElementById('modalRemoveMediaBtn');
    const modalFileInput = document.getElementById('modalFileInput');
    const modalMediaUploadBtn = document.getElementById('modalMediaUploadBtn');
    const modalSampleImgBtn = document.getElementById('modalSampleImgBtn');

    function syncModalControls() {
      updateCharProgress(modalTextarea, modalRing, modalCharWrap, modalCharNum, modalSubmitBtn, !!modalAttachedMedia);
      if (modalAttachedMedia) {
        modalSubmitBtn.disabled = false;
      }
    }

    function openPostModal() {
      modalTextarea.value = '';
      modalAttachedMedia = '';
      modalMediaPreview.hidden = true;
      syncModalControls();
      postModalDialog.showModal();
      setTimeout(() => modalTextarea.focus(), 50);
    }

    openSidebarPostModalBtn?.addEventListener('click', openPostModal);
    mobileFabBtn?.addEventListener('click', openPostModal);
    closePostModalBtn?.addEventListener('click', () => postModalDialog.close());

    modalTextarea?.addEventListener('input', () => {
      syncModalControls();
    });

    modalSampleImgBtn?.addEventListener('click', () => {
      const randomImg = SAMPLE_IMAGES[Math.floor(Math.random() * SAMPLE_IMAGES.length)];
      modalAttachedMedia = randomImg;
      modalMediaImg.src = randomImg;
      modalMediaPreview.hidden = false;
      syncModalControls();
    });

    modalMediaUploadBtn?.addEventListener('click', () => {
      modalFileInput?.click();
    });

    modalFileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        modalAttachedMedia = event.target.result;
        modalMediaImg.src = modalAttachedMedia;
        modalMediaPreview.hidden = false;
        syncModalControls();
      };
      reader.readAsDataURL(file);
    });

    modalRemoveMediaBtn?.addEventListener('click', () => {
      modalAttachedMedia = '';
      modalMediaPreview.hidden = true;
      modalMediaImg.src = '';
      if (modalFileInput) modalFileInput.value = '';
      syncModalControls();
    });

    modalSubmitBtn?.addEventListener('click', () => {
      createPost(modalTextarea.value, modalAttachedMedia);
      postModalDialog.close();
    });

    // --- Reply Modal Submission ---
    const replyModalDialog = document.getElementById('replyModalDialog');
    const closeReplyModalBtn = document.getElementById('closeReplyModalBtn');
    const replyTextarea = document.getElementById('replyModalTextarea');
    const submitReplyBtn = document.getElementById('submitReplyBtn');

    closeReplyModalBtn?.addEventListener('click', () => replyModalDialog.close());

    replyTextarea?.addEventListener('input', () => {
      submitReplyBtn.disabled = !replyTextarea.value.trim();
    });

    submitReplyBtn?.addEventListener('click', () => {
      const text = replyTextarea.value.trim();
      if (!text || !activeReplyPostId) return;

      const parent = posts.find(p => p.id === activeReplyPostId);
      if (parent) {
        parent.replies += 1;
      }

      createPost(`Replying to ${parent ? parent.handle : ''}: ${text}`);
      replyModalDialog.close();
      showToast('Your reply was sent');
    });

    // --- Post Feed Delegated Events (Clicks on Like, Repost, Bookmark, Share, Media) ---
    const feedContainer = document.getElementById('postsFeedContainer');
    feedContainer?.addEventListener('click', (e) => {
      // Check for action buttons
      const btn = e.target.closest('[data-action]');
      if (btn) {
        e.stopPropagation();
        const action = btn.dataset.action;
        const id = btn.dataset.id;
        handlePostAction(action, id);
        return;
      }

      // Check for image click -> open lightbox
      const img = e.target.closest('.post-media-img');
      if (img) {
        e.stopPropagation();
        const lightbox = document.getElementById('lightboxModalDialog');
        const lightboxImg = document.getElementById('lightboxImg');
        if (lightbox && lightboxImg) {
          lightboxImg.src = img.dataset.imgSrc || img.src;
          lightbox.showModal();
        }
        return;
      }

      // Check for hashtag or mention clicks
      const link = e.target.closest('.post-link[data-search]');
      if (link) {
        e.preventDefault();
        e.stopPropagation();
        const term = link.dataset.search;
        const searchInput = document.getElementById('timelineSearchInput');
        if (searchInput) {
          searchInput.value = term;
          searchQuery = term;
          document.getElementById('searchClearBtn').hidden = false;
          renderFeed();
        }
      }
    });

    // --- Lightbox Close ---
    const lightboxModalDialog = document.getElementById('lightboxModalDialog');
    const closeLightboxBtn = document.getElementById('closeLightboxBtn');
    closeLightboxBtn?.addEventListener('click', () => lightboxModalDialog.close());

    // --- Search Input ---
    const searchInput = document.getElementById('timelineSearchInput');
    const searchClearBtn = document.getElementById('searchClearBtn');

    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      searchClearBtn.hidden = !searchQuery;
      renderFeed();
    });

    searchClearBtn?.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.hidden = true;
      renderFeed();
      searchInput.focus();
    });

    // --- Trends Click to Search ---
    const trendsContainer = document.getElementById('trendsListContainer');
    trendsContainer?.addEventListener('click', (e) => {
      const item = e.target.closest('.trend-item');
      if (item && item.dataset.topic) {
        const topic = item.dataset.topic;
        if (searchInput) {
          searchInput.value = topic;
          searchQuery = topic;
          searchClearBtn.hidden = false;
          renderFeed();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });

    // --- Who To Follow Toggle ---
    const whoContainer = document.getElementById('whoToFollowContainer');
    whoContainer?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="follow-toggle"]');
      if (!btn) return;

      const handle = btn.dataset.handle;
      if (followingUsers.has(handle)) {
        followingUsers.delete(handle);
        showToast(`Unfollowed ${handle}`);
      } else {
        followingUsers.add(handle);
        showToast(`Followed ${handle}`);
      }
      saveFollows();
      renderWhoToFollow();
      if (currentTab === 'following') renderFeed();
    });

    // --- More Menu & Popovers ---
    const moreMenuBtn = document.getElementById('moreMenuBtn');
    const moreMenuDropdown = document.getElementById('moreMenuDropdown');
    const userCardBtn = document.getElementById('userCardBtn');
    const userCardDropdown = document.getElementById('userCardDropdown');

    moreMenuBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = moreMenuDropdown.hidden;
      moreMenuDropdown.hidden = !isHidden;
      userCardDropdown.hidden = true;
    });

    userCardBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = userCardDropdown.hidden;
      userCardDropdown.hidden = !isHidden;
      moreMenuDropdown.hidden = true;
    });

    document.addEventListener('click', () => {
      if (moreMenuDropdown) moreMenuDropdown.hidden = true;
      if (userCardDropdown) userCardDropdown.hidden = true;
    });

    // --- Display & Customization Dialog ---
    const displayModalDialog = document.getElementById('displayModalDialog');
    const openDisplaySettingsBtn = document.getElementById('openDisplaySettingsBtn');
    const closeDisplayModalBtn = document.getElementById('closeDisplayModalBtn');
    const feedHeaderSettingsBtn = document.getElementById('feedHeaderSettingsBtn');

    function openDisplayDialog() {
      moreMenuDropdown.hidden = true;
      displayModalDialog.showModal();
    }

    openDisplaySettingsBtn?.addEventListener('click', openDisplayDialog);
    feedHeaderSettingsBtn?.addEventListener('click', openDisplayDialog);
    closeDisplayModalBtn?.addEventListener('click', () => displayModalDialog.close());

    // Color swatches click
    document.querySelectorAll('.color-swatch-btn').forEach(swatch => {
      swatch.addEventListener('click', () => {
        applyColor(swatch.dataset.color);
      });
    });

    // Background radios click
    document.querySelectorAll('input[name="bgTheme"]').forEach(radio => {
      radio.addEventListener('change', () => {
        applyTheme(radio.value);
      });
    });

    // --- Shortcuts Dialog ---
    const shortcutsModalDialog = document.getElementById('shortcutsModalDialog');
    const openShortcutsBtn = document.getElementById('openShortcutsBtn');
    const closeShortcutsModalBtn = document.getElementById('closeShortcutsModalBtn');

    openShortcutsBtn?.addEventListener('click', () => {
      moreMenuDropdown.hidden = true;
      shortcutsModalDialog.showModal();
    });
    closeShortcutsModalBtn?.addEventListener('click', () => shortcutsModalDialog.close());

    // --- Reset Demo Feed ---
    const resetDataBtn = document.getElementById('resetDataBtn');
    resetDataBtn?.addEventListener('click', () => {
      if (confirm('Reset timeline to initial sample posts?')) {
        posts = INITIAL_POSTS;
        savePosts();
        renderFeed();
        showToast('Timeline reset');
      }
    });

    // --- Subscribe Button ---
    const subscribeBtn = document.getElementById('subscribeBtn');
    subscribeBtn?.addEventListener('click', () => {
      showToast('X Premium subscription activated');
    });

    // --- Show More Buttons ---
    document.getElementById('showMoreTrendsBtn')?.addEventListener('click', () => {
      showToast('Showing all trends');
    });
    document.getElementById('showMoreWhoBtn')?.addEventListener('click', () => {
      showToast('Showing more suggestions');
    });

    // --- Keyboard Shortcuts Global Handler ---
    document.addEventListener('keydown', (e) => {
      // Don't trigger if typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        return;
      }

      if (e.key === 'n') {
        e.preventDefault();
        openPostModal();
      } else if (e.key === '/') {
        e.preventDefault();
        searchInput?.focus();
      } else if (e.key === '.') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Register Service Worker for offline capability when hosted on HTTP/S
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(err => {
        console.info('Service Worker registration skipped:', err);
      });
    });
  }

  // Execute on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
