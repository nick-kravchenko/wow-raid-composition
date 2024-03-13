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
function CompositionComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-character-tile", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function CompositionComponent_li_6_Template_app_character_tile_dragstart_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const character_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.dragFromSidebar(character_r3); })("dragend", function CompositionComponent_li_6_Template_app_character_tile_dragend_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSidebarDragend(); })("click", function CompositionComponent_li_6_Template_app_character_tile_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const character_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSidebarCharacterClick(character_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("used", !ctx_r0.isCharacterAvailable(character_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("draggable", ctx_r0.isCharacterAvailable(character_r3))("character", character_r3);
} }
function CompositionComponent_app_raid_tile_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-raid-tile", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSlotClick", function CompositionComponent_app_raid_tile_10_Template_app_raid_tile_onSlotClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onRaidSlotClick(i_r9, $event); })("onSlotDragStart", function CompositionComponent_app_raid_tile_10_Template_app_raid_tile_onSlotDragStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onRaidSlotDragStart(i_r9, $event); })("onSlotDragEnd", function CompositionComponent_app_raid_tile_10_Template_app_raid_tile_onSlotDragEnd_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onRaidSlotDragEnd(); })("onDragOver", function CompositionComponent_app_raid_tile_10_Template_app_raid_tile_onDragOver_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onRaidDragOver(i_r9, $event); })("onPruneClick", function CompositionComponent_app_raid_tile_10_Template_app_raid_tile_onPruneClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onRaidPruneClick(i_r9); })("onRemoveClick", function CompositionComponent_app_raid_tile_10_Template_app_raid_tile_onRemoveClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onRaidRemoveClick(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("raid", ctx_r2.raids[i_r9])("title", "Raid #" + (i_r9 + 1));
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
        });
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
            return filtersPassed.every((condition) => condition);
        }).sort((a, b) => a.class === b.class
            ? a.name > b.name ? 1 : -1
            : a.class > b.class ? 1 : -1);
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
            for (let key in params) {
                (_a = this.formGroup.get(key)) === null || _a === void 0 ? void 0 : _a.setValue(decodeURIComponent(params[key]));
            }
        });
    }
    handleFormChange() {
        this.formGroup.valueChanges.subscribe((value) => {
            const queryParams = {};
            for (let key in value) {
                queryParams[key] = encodeURIComponent(value[key]);
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
                if (response)
                    this.signedPlayers = response.signUps.filter((player) => player.className !== 'Absence').map((player) => player.userId);
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
        if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined')
            this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
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
        if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined')
            this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
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
            }, 500);
        });
    }
}
CompositionComponent.ɵfac = function CompositionComponent_Factory(t) { return new (t || CompositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_composition_service__WEBPACK_IMPORTED_MODULE_4__["CompositionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CompositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompositionComponent, selectors: [["app-composition"]], viewQuery: function CompositionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.raidGroups = _t.first);
    } }, decls: 16, vars: 6, consts: [[1, "filters", 3, "formGroup"], ["for", "eventId"], ["id", "eventId", "type", "string", "formControlName", "eventId"], [1, "characters"], [4, "ngFor", "ngForOf"], [1, "raid-groups"], ["raidGroups", ""], [3, "raid", "title", "onSlotClick", "onSlotDragStart", "onSlotDragEnd", "onDragOver", "onPruneClick", "onRemoveClick", 4, "ngFor", "ngForOf"], [1, "actions"], ["type", "button", 1, "capture-screenshot", 3, "disabled", "click"], [1, "icon-photo"], ["type", "button", 1, "add-raid", 3, "click"], [3, "draggable", "character", "dragstart", "dragend", "click"], [3, "raid", "title", "onSlotClick", "onSlotDragStart", "onSlotDragEnd", "onDragOver", "onPruneClick", "onRemoveClick"]], template: function CompositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Event ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CompositionComponent_li_6_Template, 2, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CompositionComponent_app_raid_tile_10_Template, 1, 2, "app-raid-tile", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompositionComponent_Template_button_click_12_listener() { return ctx.screenshot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompositionComponent_Template_button_click_14_listener() { return ctx.onAddRaidClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2795");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredCharacters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.raids);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.capturingScreenshot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loading", ctx.capturingScreenshot);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_7__["CharacterTileComponent"], _shared_raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_8__["RaidTileComponent"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-gap: 1rem;\n  background: #282D33;\n  border: 1px solid #45494F;\n  border-radius: 2px;\n  padding: 10px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.characters[_ngcontent-%COMP%] {\n  max-height: calc(77vh);\n  overflow-y: scroll;\n}\n\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 17px;\n}\n\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9d9d9d;\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 3px;\n  height: 24px;\n}\n\n.used[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  background: #45494F;\n  color: #fff;\n  cursor: pointer;\n  padding: 2em;\n  border-radius: 2px;\n  font-weight: bold;\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  box-shadow: inset 0 0 0 1px #383838;\n  position: relative;\n  border: none;\n  width: 100%;\n  margin: 0 0 1em;\n  text-align: center;\n}\n\n.actions[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\napp-raid-tile[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 0.5em;\n}\n\napp-raid-tile[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 0 2em;\n}\n\napp-character-tile[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n}\n\n.raid-groups[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxtQkNsQ0c7RURtQ0gsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQURJO0VBQ0UsZUFBQTtBQUdOOztBQURJO0VBQ0UsU0FBQTtBQUdOOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBREU7RUFDRSxlQUFBO0FBR0o7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQUlGIiwiZmlsZSI6ImNvbXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6ICRkZWVwLXNwYWNlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRtYWtvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNoYXJhY3RlcnMge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoNzd2aCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5maWx0ZXJzIHtcclxuICAvL2hlaWdodDogMjN2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwIDAgMTdweDtcclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzlkOWQ5ZDtcclxuICB9XHJcbiAgc2VsZWN0LCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDNweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbn1cclxuLnVzZWQge1xyXG4gIG9wYWNpdHk6IC41O1xyXG59XHJcbi5hY3Rpb25zIHtcclxuICBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWFrbztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMzODM4Mzg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5hcHAtcmFpZC10aWxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgMCAuNWVtO1xyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbjogMCAwIDJlbTtcclxuICB9XHJcbn1cclxuYXBwLWNoYXJhY3Rlci10aWxlIHtcclxuICBtYXJnaW46IDAgMCAzcHg7XHJcbn1cclxuLnJhaWQtZ3JvdXBzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcclxufVxyXG4iLCIvLyBDb2xvciBQYWxldHRlOlxyXG4vLyBQcmltYXJ5IGNvbG9yLCByZXByZXNlbnRpbmcgdGhlIEFsbGlhbmNlIGZhY3Rpb24uXHJcbiRhbGxpYW5jZS1ibHVlOiAjMDAzM0NDO1xyXG4vLyBBY2NlbnQgY29sb3IsIGhpZ2hsaWdodGluZyBidXR0b25zLCBpY29ucywgYW5kIGtleSBpbmZvcm1hdGlvbi5cclxuJHJlZ2FsLWdvbGQ6ICNDOUIwMzc7XHJcbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGNvbnRlbnQgYXJlYXMsIHByb3ZpZGluZyBjb250cmFzdC5cclxuJGRlZXAtc3BhY2U6ICMyODJEMzM7XHJcbiRtYWtvOiAjNDU0OTRGO1xyXG4vLyBTZWNvbmRhcnkgdGV4dCBhbmQgc3VidGxlIFVJIGVsZW1lbnRzLCBvZmZlcmluZyByZWFkYWJpbGl0eSB3aXRob3V0IG92ZXJwb3dlcmluZy5cclxuJHNpbHZlci1zdGVlbDogIzcyNzY3RDtcclxuLy8gQ2FsbCB0byBhY3Rpb24gYnV0dG9ucyBhbmQgY3JpdGljYWwgYWxlcnRzLCBkcmF3aW5nIGF0dGVudGlvbi5cclxuJHZpY3RvcnktcmVkOiAjQzQxRjNCO1xyXG4vLyBVc2VkIHNwYXJpbmdseSBmb3Igc3VjY2VzcyBtZXNzYWdlcyBvciBwcm9ncmVzcyBiYXJzLlxyXG4kZWx3eW5uLWZvcmVzdC1ncmVlbjogIzFBNDcyQTtcclxuXHJcbiRyYXJpdHktY29tbW9uOiAjZmZmO1xyXG4kcmFyaXR5LXVuY29tbW9uOiAjMWVmZjAwO1xyXG4kcmFyaXR5LXJhcmU6ICMwMDcwZGQ7XHJcbiRyYXJpdHktZXBpYzogI2EzMzVlZTtcclxuJHJhcml0eS1sZWdlbmRhcnk6ICNmZjgwMDA7XHJcblxyXG4kY2xhc3Njb2xvcnM6IChcclxuICBcIndhcnJpb3JcIjogI2M3OWM2ZSxcclxuICBcInBhbGFkaW5cIjogI2Y1OGNiYSxcclxuICBcImh1bnRlclwiOiAjYWJkNDczLFxyXG4gIFwicm9ndWVcIjogI2ZmZjU2OSxcclxuICBcInByaWVzdFwiOiAjZmZmZmZmLFxyXG4gIFwiZGVhdGhrbmlnaHRcIjogI2M0MWYzYixcclxuICBcInNoYW1hblwiOiAjMDA3MGRlLFxyXG4gIFwibWFnZVwiOiAjNDBjN2ViLFxyXG4gIFwid2FybG9ja1wiOiAjODc4N2VkLFxyXG4gIFwibW9ua1wiOiAjMDBmZjk2LFxyXG4gIFwiZHJ1aWRcIjogI2ZmN2QwYSxcclxuICBcImRlbW9uaHVudGVyXCI6ICNhMzMwYzksXHJcbik7XHJcblxyXG4iXX0= */"] });
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