import { Component, ElementRef, computed, inject, input, linkedSignal, output, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { Character } from '../../_entities/character';
import { CharacterRole } from '../../_entities/character-role.enum';
import { CharacterRank } from '../../_entities/character-rank.enum';
import { CharacterTileComponent } from '../character-tile/character-tile.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-raid-tile',
  imports: [
    CharacterTileComponent,
    RouterLink,
  ],
  templateUrl: './raid-tile.component.html',
  styleUrl: './raid-tile.component.scss'
})
export class RaidTileComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
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

  raidGroups = viewChild<ElementRef>('raidGroups');

  pruneModalVisible = signal(false);
  removeModalVisible = signal(false);
  capturingScreenshot = signal(false);
  editingTitle = signal(false);
  titleValue = linkedSignal(() => (this.queryParams() as Record<string, string>)[this.titleKey()] ?? this.title());

  titleInput = viewChild<ElementRef<HTMLInputElement>>('titleInput');

  mainCounter = computed(() => this.raid().filter((c: Character) => !!c && c.rank === CharacterRank.main).length);
  altCounter = computed(() => this.raid().filter((c: Character) => !!c && c.rank === CharacterRank.alt).length);
  tankCount = computed(() => this.raid().filter((c: Character) => !!c && c.role === CharacterRole.tank).length);
  meleeCount = computed(() => this.raid().filter((c: Character) => !!c && c.role === CharacterRole.melee).length);
  rangedCount = computed(() => this.raid().filter((c: Character) => !!c && c.role === CharacterRole.ranged).length);
  healerCount = computed(() => this.raid().filter((c: Character) => !!c && c.role === CharacterRole.healer).length);
  queryParamsRaid = computed(() => this.raid().map((c: Character) => c?.name || '').join('_'));

  toggleTitleEdit(): void {
    const nowEditing = !this.editingTitle();
    this.editingTitle.set(nowEditing);
    if (nowEditing) {
      setTimeout(() => this.titleInput()?.nativeElement.focus(), 0);
    }
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
