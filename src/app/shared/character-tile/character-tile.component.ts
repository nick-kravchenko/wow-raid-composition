import { Component, Input } from '@angular/core';
import { Character } from '../../_entities/character';
import { LowerCasePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-character-tile',
  imports: [
    LowerCasePipe,
    NgIf
  ],
  templateUrl: './character-tile.component.html',
  styleUrl: './character-tile.component.scss'
})
export class CharacterTileComponent {
  @Input() character?: Character;
  @Input() isWCLLinkVisible: boolean = false;

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
