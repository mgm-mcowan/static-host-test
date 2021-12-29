"use strict";
(() => {
var exports = {};
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 8888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_shared_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2587);
/* harmony import */ var next_shared_logic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_shared_logic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _remotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5760);
/* harmony import */ var _remotes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_remotes__WEBPACK_IMPORTED_MODULE_2__);



const ErrorPage = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "500 - Error Loading Page"
    }));
};
const NotFoundPage = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "404 - Page Not Found"
    }));
};
const federatedCatchAll = (0,next_shared_logic__WEBPACK_IMPORTED_MODULE_1__.createFederatedCatchAll)(Object.keys(_remotes__WEBPACK_IMPORTED_MODULE_2__.remotes), ErrorPage, NotFoundPage);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (federatedCatchAll);


/***/ }),

/***/ 2587:
/***/ ((module) => {

module.exports = require("next-shared-logic");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [760], () => (__webpack_exec__(8888)));
module.exports = __webpack_exports__;

})();