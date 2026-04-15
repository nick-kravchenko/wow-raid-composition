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
  magtheridonSkullTankHealAssignments,
  magtheridonDiamondTankHealAssignments,
  magtheridonCrossTankHealAssignments,
  magtheridonTriangleTankHealAssignments,
  magtheridonMoonTankHealAssignments,
  magtheridonDiamondKickAssignments,
  magtheridonSkullKickAssignments,
  magtheridonCrossKickAssignments,
  magtheridonTriangleKickAssignments,
  magtheridonMoonKickAssignments,
  magtheridonSkullClickAssignments,
  magtheridonDiamondClickAssignments,
  magtheridonCrossClickAssignments,
  magtheridonTriangleClickAssignments,
  magtheridonMoonClickAssignments,
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
    AssignmentType.magtheridonSkullTankHealAssignments,
    AssignmentType.magtheridonDiamondTankHealAssignments,
    AssignmentType.magtheridonCrossTankHealAssignments,
    AssignmentType.magtheridonTriangleTankHealAssignments,
    AssignmentType.magtheridonMoonTankHealAssignments,
    AssignmentType.magtheridonSkullKickAssignments,
    AssignmentType.magtheridonDiamondKickAssignments,
    AssignmentType.magtheridonCrossKickAssignments,
    AssignmentType.magtheridonTriangleKickAssignments,
    AssignmentType.magtheridonMoonKickAssignments,
    AssignmentType.magtheridonSkullClickAssignments,
    AssignmentType.magtheridonDiamondClickAssignments,
    AssignmentType.magtheridonCrossClickAssignments,
    AssignmentType.magtheridonTriangleClickAssignments,
    AssignmentType.magtheridonMoonClickAssignments,
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
    [AssignmentType.magtheridonSkullTankHealAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Trash',
      assignments: []
    },
    [AssignmentType.magtheridonSkullKickAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Kicks',
      assignments: []
    },
    [AssignmentType.magtheridonSkullClickAssignments]: {
      headerIcon: IconEnum.skull,
      headerText: 'Clicks',
      assignments: []
    },
    [AssignmentType.magtheridonDiamondTankHealAssignments]: {
      headerIcon: IconEnum.diamond,
      headerText: 'Trash',
      assignments: []
    },
    [AssignmentType.magtheridonDiamondKickAssignments]: {
      headerIcon: IconEnum.diamond,
      headerText: 'Kicks',
      assignments: []
    },
    [AssignmentType.magtheridonDiamondClickAssignments]: {
      headerIcon: IconEnum.diamond,
      headerText: 'Clicks',
      assignments: []
    },
    [AssignmentType.magtheridonCrossTankHealAssignments]: {
      headerIcon: IconEnum.cross,
      headerText: 'Trash',
      assignments: []
    },
    [AssignmentType.magtheridonCrossKickAssignments]: {
      headerIcon: IconEnum.cross,
      headerText: 'Kicks',
      assignments: []
    },
    [AssignmentType.magtheridonCrossClickAssignments]: {
      headerIcon: IconEnum.cross,
      headerText: 'Clicks',
      assignments: []
    },
    [AssignmentType.magtheridonTriangleTankHealAssignments]: {
      headerIcon: IconEnum.triangle,
      headerText: 'Trash',
      assignments: []
    },
    [AssignmentType.magtheridonTriangleKickAssignments]: {
      headerIcon: IconEnum.triangle,
      headerText: 'Kicks',
      assignments: []
    },
    [AssignmentType.magtheridonTriangleClickAssignments]: {
      headerIcon: IconEnum.triangle,
      headerText: 'Clicks',
      assignments: []
    },
    [AssignmentType.magtheridonMoonTankHealAssignments]: {
      headerIcon: IconEnum.moon,
      headerText: 'Trash',
      assignments: []
    },
    [AssignmentType.magtheridonMoonKickAssignments]: {
      headerIcon: IconEnum.moon,
      headerText: 'Kicks',
      assignments: []
    },
    [AssignmentType.magtheridonMoonClickAssignments]: {
      headerIcon: IconEnum.moon,
      headerText: 'Clicks',
      assignments: []
    },
  };
  numberOfClickers = 4;

  get fojjiCubeAssignments() {
    const clickKeys = [
      AssignmentType.magtheridonSkullClickAssignments,
      AssignmentType.magtheridonDiamondClickAssignments,
      AssignmentType.magtheridonCrossClickAssignments,
      AssignmentType.magtheridonTriangleClickAssignments,
      AssignmentType.magtheridonMoonClickAssignments,
    ];
    const clickAssignments: string[] = new Array(this.numberOfClickers).fill('').map((_, i) => `${i + 1}-`);
    const casterName = (action: AssignmentAction) => typeof action.caster === 'string' ? action.caster : action.caster?.name ?? '-';

    let assignments = '';
    for (let team = 0; team < this.numberOfClickers; team++) {
      for (let key of clickKeys) {
        clickAssignments[team] += ',' + casterName(this.assignments[key].assignments[0].actions[team]);
      }
    }
    assignments += clickAssignments.map(assignment => assignment.replace('-,', '-')).join(',');

    return assignments;
  }

  get mrtNote() {
    let raidLeaderCharacterName = this.raid.find(character => character.player!.name === 'Krava')!.name;
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
    let note = '';
    note += 'Trash Assignments\n';
    for (let i = 0; i < tanks.length; i++) {
      note += `{${marksToTank[i].text.toLowerCase()}} on ${tanks[i].name}\n`;
    }

    note += '\nHigh King Maulgar Assignments';
    [
      ...this.assignments[AssignmentType.hkmSkullAssignments].assignments[0].actions,
      ...this.assignments[AssignmentType.hkmCrossAssignments].assignments[0].actions,
      ...this.assignments[AssignmentType.hkmSquareAssignments].assignments[0].actions,
      ...this.assignments[AssignmentType.hkmMoonAssignments].assignments[0].actions,
      ...this.assignments[AssignmentType.hkmTriangleAssignments].assignments[0].actions,
    ].forEach((action: AssignmentAction) => {
      const mark = action.icon;
      const markText = Object.keys(IconEnum).find(key => IconEnum[key as keyof typeof IconEnum] === mark);
      if (markText !== 'misdirect') note += `\n{${markText}} `;
      note += ` -> ${typeof action.caster === 'string' ? action.caster : action.caster?.name}`;
    });

    note += '\n\nGruul the Dragon Killer Assignments\n';
    this.assignments[AssignmentType.gruulTheDragonKillerAssignments].assignments.forEach(assignment => {
      assignment.actions.forEach(action => {
        note += `{spell:34477} ${typeof action.caster === 'string' ? action.caster : action.caster?.name} -> ${typeof action.target === 'string' ? action.target : action.target?.name}\n`;
      });
    });

    const casterName = (action: AssignmentAction) => typeof action.caster === 'string' ? action.caster : action.caster?.name ?? '-';

    const tankHealKeys = [
      AssignmentType.magtheridonSkullTankHealAssignments,
      AssignmentType.magtheridonDiamondTankHealAssignments,
      AssignmentType.magtheridonCrossTankHealAssignments,
      AssignmentType.magtheridonTriangleTankHealAssignments,
      AssignmentType.magtheridonMoonTankHealAssignments,
    ];
    const clickKeys = [
      AssignmentType.magtheridonSkullClickAssignments,
      AssignmentType.magtheridonDiamondClickAssignments,
      AssignmentType.magtheridonCrossClickAssignments,
      AssignmentType.magtheridonTriangleClickAssignments,
      AssignmentType.magtheridonMoonClickAssignments,
    ];
    const kickKeys = [
      AssignmentType.magtheridonSkullKickAssignments,
      AssignmentType.magtheridonDiamondKickAssignments,
      AssignmentType.magtheridonCrossKickAssignments,
      AssignmentType.magtheridonTriangleKickAssignments,
      AssignmentType.magtheridonMoonKickAssignments,
    ];
    const marks: string[] = ['{skull} ', '{diamond} ', '{cross} ', '{triangle} ', '{moon} '];
    const trashAssignmetns: string[] = [...marks];
    const clickAssignments: string[] = [...marks];
    const kickAssignments: string[] = [...marks];
    tankHealKeys.forEach((key, i) => {
      this.assignments[key].assignments[0].actions.forEach(action => {
        trashAssignmetns[i] += `${casterName(action)} `;
      });
    });
    clickKeys.forEach((key, i) => {
      this.assignments[key].assignments[0].actions.forEach((action, index) => {
        clickAssignments[i] += `| #${index + 1} ${casterName(action)} `;
      });
    });
    kickKeys.forEach((key, i) => {
      this.assignments[key].assignments[0].actions.forEach(action => {
        kickAssignments[i] += `${casterName(action)} `;
      });
    });
    note += '\nMagtheridon Trash Assignments\n';
    note += trashAssignmetns.join('\n');
    note += '\n';
    note += '\nMagtheridon Click Assignments\n';
    note += `{p:${raidLeaderCharacterName}}`;
    note += clickAssignments.join('\n');
    note += '{/p}';
    clickKeys.forEach((key, i) => {
      this.assignments[key].assignments[0].actions.forEach((action, index) => {
        note += `{p:${casterName(action)}}\nYOU ARE #${index + 1} CLICKER AT ${marks[i]}{/p}`;
      });
    });
    note += '\n';
    note += '\nMagtheridon Kick Assignments\n';
    note += kickAssignments.join('\n');
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
    const tanks = [...feralTanks, ...warriorTanks, ...paladinTanks];
    const mages = this.getCharactersByClassAndRole(CharacterClass.mage, CharacterRole.ranged);
    const druidRangeds = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.ranged);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const bossTank = tanks.shift();
    const crossTank = paladinTanks.length ? paladinTanks.shift() : tanks.shift();
    const squareTank = paladinTanks.length ? crossTank : tanks.shift();
    const moonTank = druidRangeds.shift();
    const triangleTank = mages.shift();
    const md1 = hunters.shift();
    const md2 = hunters.shift();
    const md3 = hunters.shift();
    const md4 = hunters.shift();

    const skullActions: AssignmentAction[] = [];
    skullActions.push({ caster: bossTank, target: 'Boss Tank', icon: IconEnum.skull });
    if (md1) {
      skullActions.push({ caster: md1, target: `${bossTank?.name}`, icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.hkmSkullAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Skull Assignments',
      actions: skullActions,
    });

    const crossActions: AssignmentAction[] = [];
    crossActions.push({ caster: crossTank, target: 'Cross Tank', icon: IconEnum.cross });
    if (md2) {
      crossActions.push({ caster: md2, target: `${crossTank?.name || '-'}`, icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.hkmCrossAssignments].assignments.push({
      headerIcon: IconEnum.cross,
      headerText: 'Cross Assignments',
      actions: crossActions,
    });

    const squareActions: AssignmentAction[] = [];
    squareActions.push({ caster: squareTank, target: 'Square Tank', icon: IconEnum.square });
    this.assignments[AssignmentType.hkmSquareAssignments].assignments.push({
      headerIcon: IconEnum.square,
      headerText: 'Square Assignments',
      actions: squareActions,
    });
    if (md3) {
      squareActions.push({ caster: md3, target: `${squareTank?.name || '-'}`, icon: IconEnum.misdirect });
    }

    const moonActions: AssignmentAction[] = [];
    moonActions.push({ caster: moonTank, target: 'Moon Tank', icon: IconEnum.moon });
    this.assignments[AssignmentType.hkmMoonAssignments].assignments.push({
      headerIcon: IconEnum.moon,
      headerText: 'Moon Assignments',
      actions: moonActions,
    });

    const triangleActions: AssignmentAction[] = [];
    triangleActions.push({ caster: triangleTank, target: 'Triangle Tank', icon: IconEnum.triangle });
    if (md4) {
      triangleActions.push({ caster: md4, target: `${triangleTank?.name || '-'}`, icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.hkmTriangleAssignments].assignments.push({
      headerIcon: IconEnum.triangle,
      headerText: 'Triangle Assignments',
      actions: triangleActions,
    });
  }

  fillGruulTheDragonslayerAssignments() {
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const warriorTanks = this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.tank);
    const mainTanks = [...paladinTanks, ...warriorTanks];
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
        ? (mainTanks[0] || 'Main Tank')
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
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const groups = this.raid.reduce((resultArray: Character[][], item, index) => {
      const chunkIndex = Math.floor(index / 5);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);

    const restoShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);
    const enhaShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.melee);
    const meleeWarriors = this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.melee);
    const rogues = this.getCharactersByClassAndRole(CharacterClass.rogue, CharacterRole.melee);

    // Determine all tanks and MDs upfront, then remove them from click groups
    const skullTank = tanks.shift();
    const diamondTank = tanks.length > 2 ? tanks.shift() : skullTank;
    const crossTank = tanks.shift();
    const triangleTank = tanks.shift(), moonTank = triangleTank;
    const diamondMd = hunters.shift();
    const crossMd = hunters.shift();
    const triangleMd = hunters.shift();

    this.assignments[AssignmentType.magtheridonSkullTankHealAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Skull Tank',
      actions: [{ caster: skullTank, target: 'Skull Tank', icon: IconEnum.skull }],
    });
    const skullClickActions: AssignmentAction[] = [];
    for (let i = 0; i < this.numberOfClickers; i++) {
      skullClickActions.push({ caster: groups[4].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonSkullClickAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Skull Clicks',
      actions: skullClickActions,
    });

    const diamondTankHealActions: AssignmentAction[] = [];
    diamondTankHealActions.push({ caster: diamondTank, target: 'Diamond Tank', icon: IconEnum.diamond });
    if (diamondMd) {
      diamondTankHealActions.push({ caster: diamondMd, target: diamondTank?.name || 'Diamond Tank', icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.magtheridonDiamondTankHealAssignments].assignments.push({
      headerIcon: IconEnum.diamond,
      headerText: 'Diamond Tank',
      actions: diamondTankHealActions,
    });
    const diamondClickActions: AssignmentAction[] = [];
    for (let i = 0; i < this.numberOfClickers; i++) {
      diamondClickActions.push({ caster: groups[3].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonDiamondClickAssignments].assignments.push({
      headerIcon: IconEnum.diamond,
      headerText: 'Diamond Clicks',
      actions: diamondClickActions,
    });

    const crossTankHealActions: AssignmentAction[] = [];
    crossTankHealActions.push({ caster: crossTank, target: 'Cross Tank', icon: IconEnum.cross });
    if (crossMd) {
      crossTankHealActions.push({ caster: crossMd, target: crossTank?.name || 'Cross Tank', icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.magtheridonCrossTankHealAssignments].assignments.push({
      headerIcon: IconEnum.cross,
      headerText: 'Cross Tank',
      actions: crossTankHealActions,
    });
    const crossClickActions: AssignmentAction[] = [];
    for (let i = 0; i < this.numberOfClickers; i++) {
      crossClickActions.push({ caster: groups[2].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonCrossClickAssignments].assignments.push({
      headerIcon: IconEnum.cross,
      headerText: 'Cross Clicks',
      actions: crossClickActions,
    });

    const triangleTankActions: AssignmentAction[] = [
      { caster: triangleTank, target: 'Triangle Tank', icon: IconEnum.triangle },
    ];
    if (triangleMd) {
      triangleTankActions.push({ caster: triangleMd, target: triangleTank?.name || 'Triangle Tank', icon: IconEnum.misdirect });
    }
    this.assignments[AssignmentType.magtheridonTriangleTankHealAssignments].assignments.push({
      headerIcon: IconEnum.triangle,
      headerText: 'Triangle Tank',
      actions: triangleTankActions,
    });
    const triangleClickActions: AssignmentAction[] = [];
    for (let i = 0; i < this.numberOfClickers; i++) {
      triangleClickActions.push({ caster: groups[1].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonTriangleClickAssignments].assignments.push({
      headerIcon: IconEnum.triangle,
      headerText: 'Triangle Clicks',
      actions: triangleClickActions,
    });

    this.assignments[AssignmentType.magtheridonMoonTankHealAssignments].assignments.push({
      headerIcon: IconEnum.moon,
      headerText: 'Moon Tank',
      actions: [
        { caster: moonTank, target: 'Moon Tank', icon: IconEnum.moon },
      ],
    });

    const moonClickActions: AssignmentAction[] = [];
    for (let i = 0; i < this.numberOfClickers; i++) {
      moonClickActions.push({ caster: groups[0].pop(), target: `Click ${i + 1}`, icon: undefined });
    }
    this.assignments[AssignmentType.magtheridonMoonClickAssignments].assignments.push({
      headerIcon: IconEnum.moon,
      headerText: 'Moon Clicks',
      actions: moonClickActions,
    });

    // Kick assignments
    this.assignments[AssignmentType.magtheridonSkullKickAssignments].assignments.push({
      headerIcon: IconEnum.kick,
      headerText: 'Skull Kicks',
      actions: restoShamans.map(c => ({ caster: c, target: 'Skull Kick', icon: IconEnum.kick })),
    });
    this.assignments[AssignmentType.magtheridonDiamondKickAssignments].assignments.push({
      headerIcon: IconEnum.kick,
      headerText: 'Diamond Kicks',
      actions: enhaShamans[0] ? [{ caster: enhaShamans[0], target: 'Diamond Kick', icon: IconEnum.kick }] : [],
    });
    this.assignments[AssignmentType.magtheridonCrossKickAssignments].assignments.push({
      headerIcon: IconEnum.kick,
      headerText: 'Cross Kicks',
      actions: enhaShamans[1] ? [{ caster: enhaShamans[1], target: 'Cross Kick', icon: IconEnum.kick }] : [],
    });
    this.assignments[AssignmentType.magtheridonTriangleKickAssignments].assignments.push({
      headerIcon: IconEnum.kick,
      headerText: 'Triangle Kicks',
      actions: meleeWarriors.map(c => ({ caster: c, target: 'Triangle Kick', icon: IconEnum.kick })),
    });
    this.assignments[AssignmentType.magtheridonMoonKickAssignments].assignments.push({
      headerIcon: IconEnum.kick,
      headerText: 'Moon Kicks',
      actions: rogues.map(c => ({ caster: c, target: 'Moon Kick', icon: IconEnum.kick })),
    });
  }

  copyMrtNoteToBuffer() {
    navigator.clipboard.writeText(this.mrtNote);
  }

  copyFojjiCubeAssignmentsToBufer() {
    navigator.clipboard.writeText(this.fojjiCubeAssignments);
  }
}
