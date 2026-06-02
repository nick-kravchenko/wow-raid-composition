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
    let note = classAssignment.headerText + '\n';

    if (key === AssignmentType.kaelthasAssignments) {
      note += 'Kill Order: Thaladred ➜ Sanguinar ➜ Capernian ➜ Telonicus\n';
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
        .filter(healer => healer.spec === CharacterSpecEnum.Restoration),
    ];
    const specialTankHealer = healers[healers.length - 1];
    const regularTankHealers = healers.slice(0, -1);

    const getManyMobsHealerAssignments = (
      firstTank: Character | string,
      secondTank: Character | string,
      thirdTank: Character | string,
    ): AssignmentAction[] => [
      { caster: regularTankHealers[0], target: firstTank, icon: IconEnum.holyLight },
      { caster: regularTankHealers[1], target: secondTank, icon: IconEnum.holyLight },
      ...regularTankHealers.slice(2).map(healer => ({
        caster: healer,
        target: thirdTank,
        icon: IconEnum.holyLight,
      })),
    ];
    const getP3HealerAssignments = (): AssignmentAction[] => [
      { caster: regularTankHealers[0], target: druidTanks[0] ?? 'First druid tank', icon: IconEnum.holyLight },
      { caster: regularTankHealers[1], target: druidTanks[1] ?? 'Second druid tank', icon: IconEnum.holyLight },
      { caster: regularTankHealers[2], target: capernianConflagrationTank ?? 'Paladin soaker', icon: IconEnum.holyLight },
    ];

    this.assignments[AssignmentType.kaelthasAssignments].assignments.push({
      headerIcon: IconEnum.skull,
      headerText: 'P1 Advisors - Tanks',
      actions: [
        { caster: '-', target: 'Thaladred - No tank', icon: IconEnum.skull },
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
        { caster: bowTank, target: 'Bow (Netherstrand Longbow )', icon: IconEnum.hunter },
        { caster: weaponsTank, target: 'All other weapons', icon: IconEnum.protection },
        { caster: specialTankHealer, target: bowTank ?? 'Bow tank', icon: IconEnum.holyLight },
        ...getManyMobsHealerAssignments(axeTank, weaponsTank, weaponsTank),
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
        { caster: sanguinarTank, target: 'Sanguinar', icon: IconEnum.cross },
        { caster: capernianTank, target: 'Capernian', icon: IconEnum.square },
        { caster: capernianConflagrationTank, target: 'Capernian (Conflagration)', icon: IconEnum.protection },
        { caster: telonicusTank, target: 'Telonicus', icon: IconEnum.moon },
        { caster: specialTankHealer, target: capernianTank ?? 'Capernian tank', icon: IconEnum.holyLight },
        ...getP3HealerAssignments(),
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
      all.slice(1, 2),
      all.slice(2, 4),
      all.slice(4),
    ];
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
