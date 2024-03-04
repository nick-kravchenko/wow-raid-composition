(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "7mpd":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CalendarComponent_li_2_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("empty", !day_r3)("odd", day_r3 && ctx_r2.isOddLockout(day_r3))("even", day_r3 && !ctx_r2.isOddLockout(day_r3))("today", day_r3 && ctx_r2.isToday(day_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 9, day_r3, "d"), " ");
} }
function CalendarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Thu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fri");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sun");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CalendarComponent_li_2_li_18_Template, 3, 12, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](month_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", month_r1.days);
} }
class CalendarComponent {
    constructor() {
        this.months = [];
        this.nullPointer = new Date(2023, 11, 30);
    }
    isOddLockout(date) {
        if (!date) {
            return false;
        }
        const diff = Math.round((date.getTime() - this.nullPointer.getTime()) / 1000 / 60 / 60 / 24);
        return (diff % 6) > 2;
    }
    isToday(date) {
        const today = new Date();
        return today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear();
    }
    ngOnInit() {
        var _a;
        for (let i = 1; i <= 12; i++) {
            const days = this.generateMonth(i);
            const monthTitle = ((_a = days.find(day => !!day)) === null || _a === void 0 ? void 0 : _a.toLocaleString('default', { month: 'long' })) || '';
            this.months.push({
                title: monthTitle,
                days,
            });
        }
    }
    generateMonth(month) {
        const [year] = new Date().toISOString().split('T')[0].split('-').map(c => +c);
        const firstDayOfTheMonth = new Date(year, month - 1, 1);
        let m = firstDayOfTheMonth.getDay() ? new Array(firstDayOfTheMonth.getDay() - 1).fill(null) : [];
        for (let i = 1; i <= 40; i++) {
            const nextDay = new Date(year, month - 1, i);
            if (!m[m.length - 1] || nextDay.getMonth() === m[m.length - 1].getMonth()) {
                m.push(nextDay);
            }
        }
        if (m.length % 7) {
            m = m.concat(new Array(7 - m.length % 7).fill(null));
        }
        return m;
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], decls: 3, vars: 1, consts: [[1, "calendar"], [1, "month-list"], ["class", "month-item", 4, "ngFor", "ngForOf"], [1, "month-item"], [1, "day-list"], [1, "day-item", "heading"], ["class", "day-item", 3, "empty", "odd", "even", "today", 4, "ngFor", "ngForOf"], [1, "day-item"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarComponent_li_2_Template, 19, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.months);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0 0 1em;\n  color: #C9B037;\n}\n\n.calendar[_ngcontent-%COMP%] {\n  background: #282D33;\n  border: 1px solid #45494F;\n  border-radius: 2px;\n  padding: 10px;\n  margin: 0 0 2em;\n  color: #72767D;\n  text-align: center;\n}\n\n.month-list[_ngcontent-%COMP%], .day-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.month-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1em;\n}\n\n.day-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.day-item[_ngcontent-%COMP%] {\n  padding: 0.25em 0.5em;\n  border: solid #72767D;\n  border-width: 0 1px 1px 0;\n  font-family: monospace;\n  color: #000;\n  font-size: 16px;\n}\n\n.day-item.empty[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.day-item.heading[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.day-item.odd[_ngcontent-%COMP%] {\n  background: #b6d7a8;\n}\n\n.day-item.even[_ngcontent-%COMP%] {\n  background: #a4c2f4;\n}\n\n.day-item.today[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 0.25em #C41F3B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBRUEseUJBQUE7RUFBMkIsV0FBQTtFQUNKLG9CQUFBO0VBQ3ZCLGlCQUFBO0VBQW1CLG9CQUFBO0FBQ3JCOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNDUFc7QURTYjs7QUFBQTtFQUNFLG1CQ1JXO0VEU1gseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0NWYTtFRFdiLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUFNRjs7QUFKQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFORTtFQUNFLGdCQUFBO0FBUUo7O0FBTkU7RUFDRSxpQkFBQTtBQVFKOztBQU5FO0VBQ0UsbUJBQUE7QUFRSjs7QUFORTtFQUNFLG1CQUFBO0FBUUo7O0FBTkU7RUFDRSxzQ0FBQTtBQVFKIiwiZmlsZSI6ImNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cclxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXHJcbn1cclxuaDQge1xyXG4gIG1hcmdpbjogMCAwIDFlbTtcclxuICBjb2xvcjogJHJlZ2FsLWdvbGQ7XHJcbn1cclxuLmNhbGVuZGFyIHtcclxuICBiYWNrZ3JvdW5kOiAkZGVlcC1zcGFjZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkbWFrbztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDAgMCAyZW07XHJcbiAgY29sb3I6ICRzaWx2ZXItc3RlZWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tb250aC1saXN0LCAuZGF5LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ubW9udGgtbGlzdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiAxZW07XHJcbn1cclxuLmRheS1saXN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbn1cclxuLmRheS1pdGVtIHtcclxuICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xyXG4gIGJvcmRlcjogc29saWQgJHNpbHZlci1zdGVlbDtcclxuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gICYuZW1wdHkge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICB9XHJcbiAgJi5oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgfVxyXG4gICYub2RkIHtcclxuICAgIGJhY2tncm91bmQ6ICNiNmQ3YTg7XHJcbiAgfVxyXG4gICYuZXZlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTRjMmY0O1xyXG4gIH1cclxuICAmLnRvZGF5IHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIC4yNWVtICR2aWN0b3J5LXJlZDtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3IgUGFsZXR0ZTpcclxuLy8gUHJpbWFyeSBjb2xvciwgcmVwcmVzZW50aW5nIHRoZSBBbGxpYW5jZSBmYWN0aW9uLlxyXG4kYWxsaWFuY2UtYmx1ZTogIzAwMzNDQztcclxuLy8gQWNjZW50IGNvbG9yLCBoaWdobGlnaHRpbmcgYnV0dG9ucywgaWNvbnMsIGFuZCBrZXkgaW5mb3JtYXRpb24uXHJcbiRyZWdhbC1nb2xkOiAjQzlCMDM3O1xyXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBjb250ZW50IGFyZWFzLCBwcm92aWRpbmcgY29udHJhc3QuXHJcbiRkZWVwLXNwYWNlOiAjMjgyRDMzO1xyXG4kbWFrbzogIzQ1NDk0RjtcclxuLy8gU2Vjb25kYXJ5IHRleHQgYW5kIHN1YnRsZSBVSSBlbGVtZW50cywgb2ZmZXJpbmcgcmVhZGFiaWxpdHkgd2l0aG91dCBvdmVycG93ZXJpbmcuXHJcbiRzaWx2ZXItc3RlZWw6ICM3Mjc2N0Q7XHJcbi8vIENhbGwgdG8gYWN0aW9uIGJ1dHRvbnMgYW5kIGNyaXRpY2FsIGFsZXJ0cywgZHJhd2luZyBhdHRlbnRpb24uXHJcbiR2aWN0b3J5LXJlZDogI0M0MUYzQjtcclxuLy8gVXNlZCBzcGFyaW5nbHkgZm9yIHN1Y2Nlc3MgbWVzc2FnZXMgb3IgcHJvZ3Jlc3MgYmFycy5cclxuJGVsd3lubi1mb3Jlc3QtZ3JlZW46ICMxQTQ3MkE7XHJcblxyXG4kcmFyaXR5LWNvbW1vbjogI2ZmZjtcclxuJHJhcml0eS11bmNvbW1vbjogIzFlZmYwMDtcclxuJHJhcml0eS1yYXJlOiAjMDA3MGRkO1xyXG4kcmFyaXR5LWVwaWM6ICNhMzM1ZWU7XHJcbiRyYXJpdHktbGVnZW5kYXJ5OiAjZmY4MDAwO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KIgb":
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function() { return CalendarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ "7mpd");





const routes = [{ path: '', component: _calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"] }];
class CalendarRoutingModule {
}
CalendarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarRoutingModule });
CalendarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarRoutingModule_Factory(t) { return new (t || CalendarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "O51e":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ "7mpd");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-routing.module */ "KIgb");





class CalendarModule {
}
CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarModule });
CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalendarRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarModule, { declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalendarRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalendarRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map