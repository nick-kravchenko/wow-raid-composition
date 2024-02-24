(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krava\Projects\wow\wow-raid-composition\src\main.ts */"zUnb");


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
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_entities/character-role.enum */ "YQ3A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../character-tile/character-tile.component */ "Jd1B");






const _c0 = ["raidGroups"];
function RaidTileComponent_app_character_tile_30_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-character-tile", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_app_character_tile_30_Template_app_character_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSlotClick.emit(i_r3); })("dragover", function RaidTileComponent_app_character_tile_30_Template_app_character_tile_dragover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDragOver.emit(i_r3); })("dragstart", function RaidTileComponent_app_character_tile_30_Template_app_character_tile_dragstart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSlotDragStart.emit(i_r3); })("dragend", function RaidTileComponent_app_character_tile_30_Template_app_character_tile_dragend_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSlotDragEnd.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slot_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("character-", i_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", slot_r2 == null ? null : slot_r2.highlight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("character", slot_r2)("draggable", !!slot_r2);
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
        this.onRemoveClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.capturingScreenshot = false;
    }
    get tankCount() {
        return this.raid.filter((character) => !!character && character.role === _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].tank).length;
    }
    get meleeCount() {
        return this.raid.filter((character) => !!character && character.role === _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee).length;
    }
    get rangedCount() {
        return this.raid.filter((character) => !!character && character.role === _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged).length;
    }
    get healerCount() {
        return this.raid.filter((character) => !!character && character.role === _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].healer).length;
    }
    ngOnInit() { }
    export() {
        navigator.clipboard.writeText(this.raid.map(c => c === null || c === void 0 ? void 0 : c.name).join('\n'));
    }
    screenshot() {
        this.capturingScreenshot = true;
        html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(this.raidGroups.nativeElement, {
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
    ping() {
        const message = this.raid.reduce((m, character, i) => {
            var _a, _b;
            if (character) {
                m += `<@${(_b = (_a = character.player) === null || _a === void 0 ? void 0 : _a.discord) === null || _b === void 0 ? void 0 : _b.userId}> `;
            }
            if (i > 0 && i % 2) {
                m += '\n';
            }
            return m;
        }, '');
        navigator.clipboard.writeText(message);
    }
}
RaidTileComponent.ɵfac = function RaidTileComponent_Factory(t) { return new (t || RaidTileComponent)(); };
RaidTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RaidTileComponent, selectors: [["app-raid-tile"]], viewQuery: function RaidTileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.raidGroups = _t.first);
    } }, inputs: { title: "title", raid: "raid" }, outputs: { onSlotClick: "onSlotClick", onDragOver: "onDragOver", onSlotDragStart: "onSlotDragStart", onSlotDragEnd: "onSlotDragEnd", onPruneClick: "onPruneClick", onRemoveClick: "onRemoveClick" }, decls: 31, vars: 17, consts: [["data-html2canvas-ignore", "true", 1, "internal-actions"], ["title", "MRT export", 3, "click"], ["title", "Screenshot", 3, "disabled", "click"], [1, "icon-photo"], ["title", "Discord pings", 3, "click"], ["src", "assets/icons/icon_tank.png", "width", "24px", "height", "24px"], ["src", "assets/icons/icon_melee.png", "width", "24px", "height", "24px"], ["src", "assets/icons/icon_ranged.png", "width", "24px", "height", "24px"], ["src", "assets/icons/icon_heal.png", "width", "24px", "height", "24px"], ["data-html2canvas-ignore", "true", 1, "external-actions"], [3, "click"], [1, "raidgroups"], ["raidGroups", ""], [3, "class", "highlight", "character", "draggable", "click", "dragover", "dragstart", "dragend", 4, "ngFor", "ngForOf"], [3, "character", "draggable", "click", "dragover", "dragstart", "dragend"]], template: function RaidTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_2_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2B06\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_4_listener() { return ctx.screenshot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_6_listener() { return ctx.ping(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2709\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_24_listener() { return ctx.onPruneClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uD83D\uDDD1\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_26_listener() { return ctx.onRemoveClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\uD83D\uDC80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RaidTileComponent_app_character_tile_30_Template, 1, 7, "app-character-tile", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.capturingScreenshot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loading", ctx.capturingScreenshot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("green", ctx.tankCount === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tankCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("green", ctx.meleeCount + ctx.rangedCount === 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.meleeCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("green", ctx.meleeCount + ctx.rangedCount === 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.rangedCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("green", ctx.healerCount === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.healerCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.raid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_4__["CharacterTileComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nheader[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nheader[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 4px 0 8px;\n}\n\nheader[_ngcontent-%COMP%]   .internal-actions[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .external-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nheader[_ngcontent-%COMP%]   .internal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .external-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 4px 0 0;\n}\n\nheader[_ngcontent-%COMP%]   .internal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child, header[_ngcontent-%COMP%]   .external-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nheader[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  color: rgba(0, 255, 0, 0.5);\n}\n\n.raidgroups[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 10px;\n  grid-row-gap: 3px;\n}\n\nh3[_ngcontent-%COMP%] {\n  grid-area: title;\n  text-align: center;\n  height: 2rem;\n  padding: 0;\n  margin: 0;\n  line-height: 2rem;\n  font-size: 14px;\n  color: #9d9d9d;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  animation: shake 0.2s infinite;\n}\n\n@keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-0.5rem);\n  }\n  50% {\n    transform: translateX(0);\n  }\n  75% {\n    transform: translateX(0.5rem);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 0;\n  bottom: 0;\n  font-size: 1.25em;\n  line-height: 1em;\n  cursor: pointer;\n}\n\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYWlkLXRpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUdKOztBQUZJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBSU47O0FBREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFGSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUlOOztBQUhNO0VBQ0UsU0FBQTtBQUtSOztBQURFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREU7RUFDRSwyQkFBQTtBQUdKOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkE7RUFDRSw4QkFBQTtBQUtGOztBQUhBO0VBQ0U7SUFDRSx3QkFBQTtFQU1GO0VBSkE7SUFDRSw4QkFBQTtFQU1GO0VBSkE7SUFDRSx3QkFBQTtFQU1GO0VBSkE7SUFDRSw2QkFBQTtFQU1GO0VBSkE7SUFDRSx3QkFBQTtFQU1GO0FBQ0Y7O0FBSkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUxFO0VBQ0UsZUFBQTtBQU9KIiwiZmlsZSI6InJhaWQtdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGgzIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIDRweCAwIDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmludGVybmFsLWFjdGlvbnMsIC5leHRlcm5hbC1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCA0cHggMCAwO1xyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuZ3JlZW4ge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAuNSk7XHJcbiAgfVxyXG59XHJcbi5yYWlkZ3JvdXBzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICBncmlkLXJvdy1nYXA6IDNweDtcclxufVxyXG5oMyB7XHJcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzlkOWQ5ZDtcclxufVxyXG4uaGlnaGxpZ2h0IHtcclxuICBhbmltYXRpb246IHNoYWtlIC4ycyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS41cmVtKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguNXJlbSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICZbZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbn1cclxuIl19 */"] });
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
        }], onRemoveClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], raidGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['raidGroups']
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/icons/", ctx_r0.iconsSpecs[ctx_r0.character.class + "_" + ctx_r0.character.role], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
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
            'Warrior': 'class_warrior.jpg',
            'Paladin': 'class_paladin.jpg',
            'Hunter': 'class_hunter.jpg',
            'Druid': 'class_druid.jpg',
            'Rogue': 'class_rogue.jpg',
            'Warlock': 'class_warlock.jpg',
            'Mage': 'class_mage.jpg',
            'Priest': 'class_priest.jpg',
        };
        this.iconsSpecs = {
            'Warrior_Melee': 'ability_warrior_innerrage.jpg',
            'Warrior_Tank': 'ability_warrior_defensivestance.jpg',
            'Paladin_Melee': 'spell_holy_auraoflight.jpg',
            'Paladin_Tank': 'spell_holy_devotionaura.jpg',
            'Paladin_Healer': 'spell_holy_holybolt.jpg',
            'Hunter_Ranged': 'class_hunter.jpg',
            'Druid_Melee': 'ability_druid_catform.jpg',
            'Druid_Tank': 'ability_racial_bearform.jpg',
            'Druid_Ranged': 'spell_nature_starfall.jpg',
            'Druid_Healer': 'spell_nature_healingtouch.jpg',
            'Rogue_Melee': 'class_rogue.jpg',
            'Rogue_Tank': 'achievement_halloween_smiley_01.jpg',
            'Warlock_Ranged': 'classicon_warlock.jpg',
            'Warlock_Tank': 'spell_shadow_demonform.jpg',
            'Mage_Ranged': 'class_mage.jpg',
            'Mage_Healer': 'inv_enchant_essencenethersmall.jpg',
            'Priest_Ranged': 'spell_shadow_shadowwordpain.jpg',
            'Priest_Healer': 'spell_holy_guardianspirit.jpg',
        };
    }
    ngOnInit() {
    }
}
CharacterTileComponent.ɵfac = function CharacterTileComponent_Factory(t) { return new (t || CharacterTileComponent)(); };
CharacterTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterTileComponent, selectors: [["app-character-tile"]], inputs: { character: "character" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["crossorigin", "anonymous", "alt", "", 1, "icon", 3, "src"]], template: function CharacterTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CharacterTileComponent_ng_container_0_Template, 6, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.character);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #383838;\n  cursor: default;\n  padding: 5px;\n  border-radius: 2px;\n  font-weight: bold;\n  height: 38px;\n  line-height: 2em;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  box-shadow: inset 0 0 0 1px #383838;\n  position: relative;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: block;\n  background-size: cover;\n  border-radius: 2px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n  display: inline-block;\n  height: 2em;\n  margin-right: 5px;\n  vertical-align: top;\n  width: 2em;\n}\n\nsup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  font-style: 0.85em;\n  line-height: 1;\n}\n\n.Druid[_ngcontent-%COMP%] {\n  color: #FF7C0A;\n}\n\n.Evoker[_ngcontent-%COMP%] {\n  color: #33937F;\n}\n\n.Hunter[_ngcontent-%COMP%] {\n  color: #AAD372;\n}\n\n.Mage[_ngcontent-%COMP%] {\n  color: #3FC7EB;\n}\n\n.Monk[_ngcontent-%COMP%] {\n  color: #00FF98;\n}\n\n.Paladin[_ngcontent-%COMP%] {\n  color: #F48CBA;\n}\n\n.Priest[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.Rogue[_ngcontent-%COMP%] {\n  color: #FFF468;\n}\n\n.Shaman[_ngcontent-%COMP%] {\n  color: #0070DD;\n}\n\n.Warlock[_ngcontent-%COMP%] {\n  color: #8788EE;\n}\n\n.Warrior[_ngcontent-%COMP%] {\n  color: #C69B6D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFyYWN0ZXItdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREE7RUFBUyxjQUFBO0FBS1Q7O0FBSkE7RUFBVSxjQUFBO0FBUVY7O0FBUEE7RUFBVSxjQUFBO0FBV1Y7O0FBVkE7RUFBUSxjQUFBO0FBY1I7O0FBYkE7RUFBUSxjQUFBO0FBaUJSOztBQWhCQTtFQUFXLGNBQUE7QUFvQlg7O0FBbkJBO0VBQVUsY0FBQTtBQXVCVjs7QUF0QkE7RUFBUyxjQUFBO0FBMEJUOztBQXpCQTtFQUFVLGNBQUE7QUE2QlY7O0FBNUJBO0VBQVcsY0FBQTtBQWdDWDs7QUEvQkE7RUFBVyxjQUFBO0FBbUNYIiwiZmlsZSI6ImNoYXJhY3Rlci10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICMzODM4Mzg7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzM4MzgzODtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmljb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgd2lkdGg6IDJlbTtcclxufVxyXG5zdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICByaWdodDogNHB4O1xyXG4gIGZvbnQtc3R5bGU6IDAuODVlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4uRHJ1aWQgeyBjb2xvcjogI0ZGN0MwQTsgfVxyXG4uRXZva2VyIHsgY29sb3I6ICMzMzkzN0Y7IH1cclxuLkh1bnRlciB7IGNvbG9yOiAjQUFEMzcyOyB9XHJcbi5NYWdlIHsgY29sb3I6ICMzRkM3RUI7IH1cclxuLk1vbmsgeyBjb2xvcjogIzAwRkY5ODsgfVxyXG4uUGFsYWRpbiB7IGNvbG9yOiAjRjQ4Q0JBOyB9XHJcbi5Qcmllc3QgeyBjb2xvcjogI0ZGRkZGRjsgfVxyXG4uUm9ndWUgeyBjb2xvcjogI0ZGRjQ2ODsgfVxyXG4uU2hhbWFuIHsgY29sb3I6ICMwMDcwREQ7IH1cclxuLldhcmxvY2sgeyBjb2xvcjogIzg3ODhFRTsgfVxyXG4uV2FycmlvciB7IGNvbG9yOiAjQzY5QjZEOyB9Il19 */"] });
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

/***/ "YQ3A":
/*!**************************************************!*\
  !*** ./src/app/_entities/character-role.enum.ts ***!
  \**************************************************/
/*! exports provided: CharacterRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterRole", function() { return CharacterRole; });
var CharacterRole;
(function (CharacterRole) {
    CharacterRole["tank"] = "Tank";
    CharacterRole["healer"] = "Healer";
    CharacterRole["melee"] = "Melee";
    CharacterRole["ranged"] = "Ranged";
})(CharacterRole || (CharacterRole = {}));


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
    { path: '', loadChildren: () => Promise.all(/*! import() | composition-composition-module */[__webpack_require__.e("default~composition-composition-module~players-players-module"), __webpack_require__.e("composition-composition-module")]).then(__webpack_require__.bind(null, /*! ./composition/composition.module */ "xhUX")).then(m => m.CompositionModule) },
    { path: 'players', loadChildren: () => Promise.all(/*! import() | players-players-module */[__webpack_require__.e("default~composition-composition-module~players-players-module"), __webpack_require__.e("players-players-module")]).then(__webpack_require__.bind(null, /*! ./players/players.module */ "SDng")).then(m => m.PlayersModule) }
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