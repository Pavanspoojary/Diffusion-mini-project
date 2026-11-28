/**
 * URL Utilities and Sanitization
 */

/**
 * Strips referral, tracking, and sharing parameters from Instagram URLs
 * (e.g. ?igsh=..., ?knvt=..., ?lqvp=..., ?dmpr=..., ?utm_source=...)
 * so opening them never triggers the "_<user> shared this with you" referral popup.
 *
 * @param {string} url - The URL to clean.
 * @returns {string} - Clean canonical URL.
 */
export function cleanInstagramUrl(url) {
  if (!url || typeof url !== 'string') return url;
  if (!url.includes('instagram.com')) return url;
  try {
    const parsed = new URL(url);
    parsed.search = '';
    parsed.hash = '';
    let pathname = parsed.pathname;
    if (!pathname.endsWith('/')) {
      pathname += '/';
    }
    return `https://${parsed.host}${pathname}`;
  } catch {
    return url.split('?')[0];
  }
}
