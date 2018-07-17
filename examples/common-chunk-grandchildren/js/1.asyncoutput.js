webpackJsonp([1],{

/***/ 3:
/*!******************!*\
  !*** ./pageB.js ***!
  \******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
	console.log("Page B");
	Promise.all/* require.ensure */([__webpack_require__.e(0), __webpack_require__.e(3)]).then((()=>{
		const page = __webpack_require__(/*! ./pageC */ 5);
		page();
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};


/***/ })

});