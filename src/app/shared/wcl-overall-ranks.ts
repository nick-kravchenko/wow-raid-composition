import type { WclOverallRank } from '../_data/wcl-baked.data';

export interface OverallRankDisplayValue {
  rank: number | null;
  total: number | null;
  bestAmount?: number | null;
  metric?: 'dps-bosses' | 'dps-bosses-trash' | 'hps';
}

export function formatOverallRank(rank: OverallRankDisplayValue): string {
  if (rank.bestAmount !== null && typeof rank.bestAmount !== 'undefined') {
    const unit = rank.metric === 'hps' ? 'HPS' : 'DPS';
    return `${rank.bestAmount.toLocaleString('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })} ${unit}`;
  }
  if (rank.rank === null) return '-';
  if (rank.total === null) return `#${rank.rank}`;
  return `#${rank.rank} / ${rank.total}`;
}

export function filterOverallDamageRanks(ranks: WclOverallRank[]): WclOverallRank[] {
  return ranks.filter(rank =>
    (rank.raid === 'ssc' || rank.raid === 'tk') &&
    (rank.metric === 'dps-bosses' || rank.metric === 'dps-bosses-trash')
  );
}
