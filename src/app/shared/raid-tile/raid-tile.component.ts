import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { Character } from 'src/app/_entities/character';

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

  capturingScreenshot: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  export() {
    navigator.clipboard.writeText(this.raid.map(c => c?.name).join('\n'));
  }

  screenshot() {
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

  ping() {
    const message = this.raid.reduce((message: string, character: Character, i: number) => {
      if (character) {
        message += `<@${character.player?.discord?.userId}> `;
      }
      
      if (i > 0 && i % 2) {
        message += '\n';
      }
      return message;
    }, '');
    console.log(message);
    navigator.clipboard.writeText(message);
  }
}
