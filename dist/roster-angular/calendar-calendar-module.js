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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  -webkit-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0 0 1em;\n  color: #f7b801;\n}\n\n.calendar[_ngcontent-%COMP%] {\n  background: rgba(40, 45, 51, 0.9);\n  border-radius: 0.5em;\n  box-shadow: 0 0.25em 2em rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(1em);\n          backdrop-filter: blur(1em);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 10px;\n  margin: 0 0 2em;\n  color: #72767D;\n  text-align: center;\n}\n\n.month-list[_ngcontent-%COMP%], .day-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.month-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1em;\n}\n\n.day-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.day-item[_ngcontent-%COMP%] {\n  padding: 0.25em 0.5em;\n  border: solid #72767D;\n  border-width: 0 1px 1px 0;\n  font-family: monospace;\n  color: #000;\n  font-size: 16px;\n}\n\n.day-item.empty[_ngcontent-%COMP%] {\n  background: #ccc;\n}\n\n.day-item.heading[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.day-item.odd[_ngcontent-%COMP%] {\n  background: #b6d7a8;\n}\n\n.day-item.even[_ngcontent-%COMP%] {\n  background: #a4c2f4;\n}\n\n.day-item.today[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 0.25em #C41F3B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBRUEseUJBQUE7RUFBMkIsV0FBQTtFQUNKLG9CQUFBO0VBQ3ZCLGlCQUFBO0VBQW1CLG9CQUFBO0FBQ3JCOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNDUFc7QURTYjs7QUFBQTtFQUNFLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0NaYTtFRGFiLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUFNRjs7QUFKQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFORTtFQUNFLGdCQUFBO0FBUUo7O0FBTkU7RUFDRSxpQkFBQTtBQVFKOztBQU5FO0VBQ0UsbUJBQUE7QUFRSjs7QUFORTtFQUNFLG1CQUFBO0FBUUo7O0FBTkU7RUFDRSxzQ0FBQTtBQVFKIiwiZmlsZSI6ImNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cclxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXHJcbn1cclxuaDQge1xyXG4gIG1hcmdpbjogMCAwIDFlbTtcclxuICBjb2xvcjogJHJlZ2FsLWdvbGQ7XHJcbn1cclxuLmNhbGVuZGFyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRkZWVwLXNwYWNlLCAuOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICBib3gtc2hhZG93OiAwIC4yNWVtIDJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFlbSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAwIDAgMmVtO1xyXG4gIGNvbG9yOiAkc2lsdmVyLXN0ZWVsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubW9udGgtbGlzdCwgLmRheS1saXN0IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLm1vbnRoLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBncmlkLWdhcDogMWVtO1xyXG59XHJcbi5kYXktbGlzdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xyXG59XHJcbi5kYXktaXRlbSB7XHJcbiAgcGFkZGluZzogLjI1ZW0gLjVlbTtcclxuICBib3JkZXI6IHNvbGlkICRzaWx2ZXItc3RlZWw7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAmLmVtcHR5IHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgfVxyXG4gICYuaGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIH1cclxuICAmLm9kZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjZkN2E4O1xyXG4gIH1cclxuICAmLmV2ZW4ge1xyXG4gICAgYmFja2dyb3VuZDogI2E0YzJmNDtcclxuICB9XHJcbiAgJi50b2RheSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAuMjVlbSAkdmljdG9yeS1yZWQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvbG9yIFBhbGV0dGU6XHJcbi8vIFByaW1hcnkgY29sb3IsIHJlcHJlc2VudGluZyB0aGUgQWxsaWFuY2UgZmFjdGlvbi5cclxuJGFsbGlhbmNlLWJsdWU6ICMwMDMzQ0M7XHJcbi8vIEFjY2VudCBjb2xvciwgaGlnaGxpZ2h0aW5nIGJ1dHRvbnMsIGljb25zLCBhbmQga2V5IGluZm9ybWF0aW9uLlxyXG4kcmVnYWwtZ29sZDogI2Y3YjgwMTtcclxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgY29udGVudCBhcmVhcywgcHJvdmlkaW5nIGNvbnRyYXN0LlxyXG4kZGVlcC1zcGFjZTogIzI4MkQzMztcclxuJG1ha286ICM0NTQ5NEY7XHJcbi8vIFNlY29uZGFyeSB0ZXh0IGFuZCBzdWJ0bGUgVUkgZWxlbWVudHMsIG9mZmVyaW5nIHJlYWRhYmlsaXR5IHdpdGhvdXQgb3ZlcnBvd2VyaW5nLlxyXG4kc2lsdmVyLXN0ZWVsOiAjNzI3NjdEO1xyXG4vLyBDYWxsIHRvIGFjdGlvbiBidXR0b25zIGFuZCBjcml0aWNhbCBhbGVydHMsIGRyYXdpbmcgYXR0ZW50aW9uLlxyXG4kdmljdG9yeS1yZWQ6ICNDNDFGM0I7XHJcbi8vIFVzZWQgc3BhcmluZ2x5IGZvciBzdWNjZXNzIG1lc3NhZ2VzIG9yIHByb2dyZXNzIGJhcnMuXHJcbiRlbHd5bm4tZm9yZXN0LWdyZWVuOiAjMUE0NzJBO1xyXG5cclxuJHJhcml0eS1jb21tb246ICNmZmY7XHJcbiRyYXJpdHktdW5jb21tb246ICMxZWZmMDA7XHJcbiRyYXJpdHktcmFyZTogIzAwNzBkZDtcclxuJHJhcml0eS1lcGljOiAjYTMzNWVlO1xyXG4kcmFyaXR5LWxlZ2VuZGFyeTogI2ZmODAwMDtcclxuXHJcbiRjbGFzc2NvbG9yczogKFxyXG4gIFwid2FycmlvclwiOiAjYzc5YzZlLFxyXG4gIFwicGFsYWRpblwiOiAjZjU4Y2JhLFxyXG4gIFwiaHVudGVyXCI6ICNhYmQ0NzMsXHJcbiAgXCJyb2d1ZVwiOiAjZmZmNTY5LFxyXG4gIFwicHJpZXN0XCI6ICNmZmZmZmYsXHJcbiAgXCJkZWF0aGtuaWdodFwiOiAjYzQxZjNiLFxyXG4gIFwic2hhbWFuXCI6ICMwMDcwZGUsXHJcbiAgXCJtYWdlXCI6ICM0MGM3ZWIsXHJcbiAgXCJ3YXJsb2NrXCI6ICM4Nzg3ZWQsXHJcbiAgXCJtb25rXCI6ICMwMGZmOTYsXHJcbiAgXCJkcnVpZFwiOiAjZmY3ZDBhLFxyXG4gIFwiZGVtb25odW50ZXJcIjogI2EzMzBjOSxcclxuKTtcclxuXHJcbiJdfQ== */"] });
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