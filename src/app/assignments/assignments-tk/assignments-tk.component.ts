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
  alarAssignments = 'alarAssignments',
  voidReaverAssignments = 'voidReaverAssignments',
  solarianAssignments = 'solarianAssignments',
  kaelthasAssignments = 'kaelthasAssignments',
}

interface ClassAssignment {
  headerIcon: string;
  headerText: string;
  assignments: Assignment[];
}

@Component({
  selector: 'app-assignments-tk',
  imports: [CharacterTileComponent],
  templateUrl: './assignments-tk.component.html',
  styleUrl: './assignments-tk.component.scss'
})
export class AssignmentsTkComponent implements OnInit {
  @Input() raid: Character[] = [];

  keys: AssignmentType[] = [
    AssignmentType.alarAssignments,
    AssignmentType.voidReaverAssignments,
    AssignmentType.solarianAssignments,
    AssignmentType.kaelthasAssignments,
  ];

  assignments: { [key in AssignmentType]: ClassAssignment } = {
    [AssignmentType.alarAssignments]: {
      headerIcon: IconEnum.alar,
      headerText: 'Al\'ar',
      assignments: []
    },
    [AssignmentType.voidReaverAssignments]: {
      headerIcon: IconEnum.voidReaver,
      headerText: 'Void Reaver',
      assignments: []
    },
    [AssignmentType.solarianAssignments]: {
      headerIcon: IconEnum.solarian,
      headerText: 'High Astromancer Solarian',
      assignments: []
    },
    [AssignmentType.kaelthasAssignments]: {
      headerIcon: IconEnum.kaelthas,
      headerText: 'Kael\'thas Sunstrider',
      assignments: []
    },
  };

  get mrtNote() {
    const casterName = (action: AssignmentAction) =>
      typeof action.caster === 'string' ? action.caster : action.caster?.name ?? '-';
    const targetName = (action: AssignmentAction) =>
      typeof action.target === 'string' ? action.target : (action.target as Character).name;

    let note = '';

    note += 'Al\'ar\n';
    this.assignments[AssignmentType.alarAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    note += '\nVoid Reaver\n';
    this.assignments[AssignmentType.voidReaverAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    note += '\nHigh Astromancer Solarian\n';
    this.assignments[AssignmentType.solarianAssignments].assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    note += '\nKael\'thas Sunstrider\n';
    note += 'Kill Order: Thaladred ➜ Sanguinar ➜ Capernian ➜ Telonicus\n';
    this.assignments[AssignmentType.kaelthasAssignments].assignments.forEach(assignment => {
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
    this.fillAlarAssignments();
    this.fillVoidReaverAssignments();
    this.fillSolarianAssignments();
    this.fillKaelthasAssignments();
  }

  fillAlarAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);

    this.assignments[AssignmentType.alarAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P1 Platform Tanks',
      actions: [
        { caster: druidTanks[0], target: 'Platform Tank #1', icon: undefined },
        { caster: druidTanks[1], target: 'Platform Tank #2', icon: undefined },
      ],
    });

    this.assignments[AssignmentType.alarAssignments].assignments.push({
      headerIcon: IconEnum.alar,
      headerText: 'P1 Ember of Al\'ar',
      actions: [
        { caster: paladinTanks[0], target: 'Ember Tank', icon: undefined },
      ],
    });

    this.assignments[AssignmentType.alarAssignments].assignments.push({
      headerIcon: IconEnum.sunderArmor,
      headerText: 'P2 Melt Armor Swap',
      actions: [
        { caster: druidTanks[0], target: 'Tank #1', icon: undefined },
        { caster: druidTanks[1], target: 'Tank #2', icon: undefined },
      ],
    });

    this.assignments[AssignmentType.alarAssignments].assignments.push({
      headerIcon: IconEnum.alar,
      headerText: 'P2 Ember Adds',
      actions: [
        { caster: paladinTanks[0], target: 'Ember adds', icon: undefined },
      ],
    });
  }

  fillVoidReaverAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const tanks = [...paladinTanks, ...druidTanks];

    this.assignments[AssignmentType.voidReaverAssignments].assignments.push({
      headerIcon: IconEnum.knockAway,
      headerText: 'Knock Away Rotation',
      actions: tanks.map((tank, i) => ({
        caster: tank,
        target: `Tank ${i + 1}`,
        icon: undefined,
      })),
    });

    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    if (hunters.length > 0) {
      this.assignments[AssignmentType.voidReaverAssignments].assignments.push({
        headerIcon: IconEnum.hunter,
        headerText: 'Hunters (max range)',
        actions: tanks.flatMap((tank, tankIdx) =>
          hunters
            .filter((_, hi) => hi % tanks.length === tankIdx)
            .map(hunter => ({ caster: hunter, target: tank, icon: undefined }))
        ),
      });
    }
  }

  fillSolarianAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);

    this.assignments[AssignmentType.solarianAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Tanks',
      actions: [
        { caster: (druidTanks.shift()), target: 'Main Tank', icon: IconEnum.skull },
        { caster: (paladinTanks.shift()), target: 'Adds Tank (add phases ~every 50s)', icon: undefined },
      ],
    });
  }

  fillKaelthasAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const warlocks = this.getCharactersByClassAndRole(CharacterClass.warlock, CharacterRole.ranged);
    const rogues = this.getCharactersByClassAndRole(CharacterClass.rogue, CharacterRole.melee);
    const restoShamans = this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer);

    this.assignments[AssignmentType.kaelthasAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P1 Advisors - Tanks',
      actions: [
        { caster: '-', target: 'Thaladred - No tank', icon: IconEnum.skull },
        { caster: (druidTanks[0] ?? paladinTanks[0]), target: 'Sanguinar', icon: IconEnum.cross },
        { caster: warlocks[0], target: 'Capernian', icon: IconEnum.square },
        { caster: (druidTanks[1] ?? paladinTanks[0]), target: 'Telonicus', icon: IconEnum.moon },
      ],
    });

    this.assignments[AssignmentType.kaelthasAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P3 Kill Order',
      actions: [
        { caster: 'Ranged', target: 'Thaladred ➜ Capernian', icon: IconEnum.skull },
        { caster: 'Melee', target: 'Sanguinar ➜ Telonicus', icon: IconEnum.cross },
      ],
    });

    this.assignments[AssignmentType.kaelthasAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P3 Tank Assignments',
      actions: [
        { caster: (druidTanks[0] ?? paladinTanks[0]), target: 'Sanguinar', icon: IconEnum.cross },
        { caster: warlocks[0], target: 'Capernian', icon: IconEnum.square },
        { caster: (druidTanks[1] ?? paladinTanks[0]), target: 'Telonicus', icon: IconEnum.moon },
      ],
    });

    this.assignments[AssignmentType.kaelthasAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P4 - Main Tank',
      actions: [
        { caster: (druidTanks[0] ?? paladinTanks[0]), target: 'Kael\'thas Sunstrider (MT)', icon: IconEnum.skull },
      ],
    });

    this.assignments[AssignmentType.kaelthasAssignments].assignments.push({
      headerIcon: IconEnum.sleep,
      headerText: 'P4 - Phoenix Kite',
      actions: [
        { caster: paladinTanks[0], target: 'Kite Phoenix (stun/slow)', icon: undefined },
      ],
    });
  }

  protected AssignmentType = AssignmentType;

  getKaelthasPhaseGroups(): Assignment[][] {
    const all = this.assignments[AssignmentType.kaelthasAssignments].assignments;
    return [
      all.slice(0, 1),
      all.slice(1, 3),
      all.slice(3),
    ];
  }

  copyMrtNoteToBuffer() {
    navigator.clipboard.writeText(this.mrtNote);
  }
}
