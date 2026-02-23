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
    note += 'Trash Assignments\n';
    const tanks = [
      ...this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank),
      ...this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank),
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank),
    ];
    const marksToTank = [
      { icon: IconEnum.skull, text: 'Skull', },
      { icon: IconEnum.cross, text: 'Cross', },
      { icon: IconEnum.square, text: 'Square', },
      { icon: IconEnum.moon, text: 'Moon', },
      { icon: IconEnum.triangle, text: 'Triangle', },
      { icon: IconEnum.diamond, text: 'Diamond', },
      { icon: IconEnum.circle, text: 'Circle', },
      { icon: IconEnum.star, text: 'Star', },
    ];
    for (let i = 0; i < tanks.length; i++) {
      note += `{${marksToTank[i].text.toLowerCase()}} on ${tanks[i].name}\n`;
    }

    note += '\n\nHigh King Maulgar Assignments\n';
    [
      ...this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[0].actions,
      ...this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[1].actions,
    ].forEach((action: AssignmentAction, index: number) => {
      const mark = action.icon;
      const markText = Object.keys(IconEnum).find(key => IconEnum[key as keyof typeof IconEnum] === mark);
      const mdHunter = this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[2].actions[index]?.caster;
      note += `{${markText}} - ${typeof action.caster === 'string' ? action.caster : action.caster?.name}`;
      if (mdHunter) {
        note += ` - {spell:34477} ${typeof mdHunter === 'string' ? mdHunter : mdHunter.name}`;
      }
      note += '\n';
    });

    note += '\n\nGruul the Dragon Killer Assignments\n';
    this.assignments[AssignmentType.gruulTheDragonKillerAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `{spell:34477} ${typeof action.caster === 'string' ? action.caster : action.caster?.name} -> ${typeof action.target === 'string' ? action.target : action.target?.name}\n`;
      });
    });

    note += '\n\nMagtheridon Tank Assignments\n';
    this.assignments[AssignmentType.magtheridonAssignments].assignments.forEach(assignment => {
      note += `\n${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        const mark = action.icon;
        const markText = Object.keys(IconEnum).find(key => IconEnum[key as keyof typeof IconEnum] === mark);
        note += `{${markText?.toLowerCase()}} ${typeof action.caster === 'string' ? action.caster : action.caster?.name} -> ${typeof action.target === 'string' ? action.target : action.target?.name}\n`;
      });
    });

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
      headerIcon: IconEnum.misdirect,
      headerText: 'Misdirect',
      actions: [],
    });

    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[0].actions.push({
      caster: tanks[0],
      target: 'High King Maulgar',
      icon: IconEnum.cross,
    });

    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[1].actions.push({
      caster: tanks[2],
      target: 'Blindeye the Seer (Priest)',
      icon: IconEnum.skull,
    });
    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[1].actions.push({
      caster: tanks[1],
      target: 'Olm the Summoner (Warlock)',
      icon: IconEnum.square,
    });
    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[1].actions.push({
      caster: mages[0],
      target: 'Krosh Firehand (Mage)',
      icon: IconEnum.moon,
    });
    this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[1].actions.push({
      caster: rangedDruids[0],
      target: 'Kiggler the Crazed (Shaman)',
      icon: IconEnum.triangle,
    });

    if (hunters[0]) {
      this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[2].actions.push({
        caster: hunters[0],
        target: tanks[0] || 'High King Maulgar Tank',
        icon: IconEnum.cross,
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
    if (hunters[1]) {
      this.assignments[AssignmentType.highKingMaulgarAssignments].assignments[2].actions.push({
        caster: hunters[1],
        target: mages[0] || 'Krosh Firehand Tank',
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
      headerIcon: IconEnum.misdirect,
      headerText: 'Misdirect',
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
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const rogues = this.getCharactersByClassAndRole(CharacterClass.rogue, CharacterRole.melee);
    const shamanMelee = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.melee);
    const shamanHealer = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);
    const priestsHealers = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer);
    const priestsRangeds = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.ranged);
    const tankDruid = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const druids = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.ranged);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const mages = this.getCharactersByClassAndRole(CharacterClass.mage, CharacterRole.ranged);
    const warlocks = this.getCharactersByClassAndRole(CharacterClass.warlock, CharacterRole.ranged);

    const skullClickers = [
      priestsHealers[priestsHealers.length - 1],
      hunters[hunters.length - 1],
    ];
    const diamondClickers = [
      priestsRangeds[0],
      mages[mages.length - 1],
    ];
    const crossClickers = [
      druids[0],
      warlocks[warlocks.length - 1],
    ];
    const triangleClickers = [
      rogues[rogues.length - 1],
      shamanMelee[0],
    ];
    const moonClickers = [
      tankDruid[tankDruid.length - 1],
      shamanMelee[shamanMelee.length - 1],
    ];

    const iconsToClick = [
      IconEnum.skull,
      IconEnum.diamond,
      IconEnum.cross,
      IconEnum.triangle,
      IconEnum.moon,
    ];

    this.assignments[AssignmentType.magtheridonAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Cube Clickers (Blast Nova)',
      actions: [
        {
          caster: skullClickers[0],
          target: 'Click Cube',
          icon: iconsToClick[0],
        },
        {
          caster: skullClickers[1],
          target: 'Backup Clicker',
          icon: iconsToClick[0],
        },
        {
          caster: diamondClickers[0],
          target: 'Click Cube',
          icon: iconsToClick[1],
        },
        {
          caster: diamondClickers[1],
          target: 'Backup Clicker',
          icon: iconsToClick[1],
        },
        {
          caster: crossClickers[0],
          target: 'Click Cube',
          icon: iconsToClick[2],
        },
        {
          caster: crossClickers[1],
          target: 'Backup Clicker',
          icon: iconsToClick[2],
        },
        {
          caster: triangleClickers[0],
          target: 'Click Cube',
          icon: iconsToClick[3],
        },
        {
          caster: triangleClickers[1],
          target: 'Backup Clicker',
          icon: iconsToClick[3],
        },
        {
          caster: moonClickers[0],
          target: 'Click Cube',
          icon: iconsToClick[4],
        },
        {
          caster: moonClickers[1],
          target: 'Backup Clicker',
          icon: iconsToClick[4],
        }
      ],
    });

    this.assignments.magtheridonAssignments.assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks/Missdirects',
      actions: [
        {
          caster: paladinTanks[0],
          target: 'Tank',
          icon: iconsToClick[3],
        },
        {
          caster: paladinTanks[0],
          target: 'Tank',
          icon: iconsToClick[4],
        },
        {
          caster: warlocks[warlocks.length - 1],
          target: 'Assist Paladin with Banish/Fear',
          icon: IconEnum.banish,
        },
        {
          caster: shamanHealer[shamanHealer.length - 1],
          target: `Heal ${paladinTanks[0]?.name}`,
          icon: IconEnum.healingWave,
        },
        {
          caster: tankDruid[0],
          target: 'Tank',
          icon: iconsToClick[0],
        },
        {
          caster: tankDruid[0],
          target: 'Tank',
          icon: iconsToClick[1],
        },
        {
          caster: hunters[hunters.length - 1],
          target: `Missdirect into ${tankDruid[0]?.name}`,
          icon: iconsToClick[1],
        },
        {
          caster: tankDruid[1],
          target: 'Tank',
          icon: iconsToClick[2],
        },
        {
          caster: hunters[hunters.length - 2],
          target: `Missdirect into ${tankDruid[1]?.name}`,
          icon: iconsToClick[2],
        },
      ],
    });
  }

  copyMrtNoteToBuffer() {
    navigator.clipboard.writeText(this.mrtNote);
  }
}
