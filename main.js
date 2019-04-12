(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/pug-loader/index.js!./src/app/app.component.pug":
/*!*************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/app.component.pug ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"form\"\u003E\u003Ch1 class=\"header\"\u003E{{ header }}\u003C\u002Fh1\u003E\u003Crc-search\u003E\u003C\u002Frc-search\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/components/search/result/result.component.pug":
/*!*****************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/components/search/result/result.component.pug ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp [innerHTML]=\"location?.name | marker\"\u003E\u003C\u002Fp\u003E\u003Csmall [innerHTML]=\"generateLocationData() | marker\"\u003E\u003C\u002Fsmall\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/components/search/search.component.pug":
/*!**********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/components/search/search.component.pug ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Clabel class=\"label\" for=\"search\" id=\"search-label\"\u003EPick-up Location\u003C\u002Flabel\u003E\u003Cdiv class=\"input-wrapper\"\u003E\u003Cinput type=\"text\" placeholder=\"{{ placeholder }}\" id=\"search\" aria-labelledby=\"search-label\" autocomplete=\"off\" (input)=\"onInput()\" [(ngModel)]=\"inputValue\"\u003E\u003Crc-spinner *ngIf=\"fetchingData\"\u003E\u003C\u002Frc-spinner\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"results\" *ngIf=\"inputValue.length &gt; 1 &amp;&amp; data?.results.docs\"\u003E\u003Cng-template *ngIf=\"data?.results.numFound; then content else empty\"\u003E\u003C\u002Fng-template\u003E\u003Cng-template #content\u003E\u003Crc-result *ngFor=\"let doc of data.results.docs\" [doc]=\"doc\"\u003E\u003C\u002Frc-result\u003E\u003C\u002Fng-template\u003E\u003Cng-template #empty\u003E\u003Cdiv class=\"empty\"\u003E\u003Cem\u003E{{ data?.results.docs[0].name }}\u003C\u002Fem\u003E\u003C\u002Fdiv\u003E\u003C\u002Fng-template\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.pug":
/*!***********************************!*\
  !*** ./src/app/app.component.pug ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/app.component.pug */ "./node_modules/pug-loader/index.js!./src/app/app.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Ubuntu:400,700\");\n:host {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-color: #0b76c5; }\n:host .form {\n    width: 475px;\n    padding: 18px;\n    border-radius: 4px;\n    background-color: #F3CE56; }\n:host .form .header {\n      margin-bottom: 10px;\n      color: #444;\n      font-family: Ubuntu, sans-serif; }\n@media (max-width: 575px) {\n  :host .form {\n    width: 100%;\n    height: 100%;\n    border-radius: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGRldlxccmVudGFsLWNhcnMvc3JjXFxhc3NldHNcXHNhc3NcXF9pbml0LnNhc3MiLCJzcmMvYXBwL0M6XFxkZXZcXHJlbnRhbC1jYXJzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQVk7QUFDWixxRUFBWTtBQ0NYO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJETmtCLEVBQUE7QUNEbkI7SUFVRyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkRYa0IsRUFBQTtBQ0ZyQjtNQWdCSyxtQkFBbUI7TUFDbkIsV0RkYTtNQ2ViLCtCQUErQixFQUFBO0FBRXJDO0VBRUc7SUFHRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQixFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVVidW50dTo0MDAsNzAwJyk7XG5cbiRjb2xvci1tYWluOiAjMGI3NmM1O1xuJGNvbG9yLWFjY2VudDogI0YzQ0U1NjtcbiRjb2xvci1oZWFkZXI6ICM0NDQ7XG4kY29sb3Itc21hbGw6ICM4MDgwODA7XG4kY29sb3ItaG92ZXI6ICNkZmY2ZmY7XG4iLCJAaW1wb3J0IFwiLi4vYXNzZXRzL3Nhc3MvaW5pdFwiO1xuXG4gOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1tYWluO1xuXG4gIC5mb3JtIHtcbiAgICB3aWR0aDogNDc1cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFjY2VudDtcblxuICAgIC5oZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAkY29sb3ItaGVhZGVyO1xuICAgICAgZm9udC1mYW1pbHk6IFVidW50dSwgc2Fucy1zZXJpZjsgfSB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG5cbiAgIDpob3N0IHtcblxuICAgIC5mb3JtIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDsgfSB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.header = "Let’s find your ideal car";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "rc-root",
            template: __webpack_require__(/*! ./app.component.pug */ "./src/app/app.component.pug"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_search_result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/result/result.component */ "./src/app/components/search/result/result.component.ts");
/* harmony import */ var _components_search_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/spinner/spinner.component */ "./src/app/components/search/spinner/spinner.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _pipes_marker_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/marker.pipe */ "./src/app/pipes/marker.pipe.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _components_search_result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], _components_search_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _pipes_marker_pipe__WEBPACK_IMPORTED_MODULE_10__["MarkerPipe"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/search/result/result.component.pug":
/*!***************************************************************!*\
  !*** ./src/app/components/search/result/result.component.pug ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/components/search/result/result.component.pug */ "./node_modules/pug-loader/index.js!./src/app/components/search/result/result.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/components/search/result/result.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/components/search/result/result.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Ubuntu:400,700\");\n:host {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 51px;\n  padding: 0 10px;\n  cursor: pointer; }\n:host:hover {\n    background-color: #dff6ff; }\n:host:not(:last-child) {\n    border-bottom: 1px solid #eaeaea; }\n:host small {\n    color: #808080; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvcmVzdWx0L0M6XFxkZXZcXHJlbnRhbC1jYXJzL3NyY1xcYXNzZXRzXFxzYXNzXFxfaW5pdC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9yZXN1bHQvQzpcXGRldlxccmVudGFsLWNhcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlYXJjaFxccmVzdWx0XFxyZXN1bHQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQVk7QUFDWixxRUFBWTtBQ0NYO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlLEVBQUE7QUFOaEI7SUFTRyx5QkRKaUIsRUFBQTtBQ0xwQjtJQVlHLGdDQUFnQyxFQUFBO0FBWm5DO0lBZUcsY0RYaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVVidW50dTo0MDAsNzAwJyk7XG5cbiRjb2xvci1tYWluOiAjMGI3NmM1O1xuJGNvbG9yLWFjY2VudDogI0YzQ0U1NjtcbiRjb2xvci1oZWFkZXI6ICM0NDQ7XG4kY29sb3Itc21hbGw6ICM4MDgwODA7XG4kY29sb3ItaG92ZXI6ICNkZmY2ZmY7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MvaW5pdFwiO1xuXG4gOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MXB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaG92ZXI7IH1cblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhOyB9XG5cbiAgc21hbGwge1xuICAgIGNvbG9yOiAkY29sb3Itc21hbGw7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/search/result/result.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/search/result/result.component.ts ***!
  \**************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.generateLocationData = function () {
        var output = "";
        this.location.city ? (output += this.location.city + ", ") : null;
        this.location.region ? (output += this.location.region + ", ") : null;
        this.location.country ? (output += "" + this.location.country) : null;
        return output;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("doc"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultComponent.prototype, "location", void 0);
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "rc-result",
            template: __webpack_require__(/*! ./result.component.pug */ "./src/app/components/search/result/result.component.pug"),
            styles: [__webpack_require__(/*! ./result.component.sass */ "./src/app/components/search/result/result.component.sass")]
        })
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.pug":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.pug ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/components/search/search.component.pug */ "./node_modules/pug-loader/index.js!./src/app/components/search/search.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/components/search/search.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n  :host .label {\n    align-self: flex-start;\n    font-size: 14px;\n    line-height: 30px; }\n  :host .input-wrapper {\n    position: relative;\n    display: flex; }\n  :host .input-wrapper #search {\n      flex-basis: 100%;\n      height: 52px;\n      padding: 16px 10px;\n      border: 1px solid #a9a9a9;\n      font-family: Arial, sans-serif;\n      font-size: 16px; }\n  :host .input-wrapper #search::-ms-clear {\n        width: 0;\n        height: 0; }\n  :host .results {\n    position: absolute;\n    top: 100%;\n    width: 100%;\n    border-color: 1px solid #e6e6e6;\n    background-color: white;\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4); }\n  :host .results .empty {\n      display: flex;\n      align-items: center;\n      height: 40px;\n      padding: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvQzpcXGRldlxccmVudGFsLWNhcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUh2QjtJQU1HLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFScEI7SUFXRyxrQkFBa0I7SUFDbEIsYUFBYSxFQUFBO0VBWmhCO01BZUssZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLDhCQUE4QjtNQUM5QixlQUFlLEVBQUE7RUFwQnBCO1FBdUJPLFFBQVE7UUFDUixTQUFTLEVBQUE7RUF4QmhCO0lBMkJHLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsd0NBQXFDLEVBQUE7RUFoQ3hDO01BbUNLLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAubGFiZWwge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4OyB9XG5cbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgI3NlYXJjaCB7XG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgcGFkZGluZzogMTZweCAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgJjo6LW1zLWNsZWFyIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDsgfSB9IH1cblxuICAucmVzdWx0cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sb3I6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuNCk7XG5cbiAgICAuZW1wdHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7IH0gfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(dataService) {
        this.dataService = dataService;
        this.fetchingData = false;
        this.placeholder = "city, airport, station, region, district…";
        this.inputValue = "";
        this.quantity = 6;
        this.cache = {};
    }
    SearchComponent.prototype.processData = function (data, inputValue) {
        this.data = data;
        this.data.results.numFound > 0 ? (this.dataService.toBeMarked = this.inputValue) : (this.dataService.toBeMarked = null);
        if (inputValue) {
            this.cache[inputValue] = data;
        }
    };
    SearchComponent.prototype.onInput = function () {
        var _this = this;
        clearTimeout(this.debouncer);
        if (this.inputValue.length > 1) {
            if (this.cache[this.inputValue]) {
                this.processData(this.cache[this.inputValue]);
                return;
            }
            this.debouncer = setTimeout(function () {
                _this.fetchingData = true;
                _this.dataService.getResults(_this.quantity, _this.inputValue).subscribe(function (response) {
                    _this.processData(response, _this.inputValue);
                    _this.fetchingData = false;
                });
            }, 500);
        }
        else {
            this.data = null;
        }
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "rc-search",
            template: __webpack_require__(/*! ./search.component.pug */ "./src/app/components/search/search.component.pug"),
            styles: [__webpack_require__(/*! ./search.component.sass */ "./src/app/components/search/search.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/search/spinner/spinner.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/components/search/spinner/spinner.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Ubuntu:400,700\");\n:host {\n  position: absolute;\n  right: 10px;\n  top: 11px;\n  display: block; }\n:host .spinner {\n    width: 30px;\n    height: 30px;\n    border: 3px solid #0b76c5;\n    border-color: #0b76c5 transparent #0b76c5 transparent;\n    border-radius: 50%;\n    -webkit-animation: spin .5s linear infinite;\n            animation: spin .5s linear infinite; }\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc3Bpbm5lci9DOlxcZGV2XFxyZW50YWwtY2Fycy9zcmNcXGFzc2V0c1xcc2Fzc1xcX2luaXQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc3Bpbm5lci9DOlxcZGV2XFxyZW50YWwtY2Fycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdFQUFZO0FBQ1oscUVBQVk7QUNDWDtFQUNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGNBQWMsRUFBQTtBQUpmO0lBT0csV0FBVztJQUNYLFlBQVk7SUFDWix5QkRSZ0I7SUNTaEIscURBQTZEO0lBQzdELGtCQUFrQjtJQUNsQiwyQ0FBbUM7WUFBbkMsbUNBQW1DLEVBQUE7QUFHdkM7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBO0FBTDdCO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VWJ1bnR1OjQwMCw3MDAnKTtcblxuJGNvbG9yLW1haW46ICMwYjc2YzU7XG4kY29sb3ItYWNjZW50OiAjRjNDRTU2O1xuJGNvbG9yLWhlYWRlcjogIzQ0NDtcbiRjb2xvci1zbWFsbDogIzgwODA4MDtcbiRjb2xvci1ob3ZlcjogI2RmZjZmZjtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9pbml0XCI7XG5cbiA6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLnNwaW5uZXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkY29sb3ItbWFpbjtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1tYWluIHRyYW5zcGFyZW50ICRjb2xvci1tYWluIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IHNwaW4gLjVzIGxpbmVhciBpbmZpbml0ZTsgfSB9XG5cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/search/spinner/spinner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/search/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "rc-spinner",
            template: "\n    <div class=\"spinner\"></div>\n  ",
            styles: [__webpack_require__(/*! ./spinner.component.sass */ "./src/app/components/search/spinner/spinner.component.sass")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/pipes/marker.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/marker.pipe.ts ***!
  \**************************************/
/*! exports provided: MarkerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerPipe", function() { return MarkerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var MarkerPipe = /** @class */ (function () {
    function MarkerPipe(domSanitizer, dataService) {
        this.domSanitizer = domSanitizer;
        this.dataService = dataService;
    }
    MarkerPipe.prototype.transform = function (value) {
        if (!this.dataService.toBeMarked)
            return value;
        return this.domSanitizer.bypassSecurityTrustHtml(this.mark(value, this.dataService.toBeMarked));
    };
    MarkerPipe.prototype.mark = function (value, query) {
        var regExp = new RegExp("(" + query + ")", "ig");
        var marked = "<strong style=\"color: black\">$1</strong>";
        return value.replace(regExp, marked);
    };
    MarkerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "marker"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], MarkerPipe);
    return MarkerPipe;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseURL = "https://www.rentalcars.com";
    }
    DataService.prototype.getResults = function (quantity, query) {
        var url = this.baseURL + "/FTSAutocomplete.do?solrIndex=fts_en&solrRows=" + quantity + "&solrTerm=" + query;
        return this.http.get(url);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\rental-cars\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map