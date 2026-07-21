export function formatRaidDuration(durationMs: number | null): string {
  if (durationMs === null || !Number.isFinite(durationMs) || durationMs <= 0) return '-';
  const totalSeconds = Math.floor(durationMs / 1_000);
  const hours = Math.floor(totalSeconds / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map(value => String(value).padStart(2, '0')).join(':');
}

export function formatRank(rank: number | null): string {
  return rank === null ? '-' : `#${rank}`;
}

export function isRankingRowVisible(
  row: { rank: number | null; guildGroup: 'milestone' | 'ua' | 'ru' },
  showUa: boolean,
  showRuControl: boolean,
  showRu: boolean,
): boolean {
  if (row.guildGroup === 'milestone' || row.rank === 1 || row.rank === 50 || row.rank === 100) return true;
  if (row.guildGroup === 'ua') return showUa;
  return showRuControl && showRu;
}
