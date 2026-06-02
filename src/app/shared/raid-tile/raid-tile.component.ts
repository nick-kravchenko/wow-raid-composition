import { Component, ElementRef, computed, inject, input, linkedSignal, output, signal, viewChild } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { Character } from '../../_entities/character';
import { CharacterRole } from '../../_entities/character-role.enum';
import { CharacterRank } from '../../_entities/character-rank.enum';
import { CharacterTileComponent } from '../character-tile/character-tile.component';
import { RouterLink } from '@angular/router';
import { BitlyService } from '../bitly.service';
import { wclBakedData } from '../../_data/wcl-baked.data';
import { buildRaidDamageSummary, formatRaidDamage } from './raid-damage-summary';

@Component({
  selector: 'app-raid-tile',
  imports: [
    CharacterTileComponent,
    LowerCasePipe,
    RouterLink,
  ],
  templateUrl: './raid-tile.component.html',
  styleUrl: './raid-tile.component.scss'
})
export class RaidTileComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private bitlyService = inject(BitlyService);
  private queryParams = toSignal(this.route.queryParams, { initialValue: {} });

  title = input('Raid #');
  titleKey = input<string>('title');
  raid = input<any[]>(new Array(25));
  raidSize = input<number>(25);
  hideControls = input<boolean>(false);

  onSlotClick = output<number>();
  onDragOver = output<number>();
  onSlotDragStart = output<number>();
  onSlotDragEnd = output<void>();
  onPruneClick = output<void>();
  onRemoveClick = output<void>();

  bench = input<any[]>([]);
  onBenchSlotClick = output<number>();
  onBenchDragOver = output<number>();
  onBenchSlotDragStart = output<number>();

  raidGroups = viewChild<ElementRef>('raidGroups');

  pruneModalVisible = signal(false);
  removeModalVisible = signal(false);
  capturingScreenshot = signal(false);
  editingTitle = signal(false);
  sharing = signal(false);
  shareCopied = signal(false);
  titleValue = linkedSignal(() => (this.queryParams() as Record<string, string>)[this.titleKey()] ?? this.title());

  titleInput = viewChild<ElementRef<HTMLInputElement>>('titleInput');

  mainCounter = computed(() => this.raid().filter((c: Character) => !!c && c.rank === CharacterRank.main).length);
  altCounter = computed(() => this.raid().filter((c: Character) => !!c && c.rank === CharacterRank.alt).length);
  tankCount = computed(() => this.raid().filter((c: Character) => !!c && c.role === CharacterRole.tank).length);
  meleeCount = computed(() => this.raid().filter((c: Character) => !!c && c.role === CharacterRole.melee).length);
  rangedCount = computed(() => this.raid().filter((c: Character) => !!c && c.role === CharacterRole.ranged).length);
  healerCount = computed(() => this.raid().filter((c: Character) => !!c && c.role === CharacterRole.healer).length);
  queryParamsRaid = computed(() => this.raid().map((c: Character) => c?.name || '').join('_'));
  raidDamageSummary = computed(() => buildRaidDamageSummary(this.raid(), wclBakedData.characters));
  formatRaidDamage = formatRaidDamage;

  startTitleEdit(): void {
    this.editingTitle.set(true);
    setTimeout(() => this.titleInput()?.nativeElement.focus(), 0);
  }

  submitTitleEdit(event: Event): void {
    event.preventDefault();
    this.editingTitle.set(false);
  }

  onTitleChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.titleValue.set(value);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { [this.titleKey()]: value },
      queryParamsHandling: 'merge',
    });
  }

  export(): void {
    navigator.clipboard.writeText(this.raid().map(c => c?.name).join('\n'));
  }

  screenshot(): void {
    this.capturingScreenshot.set(true);
    html2canvas(this.raidGroups()!.nativeElement, {
      backgroundColor: '#404040'
    }).then((canvas: any) => {
      canvas.toBlob((blob: any) => {
        navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
      });
    }).finally(() => {
      this.capturingScreenshot.set(false);
    });
  }

  shareLink(): void {
    this.sharing.set(true);
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set('raids', this.queryParamsRaid());
    url.searchParams.set('title0', this.titleValue());
    url.searchParams.set('raidSize', String(this.raidSize()));
    const benchNames = this.bench().map((c: Character) => c?.name ?? '').join('_');
    if (benchNames) url.searchParams.set('benches', benchNames);
    this.bitlyService.shorten(url.toString()).subscribe(link => {
      navigator.clipboard.writeText(link);
      this.sharing.set(false);
      this.shareCopied.set(true);
      setTimeout(() => { this.shareCopied.set(false); }, 2000);
    });
  }

  ping(): void {
    const rows: string[] = [];
    for (let i = 0; i < this.raidSize(); i += 5) {
      const group = this.raid().slice(i, i + 5);
      const mentions = group
        .filter((c: Character) => c?.player?.discord?.userId)
        .map((c: Character) => `<@${c.player?.discord?.userId}>`);
      if (mentions.length > 0) {
        rows.push(mentions.join(' '));
      }
    }
    const kravaCharacter = this.raid().find((c: Character) => c?.player?.name === 'Krava');
    rows.push(`\`\`\`/w ${kravaCharacter?.name} 123\`\`\``);
    navigator.clipboard.writeText(rows.join('\n'));
  }
}
