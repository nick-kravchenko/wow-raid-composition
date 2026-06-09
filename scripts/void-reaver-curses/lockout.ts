/**
 * Weekly raid-lockout bucketing.
 *
 * A lockout = the raid reset week a kill falls in. Reset day is region-derived
 * (EU = Wednesday, US = Tuesday); the reset hour is configurable for timezone
 * edge cases. This is a deliberate approximation: math is done in UTC with a
 * fixed hour offset rather than full IANA timezone/DST handling, which is good
 * enough to bucket kills into the correct week.
 */

const HOUR_MS = 3_600_000;
const DAY_MS = 86_400_000;

export interface LockoutBucket {
  /** Epoch ms of the reset boundary that opens this lockout. Use as a sort/group key. */
  key: number;
  /** Human-readable column header, e.g. "2026-06-03". */
  label: string;
}

/** 0=Sun … 3=Wed … 6=Sat. EU resets Wednesday, US resets Tuesday. */
function resetDayOfWeek(region: string): number {
  return region.trim().toLowerCase() === 'us' ? 2 : 3;
}

/** Region default reset hour (UTC-ish) when WCL_RESET_HOUR is unset. */
export function defaultResetHour(region: string): number {
  return region.trim().toLowerCase() === 'us' ? 15 : 7;
}

function ymd(epochMs: number): string {
  const d = new Date(epochMs);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Map a kill's start time to the lockout (reset week) it belongs to.
 */
export function lockoutBucket(
  startTimeMs: number,
  region: string,
  resetHour: number,
): LockoutBucket {
  const resetDow = resetDayOfWeek(region);

  // Shift back by the reset hour so a reset moment lands on a UTC day boundary.
  const shifted = startTimeMs - resetHour * HOUR_MS;
  const d = new Date(shifted);
  const dayStart = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());

  const daysSinceReset = (d.getUTCDay() - resetDow + 7) % 7;
  const boundaryShifted = dayStart - daysSinceReset * DAY_MS;

  // Re-add the offset to recover the real reset epoch for labeling.
  const key = boundaryShifted + resetHour * HOUR_MS;
  return { key, label: ymd(key) };
}