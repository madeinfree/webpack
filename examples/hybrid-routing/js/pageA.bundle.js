webpackJsonp([3,1],[
/* 0 */,
/* 1 */
/*!******************!*\
  !*** ./aPage.js ***!
  \******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function() {
	return "This is page A.";
};

/***/ }),
/* 2 */,
/* 3 */
/*!*******************!*\
  !*** ./aEntry.js ***!
  \*******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Just show the page "a"
var render = __webpack_require__(/*! ./render */ 0);
render(__webpack_require__(/*! ./aPage */ 1));

/***/ })
],[3]);