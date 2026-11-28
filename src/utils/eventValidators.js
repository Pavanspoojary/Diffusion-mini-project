import { INTERNAL_GOOGLE_FORM_URL } from '../data/initialData.js';

/**
 * Validates a single event object to ensure all required fields and business constraints are met.
 *
 * @param {Object} event - The event object to validate.
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateEvent(event) {
  const errors = [];

  if (!event || typeof event !== 'object') {
    return { valid: false, errors: ['Event must be a non-null object.'] };
  }

  if (!event.id || typeof event.id !== 'string') {
    errors.push('Event ID is required and must be a string.');
  }

  if (!['internal', 'external'].includes(event.type)) {
    errors.push(`Invalid event type "${event.type}". Must be "internal" or "external".`);
  }

  if (!event.title || typeof event.title !== 'string' || event.title.trim().length === 0) {
    errors.push('Event title is required.');
  }

  if (!event.organizer || typeof event.organizer !== 'string') {
    errors.push('Event organizer is required.');
  }

  if (!event.date || typeof event.date !== 'string') {
    errors.push('Event date is required.');
  }

  if (!event.deadline || typeof event.deadline !== 'string') {
    errors.push('Event deadline is required.');
  }

  // Type-specific link verification
  if (event.type === 'internal') {
    if (event.link && event.link !== INTERNAL_GOOGLE_FORM_URL) {
      errors.push(`Internal event link must point to the verified Google Form (${INTERNAL_GOOGLE_FORM_URL}). Found: ${event.link}`);
    }
  } else if (event.type === 'external') {
    if (event.link && event.link.includes('instagram.com')) {
      errors.push('External event link must not be an Instagram URL.');
    }
    if (event.link && !/^https?:\/\//i.test(event.link)) {
      errors.push(`External event link must be a valid HTTP(S) URL. Found: ${event.link}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validates an array of events and returns an aggregated result.
 *
 * @param {Array<Object>} events - Array of events to validate.
 * @returns {{ allValid: boolean, results: Record<string, { valid: boolean, errors: string[] }> }}
 */
export function validateAllEvents(events) {
  if (!Array.isArray(events)) {
    return { allValid: false, results: { root: { valid: false, errors: ['Events must be an array.'] } } };
  }

  const results = {};
  let allValid = true;

  events.forEach((evt, idx) => {
    const key = evt?.id || `index_${idx}`;
    const result = validateEvent(evt);
    results[key] = result;
    if (!result.valid) {
      allValid = false;
    }
  });

  return {
    allValid,
    results
  };
}
