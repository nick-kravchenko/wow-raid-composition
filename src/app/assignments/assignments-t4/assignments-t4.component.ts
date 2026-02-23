import {Component, Input, OnInit} from '@angular/core';
import {CharacterTileComponent} from '../../shared/character-tile/character-tile.component';
import {Character} from '../../_entities/character';
import {IconEnum} from '../../_entities/icon.enum';
import {CharacterClass} from '../../_entities/character-class.enum';
import {CharacterRole} from '../../_entities/character-role.enum';

interface AssignmentAction {
  caster: Character | string | undefined;
  target: string | Character;
  icon: string | undefined;
}

interface Assignment {
  headerIcon: string;
  headerText: string;
  actions: AssignmentAction[]
}

enum AssignmentType {
  highKingMaulgarAssignments = 'highKingMaulgarAssignments',
  gruulTheDragonKillerAssignments = 'gruulTheDragonKillerAssignments',
  magtheridonAssignments = 'magtheridonAssignments',
}

interface ClassAssignment {
  headerIcon: string;
  headerText: string;
  assignments: Assignment[];
}

@Component({
  selector: 'app-assignments-t4',
  imports: [
    CharacterTileComponent
  ],
  templateUrl: './assignments-t4.component.html',
  styleUrl: './assignments-t4.component.scss'
})
export class AssignmentsT4Component implements OnInit {
  @Input() raid: Character[] = [];
  keys: AssignmentType[] = [
    AssignmentType.highKingMaulgarAssignments,
    AssignmentType.gruulTheDragonKillerAssignments,
    AssignmentType.magtheridonAssignments,
  ];
  assignments: {
    [key in AssignmentType]: ClassAssignment
  } = {
    [AssignmentType.highKingMaulgarAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'High King Maulgar',
      assignments: []
    },
    [AssignmentType.gruulTheDragonKillerAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Gruul the Dragon Killer',
      assignments: []
    },
    [AssignmentType.magtheridonAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Magtheridon',
      assignments: []
    },
  };

  get mrtNote() {
    let note = '';
    return note;
  }

  ngOnInit() {
    this.fillAssignments();
  }

  getTarget(action: AssignmentAction): Character {
    return action.target as Character;
  }

  getCaster(action: AssignmentAction): Character {
    return action.caster as Character;
  }

  getCharactersByClassAndRole(className: CharacterClass, role: CharacterRole) {
    return this.raid.filter((character: Character | undefined) => character?.class === className && character?.role === role);
  }

  fillAssignments() {
    this.fillHighKingMaulgarAssignments();
    this.fillGruulTheDragonslayerAssignments();
    this.fillMagtheridonAssignments();
  }

  fillHighKingMaulgarAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank),
      ...this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank),
    ];
    const mages = this.getCharactersByClassAndRole(CharacterClass.mage, CharacterRole.ranged);
    const rangedDruids = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.ranged);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);

    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Main Tank',
      actions: [],
    });
    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Adds',
      actions: [],
    });
    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Misdirection',
      actions: [],
    });

    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[0].actions.push({
      caster: tanks[0],
      target: 'High King Maulgar',
      icon: undefined,
    });

    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[1].actions.push({
      caster: rangedDruids[0],
      target: 'Kiggler the Crazed (Shaman)',
      icon: undefined,
    });
    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[1].actions.push({
      caster: tanks[1],
      target: 'Blindeye the Seer (Priest)',
      icon: undefined,
    });
    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[1].actions.push({
      caster: tanks[2],
      target: 'Olm the Summoner (Warlock)',
      icon: undefined,
    });
    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[1].actions.push({
      caster: mages[0],
      target: 'Krosh Firehand (Mage)',
      icon: undefined,
    });

    if (hunters[0]) {
      this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[2].actions.push({
        caster: hunters[0],
        target: tanks[0] || 'High King Maulgar Tank',
        icon: undefined,
      });
    }
    if (hunters[1]) {
      this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[2].actions.push({
        caster: hunters[1],
        target: mages[0] || 'Krosh Firehand Tank',
        icon: undefined,
      });
    }
    if (hunters[2]) {
      this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[2].actions.push({
        caster: hunters[2],
        target: tanks[1] || 'Blindeye the Seer Tank',
        icon: undefined,
      });
    }
    if (hunters[3]) {
      this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[2].actions.push({
        caster: hunters[3],
        target: tanks[2] || 'Olm the Summoner Tank',
        icon: undefined,
      });
    }
    if (hunters[4]) {
      this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[2].actions.push({
        caster: hunters[4],
        target: rangedDruids[0] || 'Kiggler the Crazed Tank',
        icon: undefined,
      });
    }
  }

  fillGruulTheDragonslayerAssignments() {
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);

    this.assignments[AssignmentType.gruulTheDragonKillerAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Misdirection',
      actions: [],
    });

    const halfPoint = Math.ceil(hunters.length / 2);

    hunters.forEach((hunter, index) => {
      const target = index < halfPoint
        ? (paladinTanks[0] || 'Paladin Tank')
        : (druidTanks[0] || 'Druid Tank');

      this.assignments[AssignmentType.gruulTheDragonKillerAssignments].assignments[0].actions.push({
        caster: hunter,
        target: target,
        icon: undefined,
      });
    });
  }

fillMagtheridonAssignments() {
  const rogues = this.getCharactersByClassAndRole(CharacterClass.rogue, CharacterRole.melee);
  const enhancementShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.melee);
  const priestsHealers = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer);
  const priestsRangeds = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.ranged);
  const druids = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.ranged);

  const clickers = [
    priestsHealers[priestsHealers.length - 1],
    priestsRangeds[0],
    druids[0],
    rogues[0],
    enhancementShamans[1]
  ].filter(Boolean).slice(0, 5);

  const iconMap = new Map<Character | undefined, string | undefined>();
        iconMap.set(priestsHealers[priestsHealers.length - 1], IconEnum.skull);
        iconMap.set(druids[0], IconEnum.cross);
        iconMap.set(priestsRangeds[0], IconEnum.diamond);
        iconMap.set(rogues[0], IconEnum.triangle);
        iconMap.set(enhancementShamans[enhancementShamans.length - 1], IconEnum.moon);

  this.assignments[AssignmentType.magtheridonAssignments].assignments.push({
    headerIcon: IconEnum.skull,
    headerText: 'Cube Clickers (Blast Nova)',
    actions: clickers.map((character) => ({
      caster: character,
      target: 'Click Cube',
      icon: iconMap.get(character),
    })),
  });
}

  copyMrtNoteToBuffer() {
    navigator.clipboard.writeText(this.mrtNote);
  }
}
