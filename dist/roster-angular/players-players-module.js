(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["players-players-module"],{

/***/ "99qh":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_players_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/players.data */ "Fn0B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/player-tile/player-tile.component */ "YoaS");





function PlayersComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r1);
} }
class PlayersComponent {
    constructor() {
        this.players = _data_players_data__WEBPACK_IMPORTED_MODULE_1__["players"].sort((player1, player2) => {
            var _a, _b;
            const p1MaxCharacters = (_a = player1.characters) === null || _a === void 0 ? void 0 : _a.filter(character => character.level === 40).length;
            const p2MaxCharacters = (_b = player2.characters) === null || _b === void 0 ? void 0 : _b.filter(character => character.level === 40).length;
            if (typeof p1MaxCharacters === 'undefined' || typeof p2MaxCharacters === 'undefined') {
                return 1;
            }
            return p1MaxCharacters === p2MaxCharacters
                ? player1.name > player2.name ? 1 : -1
                : p1MaxCharacters > p2MaxCharacters ? -1 : 1;
        }).map((player) => {
            var _a;
            return (Object.assign(Object.assign({}, player), { characters: (_a = player.characters) === null || _a === void 0 ? void 0 : _a.sort((character1, character2) => character1.level > character2.level ? -1 : 1) }));
        });
    }
    get charactersCount() {
        return _data_players_data__WEBPACK_IMPORTED_MODULE_1__["players"].reduce((acc, cur) => cur.characters ? acc + cur.characters.length : acc, 0);
    }
    get charactersMaxLevelCount() {
        return _data_players_data__WEBPACK_IMPORTED_MODULE_1__["players"].reduce((acc, cur) => cur.characters ? acc + cur.characters.filter(c => c.level === 40).length : acc, 0);
    }
    ngOnInit() {
    }
}
PlayersComponent.ɵfac = function PlayersComponent_Factory(t) { return new (t || PlayersComponent)(); };
PlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayersComponent, selectors: [["app-players"]], decls: 10, vars: 4, consts: [[1, "totals"], [1, "players-list"], [4, "ngFor", "ngForOf"], [3, "player"]], template: function PlayersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlayersComponent_li_9_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total players: ", ctx.players.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total characters: ", ctx.charactersCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total max level characters: ", ctx.charactersMaxLevelCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_3__["PlayerTileComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.totals[_ngcontent-%COMP%] {\n  background: #282D33;\n  padding: 10px;\n  margin: 0 0 2em;\n  background: rgba(40, 45, 51, 0.9);\n  border-radius: 0.5em;\n  box-shadow: 0 0.25em 2em rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(1em);\n          backdrop-filter: blur(1em);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.totals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  color: #f7b801;\n  margin: 0;\n  padding: 0;\n}\n\n.totals[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 2em;\n  font-weight: 600;\n}\n\n.totals[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n.players-list[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: rgba(40, 45, 51, 0.9);\n  border-radius: 0.5em;\n  box-shadow: 0 0.25em 2em rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(1em);\n          backdrop-filter: blur(1em);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.players-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.players-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBsYXllcnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUFERjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsMENBQUE7QUFBRjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NkUztFRGVULFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQUk7RUFDRSxTQUFBO0FBRU47O0FBRUE7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0FBRUoiLCJmaWxlIjoicGxheWVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udG90YWxzIHtcclxuICBiYWNrZ3JvdW5kOiAkZGVlcC1zcGFjZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMCAwIDJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRkZWVwLXNwYWNlLCAuOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICBib3gtc2hhZG93OiAwIC4yNWVtIDJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFlbSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICRyZWdhbC1nb2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucGxheWVycy1saXN0IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGRlZXAtc3BhY2UsIC45KTtcclxuICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG4gIGJveC1zaGFkb3c6IDAgLjI1ZW0gMmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMWVtKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiAwIDAgMmVtO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvciBQYWxldHRlOlxyXG4vLyBQcmltYXJ5IGNvbG9yLCByZXByZXNlbnRpbmcgdGhlIEFsbGlhbmNlIGZhY3Rpb24uXHJcbiRhbGxpYW5jZS1ibHVlOiAjMDAzM0NDO1xyXG4vLyBBY2NlbnQgY29sb3IsIGhpZ2hsaWdodGluZyBidXR0b25zLCBpY29ucywgYW5kIGtleSBpbmZvcm1hdGlvbi5cclxuJHJlZ2FsLWdvbGQ6ICNmN2I4MDE7XHJcbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGNvbnRlbnQgYXJlYXMsIHByb3ZpZGluZyBjb250cmFzdC5cclxuJGRlZXAtc3BhY2U6ICMyODJEMzM7XHJcbiRtYWtvOiAjNDU0OTRGO1xyXG4vLyBTZWNvbmRhcnkgdGV4dCBhbmQgc3VidGxlIFVJIGVsZW1lbnRzLCBvZmZlcmluZyByZWFkYWJpbGl0eSB3aXRob3V0IG92ZXJwb3dlcmluZy5cclxuJHNpbHZlci1zdGVlbDogIzcyNzY3RDtcclxuLy8gQ2FsbCB0byBhY3Rpb24gYnV0dG9ucyBhbmQgY3JpdGljYWwgYWxlcnRzLCBkcmF3aW5nIGF0dGVudGlvbi5cclxuJHZpY3RvcnktcmVkOiAjQzQxRjNCO1xyXG4vLyBVc2VkIHNwYXJpbmdseSBmb3Igc3VjY2VzcyBtZXNzYWdlcyBvciBwcm9ncmVzcyBiYXJzLlxyXG4kZWx3eW5uLWZvcmVzdC1ncmVlbjogIzFBNDcyQTtcclxuXHJcbiRyYXJpdHktY29tbW9uOiAjZmZmO1xyXG4kcmFyaXR5LXVuY29tbW9uOiAjMWVmZjAwO1xyXG4kcmFyaXR5LXJhcmU6ICMwMDcwZGQ7XHJcbiRyYXJpdHktZXBpYzogI2EzMzVlZTtcclxuJHJhcml0eS1sZWdlbmRhcnk6ICNmZjgwMDA7XHJcblxyXG4kY2xhc3Njb2xvcnM6IChcclxuICBcIndhcnJpb3JcIjogI2M3OWM2ZSxcclxuICBcInBhbGFkaW5cIjogI2Y1OGNiYSxcclxuICBcImh1bnRlclwiOiAjYWJkNDczLFxyXG4gIFwicm9ndWVcIjogI2ZmZjU2OSxcclxuICBcInByaWVzdFwiOiAjZmZmZmZmLFxyXG4gIFwiZGVhdGhrbmlnaHRcIjogI2M0MWYzYixcclxuICBcInNoYW1hblwiOiAjMDA3MGRlLFxyXG4gIFwibWFnZVwiOiAjNDBjN2ViLFxyXG4gIFwid2FybG9ja1wiOiAjODc4N2VkLFxyXG4gIFwibW9ua1wiOiAjMDBmZjk2LFxyXG4gIFwiZHJ1aWRcIjogI2ZmN2QwYSxcclxuICBcImRlbW9uaHVudGVyXCI6ICNhMzMwYzksXHJcbik7XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-players',
                templateUrl: './players.component.html',
                styleUrls: ['./players.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Gdl7":
/*!***************************************************!*\
  !*** ./src/app/players/players-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PlayersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersRoutingModule", function() { return PlayersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _players_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players.component */ "99qh");





const routes = [{ path: '', component: _players_component__WEBPACK_IMPORTED_MODULE_2__["PlayersComponent"] }];
class PlayersRoutingModule {
}
PlayersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlayersRoutingModule });
PlayersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlayersRoutingModule_Factory(t) { return new (t || PlayersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlayersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "SDng":
/*!*******************************************!*\
  !*** ./src/app/players/players.module.ts ***!
  \*******************************************/
/*! exports provided: PlayersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersModule", function() { return PlayersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _players_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players-routing.module */ "Gdl7");
/* harmony import */ var _players_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players.component */ "99qh");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");






class PlayersModule {
}
PlayersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlayersModule });
PlayersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlayersModule_Factory(t) { return new (t || PlayersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _players_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayersRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlayersModule, { declarations: [_players_component__WEBPACK_IMPORTED_MODULE_3__["PlayersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _players_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayersRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _players_component__WEBPACK_IMPORTED_MODULE_3__["PlayersComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _players_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayersRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=players-players-module.js.map