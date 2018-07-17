webpackJsonp([2,0],[
/* 0 */,
/* 1 */,
/* 2 */
/*!******************!*\
  !*** ./bPage.js ***!
  \******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function() {
	return "This is page B.";
};

/***/ }),
/* 3 */,
/* 4 */
/*!*******************!*\
  !*** ./bEntry.js ***!
  \*******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Just show the page "b"
var render = __webpack_require__(/*! ./render */ 0);
render(__webpack_require__(/*! ./bPage */ 2));

/***/ })
],[4]);