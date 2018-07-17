webpackJsonp([1],{

/***/ 4:
/*!******************!*\
  !*** ./pageB.js ***!
  \******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
	console.log("Page B");
	__webpack_require__.e/* require.ensure */(0).then((()=>{
		const page = __webpack_require__(/*! ./pageC */ 5);
		page();
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};


/***/ })

});