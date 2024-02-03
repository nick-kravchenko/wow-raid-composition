import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/_entities/character';

@Component({
  selector: 'app-character-tile',
  templateUrl: './character-tile.component.html',
  styleUrls: ['./character-tile.component.scss']
})
export class CharacterTileComponent implements OnInit {
  @Input() character?: Character;
  icons = {
    'Warrior': 'class_warrior.jpg',
    'Paladin': 'class_paladin.jpg',
    'Hunter': 'class_hunter.jpg',
    'Druid': 'class_druid.jpg',
    'Rogue': 'class_rogue.jpg',
    'Warlock': 'class_warlock.jpg',
    'Mage': 'class_mage.jpg',
    'Priest': 'class_priest.jpg',
  }
  iconsSpecs: { [key: string]: string } = {
    'Warrior_Melee': 'ability_warrior_innerrage.jpg', // +
    'Warrior_Tank': 'ability_warrior_defensivestance.jpg', // +
    'Paladin_Melee': 'spell_holy_auraoflight.jpg', // +
    'Paladin_Tank': 'spell_holy_devotionaura.jpg', // +
    'Paladin_Healer': 'spell_holy_holybolt.jpg', // +
    'Hunter_Ranged': 'class_hunter.jpg', // +
    'Druid_Melee': 'ability_druid_catform.jpg', // +
    'Druid_Tank': 'ability_racial_bearform.jpg', // +
    'Druid_Ranged': 'spell_nature_starfall.jpg', // +
    'Druid_Healer': 'spell_nature_healingtouch.jpg', // +
    'Rogue_Melee': 'class_rogue.jpg', // +
    'Rogue_Tank': 'achievement_halloween_smiley_01.jpg', // +
    'Warlock_Ranged': 'classicon_warlock.jpg', // +
    'Warlock_Tank': 'spell_shadow_demonform.jpg', // +
    'Mage_Ranged': 'class_mage.jpg', // +
    'Mage_Healer': 'inv_enchant_essencenethersmall.jpg', // +
    'Priest_Ranged': 'spell_shadow_shadowwordpain.jpg', // +
    'Priest_Healer': 'spell_holy_guardianspirit.jpg', // +
  }

  constructor() { }

  ngOnInit(): void {
  }

}
