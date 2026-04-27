import { Component, computed, inject, OnChanges, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe, LowerCasePipe } from '@angular/common';
import { players } from '../_data/players.data';
import { Character } from '../_entities/character';
import {wclBakedData, WclBakedCharacter, WclBakedData, WclGearItem} from '../_data/wcl-baked.data';
import { bnetBakedData, BnetBakedCharacter, BnetBakedData } from '../_data/battlenet-baked.data';
import { GEAR_SLOT_NAMES } from '../shared/types/gear-slot-names';

declare const $WowheadPower: { refreshLinks(): void } | undefined;

@Component({
  selector: 'app-character',
  imports: [
    LowerCasePipe,
    JsonPipe,
  ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent implements OnInit, OnChanges {
  private readonly params = toSignal(inject(ActivatedRoute).params);

  private readonly allCharacters: Character[] = players.flatMap(player => (player.characters ?? []).map(c => ({ ...c, player })));
  private readonly wclBakedData: WclBakedData = wclBakedData;
  private readonly bnetBakedData: BnetBakedData = bnetBakedData;

  readonly character: Signal<Character|null> = computed(() => {
    const name = this.params()?.['name'];
    if (!name) return null;
    return this.allCharacters.find(c => c.name.toLowerCase() === name.toLowerCase()) ?? null;
  });
  readonly wclData: Signal<WclBakedCharacter|null> = computed(() => {
    const name = this.params()?.['name'];
    if (!name) return null;
    return this.wclBakedData.characters[name.toLowerCase()] as WclBakedCharacter | null ?? null;
  });
  readonly bnetData: Signal<BnetBakedCharacter|null> = computed(() => {
    const name = this.params()?.['name'];
    if (!name) return null;
    return this.bnetBakedData.characters[name.toLowerCase()] ?? null;
  });
  readonly leftSlots = [
    'Helm',
    'Neck',
    'Shoulder',
    'Cloak',
    'Chest',
    'Shirt',
    'Tabard',
    'Bracer',
  ];
  readonly rightSlots = [
    'Hands',
    'Belt',
    'Legs',
    'Boots',
    'Ring 1',
    'Ring 2',
    'Trinket 1',
    'Trinket 2',
  ];

  ngOnInit(): void {
    setTimeout(() => {
      if (typeof $WowheadPower !== 'undefined') {
        $WowheadPower.refreshLinks();
      }
    }, 0);
  }

  ngOnChanges(): void {
    setTimeout(() => {
      if (typeof $WowheadPower !== 'undefined') {
        $WowheadPower.refreshLinks();
      }
    }, 0);
  }

  gearSlotName(slot: number): string {
    return GEAR_SLOT_NAMES[slot] ?? `Slot ${slot}`;
  }

  getItemBySlotName(name: string): WclGearItem | undefined {
    const slotId = Object.entries(GEAR_SLOT_NAMES).find(([_, slotName]) => slotName.toLowerCase() === name.toLowerCase())?.[0];
    return this.wclData()?.gear.find(g => g.slot === Number(slotId));
  }
}
