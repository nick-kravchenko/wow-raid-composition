import {Component, Input, OnInit} from '@angular/core';
import { Character } from '../../_entities/character';
import { CharacterClass } from '../../_entities/character-class.enum';
import { CharacterRole } from '../../_entities/character-role.enum';
import { CharacterTileComponent } from '../../shared/character-tile/character-tile.component';
import {IconEnum} from '../../_entities/icon.enum';

interface AssignmentAction {
  caster: Character|undefined;
  target: string|Character;
  icon: string;
}

interface Assignment {
  headerIcon: string;
  headerText: string;
  actions: AssignmentAction[]
}

@Component({
  selector: 'app-assignments-bwl',
  imports: [
    CharacterTileComponent,
  ],
  templateUrl: './assignments-bwl.component.html',
  styleUrl: './assignments-bwl.component.scss'
})
export class AssignmentsBwlComponent implements OnInit {
  @Input() raid: Character[] = [];
  priestsAssignments: Assignment[] = [];
  warlockAssignments: Assignment[] = [];
  mageAssignments: Assignment[] = [];
  druidAssignments: Assignment[] = [];
  iconEnum: typeof IconEnum = IconEnum;

  ngOnInit() {
    this.fillAssignments();
  }

  getTarget(action: AssignmentAction): Character {
    return action.target as Character;
  }

  getCharactersByClassAndRole(className: CharacterClass, role: CharacterRole) {
    return this.raid.filter((character: Character|undefined) => character?.class === className && character?.role === role);
  }

  getCharacterWithClassGroupAndRole(groupId: number, className: CharacterClass, role: CharacterRole): Character|undefined {
    const group = this.raid.slice(groupId * 5, (groupId + 1) * 5);
    return group.find((character: Character|undefined) => character?.class === className && character?.role === role);
  }

  fillAssignments() {
    this.fillPriestAssignments();
    this.fillWarlockAssignments();
    this.fillMageAssignments();
    this.fillDruidAssignments();
  }

  fillPriestAssignments() {
    const raidGroupsQty = 8;
    const priests = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer);

    this.priestsAssignments.push({
      headerIcon: this.iconEnum.wordOfFortitude,
      headerText: `Fortitude | Spirit | Shadowres`,
      actions: []
    });
    this.priestsAssignments.push({
      headerIcon: this.iconEnum.dispel,
      headerText: `Dispel`,
      actions: []
    });

    for (let i = 0; i < raidGroupsQty; i++) {
      for (let priestAssignment of this.priestsAssignments) {
        let groupPriest = this.getCharacterWithClassGroupAndRole(i, CharacterClass.priest, CharacterRole.healer);
        let priest: Character = groupPriest || (i > 0 ? priests[priests.length - 1] : priests[0]);
        priestAssignment.actions.push({
          caster: priest,
          target: `Group ${i + 1}`,
          icon: priestAssignment.headerIcon,
        });
      }
    }
  }

  fillWarlockAssignments() {
    const warlocks = this.getCharactersByClassAndRole(CharacterClass.warlock, CharacterRole.ranged);
    const paladins = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer);

    this.warlockAssignments.push({
      headerIcon: this.iconEnum.warlock,
      headerText: `Curse`,
      actions: [],
    });
    this.warlockAssignments.push({
      headerIcon: this.iconEnum.soulStone,
      headerText: `Soulstone`,
      actions: [],
    });

    const curses = [
      {icon: this.iconEnum.cor, text: 'CoR'},
      {icon: this.iconEnum.coe, text: 'CoE'},
      {icon: this.iconEnum.cos, text: 'CoS'},
    ];

    for (let i = 0; i < curses.length; i++) {
      const warlock = warlocks[i];
      this.warlockAssignments[0].actions.push({
        caster: warlock,
        target: curses[i].text,
        icon: curses[i].icon,
      });
    }

    for (let i = 0; i < paladins.length; i++) {
      const paladin = paladins[i];
      const warlock = warlocks[i];
      this.warlockAssignments[1].actions.push({
        caster: warlock,
        target: paladin,
        icon: this.iconEnum.soulStone,
      });
    }
  }

  fillMageAssignments() {
    const raidGroupsQty = 8;
    const mages = this.getCharactersByClassAndRole(CharacterClass.mage, CharacterRole.ranged);

    this.mageAssignments.push({
      headerIcon: this.iconEnum.intellect,
      headerText: `Intellect`,
      actions: [],
    });
    this.mageAssignments.push({
      headerIcon: this.iconEnum.decurse,
      headerText: `Decurse`,
      actions: [],
    })
    for (let i = 0; i < raidGroupsQty; i++) {
      const mage = mages[i] || mages[mages.length - 1];
      this.mageAssignments[0].actions.push({
        caster: mage,
        target: `Group ${i + 1}`,
        icon: this.iconEnum.intellect,
      });
      this.mageAssignments[1].actions.push({
        caster: mage,
        target: `Group ${i + 1}`,
        icon: this.iconEnum.decurse,
      });
    }
  }

  fillDruidAssignments() {
    const raidGroupsQty = 8;
    const druidHealers = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.healer);
    const druidBears = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const marksToSleep = [
      {
        icon: this.iconEnum.triangle,
        text: 'Triangle',
      },
      {
        icon: this.iconEnum.diamond,
        text: 'Diamond',
      },
    ];
    this.druidAssignments.push({
      headerIcon: this.iconEnum.motw,
      headerText: `MotW`,
      actions: [],
    });
    this.druidAssignments.push({
      headerIcon: this.iconEnum.sleep,
      headerText: `Sleep`,
      actions: [],
    });
    for (let i = 0; i < raidGroupsQty; i++) {
      let groupDruid = this.getCharacterWithClassGroupAndRole(i, CharacterClass.druid, CharacterRole.healer);
      let druid: Character = groupDruid || (i > 0 ? druidHealers[druidHealers.length - 1] : druidHealers[0]);
      this.druidAssignments[0].actions.push({
        caster: druid,
        target: `Group ${i + 1}`,
        icon: this.iconEnum.motw,
      });
    }
    for (let i = 0; i < marksToSleep.length; i++) {
      const druids = [...druidHealers, ...druidBears];
      this.druidAssignments[1].actions.push({
        caster: druids[i],
        target: marksToSleep[i].text,
        icon: marksToSleep[i].icon,
      });
    }
  }
}
