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
  hkmSkullAssignments,
  hkmCrossAssignments,
  hkmSquareAssignments,
  hkmMoonAssignments,
  hkmTriangleAssignments,
  gruulTheDragonKillerAssignments,
  magtheridonSkullAssignments,
  magtheridonDiamondAssignments,
  magtheridonCrossAssignments,
  magtheridonTriangleAssignments,
  magtheridonMoonAssignments,
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
    AssignmentType.hkmSkullAssignments,
    AssignmentType.hkmCrossAssignments,
    AssignmentType.hkmSquareAssignments,
    AssignmentType.hkmMoonAssignments,
    AssignmentType.hkmTriangleAssignments,
    AssignmentType.gruulTheDragonKillerAssignments,
    AssignmentType.magtheridonSkullAssignments,
    AssignmentType.magtheridonDiamondAssignments,
    AssignmentType.magtheridonCrossAssignments,
    AssignmentType.magtheridonTriangleAssignments,
    AssignmentType.magtheridonMoonAssignments,
  ];
  assignments: {
    [key in AssignmentType]: ClassAssignment
  } = {
    [AssignmentType.hkmSkullAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Maulgar Skull',
      assignments: []
    },
    [AssignmentType.hkmCrossAssignments]: {
      headerIcon: IconEnum.cross,
      headerText: 'Maulgar Cross',
      assignments: []
    },
    [AssignmentType.hkmSquareAssignments]: {
      headerIcon: IconEnum.square,
      headerText: 'Maulgar Square',
      assignments: []
    },
    [AssignmentType.hkmMoonAssignments]: {
      headerIcon: IconEnum.moon,
      headerText: 'Maulgar Moon',
      assignments: []
    },
    [AssignmentType.hkmTriangleAssignments]: {
      headerIcon: IconEnum.triangle,
      headerText: 'Maulgar Triangle',
      assignments: []
    },
    [AssignmentType.gruulTheDragonKillerAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Gruul the Dragon Killer',
      assignments: []
    },
    [AssignmentType.magtheridonSkullAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Magtheridon Skull',
      assignments: []
    },
    [AssignmentType.magtheridonDiamondAssignments]: {
      headerIcon: IconEnum.diamond,
      headerText: 'Magtheridon Diamond',
      assignments: []
    },
    [AssignmentType.magtheridonCrossAssignments]: {
      headerIcon: IconEnum.cross,
      headerText: 'Magtheridon Cross',
      assignments: []
    },
    [AssignmentType.magtheridonTriangleAssignments]: {
      headerIcon: IconEnum.triangle,
      headerText: 'Magtheridon Triangle',
      assignments: []
    },
    [AssignmentType.magtheridonMoonAssignments]: {
      headerIcon: IconEnum.moon,
      headerText: 'Magtheridon Moon',
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
      ...this.assignments[AssignmentType.hkmSkullAssignments].assignments[0].actions,
      ...this.assignments[AssignmentType.hkmCrossAssignments].assignments[0].actions,
      ...this.assignments[AssignmentType.hkmSquareAssignments].assignments[0].actions,
      ...this.assignments[AssignmentType.hkmMoonAssignments].assignments[0].actions,
      ...this.assignments[AssignmentType.hkmTriangleAssignments].assignments[0].actions,
    ].forEach((action: AssignmentAction, index: number) => {
      const isEven = index % 2;
      const mark = action.icon;
      const markText = Object.keys(IconEnum).find(key => IconEnum[key as keyof typeof IconEnum] === mark);
      note += `{${markText}} - ${typeof action.caster === 'string' ? action.caster : action.caster?.name}`;
      if (isEven) note += '\n';
    });

    note += '\n\nGruul the Dragon Killer Assignments\n';
    this.assignments[AssignmentType.gruulTheDragonKillerAssignments].assignments.forEach(assignment => {
      assignment.actions.forEach(action => {
        note += `{spell:34477} ${typeof action.caster === 'string' ? action.caster : action.caster?.name} -> ${typeof action.target === 'string' ? action.target : action.target?.name}\n`;
      });
    });

    const trashAssignmetns: string[] = ['{skull} ', '{diamond} ', '{cross} ', '{triangle} ', '{moon} '];
    const clickAssignments: string[] = ['{skull} ', '{diamond} ', '{cross} ', '{triangle} ', '{moon} '];
    this.assignments[AssignmentType.magtheridonSkullAssignments].assignments[0].actions.forEach((action: AssignmentAction, index: number) => {
      if (index === 0) {
        trashAssignmetns[0] += `${typeof action.caster === 'string' ? action.caster : action.caster?.name}`;
      } else {
        clickAssignments[0] += `| #${index} ${typeof action.caster === 'string' ? action.caster : action.caster?.name} `;
      }
    });
    this.assignments[AssignmentType.magtheridonDiamondAssignments].assignments[0].actions.forEach((action: AssignmentAction, index: number) => {
      if (index < 2) {
        trashAssignmetns[1] += ` ${typeof action.caster === 'string' ? action.caster : action.caster?.name}`;
      } else {
        clickAssignments[1] += `| #${index - 1} ${typeof action.caster === 'string' ? action.caster : action.caster?.name} `;
      }
    });
    this.assignments[AssignmentType.magtheridonCrossAssignments].assignments[0].actions.forEach((action: AssignmentAction, index: number) => {
      if (index < 2) {
        trashAssignmetns[2] += ` ${typeof action.caster === 'string' ? action.caster : action.caster?.name}`;
      } else {
        clickAssignments[2] += `| #${index - 1} ${typeof action.caster === 'string' ? action.caster : action.caster?.name} `;
      }
    });
    this.assignments[AssignmentType.magtheridonTriangleAssignments].assignments[0].actions.forEach((action: AssignmentAction, index: number) => {
      if (index < 3) {
        trashAssignmetns[3] += ` ${typeof action.caster === 'string' ? action.caster : action.caster?.name}`;
      } else {
        clickAssignments[3] += `| #${index - 2} ${typeof action.caster === 'string' ? action.caster : action.caster?.name} `;
      }
    });
    this.assignments[AssignmentType.magtheridonMoonAssignments].assignments[0].actions.forEach((action: AssignmentAction, index: number) => {
      if (index < 3) {
        trashAssignmetns[4] += ` ${typeof action.caster === 'string' ? action.caster : action.caster?.name}`;
      } else {
        clickAssignments[4] += `| #${index - 2} ${typeof action.caster === 'string' ? action.caster : action.caster?.name} `;
      }
    });
    note += '\nMagtheridon Trash Assignments\n';
    note += trashAssignmetns.join('\n');
    note += '\n';
    note += '\nMagtheridon Click Assignments\n';
    note += clickAssignments.join('\n');
    note += '\n';
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
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const feralTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const warriorTanks = this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank);
    const mages = this.getCharactersByClassAndRole(CharacterClass.mage, CharacterRole.ranged);
    const druidRangeds = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.ranged);
    const tanks = [
      ...feralTanks,
      ...paladinTanks,
      ...warriorTanks,
    ]
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const bossTank = tanks.shift();
    const bossMd = hunters.shift();
    const crossTank = tanks.shift();
    const crossMd = hunters.shift();
    const squareTank = tanks.shift();
    const squareMd = hunters.shift();
    const moonTank = mages.shift();
    const moonMd = hunters.shift();
    const triangleTank = druidRangeds.shift();
    const triangleMd = hunters.shift();

    const skullActions: AssignmentAction[] = [];
    skullActions.push({ caster: bossTank, target: 'Boss Tank', icon: IconEnum.skull });
    if (bossMd) {
      skullActions.push({ caster: bossMd, target: `${bossTank?.name}`, icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.hkmSkullAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Skull Assignments',
      actions: skullActions,
    });

    const crossActions: AssignmentAction[] = [];
    crossActions.push({ caster: crossTank, target: 'Cross Tank', icon: IconEnum.cross });
    if (crossMd) {
      crossActions.push({ caster: crossMd, target: `${crossTank?.name}`, icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.hkmCrossAssignments].assignments.push({
      headerIcon: IconEnum.cross,
      headerText: 'Cross Assignments',
      actions: crossActions,
    });

    const squareActions: AssignmentAction[] = [];
    squareActions.push({ caster: squareTank, target: 'Square Tank', icon: IconEnum.square });
    if (squareMd) {
      squareActions.push({ caster: squareMd, target: `${squareTank?.name}`, icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.hkmSquareAssignments].assignments.push({
      headerIcon: IconEnum.square,
      headerText: 'Square Assignments',
      actions: squareActions,
    });

    const moonActions: AssignmentAction[] = [];
    moonActions.push({ caster: moonTank, target: 'Moon Tank', icon: IconEnum.moon });
    if (moonMd) {
      moonActions.push({ caster: moonMd, target: `${moonTank?.name}`, icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.hkmMoonAssignments].assignments.push({
      headerIcon: IconEnum.moon,
      headerText: 'Moon Assignments',
      actions: moonActions,
    });

    const triangleActions: AssignmentAction[] = [];
    triangleActions.push({ caster: triangleTank, target: 'Triangle Tank', icon: IconEnum.triangle });
    if (triangleMd) {
      triangleActions.push({ caster: triangleMd, target: `${triangleTank?.name}`, icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.hkmTriangleAssignments].assignments.push({
      headerIcon: IconEnum.triangle,
      headerText: 'Triangle Assignments',
      actions: triangleActions,
    });
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
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const warriorTanks = this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank);
    const tanks = [ ...warriorTanks, ...druidTanks, ...paladinTanks ];
    const shamanHealers = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);
    const paladinHealers = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer);
    const healers = [ ...shamanHealers, ...paladinHealers ];
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const warlocks = this.getCharactersByClassAndRole(CharacterClass.warlock, CharacterRole.ranged);
    const groups = this.raid.reduce((resultArray: Character[][], item, index) => {
      const chunkIndex = Math.floor(index / 5);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);

    const skullTank = tanks.shift();
    const skullActions: AssignmentAction[] = [];
    skullActions.push({ caster: skullTank, target: 'Skull Tank', icon: IconEnum.skull });
    for (let i = 0; i < 3; i++) {
      skullActions.push({ caster: groups[4].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonSkullAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Skull Assignments',
      actions: skullActions,
    });

    const diamondTank = tanks.length > 2 ? tanks.shift() : skullTank;
    const diamondMd = hunters.shift();
    const diamondActions: AssignmentAction[] = [];
    diamondActions.push({ caster: diamondTank, target: 'Diamond Tank', icon: IconEnum.diamond });
    if (diamondMd) {
      diamondActions.push({ caster: diamondMd, target: diamondTank?.name || 'Diamond Tank', icon: IconEnum.misdirect });
    }
    for (let i = 0; i < 3; i++) {
      diamondActions.push({ caster: groups[3].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonDiamondAssignments].assignments.push({
      headerIcon: IconEnum.diamond,
      headerText: 'Diamond Assignments',
      actions: diamondActions,
    });

    const crossTank = tanks.shift();
    const crossMd = hunters.shift();
    const crossActions: AssignmentAction[] = [];
    crossActions.push({ caster: crossTank, target: 'Cross Tank', icon: IconEnum.cross });
    if (crossMd) {
      crossActions.push({ caster: crossMd, target: crossTank?.name || 'Cross Tank', icon: IconEnum.misdirect });
    }
    for (let i = 0; i < 3; i++) {
      crossActions.push({ caster: groups[2].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonCrossAssignments].assignments.push({
      headerIcon: IconEnum.cross,
      headerText: 'Cross Assignments',
      actions: crossActions,
    });

    const triangleTank = tanks.shift(), moonTank = triangleTank;
    const triangleHeal = healers.shift(), moonHeal = triangleHeal;
    const warlockSupport = warlocks.pop();
    const triangleActions: AssignmentAction[] = [];
    triangleActions.push({ caster: triangleTank, target: 'Triangle Tank', icon: IconEnum.triangle });
    triangleActions.push({ caster: triangleHeal, target: triangleTank?.name || 'Triangle Tank', icon: IconEnum.healingWave });
    triangleActions.push({ caster: warlockSupport, target: 'Banish/Fear', icon: IconEnum.banish });
    for (let i = 0; i < 3; i++) {
      triangleActions.push({ caster: groups[1].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonTriangleAssignments].assignments.push({
      headerIcon: IconEnum.triangle,
      headerText: 'Triangle Assignments',
      actions: triangleActions,
    });

    const moonActions: AssignmentAction[] = [];
    moonActions.push({ caster: moonTank, target: 'Moon Tank', icon: IconEnum.moon });
    moonActions.push({ caster: moonHeal, target: moonTank?.name || 'Moon Tank', icon: IconEnum.healingWave });
    moonActions.push({ caster: warlockSupport, target: 'Banish/Fear', icon: IconEnum.banish });

    // HACK: replace first slot in group #1 (usually bear tank) with moonTank (usually prot pala)
    groups[0].pop();
    groups[0].push(moonTank!);

    for (let i = 0; i < 3; i++) {
      moonActions.push({ caster: groups[0].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonMoonAssignments].assignments.push({
      headerIcon: IconEnum.moon,
      headerText: 'Moon Assignments',
      actions: moonActions,
    });
  }

  copyMrtNoteToBuffer() {
    navigator.clipboard.writeText(this.mrtNote);
  }
}
