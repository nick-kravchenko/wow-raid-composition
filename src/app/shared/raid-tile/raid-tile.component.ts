import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { Character } from '../../_entities/character';
import { CharacterRole } from '../../_entities/character-role.enum';
import { CharacterRank } from '../../_entities/character-rank.enum';
import {CharacterTileComponent} from '../character-tile/character-tile.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-raid-tile',
  imports: [
    CharacterTileComponent,
    NgForOf
  ],
  templateUrl: './raid-tile.component.html',
  styleUrl: './raid-tile.component.scss'
})
export class RaidTileComponent implements OnInit {
  @Input() title = 'Raid #';
  @Input() raid: any[] = new Array(40);
  @Output() onSlotClick: EventEmitter<number> = new EventEmitter();
  @Output() onDragOver: EventEmitter<number> = new EventEmitter();
  @Output() onSlotDragStart: EventEmitter<number> = new EventEmitter();
  @Output() onSlotDragEnd: EventEmitter<any> = new EventEmitter();
  @Output() onPruneClick: EventEmitter<any> = new EventEmitter();
  @Output() onRemoveClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('raidGroups') raidGroups!: ElementRef;

  pruneModalVisible = false;
  removeModalVisible = false;
  capturingScreenshot = false;

  get mainCounter(): number {
    return this.raid.filter((character: Character) => !!character && character.rank === CharacterRank.main).length;
  }

  get altCounter(): number {
    return this.raid.filter((character: Character) => !!character && character.rank === CharacterRank.alt).length;
  }

  get tankCount(): number {
    return this.raid.filter((character: Character) => !!character && character.role === CharacterRole.tank).length;
  }
  get meleeCount(): number {
    return this.raid.filter((character: Character) => !!character && character.role === CharacterRole.melee).length;
  }
  get rangedCount(): number {
    return this.raid.filter((character: Character) => !!character && character.role === CharacterRole.ranged).length;
  }
  get healerCount(): number {
    return this.raid.filter((character: Character) => !!character && character.role === CharacterRole.healer).length;
  }

  constructor() {}

  ngOnInit(): void {}

  export(): void {
    navigator.clipboard.writeText(this.raid.map(c => c?.name).join('\n'));
  }

  screenshot(): void {
    this.capturingScreenshot = true;
    html2canvas(this.raidGroups.nativeElement, {
      backgroundColor: '#404040'
    }).then((canvas: any) => {
      canvas.toBlob((blob: any) => {
        // @ts-ignore
        navigator.clipboard.write([new ClipboardItem({'image/png': blob})])
      });
    }).finally(() => {
      setTimeout(() => {
        this.capturingScreenshot = false;
      }, 500);
    });
  }

  ping(): void {
    let message = '';
    for (let i = 0; i < this.raid.length / 2; i++) {
      message += `<@${this.raid[i]?.player?.discord?.userId}> <@${this.raid[i + 5]?.player?.discord?.userId}>\n`;
    }
    const kravaCharacter = this.raid.find((character: Character) => character?.player?.name === 'Krava');
    message += `\`\`\`/w ${kravaCharacter?.name} 123\`\`\``;
    navigator.clipboard.writeText(message);
  }
}
