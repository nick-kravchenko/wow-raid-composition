import { DatePipe } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';

import { wclStatsData } from '../_data/wcl-stats.data';
import type { WclStatsRow } from '../_data/wcl-stats.data';
import { formatRaidDuration, formatRank, isRankingRowVisible } from './wcl-stats.helpers';

declare global {
  interface Window {
    yobanaBleatRusnia(): boolean;
  }
}

const RUSSIAN_UI_STORAGE_KEY = 'yobanaBleatRusnia';
const SHOW_UA_STORAGE_KEY = 'wclStatsShowUaGuilds';
const SHOW_RU_STORAGE_KEY = 'wclStatsShowRuGuilds';

@Component({
  selector: 'app-wcl-stats',
  imports: [DatePipe],
  templateUrl: './wcl-stats.component.html',
  styleUrl: './wcl-stats.component.scss',
})
export class WclStatsComponent implements OnDestroy {
  readonly data = wclStatsData;
  readonly raids = [...wclStatsData.raids].sort((a, b) => a.id === 'tk' ? -1 : b.id === 'tk' ? 1 : 0);
  readonly showUaGuilds = signal(readStoredBoolean(SHOW_UA_STORAGE_KEY, true));
  readonly showRuGuilds = signal(readStoredBoolean(SHOW_RU_STORAGE_KEY, false));
  readonly showRuControl = signal(false);
  readonly formatDuration = formatRaidDuration;
  readonly formatRank = formatRank;
  private readonly storagePollId: number;

  constructor() {
    window.yobanaBleatRusnia = (): boolean => {
      const enabled = localStorage.getItem(RUSSIAN_UI_STORAGE_KEY) !== 'true';
      localStorage.setItem(RUSSIAN_UI_STORAGE_KEY, String(enabled));
      return enabled;
    };
    this.syncRussianUiAccess();
    this.storagePollId = window.setInterval(() => this.syncRussianUiAccess(), 500);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.storagePollId);
  }

  visibleRows(rows: readonly WclStatsRow[]): WclStatsRow[] {
    return rows.filter(row => isRankingRowVisible(
      row,
      this.showUaGuilds(),
      this.showRuControl(),
      this.showRuGuilds(),
    ));
  }

  setUaVisibility(event: Event): void {
    const visible = (event.target as HTMLInputElement).checked;
    this.showUaGuilds.set(visible);
    localStorage.setItem(SHOW_UA_STORAGE_KEY, String(visible));
  }

  setRuVisibility(event: Event): void {
    const visible = (event.target as HTMLInputElement).checked;
    this.showRuGuilds.set(visible);
    localStorage.setItem(SHOW_RU_STORAGE_KEY, String(visible));
  }

  private syncRussianUiAccess(): void {
    const enabled = localStorage.getItem(RUSSIAN_UI_STORAGE_KEY) === 'true';
    this.showRuControl.set(enabled);
  }
}

function readStoredBoolean(key: string, defaultValue: boolean): boolean {
  const stored = localStorage.getItem(key);
  return stored === null ? defaultValue : stored === 'true';
}
