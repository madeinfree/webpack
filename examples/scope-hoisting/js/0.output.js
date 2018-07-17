webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/*!*****************************!*\
  !*** ./node_modules/cjs.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: c */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// module cjs (commonjs)
exports.c = "e";


/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./lazy.js + 2 modules ***!
  \*****************************/
/*! exports provided: d, c, x, y */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./example.js (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var d_namespaceObject = {};
__webpack_require__.d(d_namespaceObject, "a", function() { return a; });

// EXTERNAL MODULE: ./node_modules/cjs.js
var cjs = __webpack_require__(2);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ./node_modules/shared.js + 1 modules
var shared = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/c.js
// module c


var c = String.fromCharCode(cjs["c"].charCodeAt(0) - 2);



// CONCATENATED MODULE: ./node_modules/d.js
// module d
var a = "d";

// CONCATENATED MODULE: ./lazy.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return c; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "x", function() { return shared["a" /* x */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "y", function() { return shared["b" /* y */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return d_namespaceObject; });





/***/ })
]);