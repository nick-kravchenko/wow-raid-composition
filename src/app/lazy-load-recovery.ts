const RECOVERY_KEY = 'lazy-load-recovery-url';

/** Recover stale deployment chunks once per destination in this tab. */
export function recoverLazyLoad(
  error: unknown,
  url: string,
  browser: Pick<Window, 'sessionStorage' | 'location'>,
): boolean {
  if (!(error instanceof Error) || !/Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i.test(error.message)) {
    return false;
  }

  try {
    // If storage is unavailable, skip recovery: we cannot safely prevent loops.
    if (browser.sessionStorage.getItem(RECOVERY_KEY) === url) return false;
    browser.sessionStorage.setItem(RECOVERY_KEY, url);
    browser.location.assign(url);
    return true;
  } catch {
    return false;
  }
}
