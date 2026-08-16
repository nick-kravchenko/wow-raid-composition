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
  Winterchill = 'winterchill',
  Anetheron = 'anetheron',
  Kazrogal = 'kazrogal',
  Azgalor = 'azgalor',
  Archimonde = 'archimonde',
}

interface BossAssignment {
  headerIcon: string;
  headerText: string;
  assignments: Assignment[];
}

@Component({
  selector: 'app-assignments-hyjal',
  imports: [CharacterTileComponent],
  templateUrl: './assignments-hyjal.component.html',
  styleUrl: './assignments-hyjal.component.scss',
})
export class AssignmentsHyjalComponent implements OnInit {
  @Input() raid: Character[] = [];

  protected readonly AssignmentType = AssignmentType;
  readonly keys = Object.values(AssignmentType);
  readonly assignments: Record<AssignmentType, BossAssignment> = {
    [AssignmentType.Winterchill]: {headerIcon: IconEnum.rageWinterchill, headerText: 'Rage Winterchill', assignments: []},
    [AssignmentType.Anetheron]: {headerIcon: IconEnum.anetheron, headerText: 'Anetheron', assignments: []},
    [AssignmentType.Kazrogal]: {headerIcon: IconEnum.kazrogal, headerText: "Kaz'rogal", assignments: []},
    [AssignmentType.Azgalor]: {headerIcon: IconEnum.azgalor, headerText: 'Azgalor', assignments: []},
    [AssignmentType.Archimonde]: {headerIcon: IconEnum.archimonde, headerText: 'Archimonde', assignments: []},
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
    return [
      boss.headerText,
      '',
      ...boss.assignments.flatMap(assignment => [
        assignment.headerText,
        ...assignment.actions.map(action => `${this.characterName(action.caster)} -> ${this.characterName(action.target)}`),
        '',
      ]),
    ].join('\n').trim();
  }

  copyMrtNoteForBoss(key: AssignmentType): void {
    navigator.clipboard.writeText(this.getMrtNoteForBoss(key));
  }

  copyMrtNoteToBuffer(): void {
    const notes = Object.fromEntries(this.keys.map((key, index) => [
      `${index + 1}. ${this.assignments[key].headerText.toLowerCase()}`,
      this.getMrtNoteForBoss(key),
    ]));
    navigator.clipboard.writeText(JSON.stringify(notes, null, 2));
  }

  private fillAssignments(): void {
    const tanks = [
      ...this.characters(CharacterClass.warrior, CharacterRole.tank),
      ...this.characters(CharacterClass.druid, CharacterRole.tank),
      ...this.characters(CharacterClass.paladin, CharacterRole.tank),
    ];
    const warriorTank = tanks.find(character => character.class === CharacterClass.warrior);
    const nonPaladinTank = tanks.find(character => character.class !== CharacterClass.paladin);
    const mainTank = warriorTank ?? nonPaladinTank ?? tanks[0];
    const protectionPaladin = tanks.find(character =>
      character.class === CharacterClass.paladin && character.spec === CharacterSpecEnum.Protection
    );
    const healers = this.raid.filter(character => character?.role === CharacterRole.healer);
    const singleTargetHealers = healers.filter(character => this.isSingleTargetHealer(character));

    this.assignments[AssignmentType.Winterchill].assignments.push(
      this.assignment(IconEnum.skull, 'Main Tank', [{caster: mainTank, target: 'Rage Winterchill', icon: IconEnum.skull}]),
      this.assignment(IconEnum.holyLight, 'Icebolt Healer', [{caster: singleTargetHealers[0] ?? healers[0], target: 'Heal every Icebolt target'}]),
      this.assignment(IconEnum.dispel, 'Frost Nova Dispel', [
        ...this.characters(CharacterClass.priest, CharacterRole.healer),
        ...this.characters(CharacterClass.paladin, CharacterRole.healer),
      ].map(caster => ({caster, target: 'Dispel Frost Nova immediately'}))),
      ...this.getCampAssignments(),
    );

    const infernalTank = protectionPaladin ?? tanks.find(character => character !== mainTank);
    const anetheronTank = tanks.find(character => character !== infernalTank) ?? mainTank;
    this.assignments[AssignmentType.Anetheron].assignments.push(
      this.assignment(IconEnum.skull, 'Tanks', [
        {caster: anetheronTank, target: 'Anetheron', icon: IconEnum.skull},
        {caster: infernalTank, target: 'Infernals Tank (25+ yd from boss)', icon: IconEnum.cross},
      ]),
      this.assignment(IconEnum.holyLight, 'Infernal Tank Healers', healers.slice(-2).map(caster => ({caster, target: this.characterName(infernalTank)}))),
      ...this.getCampAssignments(),
    );

    const kazrogalTank = nonPaladinTank ?? mainTank;
    const cleaveSoakers = tanks.filter(character => character !== kazrogalTank).slice(0, 2);
    this.assignments[AssignmentType.Kazrogal].assignments.push(
      this.assignment(IconEnum.skull, 'Main Tank', [{caster: kazrogalTank, target: "Kaz'rogal (at Thrall, facing away)", icon: IconEnum.skull}]),
      this.assignment(IconEnum.protection, 'Cleave Soakers', [0, 1].map(index => ({
        caster: cleaveSoakers[index],
        target: `OT Cleave Soaker #${index + 1}`,
      }))),
    );

    const doomguardTank = protectionPaladin ?? tanks.find(character => character !== mainTank);
    const azgalorTank = tanks.find(character => character !== doomguardTank) ?? mainTank;
    const warlocks = this.characters(CharacterClass.warlock, CharacterRole.ranged);
    this.assignments[AssignmentType.Azgalor].assignments.push(
      this.assignment(IconEnum.skull, 'Tanks', [
        {caster: azgalorTank, target: 'Azgalor', icon: IconEnum.skull},
        {caster: doomguardTank, target: 'Lesser Doomguards in Doom zone', icon: IconEnum.cross},
      ]),
      this.assignment(IconEnum.holyLight, 'Doomguard Tank Healers', healers.slice(-2).map(caster => ({caster, target: this.characterName(doomguardTank)}))),
      this.assignment(IconEnum.soulStone, 'Doom Soulstone Sequence', warlocks.map((caster, index) => ({caster, target: `Soulstone #${index + 1} - Doom target`}))),
    );

    const decursers = this.raid.filter(character =>
      character?.class === CharacterClass.mage ||
      (character?.class === CharacterClass.druid && character.spec !== CharacterSpecEnum.Feral)
    );
    const archimondeTank = protectionPaladin ?? warriorTank ?? mainTank;
    const priests = this.raid.filter(character => character?.class === CharacterClass.priest);
    this.assignments[AssignmentType.Archimonde].assignments.push(
      this.assignment(IconEnum.skull, 'Main Tank', [{caster: archimondeTank, target: 'Archimonde (never leave melee)', icon: IconEnum.skull}]),
      this.assignment(IconEnum.fearWard, 'Fear Ward Sequence', priests.map((caster, index) => ({
        caster,
        target: `Fear Ward #${index + 1} -> ${this.characterName(archimondeTank)}`,
      }))),
      this.assignment(IconEnum.decurse, 'Grip of Death Decurse', decursers.map(caster => ({caster, target: 'Decurse immediately'}))),
      ...this.getCampAssignments(),
    );
  }

  private getCampAssignments(): Assignment[] {
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
          || (camps[left].length + group.length) - (camps[right].length + group.length)
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

  private pairUp(characters: Character[]): AssignmentAction[] {
    const actions: AssignmentAction[] = [];
    for (let index = 0; index < characters.length; index += 2) {
      actions.push({caster: characters[index], target: characters[index + 1] ?? '-'});
    }
    return actions;
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

  private characters(className: CharacterClass, role: CharacterRole): Character[] {
    return this.raid.filter(character => character?.class === className && character.role === role);
  }

  private characterName(character: Character | string | undefined): string {
    return typeof character === 'string' ? character : character?.name ?? '-';
  }

  private assignment(headerIcon: string, headerText: string, actions: AssignmentAction[]): Assignment {
    return {headerIcon, headerText, actions};
  }
}
