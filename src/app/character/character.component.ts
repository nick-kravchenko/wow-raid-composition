import { Component, computed, inject, OnChanges, OnInit, Signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap, from, of } from 'rxjs';
import { players } from '../_data/players.data';
import { Character } from '../_entities/character';
import { wclBakedData, WclBakedCharacter, WclBakedData, WclGearItem } from '../_data/wcl-baked.data';
import { bnetBakedData, BnetBakedCharacter, BnetBakedData } from '../_data/battlenet-baked.data';
import { GEAR_SLOT_NAMES } from '../shared/types/gear-slot-names';
import { CharacterClass } from '../_entities/character-class.enum';
import { CharacterSpecEnum } from '../_entities/character-spec.enum';
import { CharacterRole } from '../_entities/character-role.enum';
import {DecimalPipe, LowerCasePipe} from '@angular/common';

interface BisItem { id: number; name: string; source: string; }
interface BisEntry { slot: string; item: BisItem; alts?: BisItem[]; }

const SLOT_TO_BIS: Record<string, string> = {
  'Helm': 'head', 'Neck': 'neck', 'Shoulder': 'shoulders', 'Cloak': 'back',
  'Chest': 'chest', 'Bracer': 'wrists', 'Hands': 'hands', 'Belt': 'waist',
  'Legs': 'legs', 'Boots': 'feet', 'Ring 1': 'ring1', 'Ring 2': 'ring2',
  'Trinket 1': 'trinket1', 'Trinket 2': 'trinket2',
  'Main Hand': 'mainhand', 'Off Hand': 'offhand', 'Ranged': 'ranged',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BIS_LOADERS: Partial<Record<string, () => Promise<{ bisList: BisEntry[] }>>> = {
  'warrior-fury':         () => import('../../../scripts/bis-baker/t4/warrior-fury') as Promise<any>,
  'warrior-arms':         () => import('../../../scripts/bis-baker/t4/warrior-arms') as Promise<any>,
  'warrior-protection':   () => import('../../../scripts/bis-baker/t4/warrior-protection') as Promise<any>,
  'paladin-holy':         () => import('../../../scripts/bis-baker/t4/paladin-holy') as Promise<any>,
  'paladin-protection':   () => import('../../../scripts/bis-baker/t4/paladin-protection') as Promise<any>,
  'paladin-retribution':  () => import('../../../scripts/bis-baker/t4/paladin-retribution') as Promise<any>,
  'hunter-bm':            () => import('../../../scripts/bis-baker/t4/hunter-bm') as Promise<any>,
  'hunter-mm':            () => import('../../../scripts/bis-baker/t4/hunter-mm') as Promise<any>,
  'hunter-survival':      () => import('../../../scripts/bis-baker/t4/hunter-survival') as Promise<any>,
  'druid-balance':        () => import('../../../scripts/bis-baker/t4/druid-balance') as Promise<any>,
  'druid-bear':           () => import('../../../scripts/bis-baker/t4/druid-bear') as Promise<any>,
  'druid-cat':            () => import('../../../scripts/bis-baker/t4/druid-cat') as Promise<any>,
  'druid-restoration':    () => import('../../../scripts/bis-baker/t4/druid-restoration') as Promise<any>,
  'rogue':                () => import('../../../scripts/bis-baker/t4/rogue') as Promise<any>,
  'warlock-affliction':   () => import('../../../scripts/bis-baker/t4/warlock-affliction') as Promise<any>,
  'warlock-demonology':   () => import('../../../scripts/bis-baker/t4/warlock-demonology') as Promise<any>,
  'warlock-destruction':  () => import('../../../scripts/bis-baker/t4/warlock-destruction') as Promise<any>,
  'mage-arcane':          () => import('../../../scripts/bis-baker/t4/mage-arcane') as Promise<any>,
  'mage-fire':            () => import('../../../scripts/bis-baker/t4/mage-fire') as Promise<any>,
  'mage-frost':           () => import('../../../scripts/bis-baker/t4/mage-frost') as Promise<any>,
  'priest-holy':          () => import('../../../scripts/bis-baker/t4/priest-holy') as Promise<any>,
  'priest-shadow':        () => import('../../../scripts/bis-baker/t4/priest-shadow') as Promise<any>,
  'shaman-elemental':     () => import('../../../scripts/bis-baker/t4/shaman-elemental') as Promise<any>,
  'shaman-enhancement':   () => import('../../../scripts/bis-baker/t4/shaman-enhancement') as Promise<any>,
  'shaman-restoration':   () => import('../../../scripts/bis-baker/t4/shaman-restoration') as Promise<any>,
};

function bisLoaderKey(char: Character): string | null {
  const c = char.class;
  const s = char.spec;
  if (c === CharacterClass.warrior) {
    if (s === CharacterSpecEnum.Fury) return 'warrior-fury';
    if (s === CharacterSpecEnum.Arms) return 'warrior-arms';
    if (s === CharacterSpecEnum.Protection) return 'warrior-protection';
  }
  if (c === CharacterClass.paladin) {
    if (s === CharacterSpecEnum.Holy) return 'paladin-holy';
    if (s === CharacterSpecEnum.Protection) return 'paladin-protection';
    if (s === CharacterSpecEnum.Retribution) return 'paladin-retribution';
  }
  if (c === CharacterClass.hunter) {
    if (s === CharacterSpecEnum.BeastMastery) return 'hunter-bm';
    if (s === CharacterSpecEnum.Marksmanship) return 'hunter-mm';
    if (s === CharacterSpecEnum.Survival) return 'hunter-survival';
  }
  if (c === CharacterClass.druid) {
    if (s === CharacterSpecEnum.Balance) return 'druid-balance';
    if (s === CharacterSpecEnum.Restoration) return 'druid-restoration';
    if (s === CharacterSpecEnum.Feral) return char.role === CharacterRole.tank ? 'druid-bear' : 'druid-cat';
  }
  if (c === CharacterClass.rogue) return 'rogue';
  if (c === CharacterClass.warlock) {
    if (s === CharacterSpecEnum.Affliction) return 'warlock-affliction';
    if (s === CharacterSpecEnum.Demonology) return 'warlock-demonology';
    if (s === CharacterSpecEnum.Destruction) return 'warlock-destruction';
  }
  if (c === CharacterClass.mage) {
    if (s === CharacterSpecEnum.Arcane) return 'mage-arcane';
    if (s === CharacterSpecEnum.Fire) return 'mage-fire';
    if (s === CharacterSpecEnum.Frost) return 'mage-frost';
  }
  if (c === CharacterClass.priest) {
    if (s === CharacterSpecEnum.Shadow) return 'priest-shadow';
    return 'priest-holy';
  }
  if (c === CharacterClass.shaman) {
    if (s === CharacterSpecEnum.Elemental) return 'shaman-elemental';
    if (s === CharacterSpecEnum.Enhancement) return 'shaman-enhancement';
    if (s === CharacterSpecEnum.Restoration) return 'shaman-restoration';
  }
  return null;
}

declare const $WowheadPower: { refreshLinks(): void } | undefined;

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
  imports: [
    DecimalPipe,
    LowerCasePipe
  ]
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
  readonly bisMap: Signal<Map<string, number>> = toSignal(
    toObservable(this.character).pipe(
      switchMap(char => {
        if (!char) return of(new Map<string, number>());
        const key = bisLoaderKey(char);
        const loader = key ? BIS_LOADERS[key] : null;
        if (!loader) return of(new Map<string, number>());
        return from(loader().then(m => {
          const map = new Map<string, number>();
          for (const entry of m.bisList) map.set(entry.slot, entry.item.id);
          return map;
        }));
      })
    ),
    { initialValue: new Map<string, number>() }
  );

  parseColorClass(pct: number | null): string {
    if (pct === null) return 'parse-gray';
    if (pct === 100) return 'parse-gold';
    if (pct >= 99) return 'parse-pink';
    if (pct >= 95) return 'parse-orange';
    if (pct >= 75) return 'parse-purple';
    if (pct >= 50) return 'parse-blue';
    if (pct >= 25) return 'parse-green';
    return 'parse-gray';
  }

  wclTotalKills(wcl: WclBakedCharacter): number {
    return wcl.rankings.reduce((sum, r) => sum + r.totalKills, 0);
  }

  wclAllStarPoints(wcl: WclBakedCharacter): number | null {
    const pts = wcl.rankings.reduce((sum, r) => sum + (r.allStars?.points ?? 0), 0);
    return pts > 0 ? pts : null;
  }

  isBis(slotName: string, itemId: number | undefined): boolean {
    if (!itemId) return false;
    const bisSlot = SLOT_TO_BIS[slotName];
    if (!bisSlot) return false;
    if (bisSlot === 'ring1' || bisSlot === 'ring2') {
      return this.bisMap().get('ring1') === itemId || this.bisMap().get('ring2') === itemId;
    }
    if (bisSlot === 'trinket1' || bisSlot === 'trinket2') {
      return this.bisMap().get('trinket1') === itemId || this.bisMap().get('trinket2') === itemId;
    }
    return this.bisMap().get(bisSlot) === itemId;
  }

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
  readonly weaponSlots = [
    'Main Hand',
    'Off Hand',
    'Ranged',
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

  getItemBySlotName(name: string): WclGearItem | undefined {
    const slotId = Object.entries(GEAR_SLOT_NAMES).find(([_, slotName]) => slotName.toLowerCase() === name.toLowerCase())?.[0];
    return this.wclData()?.gear.find(g => g.slot === Number(slotId));
  }
}
