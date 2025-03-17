import {Component, Input, OnInit} from '@angular/core';
import { CharacterTileComponent } from '../../shared/character-tile/character-tile.component';
import { KeyValuePipe } from '@angular/common';
import { Character } from '../../_entities/character';
import { IconEnum } from '../../_entities/icon.enum';
import {CharacterClass} from '../../_entities/character-class.enum';
import {CharacterRole} from '../../_entities/character-role.enum';

interface AssignmentAction {
  caster: Character|string|undefined;
  target: string|Character;
  icon: string|undefined;
}

interface Assignment {
  headerIcon: string;
  headerText: string;
  actions: AssignmentAction[]
}

enum AssignmentType {
  razorgoreAssignments = 'razorgoreAssignments',
  vaelastraszAssignments = 'vaelastraszAssignments',
  broodlordAssignments = 'broodlordAssignments',
  firemawAssignments = 'firemawAssignments',
  ebonrocAssignments = 'ebonrocAssignments',
  flamegorAssignments = 'flamegorAssignments',
  chromaggusAssignments = 'chromaggusAssignments',
  nefarianAssignments = 'nefarianAssignments',
}

interface ClassAssignment {
  headerIcon: string;
  headerText: string;
  assignments: Assignment[];
}

@Component({
  selector: 'app-assignments-bwl',
  imports: [
    CharacterTileComponent,
    KeyValuePipe
  ],
  templateUrl: './assignments-bwl.component.html',
  styleUrl: './assignments-bwl.component.scss'
})
export class AssignmentsBwlComponent implements OnInit {
  @Input() raid: Character[] = [];
  keys: AssignmentType[] = [
    AssignmentType.razorgoreAssignments,
    AssignmentType.vaelastraszAssignments,
    AssignmentType.broodlordAssignments,
    AssignmentType.firemawAssignments,
    AssignmentType.ebonrocAssignments,
    AssignmentType.flamegorAssignments,
    AssignmentType.chromaggusAssignments,
    AssignmentType.nefarianAssignments
  ];
  assignments: {
    [key in AssignmentType]: ClassAssignment
  } = {
    [AssignmentType.razorgoreAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Razorgore',
      assignments: []
    },
    [AssignmentType.vaelastraszAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Vaelastrasz',
      assignments: []
    },
    [AssignmentType.broodlordAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Broodlord',
      assignments: []
    },
    [AssignmentType.firemawAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Firemaw',
      assignments: []
    },
    [AssignmentType.ebonrocAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Ebonroc',
      assignments: []
    },
    [AssignmentType.flamegorAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Flamegor',
      assignments: []
    },
    [AssignmentType.chromaggusAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Chromaggus',
      assignments: []
    },
    [AssignmentType.nefarianAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Nefarian',
      assignments: []
    }
  };
  iconEnum: typeof IconEnum = IconEnum;

  ngOnInit() {
    this.fillAssignments();
  }

  getClassAssignmentFromKeyValueObject(keyValueObject: any): ClassAssignment {
    return keyValueObject.value as ClassAssignment;
  }

  getTarget(action: AssignmentAction): Character {
    return action.target as Character;
  }

  getCaster(action: AssignmentAction): Character {
    return action.caster as Character;
  }

  getCharactersByClassAndRole(className: CharacterClass, role: CharacterRole) {
    return this.raid.filter((character: Character|undefined) => character?.class === className && character?.role === role);
  }

  fillAssignments() {
    this.fillRazorgoreAssignments();
    this.fillVaelastraszAssignments();
    this.fillBroodlordAssignments();
    this.fillFiremawAssignments();
    this.fillEbonrocAssignments();
    this.fillFlamegorAssignments();
    this.fillChromaggusAssignments();
    this.fillNefarianAssignments();
  }

  fillRazorgoreAssignments() {
    const numberOfGroups = 8;
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
    ];
    this.assignments[AssignmentType.razorgoreAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Side',
      actions: [],
    });
    this.assignments[AssignmentType.razorgoreAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });

    for (let i = 0; i < numberOfGroups; i++) {
      const isEven = i % 2 === 0;
      this.assignments[AssignmentType.razorgoreAssignments].assignments[0].actions.push({
        caster: `Group ${i + 1}`,
        target: isEven ? 'To Vael' : 'To Entrance',
        icon: undefined,
      });
    }
    for (let i = 0; i < tanks.length; i++) {
      this.assignments[AssignmentType.razorgoreAssignments].assignments[1].actions.push({
        caster: tanks[i],
        target: `Tank ${i + 1}`,
        icon: undefined,
      });
    }
  }
  fillVaelastraszAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
    ];
    const paladins = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer);
    this.assignments[AssignmentType.vaelastraszAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });
    this.assignments[AssignmentType.vaelastraszAssignments].assignments.push({
      headerIcon: IconEnum.layOnHands,
      headerText: 'Paladin CDs',
      actions: [],
    });
    for (let i = 0; i < tanks.length; i++) {
      this.assignments[AssignmentType.vaelastraszAssignments].assignments[0].actions.push({
        caster: tanks[i],
        target: `Tank ${i + 1}`,
        icon: undefined,
      });
    }
    for (let i = 0; i < paladins.length; i++) {
      this.assignments[AssignmentType.vaelastraszAssignments].assignments[1].actions.push({
        caster: paladins[i],
        target: `Lay on Hands ${i + 1}`,
        icon: IconEnum.layOnHands,
      });
      this.assignments[AssignmentType.vaelastraszAssignments].assignments[1].actions.push({
        caster: paladins[i],
        target: `Blessing of Sacrifice ${i + 1}`,
        icon: IconEnum.blessingOfSacrifice,
      });
    }
  }
  fillBroodlordAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank),
    ];
    this.assignments[AssignmentType.broodlordAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });
    this.assignments[AssignmentType.broodlordAssignments].assignments[0].actions.push({
      caster: tanks[0],
      target: `Tank 1`,
      icon: undefined,
    });
    this.assignments[AssignmentType.broodlordAssignments].assignments[0].actions.push({
      caster: tanks[1],
      target: `Tank 2`,
      icon: undefined,
    });
    this.assignments[AssignmentType.broodlordAssignments].assignments[0].actions.push({
      caster: tanks[2],
      target: `Tank 3`,
      icon: undefined,
    });
    this.assignments[AssignmentType.broodlordAssignments].assignments[0].actions.push({
      caster: tanks[3],
      target: `Tank 4`,
      icon: undefined,
    });
  }
  fillFiremawAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank),
    ];
    this.assignments[AssignmentType.firemawAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });
    this.assignments[AssignmentType.firemawAssignments].assignments[0].actions.push({
      caster: tanks[0],
      target: `Tank 1`,
      icon: undefined,
    });
    this.assignments[AssignmentType.firemawAssignments].assignments[0].actions.push({
      caster: tanks[1],
      target: `Tank 2`,
      icon: undefined,
    });
    this.assignments[AssignmentType.firemawAssignments].assignments[0].actions.push({
      caster: tanks[2],
      target: `Wing Buffet Tank`,
      icon: undefined,
    });
    this.assignments[AssignmentType.firemawAssignments].assignments[0].actions.push({
      caster: tanks[3],
      target: `Backup Tank`,
      icon: undefined,
    });
  }
  fillEbonrocAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
    ];
    this.assignments[AssignmentType.ebonrocAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });
    for (let i = 0; i < tanks.length; i++) {
      this.assignments[AssignmentType.ebonrocAssignments].assignments[0].actions.push({
        caster: tanks[i],
        target: `Tank ${i + 1}`,
        icon: undefined,
      });
    }
  }
  fillFlamegorAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
    ];
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    this.assignments[AssignmentType.flamegorAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });
    this.assignments[AssignmentType.flamegorAssignments].assignments.push({
      headerIcon: IconEnum.tranquilizingShot,
      headerText: 'Tranquilizing Shot',
      actions: [],
    });
    for (let i = 0; i < tanks.length; i++) {
      this.assignments[AssignmentType.flamegorAssignments].assignments[0].actions.push({
        caster: tanks[i],
        target: `Tank ${i + 1}`,
        icon: undefined,
      });
    }
    for (let i = 0; i < hunters.length; i++) {
      this.assignments[AssignmentType.flamegorAssignments].assignments[1].actions.push({
        caster: hunters[i],
        target: `Shot ${i + 1}`,
        icon: IconEnum.tranquilizingShot,
      });
    }
  }
  fillChromaggusAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
    ];
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    this.assignments[AssignmentType.chromaggusAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });
    this.assignments[AssignmentType.chromaggusAssignments].assignments.push({
      headerIcon: IconEnum.tranquilizingShot,
      headerText: 'Tranquilizing Shot',
      actions: [],
    });
    for (let i = 0; i < tanks.length; i++) {
      this.assignments[AssignmentType.chromaggusAssignments].assignments[0].actions.push({
        caster: tanks[i],
        target: `Tank ${i + 1}`,
        icon: undefined,
      });
    }
    for (let i = 0; i < hunters.length; i++) {
      this.assignments[AssignmentType.chromaggusAssignments].assignments[1].actions.push({
        caster: hunters[i],
        target: `Shot ${i + 1}`,
        icon: IconEnum.tranquilizingShot,
      });
    }
  }
  fillNefarianAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
    ];
    this.assignments[AssignmentType.nefarianAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });
    for (let i = 0; i < tanks.length; i++) {
      this.assignments[AssignmentType.nefarianAssignments].assignments[0].actions.push({
        caster: tanks[i],
        target: `Tank ${i + 1}`,
        icon: undefined,
      });
    }
  }
}
