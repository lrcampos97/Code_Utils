(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_text", function() { return Text; });
/* harmony import */ var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-d0403a2f.js */ "./node_modules/@ionic/core/dist/esm-es5/chunk-d0403a2f.js");
/* harmony import */ var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-1074393c.js */ "./node_modules/@ionic/core/dist/esm-es5/chunk-1074393c.js");
/* harmony import */ var _chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-353a032e.js */ "./node_modules/@ionic/core/dist/esm-es5/chunk-353a032e.js");



/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
var Text = /** @class */ (function () {
    function Text(hostRef) {
        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Text.prototype.render = function () {
        var _a;
        var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign({}, Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_a = {}, _a[mode] = true, _a)) }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(Text, "style", {
        get: function () { return ":host(.ion-color){color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    return Text;
}());



/***/ })

}]);
//# sourceMappingURL=82.js.map