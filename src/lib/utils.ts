/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://zhekaby.github.io';
export const AUTHOR_NAME = 'Evgenij Zabolotskih';
export const TWITTER_HANDLE = '';

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const [year, month] = dateStr.split('-').map(Number);
  if (!year || !month) return dateStr;
  const date = new Date(Date.UTC(year, month - 1, 1));
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
