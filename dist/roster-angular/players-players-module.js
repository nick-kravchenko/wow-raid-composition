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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_player_tile_player_tile_component__WEBPACK_IMPORTED_MODULE_3__["PlayerTileComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.totals[_ngcontent-%COMP%] {\n  background: #282D33;\n  border: 1px solid #45494F;\n  border-radius: 2px;\n  padding: 10px;\n  margin: 0 0 2em;\n}\n\n.totals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  color: #C9B037;\n  margin: 0;\n  padding: 0;\n}\n\n.totals[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 2em;\n  font-weight: 600;\n}\n\n.totals[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n.players-list[_ngcontent-%COMP%] {\n  background: #282D33;\n  border: 1px solid #45494F;\n  border-radius: 2px;\n  padding: 10px;\n}\n\n.players-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.players-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBsYXllcnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUFERjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQUY7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNDWFM7RURZVCxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUFJO0VBQ0UsU0FBQTtBQUVOOztBQUVBO0VBQ0UsbUJDdEJXO0VEdUJYLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0FBRUoiLCJmaWxlIjoicGxheWVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udG90YWxzIHtcclxuICBiYWNrZ3JvdW5kOiAkZGVlcC1zcGFjZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkbWFrbztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDAgMCAyZW07XHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJHJlZ2FsLWdvbGQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wbGF5ZXJzLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6ICRkZWVwLXNwYWNlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRtYWtvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIGxpIHtcclxuICAgIG1hcmdpbjogMCAwIDJlbTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3IgUGFsZXR0ZTpcclxuLy8gUHJpbWFyeSBjb2xvciwgcmVwcmVzZW50aW5nIHRoZSBBbGxpYW5jZSBmYWN0aW9uLlxyXG4kYWxsaWFuY2UtYmx1ZTogIzAwMzNDQztcclxuLy8gQWNjZW50IGNvbG9yLCBoaWdobGlnaHRpbmcgYnV0dG9ucywgaWNvbnMsIGFuZCBrZXkgaW5mb3JtYXRpb24uXHJcbiRyZWdhbC1nb2xkOiAjQzlCMDM3O1xyXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBjb250ZW50IGFyZWFzLCBwcm92aWRpbmcgY29udHJhc3QuXHJcbiRkZWVwLXNwYWNlOiAjMjgyRDMzO1xyXG4kbWFrbzogIzQ1NDk0RjtcclxuLy8gU2Vjb25kYXJ5IHRleHQgYW5kIHN1YnRsZSBVSSBlbGVtZW50cywgb2ZmZXJpbmcgcmVhZGFiaWxpdHkgd2l0aG91dCBvdmVycG93ZXJpbmcuXHJcbiRzaWx2ZXItc3RlZWw6ICM3Mjc2N0Q7XHJcbi8vIENhbGwgdG8gYWN0aW9uIGJ1dHRvbnMgYW5kIGNyaXRpY2FsIGFsZXJ0cywgZHJhd2luZyBhdHRlbnRpb24uXHJcbiR2aWN0b3J5LXJlZDogI0M0MUYzQjtcclxuLy8gVXNlZCBzcGFyaW5nbHkgZm9yIHN1Y2Nlc3MgbWVzc2FnZXMgb3IgcHJvZ3Jlc3MgYmFycy5cclxuJGVsd3lubi1mb3Jlc3QtZ3JlZW46ICMxQTQ3MkE7XHJcblxyXG4kcmFyaXR5LWNvbW1vbjogI2ZmZjtcclxuJHJhcml0eS11bmNvbW1vbjogIzFlZmYwMDtcclxuJHJhcml0eS1yYXJlOiAjMDA3MGRkO1xyXG4kcmFyaXR5LWVwaWM6ICNhMzM1ZWU7XHJcbiRyYXJpdHktbGVnZW5kYXJ5OiAjZmY4MDAwO1xyXG5cclxuJGNsYXNzY29sb3JzOiAoXHJcbiAgXCJ3YXJyaW9yXCI6ICNjNzljNmUsXHJcbiAgXCJwYWxhZGluXCI6ICNmNThjYmEsXHJcbiAgXCJodW50ZXJcIjogI2FiZDQ3MyxcclxuICBcInJvZ3VlXCI6ICNmZmY1NjksXHJcbiAgXCJwcmllc3RcIjogI2ZmZmZmZixcclxuICBcImRlYXRoa25pZ2h0XCI6ICNjNDFmM2IsXHJcbiAgXCJzaGFtYW5cIjogIzAwNzBkZSxcclxuICBcIm1hZ2VcIjogIzQwYzdlYixcclxuICBcIndhcmxvY2tcIjogIzg3ODdlZCxcclxuICBcIm1vbmtcIjogIzAwZmY5NixcclxuICBcImRydWlkXCI6ICNmZjdkMGEsXHJcbiAgXCJkZW1vbmh1bnRlclwiOiAjYTMzMGM5LFxyXG4pO1xyXG5cclxuIl19 */"] });
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