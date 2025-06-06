import {Component, Input, OnInit} from '@angular/core';
import {CharacterTileComponent} from '../../shared/character-tile/character-tile.component';
import {Character} from '../../_entities/character';
import {IconEnum} from '../../_entities/icon.enum';
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
    CharacterTileComponent
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

  get mrtNote() {
    let note = '';
    note += 'Razorgore\n';
    const tankNames = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank).map((tank: Character) => tank.name),
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank).map((tank: Character) => tank.name),
    ];
    note += `{!p:${tankNames.join(',')}}{g1357}Stay on Vaelastrasz side{/g}{/p}`;
    note += `{!p:${tankNames.join(',')}}{g2468}Stay on Entrance side{/g}{/p}`;
    note += `{p:${tankNames[0]},${tankNames[2]}}Stay on Vaelastrasz side{/p}`;
    note += `{p:${tankNames[1]},${tankNames[3]}}Stay on Entrance side{/p}\n`;
    note += '{c:Warrior}DONT WASTE CDs ON BOSS{/c}\n';
    note += '\n';
    note += 'Vaelastrasz\n';
    const vaelastraszPala = this.assignments.vaelastraszAssignments.assignments[1].actions[0].caster as Character;
    note += `${vaelastraszPala.name} - {spell:633} Lay on Hands\n`;
    note += '\n';
    note += 'Dragon Packs\n';
    note += `1 - {spell:1161} ${tankNames[1]}\n`;
    note += `2 - {spell:1161} ${tankNames[2]}\n`;
    note += `3 - {spell:1161} Crab\n`;
    note += '\n';
    note += 'Broodlord\n';
    const broodlordPala = this.assignments.broodlordAssignments.assignments[1].actions[0].caster as Character;
    note += `${broodlordPala.name} - {spell:633} Lay on Hands\n`;
    note += '\n';
    note += 'Chromaggus\n';
    const chromagguseDispellers = this.assignments.chromaggusAssignments.assignments[2].actions;
    const chromaggusMelee = chromagguseDispellers.filter((action: AssignmentAction) => {
      return action.target === 'Melee';
    }).map((action: AssignmentAction) => {
      return action.caster as Character;
    });
    const chromaggusRanged = chromagguseDispellers.filter((action: AssignmentAction) => {
      return action.target === 'Ranged';
    }).map((action: AssignmentAction) => {
      return action.caster as Character;
    });
    for (let i = 0; i < chromaggusMelee.length; i++) {
      note += `${chromaggusMelee[i].name} - Melee\n`;
    }
    for (let i = 0; i < chromaggusRanged.length; i++) {
      note += `${chromaggusRanged[i].name} - Ranged\n`;
    }
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
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank),
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

    this.assignments[AssignmentType.razorgoreAssignments].assignments[0].actions.push({
      caster: `Group 1, 3, 5, 7`,
      target: 'Vaelastrasz Side',
      icon: undefined,
    });
    this.assignments[AssignmentType.razorgoreAssignments].assignments[0].actions.push({
      caster: `Group 2, 4, 6, 8`,
      target: 'Entrance Side',
      icon: undefined,
    });
    for (let i = 0; i < tanks.length; i++) {
      this.assignments[AssignmentType.razorgoreAssignments].assignments[1].actions.push({
        caster: tanks[i],
        target: `Tank ${i + 1}. (${i % 2 === 0 ? 'Vaelastrasz Side' : 'Entrance Side'})`,
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
    this.assignments[AssignmentType.vaelastraszAssignments].assignments[0].actions.push({
      caster: tanks[0],
      target: `Tank`,
      icon: undefined,
    });
    this.assignments[AssignmentType.vaelastraszAssignments].assignments[1].actions.push({
      caster: paladins[0],
      target: `Lay on Hands`,
      icon: IconEnum.layOnHands,
    });
  }
  fillBroodlordAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank),
    ];
    const paladins = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer);
    this.assignments[AssignmentType.broodlordAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });
    this.assignments[AssignmentType.broodlordAssignments].assignments.push({
      headerIcon: IconEnum.layOnHands,
      headerText: 'Paladin CDs',
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
    this.assignments[AssignmentType.broodlordAssignments].assignments[1].actions.push({
      caster: paladins[1],
      target: `Lay on Hands`,
      icon: IconEnum.layOnHands,
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
      target: `Backup Tank`,
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
    const priests = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer);
    const paladins = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer);
    const druids = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.healer);
    const mages = this.getCharactersByClassAndRole(CharacterClass.mage, CharacterRole.ranged);
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
    this.assignments[AssignmentType.chromaggusAssignments].assignments.push({
      headerIcon: IconEnum.dispel,
      headerText: 'Dispel/Remove Curse/Cleanse',
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
    this.assignments[AssignmentType.chromaggusAssignments].assignments[2].actions.push({
      caster: priests[priests.length - 3],
      target: 'Melee',
      icon: IconEnum.dispel,
    });
    this.assignments[AssignmentType.chromaggusAssignments].assignments[2].actions.push({
      caster: priests[priests.length - 1],
      target: 'Ranged',
      icon: IconEnum.dispel,
    });
    this.assignments[AssignmentType.chromaggusAssignments].assignments[2].actions.push({
      caster: paladins[1],
      target: `Melee`,
      icon: IconEnum.dispel,
    });
    this.assignments[AssignmentType.chromaggusAssignments].assignments[2].actions.push({
      caster: paladins[2],
      target: `Ranged`,
      icon: IconEnum.dispel,
    });
    for (let i = 0; i < druids.length; i++) {
      this.assignments[AssignmentType.chromaggusAssignments].assignments[2].actions.push({
        caster: druids[i],
        target: `Melee`,
        icon: IconEnum.decurse,
      });
    }
    this.assignments[AssignmentType.chromaggusAssignments].assignments[2].actions.push({
      caster: mages[0],
      target: `Melee`,
      icon: IconEnum.decurse,
    });
  }
  fillNefarianAssignments() {
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank),
    ];
    this.assignments[AssignmentType.nefarianAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [],
    });
    this.assignments[AssignmentType.nefarianAssignments].assignments.push({
      headerIcon: IconEnum.decurse,
      headerText: 'Decurse',
      actions: [{
        caster: this.raid.find((character: Character) => character?.name === 'Manorikaa'),
        target: `Backup decurse`,
        icon: IconEnum.decurse,
      }],
    });

    for (let i = 0; i < tanks.length; i++) {
      this.assignments[AssignmentType.nefarianAssignments].assignments[0].actions.push({
        caster: tanks[i],
        target: `Tank ${i + 1}`,
        icon: undefined,
      });
    }
  }

  copyMrtNoteToBuffer() {
    navigator.clipboard.writeText(this.mrtNote);
  }
}
