/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./app/assets/styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/styles/styles.css":
/*!**************************************!*\
  !*** ./app/assets/styles/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?url=false!../../../node_modules/postcss-loader/src??ref--4-2!./styles.css */ \"./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./app/assets/styles/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./app/assets/styles/styles.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./app/assets/styles/styles.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src??ref--4-2!./app/assets/styles/styles.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\\n/**********************\\r\\n        colors\\r\\n**********************/\\n\\n/* #2B20AD\\r\\ndark \\r\\norange  #563000\\r\\n        #291700\\r\\nblue    #09053C\\r\\n        #03011C\\r\\n\\r\\n\\r\\nneed to define what will be the final colors\\r\\ntext , bg , an secondary-color \\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n*/\\n\\n/* #FFDFB5  */\\n\\n/*  #A9EEC5  */\\n\\n/*  #7CE3A5  */\\n\\n/*  #0AB34E  */\\n\\n/*  palette orange / bleu \\r\\ncomments = verte couleur additionnelle\\r\\n*/\\n\\n@define-mixin atSmall {\\r\\n  @media (min-width: 768px) {\\r\\n    @mixin-content;\\r\\n  }\\r\\n}\\n\\n@define-mixin atMedium {\\r\\n  @media (min-width: 990px) {\\r\\n    @mixin-content;\\r\\n  }\\r\\n}\\n\\n@define-mixin atLarge {\\r\\n  @media (min-width: 1010px) {\\r\\n    @mixin-content;\\r\\n  }\\r\\n}\\n\\n@define-mixin clearfix {\\r\\n  &::after {\\r\\n    content: \\\"\\\";\\r\\n    clear: both;\\r\\n    display: table;\\r\\n  }\\r\\n}\\n\\n* {\\r\\n  box-sizing: border-box;\\r\\n}\\n\\nhtml,\\r\\nbody {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'roboto', 'open-sans', sans-serif;\\r\\n  color: #09053C;\\r\\n  /*background-color: red;\\r\\n  $documentBackgroundColor;*/\\r\\n}\\n\\nimg {\\r\\n  height: auto;\\r\\n  max-width: 100%;\\r\\n}\\n\\na {\\r\\n  text-decoration: none;\\r\\n}\\n\\n.large-hero {\\r\\n  border-bottom: 10px solid #ccc;\\r\\n  position: relative;\\r\\n\\r\\n}\\n\\n.large-hero__image {\\r\\n    display: block;\\r\\n  }\\n\\n.large-hero__text-content {\\r\\n    padding-top: 88px;\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    -webkit-transform: translateY(-50%);\\r\\n            transform: translateY(-50%);\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n\\r\\n    @mixin atMedium {\\r\\n      padding-top: 60px;\\r\\n    }\\r\\n  }\\n\\n.large-hero__title {\\r\\n    font-weight: 300;\\r\\n    color: #FFF;\\r\\n    margin: 0;\\r\\n    font-size: 2.4rem;\\r\\n\\r\\n    @mixin atSmall {\\r\\n      font-size: 4.8rem;\\r\\n    }\\r\\n\\r\\n  }\\n\\n.large-hero__subtitle {\\r\\n    font-weight: 300;\\r\\n    color: #FFF;\\r\\n    font-size: 1.5rem;\\r\\n    margin: 0;\\r\\n\\r\\n    @mixin atSmall {\\r\\n      font-size: 2.9rem;\\r\\n    }\\r\\n\\r\\n  }\\n\\n.large-hero__description {\\r\\n    color: #FFF;\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 100;\\r\\n    text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);\\r\\n    max-width: 30rem;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n\\r\\n    @mixin atSmall {\\r\\n      font-size: 1.875rem;\\r\\n    }\\r\\n  }\\n\\n.btn {\\r\\n  background-color: #2B20AD;\\r\\n  color: #FFF;\\r\\n  text-decoration: none;\\r\\n  padding: .75rem 1.2rem;\\r\\n  display: inline-block;\\r\\n\\r\\n}\\n\\n.btn--orange {\\r\\n    background-color: #F9930E;\\r\\n  }\\n\\n.btn--large {\\r\\n    padding: 1.1rem 1.9rem;\\r\\n\\r\\n    @mixin atSmall {\\r\\n      font-size: 1.25rem;\\r\\n    }\\r\\n  }\\n\\n.wrapper {\\r\\n  overflow: hidden;\\r\\n  padding-left: 18px;\\r\\n  padding-right: 18px;\\r\\n  max-width: 1236px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n\\r\\n}\\n\\n.wrapper--medium {\\r\\n    max-width: 976px;\\r\\n  }\\n\\n.wrapper--narrow {\\r\\n    max-width: 470px;\\r\\n  }\\n\\n.wrapper--no-padding-until-medium {\\r\\n    padding-left: 0;\\r\\n    padding-right: 0;\\r\\n\\r\\n    @mixin atMedium {\\r\\n      padding-left: 18px;\\r\\n      padding-right: 18px;\\r\\n    }\\r\\n  }\\n\\n.wrapper--no-padding-until-large {\\r\\n    padding-left: 0;\\r\\n    padding-right: 0;\\r\\n\\r\\n    @mixin atLarge {\\r\\n      padding-left: 18px;\\r\\n      padding-right: 18px;\\r\\n    }\\r\\n  }\\n\\n.wrapper .wrapper {\\r\\n    padding-left: 0;\\r\\n    padding-right: 0;\\r\\n  }\\n\\n.wrapper--b-margin {\\r\\n    margin-bottom: 1rem;\\r\\n\\r\\n    @mixin atSmall {\\r\\n      margin-bottom: 3.875rem;\\r\\n    }\\r\\n  }\\n\\n.site-header {\\r\\n  padding: 10px 0;\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  z-index: 2;\\r\\n  -webkit-transition: background-color .3s ease-out;\\r\\n  transition: background-color .3s ease-out;\\r\\n\\r\\n  @mixin atMedium {\\r\\n    position: fixed;\\r\\n    background-color: rgba(#2B20AD, .3);\\r\\n\\r\\n    &--dark {\\r\\n      background-color: rgba(23, 51, 72, .85);\\r\\n    }\\r\\n  }\\r\\n}\\n\\n.site-header--is-expanded {\\r\\n    background-color: rgba(#2B20AD, .55);\\r\\n  }\\n\\n.site-header__btn-container {\\r\\n    @mixin atMedium {\\r\\n      float: right;\\r\\n    }\\r\\n  }\\n\\n.site-header__logo {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 50%;\\r\\n    -webkit-transform: translateX(-50%) scale(.8);\\r\\n            transform: translateX(-50%) scale(.8);\\r\\n    -webkit-transition: -webkit-transform .5s ease-out;\\r\\n    transition: -webkit-transform .5s ease-out;\\r\\n    transition: transform .5s ease-out;\\r\\n    transition: transform .5s ease-out, -webkit-transform .5s ease-out;\\r\\n    -webkit-transform-origin: 50% 0;\\r\\n            transform-origin: 50% 0;\\r\\n    background-color: #F9930E;\\r\\n    padding: 25px 36px;\\r\\n\\r\\n    @mixin atMedium {\\r\\n      left: auto;\\r\\n      -webkit-transform: translateX(0);\\r\\n              transform: translateX(0);\\r\\n\\r\\n      .site-header--dark & {\\r\\n        -webkit-transform: scale(.55);\\r\\n                transform: scale(.55);\\r\\n      }\\r\\n    }\\r\\n  }\\n\\n.site-header__logo__graphic {\\r\\n    text-indent: -9999px;\\r\\n  }\\n\\n.site-header__menu-icon {\\r\\n    width: 20px;\\r\\n    height: 19px;\\r\\n    position: absolute;\\r\\n    z-index: 10;\\r\\n    top: 10px;\\r\\n    right: 10px;\\r\\n\\r\\n    @mixin atMedium {\\r\\n      display: none;\\r\\n    }\\r\\n  }\\n\\n.site-header__menu-icon::before {\\r\\n      content: '';\\r\\n      position: absolute;\\r\\n      top: 0;\\r\\n      left: 0;\\r\\n      width: 20px;\\r\\n      height: 3px;\\r\\n      background-color: #fff;\\r\\n      -webkit-transform-origin: 0 0;\\r\\n              transform-origin: 0 0;\\r\\n      -webkit-transition: -webkit-transform .3s ease-out;\\r\\n      transition: -webkit-transform .3s ease-out;\\r\\n      transition: transform .3s ease-out;\\r\\n      transition: transform .3s ease-out, -webkit-transform .3s ease-out;\\r\\n    }\\n\\n.site-header__menu-icon__middle {\\r\\n      position: absolute;\\r\\n      top: 8px;\\r\\n      left: 0;\\r\\n      width: 20px;\\r\\n      height: 3px;\\r\\n      background-color: #fff;\\r\\n      -webkit-transition: all .3s ease-out;\\r\\n      transition: all .3s ease-out;\\r\\n      -webkit-transform-origin: 0 50%;\\r\\n              transform-origin: 0 50%;\\r\\n    }\\n\\n.site-header__menu-icon::after {\\r\\n      content: '';\\r\\n      position: absolute;\\r\\n      bottom: 0;\\r\\n      left: 0;\\r\\n      width: 20px;\\r\\n      height: 3px;\\r\\n      background-color: #fff;\\r\\n      -webkit-transform-origin: 0 100%;\\r\\n              transform-origin: 0 100%;\\r\\n      -webkit-transition: -webkit-transform .3s ease-out;\\r\\n      transition: -webkit-transform .3s ease-out;\\r\\n      transition: transform .3s ease-out;\\r\\n      transition: transform .3s ease-out, -webkit-transform .3s ease-out;\\r\\n    }\\n\\n.site-header__menu-icon--close-x::before {\\r\\n      -webkit-transform: rotate(45deg) scaleX(1.25);\\r\\n              transform: rotate(45deg) scaleX(1.25);\\r\\n    }\\n\\n.site-header__menu-icon--close-x .site-header__menu-icon__middle {\\r\\n      opacity: 0;\\r\\n      -webkit-transform: scaleX(0);\\r\\n              transform: scaleX(0);\\r\\n    }\\n\\n.site-header__menu-icon--close-x::after {\\r\\n      -webkit-transform: rotate(-45deg) scaleX(1.25) translateY(1px);\\r\\n              transform: rotate(-45deg) scaleX(1.25) translateY(1px);\\r\\n    }\\n\\n.site-header__menu-content {\\r\\n    opacity: 0;\\r\\n    -webkit-transform: scale(1.3);\\r\\n            transform: scale(1.3);\\r\\n    -webkit-transition: all .3s ease-out;\\r\\n    transition: all .3s ease-out;\\r\\n    position: relative;\\r\\n    z-index: -10;\\r\\n    padding-top: 90px;\\r\\n    text-align: center;\\r\\n\\r\\n    @mixin atMedium {\\r\\n      opacity: 1;\\r\\n      z-index: 1;\\r\\n      padding-top: 0;\\r\\n      -webkit-transform: scale(1);\\r\\n              transform: scale(1);\\r\\n    }\\r\\n  }\\n\\n.site-header__menu-content--is-visible {\\r\\n      opacity: 1;\\r\\n      z-index: 1;\\r\\n      -webkit-transform: scale(1);\\r\\n              transform: scale(1);\\r\\n    }\\n\\n.primary-nav {\\r\\n  padding-top: 10px;\\r\\n\\r\\n  @mixin atMedium {\\r\\n    padding-top: 0;\\r\\n  }\\r\\n}\\n\\n.primary-nav--pull-right {\\r\\n    @mixin atMedium {\\r\\n      float: right;\\r\\n    }\\r\\n  }\\n\\n/*  mixin syntaxe modified  \\r\\n  @mixin clearfix */\\n\\n.primary-nav ul::after {\\r\\n    content: \\\"\\\";\\r\\n    clear: both;\\r\\n    display: table;\\r\\n  }\\n\\n.primary-nav ul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n  }\\n\\n.primary-nav li {\\r\\n    list-style: none;\\r\\n    display: inline-block;\\r\\n    padding-right: 7px;\\r\\n\\r\\n    @mixin atMedium {\\r\\n      padding-right: 20px;\\r\\n      float: left;\\r\\n      display: block;\\r\\n    }\\r\\n  }\\n\\n.primary-nav li:last-child {\\r\\n    padding-right: 0;\\r\\n\\r\\n    @mixin atMedium {\\r\\n      padding-right: 20px;\\r\\n    }\\r\\n  }\\n\\n.primary-nav a {\\r\\n    color: #FFF;\\r\\n    font-weight: 300;\\r\\n    text-decoration: none;\\r\\n    display: block;\\r\\n    padding: 5px 8px;\\r\\n    font-size: .8rem;\\r\\n    background-color: rgba(#2B20AD, .8);\\r\\n\\r\\n    @mixin atMedium {\\r\\n      font-size: 1rem;\\r\\n      padding: 12px 0;\\r\\n      background-color: transparent;\\r\\n\\r\\n      &.is-current-link {\\r\\n        color: #fabb69;\\r\\n      }\\r\\n    }\\r\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./app/assets/styles/styles.css?./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });