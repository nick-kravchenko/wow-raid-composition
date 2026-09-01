import {Component, EmbeddedViewRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
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
  planImage?: string;
}

@Component({
  selector: 'app-assignments-bt',
  imports: [CharacterTileComponent],
  templateUrl: './assignments-bt.component.html',
  styleUrl: './assignments-bt.component.scss',
})
export class AssignmentsBtComponent implements OnInit, OnDestroy {
  @Input() raid: Character[] = [];
  @ViewChild('planModal') planModalTemplate!: TemplateRef<unknown>;

  activePlanImage: string | null = null;
  private modalViewRef: EmbeddedViewRef<unknown> | null = null;

  constructor(private vcr: ViewContainerRef) {}

  readonly keys = Object.values(AssignmentType);
  readonly assignments: Record<AssignmentType, BossAssignment> = {
    [AssignmentType.Najentus]: {headerIcon: IconEnum.najentus, headerText: "High Warlord Naj'entus", assignments: [], planImage: 'assets/images/plans/high-warlord-najentus.png'},
    [AssignmentType.Supremus]: {headerIcon: IconEnum.supremus, headerText: 'Supremus', assignments: [], planImage: 'assets/images/plans/supremus.png'},
    [AssignmentType.Akama]: {headerIcon: IconEnum.shadeOfAkama, headerText: 'Shade of Akama', assignments: [], planImage: 'assets/images/plans/shade-of-akama.png'},
    [AssignmentType.Teron]: {headerIcon: IconEnum.teronGorefiend, headerText: 'Teron Gorefiend', assignments: [], planImage: 'assets/images/plans/teron-gorefiend.png'},
    [AssignmentType.Bloodboil]: {headerIcon: IconEnum.gurtoggBloodboil, headerText: 'Gurtogg Bloodboil', assignments: [], planImage: 'assets/images/plans/gurtogg-bloodboil.png'},
    [AssignmentType.Reliquary]: {headerIcon: IconEnum.reliquaryOfSouls, headerText: 'Reliquary of Souls', assignments: [], planImage: 'assets/images/plans/reliquary-of-souls.png'},
    [AssignmentType.Shahraz]: {headerIcon: IconEnum.motherShahraz, headerText: 'Mother Shahraz', assignments: []},
    [AssignmentType.Council]: {headerIcon: IconEnum.illidariCouncil, headerText: 'Illidari Council', assignments: [], planImage: 'assets/images/plans/illidari-council.png'},
    [AssignmentType.Illidan]: {headerIcon: IconEnum.leotheras, headerText: 'Illidan Stormrage', assignments: [], planImage: 'assets/images/plans/illidan-stormrage.png'},
  };

  ngOnInit(): void {
    this.fillAssignments();
  }

  ngOnDestroy(): void {
    this.closePlan();
  }

  openPlan(key: AssignmentType): void {
    this.activePlanImage = this.assignments[key].planImage ?? null;
    document.body.style.overflow = 'hidden';
    this.modalViewRef = this.vcr.createEmbeddedView(this.planModalTemplate);
    this.modalViewRef.rootNodes.forEach((node: Node) => document.body.appendChild(node));
  }

  closePlan(): void {
    this.activePlanImage = null;
    document.body.style.overflow = '';
    this.modalViewRef?.destroy();
    this.modalViewRef = null;
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
      this.misdirectAssignment(hunters, [mainTank]),
      ...this.getRangedCampAssignments(),
    );

    const supremusSoakers = tanks.filter(character => character !== mainTank).slice(0, 2);
    this.assignments[AssignmentType.Supremus].assignments.push(
      this.assignment(IconEnum.skull, 'Phase 1 Tanks', [
        {caster: mainTank, target: 'Main Tank', icon: IconEnum.skull},
        ...[0, 1].map(index => ({caster: supremusSoakers[index], target: `Hateful Strike Soaker #${index + 1}`, icon: IconEnum.protection})),
      ]),
      this.misdirectAssignment(hunters, [mainTank, ...supremusSoakers]),
      ...this.getRangedCampAssignments(),
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
        {caster: healers[0], target: this.name(leftDoorTank), icon: IconEnum.holyLight},
        {caster: healers[2], target: `Backup for ${this.name(leftDoorTank)}`, icon: IconEnum.holyLight},
      ]),
      this.assignment(IconEnum.cross, 'Right Door', [
        {caster: rightDoorTank, target: 'Door Tank', icon: IconEnum.cross},
        {caster: healers[1], target: this.name(rightDoorTank), icon: IconEnum.holyLight},
        {caster: healers[3], target: `Backup for ${this.name(rightDoorTank)}`, icon: IconEnum.holyLight},
      ]),
      this.assignment(IconEnum.square, 'Seed of Corruption Mob', [
        {caster: defenderTank, target: 'Seed of Corruption mob', icon: IconEnum.square},
        {caster: healers.find(character => this.isSingleTargetHealer(character) && !healers.slice(0, 4).includes(character)) ?? healers[4], target: this.name(defenderTank), icon: IconEnum.holyLight},
      ]),
    );

    this.assignments[AssignmentType.Teron].assignments.push(
      this.assignment(IconEnum.skull, 'Main Tank', [{caster: mainTank, target: 'Teron Gorefiend', icon: IconEnum.skull}]),
      this.misdirectAssignment(hunters, [mainTank]),
    );

    const bloodboilTanks = [protectionPaladin, ...tanks.filter(character => character !== protectionPaladin)].filter((character): character is Character => !!character).slice(0, 3);
    const felRageHealers = [
      ...healers.filter(character => this.isSingleTargetHealer(character)),
      ...healers.filter(character => !this.isSingleTargetHealer(character)),
    ].slice(0, 2);
    const raidHealers = healers.filter(character => !felRageHealers.includes(character));
    this.assignments[AssignmentType.Bloodboil].assignments.push(
      this.assignment(IconEnum.skull, 'Acidic Wound Tank Rotation', bloodboilTanks.map((caster, index) => ({caster, target: `Tank #${index + 1} - swap at 5 stacks`}))),
      this.assignment(IconEnum.holyLight, 'Boss Target Healers', felRageHealers.map(caster => ({caster, target: 'Heal boss target'}))),
      this.assignment(IconEnum.healingWave, 'Raid Healers', raidHealers.map(caster => ({caster, target: 'Heal raid'}))),
      this.misdirectAssignment(hunters, [bloodboilTanks[0]]),
    );

    const interrupters = [
      ...rogues,
      ...this.characters(CharacterClass.warrior, CharacterRole.melee),
    ];
    this.assignments[AssignmentType.Reliquary].assignments.push(
      this.assignment(IconEnum.protection, 'Tanks', [
        {caster: protectionPaladin ?? mainTank, target: 'Phase 1 - Full Mitigation Gear'},
        {caster: tanks.find(character => character !== (protectionPaladin ?? mainTank)), target: 'Phase 2 / Phase 3 Tank'},
      ]),
      this.assignment(IconEnum.kick, 'P2 Spirit Shock / Deaden Interrupts', interrupters.map((caster, index) => ({caster, target: `Interrupt #${index + 1}`}))),
      this.assignment(IconEnum.dispel, 'P2 Rune Shield Spellsteal', mages.map((caster, index) => ({caster, target: `Spellsteal #${index + 1}`}))),
      this.misdirectAssignment(hunters, [tanks.find(character => character !== (protectionPaladin ?? mainTank))], 'P2 / P3 Misdirect Rotation'),
    );

    this.assignments[AssignmentType.Shahraz].assignments.push(
      this.assignment(IconEnum.skull, 'Saber Lash Tanks', [0, 1, 2].map(index => ({caster: tanks[index], target: `Tank #${index + 1}`}))),
      this.assignment(IconEnum.star, 'Deployables', [
        {caster: 'Assigned raiders', target: 'Thornling Seeds'},
        {caster: 'Assigned raiders', target: 'Gnomish Flame Turret'},
      ]),
      this.misdirectAssignment(hunters, [mainTank]),
    );

    const councilMainTank = feralTanks[0] ?? mainTank;
    const verasTank = protectionPaladin ?? tanks.find(character => character !== councilMainTank);
    const protectionWarrior = warriorTanks.find(character => character.spec === CharacterSpecEnum.Protection);
    const malandeTank = protectionWarrior ?? feralTanks[1] ?? tanks.find(character =>
      character !== councilMainTank && character !== verasTank
    );
    const mageTank = mages.find(character => character.spec === CharacterSpecEnum.Frost) ?? mages[0];
    const malandeMeleeInterrupter = rogues[0] ?? this.raid.find(character => character?.role === CharacterRole.melee);
    const malandeMageInterrupter = mages.find(character => character !== mageTank);
    const malandeShamanInterrupter = shamans.find(character => character.spec === CharacterSpecEnum.Restoration);
    const councilHealerQueue = [
      ...healers.filter(character => this.isSingleTargetHealer(character)),
      ...healers.filter(character => !this.isSingleTargetHealer(character)),
    ];
    const restorationShaman = this.characters(CharacterClass.shaman, CharacterRole.healer)
      .find(character => character.spec === CharacterSpecEnum.Restoration);
    const malandeHealer = restorationShaman ?? councilHealerQueue.shift();
    const remainingCouncilHealers = councilHealerQueue.filter(character => character !== malandeHealer);
    const gathiosHealers = remainingCouncilHealers.splice(0, 2);
    const zerevorHealer = remainingCouncilHealers.shift();
    this.assignments[AssignmentType.Council].assignments.push(
      this.assignment(IconEnum.skull, 'Boss Tanks', [
        {caster: councilMainTank, target: 'Gathios - Main Tank', icon: IconEnum.skull},
        {caster: verasTank, target: 'Veras - Off Tank', icon: IconEnum.cross},
        {caster: malandeTank, target: 'Malande - Off Tank', icon: IconEnum.square},
        {caster: mageTank, target: 'Zerevor - Mage Kiter / Tank (Spellsteal)', icon: IconEnum.moon},
      ]),
      this.assignment(IconEnum.holyLight, 'Tank Healers (raid flex when stable)', [
        {caster: gathiosHealers[0], target: `${this.name(councilMainTank)} - Gathios`, icon: IconEnum.skull},
        {caster: gathiosHealers[1], target: `${this.name(councilMainTank)} + ${this.name(verasTank)}`, icon: IconEnum.cross},
        {caster: malandeHealer, target: `${this.name(malandeTank)} - Malande`, icon: IconEnum.square},
        {caster: zerevorHealer, target: `${this.name(mageTank)} - Zerevor`, icon: IconEnum.moon},
      ]),
      this.assignment(IconEnum.kick, 'Malande Interrupts', [
        {caster: malandeMeleeInterrupter, target: 'Kick / Pummel'},
        {caster: malandeMageInterrupter, target: 'Counterspell'},
        {caster: malandeShamanInterrupter, target: 'Earth Shock'},
      ]),
      this.misdirectAssignment(hunters, [councilMainTank, verasTank, malandeTank, mageTank]),
    );

    const flameTanks = tanks.filter(character => character !== mainTank).slice(0, 2);
    const demonTank = [...warlocks].reverse().find(character => character.spec === CharacterSpecEnum.Destruction) ?? warlocks[0];
    this.assignments[AssignmentType.Illidan].assignments.push(
      this.assignment(IconEnum.skull, 'P1 / P3 / P4 Main Tank', [{caster: mainTank, target: 'Illidan (block every Shear)', icon: IconEnum.skull}]),
      this.assignment(IconEnum.freezingTrap, 'Parasite Frost Trap', [{caster: hunters[0], target: 'Parasitic Shadowfiend trap point'}]),
      this.assignment(IconEnum.protection, 'P2 Flames of Azzinoth', [0, 1].map(index => ({caster: flameTanks[index], target: `Flame Tank #${index + 1} - Fire Resistance`}))),
      this.misdirectAssignment(hunters, [flameTanks[0]], 'P2 Flame #1 Misdirect Queue'),
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

  private misdirectAssignment(hunters: Character[], targets: Array<Character | undefined>, headerText = 'Misdirect Queue'): Assignment {
    const availableTargets = targets.filter((target): target is Character => !!target);
    return this.assignment(IconEnum.misdirect, headerText, hunters.map((caster, index) => ({
      caster,
      target: availableTargets[index % availableTargets.length] ?? 'Main Tank',
      icon: IconEnum.misdirect,
    })));
  }
}
