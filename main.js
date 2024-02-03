(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krava\Projects\wow\roster-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "6KtK":
/*!*********************************************************!*\
  !*** ./src/app/shared/raid-tile/raid-tile.component.ts ***!
  \*********************************************************/
/*! exports provided: RaidTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaidTileComponent", function() { return RaidTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../character-tile/character-tile.component */ "Jd1B");




function RaidTileComponent_app_character_tile_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-character-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_app_character_tile_6_Template_app_character_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSlotClick.emit(i_r2); })("dragover", function RaidTileComponent_app_character_tile_6_Template_app_character_tile_dragover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDragOver.emit(i_r2); })("dragstart", function RaidTileComponent_app_character_tile_6_Template_app_character_tile_dragstart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSlotDragStart.emit(i_r2); })("dragend", function RaidTileComponent_app_character_tile_6_Template_app_character_tile_dragend_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSlotDragEnd.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slot_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("character-", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", slot_r1 == null ? null : slot_r1.highlight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("character", slot_r1)("draggable", !!slot_r1);
} }
class RaidTileComponent {
    constructor() {
        this.title = 'Raid #';
        this.raid = new Array(10);
        this.onSlotClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSlotDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSlotDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPruneClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    export() {
        navigator.clipboard.writeText(this.raid.map(c => c.name).join('\n'));
    }
}
RaidTileComponent.ɵfac = function RaidTileComponent_Factory(t) { return new (t || RaidTileComponent)(); };
RaidTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RaidTileComponent, selectors: [["app-raid-tile"]], inputs: { title: "title", raid: "raid" }, outputs: { onSlotClick: "onSlotClick", onDragOver: "onDragOver", onSlotDragStart: "onSlotDragStart", onSlotDragEnd: "onSlotDragEnd", onPruneClick: "onPruneClick" }, decls: 7, vars: 2, consts: [[3, "click"], [3, "class", "highlight", "character", "draggable", "click", "dragover", "dragstart", "dragend", 4, "ngFor", "ngForOf"], [3, "character", "draggable", "click", "dragover", "dragstart", "dragend"]], template: function RaidTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_2_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2B06\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_4_listener() { return ctx.onPruneClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDDD1\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RaidTileComponent_app_character_tile_6_Template, 1, 7, "app-character-tile", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.raid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_2__["CharacterTileComponent"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-areas: \"title title\" \"character-0 character-5\" \"character-1 character-6\" \"character-2 character-7\" \"character-3 character-8\" \"character-4 character-9\";\n  grid-template-columns: repeat(2, 1fr);\n  grid-column-gap: 10px;\n}\n\nh3[_ngcontent-%COMP%] {\n  grid-area: title;\n  text-align: center;\n  height: 2rem;\n  padding: 0;\n  margin: 0;\n  line-height: 2rem;\n  font-size: 14px;\n  color: #9d9d9d;\n}\n\n.character-0[_ngcontent-%COMP%] {\n  grid-area: character-0;\n}\n\n.character-1[_ngcontent-%COMP%] {\n  grid-area: character-1;\n}\n\n.character-2[_ngcontent-%COMP%] {\n  grid-area: character-2;\n}\n\n.character-3[_ngcontent-%COMP%] {\n  grid-area: character-3;\n}\n\n.character-4[_ngcontent-%COMP%] {\n  grid-area: character-4;\n}\n\n.character-5[_ngcontent-%COMP%] {\n  grid-area: character-5;\n}\n\n.character-6[_ngcontent-%COMP%] {\n  grid-area: character-6;\n}\n\n.character-7[_ngcontent-%COMP%] {\n  grid-area: character-7;\n}\n\n.character-8[_ngcontent-%COMP%] {\n  grid-area: character-8;\n}\n\n.character-9[_ngcontent-%COMP%] {\n  grid-area: character-9;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  animation: shake 0.2s infinite;\n}\n\n@keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-0.5rem);\n  }\n  50% {\n    transform: translateX(0);\n  }\n  75% {\n    transform: translateX(0.5rem);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 0;\n  bottom: 0;\n  font-size: 1.25em;\n  line-height: 1em;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYWlkLXRpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0tBQUE7RUFNQSxxQ0FBQTtFQUNBLHFCQUFBO0FBSkY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQUtBO0VBQWUsc0JBQUE7QUFEZjs7QUFFQTtFQUFlLHNCQUFBO0FBRWY7O0FBREE7RUFBZSxzQkFBQTtBQUtmOztBQUpBO0VBQWUsc0JBQUE7QUFRZjs7QUFQQTtFQUFlLHNCQUFBO0FBV2Y7O0FBVkE7RUFBZSxzQkFBQTtBQWNmOztBQWJBO0VBQWUsc0JBQUE7QUFpQmY7O0FBaEJBO0VBQWUsc0JBQUE7QUFvQmY7O0FBbkJBO0VBQWUsc0JBQUE7QUF1QmY7O0FBdEJBO0VBQWUsc0JBQUE7QUEwQmY7O0FBekJBO0VBQ0UsOEJBQUE7QUE0QkY7O0FBMUJBO0VBQ0U7SUFDRSx3QkFBQTtFQTZCRjtFQTNCQTtJQUNFLDhCQUFBO0VBNkJGO0VBM0JBO0lBQ0Usd0JBQUE7RUE2QkY7RUEzQkE7SUFDRSw2QkFBQTtFQTZCRjtFQTNCQTtJQUNFLHdCQUFBO0VBNkJGO0FBQ0Y7O0FBM0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUE2QkYiLCJmaWxlIjoicmFpZC10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0aXRsZSB0aXRsZVwiXHJcbiAgXCJjaGFyYWN0ZXItMCBjaGFyYWN0ZXItNVwiXHJcbiAgXCJjaGFyYWN0ZXItMSBjaGFyYWN0ZXItNlwiXHJcbiAgXCJjaGFyYWN0ZXItMiBjaGFyYWN0ZXItN1wiXHJcbiAgXCJjaGFyYWN0ZXItMyBjaGFyYWN0ZXItOFwiXHJcbiAgXCJjaGFyYWN0ZXItNCBjaGFyYWN0ZXItOVwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG59XHJcbmgzIHtcclxuICBncmlkLWFyZWE6IHRpdGxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjOWQ5ZDlkO1xyXG59XHJcbi5jaGFyYWN0ZXItMCB7IGdyaWQtYXJlYTogY2hhcmFjdGVyLTA7IH1cclxuLmNoYXJhY3Rlci0xIHsgZ3JpZC1hcmVhOiBjaGFyYWN0ZXItMTsgfVxyXG4uY2hhcmFjdGVyLTIgeyBncmlkLWFyZWE6IGNoYXJhY3Rlci0yOyB9XHJcbi5jaGFyYWN0ZXItMyB7IGdyaWQtYXJlYTogY2hhcmFjdGVyLTM7IH1cclxuLmNoYXJhY3Rlci00IHsgZ3JpZC1hcmVhOiBjaGFyYWN0ZXItNDsgfVxyXG4uY2hhcmFjdGVyLTUgeyBncmlkLWFyZWE6IGNoYXJhY3Rlci01OyB9XHJcbi5jaGFyYWN0ZXItNiB7IGdyaWQtYXJlYTogY2hhcmFjdGVyLTY7IH1cclxuLmNoYXJhY3Rlci03IHsgZ3JpZC1hcmVhOiBjaGFyYWN0ZXItNzsgfVxyXG4uY2hhcmFjdGVyLTggeyBncmlkLWFyZWE6IGNoYXJhY3Rlci04OyB9XHJcbi5jaGFyYWN0ZXItOSB7IGdyaWQtYXJlYTogY2hhcmFjdGVyLTk7IH1cclxuLmhpZ2hsaWdodCB7XHJcbiAgYW5pbWF0aW9uOiBzaGFrZSAuMnMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBzaGFrZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0uNXJlbSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjVyZW0pO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RaidTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-raid-tile',
                templateUrl: './raid-tile.component.html',
                styleUrls: ['./raid-tile.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], raid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onSlotClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSlotDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSlotDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onPruneClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Jd1B":
/*!*******************************************************************!*\
  !*** ./src/app/shared/character-tile/character-tile.component.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterTileComponent", function() { return CharacterTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CharacterTileComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r0.iconsSpecs[ctx_r0.character.class + "_" + ctx_r0.character.role] + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("name ", ctx_r0.character.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.character.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r0.character.player == null ? null : ctx_r0.character.player.name, "]");
} }
class CharacterTileComponent {
    constructor() {
        this.icons = {
            'Warrior': 'https://wow.zamimg.com/images/wow/icons/medium/class_warrior.jpg',
            'Paladin': 'https://wow.zamimg.com/images/wow/icons/medium/class_paladin.jpg',
            'Hunter': 'https://wow.zamimg.com/images/wow/icons/medium/class_hunter.jpg',
            'Druid': 'https://wow.zamimg.com/images/wow/icons/medium/class_druid.jpg',
            'Rogue': 'https://wow.zamimg.com/images/wow/icons/medium/class_rogue.jpg',
            'Warlock': 'https://wow.zamimg.com/images/wow/icons/medium/class_warlock.jpg',
            'Mage': 'https://wow.zamimg.com/images/wow/icons/medium/class_mage.jpg',
            'Priest': 'https://wow.zamimg.com/images/wow/icons/medium/class_priest.jpg',
        };
        this.iconsSpecs = {
            'Warrior_Melee': 'https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_innerrage.jpg',
            'Warrior_Tank': 'https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_defensivestance.jpg',
            'Paladin_Melee': 'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auraoflight.jpg',
            'Paladin_Tank': 'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_devotionaura.jpg',
            'Paladin_Healer': 'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holybolt.jpg',
            'Hunter_Ranged': 'https://wow.zamimg.com/images/wow/icons/medium/class_hunter.jpg',
            'Druid_Melee': 'https://wow.zamimg.com/images/wow/icons/medium/ability_druid_catform.jpg',
            'Druid_Tank': 'https://wow.zamimg.com/images/wow/icons/medium/ability_racial_bearform.jpg',
            'Druid_Ranged': 'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_starfall.jpg',
            'Druid_Healer': 'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingtouch.jpg',
            'Rogue_Melee': 'https://wow.zamimg.com/images/wow/icons/medium/class_rogue.jpg',
            'Rogue_Tank': 'https://wow.zamimg.com/images/wow/icons/medium/achievement_halloween_smiley_01.jpg',
            'Warlock_Ranged': 'https://wow.zamimg.com/images/wow/icons/medium/classicon_warlock.jpg',
            'Warlock_Tank': 'https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_demonform.jpg',
            'Mage_Ranged': 'https://wow.zamimg.com/images/wow/icons/medium/class_mage.jpg',
            'Mage_Healer': 'https://wow.zamimg.com/images/wow/icons/medium/inv_enchant_essencenethersmall.jpg',
            'Priest_Ranged': 'https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowwordpain.jpg',
            'Priest_Healer': 'https://wow.zamimg.com/images/wow/icons/medium/spell_holy_guardianspirit.jpg',
        };
    }
    ngOnInit() {
    }
}
CharacterTileComponent.ɵfac = function CharacterTileComponent_Factory(t) { return new (t || CharacterTileComponent)(); };
CharacterTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterTileComponent, selectors: [["app-character-tile"]], inputs: { character: "character" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "icon"]], template: function CharacterTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CharacterTileComponent_ng_container_0_Template, 6, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.character);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #383838;\n  cursor: default;\n  padding: 5px;\n  border-radius: 2px;\n  font-weight: bold;\n  height: 38px;\n  line-height: 2em;\n  margin-bottom: 3px;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  box-shadow: inset 0 0 0 1px #383838;\n  position: relative;\n}\n\n.icon[_ngcontent-%COMP%] {\n  background-size: cover;\n  border-radius: 2px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n  display: inline-block;\n  height: 2em;\n  margin-right: 5px;\n  vertical-align: top;\n  width: 2em;\n}\n\nsup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  font-style: 0.85em;\n  line-height: 1;\n}\n\n.Druid[_ngcontent-%COMP%] {\n  color: #FF7C0A;\n}\n\n.Evoker[_ngcontent-%COMP%] {\n  color: #33937F;\n}\n\n.Hunter[_ngcontent-%COMP%] {\n  color: #AAD372;\n}\n\n.Mage[_ngcontent-%COMP%] {\n  color: #3FC7EB;\n}\n\n.Monk[_ngcontent-%COMP%] {\n  color: #00FF98;\n}\n\n.Paladin[_ngcontent-%COMP%] {\n  color: #F48CBA;\n}\n\n.Priest[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.Rogue[_ngcontent-%COMP%] {\n  color: #FFF468;\n}\n\n.Shaman[_ngcontent-%COMP%] {\n  color: #0070DD;\n}\n\n.Warlock[_ngcontent-%COMP%] {\n  color: #8788EE;\n}\n\n.Warrior[_ngcontent-%COMP%] {\n  color: #C69B6D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFyYWN0ZXItdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQVMsY0FBQTtBQUtUOztBQUpBO0VBQVUsY0FBQTtBQVFWOztBQVBBO0VBQVUsY0FBQTtBQVdWOztBQVZBO0VBQVEsY0FBQTtBQWNSOztBQWJBO0VBQVEsY0FBQTtBQWlCUjs7QUFoQkE7RUFBVyxjQUFBO0FBb0JYOztBQW5CQTtFQUFVLGNBQUE7QUF1QlY7O0FBdEJBO0VBQVMsY0FBQTtBQTBCVDs7QUF6QkE7RUFBVSxjQUFBO0FBNkJWOztBQTVCQTtFQUFXLGNBQUE7QUFnQ1g7O0FBL0JBO0VBQVcsY0FBQTtBQW1DWCIsImZpbGUiOiJjaGFyYWN0ZXItdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjMzgzODM4O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBsaW5lLWhlaWdodDogMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMzgzODM4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB3aWR0aDogMmVtO1xyXG59XHJcbnN1cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNHB4O1xyXG4gIHJpZ2h0OiA0cHg7XHJcbiAgZm9udC1zdHlsZTogMC44NWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5EcnVpZCB7IGNvbG9yOiAjRkY3QzBBOyB9XHJcbi5Fdm9rZXIgeyBjb2xvcjogIzMzOTM3RjsgfVxyXG4uSHVudGVyIHsgY29sb3I6ICNBQUQzNzI7IH1cclxuLk1hZ2UgeyBjb2xvcjogIzNGQzdFQjsgfVxyXG4uTW9uayB7IGNvbG9yOiAjMDBGRjk4OyB9XHJcbi5QYWxhZGluIHsgY29sb3I6ICNGNDhDQkE7IH1cclxuLlByaWVzdCB7IGNvbG9yOiAjRkZGRkZGOyB9XHJcbi5Sb2d1ZSB7IGNvbG9yOiAjRkZGNDY4OyB9XHJcbi5TaGFtYW4geyBjb2xvcjogIzAwNzBERDsgfVxyXG4uV2FybG9jayB7IGNvbG9yOiAjODc4OEVFOyB9XHJcbi5XYXJyaW9yIHsgY29sb3I6ICNDNjlCNkQ7IH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-character-tile',
                templateUrl: './character-tile.component.html',
                styleUrls: ['./character-tile.component.scss']
            }]
    }], function () { return []; }, { character: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-tile/player-tile.component */ "YoaS");
/* harmony import */ var _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-tile/character-tile.component */ "Jd1B");
/* harmony import */ var _raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raid-tile/raid-tile.component */ "6KtK");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_2__["PlayerTileComponent"],
        _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_3__["CharacterTileComponent"],
        _raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_4__["RaidTileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_2__["PlayerTileComponent"],
        _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_3__["CharacterTileComponent"],
        _raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_4__["RaidTileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_2__["PlayerTileComponent"],
                    _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_3__["CharacterTileComponent"],
                    _raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_4__["RaidTileComponent"],
                ],
                exports: [
                    _player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_2__["PlayerTileComponent"],
                    _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_3__["CharacterTileComponent"],
                    _raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_4__["RaidTileComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'roster-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "YoaS":
/*!*************************************************************!*\
  !*** ./src/app/shared/player-tile/player-tile.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayerTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerTileComponent", function() { return PlayerTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../character-tile/character-tile.component */ "Jd1B");




function PlayerTileComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-character-tile", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("character", character_r1);
} }
class PlayerTileComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlayerTileComponent.ɵfac = function PlayerTileComponent_Factory(t) { return new (t || PlayerTileComponent)(); };
PlayerTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerTileComponent, selectors: [["app-player-tile"]], inputs: { player: "player" }, decls: 4, vars: 2, consts: [[4, "ngFor", "ngForOf"], [3, "character"]], template: function PlayerTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerTileComponent_li_3_Template, 2, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.player.name, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player.characters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_2__["CharacterTileComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItdGlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-tile',
                templateUrl: './player-tile.component.html',
                styleUrls: ['./player-tile.component.scss']
            }]
    }], function () { return []; }, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        redirectTo: '/composition',
        pathMatch: 'full',
    },
    {
        path: 'wow-raid-composition',
        redirectTo: '/composition',
        pathMatch: 'full',
    },
    { path: 'composition', loadChildren: () => Promise.all(/*! import() | composition-composition-module */[__webpack_require__.e("common"), __webpack_require__.e("composition-composition-module")]).then(__webpack_require__.bind(null, /*! ./composition/composition.module */ "xhUX")).then(m => m.CompositionModule) },
    { path: 'players', loadChildren: () => Promise.all(/*! import() | players-players-module */[__webpack_require__.e("common"), __webpack_require__.e("players-players-module")]).then(__webpack_require__.bind(null, /*! ./players/players.module */ "SDng")).then(m => m.PlayersModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map