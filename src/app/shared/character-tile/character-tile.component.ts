import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Character } from '../../_entities/character';
import { LowerCasePipe } from '@angular/common';

declare const $WowheadPower: { refreshLinks(): void } | undefined;

const GEAR_SLOT_NAMES: Record<number, string> = {
  0:  'Ammo',
  1:  'Helm',
  2:  'Neck',
  3:  'Shoulder',
  4:  'Shirt',
  5:  'Chest',
  6:  'Belt',
  7:  'Legs',
  8:  'Boots',
  9:  'Bracer',
  10: 'Hands',
  11: 'Ring 1',
  12: 'Ring 2',
  13: 'Trinket 1',
  14: 'Trinket 2',
  15: 'Cloak',
  16: 'Main Hand',
  17: 'Off Hand',
  18: 'Ranged',
  19: 'Tabard',
};
import { wclBakedData, WclBakedCharacter } from '../../_data/wcl-baked.data';

@Component({
  selector: 'app-character-tile',
  host: { '[class.rankings-visible]': 'isRankingsVisible' },
  imports: [
    LowerCasePipe,
  ],
  templateUrl: './character-tile.component.html',
  styleUrl: './character-tile.component.scss'
})
export class CharacterTileComponent implements OnChanges {
  @Input() character?: Character;
  @Input() isWCLLinkVisible: boolean = false;
  @Input() isRankingsVisible: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isRankingsVisible']?.currentValue === true) {
      setTimeout(() => {
        if (typeof $WowheadPower !== 'undefined') {
          $WowheadPower.refreshLinks();
        }
      }, 0);
    }
  }

  get wclCharacter(): WclBakedCharacter | null {
    if (!this.character) return null;
    return wclBakedData.characters[this.character.name.toLowerCase()] ?? null;
  }

  rankPercentColor(percent: number | null): string {
    if (percent === null) return '#9d9d9d';
    if (percent === 100) return '#e5cc80';
    if (percent >= 99) return '#e268a8';
    if (percent >= 95) return '#ff8000';
    if (percent >= 75) return '#a335ee';
    if (percent >= 50) return '#0070dd';
    if (percent >= 25) return '#1eff00';
    return '#9d9d9d';
  }

  formatPercent(value: number | null): string {
    return value !== null ? Math.round(value) + '%' : '–';
  }

  gearIconUrl(icon: string): string {
    return `https://assets.rpglogs.com/img/warcraft/icons/medium/${icon}.jpg`;
  }

  gearSlotName(slot: number): string {
    return GEAR_SLOT_NAMES[slot] ?? `Slot ${slot}`;
  }

  icons = {
    Warrior: 'class_warrior.jpg',
    Paladin: 'class_paladin.jpg',
    Hunter: 'class_hunter.jpg',
    Druid: 'class_druid.jpg',
    Rogue: 'class_rogue.jpg',
    Warlock: 'class_warlock.jpg',
    Mage: 'class_mage.jpg',
    Priest: 'class_priest.jpg',
    Shaman: 'class_shaman.jpg',
  };

  iconsSpecs: { [key: string]: string } = {
    Warrior_Fury_Melee: 'ability_warrior_innerrage.jpg',
    Warrior_Arms_Melee: 'ability_warrior_savageblow.jpg',
    Warrior_Protection_Tank: 'ability_warrior_defensivestance.jpg',

    Paladin_Retribution_Melee: 'spell_holy_auraoflight.jpg',
    Paladin_Protection_Tank: 'spell_holy_devotionaura.jpg',
    Paladin_Holy_Healer: 'spell_holy_holybolt.jpg',

    Hunter_BeastMastery_Ranged: 'ability_hunter_bestialdiscipline.jpg',
    Hunter_Survival_Ranged: 'ability_hunter_camouflage.jpg',
    Hunter_Marksmanship_Ranged: 'ability_hunter_focusedaim.jpg',

    Druid_Feral_Melee: 'ability_druid_catform.jpg',
    Druid_Feral_Tank: 'ability_racial_bearform.jpg',
    Druid_Balance_Ranged: 'spell_nature_starfall.jpg',
    Druid_Restoration_Healer: 'spell_nature_healingtouch.jpg',

    Rogue_Assassination_Melee: 'ability_rogue_eviscerate.jpg',
    Rogue_Combat_Melee: 'ability_backstab.jpg',
    Rogue_Subtlety_Melee: 'ability_stealth.jpg',
    Rogue_Combat_Tank: 'achievement_halloween_smiley_01.jpg',

    Warlock_Destruction_Ranged: 'spell_shadow_rainoffire.jpg',
    Warlock_Affliction_Ranged: 'classicon_warlock.jpg',
    Warlock_Demonology_Ranged: 'spell_shadow_metamorphosis.jpg',
    Warlock_Demonology_Tank: 'spell_shadow_demonform.jpg',

    Mage_Arcane_Ranged: 'spell_holy_magicalsentry.jpg',
    Mage_Fire_Ranged: 'spell_fire_flamebolt.jpg',
    Mage_Frost_Ranged: 'spell_frost_frostbolt02.jpg',
    Mage_Arcane_Healer: 'inv_enchant_essencenethersmall.jpg',

    Priest_Shadow_Ranged: 'spell_shadow_shadowwordpain.jpg',
    Priest_Holy_Healer: 'spell_holy_guardianspirit.jpg',
    Priest_Discipline_Healer: 'spell_holy_wordfortitude.jpg',

    Shaman_Enhancement_Melee: 'spell_nature_lightningshield.jpg',
    Shaman_Elemental_Ranged: 'spell_nature_lightning.jpg',
    Shaman_Restoration_Healer: 'spell_nature_magicimmunity.jpg',
  };
}
