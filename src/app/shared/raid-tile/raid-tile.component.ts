import { Component, ElementRef, computed, input, output, viewChild, WritableSignal, signal } from '@angular/core';
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
  title = input('Raid #');
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

  pruneModalVisible: WritableSignal<boolean> = signal(false);
  removeModalVisible: WritableSignal<boolean> = signal(false);
  capturingScreenshot: WritableSignal<boolean> = signal(false);

  mainCounter = computed(() =>
    this.raid().filter((c: Character) => !!c && c.rank === CharacterRank.main).length
  );

  altCounter = computed(() =>
    this.raid().filter((c: Character) => !!c && c.rank === CharacterRank.alt).length
  );

  tankCount = computed(() =>
    this.raid().filter((c: Character) => !!c && c.role === CharacterRole.tank).length
  );

  meleeCount = computed(() =>
    this.raid().filter((c: Character) => !!c && c.role === CharacterRole.melee).length
  );

  rangedCount = computed(() =>
    this.raid().filter((c: Character) => !!c && c.role === CharacterRole.ranged).length
  );

  healerCount = computed(() =>
    this.raid().filter((c: Character) => !!c && c.role === CharacterRole.healer).length
  );

  queryParamsRaid = computed(() =>
    this.raid().map((c: Character) => c?.name || '').join('_')
  );

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
