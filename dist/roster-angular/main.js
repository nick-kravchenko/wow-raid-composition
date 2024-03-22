(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krava\Projects\wow\wow-raid-composition\src\main.ts */"zUnb");


/***/ }),

/***/ "0MCZ":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = ["*"];
class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 23, vars: 0, consts: [[1, "container"], [1, "header-wrapper"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo.png", "alt", "", 1, "logo-image"], ["routerLink", "/composition", "queryParamsHandling", "merge"], ["routerLink", "/players"], ["routerLink", "/calendar"], ["routerLink", "/about-us"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Composition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["[_ngcontent-%COMP%]:root {\n  display: block;\n}\n\nheader[_ngcontent-%COMP%] {\n  padding: 1em 0;\n  margin: 1em 1em 2em;\n  background: rgba(40, 45, 51, 0.5);\n  border-radius: 0.5em;\n  box-shadow: 0 0.25em 2em rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(0.5em);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  position: sticky;\n  top: 1em;\n  z-index: 1;\n}\n\nheader[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin: 0 2em 0 0;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n\nheader[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 2em;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.5em 1em 0.5em 0;\n  margin: 0 1em 0 0;\n  color: #f7b801;\n  text-decoration: none;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXlvdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUFJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFFTjs7QUFFSTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHTTtFQUNFLFNBQUE7QUFEUjs7QUFJSTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQzVDTztFRDZDUCxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFGTjs7QUFHTTtFQUNFLDBCQUFBO0FBRFIiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuOnJvb3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmhlYWRlciB7XHJcbiAgcGFkZGluZzogMWVtIDA7XHJcbiAgbWFyZ2luOiAxZW0gMWVtIDJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRkZWVwLXNwYWNlLCAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICBib3gtc2hhZG93OiAwIC4yNWVtIDJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKC41ZW0pO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAxZW07XHJcbiAgei1pbmRleDogMTtcclxuICAuaGVhZGVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIG1hcmdpbjogMCAyZW0gMCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAmLWltYWdlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5hdiB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIHBhZGRpbmc6IC41ZW0gMWVtIC41ZW0gMDtcclxuICAgICAgbWFyZ2luOiAwIDFlbSAwIDA7XHJcbiAgICAgIGNvbG9yOiAkcmVnYWwtZ29sZDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvciBQYWxldHRlOlxyXG4vLyBQcmltYXJ5IGNvbG9yLCByZXByZXNlbnRpbmcgdGhlIEFsbGlhbmNlIGZhY3Rpb24uXHJcbiRhbGxpYW5jZS1ibHVlOiAjMDAzM0NDO1xyXG4vLyBBY2NlbnQgY29sb3IsIGhpZ2hsaWdodGluZyBidXR0b25zLCBpY29ucywgYW5kIGtleSBpbmZvcm1hdGlvbi5cclxuJHJlZ2FsLWdvbGQ6ICNmN2I4MDE7XHJcbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGNvbnRlbnQgYXJlYXMsIHByb3ZpZGluZyBjb250cmFzdC5cclxuJGRlZXAtc3BhY2U6ICMyODJEMzM7XHJcbiRtYWtvOiAjNDU0OTRGO1xyXG4vLyBTZWNvbmRhcnkgdGV4dCBhbmQgc3VidGxlIFVJIGVsZW1lbnRzLCBvZmZlcmluZyByZWFkYWJpbGl0eSB3aXRob3V0IG92ZXJwb3dlcmluZy5cclxuJHNpbHZlci1zdGVlbDogIzcyNzY3RDtcclxuLy8gQ2FsbCB0byBhY3Rpb24gYnV0dG9ucyBhbmQgY3JpdGljYWwgYWxlcnRzLCBkcmF3aW5nIGF0dGVudGlvbi5cclxuJHZpY3RvcnktcmVkOiAjQzQxRjNCO1xyXG4vLyBVc2VkIHNwYXJpbmdseSBmb3Igc3VjY2VzcyBtZXNzYWdlcyBvciBwcm9ncmVzcyBiYXJzLlxyXG4kZWx3eW5uLWZvcmVzdC1ncmVlbjogIzFBNDcyQTtcclxuXHJcbiRyYXJpdHktY29tbW9uOiAjZmZmO1xyXG4kcmFyaXR5LXVuY29tbW9uOiAjMWVmZjAwO1xyXG4kcmFyaXR5LXJhcmU6ICMwMDcwZGQ7XHJcbiRyYXJpdHktZXBpYzogI2EzMzVlZTtcclxuJHJhcml0eS1sZWdlbmRhcnk6ICNmZjgwMDA7XHJcblxyXG4kY2xhc3Njb2xvcnM6IChcclxuICBcIndhcnJpb3JcIjogI2M3OWM2ZSxcclxuICBcInBhbGFkaW5cIjogI2Y1OGNiYSxcclxuICBcImh1bnRlclwiOiAjYWJkNDczLFxyXG4gIFwicm9ndWVcIjogI2ZmZjU2OSxcclxuICBcInByaWVzdFwiOiAjZmZmZmZmLFxyXG4gIFwiZGVhdGhrbmlnaHRcIjogI2M0MWYzYixcclxuICBcInNoYW1hblwiOiAjMDA3MGRlLFxyXG4gIFwibWFnZVwiOiAjNDBjN2ViLFxyXG4gIFwid2FybG9ja1wiOiAjODc4N2VkLFxyXG4gIFwibW9ua1wiOiAjMDBmZjk2LFxyXG4gIFwiZHJ1aWRcIjogI2ZmN2QwYSxcclxuICBcImRlbW9uaHVudGVyXCI6ICNhMzMwYzksXHJcbik7XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_entities/character-rank.enum */ "E4OH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../character-tile/character-tile.component */ "Jd1B");







const _c0 = ["raidGroups"];
function RaidTileComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-character-tile", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_ng_container_38_Template_app_character_tile_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSlotClick.emit(i_r3); })("dragover", function RaidTileComponent_ng_container_38_Template_app_character_tile_dragover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDragOver.emit(i_r3); })("dragstart", function RaidTileComponent_ng_container_38_Template_app_character_tile_dragstart_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSlotDragStart.emit(i_r3); })("dragend", function RaidTileComponent_ng_container_38_Template_app_character_tile_dragend_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSlotDragEnd.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const slot_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
    get mainCounter() {
        return this.raid.filter((character) => !!character && character.rank === _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_3__["CharacterRank"].main).length;
    }
    get altCounter() {
        return this.raid.filter((character) => !!character && character.rank === _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_3__["CharacterRank"].alt).length;
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
        var _a, _b, _c, _d, _e, _f;
        let message = '';
        for (let i = 0; i < this.raid.length / 2; i++) {
            message += `<@${(_c = (_b = (_a = this.raid[i]) === null || _a === void 0 ? void 0 : _a.player) === null || _b === void 0 ? void 0 : _b.discord) === null || _c === void 0 ? void 0 : _c.userId}> <@${(_f = (_e = (_d = this.raid[i + 5]) === null || _d === void 0 ? void 0 : _d.player) === null || _e === void 0 ? void 0 : _e.discord) === null || _f === void 0 ? void 0 : _f.userId}>\n`;
        }
        const kravaCharacter = this.raid.find((character) => { var _a; return ((_a = character === null || character === void 0 ? void 0 : character.player) === null || _a === void 0 ? void 0 : _a.name) === 'Krava'; });
        message += `\`\`\`/w ${kravaCharacter === null || kravaCharacter === void 0 ? void 0 : kravaCharacter.name} 123\`\`\``;
        navigator.clipboard.writeText(message);
    }
}
RaidTileComponent.ɵfac = function RaidTileComponent_Factory(t) { return new (t || RaidTileComponent)(); };
RaidTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RaidTileComponent, selectors: [["app-raid-tile"]], viewQuery: function RaidTileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.raidGroups = _t.first);
    } }, inputs: { title: "title", raid: "raid" }, outputs: { onSlotClick: "onSlotClick", onDragOver: "onDragOver", onSlotDragStart: "onSlotDragStart", onSlotDragEnd: "onSlotDragEnd", onPruneClick: "onPruneClick", onRemoveClick: "onRemoveClick" }, decls: 39, vars: 19, consts: [["data-html2canvas-ignore", "true", 1, "internal-actions"], ["title", "MRT export", 3, "click"], [1, "fa-solid", "fa-file-arrow-down"], ["title", "Screenshot", 3, "disabled", "click"], [1, "icon-photo"], ["title", "Discord pings", 1, "discord-ping", 3, "click"], [1, "fa-brands", "fa-discord"], ["src", "assets/icons/icon_tank.png", "width", "24px", "height", "24px"], ["src", "assets/icons/icon_melee.png", "width", "24px", "height", "24px"], ["src", "assets/icons/icon_ranged.png", "width", "24px", "height", "24px"], ["src", "assets/icons/icon_heal.png", "width", "24px", "height", "24px"], [1, "ratio"], [1, "yellow"], [1, "green"], ["data-html2canvas-ignore", "true", 1, "external-actions"], [3, "click"], [1, "fa-solid", "fa-recycle"], [1, "fa-solid", "fa-trash-can"], [1, "raidgroups"], ["raidGroups", ""], [4, "ngFor", "ngForOf"], [3, "character", "draggable", "click", "dragover", "dragstart", "dragend"]], template: function RaidTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_2_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_4_listener() { return ctx.screenshot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_6_listener() { return ctx.ping(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_32_listener() { return ctx.onPruneClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaidTileComponent_Template_button_click_34_listener() { return ctx.onRemoveClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RaidTileComponent_ng_container_38_Template, 2, 7, "ng-container", 20);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("green", ctx.meleeCount + ctx.rangedCount === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.meleeCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("green", ctx.meleeCount + ctx.rangedCount === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.rangedCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("green", ctx.healerCount === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.healerCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.altCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mainCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.raid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_5__["CharacterTileComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nheader[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-area: title;\n  text-align: center;\n  height: 2rem;\n  padding: 0;\n  margin: 0;\n  line-height: 2rem;\n  font-size: 14px;\n  color: #9d9d9d;\n}\n\n@media (max-width: 768px) {\n  header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\nheader[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 4px 0 8px;\n}\n\nheader[_ngcontent-%COMP%]   .internal-actions[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .external-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nheader[_ngcontent-%COMP%]   .internal-actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .external-actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f7b801;\n}\n\nheader[_ngcontent-%COMP%]   .internal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .external-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 4px 0 0;\n  width: 24px;\n}\n\nheader[_ngcontent-%COMP%]   .internal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child, header[_ngcontent-%COMP%]   .external-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nheader[_ngcontent-%COMP%]   .ratio[_ngcontent-%COMP%] {\n  margin: 0 0 0 16px;\n}\n\nheader[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  color: green;\n}\n\nheader[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  color: yellow;\n}\n\n.raidgroups[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 10px;\n  grid-row-gap: 3px;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  animation: shake 0.2s infinite;\n}\n\n@keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-0.5rem);\n  }\n  50% {\n    transform: translateX(0);\n  }\n  75% {\n    transform: translateX(0.5rem);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 0;\n  bottom: 0;\n  font-size: 1.25em;\n  line-height: 1em;\n  cursor: pointer;\n}\n\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.discord-ping[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.discord-ping[_ngcontent-%COMP%]:after {\n  content: \"1\";\n  position: absolute;\n  border-radius: 50%;\n  background: #C41F3B;\n  color: white;\n  width: 16px;\n  height: 16px;\n  right: 0;\n  top: 0;\n  transform: translate(50%, -50%);\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  scale: 0.7;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYWlkLXRpbGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHNjcmVlbi1zaXplcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0FBRkY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURGOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjs7QUNORTtFRE5BO0lBZUksYUFBQTtFQUNKO0FBQ0Y7O0FBQUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFFTjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUFJO0VBQ0UsY0VoQ087QUZrQ2I7O0FBQUk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRU47O0FBRE07RUFDRSxTQUFBO0FBR1I7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxhQUFBO0FBQ0o7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0Usd0JBQUE7RUFHRjtFQURBO0lBQ0UsOEJBQUE7RUFHRjtFQURBO0lBQ0Usd0JBQUE7RUFHRjtFQURBO0lBQ0UsNkJBQUE7RUFHRjtFQURBO0lBQ0Usd0JBQUE7RUFHRjtBQUNGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFGRTtFQUNFLGVBQUE7QUFJSjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBSEU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRWpHVTtFRmtHVixZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUtKIiwiZmlsZSI6InJhaWQtdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuQGltcG9ydCBcInNjcmVlbi1zaXplc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaDMge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdyaWQtYXJlYTogdGl0bGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzlkOWQ5ZDtcclxuXHJcbiAgICBAaW5jbHVkZSBzY3JlZW4tdGFibGV0KCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCA0cHggMCA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbnRlcm5hbC1hY3Rpb25zLCAuZXh0ZXJuYWwtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogJHJlZ2FsLWdvbGQ7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIDRweCAwIDA7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAucmF0aW8ge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAxNnB4O1xyXG4gIH1cclxuICAuZ3JlZW4ge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICAueWVsbG93IHtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG59XHJcbi5yYWlkZ3JvdXBzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICBncmlkLXJvdy1nYXA6IDNweDtcclxufVxyXG4uaGlnaGxpZ2h0IHtcclxuICBhbmltYXRpb246IHNoYWtlIC4ycyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS41cmVtKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguNXJlbSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICZbZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbn1cclxuLmRpc2NvcmQtcGluZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJzEnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogJHZpY3RvcnktcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBzY2FsZTogLjc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gc2NyZWVuLW1vYmlsZS1zKCkge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzY3JlZW4tbW9iaWxlLW0oKSB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNjcmVlbi1tb2JpbGUtbCgpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc2NyZWVuLXRhYmxldCgpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc2NyZWVuLWxhcHRvcCgpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNjcmVlbi1sYXB0b3AtbCgpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNjcmVlbi00aygpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMjU2MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3IgUGFsZXR0ZTpcclxuLy8gUHJpbWFyeSBjb2xvciwgcmVwcmVzZW50aW5nIHRoZSBBbGxpYW5jZSBmYWN0aW9uLlxyXG4kYWxsaWFuY2UtYmx1ZTogIzAwMzNDQztcclxuLy8gQWNjZW50IGNvbG9yLCBoaWdobGlnaHRpbmcgYnV0dG9ucywgaWNvbnMsIGFuZCBrZXkgaW5mb3JtYXRpb24uXHJcbiRyZWdhbC1nb2xkOiAjZjdiODAxO1xyXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBjb250ZW50IGFyZWFzLCBwcm92aWRpbmcgY29udHJhc3QuXHJcbiRkZWVwLXNwYWNlOiAjMjgyRDMzO1xyXG4kbWFrbzogIzQ1NDk0RjtcclxuLy8gU2Vjb25kYXJ5IHRleHQgYW5kIHN1YnRsZSBVSSBlbGVtZW50cywgb2ZmZXJpbmcgcmVhZGFiaWxpdHkgd2l0aG91dCBvdmVycG93ZXJpbmcuXHJcbiRzaWx2ZXItc3RlZWw6ICM3Mjc2N0Q7XHJcbi8vIENhbGwgdG8gYWN0aW9uIGJ1dHRvbnMgYW5kIGNyaXRpY2FsIGFsZXJ0cywgZHJhd2luZyBhdHRlbnRpb24uXHJcbiR2aWN0b3J5LXJlZDogI0M0MUYzQjtcclxuLy8gVXNlZCBzcGFyaW5nbHkgZm9yIHN1Y2Nlc3MgbWVzc2FnZXMgb3IgcHJvZ3Jlc3MgYmFycy5cclxuJGVsd3lubi1mb3Jlc3QtZ3JlZW46ICMxQTQ3MkE7XHJcblxyXG4kcmFyaXR5LWNvbW1vbjogI2ZmZjtcclxuJHJhcml0eS11bmNvbW1vbjogIzFlZmYwMDtcclxuJHJhcml0eS1yYXJlOiAjMDA3MGRkO1xyXG4kcmFyaXR5LWVwaWM6ICNhMzM1ZWU7XHJcbiRyYXJpdHktbGVnZW5kYXJ5OiAjZmY4MDAwO1xyXG5cclxuJGNsYXNzY29sb3JzOiAoXHJcbiAgXCJ3YXJyaW9yXCI6ICNjNzljNmUsXHJcbiAgXCJwYWxhZGluXCI6ICNmNThjYmEsXHJcbiAgXCJodW50ZXJcIjogI2FiZDQ3MyxcclxuICBcInJvZ3VlXCI6ICNmZmY1NjksXHJcbiAgXCJwcmllc3RcIjogI2ZmZmZmZixcclxuICBcImRlYXRoa25pZ2h0XCI6ICNjNDFmM2IsXHJcbiAgXCJzaGFtYW5cIjogIzAwNzBkZSxcclxuICBcIm1hZ2VcIjogIzQwYzdlYixcclxuICBcIndhcmxvY2tcIjogIzg3ODdlZCxcclxuICBcIm1vbmtcIjogIzAwZmY5NixcclxuICBcImRydWlkXCI6ICNmZjdkMGEsXHJcbiAgXCJkZW1vbmh1bnRlclwiOiAjYTMzMGM5LFxyXG4pO1xyXG5cclxuIl19 */"] });
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

/***/ "E4OH":
/*!**************************************************!*\
  !*** ./src/app/_entities/character-rank.enum.ts ***!
  \**************************************************/
/*! exports provided: CharacterRank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterRank", function() { return CharacterRank; });
var CharacterRank;
(function (CharacterRank) {
    CharacterRank["main"] = "Main";
    CharacterRank["alt"] = "Alt";
})(CharacterRank || (CharacterRank = {}));


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



function CharacterTileComponent_ng_container_0_sup_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r1.character.player.name, "]");
} }
function CharacterTileComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterTileComponent_ng_container_0_Template_img_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleRole($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterTileComponent_ng_container_0_sup_6_Template, 2, 1, "sup", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/icons/", ctx_r0.iconsSpecs[ctx_r0.character.class + "_" + ctx_r0.character.role], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("name text-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, ctx_r0.character.class), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("rank rank--", ctx_r0.character.rank, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.character.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.character.player);
} }
class CharacterTileComponent {
    constructor() {
        this.icons = {
            Warrior: 'class_warrior.jpg',
            Paladin: 'class_paladin.jpg',
            Hunter: 'class_hunter.jpg',
            Druid: 'class_druid.jpg',
            Rogue: 'class_rogue.jpg',
            Warlock: 'class_warlock.jpg',
            Mage: 'class_mage.jpg',
            Priest: 'class_priest.jpg',
        };
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
    }
    toggleRole(event) {
        var _a, _b;
        event.preventDefault();
        event.stopPropagation();
        const roleQueue = Object.keys(this.iconsSpecs).filter((classRole) => {
            // @ts-ignore
            return classRole.includes(this.character.class);
        });
        const currentRoleIndex = roleQueue.indexOf(`${(_a = this.character) === null || _a === void 0 ? void 0 : _a.class}_${(_b = this.character) === null || _b === void 0 ? void 0 : _b.role}`);
        const nextRoleIndex = roleQueue.length - 1 === currentRoleIndex ? 0 : currentRoleIndex + 1;
        // @ts-ignore
        this.character.role = roleQueue[nextRoleIndex].split('_')[1];
    }
}
CharacterTileComponent.ɵfac = function CharacterTileComponent_Factory(t) { return new (t || CharacterTileComponent)(); };
CharacterTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterTileComponent, selectors: [["app-character-tile"]], inputs: { character: "character" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["crossorigin", "anonymous", "alt", "", 1, "icon", 3, "src", "click"]], template: function CharacterTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CharacterTileComponent_ng_container_0_Template, 7, 11, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.character);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #45494F;\n  cursor: default;\n  padding: 5px;\n  border-radius: 2px;\n  font-weight: bold;\n  height: 38px;\n  line-height: 2em;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  position: relative;\n  border: 1px solid #383838;\n}\n\n.icon[_ngcontent-%COMP%] {\n  background-size: cover;\n  border-radius: 2px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n  display: inline-block;\n  height: 2em;\n  margin-right: 5px;\n  vertical-align: top;\n  width: 2em;\n  cursor: pointer;\n}\n\n.rank[_ngcontent-%COMP%] {\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n\n.rank--Main[_ngcontent-%COMP%] {\n  background: green;\n}\n\n.rank--Alt[_ngcontent-%COMP%] {\n  background: yellow;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nsup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 1em;\n  transform: translateY(-50%);\n  font-size: 0.85em;\n  line-height: 1;\n}\n\n@media (max-width: 768px) {\n  sup[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFyYWN0ZXItdGlsZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcY29sb3JzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHNjcmVlbi1zaXplcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJDQ0s7RURBTCxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUNFO0VBQ0UsaUJBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVGOztBRXZDRTtFRitCRjtJQVNJLGFBQUE7RUFHRjtBQUNGIiwiZmlsZSI6ImNoYXJhY3Rlci10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5AaW1wb3J0IFwic2NyZWVuLXNpemVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICRtYWtvO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBsaW5lLWhlaWdodDogMmVtO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODM4Mzg7XHJcbn1cclxuLmljb24ge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJhbmsge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICYtLU1haW4ge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgfVxyXG4gICYtLUFsdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgfVxyXG59XHJcbi5uYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuc3VwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDFlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcblxyXG4gIEBpbmNsdWRlIHNjcmVlbi10YWJsZXQoKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvciBQYWxldHRlOlxyXG4vLyBQcmltYXJ5IGNvbG9yLCByZXByZXNlbnRpbmcgdGhlIEFsbGlhbmNlIGZhY3Rpb24uXHJcbiRhbGxpYW5jZS1ibHVlOiAjMDAzM0NDO1xyXG4vLyBBY2NlbnQgY29sb3IsIGhpZ2hsaWdodGluZyBidXR0b25zLCBpY29ucywgYW5kIGtleSBpbmZvcm1hdGlvbi5cclxuJHJlZ2FsLWdvbGQ6ICNmN2I4MDE7XHJcbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGNvbnRlbnQgYXJlYXMsIHByb3ZpZGluZyBjb250cmFzdC5cclxuJGRlZXAtc3BhY2U6ICMyODJEMzM7XHJcbiRtYWtvOiAjNDU0OTRGO1xyXG4vLyBTZWNvbmRhcnkgdGV4dCBhbmQgc3VidGxlIFVJIGVsZW1lbnRzLCBvZmZlcmluZyByZWFkYWJpbGl0eSB3aXRob3V0IG92ZXJwb3dlcmluZy5cclxuJHNpbHZlci1zdGVlbDogIzcyNzY3RDtcclxuLy8gQ2FsbCB0byBhY3Rpb24gYnV0dG9ucyBhbmQgY3JpdGljYWwgYWxlcnRzLCBkcmF3aW5nIGF0dGVudGlvbi5cclxuJHZpY3RvcnktcmVkOiAjQzQxRjNCO1xyXG4vLyBVc2VkIHNwYXJpbmdseSBmb3Igc3VjY2VzcyBtZXNzYWdlcyBvciBwcm9ncmVzcyBiYXJzLlxyXG4kZWx3eW5uLWZvcmVzdC1ncmVlbjogIzFBNDcyQTtcclxuXHJcbiRyYXJpdHktY29tbW9uOiAjZmZmO1xyXG4kcmFyaXR5LXVuY29tbW9uOiAjMWVmZjAwO1xyXG4kcmFyaXR5LXJhcmU6ICMwMDcwZGQ7XHJcbiRyYXJpdHktZXBpYzogI2EzMzVlZTtcclxuJHJhcml0eS1sZWdlbmRhcnk6ICNmZjgwMDA7XHJcblxyXG4kY2xhc3Njb2xvcnM6IChcclxuICBcIndhcnJpb3JcIjogI2M3OWM2ZSxcclxuICBcInBhbGFkaW5cIjogI2Y1OGNiYSxcclxuICBcImh1bnRlclwiOiAjYWJkNDczLFxyXG4gIFwicm9ndWVcIjogI2ZmZjU2OSxcclxuICBcInByaWVzdFwiOiAjZmZmZmZmLFxyXG4gIFwiZGVhdGhrbmlnaHRcIjogI2M0MWYzYixcclxuICBcInNoYW1hblwiOiAjMDA3MGRlLFxyXG4gIFwibWFnZVwiOiAjNDBjN2ViLFxyXG4gIFwid2FybG9ja1wiOiAjODc4N2VkLFxyXG4gIFwibW9ua1wiOiAjMDBmZjk2LFxyXG4gIFwiZHJ1aWRcIjogI2ZmN2QwYSxcclxuICBcImRlbW9uaHVudGVyXCI6ICNhMzMwYzksXHJcbik7XHJcblxyXG4iLCJAbWl4aW4gc2NyZWVuLW1vYmlsZS1zKCkge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzY3JlZW4tbW9iaWxlLW0oKSB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNjcmVlbi1tb2JpbGUtbCgpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc2NyZWVuLXRhYmxldCgpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc2NyZWVuLWxhcHRvcCgpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNjcmVlbi1sYXB0b3AtbCgpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNjcmVlbi00aygpIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMjU2MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-character-tile',
                templateUrl: './character-tile.component.html',
                styleUrls: ['./character-tile.component.scss']
            }]
    }], null, { character: [{
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
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "0MCZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_wcl_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/wcl.service */ "UBWX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _services_wcl_service__WEBPACK_IMPORTED_MODULE_7__["WclService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_2__["PlayerTileComponent"],
        _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_3__["CharacterTileComponent"],
        _raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_4__["RaidTileComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]], exports: [_player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_2__["PlayerTileComponent"],
        _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_3__["CharacterTileComponent"],
        _raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_4__["RaidTileComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_2__["PlayerTileComponent"],
                    _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_3__["CharacterTileComponent"],
                    _raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_4__["RaidTileComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                ],
                exports: [
                    _player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_2__["PlayerTileComponent"],
                    _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_3__["CharacterTileComponent"],
                    _raid_tile_raid_tile_component__WEBPACK_IMPORTED_MODULE_4__["RaidTileComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ],
                providers: [
                    _services_wcl_service__WEBPACK_IMPORTED_MODULE_7__["WclService"],
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
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/layout/layout.component */ "0MCZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'roster-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "UBWX":
/*!************************************************!*\
  !*** ./src/app/shared/services/wcl.service.ts ***!
  \************************************************/
/*! exports provided: WclService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WclService", function() { return WclService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WclService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    test() {
    }
    oauthToken() {
        const url = 'https://www.warcraftlogs.com/oauth/token';
        this.httpClient.post(url, {
            auth: {}
        }, {
            params: {
                grant_type: 'client_credentials',
            }
        }).subscribe((data) => {
            console.log(data);
        });
    }
}
WclService.ɵfac = function WclService_Factory(t) { return new (t || WclService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WclService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WclService, factory: WclService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WclService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("character", character_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("legendary", character_r1.level === 40)("epic", character_r1.level >= 35 && character_r1.level < 40)("rare", character_r1.level > 25 && character_r1.level < 35)("uncommon", character_r1.level === 25)("common", character_r1.level < 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", character_r1.level, "]");
} }
class PlayerTileComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlayerTileComponent.ɵfac = function PlayerTileComponent_Factory(t) { return new (t || PlayerTileComponent)(); };
PlayerTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerTileComponent, selectors: [["app-player-tile"]], inputs: { player: "player" }, decls: 4, vars: 2, consts: [[4, "ngFor", "ngForOf"], [3, "character"], [1, "level"]], template: function PlayerTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerTileComponent_li_3_Template, 4, 12, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.player.name, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player.characters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _character_tile_character_tile_component__WEBPACK_IMPORTED_MODULE_2__["CharacterTileComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\nul[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 1em;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0 0 1em;\n  color: #72767D;\n}\n\nli[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #45494F;\n  color: #72767D;\n  padding-right: 1em;\n}\n\napp-character-tile[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.level[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-shadow: black 0 0 0.5em;\n}\n\n.level.common[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.level.uncommon[_ngcontent-%COMP%] {\n  color: #1eff00;\n}\n\n.level.rare[_ngcontent-%COMP%] {\n  color: #0070dd;\n}\n\n.level.epic[_ngcontent-%COMP%] {\n  color: #a335ee;\n}\n\n.level.legendary[_ngcontent-%COMP%] {\n  color: #ff8000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGF5ZXItdGlsZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FBREY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNDTmE7QURPZjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJDZEs7RURlTCxjQ2JhO0VEY2Isa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QUFJRjs7QUFIRTtFQUFXLFdDaEJHO0FEc0JoQjs7QUFMRTtFQUFhLGNDaEJHO0FEd0JsQjs7QUFQRTtFQUFTLGNDaEJHO0FEMEJkOztBQVRFO0VBQVMsY0NoQkc7QUQ0QmQ7O0FBWEU7RUFBYyxjQ2hCRztBRDhCbkIiLCJmaWxlIjoicGxheWVyLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29sb3JzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxudWwge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICBncmlkLWdhcDogMWVtO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5oNCB7XHJcbiAgbWFyZ2luOiAwIDAgMWVtO1xyXG4gIGNvbG9yOiAkc2lsdmVyLXN0ZWVsO1xyXG59XHJcbmxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQ6ICRtYWtvO1xyXG4gIGNvbG9yOiAkc2lsdmVyLXN0ZWVsO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufVxyXG5hcHAtY2hhcmFjdGVyLXRpbGUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubGV2ZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMSkgMCAwIC41ZW07XHJcbiAgJi5jb21tb24geyBjb2xvcjogJHJhcml0eS1jb21tb247IH1cclxuICAmLnVuY29tbW9uIHsgY29sb3I6ICRyYXJpdHktdW5jb21tb247IH1cclxuICAmLnJhcmUgeyBjb2xvcjogJHJhcml0eS1yYXJlOyB9XHJcbiAgJi5lcGljIHsgY29sb3I6ICRyYXJpdHktZXBpYzsgfVxyXG4gICYubGVnZW5kYXJ5IHsgY29sb3I6ICRyYXJpdHktbGVnZW5kYXJ5OyB9XHJcbn1cclxuIiwiLy8gQ29sb3IgUGFsZXR0ZTpcclxuLy8gUHJpbWFyeSBjb2xvciwgcmVwcmVzZW50aW5nIHRoZSBBbGxpYW5jZSBmYWN0aW9uLlxyXG4kYWxsaWFuY2UtYmx1ZTogIzAwMzNDQztcclxuLy8gQWNjZW50IGNvbG9yLCBoaWdobGlnaHRpbmcgYnV0dG9ucywgaWNvbnMsIGFuZCBrZXkgaW5mb3JtYXRpb24uXHJcbiRyZWdhbC1nb2xkOiAjZjdiODAxO1xyXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBjb250ZW50IGFyZWFzLCBwcm92aWRpbmcgY29udHJhc3QuXHJcbiRkZWVwLXNwYWNlOiAjMjgyRDMzO1xyXG4kbWFrbzogIzQ1NDk0RjtcclxuLy8gU2Vjb25kYXJ5IHRleHQgYW5kIHN1YnRsZSBVSSBlbGVtZW50cywgb2ZmZXJpbmcgcmVhZGFiaWxpdHkgd2l0aG91dCBvdmVycG93ZXJpbmcuXHJcbiRzaWx2ZXItc3RlZWw6ICM3Mjc2N0Q7XHJcbi8vIENhbGwgdG8gYWN0aW9uIGJ1dHRvbnMgYW5kIGNyaXRpY2FsIGFsZXJ0cywgZHJhd2luZyBhdHRlbnRpb24uXHJcbiR2aWN0b3J5LXJlZDogI0M0MUYzQjtcclxuLy8gVXNlZCBzcGFyaW5nbHkgZm9yIHN1Y2Nlc3MgbWVzc2FnZXMgb3IgcHJvZ3Jlc3MgYmFycy5cclxuJGVsd3lubi1mb3Jlc3QtZ3JlZW46ICMxQTQ3MkE7XHJcblxyXG4kcmFyaXR5LWNvbW1vbjogI2ZmZjtcclxuJHJhcml0eS11bmNvbW1vbjogIzFlZmYwMDtcclxuJHJhcml0eS1yYXJlOiAjMDA3MGRkO1xyXG4kcmFyaXR5LWVwaWM6ICNhMzM1ZWU7XHJcbiRyYXJpdHktbGVnZW5kYXJ5OiAjZmY4MDAwO1xyXG5cclxuJGNsYXNzY29sb3JzOiAoXHJcbiAgXCJ3YXJyaW9yXCI6ICNjNzljNmUsXHJcbiAgXCJwYWxhZGluXCI6ICNmNThjYmEsXHJcbiAgXCJodW50ZXJcIjogI2FiZDQ3MyxcclxuICBcInJvZ3VlXCI6ICNmZmY1NjksXHJcbiAgXCJwcmllc3RcIjogI2ZmZmZmZixcclxuICBcImRlYXRoa25pZ2h0XCI6ICNjNDFmM2IsXHJcbiAgXCJzaGFtYW5cIjogIzAwNzBkZSxcclxuICBcIm1hZ2VcIjogIzQwYzdlYixcclxuICBcIndhcmxvY2tcIjogIzg3ODdlZCxcclxuICBcIm1vbmtcIjogIzAwZmY5NixcclxuICBcImRydWlkXCI6ICNmZjdkMGEsXHJcbiAgXCJkZW1vbmh1bnRlclwiOiAjYTMzMGM5LFxyXG4pO1xyXG5cclxuIl19 */"] });
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
    { path: '', loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~composition-composition-module~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule) },
    { path: 'composition', loadChildren: () => Promise.all(/*! import() | composition-composition-module */[__webpack_require__.e("default~composition-composition-module~home-home-module"), __webpack_require__.e("default~composition-composition-module~players-players-module"), __webpack_require__.e("composition-composition-module")]).then(__webpack_require__.bind(null, /*! ./composition/composition.module */ "xhUX")).then(m => m.CompositionModule) },
    { path: 'players', loadChildren: () => Promise.all(/*! import() | players-players-module */[__webpack_require__.e("default~composition-composition-module~players-players-module"), __webpack_require__.e("players-players-module")]).then(__webpack_require__.bind(null, /*! ./players/players.module */ "SDng")).then(m => m.PlayersModule) },
    { path: 'calendar', loadChildren: () => __webpack_require__.e(/*! import() | calendar-calendar-module */ "calendar-calendar-module").then(__webpack_require__.bind(null, /*! ./calendar/calendar.module */ "O51e")).then(m => m.CalendarModule) },
    { path: 'about-us', loadChildren: () => __webpack_require__.e(/*! import() | about-us-about-us-module */ "about-us-about-us-module").then(__webpack_require__.bind(null, /*! ./about-us/about-us.module */ "00wH")).then(m => m.AboutUsModule) },
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