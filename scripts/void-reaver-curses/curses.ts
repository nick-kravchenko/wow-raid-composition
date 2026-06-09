/**
 * Offensive-curse classification for the Void Reaver warlock matrix.
 *
 * Game IDs are rank-agnostic (all ranks of each curse from TBC). Matching is by
 * spell `guid` first; a name `startsWith` fallback guards against IDs we missed.
 */

export type CurseCode = 'CoE' | 'CoR' | 'CoD';

/** Render order for cells, regardless of cast order. */
export const CURSE_ORDER: readonly CurseCode[] = ['CoE', 'CoR', 'CoD'];

const CURSE_IDS: Record<CurseCode, ReadonlySet<number>> = {
  // Curse of the Elements
  CoE: new Set([1490, 11721, 11722, 27228]),
  // Curse of Recklessness
  CoR: new Set([704, 7658, 7659, 11717, 27226]),
  // Curse of Doom
  CoD: new Set([603, 30910]),
};

const CURSE_NAME_PREFIX: Record<CurseCode, string> = {
  CoE: 'curse of the elements',
  CoR: 'curse of recklessness',
  CoD: 'curse of doom',
};

/** Colored-circle marker per curse. */
const CURSE_EMOJI: Record<CurseCode, string> = {
  CoE: '🟣', // purple — Curse of the Elements
  CoR: '🔴', // red    — Curse of Recklessness
  CoD: '💀', // black  — Curse of Doom
};

/**
 * Classify a cast ability into one of the three tracked curses.
 * Returns null for anything else (including Curse of Shadow/Tongues/Weakness).
 */
export function classifyCurse(
  guid: number | null | undefined,
  name: string | null | undefined,
): CurseCode | null {
  if (typeof guid === 'number') {
    for (const code of CURSE_ORDER) {
      if (CURSE_IDS[code].has(guid)) return code;
    }
  }

  if (typeof name === 'string' && name.trim() !== '') {
    const lower = name.trim().toLowerCase();
    for (const code of CURSE_ORDER) {
      if (lower.startsWith(CURSE_NAME_PREFIX[code])) return code;
    }
  }

  return null;
}

/** Format a set of curses for a table cell in canonical order, with emoji markers. */
export function formatCurseCell(curses: ReadonlySet<CurseCode>): string {
  return CURSE_ORDER.filter((c) => curses.has(c))
    .map((c) => `${CURSE_EMOJI[c]} ${c}`)[0] || '';
}
