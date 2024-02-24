import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { Character } from 'src/app/_entities/character';
import { CharacterRole } from '../../_entities/character-role.enum';

@Component({
  selector: 'app-raid-tile',
  templateUrl: './raid-tile.component.html',
  styleUrls: ['./raid-tile.component.scss']
})
export class RaidTileComponent implements OnInit {
  @Input() title = 'Raid #';
  @Input() raid: any[] = new Array(10);
  @Output() onSlotClick: EventEmitter<number> = new EventEmitter();
  @Output() onDragOver: EventEmitter<number> = new EventEmitter();
  @Output() onSlotDragStart: EventEmitter<number> = new EventEmitter();
  @Output() onSlotDragEnd: EventEmitter<any> = new EventEmitter();
  @Output() onPruneClick: EventEmitter<any> = new EventEmitter();
  @Output() onRemoveClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('raidGroups') raidGroups!: ElementRef;

  capturingScreenshot = false;

  get tankCount() {
    return this.raid.filter((character: Character) => !!character && character.role === CharacterRole.tank).length;
  }
  get meleeCount() {
    return this.raid.filter((character: Character) => !!character && character.role === CharacterRole.melee).length;
  }
  get rangedCount() {
    return this.raid.filter((character: Character) => !!character && character.role === CharacterRole.ranged).length;
  }
  get healerCount() {
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
    }).then(canvas => {
      canvas.toBlob(blob => {
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
    const message = this.raid.reduce((m: string, character: Character, i: number) => {
      if (character) {
        m += `<@${character.player?.discord?.userId}> `;
      }

      if (i > 0 && i % 2) {
        m += '\n';
      }
      return m;
    }, '');
    navigator.clipboard.writeText(message);
  }
}
