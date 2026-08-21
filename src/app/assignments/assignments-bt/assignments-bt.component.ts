import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../_entities/character';
import {CharacterClass} from '../../_entities/character-class.enum';
import {CharacterRole} from '../../_entities/character-role.enum';
import {CharacterSpecEnum} from '../../_entities/character-spec.enum';
import {IconEnum} from '../../_entities/icon.enum';
import {CharacterTileComponent} from '../../shared/character-tile/character-tile.component';

interface AssignmentAction {
  caster: Character | string | undefined;
  target: Character | string;
  icon?: string;
}

interface Assignment {
  headerIcon: string;
  headerText: string;
  actions: AssignmentAction[];
}

enum AssignmentType {
  Najentus = 'najentus',
  Supremus = 'supremus',
  Akama = 'akama',
  Teron = 'teron',
  Bloodboil = 'bloodboil',
  Reliquary = 'reliquary',
  Shahraz = 'shahraz',
  Council = 'council',
  Illidan = 'illidan',
}

interface BossAssignment {
  headerIcon: string;
  headerText: string;
  assignments: Assignment[];
}

@Component({
  selector: 'app-assignments-bt',
  imports: [CharacterTileComponent],
  templateUrl: './assignments-bt.component.html',
  styleUrl: './assignments-bt.component.scss',
})
export class AssignmentsBtComponent implements OnInit {
  @Input() raid: Character[] = [];

  readonly keys = Object.values(AssignmentType);
  readonly assignments: Record<AssignmentType, BossAssignment> = {
    [AssignmentType.Najentus]: {headerIcon: IconEnum.skull, headerText: "High Warlord Naj'entus", assignments: []},
    [AssignmentType.Supremus]: {headerIcon: IconEnum.skull, headerText: 'Supremus', assignments: []},
    [AssignmentType.Akama]: {headerIcon: IconEnum.skull, headerText: 'Shade of Akama', assignments: []},
    [AssignmentType.Teron]: {headerIcon: IconEnum.skull, headerText: 'Teron Gorefiend', assignments: []},
    [AssignmentType.Bloodboil]: {headerIcon: IconEnum.skull, headerText: 'Gurtogg Bloodboil', assignments: []},
    [AssignmentType.Reliquary]: {headerIcon: IconEnum.skull, headerText: 'Reliquary of Souls', assignments: []},
    [AssignmentType.Shahraz]: {headerIcon: IconEnum.skull, headerText: 'Mother Shahraz', assignments: []},
    [AssignmentType.Council]: {headerIcon: IconEnum.skull, headerText: 'Illidari Council', assignments: []},
    [AssignmentType.Illidan]: {headerIcon: IconEnum.leotheras, headerText: 'Illidan Stormrage', assignments: []},
  };

  ngOnInit(): void {
    this.fillAssignments();
  }

  getCaster(action: AssignmentAction): Character {
    return action.caster as Character;
  }

  getTarget(action: AssignmentAction): Character {
    return action.target as Character;
  }

  getMrtNoteForBoss(key: AssignmentType): string {
    const boss = this.assignments[key];
    return [boss.headerText, '', ...boss.assignments.flatMap(assignment => [
      assignment.headerText,
      ...assignment.actions.map(action => {
        const caster = this.name(action.caster);
        const target = this.name(action.target);
        return assignment.headerText.endsWith(' Camp')
          ? [caster, target].filter(name => name !== '-').join(', ')
          : `${caster} -> ${target}`;
      }),
      '',
    ])].join('\n').trim();
  }

  copyMrtNoteForBoss(key: AssignmentType): void {
    navigator.clipboard.writeText(this.getMrtNoteForBoss(key));
  }

  copyMrtNoteToBuffer(): void {
    navigator.clipboard.writeText(JSON.stringify(Object.fromEntries(this.keys.map((key, index) => [
      `${index + 1}. ${this.assignments[key].headerText.toLowerCase()}`,
      this.getMrtNoteForBoss(key),
    ])), null, 2));
  }

  copyReliquaryKickAssignment(): void {
    const kickAssignment = this.assignments[AssignmentType.Reliquary].assignments
      .find(assignment => assignment.headerText === 'P2 Spirit Shock / Deaden Interrupts');
    const exportText = (kickAssignment?.actions ?? [])
      .map(action => this.name(action.caster))
      .filter(name => name !== '-')
      .map((name, index) => `${index + 1}:${name}`)
      .join('-');

    navigator.clipboard.writeText(exportText);
  }

  private fillAssignments(): void {
    const warriorTanks = this.characters(CharacterClass.warrior, CharacterRole.tank);
    const druidTanks = this.characters(CharacterClass.druid, CharacterRole.tank);
    const paladinTanks = this.characters(CharacterClass.paladin, CharacterRole.tank);
    const tanks = [...warriorTanks, ...druidTanks, ...paladinTanks];
    const protectionPaladin = paladinTanks.find(character => character.spec === CharacterSpecEnum.Protection);
    const mainTank = protectionPaladin ?? warriorTanks[0] ?? druidTanks[0] ?? tanks[0];
    const healers = this.raid.filter(character => character?.role === CharacterRole.healer);
    const hunters = this.characters(CharacterClass.hunter, CharacterRole.ranged);
    const mages = this.characters(CharacterClass.mage, CharacterRole.ranged);
    const warlocks = this.characters(CharacterClass.warlock, CharacterRole.ranged);
    const rogues = this.characters(CharacterClass.rogue, CharacterRole.melee);
    const shamans = this.raid.filter(character => character?.class === CharacterClass.shaman);

    this.assignments[AssignmentType.Najentus].assignments.push(
      this.assignment(IconEnum.skull, 'Main Tank', [{caster: mainTank, target: "High Warlord Naj'entus", icon: IconEnum.skull}]),
      ...this.getRangedCampAssignments(),
    );

    const supremusSoakers = tanks.filter(character => character !== mainTank).slice(0, 2);
    this.assignments[AssignmentType.Supremus].assignments.push(
      this.assignment(IconEnum.skull, 'Phase 1 Tanks', [
        {caster: mainTank, target: 'Main Tank', icon: IconEnum.skull},
        ...[0, 1].map(index => ({caster: supremusSoakers[index], target: `Hateful Strike Soaker #${index + 1}`, icon: IconEnum.protection})),
      ]),
    );

    const protectionWarriors = warriorTanks.filter(character => character.spec === CharacterSpecEnum.Protection);
    const feralTanks = druidTanks.filter(character => character.spec === CharacterSpecEnum.Feral);
    const preferredDoorTanks = [...paladinTanks, ...protectionWarriors];
    const leftDoorTank = preferredDoorTanks[0] ?? tanks[0];
    const rightDoorTank = preferredDoorTanks.find(character => character !== leftDoorTank)
      ?? feralTanks.find(character => character !== leftDoorTank)
      ?? tanks.find(character => character !== leftDoorTank);
    const defenderTank = tanks.find(character => character !== leftDoorTank && character !== rightDoorTank);
    this.assignments[AssignmentType.Akama].assignments.push(
      this.assignment(IconEnum.skull, 'Left Door', [
        {caster: leftDoorTank, target: 'Door Tank', icon: IconEnum.skull},
        {caster: hunters[0], target: 'Frost Trap', icon: IconEnum.freezingTrap},
        {caster: healers[0], target: this.name(leftDoorTank), icon: IconEnum.holyLight},
      ]),
      this.assignment(IconEnum.cross, 'Right Door', [
        {caster: rightDoorTank, target: 'Door Tank', icon: IconEnum.cross},
        {caster: hunters[1], target: 'Frost Trap', icon: IconEnum.freezingTrap},
        {caster: healers[1], target: this.name(rightDoorTank), icon: IconEnum.holyLight},
      ]),
      this.assignment(IconEnum.square, 'Defenders', [{caster: defenderTank, target: 'Defenders at Akama', icon: IconEnum.square}]),
    );

    this.assignments[AssignmentType.Teron].assignments.push(
      this.assignment(IconEnum.skull, 'Main Tank', [{caster: mainTank, target: 'Teron Gorefiend', icon: IconEnum.skull}]),
    );

    const bloodboilTanks = tanks.slice(0, 3);
    const felRageHealers = [
      ...healers.filter(character => this.isSingleTargetHealer(character)),
      ...healers.filter(character => !this.isSingleTargetHealer(character)),
    ].slice(0, 2);
    const raidHealers = healers.filter(character => !felRageHealers.includes(character));
    this.assignments[AssignmentType.Bloodboil].assignments.push(
      this.assignment(IconEnum.skull, 'Acidic Wound Tank Rotation', bloodboilTanks.map((caster, index) => ({caster, target: `Tank #${index + 1} - swap at 5 stacks`}))),
      this.assignment(IconEnum.holyLight, 'Fel Rage Target Healers', felRageHealers.map(caster => ({caster, target: 'Heal Fel Rage target'}))),
      this.assignment(IconEnum.healingWave, 'Raid Recovery Healers', raidHealers.map(caster => ({caster, target: 'Top up raid after AoE damage'}))),
    );

    const interrupters = [
      ...rogues,
      ...this.characters(CharacterClass.warrior, CharacterRole.melee),
    ];
    this.assignments[AssignmentType.Reliquary].assignments.push(
      this.assignment(IconEnum.protection, 'P1 Tank', [{caster: protectionPaladin, target: 'Full Mitigation Gear'}]),
      this.assignment(IconEnum.kick, 'P2 Spirit Shock / Deaden Interrupts', interrupters.map((caster, index) => ({caster, target: `Interrupt #${index + 1}`}))),
      this.assignment(IconEnum.dispel, 'P2 Rune Shield Spellsteal', mages.map((caster, index) => ({caster, target: `Spellsteal #${index + 1}`}))),
      this.assignment(IconEnum.tranquilizingShot, 'P3 Tranquilizing Shot', hunters.map((caster, index) => ({caster, target: `Tranq rotation #${index + 1}`}))),
    );

    this.assignments[AssignmentType.Shahraz].assignments.push(
      this.assignment(IconEnum.skull, 'Saber Lash Tanks', [0, 1, 2].map(index => ({caster: tanks[index], target: `Tank #${index + 1}`}))),
    );

    const councilMainTank = feralTanks[0] ?? mainTank;
    const verasTank = protectionPaladin ?? tanks.find(character => character !== councilMainTank);
    const protectionWarrior = warriorTanks.find(character => character.spec === CharacterSpecEnum.Protection);
    const malandeTank = protectionWarrior ?? feralTanks[1] ?? tanks.find(character =>
      character !== councilMainTank && character !== verasTank
    );
    const mageTank = mages.find(character => character.spec === CharacterSpecEnum.Frost) ?? mages[0];
    const malandeMeleeInterrupter = rogues[0] ?? this.raid.find(character => character?.role === CharacterRole.melee);
    const malandeMageInterrupter = mages.find(character => character !== mageTank) ?? mageTank;
    const malandeShamanInterrupter = shamans.find(character => character.spec === CharacterSpecEnum.Restoration);
    const councilHealerQueue = [
      ...healers.filter(character => this.isSingleTargetHealer(character)),
      ...healers.filter(character => !this.isSingleTargetHealer(character)),
    ];
    const gathiosHealers = councilHealerQueue.splice(0, 2);
    const malandeHealer = councilHealerQueue.shift();
    const zerevorHealer = councilHealerQueue.shift();
    const poisonCleansers: AssignmentAction[] = [
      ...this.characters(CharacterClass.shaman, CharacterRole.healer)
        .filter(character => character.spec === CharacterSpecEnum.Restoration)
        .map(caster => ({caster, target: 'Poison Cleansing Totem - own group'})),
      ...this.characters(CharacterClass.paladin, CharacterRole.healer)
        .filter(character => character.spec === CharacterSpecEnum.Holy)
        .map(caster => ({caster, target: 'Cleanse Deadly Poison - backup'})),
    ];
    this.assignments[AssignmentType.Council].assignments.push(
      this.assignment(IconEnum.skull, 'Boss Tanks', [
        {caster: councilMainTank, target: 'Gathios - Main Tank', icon: IconEnum.skull},
        {caster: verasTank, target: 'Veras - Off Tank', icon: IconEnum.cross},
        {caster: malandeTank, target: 'Malande - Off Tank', icon: IconEnum.square},
        {caster: mageTank, target: 'Zerevor (Spellsteal)', icon: IconEnum.moon},
      ]),
      this.assignment(IconEnum.holyLight, 'Tank Healers (raid flex when stable)', [
        {caster: gathiosHealers[0], target: `${this.name(councilMainTank)} - Gathios`, icon: IconEnum.skull},
        {caster: gathiosHealers[1], target: `${this.name(councilMainTank)} + ${this.name(verasTank)}`, icon: IconEnum.cross},
        {caster: malandeHealer, target: `${this.name(malandeTank)} - Malande`, icon: IconEnum.square},
        {caster: zerevorHealer, target: `${this.name(mageTank)} - Zerevor`, icon: IconEnum.moon},
      ]),
      this.assignment(IconEnum.dispel, 'Deadly Poison Cleansing', poisonCleansers),
      this.assignment(IconEnum.kick, 'Malande Interrupts', [
        {caster: malandeMeleeInterrupter, target: 'Kick / Pummel'},
        {caster: malandeMageInterrupter, target: 'Counterspell'},
        {caster: malandeShamanInterrupter, target: 'Earth Shock'},
      ]),
    );

    const flameTanks = tanks.filter(character => character !== mainTank).slice(0, 2);
    const demonTank = [...warlocks].reverse().find(character => character.spec === CharacterSpecEnum.Destruction) ?? warlocks[0];
    this.assignments[AssignmentType.Illidan].assignments.push(
      this.assignment(IconEnum.skull, 'P1 / P3 / P4 Main Tank', [{caster: mainTank, target: 'Illidan (block every Shear)', icon: IconEnum.skull}]),
      this.assignment(IconEnum.freezingTrap, 'Parasite Frost Trap', [{caster: hunters[0], target: 'Parasitic Shadowfiend trap point'}]),
      this.assignment(IconEnum.protection, 'P2 Flames of Azzinoth', [0, 1].map(index => ({caster: flameTanks[index], target: `Flame Tank #${index + 1} - Fire Resistance`}))),
      this.assignment(IconEnum.warlock, 'P3 Demon Form', [{caster: demonTank, target: 'Warlock Tank - Shadow Resistance'}]),
    );
  }

  private getRangedCampAssignments(): Assignment[] {
    const campNames = ['Left', 'Middle', 'Right'];
    const camps: Character[][] = [[], [], []];
    const areaHealerCounts = [0, 0, 0];
    const singleTargetHealerCounts = [0, 0, 0];
    const preferredCampOrder = [0, 2, 1];
    const raidGroups: Character[][] = [];

    for (let index = 0; index < this.raid.length; index += 5) {
      const rangedAndHealers = this.raid.slice(index, index + 5).filter(character =>
        character?.role === CharacterRole.ranged || character?.role === CharacterRole.healer
      );
      if (rangedAndHealers.length > 0) raidGroups.push(rangedAndHealers);
    }

    raidGroups.sort((left, right) => {
      const areaHealerDifference = right.filter(character => this.isAreaHealer(character)).length
        - left.filter(character => this.isAreaHealer(character)).length;
      return areaHealerDifference || right.length - left.length;
    });
    raidGroups.forEach(group => {
      const groupAreaHealers = group.filter(character => this.isAreaHealer(character)).length;
      const groupSingleTargetHealers = group.filter(character => this.isSingleTargetHealer(character)).length;
      const campIndex = [...preferredCampOrder].sort((left, right) => {
        const leftAreaPenalty = groupAreaHealers > 0 && areaHealerCounts[left] > 0 ? 1 : 0;
        const rightAreaPenalty = groupAreaHealers > 0 && areaHealerCounts[right] > 0 ? 1 : 0;
        return leftAreaPenalty - rightAreaPenalty
          || camps[left].length - camps[right].length
          || singleTargetHealerCounts[left] - singleTargetHealerCounts[right];
      })[0];
      camps[campIndex].push(...group);
      areaHealerCounts[campIndex] += groupAreaHealers;
      singleTargetHealerCounts[campIndex] += groupSingleTargetHealers;
    });

    return camps.map((camp, index) => this.assignment(
      IconEnum.hunter,
      `${campNames[index]} Camp`,
      this.pairUp(camp),
    ));
  }

  private isAreaHealer(character: Character): boolean {
    return (
      character.class === CharacterClass.shaman && character.spec === CharacterSpecEnum.Restoration
    ) || (
      character.class === CharacterClass.priest && character.spec === CharacterSpecEnum.Holy
    );
  }

  private isSingleTargetHealer(character: Character): boolean {
    return (
      character.class === CharacterClass.priest && character.spec === CharacterSpecEnum.Discipline
    ) || (
      character.class === CharacterClass.paladin && character.spec === CharacterSpecEnum.Holy
    ) || (
      character.class === CharacterClass.druid && character.spec === CharacterSpecEnum.Restoration
    );
  }

  private pairUp(characters: Character[]): AssignmentAction[] {
    const actions: AssignmentAction[] = [];
    for (let index = 0; index < characters.length; index += 2) {
      actions.push({caster: characters[index], target: characters[index + 1] ?? '-'});
    }
    return actions;
  }

  private characters(className: CharacterClass, role: CharacterRole): Character[] {
    return this.raid.filter(character => character?.class === className && character.role === role);
  }

  private name(character: Character | string | undefined): string {
    return typeof character === 'string' ? character : character?.name ?? '-';
  }

  private assignment(headerIcon: string, headerText: string, actions: AssignmentAction[]): Assignment {
    return {headerIcon, headerText, actions};
  }
}
