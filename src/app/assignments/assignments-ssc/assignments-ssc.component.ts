import {Component, EmbeddedViewRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
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
  actions: AssignmentAction[];
}

enum AssignmentType {
  hydrossAssignments = 'hydrossAssignments',
  lurkerBelowAssignments = 'lurkerBelowAssignments',
  leoterasAssignments = 'leoterasAssignments',
  karathressAssignments = 'karathressAssignments',
  morogrimAssignments = 'morogrimAssignments',
  vashjAssignments = 'vashjAssignments',
}

interface ClassAssignment {
  headerIcon: string;
  headerText: string;
  assignments: Assignment[];
  planImage?: string;
}

@Component({
  selector: 'app-assignments-ssc',
  imports: [CharacterTileComponent],
  templateUrl: './assignments-ssc.component.html',
  styleUrl: './assignments-ssc.component.scss'
})
export class AssignmentsSscComponent implements OnInit, OnDestroy {
  @Input() raid: Character[] = [];
  @ViewChild('planModal') planModalTemplate!: TemplateRef<unknown>;

  activePlanImage: string | null = null;
  private modalViewRef: EmbeddedViewRef<unknown> | null = null;

  constructor(private vcr: ViewContainerRef) {}

  openPlan(key: AssignmentType) {
    this.activePlanImage = this.assignments[key].planImage ?? null;
    document.body.style.overflow = 'hidden';
    this.modalViewRef = this.vcr.createEmbeddedView(this.planModalTemplate);
    this.modalViewRef.rootNodes.forEach((node: Node) => document.body.appendChild(node));
  }

  closePlan() {
    this.activePlanImage = null;
    document.body.style.overflow = '';
    if (this.modalViewRef) {
      this.modalViewRef.destroy();
      this.modalViewRef = null;
    }
  }

  ngOnDestroy() {
    this.closePlan();
  }

  keys: AssignmentType[] = [
    AssignmentType.hydrossAssignments,
    AssignmentType.lurkerBelowAssignments,
    AssignmentType.leoterasAssignments,
    AssignmentType.karathressAssignments,
    AssignmentType.morogrimAssignments,
    AssignmentType.vashjAssignments,
  ];

  assignments: { [key in AssignmentType]: ClassAssignment } = {
    [AssignmentType.hydrossAssignments]: {
      headerIcon: IconEnum.hydross,
      headerText: 'Hydross the Unstable',
      assignments: [],
      planImage: 'assets/images/plans/hydross.png',
    },
    [AssignmentType.lurkerBelowAssignments]: {
      headerIcon: IconEnum.lurkerBelow,
      headerText: 'The Lurker Below',
      assignments: [],
      planImage: 'assets/images/plans/lurker.png',
    },
    [AssignmentType.leoterasAssignments]: {
      headerIcon: IconEnum.leotheras,
      headerText: 'Leotheras the Blind',
      assignments: [],
      planImage: 'assets/images/plans/leotheras.png',
    },
    [AssignmentType.karathressAssignments]: {
      headerIcon: IconEnum.karathress,
      headerText: 'Fathom-Lord Karathress',
      assignments: [],
    },
    [AssignmentType.morogrimAssignments]: {
      headerIcon: IconEnum.morogrim,
      headerText: 'Morogrim Tidewalker',
      assignments: [],
    },
    [AssignmentType.vashjAssignments]: {
      headerIcon: IconEnum.ladyVashj,
      headerText: 'Lady Vashj',
      assignments: [],
      planImage: 'assets/images/plans/vashj.png',
    },
  };

  private buildPositionalMrtNote(
    bossName: string,
    allAssignments: Assignment[],
    plainCount: number,
    casterName: (a: AssignmentAction) => string,
    targetName: (a: AssignmentAction) => string,
  ): string {
    let note = `${bossName}\n`;

    allAssignments.slice(0, plainCount).forEach(assignment => {
      note += `\n${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    note += '\n';

    const groupAssignments = allAssignments.slice(plainCount);
    groupAssignments.forEach(assignment => {
      const members: string[] = [];
      assignment.actions.forEach(action => {
        if (action.caster) members.push(casterName(action));
        if (typeof action.target !== 'string') members.push(targetName(action));
        else if (action.target !== '-') members.push(action.target);
      });
      note += `${assignment.headerText}: ${members.join(', ')}\n`;
    });

    note += '\n';

    groupAssignments.forEach(assignment => {
      const groupName = assignment.headerText.toUpperCase();
      assignment.actions.forEach(action => {
        if (action.caster) note += `{p:${casterName(action)}}\nYOU ARE IN ${groupName}{/p}`;
        if (typeof action.target !== 'string') note += `{p:${targetName(action)}}\nYOU ARE IN ${groupName}{/p}`;
      });
    });

    return note;
  }

  getMrtNoteForBoss(key: AssignmentType): string {
    const casterName = (action: AssignmentAction) =>
      typeof action.caster === 'string' ? action.caster : action.caster?.name ?? '-';
    const targetName = (action: AssignmentAction) =>
      typeof action.target === 'string' ? action.target : (action.target as Character).name;

    const classAssignment = this.assignments[key];

    if (key === AssignmentType.hydrossAssignments) {
      return this.buildPositionalMrtNote('Hydross the Unstable', classAssignment.assignments, 1, casterName, targetName);
    }

    if (key === AssignmentType.lurkerBelowAssignments) {
      return this.buildPositionalMrtNote('The Lurker Below', classAssignment.assignments, 2, casterName, targetName);
    }

    if (key === AssignmentType.leoterasAssignments) {
      return this.buildPositionalMrtNote('Leotheras the Blind', classAssignment.assignments, 2, casterName, targetName);
    }

    if (key === AssignmentType.vashjAssignments) {
      let note = 'Lady Vashj\n';
      const taintedCoreIndex = 2;

      classAssignment.assignments.forEach((assignment, i) => {
        if (i === taintedCoreIndex) return;
        note += `\n${assignment.headerText}\n`;
        assignment.actions.forEach(action => {
          note += `${casterName(action)} -> ${targetName(action)}\n`;
        });
      });

      const taintedCore = classAssignment.assignments[taintedCoreIndex];
      note += `\n${taintedCore.headerText}\n`;
      taintedCore.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });

      note += '\n';
      taintedCore.actions.forEach(action => {
        if (action.caster) {
          note += `{p:${casterName(action)}}\nTAINTED CORE DUTY: ${targetName(action).toUpperCase()}{/p}`;
        }
      });

      return note;
    }

    let note = classAssignment.headerText + '\n';

    if (key === AssignmentType.karathressAssignments) {
      note += 'Kill Order: Tidalvess ➜ Sharkkis ➜ Karathress (Caribdis - hold separately)\n';
    }

    classAssignment.assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    return note;
  }

  get mrtNote() {
    return this.keys.map(key => this.getMrtNoteForBoss(key)).join('\n');
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
    this.fillHydrossAssignments();
    this.fillLurkerBelowAssignments();
    this.fillLeoterasAssignments();
    this.fillKarathressAssignments();
    this.fillMorogrimAssignments();
    this.fillVashjAssignments();
  }

  pairUp(chars: (Character | undefined)[]): AssignmentAction[] {
    const actions: AssignmentAction[] = [];
    for (let i = 0; i < chars.length; i += 2) {
      actions.push({ caster: chars[i], target: chars[i + 1] ?? '-', icon: undefined });
    }
    return actions;
  }

  private getHydrossRangedPositionGroups(): {label: string; members: Character[]}[] {
    const group4 = this.raid.slice(14, 20);
    const group4NonHealers = group4.filter(c => c?.role !== CharacterRole.healer);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const rangedLeft = this.raid.filter(c =>
      c?.role === CharacterRole.ranged &&
      c?.class !== CharacterClass.hunter &&
      !group4.includes(c)
    );

    const druidHealers = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.healer);
    const priestHealers = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer);
    const paladinHealers = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer);
    const restoShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);
    const raidHealers = [...restoShamans, ...priestHealers];
    const tankHealers = [...paladinHealers, ...druidHealers];
    const allHealers = [...raidHealers, ...tankHealers];

    const leftHealers: Character[] = [];
    const rightHealers: Character[] = [];
    allHealers.forEach((h, i) => (i % 2 === 0 ? leftHealers : rightHealers).push(h));

    return [
      { label: 'Left', members: [...rangedLeft, ...leftHealers] },
      { label: 'Middle', members: group4NonHealers },
      { label: 'Right', members: [...hunters, ...rightHealers] },
    ];
  }

  fillHydrossAssignments() {
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const frTank = paladinTanks.shift();
    const nrTank = druidTanks.shift();

    this.assignments[AssignmentType.hydrossAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [
        { caster: frTank, target: 'FR Tank (Frost Phase)', icon: IconEnum.skull },
        { caster: nrTank, target: 'NR Tank (Nature Phase)', icon: IconEnum.skull },
      ],
    });

    this.getHydrossRangedPositionGroups().forEach(group => {
      this.assignments[AssignmentType.hydrossAssignments].assignments.push({
        headerIcon: IconEnum.skull,
        headerText: `Ranged ${group.label}`,
        actions: this.pairUp(group.members),
      });
    });

    const warriors = this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.melee);
    const rogues = this.getCharactersByClassAndRole(CharacterClass.rogue, CharacterRole.melee);
    const enhShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.melee);
    const retPaladins = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.melee);
    const ferals = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.melee);
    const meleeDps = [...warriors, ...rogues, ...enhShamans, ...retPaladins, ...ferals];

    const meleeGroups: Character[][] = [[], []];
    meleeDps.forEach((char, i) => meleeGroups[i % 2].push(char));

    ['Left', 'Right'].forEach((groupName, i) => {
      this.assignments[AssignmentType.hydrossAssignments].assignments.push({
        headerIcon: IconEnum.skull,
        headerText: `Melee ${groupName}`,
        actions: this.pairUp(meleeGroups[i]),
      });
    });
  }

  fillLurkerBelowAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const tanks = [
      ...druidTanks,
      ...paladinTanks,
    ];
    const mages = this.getCharactersByClassAndRole(CharacterClass.mage, CharacterRole.ranged);
    const warlocks = this.getCharactersByClassAndRole(CharacterClass.warlock, CharacterRole.ranged);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);

    const actions = [];

    for (let i = 0; i < tanks.length; i++) {
      const tank = tanks[i];
      if (i === 0) {
        actions.push({ caster: tank, target: 'MT', icon: IconEnum.skull });
      } else {
        actions.push({ caster: tank, target: `OT ${i} (melee adds)`, icon: IconEnum.skull });
      }
    }

    this.assignments[AssignmentType.lurkerBelowAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: actions,
    });

    const ambusherActions: AssignmentAction[] = [];
    if (mages[0]) ambusherActions.push({ caster: mages[0], target: 'Ambusher #1', icon: IconEnum.polymorph });
    if (hunters[0]) ambusherActions.push({ caster: hunters[0], target: 'Ambusher #2', icon: IconEnum.freezingTrap });
    if (warlocks[0]) ambusherActions.push({ caster: warlocks[0], target: 'Ambusher #3', icon: IconEnum.fear });

    this.assignments[AssignmentType.lurkerBelowAssignments].assignments.push({
      headerIcon: IconEnum.polymorph,
      headerText: 'Ambusher Control (small platforms, Submerge)',
      actions: ambusherActions,
    });

    const [left, middle, right] = this.getHydrossRangedPositionGroups();
    const middleMembers = right.members.filter(character => character.role !== CharacterRole.healer);
    const movedHealers = right.members.filter(character => character.role === CharacterRole.healer);

    [
      {label: left.label, members: left.members},
      {label: middle.label, members: middleMembers},
      {label: right.label, members: [...middle.members, ...movedHealers]},
    ].forEach(group => {
      this.assignments[AssignmentType.lurkerBelowAssignments].assignments.push({
        headerIcon: IconEnum.skull,
        headerText: group.label.toUpperCase(),
        actions: this.pairUp(group.members),
      });
    });
  }

  fillLeoterasAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const mages = this.getCharactersByClassAndRole(CharacterClass.mage, CharacterRole.ranged);
    const warlocks = this.getCharactersByClassAndRole(CharacterClass.warlock, CharacterRole.ranged);
    const eleShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.ranged);
    const boomies = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.ranged);
    const shadowPriests = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.ranged);

    const groups: Character[][] = this.raid.reduce((result: Character[][], char, index) => {
      const chunkIndex = Math.floor(index / 5);
      if (!result[chunkIndex]) result[chunkIndex] = [];
      result[chunkIndex].push(char);
      return result;
    }, []);
    const group4 = groups[3] ?? [];

    const humanPhaseTank = druidTanks[0] ?? paladinTanks[0];
    const demonPhaseTank = paladinTanks[0];

    this.assignments[AssignmentType.leoterasAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [
        { caster: humanPhaseTank, target: 'Human Phase (MT)', icon: IconEnum.skull },
        { caster: demonPhaseTank, target: 'Demon Phase (FR Tank)', icon: IconEnum.protection },
      ],
    });

    this.assignments[AssignmentType.leoterasAssignments].assignments.push({
      headerIcon: IconEnum.misdirect,
      headerText: 'Misdirect (after Whirlwind / phase switch)',
      actions: hunters.map((hunter, i) => ({
        caster: hunter,
        target: `MD #${i + 1}`,
        icon: IconEnum.misdirect,
      })),
    });

    const druidHealers = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.healer);
    const priestHealers = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer);
    const paladinHealers = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer);
    const restoShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);
    const leftHealers = [...restoShamans, ...paladinHealers];
    const rightHealers = [...priestHealers, ...druidHealers];

    const otherRanged = [...mages, ...warlocks, ...eleShamans, ...boomies, ...shadowPriests]
      .filter(char => !group4.includes(char));

    [
      { label: 'Left ', members: [...otherRanged, ...rightHealers] },
      { label: 'Middle', members: group4 },
      { label: 'Right', members: [...hunters, ...leftHealers] },
    ].forEach(group => {
      this.assignments[AssignmentType.leoterasAssignments].assignments.push({
        headerIcon: IconEnum.skull,
        headerText: group.label,
        actions: this.pairUp(group.members),
      });
    });
  }

  fillKarathressAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const restoShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const karathressTank = druidTanks.shift();
    const protectionPaladinTank = paladinTanks.shift();
    const caribdisTank = druidTanks.shift();
    const md1 = hunters.shift();
    const md2 = hunters.shift();
    const md3 = hunters.shift();
    const md4 = hunters.shift();

    const actionsTidalvess = [{ caster: protectionPaladinTank, target: 'Tidalvess', icon: IconEnum.skull }];
    const actionsSharkkis = [{ caster: protectionPaladinTank, target: 'Sharkkis', icon: IconEnum.cross }];
    const actionsKarathress = [{ caster: karathressTank, target: 'Karathress', icon: IconEnum.square }];
    const actionsCaribdis = [{ caster: caribdisTank, target: 'Caribdis', icon: IconEnum.moon }];

    if (md1) {
      actionsTidalvess.push({ caster: md1, target: protectionPaladinTank?.name ?? 'Tidalvess Tank', icon: IconEnum.misdirect });
    }
    if (md2) {
      actionsSharkkis.push({ caster: md2, target: protectionPaladinTank?.name ?? 'Sharkkis Tank', icon: IconEnum.misdirect });
    }
    if (md3) {
      actionsCaribdis.push({ caster: md3, target: caribdisTank?.name ?? 'Caribdis Tank', icon: IconEnum.misdirect });
    }
    if (md4) {
      actionsKarathress.push({ caster: md4, target: karathressTank?.name ?? 'Karathress Tank', icon: IconEnum.misdirect });
    }
    actionsCaribdis.push(...(restoShamans[0] ? [{ caster: restoShamans[0], target: 'Healing Wave interrupt', icon: IconEnum.kick }] : []));

    this.assignments[AssignmentType.karathressAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tidalvess',
      actions: actionsTidalvess,
    });
    this.assignments[AssignmentType.karathressAssignments].assignments.push({
      headerIcon: IconEnum.cross,
      headerText: 'Sharkkis',
      actions: actionsSharkkis,
    });
    this.assignments[AssignmentType.karathressAssignments].assignments.push({
      headerIcon: IconEnum.square,
      headerText: 'Karathress',
      actions: actionsKarathress,
    });
    this.assignments[AssignmentType.karathressAssignments].assignments.push({
      headerIcon: IconEnum.moon,
      headerText: 'Caribdis',
      actions: actionsCaribdis,
    });
  }

  fillMorogrimAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const druidHealers = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.healer);
    const priestHealers = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer);
    const paladinHealers = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer);
    const restoShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);
    const healers = [...druidHealers, ...priestHealers, ...paladinHealers, ...restoShamans];

    this.assignments[AssignmentType.morogrimAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [
        { caster: druidTanks[0], target: 'MT', icon: IconEnum.skull },
        { caster: paladinTanks[0], target: 'Murloc AoE Tank', icon: IconEnum.aoeTaunt },
      ],
    });

    this.assignments[AssignmentType.morogrimAssignments].assignments.push({
      headerIcon: IconEnum.wateryGrave,
      headerText: 'Watery Grave Healers',
      actions: [
        { caster: healers.shift(), target: 'Healer', icon: undefined },
        { caster: healers.shift(), target: 'Backup', icon: undefined },
      ],
    });
  }

  fillVashjAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const eleShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.ranged);
    const warriors = this.getCharactersByClassAndRole(CharacterClass.warrior, CharacterRole.melee);
    const rogues = this.getCharactersByClassAndRole(CharacterClass.rogue, CharacterRole.melee);
    const enhShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.melee);
    const druidHealers = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.healer);
    const priestHealers = this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer);
    const paladinHealers = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer);
    const restoShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);
    const staticChargeHealer = [...druidHealers, ...priestHealers, ...paladinHealers, ...restoShamans][0];
    const raidHealers = [...restoShamans, ...priestHealers];
    const tankHealers = [...paladinHealers, ...druidHealers];

    const mt = druidTanks[0] ?? paladinTanks[0];
    const eliteTank = druidTanks[0] ?? paladinTanks[0];

    this.assignments[AssignmentType.vashjAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Phase 1 - Boss',
      actions: [
        { caster: mt, target: 'MT', icon: undefined },
      ],
    });

    const p2Actions: AssignmentAction[] = [
      { caster: eliteTank, target: 'Naga (Behind the boss)', icon: undefined },
      { caster: paladinTanks[0], target: 'Naga (Entrance)', icon: undefined },
    ];
    if (eleShamans[0]) p2Actions.push({ caster: eleShamans[0], target: 'Coilfang Strider (kite)', icon: undefined });

    this.assignments[AssignmentType.vashjAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Phase 2 - Adds',
      actions: p2Actions,
    });

    const elementalKillers = [...warriors, ...rogues, ...enhShamans].slice(0, 5);
    const positions = [
      '1',
      '2',
      '3',
      '4',
      '5',
    ];
    const taintedCoreActions: AssignmentAction[] = positions.map((position, i) => ({
      caster: elementalKillers[i],
      target: position,
      icon: undefined,
    }));

    this.assignments[AssignmentType.vashjAssignments].assignments.push({
      headerIcon: IconEnum.taintedCore,
      headerText: 'Phase 2 - Tainted Core Duty',
      actions: taintedCoreActions,
    });

    this.assignments[AssignmentType.vashjAssignments].assignments.push({
      headerIcon: IconEnum.healingTouch,
      headerText: 'Phase 2 - Healer Position',
      actions: [
        { caster: raidHealers.shift(), target: '1', icon: undefined },
        { caster: tankHealers.shift(), target: '2', icon: undefined },
        { caster: raidHealers.shift(), target: '3', icon: undefined },
        { caster: tankHealers.shift(), target: '4', icon: undefined },
      ],
    });

    this.assignments[AssignmentType.vashjAssignments].assignments.push({
      headerIcon: IconEnum.staticCharge,
      headerText: 'Static Charge Healer',
      actions: [
        { caster: staticChargeHealer, target: 'Static Charge', icon: IconEnum.staticCharge },
      ],
    });
  }

  copyMrtNoteForBoss(key: AssignmentType) {
    navigator.clipboard.writeText(this.getMrtNoteForBoss(key));
  }

  copyMrtNoteToBuffer() {
    const json: Record<string, string> = {};
    this.keys.forEach(key => {
      json[this.assignments[key].headerText] = this.getMrtNoteForBoss(key);
    });
    navigator.clipboard.writeText(JSON.stringify(json, null, 2));
  }
}
