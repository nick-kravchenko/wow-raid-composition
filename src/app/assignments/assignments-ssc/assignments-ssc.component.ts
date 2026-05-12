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
}

@Component({
  selector: 'app-assignments-ssc',
  imports: [CharacterTileComponent],
  templateUrl: './assignments-ssc.component.html',
  styleUrl: './assignments-ssc.component.scss'
})
export class AssignmentsSscComponent implements OnInit {
  @Input() raid: Character[] = [];

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
      assignments: []
    },
    [AssignmentType.lurkerBelowAssignments]: {
      headerIcon: IconEnum.lurkerBelow,
      headerText: 'The Lurker Below',
      assignments: []
    },
    [AssignmentType.leoterasAssignments]: {
      headerIcon: IconEnum.leotheras,
      headerText: 'Leotheras the Blind',
      assignments: []
    },
    [AssignmentType.karathressAssignments]: {
      headerIcon: IconEnum.karathress,
      headerText: 'Fathom-Lord Karathress',
      assignments: []
    },
    [AssignmentType.morogrimAssignments]: {
      headerIcon: IconEnum.morogrim,
      headerText: 'Morogrim Tidewalker',
      assignments: []
    },
    [AssignmentType.vashjAssignments]: {
      headerIcon: IconEnum.ladyVashj,
      headerText: 'Lady Vashj',
      assignments: []
    },
  };

  get mrtNote() {
    const casterName = (action: AssignmentAction) =>
      typeof action.caster === 'string' ? action.caster : action.caster?.name ?? '-';
    const targetName = (action: AssignmentAction) =>
      typeof action.target === 'string' ? action.target : (action.target as Character).name;

    let note = '';

    note += 'Hydross the Unstable\n';
    this.assignments[AssignmentType.hydrossAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    note += '\nThe Lurker Below\n';
    this.assignments[AssignmentType.lurkerBelowAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    note += '\nLeotheras the Blind\n';
    this.assignments[AssignmentType.leoterasAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    note += '\nFathom-Lord Karathress\n';
    note += 'Kill Order: Tidalvess => Sharkkis => Karathress (Caribdis - hold separately)\n';
    this.assignments[AssignmentType.karathressAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    note += '\nMorogrim Tidewalker\n';
    this.assignments[AssignmentType.morogrimAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    note += '\nLady Vashj\n';
    this.assignments[AssignmentType.vashjAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
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
    this.fillHydrossAssignments();
    this.fillLurkerBelowAssignments();
    this.fillLeoterasAssignments();
    this.fillKarathressAssignments();
    this.fillMorogrimAssignments();
    this.fillVashjAssignments();
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

    const addActions: AssignmentAction[] = [ nrTank, frTank ].map((tank, i) => ({
      caster: tank,
      target: `Add Tank ${i + 1} (Pure/Tainted Spawn)`,
      icon: undefined,
    }));

    this.assignments[AssignmentType.hydrossAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Adds (after each transition)',
      actions: addActions,
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

    const mt = druidTanks[0];
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
    if (mages[0]) ambusherActions.push({ caster: mages[0], target: 'Ambusher #1 (sheep)', icon: IconEnum.polymorph });
    if (warlocks[0]) ambusherActions.push({ caster: warlocks[0], target: 'Ambusher #2 (fear)', icon: IconEnum.fear });
    if (hunters[0]) ambusherActions.push({ caster: hunters[0], target: 'Ambusher #3 (trap)', icon: IconEnum.freezingTrap });

    this.assignments[AssignmentType.lurkerBelowAssignments].assignments.push({
      headerIcon: IconEnum.polymorph,
      headerText: 'Ambusher Control (small platforms, Submerge)',
      actions: ambusherActions,
    });
  }

  fillLeoterasAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);

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

    const humanTankName = humanPhaseTank?.name ?? 'Main Tank';
    this.assignments[AssignmentType.leoterasAssignments].assignments.push({
      headerIcon: IconEnum.misdirect,
      headerText: 'Misdirect (after Whirlwind / phase switch)',
      actions: hunters.map((hunter, i) => ({
        caster: hunter,
        target: `MD #${i + 1}`,
        icon: IconEnum.misdirect,
      })),
    });
  }

  fillKarathressAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const restoShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);
    const eleShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.ranged);
    const enhaShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.melee);
    const rogues = this.getCharactersByClassAndRole(CharacterClass.rogue, CharacterRole.melee);
    const tank1 = druidTanks.shift();
    const tank2 = paladinTanks.shift();
    const tank3 = druidTanks.shift();


    const actions = [];

    actions.push({
      caster: tank1, target: 'Tidalvess', icon: IconEnum.skull,
    });
    actions.push({
      caster: tank2, target: 'Sharkkis', icon: IconEnum.cross,
    });
    actions.push({
      caster: tank2, target: 'Karathress', icon: IconEnum.square,
    });
    actions.push({
      caster: tank3, target: 'Caribdis', icon: IconEnum.aoeTaunt,
    });

    this.assignments[AssignmentType.karathressAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks (Tidalvess => Sharkkis => Karathress)',
      actions: actions,
    });

    const interrupters = [...restoShamans];
    const interruptActions: AssignmentAction[] = [];
    if (interrupters[0]) interruptActions.push({ caster: interrupters[0], target: 'Healing Wave interrupt #1', icon: IconEnum.kick });

    this.assignments[AssignmentType.karathressAssignments].assignments.push({
      headerIcon: IconEnum.kick,
      headerText: 'Caribdis Healing Wave Interrupt',
      actions: interruptActions,
    });
  }

  fillMorogrimAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);

    this.assignments[AssignmentType.morogrimAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [
        { caster: druidTanks[0], target: 'MT', icon: IconEnum.skull },
        { caster: paladinTanks[0], target: 'Murloc AoE Tank', icon: IconEnum.aoeTaunt },
      ],
    });
  }

  fillVashjAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const eleShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.ranged);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const warlocks = this.getCharactersByClassAndRole(CharacterClass.warlock, CharacterRole.ranged);

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
      { caster: eliteTank, target: 'Coilfang Elite', icon: undefined },
    ];
    if (eleShamans[0]) p2Actions.push({ caster: eleShamans[0], target: 'Coilfang Strider (kite)', icon: undefined });

    this.assignments[AssignmentType.vashjAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Phase 2 - Adds',
      actions: p2Actions,
    });

    const sporebatActions: AssignmentAction[] = [];
    if (hunters[0]) sporebatActions.push({ caster: hunters[0], target: 'Toxic Sporebats', icon: undefined });
    if (hunters[1]) sporebatActions.push({ caster: hunters[1], target: 'Toxic Sporebats', icon: undefined });
    if (warlocks[0]) sporebatActions.push({ caster: warlocks[0], target: 'Toxic Sporebats', icon: undefined });

    if (sporebatActions.length > 0) {
      this.assignments[AssignmentType.vashjAssignments].assignments.push({
        headerIcon: IconEnum.skull,
        headerText: 'Phase 3 - Toxic Sporebats',
        actions: sporebatActions,
      });
    }
  }

  copyMrtNoteToBuffer() {
    navigator.clipboard.writeText(this.mrtNote);
  }
}
