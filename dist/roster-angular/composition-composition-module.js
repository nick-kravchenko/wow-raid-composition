(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["composition-composition-module"],{

/***/ "+yTe":
/*!******************************************************!*\
  !*** ./src/app/composition/composition.component.ts ***!
  \******************************************************/
/*! exports provided: CompositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionComponent", function() { return CompositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _composition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./composition.service */ "PJla");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/character-tile/character-tile.component */ "Jd1B");
/* harmony import */ var _shared_raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/raid-tile/raid-tile.component */ "6KtK");











const _c0 = ["raidGroups"];
function CompositionComponent_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("bg-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 10, item_r4.key.split("_")[0]), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", ctx_r0.isCharacterClassAndRoleChecked(item_r4.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", item_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", item_r4.key)("id", item_r4.key)("value", item_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/icons/", item_r4.value, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CompositionComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-character-tile", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function CompositionComponent_li_12_Template_app_character_tile_dragstart_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const character_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.dragFromSidebar(character_r5); })("dragend", function CompositionComponent_li_12_Template_app_character_tile_dragend_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSidebarDragend(); })("click", function CompositionComponent_li_12_Template_app_character_tile_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const character_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onSidebarCharacterClick(character_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("used", !ctx_r1.isCharacterAvailable(character_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("draggable", ctx_r1.isCharacterAvailable(character_r5))("character", character_r5);
} }
function CompositionComponent_app_raid_tile_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-raid-tile", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSlotClick", function CompositionComponent_app_raid_tile_16_Template_app_raid_tile_onSlotClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onRaidSlotClick(i_r11, $event); })("onSlotDragStart", function CompositionComponent_app_raid_tile_16_Template_app_raid_tile_onSlotDragStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onRaidSlotDragStart(i_r11, $event); })("onSlotDragEnd", function CompositionComponent_app_raid_tile_16_Template_app_raid_tile_onSlotDragEnd_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onRaidSlotDragEnd(); })("onDragOver", function CompositionComponent_app_raid_tile_16_Template_app_raid_tile_onDragOver_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onRaidDragOver(i_r11, $event); })("onPruneClick", function CompositionComponent_app_raid_tile_16_Template_app_raid_tile_onPruneClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onRaidPruneClick(i_r11); })("onRemoveClick", function CompositionComponent_app_raid_tile_16_Template_app_raid_tile_onRemoveClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onRaidRemoveClick(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const raid_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("raid", raid_r10)("title", "Raid #" + (i_r11 + 1));
} }
class CompositionComponent {
    constructor(httpClient, compositionService, activatedRoute, router) {
        this.httpClient = httpClient;
        this.compositionService = compositionService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.capturingScreenshot = false;
        this.characters = [];
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            eventId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            player: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            characterClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            characterRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            characterRank: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            characterLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            characterClassAndRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                Warrior_Melee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Warrior_Tank: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Paladin_Melee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Paladin_Tank: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Paladin_Healer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Hunter_Ranged: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Druid_Melee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Druid_Tank: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Druid_Ranged: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Druid_Healer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Rogue_Melee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Rogue_Tank: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Warlock_Ranged: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Warlock_Tank: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Mage_Ranged: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Mage_Healer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Priest_Ranged: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                Priest_Healer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            }),
        });
        this.iconsSpecs = {
            Warrior_Melee: 'ability_warrior_innerrage.jpg',
            Warrior_Tank: 'ability_warrior_defensivestance.jpg',
            Paladin_Melee: 'spell_holy_auraoflight.jpg',
            Paladin_Tank: 'spell_holy_devotionaura.jpg',
            Paladin_Healer: 'spell_holy_holybolt.jpg',
            Hunter_Ranged: 'class_hunter.jpg',
            Druid_Melee: 'ability_druid_catform.jpg',
            Druid_Tank: 'ability_racial_bearform.jpg',
            Druid_Ranged: 'spell_nature_starfall.jpg',
            Druid_Healer: 'spell_nature_healingtouch.jpg',
            Rogue_Melee: 'class_rogue.jpg',
            Rogue_Tank: 'achievement_halloween_smiley_01.jpg',
            Warlock_Ranged: 'classicon_warlock.jpg',
            Warlock_Tank: 'spell_shadow_demonform.jpg',
            Mage_Ranged: 'class_mage.jpg',
            Mage_Healer: 'inv_enchant_essencenethersmall.jpg',
            Priest_Ranged: 'spell_shadow_shadowwordpain.jpg',
            Priest_Healer: 'spell_holy_guardianspirit.jpg',
        };
        this.signedPlayers = [];
        this.raids = [];
        this.characters = this.compositionService.characters;
    }
    get filteredCharacters() {
        return this.characters.filter((c) => {
            var _a, _b, _c;
            const { player, characterClass, characterRole, characterRank, characterLevel, } = this.formGroup.getRawValue();
            const filtersPassed = [];
            if (player) {
                filtersPassed.push(((_a = c.player) === null || _a === void 0 ? void 0 : _a.name) === player);
            }
            if (characterClass) {
                filtersPassed.push(c.class === characterClass);
            }
            if (characterRole) {
                filtersPassed.push(c.role === characterRole);
            }
            if (characterRank) {
                filtersPassed.push(c.rank === characterRank);
            }
            if (characterLevel && characterLevel !== 'null') {
                filtersPassed.push(c.level === Number(characterLevel));
            }
            if (this.signedPlayers.length && ((_c = (_b = c.player) === null || _b === void 0 ? void 0 : _b.discord) === null || _c === void 0 ? void 0 : _c.userId)) {
                filtersPassed.push(this.signedPlayers.includes(c.player.discord.userId));
            }
            if (Object.values(this.formGroup.get('characterClassAndRole').controls)
                .some((control) => control.value === true)) {
                const checked = Object.entries(this.formGroup.get('characterClassAndRole').controls)
                    .reduce((acc, [key, control]) => {
                    return control.value === true ? [...acc, key] : acc;
                }, []);
                filtersPassed.push(checked.some((classAndRole) => {
                    const [cClass, cRole] = classAndRole.split('_');
                    return c.class === cClass && c.role === cRole;
                }));
            }
            return filtersPassed.every((condition) => condition);
        }).sort((a, b) => a.class === b.class
            ? a.name > b.name ? 1 : -1
            : a.class > b.class ? 1 : -1);
    }
    isCharacterClassAndRoleChecked(characterClassAndRole) {
        var _a;
        return Object.values(this.formGroup.get('characterClassAndRole').controls)
            .every((control) => control.value === false)
            || ((_a = this.formGroup.get('characterClassAndRole').get(characterClassAndRole)) === null || _a === void 0 ? void 0 : _a.value) === true;
    }
    ngOnInit() {
        this.updateSignedUpPlayers();
        this.eventIdChangesHandler();
        this.subscribeForRaidChanges();
        this.handleActivatedRouteQueryParams();
        this.handleFormChange();
    }
    handleActivatedRouteQueryParams() {
        this.activatedRoute.queryParams.subscribe((params) => {
            var _a;
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    (_a = this.formGroup.get(key)) === null || _a === void 0 ? void 0 : _a.setValue(decodeURIComponent(params[key]));
                }
            }
        });
    }
    handleFormChange() {
        this.formGroup.valueChanges.subscribe((value) => {
            const queryParams = {};
            for (const key in value) {
                if (key !== 'characterClassAndRole' && value.hasOwnProperty(key)) {
                    queryParams[key] = encodeURIComponent(value[key]);
                }
            }
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams,
                queryParamsHandling: 'merge',
            });
        });
    }
    eventIdChangesHandler() {
        var _a;
        (_a = this.formGroup.get('eventId')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(() => {
            this.updateSignedUpPlayers();
        });
    }
    isCharacterAvailable(character) {
        const condictions = [
            !this.characterAlreadyInUse(character),
            (!!character.player && !this.playerUsedInEveryRaid(character.player)),
        ];
        return condictions.every((condition) => condition);
    }
    characterAlreadyInUse(character) {
        return this.compositionService.characterUsedInAnyRaid(character);
    }
    playerUsedInEveryRaid(player) {
        return this.compositionService.playerUsedInEveryRaid(player);
    }
    subscribeForRaidChanges() {
        this.compositionService.raidsSubject.subscribe((raids) => {
            this.raids = raids;
        });
    }
    updateSignedUpPlayers() {
        var _a, _b;
        if ((_a = this.formGroup.get('eventId')) === null || _a === void 0 ? void 0 : _a.value) {
            this.httpClient.get(`https://raid-helper.dev/api/v2/events/${(_b = this.formGroup.get('eventId')) === null || _b === void 0 ? void 0 : _b.value}`).subscribe((response) => {
                if (response) {
                    this.signedPlayers = response.signUps
                        .filter((player) => player.className !== 'Absence')
                        .map((player) => player.userId);
                }
            }, () => {
                this.signedPlayers = [];
            });
        }
    }
    resetData() {
        this.dragFromRaidIndex = undefined;
        this.dragFromSlotIndex = undefined;
        this.dragToRaidIndex = undefined;
        this.dragToSlotIndex = undefined;
        this.draggableCharacter = undefined;
    }
    dragFromSidebar(character) {
        this.draggableCharacter = character;
    }
    dragToRaid(raidId, slotId) {
        if (typeof this.dragFromRaidIndex !== 'undefined' && typeof this.dragFromSlotIndex !== 'undefined' && this.draggableCharacter) {
            this.compositionService.moveCharacter(this.dragFromRaidIndex, this.dragFromSlotIndex, raidId, slotId, this.draggableCharacter);
        }
        else if (this.draggableCharacter) {
            this.compositionService.addCharacterToRaid(raidId, slotId, this.draggableCharacter);
        }
        this.resetData();
    }
    onSidebarDragend() {
        if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined') {
            this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
        }
        this.resetData();
    }
    onRaidSlotClick(raidId, slotId) {
        this.compositionService.deleteCharacter(raidId, slotId);
    }
    onRaidDragOver(raidId, slotId) {
        this.dragToRaidIndex = raidId;
        this.dragToSlotIndex = slotId;
    }
    onRaidSlotDragStart(raidId, slotId) {
        this.dragFromRaidIndex = raidId;
        this.dragFromSlotIndex = slotId;
        this.draggableCharacter = this.raids[raidId][slotId];
    }
    onRaidSlotDragEnd() {
        if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined') {
            this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
        }
        this.resetData();
    }
    onSidebarCharacterClick(character) {
        this.compositionService.pushCharacter(character);
    }
    onRaidPruneClick(raidId) {
        this.compositionService.resetRaid(raidId);
    }
    onRaidRemoveClick(raidId) {
        this.compositionService.removeRaid(raidId);
    }
    onAddRaidClick() {
        this.compositionService.addRaid();
    }
    screenshot() {
        this.capturingScreenshot = true;
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(this.raidGroups.nativeElement, {
            backgroundColor: '#404040'
        }).then(canvas => {
            canvas.toBlob(blob => {
                // @ts-ignore
                navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            });
        }).finally(() => {
            setTimeout(() => {
                this.capturingScreenshot = false;
            }, 250);
        });
    }
}
CompositionComponent.ɵfac = function CompositionComponent_Factory(t) { return new (t || CompositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_composition_service__WEBPACK_IMPORTED_MODULE_4__["CompositionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CompositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompositionComponent, selectors: [["app-composition"]], viewQuery: function CompositionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.raidGroups = _t.first);
    } }, decls: 22, vars: 9, consts: [[1, "filters", 3, "formGroup"], ["for", "eventId"], ["id", "eventId", "type", "string", "formControlName", "eventId"], ["for", "characterLevel"], ["type", "number", "id", "characterLevel", "formControlName", "characterLevel"], ["formGroupName", "characterClassAndRole", 1, "characterClassAndRole"], [3, "for", "class", "checked", 4, "ngFor", "ngForOf"], [1, "characters"], [4, "ngFor", "ngForOf"], [1, "raid-groups"], ["raidGroups", ""], [3, "raid", "title", "onSlotClick", "onSlotDragStart", "onSlotDragEnd", "onDragOver", "onPruneClick", "onRemoveClick", 4, "ngFor", "ngForOf"], ["type", "button", 1, "add-raid", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "actions"], ["type", "button", 1, "capture-screenshot", 3, "disabled", "click"], [1, "icon-photo"], [3, "for"], ["type", "checkbox", 3, "formControlName", "id", "value"], ["alt", "", 3, "src"], [3, "draggable", "character", "dragstart", "dragend", "click"], [3, "raid", "title", "onSlotClick", "onSlotDragStart", "onSlotDragEnd", "onDragOver", "onPruneClick", "onRemoveClick"]], template: function CompositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Event ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CompositionComponent_label_9_Template, 4, 12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompositionComponent_li_12_Template, 2, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CompositionComponent_app_raid_tile_16_Template, 1, 2, "app-raid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompositionComponent_Template_button_click_17_listener() { return ctx.onAddRaidClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompositionComponent_Template_button_click_20_listener() { return ctx.screenshot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx.iconsSpecs));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredCharacters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.raids);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.capturingScreenshot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loading", ctx.capturingScreenshot);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _shared_character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_7__["CharacterTileComponent"], _shared_raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_8__["RaidTileComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-gap: 1rem;\n  padding: 10px;\n  background: rgba(40, 45, 51, 0.9);\n  border-radius: 0.5em;\n  box-shadow: 0 0.25em 2em rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(1em);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.characters[_ngcontent-%COMP%] {\n  max-height: calc(60vh);\n  overflow-y: scroll;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 17px;\n}\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9d9d9d;\n}\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 3px;\n  height: 24px;\n}\n.used[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.add-raid[_ngcontent-%COMP%], .capture-screenshot[_ngcontent-%COMP%] {\n  display: block;\n  background: #45494F;\n  color: #fff;\n  cursor: pointer;\n  padding: 2em;\n  border-radius: 2px;\n  font-weight: bold;\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  border: 1px solid #383838;\n  position: relative;\n  width: 100%;\n  margin: 0 0 1em;\n  text-align: center;\n}\n.add-raid[disabled][_ngcontent-%COMP%], .capture-screenshot[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n.add-raid[_ngcontent-%COMP%] {\n  min-height: 202px;\n  display: block;\n  margin: 0;\n  color: #f7b801;\n  font-size: 2em;\n}\n.add-raid[_ngcontent-%COMP%]:nth-child(even) {\n  margin-top: 32px;\n}\napp-raid-tile[_ngcontent-%COMP%] {\n  display: block;\n}\napp-character-tile[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n}\n.icon-photo[_ngcontent-%COMP%] {\n  scale: 2;\n}\n.raid-groups[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1.5rem;\n  margin: 0 0 2em;\n}\n@media (max-width: 768px) {\n  .raid-groups[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.characterClassAndRole[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.characterClassAndRole[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}\n.characterClassAndRole[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 0.125em;\n  margin: 0.125em;\n  border-radius: 0.125em;\n  cursor: pointer;\n  opacity: 0.5;\n  will-change: opacity;\n  transition: opacity 0.2s;\n}\n.characterClassAndRole[_ngcontent-%COMP%]   label.checked[_ngcontent-%COMP%], .characterClassAndRole[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.characterClassAndRole[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcc2NyZWVuLXNpemVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0FBRkY7QUNLRTtFRGJGO0lBWUksMEJBQUE7RUFBRjtBQUNGO0FBRUE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQURFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFHSjtBQURFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBR0o7QUFBQTtFQUNFLFlBQUE7QUFHRjtBQURBO0VBQ0UsY0FBQTtFQUNBLG1CRXhDSztFRnlDTCxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFJRjtBQUhFO0VBQ0UsZUFBQTtBQUtKO0FBRkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsY0VqRVc7RUZrRVgsY0FBQTtBQUtGO0FBSkU7RUFDRSxnQkFBQTtBQU1KO0FBSEE7RUFDRSxjQUFBO0FBTUY7QUFKQTtFQUNFLGVBQUE7QUFPRjtBQUxBO0VBQ0UsUUFBQTtBQVFGO0FBTkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFTRjtBQ2pGRTtFRG9FRjtJQU1JLDBCQUFBO0VBV0Y7QUFDRjtBQVRBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBWUY7QUFYRTtFQUNFLGNBQUE7QUFhSjtBQVhFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUFhSjtBQVpJO0VBQ0UsVUFBQTtBQWNOO0FBWEU7RUFDRSxhQUFBO0FBYUoiLCJmaWxlIjoiY29tcG9zaXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29sb3JzXCI7XHJcbkBpbXBvcnQgXCJzY3JlZW4tc2l6ZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcclxuICBncmlkLWdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGRlZXAtc3BhY2UsIC45KTtcclxuICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG4gIGJveC1zaGFkb3c6IDAgLjI1ZW0gMmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMWVtKTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBAaW5jbHVkZSBzY3JlZW4tdGFibGV0KCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNoYXJhY3RlcnMge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoNjB2aCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5maWx0ZXJzIHtcclxuICAvL2hlaWdodDogMjN2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwIDAgMTdweDtcclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzlkOWQ5ZDtcclxuICB9XHJcbiAgc2VsZWN0LCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDNweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbn1cclxuLnVzZWQge1xyXG4gIG9wYWNpdHk6IC41O1xyXG59XHJcbi5hZGQtcmFpZCwgLmNhcHR1cmUtc2NyZWVuc2hvdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogJG1ha287XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODM4Mzg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAwIDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgJltkaXNhYmxlZF0ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxufVxyXG4uYWRkLXJhaWQge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogJHJlZ2FsLWdvbGQ7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICB9XHJcbn1cclxuYXBwLXJhaWQtdGlsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYXBwLWNoYXJhY3Rlci10aWxlIHtcclxuICBtYXJnaW46IDAgMCAzcHg7XHJcbn1cclxuLmljb24tcGhvdG8ge1xyXG4gIHNjYWxlOiAyO1xyXG59XHJcbi5yYWlkLWdyb3VwcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAwIDAgMmVtO1xyXG4gIEBpbmNsdWRlIHNjcmVlbi10YWJsZXQoKSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuLmNoYXJhY3RlckNsYXNzQW5kUm9sZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuICAgIHBhZGRpbmc6IC4xMjVlbTtcclxuICAgIG1hcmdpbjogLjEyNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjEyNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG4gICAgJi5jaGVja2VkLCAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBzY3JlZW4tbW9iaWxlLXMoKSB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNjcmVlbi1tb2JpbGUtbSgpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc2NyZWVuLW1vYmlsZS1sKCkge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzY3JlZW4tdGFibGV0KCkge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzY3JlZW4tbGFwdG9wKCkge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc2NyZWVuLWxhcHRvcC1sKCkge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc2NyZWVuLTRrKCkge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAyNTYwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvciBQYWxldHRlOlxyXG4vLyBQcmltYXJ5IGNvbG9yLCByZXByZXNlbnRpbmcgdGhlIEFsbGlhbmNlIGZhY3Rpb24uXHJcbiRhbGxpYW5jZS1ibHVlOiAjMDAzM0NDO1xyXG4vLyBBY2NlbnQgY29sb3IsIGhpZ2hsaWdodGluZyBidXR0b25zLCBpY29ucywgYW5kIGtleSBpbmZvcm1hdGlvbi5cclxuJHJlZ2FsLWdvbGQ6ICNmN2I4MDE7XHJcbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGNvbnRlbnQgYXJlYXMsIHByb3ZpZGluZyBjb250cmFzdC5cclxuJGRlZXAtc3BhY2U6ICMyODJEMzM7XHJcbiRtYWtvOiAjNDU0OTRGO1xyXG4vLyBTZWNvbmRhcnkgdGV4dCBhbmQgc3VidGxlIFVJIGVsZW1lbnRzLCBvZmZlcmluZyByZWFkYWJpbGl0eSB3aXRob3V0IG92ZXJwb3dlcmluZy5cclxuJHNpbHZlci1zdGVlbDogIzcyNzY3RDtcclxuLy8gQ2FsbCB0byBhY3Rpb24gYnV0dG9ucyBhbmQgY3JpdGljYWwgYWxlcnRzLCBkcmF3aW5nIGF0dGVudGlvbi5cclxuJHZpY3RvcnktcmVkOiAjQzQxRjNCO1xyXG4vLyBVc2VkIHNwYXJpbmdseSBmb3Igc3VjY2VzcyBtZXNzYWdlcyBvciBwcm9ncmVzcyBiYXJzLlxyXG4kZWx3eW5uLWZvcmVzdC1ncmVlbjogIzFBNDcyQTtcclxuXHJcbiRyYXJpdHktY29tbW9uOiAjZmZmO1xyXG4kcmFyaXR5LXVuY29tbW9uOiAjMWVmZjAwO1xyXG4kcmFyaXR5LXJhcmU6ICMwMDcwZGQ7XHJcbiRyYXJpdHktZXBpYzogI2EzMzVlZTtcclxuJHJhcml0eS1sZWdlbmRhcnk6ICNmZjgwMDA7XHJcblxyXG4kY2xhc3Njb2xvcnM6IChcclxuICBcIndhcnJpb3JcIjogI2M3OWM2ZSxcclxuICBcInBhbGFkaW5cIjogI2Y1OGNiYSxcclxuICBcImh1bnRlclwiOiAjYWJkNDczLFxyXG4gIFwicm9ndWVcIjogI2ZmZjU2OSxcclxuICBcInByaWVzdFwiOiAjZmZmZmZmLFxyXG4gIFwiZGVhdGhrbmlnaHRcIjogI2M0MWYzYixcclxuICBcInNoYW1hblwiOiAjMDA3MGRlLFxyXG4gIFwibWFnZVwiOiAjNDBjN2ViLFxyXG4gIFwid2FybG9ja1wiOiAjODc4N2VkLFxyXG4gIFwibW9ua1wiOiAjMDBmZjk2LFxyXG4gIFwiZHJ1aWRcIjogI2ZmN2QwYSxcclxuICBcImRlbW9uaHVudGVyXCI6ICNhMzMwYzksXHJcbik7XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-composition',
                templateUrl: './composition.component.html',
                styleUrls: ['./composition.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _composition_service__WEBPACK_IMPORTED_MODULE_4__["CompositionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { raidGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['raidGroups']
        }] }); })();


/***/ }),

/***/ "PJla":
/*!****************************************************!*\
  !*** ./src/app/composition/composition.service.ts ***!
  \****************************************************/
/*! exports provided: CompositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionService", function() { return CompositionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _data_players_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_data/players.data */ "Fn0B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class CompositionService {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.characters = _data_players_data__WEBPACK_IMPORTED_MODULE_2__["players"].reduce((characters, player) => {
            return !!player && !!player.characters ? [
                ...characters,
                ...player.characters.map(character => (Object.assign(Object.assign({}, character), { player: { name: player.name, discord: player.discord } }))),
            ] : characters;
        }, []);
        this.raidsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.readRaidFromQueryParams();
    }
    get raids() {
        return this.raidsSubject.value;
    }
    set raids(raids) {
        this.raidsSubject.next(raids);
        this.writeRaidsToQueryParams();
    }
    get emptyRaid() {
        return new Array(10).fill(null);
    }
    readRaidFromQueryParams() {
        const raidsParam = this.activatedRoute.snapshot.queryParamMap.get('raids');
        if (raidsParam) {
            // @ts-ignore
            this.raids = decodeURIComponent(raidsParam).split('-')
                .map((r) => r.split('_').map((name) => this.characters.find((character) => character.name === name || null)));
        }
    }
    writeRaidsToQueryParams() {
        const raids = this.raids.map((raid) => raid.map((character) => (character === null || character === void 0 ? void 0 : character.name) || '').join('_')).join('-');
        const queryParams = { raids: encodeURIComponent(raids) };
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams,
            queryParamsHandling: 'merge',
        });
    }
    playerAlreadyInRaid(raidId, player) {
        return this.raids[raidId].some((character) => (character === null || character === void 0 ? void 0 : character.player) && player && character.player.name === (player === null || player === void 0 ? void 0 : player.name));
    }
    playerUsedInEveryRaid(player) {
        return this.raids.every((raid) => {
            return raid.some((character) => { var _a; return ((_a = character === null || character === void 0 ? void 0 : character.player) === null || _a === void 0 ? void 0 : _a.name) && character.player.name === (player === null || player === void 0 ? void 0 : player.name); });
        });
    }
    characterUsedInAnyRaid(character) {
        return this.raids.some((raid) => raid.some((c) => (c === null || c === void 0 ? void 0 : c.name) === character.name));
    }
    highlightPlayerInRaid(raidId, player) {
        var _a;
        const character = (_a = this.raids.find((raid, i) => {
            return i === raidId;
        })) === null || _a === void 0 ? void 0 : _a.find((c) => {
            var _a;
            return ((_a = c === null || c === void 0 ? void 0 : c.player) === null || _a === void 0 ? void 0 : _a.name) === (player === null || player === void 0 ? void 0 : player.name);
        });
        if (character) {
            character.highlight = true;
            setTimeout(() => {
                character.highlight = false;
            }, 2000);
        }
    }
    pushCharacter(character) {
        let inserted = false;
        if (!this.characterUsedInAnyRaid(character)) {
            this.raids = this.raids.reduce((raids, raid, i) => {
                return [
                    ...raids,
                    raid.map((c) => {
                        if (!c && !inserted && !this.playerAlreadyInRaid(i, character.player)) {
                            inserted = true;
                            return character;
                        }
                        else {
                            return c;
                        }
                    }),
                ];
            }, []);
        }
    }
    addCharacterToRaid(raidId, slotId, character) {
        if (this.characterUsedInAnyRaid(character)) {
            return;
        }
        if (this.playerAlreadyInRaid(raidId, character.player)) {
            this.highlightPlayerInRaid(raidId, character === null || character === void 0 ? void 0 : character.player);
            return;
        }
        this.raids = this.raids.map((raid, i) => {
            return i !== raidId ? raid : raid.map((c, k) => k !== slotId ? c : character);
        });
    }
    moveCharacter(fromRaidId, fromSlot, toRaidId, toSlot, character) {
        const thisCharacterInRaid = this.raids[toRaidId].some((c) => (c === null || c === void 0 ? void 0 : c.name) === character.name);
        if (this.playerAlreadyInRaid(toRaidId, character.player) && !thisCharacterInRaid) {
            this.highlightPlayerInRaid(toRaidId, character === null || character === void 0 ? void 0 : character.player);
            return;
        }
        let charToSwap;
        if (this.raids[toRaidId][toSlot]) {
            charToSwap = this.raids[toRaidId][toSlot];
        }
        this.raids[toRaidId][toSlot] = this.raids[fromRaidId][fromSlot];
        if (charToSwap) {
            this.raids[fromRaidId][fromSlot] = charToSwap;
        }
        else {
            this.deleteCharacter(fromRaidId, fromSlot);
        }
    }
    deleteCharacter(fromRaidId, fromSlot) {
        // @ts-ignore
        this.raids = this.raids.map((raid, raidId) => {
            return raid.map((character, slotId) => raidId === fromRaidId && slotId === fromSlot ? null : character);
        });
    }
    resetRaid(raidId) {
        this.raids = this.raids.map((raid, i) => i === raidId ? this.emptyRaid : raid);
    }
    removeRaid(raidId) {
        this.raids = this.raids.filter((raid, i) => i !== raidId);
    }
    addRaid() {
        this.raids = [...this.raids, this.emptyRaid];
    }
}
CompositionService.ɵfac = function CompositionService_Factory(t) { return new (t || CompositionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CompositionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompositionService, factory: CompositionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompositionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "ey8z":
/*!***********************************************************!*\
  !*** ./src/app/composition/composition-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CompositionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionRoutingModule", function() { return CompositionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _composition_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./composition.component */ "+yTe");





const routes = [{ path: '', component: _composition_component__WEBPACK_IMPORTED_MODULE_2__["CompositionComponent"] }];
class CompositionRoutingModule {
}
CompositionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompositionRoutingModule });
CompositionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompositionRoutingModule_Factory(t) { return new (t || CompositionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompositionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompositionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xhUX":
/*!***************************************************!*\
  !*** ./src/app/composition/composition.module.ts ***!
  \***************************************************/
/*! exports provided: CompositionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionModule", function() { return CompositionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _composition_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./composition-routing.module */ "ey8z");
/* harmony import */ var _composition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./composition.component */ "+yTe");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _composition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./composition.service */ "PJla");









class CompositionModule {
}
CompositionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompositionModule });
CompositionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompositionModule_Factory(t) { return new (t || CompositionModule)(); }, providers: [
        _composition_service__WEBPACK_IMPORTED_MODULE_7__["CompositionService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _composition_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompositionRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompositionModule, { declarations: [_composition_component__WEBPACK_IMPORTED_MODULE_5__["CompositionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _composition_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompositionRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompositionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _composition_component__WEBPACK_IMPORTED_MODULE_5__["CompositionComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _composition_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompositionRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ],
                providers: [
                    _composition_service__WEBPACK_IMPORTED_MODULE_7__["CompositionService"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=composition-composition-module.js.map