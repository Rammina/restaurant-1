(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "0axf":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contact.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "#contact-container{\r\n\twidth: 100%;\r\n\tmin-height: 25rem;\r\n\theight: 100%;\r\n\tbackground-color: aliceblue;\r\n}\r\n\r\n#contact-content{\r\n\theight: 25rem;\r\n\twidth: 100%;\r\n}\r\n\r\n#contact-text{\r\n\twidth: 100%;\r\n}\r\n\r\n#contact-header, #contact-paragraph{\r\n\t/*margin: 0 auto;*/\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n\r\n#contact-flex-container{\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\twidth: 100%;\r\n\r\n}\r\n.contact-flex-item{\r\n\twidth: 100%;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n\t#contact-container, #contact-content{\r\n\t\t/*height: calc(100vh - 3.5rem);*/\r\n\t}\r\n\t.contact-flex-item{\r\n\t\twidth: 50%;\r\n\t\ttext-align: center;\r\n\t}\r\n}\r\n", ""]);


/***/ }),

/***/ "1WVu":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_css_loader_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-loader!css-loader!./contact.css */ "XmuM");
/* harmony import */ var _style_loader_css_loader_contact_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_contact_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Contact =
/*#__PURE__*/
function () {
  function Contact() {
    _classCallCheck(this, Contact);
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var contactSection = document.createElement("section"); // contactSection.classList.add("slider-section");

      contactSection.id = "contact-container";
      contactSection.insertAdjacentHTML("beforeend", "\n\t\t\t\t<div id=\"contact-content\">\n                \t<div id=\"contact-text\">\n                    \t<h1 id=\"contact-header\">We'd Like to Hear From You!</h1>\n                    \t<p id=\"contact-paragraph\">Giorno has a dream, and it is to give you the best customer experience!</p>\n\t                    <div id=\"contact-flex-container\">\n\t\t\t<div class=\"contact-flex-item\">\n\t\t\t\t<!-- This needs an image -->\n\t\t\t\t\n\t\t\t\t<span id=\"contact-item-number\">+666-6969-6969</span>\n\t\t\t</div>\n\t\t\t<div class=\"contact-flex-item\">\n\t\t\t\t<!-- This needs an image -->\n\t\t\t\t\n\t\t\t\t<span id=\"contact-item-number\">giornohasadream@gmail.com</span>\n\t\t\t</div>\n</div>\n                \t</div>\n\t            </div>\n\t\t");
      document.querySelector("main").appendChild(contactSection);
    }
  }, {
    key: "remove",
    value: function remove() {
      var contactSection = document.getElementById("contact-container");
      contactSection.parentElement.removeChild(contactSection);
    }
  }]);

  return Contact;
}();

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "4LHR":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_css_loader_shared_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-loader!css-loader!./shared.css */ "PzHH");
/* harmony import */ var _style_loader_css_loader_shared_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_shared_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "PzHH":
/*!******************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./src/shared.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./shared.css */ "UchK");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "QP6P":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/nav.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".main-header{\r\n    z-index: 10;\r\n    margin: 0;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 3.5rem;\r\n    background-color: rgba(67, 67, 71, 0);\r\n    color: rgb(20, 20, 20);\r\n    padding-top: 1rem;\r\n}\r\n\r\n.main-nav {\r\n    position: static;\r\n    height: 100%;\r\n    width: 100%;\r\n    max-width: 35rem;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 0 1rem;\r\n}\r\n\r\n#nav-title {\r\n    display: inline-block;\r\n    font-family: 'Lora', serif;\r\n    font-size: 1.8rem;\r\n    color: #f8d640;\r\n    /* text-shadow: 1px 1px 1.5px gray, -1px -1px 0px rgba(255, 255, 255, 0.4); */\r\n\r\n}\r\n\r\n#nav-menu {\r\n    display: inline;\r\n    font-size: 1.3rem;\r\n    line-height: 1.3rem;\r\n    padding: 0.9rem 0.6rem;\r\n    color: #0a020a;\r\n    background-color: #fbe16a;\r\n    border-radius: 5px;\r\n    /* border: 2px solid rgba(250, 250, 250, 0.5); */\r\n    border: none;\r\n    text-shadow: 1px 1px 0px rgba(255, 203, 255, 0.507);\r\n    font-family: 'Lato', sans-serif;\r\n    outline: none;    \r\n    vertical-align: middle;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#nav-menu:active {\r\n    border: 3px solid rgba(250, 250, 250, 0.5);\r\n}\r\n\r\n.nav-items {\r\n    z-index: 20;\r\n    position: fixed;\r\n    display: block;\r\n    right: 0;\r\n    top: 0rem;\r\n    font-size: 1.1rem;\r\n    width: 8rem;\r\n    height: 100vh;\r\n    padding: 0;\r\n    margin: 0;\r\n    padding-top: calc(50vh - 6rem);\r\n\r\n\r\n    color: #fefefe;\r\n    background-color: rgb(67, 67, 71);\r\n\r\n\r\n    transform: translate(8rem);\r\n    transition: all 0.25s ease-in;\r\n    visibility: hidden;\r\n    }\r\n#nav-backdrop{\r\n    z-index: 20;\r\n}\r\n.nav-items.show {\r\n    visibility: visible;\r\n    transform: translate(0rem);\r\n}\r\n\r\n\r\n\r\n.nav-item {\r\n    display: block;\r\n    /* background-color: rgba(219, 244, 251, 0.9); */\r\n    color: #fff;\r\n    padding: 0.75rem 0.9rem;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.nav-item:focus {\r\n    -webkit-box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000; \r\n    box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000; \r\n    /*padding-right: 2.5rem;*/\r\n}\r\n.nav-item.current {\r\n    color: #fbe16a;\r\n}\r\n\r\n/*breakpoints*/\r\n\r\n@media screen and (min-width: 780px) {\r\n    .main-header{\r\n        /*background-color: rgba(67, 67, 71, 0.05);*/\r\n        /*-webkit-box-shadow: 0px 1.5px 0px 0px rgba(255, 255, 255, 0); box-shadow: 0px 1.5px 0px 0px rgba(255, 255, 255, 0);*/\r\n        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.507);\r\n        /*height: 5.75rem;*/\r\n        padding-top: 2rem;\r\n        padding-bottom: 1rem;\r\n        transition: all 0.3s ease;\r\n        /*background: linear-gradient(180deg, rgba(29, 29, 31, 0.801), transparent);*/\r\n    }\r\n        \r\n    .main-nav{\r\n        position: static;\r\n        width: 100%;\r\n        max-width: 40rem;\r\n        padding: 0 1.5rem;\r\n        padding-right: 0.8rem;\r\n        justify-content: space-between;\r\n    }\r\n    #nav-title{\r\n        left: 0;            \r\n        font-size: 2.3rem;\r\n        transition: all 0.3s ease;\r\n    }\r\n\r\n    #nav-title.show{\r\n        font-size: 1.8rem;\r\n    }\r\n\r\n    \r\n\r\n    .nav-margin{\r\n        \r\n    }\r\n    #nav-menu{\r\n        display: none;\r\n    }\r\n    .nav-items{\r\n        visibility: visible;\r\n        position: static;\r\n        top: 0;\r\n        padding-top: 0;\r\n        width: auto;\r\n        height: auto;\r\n        display: inline-block;\r\n        opacity: 1;\r\n        transform: translate(0);\r\n        background-color: rgba(67, 67, 71, 0);\r\n    }\r\n    #nav-backdrop{\r\n        display: none;\r\n    }\r\n    .nav-items li{\r\n        display: inline;\r\n    }\r\n    .nav-item{\r\n        display: inline;\r\n        padding: 0.9rem 0rem;\r\n        margin: 0 0.9rem;\r\n\r\n    }\r\n\r\n    .nav-item:focus{\r\n        padding-right: 0.3rem;\r\n\r\n    }\r\n}\r\n@media screen and (min-width: 1100px) {\r\n    .main-nav {\r\n        /*max-width: 80rem;*/\r\n    }\r\n}\r\n\r\n", ""]);


/***/ }),

/***/ "Qqpp":
/*!****************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./src/menu.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./menu.css */ "dtsx");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "U1W4":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "#home-container{\r\n\twidth: 100%;\r\n\tmin-height: 25rem;\r\n\theight: 100%;\r\n\t/* background-color: aliceblue; */\r\n\t/* background-size: cover; */\r\n\r\n}\r\n\r\n#home-content{\r\n\theight: 25rem;\r\n\twidth: 100%;\r\n\t/*padding-bottom: 2rem;*/\r\n}\r\n\r\n#home-text{\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n\talign-content: center;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tpadding: 0 0.5rem;\r\n\r\n}\r\n\r\n#home-header {\r\n\t\r\n\tfont-size: 2.3rem;\r\n\tmargin-bottom: 1rem;\r\n}\r\n#home-header-break{\r\n\tdisplay: block;\r\n}\r\n#home-paragraph{\r\n\tfont-size: 1.15rem;\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n#home-button{\r\n\tfont-size: 1.2rem;\r\n\tbackground-color: rgba(10, 0, 0, 0.2);\r\n\tborder: 2px solid white;\r\n\tborder-radius: 3px;\r\n\tcolor: white;\r\n\ttext-transform: uppercase;\r\n\tpadding: 0.8rem 1.5rem;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n#home-header, #home-paragraph{\r\n\t/*margin: 0 auto;*/\r\n\tcolor: white;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n@media screen and (min-width: 650px) {\r\n\t#home-header-break{\r\n\t\tdisplay: inline;\r\n\t}\r\n}\r\n\t\r\n@media screen and (min-width: 1000px) {\r\n\t#home-container, #home-content{\r\n\t\theight: calc(100vh);\r\n\t}\r\n}\r\n", ""]);


/***/ }),

/***/ "UchK":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/shared.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora:700i|Raleway&display=swap);", ""]);
// Module
exports.push([module.i, "* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    width: 100%;\r\n    margin: 0;\r\n    min-height: 100vh;\r\n    padding: 0;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n    position: absolute;\r\n    margin: 0;\r\n    font-family: 'Raleway', sans-serif;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    padding: 0;\r\n}\r\n\r\nbody h1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Lora', serif;\r\n    text-transform: uppercase;\r\n}\r\n\r\nmain {\r\n    position: absolute;\r\n    background-color: pink;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    /*top: 3.5rem;*/\r\n}\r\n\r\nbutton {\r\n\r\n}\r\n\r\nbutton:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000;\r\n    box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n   -webkit-box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000;\r\n    box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\na:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000;\r\n    box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000;\r\n}\r\n\r\ndiv:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000;\r\n    box-shadow: 0px 0px 1px 2px #FFFFFF, 0px 0px 2px 3px #969696, 0px 0px 3px 5px #000000;\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n}\r\n\r\n\r\n.no-display.hide-png {\r\n    display: none;\r\n}\r\n\r\n.no-display.hide-svg {\r\n    display: none;\r\n}\r\n\r\n.backdrop {\r\n    display: block;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    z-index: 200;\r\n    position: fixed;\r\n    /*display: none;*/\r\n    width: calc(100vw - (100vw - 100%));\r\n    height: 100vh;\r\n    padding: 0.5rem;\r\n    padding-top: 1rem;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    /*opacity: 0.7;*/\r\n    bottom: 0;\r\n    right: 0;\r\n    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\r\n}\r\n.backdrop.show{\r\n    opacity: 1;\r\n    visibility: visible;\r\n}", ""]);


/***/ }),

/***/ "XmuM":
/*!*******************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./src/contact.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./contact.css */ "0axf");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "d9pj":
/*!***************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./src/nav.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./nav.css */ "QP6P");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "ddBA":
/*!**************************************!*\
  !*** ./src/images/pizza-home-bg.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6d8139713e3b9996a4816c5d38710e09.png";

/***/ }),

/***/ "dtsx":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "#menu-container{\r\n\twidth: 100%;\r\n\tmin-height: 25rem;\r\n\theight: 100%;\r\n\tbackground-color: aliceblue;\r\n}\r\n\r\n#menu-content{\r\n\theight: 25rem;\r\n\twidth: 100%;\r\n}\r\n\r\n#menu-flex-container{\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n\talign-content: center;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\n#menu-header, #menu-paragraph{\r\n\t/*margin: 0 auto;*/\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n\t#menu-container, #menu-content{\r\n\t\t/*height: calc(100vh - 3.5rem);*/\r\n\t}\r\n}\r\n", ""]);


/***/ }),

/***/ "e0Gm":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_css_loader_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-loader!css-loader!./home.css */ "sqX+");
/* harmony import */ var _style_loader_css_loader_home_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_home_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_pizza_home_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza-home-bg.png */ "ddBA");
/* harmony import */ var _images_pizza_home_bg_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_pizza_home_bg_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "qwjP");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "1WVu");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var menu = new _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
var contact = new _contact_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

var Home =
/*#__PURE__*/
function () {
  function Home() {
    _classCallCheck(this, Home);
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var homeSection = document.createElement("section");
      homeSection.style.background = "url(".concat(_images_pizza_home_bg_png__WEBPACK_IMPORTED_MODULE_1___default.a, ")");
      homeSection.style.backgroundSize = 'cover'; // homeSection.classList.add("slider-section");

      homeSection.id = "home-container";
      homeSection.insertAdjacentHTML("beforeend", "\n\t\t\t\t<div id=\"home-content\">\n                \t<div id=\"home-text\">\n                    \t<h1 id=\"home-header\"><span id=\"home-header-break\">Authentic </span>Italian Pizza</h1>\n                    \t<p id=\"home-paragraph\">We dream to serve only the best food to our customers!</p>\n\t                    <button id=\"home-button\">View Menu</button>\n                \t</div>\n\t            </div>\n\t\t");
      document.querySelector("main").appendChild(homeSection);
      document.getElementById("home-button").addEventListener("click", function () {
        if (!document.getElementById("menu-container")) {
          // check the other containers if they exist and remove them
          // afterwards, Render the section
          if (!!document.getElementById("home-container")) {
            var _homeSection = document.getElementById("home-container");

            _homeSection.parentElement.removeChild(_homeSection);

            console.log("home remove Activated");
          }

          if (!!document.getElementById("contact-container")) {
            contact.remove();
          }

          menu.render();
        }
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var homeSection = document.getElementById("home-container");
      homeSection.parentElement.removeChild(homeSection);
      console.log("home remove Activated");
    }
  }]);

  return Home;
}();

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "i4fA":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_css_loader_nav_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-loader!css-loader!./nav.css */ "d9pj");
/* harmony import */ var _style_loader_css_loader_nav_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_nav_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Navigation =
/*#__PURE__*/
function () {
  function Navigation() {
    _classCallCheck(this, Navigation);
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      var navbar = document.createElement("header");
      navbar.classList.add("main-header");
      navbar.insertAdjacentHTML("beforeend", "\n\t\t\t<nav class=\"main-nav\">\n            <!--  The anchor tag needs to link to the page top-->\n            <a href=\"#\" id=\"nav-title\">Giorno</a>\n\n            <button id=\"nav-menu\" aria-label=\"Toggle navigation\" aria-expanded=\"false\" aria-controls=\"navbarResponsive\">Menu</button>\n            <div class=\"backdrop\" id=\"nav-backdrop\"></div>\n            <ul class=\"nav-items\" id=\"navbarResponsive\">\n            \t<li><a class=\"nav-item\" href=\"#\">home</a></li>\n                <li><a class=\"nav-item\" href=\"#\">menu</a></li>\n                <li><a class=\"nav-item\" href=\"#\">contact</a></li>\n                \n            </ul>\n            \n            </nav>\n\t\t");
      var mainContent = document.querySelector("main");
      document.body.insertBefore(navbar, mainContent); // Dom elements of the navigation bar

      var title = document.getElementById("nav-title");
      var menubutton = document.getElementById("nav-menu");
      var navBackdrop = document.getElementById("nav-backdrop");
      var menuitems = document.querySelector(".nav-items");
      var menuitem = document.querySelector(".nav-item");

      function showMenu() {
        menuitems.classList.add("show");
        menubutton.setAttribute("aria-expanded", "true");
        navBackdrop.classList.add("show");
      }

      function hideMenu() {
        menuitems.classList.remove("show");
        menubutton.setAttribute("aria-expanded", "false");
        navBackdrop.classList.remove("show");
      }

      menubutton.addEventListener("click", function () {
        if (menubutton.getAttribute("aria-expanded") === "false") {
          showMenu();
          console.log("menu has been shown");
        } else {
          hideMenu();
          console.log("menu has been hidden");
        }
      });
      navBackdrop.addEventListener("click", function () {
        hideMenu();
        console.log("menu has been hidden");
      });
    }
  }]);

  return Navigation;
}();

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "qwjP":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_css_loader_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-loader!css-loader!./menu.css */ "Qqpp");
/* harmony import */ var _style_loader_css_loader_menu_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_menu_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Menu =
/*#__PURE__*/
function () {
  function Menu() {
    _classCallCheck(this, Menu);
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var menuSection = document.createElement("section"); // menuSection.classList.add("slider-section");

      menuSection.id = "menu-container";
      menuSection.insertAdjacentHTML("beforeend", "\n\t\t\t\t<div id=\"menu-content\">\n                \t<h1 id=\"menu-header\">Menu</h1>\n                    <p id=\"menu-paragraph\">goodbye to drugs, embrace pizza</p>\n                    \n\t            </div>\n\t\t");
      document.querySelector("main").appendChild(menuSection);
    }
  }, {
    key: "remove",
    value: function remove() {
      var menuSection = document.getElementById("menu-container");
      menuSection.parentElement.removeChild(menuSection);
    }
  }]);

  return Menu;
}();

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "sqX+":
/*!****************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./home.css */ "U1W4");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.js */ "4LHR");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "i4fA");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "e0Gm");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "qwjP");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "1WVu");
// Import JS files





var navigation = new _nav_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var home = new _home_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
var menu = new _menu_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
var contact = new _contact_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
navigation.render();
home.render(); // menu.render();
// contact.render();

var navItems = document.getElementsByClassName("nav-item");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = navItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
    item.addEventListener("click", function (event) {
      for (var i = 0; i < navItems.length; i++) {
        if (navItems[i] === event.target) {
          switch (i) {
            case 0:
              // Check if home container exists
              if (!document.getElementById("home-container")) {
                // check the other containers if they exist and remove them
                // afterwards, Render the section
                if (!!document.getElementById("menu-container")) {
                  menu.remove();
                }

                if (!!document.getElementById("contact-container")) {
                  contact.remove();
                }

                home.render();
              }

              break;

            case 1:
              // check if menu container exists
              if (!document.getElementById("menu-container")) {
                // check the other containers if they exist and remove them
                // afterwards, Render the section
                if (!!document.getElementById("home-container")) {
                  home.remove();
                }

                if (!!document.getElementById("contact-container")) {
                  contact.remove();
                }

                menu.render();
              }

              break;

            case 2:
              // check if contact container exists
              if (!document.getElementById("contact-container")) {
                // check the other containers if they exist and remove them
                // afterwards, Render the section
                if (!!document.getElementById("menu-container")) {
                  menu.remove();
                }

                if (!!document.getElementById("home-container")) {
                  home.remove();
                }

                contact.render();
              }

              break;
          }
        }
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

document.getElementById("nav-title").addEventListener("click", function () {
  if (!document.getElementById("home-container")) {
    // check the other containers if they exist and remove them
    // afterwards, Render the section
    if (!!document.getElementById("menu-container")) {
      menu.remove();
    }

    if (!!document.getElementById("contact-container")) {
      contact.remove();
    }

    home.render();
  }
});

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFjdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkLmNzcz81OTRiIiwid2VicGFjazovLy8uL3NyYy9uYXYuY3NzIiwid2VicGFjazovLy8uL3NyYy9tZW51LmNzcz80NGUxIiwid2VicGFjazovLy8uL3NyYy9ob21lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFjdC5jc3M/NjQwMyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2LmNzcz83ZTM0Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcGl6emEtaG9tZS1iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuY3NzIiwid2VicGFjazovLy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuY3NzPzljODEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnRhY3QiLCJjb250YWN0U2VjdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJtZW51IiwiTWVudSIsImNvbnRhY3QiLCJIb21lIiwiaG9tZVNlY3Rpb24iLCJzdHlsZSIsImJhY2tncm91bmQiLCJQaXp6YUhvbWVCZyIsImJhY2tncm91bmRTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiLCJyZW5kZXIiLCJOYXZpZ2F0aW9uIiwibmF2YmFyIiwiY2xhc3NMaXN0IiwiYWRkIiwibWFpbkNvbnRlbnQiLCJib2R5IiwiaW5zZXJ0QmVmb3JlIiwidGl0bGUiLCJtZW51YnV0dG9uIiwibmF2QmFja2Ryb3AiLCJtZW51aXRlbXMiLCJtZW51aXRlbSIsInNob3dNZW51Iiwic2V0QXR0cmlidXRlIiwiaGlkZU1lbnUiLCJnZXRBdHRyaWJ1dGUiLCJtZW51U2VjdGlvbiIsIm5hdmlnYXRpb24iLCJob21lIiwibmF2SXRlbXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaXRlbSIsImV2ZW50IiwiaSIsImxlbmd0aCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsNERBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixrQkFBa0Isd0JBQXdCLG1CQUFtQixrQ0FBa0MsS0FBSyx5QkFBeUIsb0JBQW9CLGtCQUFrQixLQUFLLHNCQUFzQixrQkFBa0IsS0FBSyw0Q0FBNEMsdUJBQXVCLG9CQUFvQix5QkFBeUIsS0FBSyxnQ0FBZ0Msb0JBQW9CLDBCQUEwQixzQkFBc0IsMEJBQTBCLDRCQUE0QixrQkFBa0IsU0FBUyx1QkFBdUIsa0JBQWtCLEtBQUssK0NBQStDLDJDQUEyQyx1Q0FBdUMsU0FBUyx5QkFBeUIsbUJBQW1CLDJCQUEyQixPQUFPLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdnpCOztJQUVNQSxPOzs7Ozs7Ozs7NkJBQ0c7QUFDUCxVQUFJQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFyQixDQURPLENBRVA7O0FBQ0FGLG9CQUFjLENBQUNHLEVBQWYsR0FBb0IsbUJBQXBCO0FBQ0FILG9CQUFjLENBQUNJLGtCQUFmLENBQWtDLFdBQWxDO0FBb0JBSCxjQUFRLENBQUNJLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFdBQS9CLENBQTJDTixjQUEzQztBQUNBOzs7NkJBQ087QUFDUCxVQUFJQSxjQUFjLEdBQUdDLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixtQkFBeEIsQ0FBckI7QUFDQVAsb0JBQWMsQ0FBQ1EsYUFBZixDQUE2QkMsV0FBN0IsQ0FBeUNULGNBQXpDO0FBQ0E7Ozs7OztBQUdhRCxzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQ0EsY0FBYyxtQkFBTyxDQUFDLGtFQUF1RDs7QUFFN0UsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDJEQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmYsMkJBQTJCLG1CQUFPLENBQUMsNERBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLGdCQUFnQixvQkFBb0Isa0JBQWtCLHdCQUF3QixvQkFBb0IsdUJBQXVCLDhDQUE4QywrQkFBK0IsMEJBQTBCLEtBQUssbUJBQW1CLHlCQUF5QixxQkFBcUIsb0JBQW9CLHlCQUF5Qix1QkFBdUIsc0JBQXNCLDRCQUE0Qix1Q0FBdUMsNEJBQTRCLHVCQUF1Qix3QkFBd0IsS0FBSyxvQkFBb0IsOEJBQThCLG1DQUFtQywwQkFBMEIsdUJBQXVCLG1GQUFtRixZQUFZLG1CQUFtQix3QkFBd0IsMEJBQTBCLDRCQUE0QiwrQkFBK0IsdUJBQXVCLGtDQUFrQywyQkFBMkIsc0RBQXNELHdCQUF3Qiw0REFBNEQsd0NBQXdDLHNCQUFzQixtQ0FBbUMsa0NBQWtDLEtBQUssMEJBQTBCLG1EQUFtRCxLQUFLLG9CQUFvQixvQkFBb0Isd0JBQXdCLHVCQUF1QixpQkFBaUIsa0JBQWtCLDBCQUEwQixvQkFBb0Isc0JBQXNCLG1CQUFtQixrQkFBa0IsdUNBQXVDLCtCQUErQiwwQ0FBMEMsMkNBQTJDLHNDQUFzQywyQkFBMkIsU0FBUyxrQkFBa0Isb0JBQW9CLEtBQUsscUJBQXFCLDRCQUE0QixtQ0FBbUMsS0FBSywyQkFBMkIsdUJBQXVCLHNEQUFzRCx1QkFBdUIsZ0NBQWdDLDJCQUEyQix1QkFBdUIsd0JBQXdCLG1CQUFtQixrQ0FBa0MsS0FBSyx5QkFBeUIsc0dBQXNHLCtGQUErRixpQ0FBaUMsT0FBTyx1QkFBdUIsdUJBQXVCLEtBQUsscUVBQXFFLHFCQUFxQix1REFBdUQsNkVBQTZFLHNEQUFzRCw0REFBNEQsOEJBQThCLGdDQUFnQyxpQ0FBaUMsc0NBQXNDLHdGQUF3RixXQUFXLDhCQUE4Qiw2QkFBNkIsd0JBQXdCLDZCQUE2Qiw4QkFBOEIsa0NBQWtDLDJDQUEyQyxTQUFTLG1CQUFtQixvQkFBb0IsMENBQTBDLHNDQUFzQyxTQUFTLDRCQUE0Qiw4QkFBOEIsU0FBUyxvQ0FBb0MscUJBQXFCLGtCQUFrQiwwQkFBMEIsU0FBUyxtQkFBbUIsZ0NBQWdDLDZCQUE2QixtQkFBbUIsMkJBQTJCLHdCQUF3Qix5QkFBeUIsa0NBQWtDLHVCQUF1QixvQ0FBb0Msa0RBQWtELFNBQVMsc0JBQXNCLDBCQUEwQixTQUFTLHNCQUFzQiw0QkFBNEIsU0FBUyxrQkFBa0IsNEJBQTRCLGlDQUFpQyw2QkFBNkIsYUFBYSw0QkFBNEIsa0NBQWtDLGFBQWEsS0FBSywyQ0FBMkMsbUJBQW1CLCtCQUErQixXQUFXLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUNEN3lJLGNBQWMsbUJBQU8sQ0FBQyxnRUFBcUQ7O0FBRTNFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQywyREFBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmLDJCQUEyQixtQkFBTyxDQUFDLDREQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxtQkFBbUIsa0JBQWtCLHdCQUF3QixtQkFBbUIscUNBQXFDLG1DQUFtQyxZQUFZLHNCQUFzQixvQkFBb0Isa0JBQWtCLDZCQUE2QixPQUFPLG1CQUFtQix3QkFBd0IsMEJBQTBCLHNCQUFzQiw4QkFBOEIsNEJBQTRCLDBCQUEwQixtQkFBbUIsa0JBQWtCLHdCQUF3QixTQUFTLHNCQUFzQiw4QkFBOEIsMEJBQTBCLEtBQUssdUJBQXVCLHFCQUFxQixLQUFLLG9CQUFvQix5QkFBeUIsMEJBQTBCLEtBQUsscUJBQXFCLHdCQUF3Qiw0Q0FBNEMsOEJBQThCLHlCQUF5QixtQkFBbUIsZ0NBQWdDLDZCQUE2QiwwQkFBMEIsS0FBSyxzQ0FBc0MsdUJBQXVCLHFCQUFxQixrQkFBa0IseUJBQXlCLEtBQUssMENBQTBDLHlCQUF5Qix3QkFBd0IsT0FBTyxLQUFLLGlEQUFpRCxxQ0FBcUMsNEJBQTRCLE9BQU8sS0FBSzs7Ozs7Ozs7Ozs7O0FDRnQwQywyQkFBMkIsbUJBQU8sQ0FBQyw0REFBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsdUZBQXVGO0FBQzlHO0FBQ0EsY0FBYyxRQUFTLE1BQU0sK0JBQStCLGtCQUFrQixtQkFBbUIsS0FBSyxjQUFjLG9CQUFvQixrQkFBa0IsMEJBQTBCLG1CQUFtQixnQ0FBZ0MsS0FBSyxjQUFjLDJCQUEyQixrQkFBa0IsMkNBQTJDLG9CQUFvQiwwQkFBMEIsbUJBQW1CLEtBQUsscUNBQXFDLG1DQUFtQyxrQ0FBa0MsS0FBSyxjQUFjLDJCQUEyQiwrQkFBK0Isb0JBQW9CLGtCQUFrQixtQkFBbUIsc0JBQXNCLE9BQU8sZ0JBQWdCLFNBQVMsc0JBQXNCLHNCQUFzQixzR0FBc0csOEZBQThGLEtBQUsscUJBQXFCLHNCQUFzQixxR0FBcUcsOEZBQThGLEtBQUssV0FBVyw4QkFBOEIsS0FBSyxpQkFBaUIsc0JBQXNCLHNHQUFzRyw4RkFBOEYsS0FBSyxtQkFBbUIsc0JBQXNCLHNHQUFzRyw4RkFBOEYsS0FBSyxZQUFZLDhCQUE4QixLQUFLLGtDQUFrQyxzQkFBc0IsS0FBSyw4QkFBOEIsc0JBQXNCLEtBQUssbUJBQW1CLHVCQUF1QiwyQkFBMkIsbUJBQW1CLHFCQUFxQix3QkFBd0Isd0JBQXdCLDhDQUE4QyxzQkFBc0Isd0JBQXdCLDBCQUEwQiw2Q0FBNkMsdUJBQXVCLG9CQUFvQixpQkFBaUIsMEVBQTBFLEtBQUssbUJBQW1CLG1CQUFtQiw0QkFBNEIsS0FBSzs7Ozs7Ozs7Ozs7OztBQ0g3MkUsY0FBYyxtQkFBTyxDQUFDLG1FQUF3RDs7QUFFOUUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDJEQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQywrREFBb0Q7O0FBRTFFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQywyREFBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLDJCQUEyQixtQkFBTyxDQUFDLDREQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxtQkFBbUIsa0JBQWtCLHdCQUF3QixtQkFBbUIsa0NBQWtDLEtBQUssc0JBQXNCLG9CQUFvQixrQkFBa0IsS0FBSyw2QkFBNkIsd0JBQXdCLDBCQUEwQixzQkFBc0IsOEJBQThCLDRCQUE0QiwwQkFBMEIsbUJBQW1CLGtCQUFrQixLQUFLLHNDQUFzQyx1QkFBdUIsb0JBQW9CLHlCQUF5QixLQUFLLCtDQUErQyxxQ0FBcUMsdUNBQXVDLFNBQVMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMXFCO0FBRUE7QUFDQTtBQUNBO0FBSUEsSUFBSVcsSUFBSSxHQUFHLElBQUlDLGdEQUFKLEVBQVg7QUFDQSxJQUFJQyxPQUFPLEdBQUcsSUFBSWIsbURBQUosRUFBZDs7SUFFTWMsSTs7Ozs7Ozs7OzZCQUNHO0FBQ1AsVUFBSUMsV0FBVyxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbEI7QUFDQVksaUJBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsVUFBbEIsaUJBQXNDQyxnRUFBdEM7QUFDQUgsaUJBQVcsQ0FBQ0MsS0FBWixDQUFrQkcsY0FBbEIsR0FBbUMsT0FBbkMsQ0FITyxDQUlQOztBQUNBSixpQkFBVyxDQUFDWCxFQUFaLEdBQWlCLGdCQUFqQjtBQUNBVyxpQkFBVyxDQUFDVixrQkFBWixDQUErQixXQUEvQjtBQVNBSCxjQUFRLENBQUNJLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFdBQS9CLENBQTJDUSxXQUEzQztBQUNBYixjQUFRLENBQUNNLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNZLGdCQUF2QyxDQUF3RCxPQUF4RCxFQUFpRSxZQUFVO0FBQzFFLFlBQUcsQ0FBRWxCLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixnQkFBeEIsQ0FBTCxFQUFpRDtBQUNoRDtBQUNBO0FBQ0EsY0FBRyxDQUFDLENBQUVOLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixnQkFBeEIsQ0FBTixFQUFrRDtBQUNqRCxnQkFBSU8sWUFBVyxHQUFHYixRQUFRLENBQUNNLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQWxCOztBQUNBTyx3QkFBVyxDQUFDTixhQUFaLENBQTBCQyxXQUExQixDQUFzQ0ssWUFBdEM7O0FBQ0FNLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBOztBQUNELGNBQUcsQ0FBQyxDQUFFcEIsUUFBUSxDQUFDTSxjQUFULENBQXdCLG1CQUF4QixDQUFOLEVBQXFEO0FBQ3BESyxtQkFBTyxDQUFDVSxNQUFSO0FBQ0E7O0FBQ0RaLGNBQUksQ0FBQ2EsTUFBTDtBQUNBO0FBQ0QsT0FkRDtBQWlCQTs7OzZCQUNPO0FBQ1AsVUFBSVQsV0FBVyxHQUFHYixRQUFRLENBQUNNLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQWxCO0FBQ0FPLGlCQUFXLENBQUNOLGFBQVosQ0FBMEJDLFdBQTFCLENBQXNDSyxXQUF0QztBQUNBTSxhQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBOzs7Ozs7QUFHYVIsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBOztJQUVNVyxVOzs7Ozs7Ozs7NkJBQ0c7QUFDUCxVQUFJQyxNQUFNLEdBQUd4QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBdUIsWUFBTSxDQUFDQyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixhQUFyQjtBQUNBRixZQUFNLENBQUNyQixrQkFBUCxDQUEwQixXQUExQjtBQWlCQSxVQUFJd0IsV0FBVyxHQUFHM0IsUUFBUSxDQUFDSSxhQUFULENBQXVCLE1BQXZCLENBQWxCO0FBQ0FKLGNBQVEsQ0FBQzRCLElBQVQsQ0FBY0MsWUFBZCxDQUEyQkwsTUFBM0IsRUFBbUNHLFdBQW5DLEVBckJPLENBc0JQOztBQUNBLFVBQUlHLEtBQUssR0FBRzlCLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixXQUF4QixDQUFaO0FBQ0EsVUFBSXlCLFVBQVUsR0FBRy9CLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNBLFVBQUkwQixXQUFXLEdBQUdoQyxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbEI7QUFDQSxVQUFJMkIsU0FBUyxHQUFHakMsUUFBUSxDQUFDSSxhQUFULENBQXVCLFlBQXZCLENBQWhCO0FBQ0EsVUFBSThCLFFBQVEsR0FBR2xDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUdBLGVBQVMrQixRQUFULEdBQW9CO0FBQ25CRixpQkFBUyxDQUFDUixTQUFWLENBQW9CQyxHQUFwQixDQUF3QixNQUF4QjtBQUNBSyxrQkFBVSxDQUFDSyxZQUFYLENBQXdCLGVBQXhCLEVBQXlDLE1BQXpDO0FBQ0FKLG1CQUFXLENBQUNQLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLE1BQTFCO0FBQ0E7O0FBRUQsZUFBU1csUUFBVCxHQUFvQjtBQUNuQkosaUJBQVMsQ0FBQ1IsU0FBVixDQUFvQkosTUFBcEIsQ0FBMkIsTUFBM0I7QUFDQVUsa0JBQVUsQ0FBQ0ssWUFBWCxDQUF3QixlQUF4QixFQUF5QyxPQUF6QztBQUNBSixtQkFBVyxDQUFDUCxTQUFaLENBQXNCSixNQUF0QixDQUE2QixNQUE3QjtBQUNBOztBQUVEVSxnQkFBVSxDQUFDYixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFVO0FBQzlDLFlBQUlhLFVBQVUsQ0FBQ08sWUFBWCxDQUF3QixlQUF4QixDQUFELEtBQStDLE9BQWxELEVBQTJEO0FBQzFESCxrQkFBUTtBQUVSaEIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0EsU0FKRCxNQUtJO0FBQ0hpQixrQkFBUTtBQUNSbEIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0E7QUFDRCxPQVZEO0FBWUFZLGlCQUFXLENBQUNkLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQVU7QUFDOUNtQixnQkFBUTtBQUNSbEIsZUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFFRCxPQUpEO0FBS0E7Ozs7OztBQUlhRyx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7O0lBRU1iLEk7Ozs7Ozs7Ozs2QkFDRztBQUNQLFVBQUk2QixXQUFXLEdBQUd2QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbEIsQ0FETyxDQUVQOztBQUNBc0MsaUJBQVcsQ0FBQ3JDLEVBQVosR0FBaUIsZ0JBQWpCO0FBQ0FxQyxpQkFBVyxDQUFDcEMsa0JBQVosQ0FBK0IsV0FBL0I7QUFPQUgsY0FBUSxDQUFDSSxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxXQUEvQixDQUEyQ2tDLFdBQTNDO0FBQ0E7Ozs2QkFDTztBQUNQLFVBQUlBLFdBQVcsR0FBR3ZDLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixnQkFBeEIsQ0FBbEI7QUFDQWlDLGlCQUFXLENBQUNoQyxhQUFaLENBQTBCQyxXQUExQixDQUFzQytCLFdBQXRDO0FBQ0E7Ozs7OztBQUdhN0IsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBLGNBQWMsbUJBQU8sQ0FBQyxnRUFBcUQ7O0FBRTNFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQywyREFBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJOEIsVUFBVSxHQUFHLElBQUlqQiwrQ0FBSixFQUFqQjtBQUNBLElBQUlrQixJQUFJLEdBQUcsSUFBSTdCLGdEQUFKLEVBQVg7QUFDQSxJQUFJSCxJQUFJLEdBQUcsSUFBSUMsZ0RBQUosRUFBWDtBQUNBLElBQUlDLE9BQU8sR0FBRyxJQUFJYixtREFBSixFQUFkO0FBRUEwQyxVQUFVLENBQUNsQixNQUFYO0FBQ0FtQixJQUFJLENBQUNuQixNQUFMLEcsQ0FFQTtBQUNBOztBQUVBLElBQUlvQixRQUFRLEdBQUcxQyxRQUFRLENBQUMyQyxzQkFBVCxDQUFnQyxVQUFoQyxDQUFmOzs7Ozs7QUFDQSx1QkFBaUJELFFBQWpCLDhIQUEwQjtBQUFBLFFBQWpCRSxJQUFpQjtBQUN6QkEsUUFBSSxDQUFDMUIsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBUzJCLEtBQVQsRUFBZTtBQUM3QyxXQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0osUUFBUSxDQUFDSyxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUN4QyxZQUFHSixRQUFRLENBQUNJLENBQUQsQ0FBUixLQUFnQkQsS0FBSyxDQUFDRyxNQUF6QixFQUFpQztBQUNoQyxrQkFBUUYsQ0FBUjtBQUNDLGlCQUFLLENBQUw7QUFDQztBQUNBLGtCQUFHLENBQUU5QyxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQUwsRUFBaUQ7QUFDaEQ7QUFDQztBQUNELG9CQUFHLENBQUMsQ0FBRU4sUUFBUSxDQUFDTSxjQUFULENBQXdCLGdCQUF4QixDQUFOLEVBQWtEO0FBQ2pERyxzQkFBSSxDQUFDWSxNQUFMO0FBQ0E7O0FBQ0Qsb0JBQUcsQ0FBQyxDQUFFckIsUUFBUSxDQUFDTSxjQUFULENBQXdCLG1CQUF4QixDQUFOLEVBQXFEO0FBQ3BESyx5QkFBTyxDQUFDVSxNQUFSO0FBQ0E7O0FBQ0FvQixvQkFBSSxDQUFDbkIsTUFBTDtBQUNEOztBQUNEOztBQUNELGlCQUFLLENBQUw7QUFDQztBQUNBLGtCQUFHLENBQUV0QixRQUFRLENBQUNNLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQUwsRUFBaUQ7QUFDaEQ7QUFDQztBQUNELG9CQUFHLENBQUMsQ0FBRU4sUUFBUSxDQUFDTSxjQUFULENBQXdCLGdCQUF4QixDQUFOLEVBQWtEO0FBQ2pEbUMsc0JBQUksQ0FBQ3BCLE1BQUw7QUFDQTs7QUFDRCxvQkFBRyxDQUFDLENBQUVyQixRQUFRLENBQUNNLGNBQVQsQ0FBd0IsbUJBQXhCLENBQU4sRUFBcUQ7QUFDcERLLHlCQUFPLENBQUNVLE1BQVI7QUFDQTs7QUFDQVosb0JBQUksQ0FBQ2EsTUFBTDtBQUNEOztBQUNEOztBQUNELGlCQUFLLENBQUw7QUFDQztBQUNBLGtCQUFHLENBQUV0QixRQUFRLENBQUNNLGNBQVQsQ0FBd0IsbUJBQXhCLENBQUwsRUFBb0Q7QUFDbkQ7QUFDQztBQUNELG9CQUFHLENBQUMsQ0FBRU4sUUFBUSxDQUFDTSxjQUFULENBQXdCLGdCQUF4QixDQUFOLEVBQWtEO0FBQ2pERyxzQkFBSSxDQUFDWSxNQUFMO0FBQ0E7O0FBQ0Qsb0JBQUcsQ0FBQyxDQUFFckIsUUFBUSxDQUFDTSxjQUFULENBQXdCLGdCQUF4QixDQUFOLEVBQWtEO0FBQ2pEbUMsc0JBQUksQ0FBQ3BCLE1BQUw7QUFDQTs7QUFDQVYsdUJBQU8sQ0FBQ1csTUFBUjtBQUNEOztBQUNEO0FBMUNGO0FBNENBO0FBQ0Q7QUFDRCxLQWpERDtBQWtEQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVEdEIsUUFBUSxDQUFDTSxjQUFULENBQXdCLFdBQXhCLEVBQXFDWSxnQkFBckMsQ0FBc0QsT0FBdEQsRUFBK0QsWUFBVTtBQUN4RSxNQUFHLENBQUVsQixRQUFRLENBQUNNLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQUwsRUFBaUQ7QUFDaEQ7QUFDQTtBQUNBLFFBQUcsQ0FBQyxDQUFFTixRQUFRLENBQUNNLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQU4sRUFBa0Q7QUFDakRHLFVBQUksQ0FBQ1ksTUFBTDtBQUNBOztBQUNELFFBQUcsQ0FBQyxDQUFFckIsUUFBUSxDQUFDTSxjQUFULENBQXdCLG1CQUF4QixDQUFOLEVBQXFEO0FBQ3BESyxhQUFPLENBQUNVLE1BQVI7QUFDQTs7QUFDRG9CLFFBQUksQ0FBQ25CLE1BQUw7QUFDQTtBQUNELENBWkQsRSIsImZpbGUiOiJpbmRleC45ZTYwZTViZGEwOTE3MmYxYzBjNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbnRhY3QtY29udGFpbmVye1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1pbi1oZWlnaHQ6IDI1cmVtO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWNvbnRlbnR7XFxyXFxuXFx0aGVpZ2h0OiAyNXJlbTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtdGV4dHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtaGVhZGVyLCAjY29udGFjdC1wYXJhZ3JhcGh7XFxyXFxuXFx0LyptYXJnaW46IDAgYXV0bzsqL1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZmxleC1jb250YWluZXJ7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuLmNvbnRhY3QtZmxleC1pdGVte1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXHJcXG5cXHQjY29udGFjdC1jb250YWluZXIsICNjb250YWN0LWNvbnRlbnR7XFxyXFxuXFx0XFx0LypoZWlnaHQ6IGNhbGMoMTAwdmggLSAzLjVyZW0pOyovXFxyXFxuXFx0fVxcclxcblxcdC5jb250YWN0LWZsZXgtaXRlbXtcXHJcXG5cXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4iLCJpbXBvcnQgJyFzdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuL2NvbnRhY3QuY3NzJztcclxuXHJcbmNsYXNzIENvbnRhY3Qge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcblx0XHQvLyBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2xpZGVyLXNlY3Rpb25cIik7XHJcblx0XHRjb250YWN0U2VjdGlvbi5pZCA9IFwiY29udGFjdC1jb250YWluZXJcIjtcclxuXHRcdGNvbnRhY3RTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgXHJcblx0XHRcdFx0PGRpdiBpZD1cImNvbnRhY3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgXHQ8ZGl2IGlkPVwiY29udGFjdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHQ8aDEgaWQ9XCJjb250YWN0LWhlYWRlclwiPldlJ2QgTGlrZSB0byBIZWFyIEZyb20gWW91ITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgXHQ8cCBpZD1cImNvbnRhY3QtcGFyYWdyYXBoXCI+R2lvcm5vIGhhcyBhIGRyZWFtLCBhbmQgaXQgaXMgdG8gZ2l2ZSB5b3UgdGhlIGJlc3QgY3VzdG9tZXIgZXhwZXJpZW5jZSE8L3A+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdC1mbGV4LWNvbnRhaW5lclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFjdC1mbGV4LWl0ZW1cIj5cclxuXHRcdFx0XHQ8IS0tIFRoaXMgbmVlZHMgYW4gaW1hZ2UgLS0+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJjb250YWN0LWl0ZW0tbnVtYmVyXCI+KzY2Ni02OTY5LTY5Njk8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFjdC1mbGV4LWl0ZW1cIj5cclxuXHRcdFx0XHQ8IS0tIFRoaXMgbmVlZHMgYW4gaW1hZ2UgLS0+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJjb250YWN0LWl0ZW0tbnVtYmVyXCI+Z2lvcm5vaGFzYWRyZWFtQGdtYWlsLmNvbTwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdGApO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pO1xyXG5cdH1cclxuXHRyZW1vdmUoKXtcclxuXHRcdGxldCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1jb250YWluZXJcIik7XHJcblx0XHRjb250YWN0U2VjdGlvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRhY3RTZWN0aW9uKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwiaW1wb3J0ICchc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi9zaGFyZWQuY3NzJzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGFyZWQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoYXJlZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoYXJlZC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluLWhlYWRlcntcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDY3LCA3MSwgMCk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjAsIDIwLCAyMCk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYge1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2LXRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGNvbG9yOiAjZjhkNjQwO1xcclxcbiAgICAvKiB0ZXh0LXNoYWRvdzogMXB4IDFweCAxLjVweCBncmF5LCAtMXB4IC0xcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgKi9cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI25hdi1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMC45cmVtIDAuNnJlbTtcXHJcXG4gICAgY29sb3I6ICMwYTAyMGE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmUxNmE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpOyAqL1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDI1NSwgMjAzLCAyNTUsIDAuNTA3KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTsgICAgXFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbiNuYXYtbWVudTphY3RpdmUge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMge1xcclxcbiAgICB6LWluZGV4OiAyMDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDUwdmggLSA2cmVtKTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjcsIDcxKTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHJlbSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG4jbmF2LWJhY2tkcm9we1xcclxcbiAgICB6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuLm5hdi1pdGVtcy5zaG93IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHJlbSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMjQ0LCAyNTEsIDAuOSk7ICovXFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuOXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW06Zm9jdXMge1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCAjRkZGRkZGLCAwcHggMHB4IDJweCAzcHggIzk2OTY5NiwgMHB4IDBweCAzcHggNXB4ICMwMDAwMDA7IFxcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI0ZGRkZGRiwgMHB4IDBweCAycHggM3B4ICM5Njk2OTYsIDBweCAwcHggM3B4IDVweCAjMDAwMDAwOyBcXHJcXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAyLjVyZW07Ki9cXHJcXG59XFxyXFxuLm5hdi1pdGVtLmN1cnJlbnQge1xcclxcbiAgICBjb2xvcjogI2ZiZTE2YTtcXHJcXG59XFxyXFxuXFxyXFxuLypicmVha3BvaW50cyovXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIHtcXHJcXG4gICAgLm1haW4taGVhZGVye1xcclxcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCA2NywgNzEsIDAuMDUpOyovXFxyXFxuICAgICAgICAvKi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEuNXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgYm94LXNoYWRvdzogMHB4IDEuNXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsqL1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41MDcpO1xcclxcbiAgICAgICAgLypoZWlnaHQ6IDUuNzVyZW07Ki9cXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgICAgICAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI5LCAyOSwgMzEsIDAuODAxKSwgdHJhbnNwYXJlbnQpOyovXFxyXFxuICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAubWFpbi1uYXZ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG4gICAgI25hdi10aXRsZXtcXHJcXG4gICAgICAgIGxlZnQ6IDA7ICAgICAgICAgICAgXFxyXFxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hdi10aXRsZS5zaG93e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIC5uYXYtbWFyZ2lue1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgI25hdi1tZW51e1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2LWl0ZW1ze1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NywgNjcsIDcxLCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICAjbmF2LWJhY2tkcm9we1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2LWl0ZW1zIGxpe1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtaXRlbXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuOXJlbSAwcmVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDAuOXJlbTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2LWl0ZW06Zm9jdXN7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjNyZW07XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAgIC5tYWluLW5hdiB7XFxyXFxuICAgICAgICAvKm1heC13aWR0aDogODByZW07Ki9cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjaG9tZS1jb250YWluZXJ7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWluLWhlaWdodDogMjVyZW07XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cXHJcXG5cXHQvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1jb250ZW50e1xcclxcblxcdGhlaWdodDogMjVyZW07XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0LypwYWRkaW5nLWJvdHRvbTogMnJlbTsqL1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS10ZXh0e1xcclxcblxcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24tY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHBhZGRpbmc6IDAgMC41cmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1oZWFkZXIge1xcclxcblxcdFxcclxcblxcdGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcbiNob21lLWhlYWRlci1icmVha3tcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuI2hvbWUtcGFyYWdyYXBoe1xcclxcblxcdGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1idXR0b257XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMCwgMCwgMC4yKTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0cGFkZGluZzogMC44cmVtIDEuNXJlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1oZWFkZXIsICNob21lLXBhcmFncmFwaHtcXHJcXG5cXHQvKm1hcmdpbjogMCBhdXRvOyovXFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcXHJcXG5cXHQjaG9tZS1oZWFkZXItYnJlYWt7XFxyXFxuXFx0XFx0ZGlzcGxheTogaW5saW5lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFx0XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxyXFxuXFx0I2hvbWUtY29udGFpbmVyLCAjaG9tZS1jb250ZW50e1xcclxcblxcdFxcdGhlaWdodDogY2FsYygxMDB2aCk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxvcmE6NzAwaXxSYWxld2F5JmRpc3BsYXk9c3dhcCk7XCIsIFwiXCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAvKnRvcDogMy41cmVtOyovXFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNGRkZGRkYsIDBweCAwcHggMnB4IDNweCAjOTY5Njk2LCAwcHggMHB4IDNweCA1cHggIzAwMDAwMDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNGRkZGRkYsIDBweCAwcHggMnB4IDNweCAjOTY5Njk2LCAwcHggMHB4IDNweCA1cHggIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNGRkZGRkYsIDBweCAwcHggMnB4IDNweCAjOTY5Njk2LCAwcHggMHB4IDNweCA1cHggIzAwMDAwMDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNGRkZGRkYsIDBweCAwcHggMnB4IDNweCAjOTY5Njk2LCAwcHggMHB4IDNweCA1cHggIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNGRkZGRkYsIDBweCAwcHggMnB4IDNweCAjOTY5Njk2LCAwcHggMHB4IDNweCA1cHggIzAwMDAwMDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNGRkZGRkYsIDBweCAwcHggMnB4IDNweCAjOTY5Njk2LCAwcHggMHB4IDNweCA1cHggIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI0ZGRkZGRiwgMHB4IDBweCAycHggM3B4ICM5Njk2OTYsIDBweCAwcHggM3B4IDVweCAjMDAwMDAwO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI0ZGRkZGRiwgMHB4IDBweCAycHggM3B4ICM5Njk2OTYsIDBweCAwcHggM3B4IDVweCAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm5vLWRpc3BsYXkuaGlkZS1wbmcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tZGlzcGxheS5oaWRlLXN2ZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZHJvcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHotaW5kZXg6IDIwMDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAvKmRpc3BsYXk6IG5vbmU7Ki9cXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgLypvcGFjaXR5OiAwLjc7Ki9cXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5iYWNrZHJvcC5zaG93e1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmQ4MTM5NzEzZTNiOTk5NmE0ODE2YzVkMzg3MTBlMDkucG5nXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWVudS1jb250YWluZXJ7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWluLWhlaWdodDogMjVyZW07XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtY29udGVudHtcXHJcXG5cXHRoZWlnaHQ6IDI1cmVtO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1mbGV4LWNvbnRhaW5lcntcXHJcXG5cXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtaGVhZGVyLCAjbWVudS1wYXJhZ3JhcGh7XFxyXFxuXFx0LyptYXJnaW46IDAgYXV0bzsqL1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxyXFxuXFx0I21lbnUtY29udGFpbmVyLCAjbWVudS1jb250ZW50e1xcclxcblxcdFxcdC8qaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTsqL1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbiIsImltcG9ydCAnIXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vaG9tZS5jc3MnO1xyXG5cclxuaW1wb3J0IFBpenphSG9tZUJnIGZyb20gJy4vaW1hZ2VzL3BpenphLWhvbWUtYmcucG5nJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcclxuXHJcblxyXG5cclxubGV0IG1lbnUgPSBuZXcgTWVudSgpO1xyXG5sZXQgY29udGFjdCA9IG5ldyBDb250YWN0KCk7XHJcblxyXG5jbGFzcyBIb21lIHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG5cdFx0aG9tZVNlY3Rpb24uc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtQaXp6YUhvbWVCZ30pYDtcclxuXHRcdGhvbWVTZWN0aW9uLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcclxuXHRcdC8vIGhvbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItc2VjdGlvblwiKTtcclxuXHRcdGhvbWVTZWN0aW9uLmlkID0gXCJob21lLWNvbnRhaW5lclwiO1xyXG5cdFx0aG9tZVNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGBcclxuXHRcdFx0XHQ8ZGl2IGlkPVwiaG9tZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICBcdDxkaXYgaWQ9XCJob21lLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBcdDxoMSBpZD1cImhvbWUtaGVhZGVyXCI+PHNwYW4gaWQ9XCJob21lLWhlYWRlci1icmVha1wiPkF1dGhlbnRpYyA8L3NwYW4+SXRhbGlhbiBQaXp6YTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgXHQ8cCBpZD1cImhvbWUtcGFyYWdyYXBoXCI+V2UgZHJlYW0gdG8gc2VydmUgb25seSB0aGUgYmVzdCBmb29kIHRvIG91ciBjdXN0b21lcnMhPC9wPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImhvbWUtYnV0dG9uXCI+VmlldyBNZW51PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0YCk7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5hcHBlbmRDaGlsZChob21lU2VjdGlvbik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZighKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1jb250YWluZXJcIikpKSB7XHJcblx0XHRcdFx0Ly8gY2hlY2sgdGhlIG90aGVyIGNvbnRhaW5lcnMgaWYgdGhleSBleGlzdCBhbmQgcmVtb3ZlIHRoZW1cclxuXHRcdFx0XHQvLyBhZnRlcndhcmRzLCBSZW5kZXIgdGhlIHNlY3Rpb25cclxuXHRcdFx0XHRpZighIShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtY29udGFpbmVyXCIpKSkge1xyXG5cdFx0XHRcdFx0bGV0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWNvbnRhaW5lclwiKTtcclxuXHRcdFx0XHRcdGhvbWVTZWN0aW9uLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaG9tZVNlY3Rpb24pO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJob21lIHJlbW92ZSBBY3RpdmF0ZWRcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKCEhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1jb250YWluZXJcIikpKSB7XHJcblx0XHRcdFx0XHRjb250YWN0LnJlbW92ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtZW51LnJlbmRlcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdH1cclxuXHRyZW1vdmUoKXtcclxuXHRcdGxldCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1jb250YWluZXJcIik7XHJcblx0XHRob21lU2VjdGlvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGhvbWVTZWN0aW9uKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiaG9tZSByZW1vdmUgQWN0aXZhdGVkXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0ICchc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi9uYXYuY3NzJztcclxuXHJcbmNsYXNzIE5hdmlnYXRpb24ge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblx0XHRuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm1haW4taGVhZGVyXCIpO1xyXG5cdFx0bmF2YmFyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgXHJcblx0XHRcdDxuYXYgY2xhc3M9XCJtYWluLW5hdlwiPlxyXG4gICAgICAgICAgICA8IS0tICBUaGUgYW5jaG9yIHRhZyBuZWVkcyB0byBsaW5rIHRvIHRoZSBwYWdlIHRvcC0tPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGlkPVwibmF2LXRpdGxlXCI+R2lvcm5vPC9hPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm5hdi1tZW51XCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclJlc3BvbnNpdmVcIj5NZW51PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIGlkPVwibmF2LWJhY2tkcm9wXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdi1pdGVtc1wiIGlkPVwibmF2YmFyUmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICBcdDxsaT48YSBjbGFzcz1cIm5hdi1pdGVtXCIgaHJlZj1cIiNcIj5ob21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJuYXYtaXRlbVwiIGhyZWY9XCIjXCI+bWVudTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwibmF2LWl0ZW1cIiBocmVmPVwiI1wiPmNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9uYXY+XHJcblx0XHRgKTtcclxuXHRcdFxyXG5cdFx0bGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcblx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuYXZiYXIsIG1haW5Db250ZW50KTtcclxuXHRcdC8vIERvbSBlbGVtZW50cyBvZiB0aGUgbmF2aWdhdGlvbiBiYXJcclxuXHRcdGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LXRpdGxlXCIpO1xyXG5cdFx0bGV0IG1lbnVidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1tZW51XCIpO1xyXG5cdFx0bGV0IG5hdkJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYmFja2Ryb3BcIik7XHJcblx0XHRsZXQgbWVudWl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbXNcIik7XHJcblx0XHRsZXQgbWVudWl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1pdGVtXCIpO1xyXG5cclxuXHJcblx0XHRmdW5jdGlvbiBzaG93TWVudSgpIHtcclxuXHRcdFx0bWVudWl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG5cdFx0XHRtZW51YnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xyXG5cdFx0XHRuYXZCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gaGlkZU1lbnUoKSB7IFxyXG5cdFx0XHRtZW51aXRlbXMuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcblx0XHRcdG1lbnVidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xyXG5cdFx0XHRuYXZCYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuXHRcdH1cclxuXHJcblx0XHRtZW51YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZigobWVudWJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpKSA9PT0gXCJmYWxzZVwiKSB7XHJcblx0XHRcdFx0c2hvd01lbnUoKTtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJtZW51IGhhcyBiZWVuIHNob3duXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0aGlkZU1lbnUoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm1lbnUgaGFzIGJlZW4gaGlkZGVuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcdFx0XHJcblxyXG5cdFx0bmF2QmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aGlkZU1lbnUoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm1lbnUgaGFzIGJlZW4gaGlkZGVuXCIpO1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiaW1wb3J0ICchc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi9tZW51LmNzcyc7XHJcblxyXG5jbGFzcyBNZW51IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG5cdFx0Ly8gbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNsaWRlci1zZWN0aW9uXCIpO1xyXG5cdFx0bWVudVNlY3Rpb24uaWQgPSBcIm1lbnUtY29udGFpbmVyXCI7XHJcblx0XHRtZW51U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYFxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJtZW51LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIFx0PGgxIGlkPVwibWVudS1oZWFkZXJcIj5NZW51PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIm1lbnUtcGFyYWdyYXBoXCI+Z29vZGJ5ZSB0byBkcnVncywgZW1icmFjZSBwaXp6YTwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdGApO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xyXG5cdH1cclxuXHRyZW1vdmUoKXtcclxuXHRcdGxldCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1jb250YWluZXJcIik7XHJcblx0XHRtZW51U2VjdGlvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG1lbnVTZWN0aW9uKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gSW1wb3J0IEpTIGZpbGVzXHJcbmltcG9ydCAnLi9zaGFyZWQuanMnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdi5qcyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XHJcblxyXG5cclxubGV0IG5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbigpO1xyXG5sZXQgaG9tZSA9IG5ldyBIb21lKCk7XHJcbmxldCBtZW51ID0gbmV3IE1lbnUoKTtcclxubGV0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xyXG5cclxubmF2aWdhdGlvbi5yZW5kZXIoKTtcclxuaG9tZS5yZW5kZXIoKTtcclxuXHJcbi8vIG1lbnUucmVuZGVyKCk7XHJcbi8vIGNvbnRhY3QucmVuZGVyKCk7XHJcblxyXG5sZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2LWl0ZW1cIik7XHJcbmZvciAobGV0IGl0ZW0gb2YgbmF2SXRlbXMpe1xyXG5cdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBuYXZJdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZihuYXZJdGVtc1tpXSA9PT0gZXZlbnQudGFyZ2V0KSB7XHJcblx0XHRcdFx0c3dpdGNoIChpKXtcclxuXHRcdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgaG9tZSBjb250YWluZXIgZXhpc3RzXHJcblx0XHRcdFx0XHRcdGlmKCEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWNvbnRhaW5lclwiKSkpIHtcclxuXHRcdFx0XHRcdFx0IC8vIGNoZWNrIHRoZSBvdGhlciBjb250YWluZXJzIGlmIHRoZXkgZXhpc3QgYW5kIHJlbW92ZSB0aGVtXHJcblx0XHRcdFx0XHRcdFx0IC8vIGFmdGVyd2FyZHMsIFJlbmRlciB0aGUgc2VjdGlvblxyXG5cdFx0XHRcdFx0XHRcdGlmKCEhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1jb250YWluZXJcIikpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZW51LnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZighIShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtY29udGFpbmVyXCIpKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCBcdGhvbWUucmVuZGVyKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRcdC8vIGNoZWNrIGlmIG1lbnUgY29udGFpbmVyIGV4aXN0c1xyXG5cdFx0XHRcdFx0XHRpZighKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1jb250YWluZXJcIikpKSB7XHJcblx0XHRcdFx0XHRcdCAvLyBjaGVjayB0aGUgb3RoZXIgY29udGFpbmVycyBpZiB0aGV5IGV4aXN0IGFuZCByZW1vdmUgdGhlbVxyXG5cdFx0XHRcdFx0XHRcdCAvLyBhZnRlcndhcmRzLCBSZW5kZXIgdGhlIHNlY3Rpb25cclxuXHRcdFx0XHRcdFx0XHRpZighIShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtY29udGFpbmVyXCIpKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aG9tZS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYoISEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWNvbnRhaW5lclwiKSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRhY3QucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQgXHRtZW51LnJlbmRlcigpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHQvLyBjaGVjayBpZiBjb250YWN0IGNvbnRhaW5lciBleGlzdHNcclxuXHRcdFx0XHRcdFx0aWYoIShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtY29udGFpbmVyXCIpKSkge1xyXG5cdFx0XHRcdFx0XHQgLy8gY2hlY2sgdGhlIG90aGVyIGNvbnRhaW5lcnMgaWYgdGhleSBleGlzdCBhbmQgcmVtb3ZlIHRoZW1cclxuXHRcdFx0XHRcdFx0XHQgLy8gYWZ0ZXJ3YXJkcywgUmVuZGVyIHRoZSBzZWN0aW9uXHJcblx0XHRcdFx0XHRcdFx0aWYoISEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWNvbnRhaW5lclwiKSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lbnUucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmKCEhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1jb250YWluZXJcIikpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRob21lLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0IFx0Y29udGFjdC5yZW5kZXIoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtdGl0bGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcblx0aWYoIShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtY29udGFpbmVyXCIpKSkge1xyXG5cdFx0Ly8gY2hlY2sgdGhlIG90aGVyIGNvbnRhaW5lcnMgaWYgdGhleSBleGlzdCBhbmQgcmVtb3ZlIHRoZW1cclxuXHRcdC8vIGFmdGVyd2FyZHMsIFJlbmRlciB0aGUgc2VjdGlvblxyXG5cdFx0aWYoISEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWNvbnRhaW5lclwiKSkpIHtcclxuXHRcdFx0bWVudS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHRcdGlmKCEhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1jb250YWluZXJcIikpKSB7XHJcblx0XHRcdGNvbnRhY3QucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRob21lLnJlbmRlcigpO1xyXG5cdH1cdFxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9