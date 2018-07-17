webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!******************!*\
  !*** ./chunk.js ***!
  \******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./style2.css */ 6);


/***/ }),
/* 6 */
/*!********************!*\
  !*** ./style2.css ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader!./style2.css */ 7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style2.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style2.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/*!******************************************************!*\
  !*** (webpack)/node_modules/css-loader!./style2.css ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 3)(undefined);
// imports


// module
exports.push([module.i, ".xyz {\n\tbackground: url(" + __webpack_require__(/*! ./image2.png */ 8) + ");\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/*!********************!*\
  !*** ./image2.png ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ce21cbdd9b894e6af794813eb3fdaf60.png";

/***/ })
]);