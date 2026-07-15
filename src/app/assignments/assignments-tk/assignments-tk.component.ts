import {Component, Input, OnInit} from '@angular/core';
import {CharacterTileComponent} from '../../shared/character-tile/character-tile.component';
import {Character} from '../../_entities/character';
import {IconEnum} from '../../_entities/icon.enum';
import {CharacterClass} from '../../_entities/character-class.enum';
import {CharacterRole} from '../../_entities/character-role.enum';
import {CharacterSpecEnum} from '../../_entities/character-spec.enum';

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

  getMrtNoteForBoss(key: AssignmentType): string {
    const casterName = (action: AssignmentAction) =>
      typeof action.caster === 'string' ? action.caster : action.caster?.name ?? '-';
    const targetName = (action: AssignmentAction) =>
      typeof action.target === 'string' ? action.target : (action.target as Character).name;

    const classAssignment = this.assignments[key];

    if (key === AssignmentType.solarianAssignments) {
      return [
        classAssignment.headerText,
        '',
        ...classAssignment.assignments.flatMap(assignment =>
          assignment.actions.map(action => `${casterName(action)} -> ${targetName(action)}`)
        ),
      ].join('\n');
    }

    if (key === AssignmentType.voidReaverAssignments) {
      return this.getVoidReaverMrtNote(casterName, targetName);
    }

    if (key === AssignmentType.alarAssignments) {
      return this.getSpacedMrtNote(classAssignment, casterName, targetName);
    }

    if (key === AssignmentType.kaelthasAssignments) {
      return this.getKaelthasMrtNote(casterName);
    }

    let note = classAssignment.headerText + '\n';

    classAssignment.assignments.forEach(assignment => {
      note += `${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    return note;
  }

  private getSpacedMrtNote(
    classAssignment: ClassAssignment,
    casterName: (a: AssignmentAction) => string,
    targetName: (a: AssignmentAction) => string,
  ): string {
    let note = `${classAssignment.headerText}\n`;

    classAssignment.assignments.forEach(assignment => {
      note += `\n${assignment.headerText}\n`;
      assignment.actions.forEach(action => {
        note += `${casterName(action)} -> ${targetName(action)}\n`;
      });
    });

    return note;
  }

  private getVoidReaverMrtNote(
    casterName: (action: AssignmentAction) => string,
    targetName: (action: AssignmentAction) => string,
  ): string {
    const assignments = this.assignments[AssignmentType.voidReaverAssignments].assignments;
    const knockAway = assignments.find(assignment => assignment.headerText === 'Knock Away Rotation');
    const hunters = assignments.find(assignment => assignment.headerText === 'Hunters (max range)');

    const tankLines = knockAway?.actions.map((tankAction, i) => {
      const tank = casterName(tankAction);
      const assignedHunters = hunters?.actions
        .filter(hunterAction => targetName(hunterAction) === tank)
        .map(casterName) ?? [];
      return `${targetName(tankAction)} - ${[tank, ...assignedHunters].join(' + ')}`;
    }) ?? [];

    return [
      'Void Reaver',
      '',
      'Knock Away Rotation',
      ...tankLines,
    ].join('\n');
  }

  private getKaelthasMrtNote(casterName: (action: AssignmentAction) => string): string {
    const assignments = this.assignments[AssignmentType.kaelthasAssignments].assignments;
    const p1 = assignments.find(assignment => assignment.headerText === 'P1 Advisors Assignments');
    const p2 = assignments.find(assignment => assignment.headerText === 'P2 Weapon Phase - Tanks');
    const p3 = assignments.find(assignment => assignment.headerText === 'P3 Advisors Assignments');
    const formatNames = (actions: AssignmentAction[]) => actions.map(casterName).filter(name => name !== '-').join(' + ');

    return [
      'Kael\'thas Sunstrider',
      '',
      p1?.headerText,
      ...(p1?.actions.map(action => `${casterName(action)} -> ${action.target}`) ?? []),
      '',
      p2?.headerText,
      `Axe (Devastation) - ${formatNames(p2?.actions.filter(action => action.target === 'Axe (Devastation)') ?? [])}`,
      `Bow (Netherstrand Longbow ) - ${formatNames(p2?.actions.filter(action => action.target === 'Bow (Netherstrand Longbow )') ?? [])}`,
      `All other weapons - ${formatNames(p2?.actions.filter(action => action.target === 'All other weapons') ?? [])}`,
      '',
      p3?.headerText,
      ...(p3?.actions.map(action => `${action.target} - ${casterName(action)}`) ?? []),
    ].filter(line => line !== undefined).join('\n');
  }

  get mrtNote() {
    return [this.getRaidWideTankHealerMrtNote(), ...this.keys.map(key => this.getMrtNoteForBoss(key))].join('\n');
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

  private getCharacterName(character: Character | string | undefined, fallback = '-'): string {
    if (typeof character === 'string') return character;
    return character?.name ?? fallback;
  }

  private getRaidWideTankHealerMrtNote(): string {
    const feralTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank)
      .filter(tank => tank.spec === CharacterSpecEnum.Feral);
    const protectionPaladin = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank)
      .find(tank => tank.spec === CharacterSpecEnum.Protection);
    const healers = [
      ...this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer)
        .filter(healer => healer.spec === CharacterSpecEnum.Holy),
      ...this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer)
        .filter(healer => healer.spec === CharacterSpecEnum.Restoration),
      ...this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer)
        .filter(healer => healer.spec === CharacterSpecEnum.Discipline || healer.spec === CharacterSpecEnum.Holy),
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.healer)
        .filter(healer => healer.spec === CharacterSpecEnum.Restoration || healer.spec === CharacterSpecEnum.Dreamstate),
    ];
    const formatLine = (mark: string, tank: Character | string | undefined, assignedHealers: (Character | undefined)[]) => {
      const healerNames = assignedHealers
        .filter((healer): healer is Character => !!healer)
        .map(healer => healer.name)
        .join(' ');
      return `{${mark}} - ${this.getCharacterName(tank, `${mark} tank`)} - ${healerNames}`;
    };

    return [
      'Tanks/Heals (2 mobs)',
      formatLine('skull', feralTanks[0], [healers[0], healers[2]]),
      formatLine('cross', protectionPaladin, [healers[1], healers[3]]),
      '',
      'Tanks/Heals (many mobs)',
      formatLine('skull', feralTanks[0], [healers[0]]),
      formatLine('cross', protectionPaladin, healers.slice(2)),
      formatLine('square', feralTanks[1], [healers[1]]),
      '',
    ].join('\n');
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
    const protectionPaladin = paladinTanks.find(tank => tank.spec === CharacterSpecEnum.Protection);

    this.assignments[AssignmentType.alarAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P1 Platform Tanks',
      actions: [
        { caster: protectionPaladin, target: 'Platform Tank #1', icon: undefined },
        { caster: druidTanks[0], target: 'Platform Tank #2', icon: undefined },
        { caster: druidTanks[1], target: 'Platform Tank #3', icon: undefined },
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
    const protectionPaladin = paladinTanks.find(tank => tank.spec === CharacterSpecEnum.Protection);

    this.assignments[AssignmentType.solarianAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'Main Tank',
      actions: [
        { caster: protectionPaladin ?? druidTanks[0] ?? paladinTanks[0], target: 'Main Tank', icon: IconEnum.skull },
      ],
    });
  }

  fillKaelthasAssignments() {
    const druidTanks = this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.tank);
    const warlocks = this.getCharactersByClassAndRole(CharacterClass.warlock, CharacterRole.ranged);
    const hunters = this.getCharactersByClassAndRole(CharacterClass.hunter, CharacterRole.ranged);
    const protectionPaladin = paladinTanks.find(tank => tank.spec === CharacterSpecEnum.Protection);
    const capernianTank = [...warlocks].reverse().find(warlock => warlock.spec === CharacterSpecEnum.Destruction);
    const capernianConflagrationTank = protectionPaladin ?? paladinTanks[0];
    const bowTank = hunters[hunters.length - 1];
    const sanguinarTank = druidTanks[0] ?? paladinTanks[0] ?? 'Sanguinar tank';
    const telonicusTank = druidTanks[1] ?? paladinTanks[0] ?? 'Telonicus tank';
    const axeTank = druidTanks[0] ?? 'Axe tank';
    const weaponsTank = paladinTanks[0] ?? 'Weapons tank';
    const healers = [
      ...this.getCharactersByClassAndRole(CharacterClass.paladin, CharacterRole.healer)
        .filter(healer => healer.spec === CharacterSpecEnum.Holy),
      ...this.getCharactersByClassAndRole(CharacterClass.shaman, CharacterRole.healer)
        .filter(healer => healer.spec === CharacterSpecEnum.Restoration),
      ...this.getCharactersByClassAndRole(CharacterClass.priest, CharacterRole.healer)
        .filter(healer => healer.spec === CharacterSpecEnum.Discipline || healer.spec === CharacterSpecEnum.Holy),
      ...this.getCharactersByClassAndRole(CharacterClass.druid, CharacterRole.healer)
        .filter(healer => healer.spec === CharacterSpecEnum.Restoration || healer.spec === CharacterSpecEnum.Dreamstate),
    ];
    const [firstHealer, secondHealer, thirdHealer, fourthHealer] = healers;

    this.assignments[AssignmentType.kaelthasAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P1 Advisors Assignments',
      actions: [
        { caster: sanguinarTank, target: 'Sanguinar', icon: IconEnum.cross },
        { caster: capernianTank, target: 'Capernian', icon: IconEnum.square },
        { caster: capernianConflagrationTank, target: 'Capernian (Conflagration)', icon: IconEnum.protection },
        { caster: telonicusTank, target: 'Telonicus', icon: IconEnum.moon },
      ],
    });

    this.assignments[AssignmentType.kaelthasAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P2 Weapon Phase - Tanks',
      actions: [
        { caster: axeTank, target: 'Axe (Devastation)', icon: undefined },
        { caster: firstHealer, target: 'Axe (Devastation)', icon: IconEnum.holyLight },
        { caster: bowTank, target: 'Bow (Netherstrand Longbow )', icon: IconEnum.hunter },
        { caster: thirdHealer, target: 'Bow (Netherstrand Longbow )', icon: IconEnum.holyLight },
        { caster: weaponsTank, target: 'All other weapons', icon: IconEnum.protection },
        { caster: secondHealer, target: 'All other weapons', icon: IconEnum.holyLight },
        { caster: fourthHealer, target: 'All other weapons', icon: IconEnum.holyLight },
      ],
    });

    this.assignments[AssignmentType.kaelthasAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P3 Advisors Assignments',
      actions: [
        { caster: `${this.getCharacterName(sanguinarTank)} + ${this.getCharacterName(firstHealer)}`, target: 'Sanguinar', icon: IconEnum.cross },
        { caster: `${this.getCharacterName(capernianTank)} + ${this.getCharacterName(thirdHealer)}`, target: 'Capernian', icon: IconEnum.square },
        { caster: `${this.getCharacterName(telonicusTank)} + ${this.getCharacterName(secondHealer)}`, target: 'Telonicus', icon: IconEnum.moon },
      ],
    });
  }

  protected AssignmentType = AssignmentType;

  getKaelthasPhaseGroups(): Assignment[][] {
    const all = this.assignments[AssignmentType.kaelthasAssignments].assignments;
    return [
      all.slice(0, 1),
      all.slice(1, 2),
      all.slice(2, 4),
      all.slice(4),
    ].filter(group => group.length > 0);
  }

  copyMrtNoteForBoss(key: AssignmentType) {
    navigator.clipboard.writeText(this.getMrtNoteForBoss(key));
  }

  copyMrtNoteToBuffer() {
    const json: Record<string, string> = {
      '1. tank/heal': this.getRaidWideTankHealerMrtNote(),
      '2. alar': this.getMrtNoteForBoss(AssignmentType.alarAssignments),
      '3. solarian': this.getMrtNoteForBoss(AssignmentType.solarianAssignments),
      '4. void reaver': this.getMrtNoteForBoss(AssignmentType.voidReaverAssignments),
      '5. kael\'thas': this.getMrtNoteForBoss(AssignmentType.kaelthasAssignments),
    };
    navigator.clipboard.writeText(JSON.stringify(json, null, 2));
  }
}
