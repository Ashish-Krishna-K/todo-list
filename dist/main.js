/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/delete-icon.svg */ "./src/images/delete-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/add-new.svg */ "./src/images/add-new.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/file-edit.svg */ "./src/images/file-edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,300;1,500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 15fr;\n    font-family: 'Roboto', sans-serif;\n}\n\nheader {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    border: 1px solid black;\n    background-color: olive;\n    padding: 12px 48px;\n    font-size: 2rem;\n    font-weight:900;\n}\n\ninput,\ntextarea {\n    background-color: beige;\n    padding: 8px;\n    font-family: 'Roboto', sans-serif;\n    font-weight:300;\n}\n\n#sidebar {\n    border: 1px solid black;\n    grid-column: 1 / 2;\n    background-color: #663300;\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n    gap: 24px;\n\n    color: beige;\n}\n\n#sidebar h2 {\n    padding: 12px;\n    text-align: center;\n\n    font-weight:700;\n    \n}\n\n#sidebar li {\n    display: flex;\n    justify-content: space-between;\n    padding: 4px;\n}\n\n#new-project-form.hide{\n    display: none;\n}\n\n#new-project-form.show{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n#create-project {\n    padding: 4px 12px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 1rem;\n    background-color: yellow;\n    color: #663300;\n}\n\n#create-project:hover {\n    background-color: green;\n    color: yellow;\n    box-shadow: 0 0 5px 2px yellow;\n}\n\n#delete-project {\n    width: 30px;\n    height: 30px;\n    border: none;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n    background-size: cover;\n    \n}\n\n#delete-project:hover {\n    box-shadow: 0 0 10px 1px red;\n}\n\n.all-projects{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    border-radius: 50px;\n\n    font-weight:500;\n\n}\n\n.all-projects:hover {\n    box-shadow: 0 0 5px 1px beige;\n    font-size: 1.5rem;\n}\n\n#new-item {\n    width: 100px;\n    height: 100px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    border: none;\n    border-radius: 100px;\n}\n\n#new-item:hover {\n    box-shadow: 0 0 50px 10px black;\n    background-color: greenyellow;\n}\n\nmain {\n    border: 1px solid black;\n    background-color: beige;\n    padding: 12px;\n\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: 1fr 5fr;\n}\n\nmain h1 {\n    padding: 12px;\n    justify-self: center;\n    font-weight:700;\n}\n\n#new-item {\n    justify-self: end;\n}\n\nul {\n    list-style: none;\n}\n\n#new-item-form.hide {\n    display: none;\n}\n\n#new-item-form.show {\n    padding: 36px;\n    background-color: olive;\n    color: #663300;\n    border: 1px solid black;\n    box-shadow: 0 0 50px 10px #663300;\n    border-radius: 20px;\n\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-column: 2 / 3;\n    gap: 24px;\n    align-items: center;\n\n\n    position: absolute;\n    left: 40%;\n    top: 30%;\n\n    font: weight 400;\n}\n\n#new-item-form li {\n    display: flex;\n    gap: 12px;\n}\n\n\n#new-item-form label {\n    font-size: 1.5rem;\n}\n\n#form-heading {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n\n    font-weight: 500;\n}\n\n#form-heading>h2{\n    flex: 1;\n    text-align: center;\n    font-size: 3rem;\n}\n\n#cancel {\n    align-self: center;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    width: 40px;\n    height: 40px;\n    border: none;\n}\n\n#cancel:hover{\n    box-shadow: 0 0 5px 2px black;\n}\n\n\n#create-item-div {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#create-item {\n    padding: 8px 24px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 2rem;\n    background-color: yellow;\n    border: none;\n    color: blue;\n}\n\n\n#create-item:hover {\n    background-color: blue;\n    color: yellow;\n    box-shadow: 0 0 10px 5px yellow;\n}\n\n\n#todo-items {\n    grid-area: 2 / 1 / 3 / 2;\n}\n\n#todo-items ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n#todo-items li {\n    padding: 8px;\n\n    border: 1px solid black;\n    display: flex;\n    gap: 4px;\n\n    border-radius: 5px;\n    box-shadow: 0 0 1px 1px black;\n}\n\n#todo-items #task-display {\n    flex: 1;\n\n    font-weight:300;\n    padding: 0 24px;\n\n    font-weight: bold;\n\n}\n\n#todo-items #task-display.checked {\n    text-decoration: line-through;\n\n    font-weight:300;\n    font-style: italic;\n\n}\n\n.high {\n    background-color: #ffc2b3;\n}\n\n.medium {\n    background-color: #ffffb3;\n}\n\n.low {\n    background-color: #b3ffb3;\n}\n\n.edit-item {\n    height: 20px;\n    width: 20px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: cover;\n    border: none;\n}\n\n.edit-item:hover {\n    box-shadow: 0 0 1px 1px black;\n}\n\n.delete-item {\n    height: 20px;\n    width: 20px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    border: none;\n}\n\n.delete-item:hover {\n    box-shadow: 0 0 1px 1px red;\n}\n\n.active-project {\n    font-weight:500;\n    font-style: italic;\n    border-radius: 50px;\n    box-shadow: 0 0 1px 1px beige;\n}\n\n\n#new-project {\n    border: 1px solid blue;\n    padding: 4px 12px;\n    background-color: greenyellow;\n    color: blue;\n    font-family: inherit;\n    font-weight: 700;\n    font-size: 2rem;\n    align-self: center;\n    border-radius: 100px;\n}\n\n#new-project:hover {\n    background-color: blue;\n    color: greenyellow;\n    box-shadow: 0 0 5px 2px greenyellow;\n}\n\n#project-name,\n#title,\n#due-date {\n    border-radius: 50px;\n    box-shadow: 0 0 10px 3px black;\n}\n\ntextarea {\n    box-shadow: 0 0 10px 3px black;\n}\n\ntextarea:focus,\n#project-name:focus,\n#title:focus,\n#due-date:focus,\n#textarea:focus {\n    border: none;\n    padding: 24px;\n    box-shadow: 0 0 10px 5px yellow;\n}\n\n#high:hover,\n#medium:hover,\n#low:hover {\n    width: 25px;\n}\n\n#items-parent input {\n    width: 25px;\n    height: 25px;\n    background-color: beige;\n}\n\n#cancel-project {\n    padding: 4px 12px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 1rem;\n    background-color: yellow;\n    color: #663300;\n}\n\n#cancel-project:hover {\n    background-color: red;\n    color: yellow;\n    box-shadow: 0 0 5px 2px yellow;\n}\n\n\np {\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;;IAEI,uBAAuB;IACvB,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,SAAS;;IAET,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;;IAElB,eAAe;;AAEnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;IACxB,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,6DAAmD;IACnD,sBAAsB;;AAE1B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,mBAAmB;;IAEnB,eAAe;;AAEnB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mDAAqC;IACrC,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,+BAA+B;IAC/B,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;;IAEb,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,cAAc;IACd,uBAAuB;IACvB,iCAAiC;IACjC,mBAAmB;;IAEnB,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,SAAS;IACT,mBAAmB;;;IAGnB,kBAAkB;IAClB,SAAS;IACT,QAAQ;;IAER,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;;AAGA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;;IAEnB,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,mDAAmC;IACnC,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;IACxB,YAAY;IACZ,WAAW;AACf;;;AAGA;IACI,sBAAsB;IACtB,aAAa;IACb,+BAA+B;AACnC;;;AAGA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,YAAY;;IAEZ,uBAAuB;IACvB,aAAa;IACb,QAAQ;;IAER,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,OAAO;;IAEP,eAAe;IACf,eAAe;;IAEf,iBAAiB;;AAErB;;AAEA;IACI,6BAA6B;;IAE7B,eAAe;IACf,kBAAkB;;AAEtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mDAAuC;IACvC,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mDAAyC;IACzC,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;AACjC;;;AAGA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,6BAA6B;IAC7B,WAAW;IACX,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;;;IAGI,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;;;;;IAKI,YAAY;IACZ,aAAa;IACb,+BAA+B;AACnC;;AAEA;;;IAGI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;IACxB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,8BAA8B;AAClC;;;AAGA;IACI,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,300;1,500&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 15fr;\n    font-family: 'Roboto', sans-serif;\n}\n\nheader {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    border: 1px solid black;\n    background-color: olive;\n    padding: 12px 48px;\n    font-size: 2rem;\n    font-weight:900;\n}\n\ninput,\ntextarea {\n    background-color: beige;\n    padding: 8px;\n    font-family: 'Roboto', sans-serif;\n    font-weight:300;\n}\n\n#sidebar {\n    border: 1px solid black;\n    grid-column: 1 / 2;\n    background-color: #663300;\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n    gap: 24px;\n\n    color: beige;\n}\n\n#sidebar h2 {\n    padding: 12px;\n    text-align: center;\n\n    font-weight:700;\n    \n}\n\n#sidebar li {\n    display: flex;\n    justify-content: space-between;\n    padding: 4px;\n}\n\n#new-project-form.hide{\n    display: none;\n}\n\n#new-project-form.show{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n#create-project {\n    padding: 4px 12px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 1rem;\n    background-color: yellow;\n    color: #663300;\n}\n\n#create-project:hover {\n    background-color: green;\n    color: yellow;\n    box-shadow: 0 0 5px 2px yellow;\n}\n\n#delete-project {\n    width: 30px;\n    height: 30px;\n    border: none;\n    background: url(./images/delete-icon.svg) no-repeat;\n    background-size: cover;\n    \n}\n\n#delete-project:hover {\n    box-shadow: 0 0 10px 1px red;\n}\n\n.all-projects{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    border-radius: 50px;\n\n    font-weight:500;\n\n}\n\n.all-projects:hover {\n    box-shadow: 0 0 5px 1px beige;\n    font-size: 1.5rem;\n}\n\n#new-item {\n    width: 100px;\n    height: 100px;\n    background: url(./images/add-new.svg);\n    border: none;\n    border-radius: 100px;\n}\n\n#new-item:hover {\n    box-shadow: 0 0 50px 10px black;\n    background-color: greenyellow;\n}\n\nmain {\n    border: 1px solid black;\n    background-color: beige;\n    padding: 12px;\n\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: 1fr 5fr;\n}\n\nmain h1 {\n    padding: 12px;\n    justify-self: center;\n    font-weight:700;\n}\n\n#new-item {\n    justify-self: end;\n}\n\nul {\n    list-style: none;\n}\n\n#new-item-form.hide {\n    display: none;\n}\n\n#new-item-form.show {\n    padding: 36px;\n    background-color: olive;\n    color: #663300;\n    border: 1px solid black;\n    box-shadow: 0 0 50px 10px #663300;\n    border-radius: 20px;\n\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-column: 2 / 3;\n    gap: 24px;\n    align-items: center;\n\n\n    position: absolute;\n    left: 40%;\n    top: 30%;\n\n    font: weight 400;\n}\n\n#new-item-form li {\n    display: flex;\n    gap: 12px;\n}\n\n\n#new-item-form label {\n    font-size: 1.5rem;\n}\n\n#form-heading {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n\n    font-weight: 500;\n}\n\n#form-heading>h2{\n    flex: 1;\n    text-align: center;\n    font-size: 3rem;\n}\n\n#cancel {\n    align-self: center;\n    background: url(./images/close.svg);\n    background-size: cover;\n    width: 40px;\n    height: 40px;\n    border: none;\n}\n\n#cancel:hover{\n    box-shadow: 0 0 5px 2px black;\n}\n\n\n#create-item-div {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#create-item {\n    padding: 8px 24px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 2rem;\n    background-color: yellow;\n    border: none;\n    color: blue;\n}\n\n\n#create-item:hover {\n    background-color: blue;\n    color: yellow;\n    box-shadow: 0 0 10px 5px yellow;\n}\n\n\n#todo-items {\n    grid-area: 2 / 1 / 3 / 2;\n}\n\n#todo-items ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n#todo-items li {\n    padding: 8px;\n\n    border: 1px solid black;\n    display: flex;\n    gap: 4px;\n\n    border-radius: 5px;\n    box-shadow: 0 0 1px 1px black;\n}\n\n#todo-items #task-display {\n    flex: 1;\n\n    font-weight:300;\n    padding: 0 24px;\n\n    font-weight: bold;\n\n}\n\n#todo-items #task-display.checked {\n    text-decoration: line-through;\n\n    font-weight:300;\n    font-style: italic;\n\n}\n\n.high {\n    background-color: #ffc2b3;\n}\n\n.medium {\n    background-color: #ffffb3;\n}\n\n.low {\n    background-color: #b3ffb3;\n}\n\n.edit-item {\n    height: 20px;\n    width: 20px;\n    background: url(./images/file-edit.svg);\n    background-size: cover;\n    border: none;\n}\n\n.edit-item:hover {\n    box-shadow: 0 0 1px 1px black;\n}\n\n.delete-item {\n    height: 20px;\n    width: 20px;\n    background: url(./images/delete-icon.svg);\n    background-size: cover;\n    border: none;\n}\n\n.delete-item:hover {\n    box-shadow: 0 0 1px 1px red;\n}\n\n.active-project {\n    font-weight:500;\n    font-style: italic;\n    border-radius: 50px;\n    box-shadow: 0 0 1px 1px beige;\n}\n\n\n#new-project {\n    border: 1px solid blue;\n    padding: 4px 12px;\n    background-color: greenyellow;\n    color: blue;\n    font-family: inherit;\n    font-weight: 700;\n    font-size: 2rem;\n    align-self: center;\n    border-radius: 100px;\n}\n\n#new-project:hover {\n    background-color: blue;\n    color: greenyellow;\n    box-shadow: 0 0 5px 2px greenyellow;\n}\n\n#project-name,\n#title,\n#due-date {\n    border-radius: 50px;\n    box-shadow: 0 0 10px 3px black;\n}\n\ntextarea {\n    box-shadow: 0 0 10px 3px black;\n}\n\ntextarea:focus,\n#project-name:focus,\n#title:focus,\n#due-date:focus,\n#textarea:focus {\n    border: none;\n    padding: 24px;\n    box-shadow: 0 0 10px 5px yellow;\n}\n\n#high:hover,\n#medium:hover,\n#low:hover {\n    width: 25px;\n}\n\n#items-parent input {\n    width: 25px;\n    height: 25px;\n    background-color: beige;\n}\n\n#cancel-project {\n    padding: 4px 12px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 1rem;\n    background-color: yellow;\n    color: #663300;\n}\n\n#cancel-project:hover {\n    background-color: red;\n    color: yellow;\n    box-shadow: 0 0 5px 2px yellow;\n}\n\n\np {\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formBtnsInts": () => (/* binding */ formBtnsInts),
/* harmony export */   "projectInts": () => (/* binding */ projectInts)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
// each project item will have the functionality to be selected and deleted



const projectInts = {
    deleteProject: 
    function(e) {
        _projects__WEBPACK_IMPORTED_MODULE_0__.projectsArr.splice(e, 1);
    },
    selectProject:
    function(e) {

        if (!e){
            return _projects__WEBPACK_IMPORTED_MODULE_0__.projectsArr[0];
        }
        return _projects__WEBPACK_IMPORTED_MODULE_0__.projectsArr[e];
    },
    deleteItem:
    function(arr, ind) {
        arr.splice(ind, 1);
    },
    checkItem:
    function(status, label){
        if(status){
            label.classList.add('checked');
        } else {    
            label.classList.remove('checked');
        }
    },
    setMainProject:
    function(nodeList, title) {
    nodeList.forEach((node) => {
        node.classList.remove('active-project');

        if(node.textContent === title){
            node.classList.add('active-project');
        };
    });
}
}

// each todo item will have the functionality to be checked, edited and deleted

// clicking new project in the sidebar will make a form appear which will accept a project name and a submit button
// clicking the submit will do the following
// 1. create a new project object which will have a title property(accepts the input value) and a tasks array
// 2. appends the new project to the projects array
// 3. removes the current sidebar elements and re-renders it
// 4. renders the main content area

const formBtnsInts = {

    showFrm:
    function(frm) {
        frm.setAttribute('hidden', false);
        frm.className = 'show';
    },
    hideFrm:
    function(frm) {
        frm.setAttribute('hidden', true);
        frm.className = 'hide';
    },
    createNewProject:
    function(input) {
        // when create project button is pressed it should:
        // 1. create a new project and push it to projects array
        // 2. clear the input field
        // 3. hide the form
        // 4. re-render the sidebar with the newly created project visible
        _projects__WEBPACK_IMPORTED_MODULE_0__.projectsLogic.createProject(input.value);
        input.value = ''
    },

    // the main content area will have a new item button which when pressed will render a form that accepts the following inputs:
    // a. title
    // b. description
    // c. due date
    // d. priority
    // e. projects dropdown

    resetItemFrm:
    function(title, desc, date, high, med, low, frm) {
        title.value = '';
        desc.value = '';
        date.value = '';
        high.checked = false;
        med.checked = false;
        low.checked = false
    },
    resetProjectFrom:
    function(input) {
        input = '';
    },
    getPriorityValue:
    function(a, b, c) {
        if (a.checked) {
            return 'high'
        } else if (b.checked) {
            return 'medium'
        } else if (c.checked) {
            return 'low'
        } else {
            return 'low'
        }
    },


};





/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsArr": () => (/* binding */ projectsArr),
/* harmony export */   "projectsLogic": () => (/* binding */ projectsLogic)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


let projectsArr = [];

class NewProject {
    constructor(title) {
        this.title = title;
        this.tasks = []
    }
};

projectsArr.push(new NewProject('Home'));


const projectsLogic = {
    createProject:
    function (title) {
        projectsArr.push(new NewProject(title));
    },
    getCurrentProject:
    function(name) {
        let newArr = projectsArr.filter((project) => {
            if (project.title === name) {
                return true;
            }
        });
        return newArr[0];
    },
    replaceProjectsArr: 
    function() {

        const loadedArray = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].loadFromStorage();

        projectsArr.splice(0, projectsArr.length, ...loadedArray)
    }
}



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storageFunctions = {
    saveToStorage:
    function(data) {
        let savedString = JSON.stringify(data);

        if (localStorage.getItem('projects-array')) {
            localStorage.removeItem('projects-array');
        };

        localStorage.setItem('projects-array', savedString);

        console.log(`An item was SAVED to localStorage, please check application tab for details`)
    },
    loadFromStorage:
    function(){
        let loadedString = localStorage.getItem('projects-array');
        
        console.log(`An item was loaded from localStorage`);

        return JSON.parse(loadedString);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageFunctions);

/***/ }),

/***/ "./src/todo-items.js":
/*!***************************!*\
  !*** ./src/todo-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItemsInts": () => (/* binding */ todoItemsInts)
/* harmony export */ });
class NewToDoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

}

const todoItemsInts = {
    createTodoItem:
    function(title, description, dueDate, priority, project) {
        const activeArr = project.tasks;

        activeArr.push(new NewToDoItem(title, description, dueDate, priority))
    },
    editTodoItem:
    function(activeItem, title, desc, dueDate, priority) {
        activeItem.title = title;
        activeItem.description = desc;
        activeItem.dueDate = dueDate;
        activeItem.priority = priority
    },
    editStatus:
    function(activeTask, status) {
        activeTask.completed = status;
    },
    setPriorityClass:
    function(priority, taskNode){
        switch (priority) {
            case 'high':
                taskNode.className = 'high';
                break;
            case 'medium':
                taskNode.className = 'medium';
                break;
            case 'low':
                taskNode.className = 'low';
        } 
    },
}




/***/ }),

/***/ "./src/images/add-new.svg":
/*!********************************!*\
  !*** ./src/images/add-new.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "057fbbe813d06c74ac0c.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/images/delete-icon.svg":
/*!************************************!*\
  !*** ./src/images/delete-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da94ebbb70a69c7b999e.svg";

/***/ }),

/***/ "./src/images/file-edit.svg":
/*!**********************************!*\
  !*** ./src/images/file-edit.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eff3b629ad11791305e2.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _todo_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-items */ "./src/todo-items.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/storage.js");







// when page first loads sidebar and main DOM elements should be rendered

console.log('initial save');
_storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveToStorage(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr);

const render = {
    
    projectsListDiv: document.querySelector('#projects-list'),
    
    titleDiv: document.querySelector('#project-title'),

    itemsDiv: document.querySelector('#todo-items'),

    renderSideBar: 
    function () {

        _projects__WEBPACK_IMPORTED_MODULE_1__.projectsLogic.replaceProjectsArr();
        console.log('sidebar was rendered from memory');

        const allProjectsDiv = document.createElement('ul');
        allProjectsDiv.setAttribute('id', 'projects-parent');

        if (render.projectsListDiv.hasChildNodes()) {
            render.projectsListDiv.removeChild(document.querySelector('#projects-parent'));
        }

        // sidebar will iterate over projects array and render a element for each project

        _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr.forEach((project) => {
            const projectDiv = document.createElement('li');
            const projectDivText = document.createElement('div');
            projectDivText.classList.add('all-projects');
            projectDivText.dataset.index = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr.indexOf(project);
            projectDivText.dataset.name = project.title;
            projectDivText.textContent = project.title;
            projectDiv.appendChild(projectDivText);

            const deleteProjectBtn = document.createElement('button');
            deleteProjectBtn.setAttribute('id', 'delete-project');
            deleteProjectBtn.dataset.index = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr.indexOf(project);
            projectDiv.appendChild(deleteProjectBtn);

            allProjectsDiv.appendChild(projectDiv);
            render.projectsListDiv.appendChild(allProjectsDiv);
        });
        const allProjectsList = document.querySelectorAll('.all-projects');

        allProjectsList.forEach(node => node.addEventListener('click', function(e){
            let clickedProjectIndex = e.target.dataset.index;
            render.renderMain(clickedProjectIndex);
            _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.setMainProject(allProjectsList, render.titleDiv.textContent);
        }));

        const delProjectBtns = document.querySelectorAll('#delete-project');
        delProjectBtns.forEach(btn => btn.addEventListener('click', function(){
            let ind = btn.dataset.index;
            if (ind == 0) {
                alert('You cannot delete the home project!');
                return;
            };
            _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.deleteProject(ind);
            console.log('a project was deleted');
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveToStorage(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr);
            render.renderSideBar();
            render.renderMain();
            _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.setMainProject(allProjectsList, render.titleDiv.textContent);
        }));
    },

    // main content will render a project tilte(default will be home) and for all the todo items of the project a checkbox will be rendered

    renderMain: 
    function(index) {

        _projects__WEBPACK_IMPORTED_MODULE_1__.projectsLogic.replaceProjectsArr();
        console.log('items was rendered from memory');

        let a = document.querySelector('#items-parent');

        if (a) {
            render.itemsDiv.removeChild(a);
        }
        
        const allItemsDiv = document.createElement('ul');
        allItemsDiv.setAttribute('id', 'items-parent');
        let currentProject = _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.selectProject(index);
        render.titleDiv.textContent = currentProject.title;
        currentProject.tasks.forEach(task => render.renderCheckbox(task, currentProject.tasks.indexOf(task), allItemsDiv));
        render.itemsDiv.appendChild(allItemsDiv);

        const allEditItemBtns = document.querySelectorAll('.edit-item');
        allEditItemBtns.forEach(btn => btn.addEventListener('click', function(){
            _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.showFrm(formBtns.newItemFrm);
            formBtns.newItemFrm.dataset.status = 'edit';
            formBtns.newItemFrm.dataset.editIndex = btn.dataset.index;
            let activeProjectTask = currentProject.tasks[btn.dataset.index];
            formElements.itemTitle.value = activeProjectTask.title;
            formElements.itemDescription.value = activeProjectTask.description;
            formElements.itemDueDate.value = activeProjectTask.dueDate;
        }));

        const allDeleteItemBtns = document.querySelectorAll('.delete-item');
        allDeleteItemBtns.forEach(btn => btn.addEventListener('click', function(){
            _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.deleteItem(currentProject.tasks, btn.dataset.index);
            console.log('an item was deleted');
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveToStorage(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr);
            
            let activeProject = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsLogic.getCurrentProject(render.titleDiv.textContent);
            let index = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr.indexOf(activeProject);
        
            render.renderMain(index);
            _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.setMainProject(document.querySelectorAll('.all-projects'), render.titleDiv.textContent);
        }));

        const allCheckboxes = document.querySelectorAll('.checkbox');
        allCheckboxes.forEach(btn => btn.addEventListener('click', function(e){
            let status = e.target.checked;
            let label = e.target.nextSibling;
            let activeTask = currentProject.tasks[btn.dataset.index];
            _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.checkItem(status, label);

            _todo_items__WEBPACK_IMPORTED_MODULE_3__.todoItemsInts.editStatus(activeTask, status);
            console.log('an item completion status was changed');
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveToStorage(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr);
        }));
    },

    renderCheckbox:
    function(obj, ind, parent) {
        if (!obj) {
            return;
        }
        const listItem = document.createElement('li');
        listItem.dataset.index = ind;
        
        const box = document.createElement('input');
        box.classList.add('checkbox')
        box.setAttribute('type', 'checkbox');
        box.setAttribute('id', obj.title);
        box.dataset.index = ind;
        box.checked = obj.completed;

        const boxLabel = document.createElement('div');
        boxLabel.setAttribute('id', 'task-display');
        boxLabel.textContent = `task: ${obj.title} is due by: ${obj.dueDate} and has a priority level set to ${obj.priority}`;

        const description = document.createElement('p');
        description.textContent = obj.description;
        description.setAttribute('hidden', true);
        boxLabel.appendChild(description);
                
        boxLabel.addEventListener('click', function(){
            const hidden = description.getAttribute('hidden');

            if (hidden === 'true') {
                description.setAttribute('hidden', false);
                description.style.display = 'block';
            } else {
                description.setAttribute('hidden', true);
                description.style.display = 'none';
            };
        });
        
        const editItemBtn = document.createElement('button');
        editItemBtn.classList.add('edit-item');
        editItemBtn.dataset.index = ind;
        editItemBtn.textContent = '';
        
        const deleteItemBtn = document.createElement('button');
        deleteItemBtn.classList.add('delete-item');
        deleteItemBtn.dataset.index = ind;
        deleteItemBtn.textContent = '';
        
        listItem.appendChild(box);
        listItem.appendChild(boxLabel);
        listItem.appendChild(editItemBtn);
        listItem.appendChild(deleteItemBtn);

        _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.checkItem(obj.completed, boxLabel);
        _todo_items__WEBPACK_IMPORTED_MODULE_3__.todoItemsInts.setPriorityClass(obj.priority, listItem);

        parent.appendChild(listItem);
    },

}

const formBtns = {
    showProjectFrmBtn: document.querySelector('#new-project'),
    showItemsFrmBtn: document.querySelector('#new-item'),
    createProjectBtn: document.querySelector('#create-project'),
    createItemBtn: document.querySelector('#create-item'),
    newProjectFrm: document.querySelector('#new-project-form'),
    newItemFrm: document.querySelector('#new-item-form'),
    cancelNewItemFrm: document.querySelector('#cancel'),
    cancelNewProjectFrm: document.querySelector('#cancel-project'),
}

const formElements = {
    itemTitle: document.querySelector('#title'),
    itemDescription: document.querySelector('#description'),
    itemDueDate: document.querySelector('#due-date'),
    itemHighPriority: document.querySelector('#high'),
    itemMediumPriority: document.querySelector('#medium'),
    itemLowPriority: document.querySelector('#low')    
}

render.renderSideBar();
render.renderMain();
_UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.setMainProject(document.querySelectorAll('.all-projects'), render.titleDiv.textContent);

formBtns.showProjectFrmBtn.addEventListener('click', function(){
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.showFrm(formBtns.newProjectFrm);
});
formBtns.createProjectBtn.addEventListener('click', function(){
    let input = document.querySelector('#project-name');
    if (!input.value) {
        return;
    };
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.createNewProject(input);
    console.log('a new project was created');
    _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveToStorage(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr);
    render.renderSideBar();
    _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.setMainProject(document.querySelectorAll('.all-projects'), render.titleDiv.textContent);
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.hideFrm(formBtns.newProjectFrm);
});
formBtns.showItemsFrmBtn.addEventListener('click', function(){
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.showFrm(formBtns.newItemFrm);
    formBtns.newItemFrm.dataset.status = 'new';
});
formBtns.createItemBtn.addEventListener('click', function(){

    let inputTitle = formElements.itemTitle.value;
    let inputDescription = formElements.itemDescription.value;
    let inputDueDate = formElements.itemDueDate.value;
    let inputPriority = _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.getPriorityValue(formElements.itemHighPriority, formElements.itemMediumPriority, formElements.itemLowPriority);
    
    if (!inputTitle) {
        return;
    } else if (!inputDueDate) {
        return;
    }

    let activeProject = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsLogic.getCurrentProject(render.titleDiv.textContent);
    let index = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr.indexOf(activeProject);
    let status = formBtns.newItemFrm.dataset.status;

    if (status === 'new') {
        _todo_items__WEBPACK_IMPORTED_MODULE_3__.todoItemsInts.createTodoItem(inputTitle, inputDescription, inputDueDate, inputPriority, activeProject);
        console.log('a new item was created');
        _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveToStorage(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr);
    } else if (status === 'edit') {
        let activeItem = activeProject.tasks[formBtns.newItemFrm.dataset.editIndex];
        _todo_items__WEBPACK_IMPORTED_MODULE_3__.todoItemsInts.editTodoItem(activeItem, inputTitle, inputDescription, inputDueDate, inputPriority);
        console.log('an item was edited');
        _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveToStorage(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArr);
    }

    render.renderMain(index);
    _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.setMainProject(document.querySelectorAll('.all-projects'), render.titleDiv.textContent);
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.resetItemFrm(formElements.itemTitle, formElements.itemDescription, formElements.itemDueDate, 
        formElements.itemHighPriority, formElements.itemMediumPriority, formElements.itemLowPriority);
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.hideFrm(formBtns.newItemFrm);
});
formBtns.cancelNewItemFrm.addEventListener('click', function(){
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.resetItemFrm(formElements.itemTitle, formElements.itemDescription, formElements.itemDueDate, 
        formElements.itemHighPriority, formElements.itemMediumPriority, formElements.itemLowPriority);
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.hideFrm(formBtns.newItemFrm);
});
formBtns.cancelNewProjectFrm.addEventListener('click', function(){
    let input = document.querySelector('#project-name');
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.resetProjectFrom(input);
    _UI__WEBPACK_IMPORTED_MODULE_2__.formBtnsInts.hideFrm(formBtns.newProjectFrm);
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZIQUEyQztBQUN2Riw0Q0FBNEMscUhBQXVDO0FBQ25GLDRDQUE0QyxpSEFBcUM7QUFDakYsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNsSyx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQixHQUFHLFVBQVUsb0JBQW9CLHFDQUFxQyxtQ0FBbUMsd0NBQXdDLEdBQUcsWUFBWSx5QkFBeUIsc0JBQXNCLDhCQUE4Qiw4QkFBOEIseUJBQXlCLHNCQUFzQixzQkFBc0IsR0FBRyxzQkFBc0IsOEJBQThCLG1CQUFtQix3Q0FBd0Msc0JBQXNCLEdBQUcsY0FBYyw4QkFBOEIseUJBQXlCLGdDQUFnQyxvQkFBb0IsNkJBQTZCLG1CQUFtQixnQkFBZ0IscUJBQXFCLEdBQUcsaUJBQWlCLG9CQUFvQix5QkFBeUIsd0JBQXdCLFNBQVMsaUJBQWlCLG9CQUFvQixxQ0FBcUMsbUJBQW1CLEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLDJCQUEyQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxxQkFBcUIsd0JBQXdCLDBCQUEwQiwyQkFBMkIsdUJBQXVCLHNCQUFzQiwrQkFBK0IscUJBQXFCLEdBQUcsMkJBQTJCLDhCQUE4QixvQkFBb0IscUNBQXFDLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsbUJBQW1CLDRFQUE0RSw2QkFBNkIsU0FBUywyQkFBMkIsbUNBQW1DLEdBQUcsa0JBQWtCLGNBQWMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLDBCQUEwQix3QkFBd0IsS0FBSyx5QkFBeUIsb0NBQW9DLHdCQUF3QixHQUFHLGVBQWUsbUJBQW1CLG9CQUFvQixrRUFBa0UsbUJBQW1CLDJCQUEyQixHQUFHLHFCQUFxQixzQ0FBc0Msb0NBQW9DLEdBQUcsVUFBVSw4QkFBOEIsOEJBQThCLG9CQUFvQixzQkFBc0IscUNBQXFDLGtDQUFrQyxHQUFHLGFBQWEsb0JBQW9CLDJCQUEyQixzQkFBc0IsR0FBRyxlQUFlLHdCQUF3QixHQUFHLFFBQVEsdUJBQXVCLEdBQUcseUJBQXlCLG9CQUFvQixHQUFHLHlCQUF5QixvQkFBb0IsOEJBQThCLHFCQUFxQiw4QkFBOEIsd0NBQXdDLDBCQUEwQixzQkFBc0IscUNBQXFDLHlCQUF5QixnQkFBZ0IsMEJBQTBCLDZCQUE2QixnQkFBZ0IsZUFBZSx5QkFBeUIsR0FBRyx1QkFBdUIsb0JBQW9CLGdCQUFnQixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyxtQkFBbUIseUJBQXlCLG9CQUFvQiwwQkFBMEIseUJBQXlCLEdBQUcscUJBQXFCLGNBQWMseUJBQXlCLHNCQUFzQixHQUFHLGFBQWEseUJBQXlCLGtFQUFrRSw2QkFBNkIsa0JBQWtCLG1CQUFtQixtQkFBbUIsR0FBRyxrQkFBa0Isb0NBQW9DLEdBQUcsd0JBQXdCLHlCQUF5QixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLGtCQUFrQix3QkFBd0IsMEJBQTBCLDJCQUEyQix1QkFBdUIsc0JBQXNCLCtCQUErQixtQkFBbUIsa0JBQWtCLEdBQUcsMEJBQTBCLDZCQUE2QixvQkFBb0Isc0NBQXNDLEdBQUcsbUJBQW1CLCtCQUErQixHQUFHLG9CQUFvQixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxvQkFBb0IsbUJBQW1CLGdDQUFnQyxvQkFBb0IsZUFBZSwyQkFBMkIsb0NBQW9DLEdBQUcsK0JBQStCLGNBQWMsd0JBQXdCLHNCQUFzQiwwQkFBMEIsS0FBSyx1Q0FBdUMsb0NBQW9DLHdCQUF3Qix5QkFBeUIsS0FBSyxXQUFXLGdDQUFnQyxHQUFHLGFBQWEsZ0NBQWdDLEdBQUcsVUFBVSxnQ0FBZ0MsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQixrRUFBa0UsNkJBQTZCLG1CQUFtQixHQUFHLHNCQUFzQixvQ0FBb0MsR0FBRyxrQkFBa0IsbUJBQW1CLGtCQUFrQixrRUFBa0UsNkJBQTZCLG1CQUFtQixHQUFHLHdCQUF3QixrQ0FBa0MsR0FBRyxxQkFBcUIsc0JBQXNCLHlCQUF5QiwwQkFBMEIsb0NBQW9DLEdBQUcsb0JBQW9CLDZCQUE2Qix3QkFBd0Isb0NBQW9DLGtCQUFrQiwyQkFBMkIsdUJBQXVCLHNCQUFzQix5QkFBeUIsMkJBQTJCLEdBQUcsd0JBQXdCLDZCQUE2Qix5QkFBeUIsMENBQTBDLEdBQUcsd0NBQXdDLDBCQUEwQixxQ0FBcUMsR0FBRyxjQUFjLHFDQUFxQyxHQUFHLDZGQUE2RixtQkFBbUIsb0JBQW9CLHNDQUFzQyxHQUFHLDhDQUE4QyxrQkFBa0IsR0FBRyx5QkFBeUIsa0JBQWtCLG1CQUFtQiw4QkFBOEIsR0FBRyxxQkFBcUIsd0JBQXdCLDBCQUEwQiwyQkFBMkIsdUJBQXVCLHNCQUFzQiwrQkFBK0IscUJBQXFCLEdBQUcsMkJBQTJCLDRCQUE0QixvQkFBb0IscUNBQXFDLEdBQUcsU0FBUyx5QkFBeUIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxjQUFjLGFBQWEsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxXQUFXLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFB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O0FBQ2pDO0FBQ0EsSUFBSSw4REFBOEIsQ0FBQyxrREFBVztBQUM5QztBQUNBLElBQUksMkRBQTBCO0FBQzlCLElBQUkscURBQW9CO0FBQ3hCLENBQUM7QUFDRDtBQUNBLElBQUkscURBQW9CO0FBQ3hCO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsd0JBQXdCLHNFQUErQjtBQUN2RCxnQkFBZ0IsMERBQW1CO0FBQ25DOztBQUVBO0FBQ0EsUUFBUSxxRUFBNEI7QUFDcEM7QUFDQSxRQUFRLDhEQUE4QixDQUFDLGtEQUFXO0FBQ2xELE1BQU07QUFDTjtBQUNBLFFBQVEsbUVBQTBCO0FBQ2xDO0FBQ0EsUUFBUSw4REFBOEIsQ0FBQyxrREFBVztBQUNsRDs7QUFFQTtBQUNBLElBQUksMkRBQTBCO0FBQzlCLElBQUksMERBQXlCO0FBQzdCO0FBQ0EsSUFBSSxxREFBb0I7QUFDeEIsQ0FBQztBQUNEO0FBQ0EsSUFBSSwwREFBeUI7QUFDN0I7QUFDQSxJQUFJLHFEQUFvQjtBQUN4QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksOERBQTZCO0FBQ2pDLElBQUkscURBQW9CO0FBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kZWxldGUtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9hZGQtbmV3LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2ZpbGUtZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwzMDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb2xpdmU7XFxuICAgIHBhZGRpbmc6IDEycHggNDhweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDo5MDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDozMDA7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2MzMwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBnYXA6IDI0cHg7XFxuXFxuICAgIGNvbG9yOiBiZWlnZTtcXG59XFxuXFxuI3NpZGViYXIgaDIge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcXG4gICAgXFxufVxcblxcbiNzaWRlYmFyIGxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1mb3JtLmhpZGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNuZXctcHJvamVjdC1mb3JtLnNob3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgY29sb3I6ICM2NjMzMDA7XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjb2xvcjogeWVsbG93O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCB5ZWxsb3c7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIFxcbn1cXG5cXG4jZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmVkO1xcbn1cXG5cXG4uYWxsLXByb2plY3Rze1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcbiAgICBmb250LXdlaWdodDo1MDA7XFxuXFxufVxcblxcbi5hbGwtcHJvamVjdHM6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCBiZWlnZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNuZXctaXRlbSB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuI25ldy1pdGVtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggMTBweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbm1haW4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbn1cXG5cXG5tYWluIGgxIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcXG59XFxuXFxuI25ldy1pdGVtIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI25ldy1pdGVtLWZvcm0uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNuZXctaXRlbS1mb3JtLnNob3cge1xcbiAgICBwYWRkaW5nOiAzNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGl2ZTtcXG4gICAgY29sb3I6ICM2NjMzMDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCAxMHB4ICM2NjMzMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IDMwJTtcXG5cXG4gICAgZm9udDogd2VpZ2h0IDQwMDtcXG59XFxuXFxuI25ldy1pdGVtLWZvcm0gbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcblxcbiNuZXctaXRlbS1mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNmb3JtLWhlYWRpbmcge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNmb3JtLWhlYWRpbmc+aDJ7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jY2FuY2VsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNjYW5jZWw6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IGJsYWNrO1xcbn1cXG5cXG5cXG4jY3JlYXRlLWl0ZW0tZGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NyZWF0ZS1pdGVtIHtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuXFxuI2NyZWF0ZS1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHllbGxvdztcXG59XFxuXFxuXFxuI3RvZG8taXRlbXMge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxufVxcblxcbiN0b2RvLWl0ZW1zIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbiN0b2RvLWl0ZW1zIGxpIHtcXG4gICAgcGFkZGluZzogOHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggYmxhY2s7XFxufVxcblxcbiN0b2RvLWl0ZW1zICN0YXNrLWRpc3BsYXkge1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICBmb250LXdlaWdodDozMDA7XFxuICAgIHBhZGRpbmc6IDAgMjRweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxufVxcblxcbiN0b2RvLWl0ZW1zICN0YXNrLWRpc3BsYXkuY2hlY2tlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcbiAgICBmb250LXdlaWdodDozMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG59XFxuXFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMmIzO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiMztcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2ZmYjM7XFxufVxcblxcbi5lZGl0LWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5lZGl0LWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCBibGFjaztcXG59XFxuXFxuLmRlbGV0ZS1pdGVtIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZWQ7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCBiZWlnZTtcXG59XFxuXFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCBncmVlbnllbGxvdztcXG59XFxuXFxuI3Byb2plY3QtbmFtZSxcXG4jdGl0bGUsXFxuI2R1ZS1kYXRlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IGJsYWNrO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCBibGFjaztcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsXFxuI3Byb2plY3QtbmFtZTpmb2N1cyxcXG4jdGl0bGU6Zm9jdXMsXFxuI2R1ZS1kYXRlOmZvY3VzLFxcbiN0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHllbGxvdztcXG59XFxuXFxuI2hpZ2g6aG92ZXIsXFxuI21lZGl1bTpob3ZlcixcXG4jbG93OmhvdmVyIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNpdGVtcy1wYXJlbnQgaW5wdXQge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgY29sb3I6ICM2NjMzMDA7XFxufVxcblxcbiNjYW5jZWwtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAycHggeWVsbG93O1xcbn1cXG5cXG5cXG5wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixTQUFTOztJQUVULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOztJQUVsQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiw2REFBbUQ7SUFDbkQsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1COztJQUVuQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1EQUFxQztJQUNyQyxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTs7SUFFYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1CQUFtQjs7O0lBR25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTs7SUFFUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbURBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7O0FBR0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7O0lBRVosdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixRQUFROztJQUVSLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxPQUFPOztJQUVQLGVBQWU7SUFDZixlQUFlOztJQUVmLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSw2QkFBNkI7O0lBRTdCLGVBQWU7SUFDZixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtREFBdUM7SUFDdkMsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1EQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDOztBQUVBOzs7SUFHSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBOzs7OztJQUtJLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBOzs7SUFHSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDUwMDswLDcwMDswLDkwMDsxLDMwMDsxLDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9saXZlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDQ4cHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6OTAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjMzMDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ2FwOiAyNHB4O1xcblxcbiAgICBjb2xvcjogYmVpZ2U7XFxufVxcblxcbiNzaWRlYmFyIGgyIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDo3MDA7XFxuICAgIFxcbn1cXG5cXG4jc2lkZWJhciBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtZm9ybS5oaWRle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtZm9ybS5zaG93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGNvbG9yOiAjNjYzMzAwO1xcbn1cXG5cXG4jY3JlYXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAycHggeWVsbG93O1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3Qge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9kZWxldGUtaWNvbi5zdmcpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgXFxufVxcblxcbiNkZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZWQ7XFxufVxcblxcbi5hbGwtcHJvamVjdHN7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXG5cXG59XFxuXFxuLmFsbC1wcm9qZWN0czpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4IGJlaWdlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI25ldy1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvYWRkLW5ldy5zdmcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn1cXG5cXG4jbmV3LWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCAxMHB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxubWFpbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxufVxcblxcbm1haW4gaDEge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xcbn1cXG5cXG4jbmV3LWl0ZW0ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jbmV3LWl0ZW0tZm9ybS5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI25ldy1pdGVtLWZvcm0uc2hvdyB7XFxuICAgIHBhZGRpbmc6IDM2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9saXZlO1xcbiAgICBjb2xvcjogIzY2MzMwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IDEwcHggIzY2MzMwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRvcDogMzAlO1xcblxcbiAgICBmb250OiB3ZWlnaHQgNDAwO1xcbn1cXG5cXG4jbmV3LWl0ZW0tZm9ybSBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuXFxuI25ldy1pdGVtLWZvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2Zvcm0taGVhZGluZyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2Zvcm0taGVhZGluZz5oMntcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNjYW5jZWwge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9jbG9zZS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNjYW5jZWw6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IGJsYWNrO1xcbn1cXG5cXG5cXG4jY3JlYXRlLWl0ZW0tZGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NyZWF0ZS1pdGVtIHtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuXFxuI2NyZWF0ZS1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHllbGxvdztcXG59XFxuXFxuXFxuI3RvZG8taXRlbXMge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxufVxcblxcbiN0b2RvLWl0ZW1zIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbiN0b2RvLWl0ZW1zIGxpIHtcXG4gICAgcGFkZGluZzogOHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggYmxhY2s7XFxufVxcblxcbiN0b2RvLWl0ZW1zICN0YXNrLWRpc3BsYXkge1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICBmb250LXdlaWdodDozMDA7XFxuICAgIHBhZGRpbmc6IDAgMjRweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxufVxcblxcbiN0b2RvLWl0ZW1zICN0YXNrLWRpc3BsYXkuY2hlY2tlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcbiAgICBmb250LXdlaWdodDozMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG59XFxuXFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMmIzO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiMztcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2ZmYjM7XFxufVxcblxcbi5lZGl0LWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvZmlsZS1lZGl0LnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmVkaXQtaXRlbTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4uZGVsZXRlLWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvZGVsZXRlLWljb24uc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZWQ7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCBiZWlnZTtcXG59XFxuXFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCBncmVlbnllbGxvdztcXG59XFxuXFxuI3Byb2plY3QtbmFtZSxcXG4jdGl0bGUsXFxuI2R1ZS1kYXRlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IGJsYWNrO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCBibGFjaztcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsXFxuI3Byb2plY3QtbmFtZTpmb2N1cyxcXG4jdGl0bGU6Zm9jdXMsXFxuI2R1ZS1kYXRlOmZvY3VzLFxcbiN0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHllbGxvdztcXG59XFxuXFxuI2hpZ2g6aG92ZXIsXFxuI21lZGl1bTpob3ZlcixcXG4jbG93OmhvdmVyIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNpdGVtcy1wYXJlbnQgaW5wdXQge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgY29sb3I6ICM2NjMzMDA7XFxufVxcblxcbiNjYW5jZWwtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAycHggeWVsbG93O1xcbn1cXG5cXG5cXG5wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZWFjaCBwcm9qZWN0IGl0ZW0gd2lsbCBoYXZlIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGJlIHNlbGVjdGVkIGFuZCBkZWxldGVkXG5cbmltcG9ydCB7IHByb2plY3RzQXJyLCBwcm9qZWN0c0xvZ2ljIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgcHJvamVjdEludHMgPSB7XG4gICAgZGVsZXRlUHJvamVjdDogXG4gICAgZnVuY3Rpb24oZSkge1xuICAgICAgICBwcm9qZWN0c0Fyci5zcGxpY2UoZSwgMSk7XG4gICAgfSxcbiAgICBzZWxlY3RQcm9qZWN0OlxuICAgIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICBpZiAoIWUpe1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzQXJyWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9qZWN0c0FycltlXTtcbiAgICB9LFxuICAgIGRlbGV0ZUl0ZW06XG4gICAgZnVuY3Rpb24oYXJyLCBpbmQpIHtcbiAgICAgICAgYXJyLnNwbGljZShpbmQsIDEpO1xuICAgIH0sXG4gICAgY2hlY2tJdGVtOlxuICAgIGZ1bmN0aW9uKHN0YXR1cywgbGFiZWwpe1xuICAgICAgICBpZihzdGF0dXMpe1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICB9IGVsc2UgeyAgICBcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0TWFpblByb2plY3Q6XG4gICAgZnVuY3Rpb24obm9kZUxpc3QsIHRpdGxlKSB7XG4gICAgbm9kZUxpc3QuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG5cbiAgICAgICAgaWYobm9kZS50ZXh0Q29udGVudCA9PT0gdGl0bGUpe1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxufVxuXG4vLyBlYWNoIHRvZG8gaXRlbSB3aWxsIGhhdmUgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gYmUgY2hlY2tlZCwgZWRpdGVkIGFuZCBkZWxldGVkXG5cbi8vIGNsaWNraW5nIG5ldyBwcm9qZWN0IGluIHRoZSBzaWRlYmFyIHdpbGwgbWFrZSBhIGZvcm0gYXBwZWFyIHdoaWNoIHdpbGwgYWNjZXB0IGEgcHJvamVjdCBuYW1lIGFuZCBhIHN1Ym1pdCBidXR0b25cbi8vIGNsaWNraW5nIHRoZSBzdWJtaXQgd2lsbCBkbyB0aGUgZm9sbG93aW5nXG4vLyAxLiBjcmVhdGUgYSBuZXcgcHJvamVjdCBvYmplY3Qgd2hpY2ggd2lsbCBoYXZlIGEgdGl0bGUgcHJvcGVydHkoYWNjZXB0cyB0aGUgaW5wdXQgdmFsdWUpIGFuZCBhIHRhc2tzIGFycmF5XG4vLyAyLiBhcHBlbmRzIHRoZSBuZXcgcHJvamVjdCB0byB0aGUgcHJvamVjdHMgYXJyYXlcbi8vIDMuIHJlbW92ZXMgdGhlIGN1cnJlbnQgc2lkZWJhciBlbGVtZW50cyBhbmQgcmUtcmVuZGVycyBpdFxuLy8gNC4gcmVuZGVycyB0aGUgbWFpbiBjb250ZW50IGFyZWFcblxuY29uc3QgZm9ybUJ0bnNJbnRzID0ge1xuXG4gICAgc2hvd0ZybTpcbiAgICBmdW5jdGlvbihmcm0pIHtcbiAgICAgICAgZnJtLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICBmcm0uY2xhc3NOYW1lID0gJ3Nob3cnO1xuICAgIH0sXG4gICAgaGlkZUZybTpcbiAgICBmdW5jdGlvbihmcm0pIHtcbiAgICAgICAgZnJtLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIGZybS5jbGFzc05hbWUgPSAnaGlkZSc7XG4gICAgfSxcbiAgICBjcmVhdGVOZXdQcm9qZWN0OlxuICAgIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIC8vIHdoZW4gY3JlYXRlIHByb2plY3QgYnV0dG9uIGlzIHByZXNzZWQgaXQgc2hvdWxkOlxuICAgICAgICAvLyAxLiBjcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgcHVzaCBpdCB0byBwcm9qZWN0cyBhcnJheVxuICAgICAgICAvLyAyLiBjbGVhciB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgLy8gMy4gaGlkZSB0aGUgZm9ybVxuICAgICAgICAvLyA0LiByZS1yZW5kZXIgdGhlIHNpZGViYXIgd2l0aCB0aGUgbmV3bHkgY3JlYXRlZCBwcm9qZWN0IHZpc2libGVcbiAgICAgICAgcHJvamVjdHNMb2dpYy5jcmVhdGVQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgIH0sXG5cbiAgICAvLyB0aGUgbWFpbiBjb250ZW50IGFyZWEgd2lsbCBoYXZlIGEgbmV3IGl0ZW0gYnV0dG9uIHdoaWNoIHdoZW4gcHJlc3NlZCB3aWxsIHJlbmRlciBhIGZvcm0gdGhhdCBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgaW5wdXRzOlxuICAgIC8vIGEuIHRpdGxlXG4gICAgLy8gYi4gZGVzY3JpcHRpb25cbiAgICAvLyBjLiBkdWUgZGF0ZVxuICAgIC8vIGQuIHByaW9yaXR5XG4gICAgLy8gZS4gcHJvamVjdHMgZHJvcGRvd25cblxuICAgIHJlc2V0SXRlbUZybTpcbiAgICBmdW5jdGlvbih0aXRsZSwgZGVzYywgZGF0ZSwgaGlnaCwgbWVkLCBsb3csIGZybSkge1xuICAgICAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgaGlnaC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIG1lZC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGxvdy5jaGVja2VkID0gZmFsc2VcbiAgICB9LFxuICAgIHJlc2V0UHJvamVjdEZyb206XG4gICAgZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgaW5wdXQgPSAnJztcbiAgICB9LFxuICAgIGdldFByaW9yaXR5VmFsdWU6XG4gICAgZnVuY3Rpb24oYSwgYiwgYykge1xuICAgICAgICBpZiAoYS5jaGVja2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2hpZ2gnXG4gICAgICAgIH0gZWxzZSBpZiAoYi5jaGVja2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ21lZGl1bSdcbiAgICAgICAgfSBlbHNlIGlmIChjLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnbG93J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdsb3cnXG4gICAgICAgIH1cbiAgICB9LFxuXG5cbn07XG5cblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0SW50cyxcbiAgICBmb3JtQnRuc0ludHMsXG59XG4iLCJpbXBvcnQgc3RvcmFnZUZ1bmN0aW9ucyBmcm9tICcuL3N0b3JhZ2UnO1xuXG5sZXQgcHJvamVjdHNBcnIgPSBbXTtcblxuY2xhc3MgTmV3UHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9XG59O1xuXG5wcm9qZWN0c0Fyci5wdXNoKG5ldyBOZXdQcm9qZWN0KCdIb21lJykpO1xuXG5cbmNvbnN0IHByb2plY3RzTG9naWMgPSB7XG4gICAgY3JlYXRlUHJvamVjdDpcbiAgICBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgcHJvamVjdHNBcnIucHVzaChuZXcgTmV3UHJvamVjdCh0aXRsZSkpO1xuICAgIH0sXG4gICAgZ2V0Q3VycmVudFByb2plY3Q6XG4gICAgZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBsZXQgbmV3QXJyID0gcHJvamVjdHNBcnIuZmlsdGVyKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0FyclswXTtcbiAgICB9LFxuICAgIHJlcGxhY2VQcm9qZWN0c0FycjogXG4gICAgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgbG9hZGVkQXJyYXkgPSBzdG9yYWdlRnVuY3Rpb25zLmxvYWRGcm9tU3RvcmFnZSgpO1xuXG4gICAgICAgIHByb2plY3RzQXJyLnNwbGljZSgwLCBwcm9qZWN0c0Fyci5sZW5ndGgsIC4uLmxvYWRlZEFycmF5KVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0c0FycixcbiAgICBwcm9qZWN0c0xvZ2ljXG59IiwiY29uc3Qgc3RvcmFnZUZ1bmN0aW9ucyA9IHtcbiAgICBzYXZlVG9TdG9yYWdlOlxuICAgIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgbGV0IHNhdmVkU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cy1hcnJheScpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMtYXJyYXknKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMtYXJyYXknLCBzYXZlZFN0cmluZyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYEFuIGl0ZW0gd2FzIFNBVkVEIHRvIGxvY2FsU3RvcmFnZSwgcGxlYXNlIGNoZWNrIGFwcGxpY2F0aW9uIHRhYiBmb3IgZGV0YWlsc2ApXG4gICAgfSxcbiAgICBsb2FkRnJvbVN0b3JhZ2U6XG4gICAgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGxvYWRlZFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cy1hcnJheScpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coYEFuIGl0ZW0gd2FzIGxvYWRlZCBmcm9tIGxvY2FsU3RvcmFnZWApO1xuXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvYWRlZFN0cmluZyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlRnVuY3Rpb25zOyIsImNsYXNzIE5ld1RvRG9JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuXG59XG5cbmNvbnN0IHRvZG9JdGVtc0ludHMgPSB7XG4gICAgY3JlYXRlVG9kb0l0ZW06XG4gICAgZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICAgICBjb25zdCBhY3RpdmVBcnIgPSBwcm9qZWN0LnRhc2tzO1xuXG4gICAgICAgIGFjdGl2ZUFyci5wdXNoKG5ldyBOZXdUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSlcbiAgICB9LFxuICAgIGVkaXRUb2RvSXRlbTpcbiAgICBmdW5jdGlvbihhY3RpdmVJdGVtLCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgYWN0aXZlSXRlbS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBhY3RpdmVJdGVtLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICAgICAgYWN0aXZlSXRlbS5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgYWN0aXZlSXRlbS5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfSxcbiAgICBlZGl0U3RhdHVzOlxuICAgIGZ1bmN0aW9uKGFjdGl2ZVRhc2ssIHN0YXR1cykge1xuICAgICAgICBhY3RpdmVUYXNrLmNvbXBsZXRlZCA9IHN0YXR1cztcbiAgICB9LFxuICAgIHNldFByaW9yaXR5Q2xhc3M6XG4gICAgZnVuY3Rpb24ocHJpb3JpdHksIHRhc2tOb2RlKXtcbiAgICAgICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgICAgICAgICAgdGFza05vZGUuY2xhc3NOYW1lID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgICAgICB0YXNrTm9kZS5jbGFzc05hbWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICAgICAgdGFza05vZGUuY2xhc3NOYW1lID0gJ2xvdyc7XG4gICAgICAgIH0gXG4gICAgfSxcbn1cblxuXG5leHBvcnQge1xuICAgIHRvZG9JdGVtc0ludHNcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IHByb2plY3RzQXJyLCBwcm9qZWN0c0xvZ2ljIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBwcm9qZWN0SW50cywgZm9ybUJ0bnNJbnRzIH0gZnJvbSAnLi9VSSc7XG5pbXBvcnQgeyB0b2RvSXRlbXNJbnRzIH0gZnJvbSAnLi90b2RvLWl0ZW1zJztcbmltcG9ydCBzdG9yYWdlRnVuY3Rpb25zIGZyb20gJy4vc3RvcmFnZSc7XG5cbi8vIHdoZW4gcGFnZSBmaXJzdCBsb2FkcyBzaWRlYmFyIGFuZCBtYWluIERPTSBlbGVtZW50cyBzaG91bGQgYmUgcmVuZGVyZWRcblxuY29uc29sZS5sb2coJ2luaXRpYWwgc2F2ZScpO1xuc3RvcmFnZUZ1bmN0aW9ucy5zYXZlVG9TdG9yYWdlKHByb2plY3RzQXJyKTtcblxuY29uc3QgcmVuZGVyID0ge1xuICAgIFxuICAgIHByb2plY3RzTGlzdERpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWxpc3QnKSxcbiAgICBcbiAgICB0aXRsZURpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKSxcblxuICAgIGl0ZW1zRGl2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1pdGVtcycpLFxuXG4gICAgcmVuZGVyU2lkZUJhcjogXG4gICAgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHByb2plY3RzTG9naWMucmVwbGFjZVByb2plY3RzQXJyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaWRlYmFyIHdhcyByZW5kZXJlZCBmcm9tIG1lbW9yeScpO1xuXG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgYWxsUHJvamVjdHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1wYXJlbnQnKTtcblxuICAgICAgICBpZiAocmVuZGVyLnByb2plY3RzTGlzdERpdi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHJlbmRlci5wcm9qZWN0c0xpc3REaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLXBhcmVudCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNpZGViYXIgd2lsbCBpdGVyYXRlIG92ZXIgcHJvamVjdHMgYXJyYXkgYW5kIHJlbmRlciBhIGVsZW1lbnQgZm9yIGVhY2ggcHJvamVjdFxuXG4gICAgICAgIHByb2plY3RzQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERpdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3REaXZUZXh0LmNsYXNzTGlzdC5hZGQoJ2FsbC1wcm9qZWN0cycpO1xuICAgICAgICAgICAgcHJvamVjdERpdlRleHQuZGF0YXNldC5pbmRleCA9IHByb2plY3RzQXJyLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2VGV4dC5kYXRhc2V0Lm5hbWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgcHJvamVjdERpdlRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2VGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5kYXRhc2V0LmluZGV4ID0gcHJvamVjdHNBcnIuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgICAgICAgICAgcmVuZGVyLnByb2plY3RzTGlzdERpdi5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c0Rpdik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxsLXByb2plY3RzJyk7XG5cbiAgICAgICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gobm9kZSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBsZXQgY2xpY2tlZFByb2plY3RJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICByZW5kZXIucmVuZGVyTWFpbihjbGlja2VkUHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgIHByb2plY3RJbnRzLnNldE1haW5Qcm9qZWN0KGFsbFByb2plY3RzTGlzdCwgcmVuZGVyLnRpdGxlRGl2LnRleHRDb250ZW50KTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGRlbFByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgICAgIGRlbFByb2plY3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgaW5kID0gYnRuLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICBpZiAoaW5kID09IDApIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnWW91IGNhbm5vdCBkZWxldGUgdGhlIGhvbWUgcHJvamVjdCEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvamVjdEludHMuZGVsZXRlUHJvamVjdChpbmQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EgcHJvamVjdCB3YXMgZGVsZXRlZCcpO1xuICAgICAgICAgICAgc3RvcmFnZUZ1bmN0aW9ucy5zYXZlVG9TdG9yYWdlKHByb2plY3RzQXJyKTtcbiAgICAgICAgICAgIHJlbmRlci5yZW5kZXJTaWRlQmFyKCk7XG4gICAgICAgICAgICByZW5kZXIucmVuZGVyTWFpbigpO1xuICAgICAgICAgICAgcHJvamVjdEludHMuc2V0TWFpblByb2plY3QoYWxsUHJvamVjdHNMaXN0LCByZW5kZXIudGl0bGVEaXYudGV4dENvbnRlbnQpO1xuICAgICAgICB9KSk7XG4gICAgfSxcblxuICAgIC8vIG1haW4gY29udGVudCB3aWxsIHJlbmRlciBhIHByb2plY3QgdGlsdGUoZGVmYXVsdCB3aWxsIGJlIGhvbWUpIGFuZCBmb3IgYWxsIHRoZSB0b2RvIGl0ZW1zIG9mIHRoZSBwcm9qZWN0IGEgY2hlY2tib3ggd2lsbCBiZSByZW5kZXJlZFxuXG4gICAgcmVuZGVyTWFpbjogXG4gICAgZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICBwcm9qZWN0c0xvZ2ljLnJlcGxhY2VQcm9qZWN0c0FycigpO1xuICAgICAgICBjb25zb2xlLmxvZygnaXRlbXMgd2FzIHJlbmRlcmVkIGZyb20gbWVtb3J5Jyk7XG5cbiAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbXMtcGFyZW50Jyk7XG5cbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIHJlbmRlci5pdGVtc0Rpdi5yZW1vdmVDaGlsZChhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgYWxsSXRlbXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBhbGxJdGVtc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW1zLXBhcmVudCcpO1xuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0SW50cy5zZWxlY3RQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgcmVuZGVyLnRpdGxlRGl2LnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiByZW5kZXIucmVuZGVyQ2hlY2tib3godGFzaywgY3VycmVudFByb2plY3QudGFza3MuaW5kZXhPZih0YXNrKSwgYWxsSXRlbXNEaXYpKTtcbiAgICAgICAgcmVuZGVyLml0ZW1zRGl2LmFwcGVuZENoaWxkKGFsbEl0ZW1zRGl2KTtcblxuICAgICAgICBjb25zdCBhbGxFZGl0SXRlbUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1pdGVtJyk7XG4gICAgICAgIGFsbEVkaXRJdGVtQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9ybUJ0bnNJbnRzLnNob3dGcm0oZm9ybUJ0bnMubmV3SXRlbUZybSk7XG4gICAgICAgICAgICBmb3JtQnRucy5uZXdJdGVtRnJtLmRhdGFzZXQuc3RhdHVzID0gJ2VkaXQnO1xuICAgICAgICAgICAgZm9ybUJ0bnMubmV3SXRlbUZybS5kYXRhc2V0LmVkaXRJbmRleCA9IGJ0bi5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3RUYXNrID0gY3VycmVudFByb2plY3QudGFza3NbYnRuLmRhdGFzZXQuaW5kZXhdO1xuICAgICAgICAgICAgZm9ybUVsZW1lbnRzLml0ZW1UaXRsZS52YWx1ZSA9IGFjdGl2ZVByb2plY3RUYXNrLnRpdGxlO1xuICAgICAgICAgICAgZm9ybUVsZW1lbnRzLml0ZW1EZXNjcmlwdGlvbi52YWx1ZSA9IGFjdGl2ZVByb2plY3RUYXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZm9ybUVsZW1lbnRzLml0ZW1EdWVEYXRlLnZhbHVlID0gYWN0aXZlUHJvamVjdFRhc2suZHVlRGF0ZTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGFsbERlbGV0ZUl0ZW1CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1pdGVtJyk7XG4gICAgICAgIGFsbERlbGV0ZUl0ZW1CdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcm9qZWN0SW50cy5kZWxldGVJdGVtKGN1cnJlbnRQcm9qZWN0LnRhc2tzLCBidG4uZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW4gaXRlbSB3YXMgZGVsZXRlZCcpO1xuICAgICAgICAgICAgc3RvcmFnZUZ1bmN0aW9ucy5zYXZlVG9TdG9yYWdlKHByb2plY3RzQXJyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0xvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KHJlbmRlci50aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0c0Fyci5pbmRleE9mKGFjdGl2ZVByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgICAgIHJlbmRlci5yZW5kZXJNYWluKGluZGV4KTtcbiAgICAgICAgICAgIHByb2plY3RJbnRzLnNldE1haW5Qcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGwtcHJvamVjdHMnKSwgcmVuZGVyLnRpdGxlRGl2LnRleHRDb250ZW50KTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGFsbENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcbiAgICAgICAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gZS50YXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBsZXQgYWN0aXZlVGFzayA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzW2J0bi5kYXRhc2V0LmluZGV4XTtcbiAgICAgICAgICAgIHByb2plY3RJbnRzLmNoZWNrSXRlbShzdGF0dXMsIGxhYmVsKTtcblxuICAgICAgICAgICAgdG9kb0l0ZW1zSW50cy5lZGl0U3RhdHVzKGFjdGl2ZVRhc2ssIHN0YXR1cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW4gaXRlbSBjb21wbGV0aW9uIHN0YXR1cyB3YXMgY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3RvcmFnZUZ1bmN0aW9ucy5zYXZlVG9TdG9yYWdlKHByb2plY3RzQXJyKTtcbiAgICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICByZW5kZXJDaGVja2JveDpcbiAgICBmdW5jdGlvbihvYmosIGluZCwgcGFyZW50KSB7XG4gICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS5kYXRhc2V0LmluZGV4ID0gaW5kO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcbiAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBib3guc2V0QXR0cmlidXRlKCdpZCcsIG9iai50aXRsZSk7XG4gICAgICAgIGJveC5kYXRhc2V0LmluZGV4ID0gaW5kO1xuICAgICAgICBib3guY2hlY2tlZCA9IG9iai5jb21wbGV0ZWQ7XG5cbiAgICAgICAgY29uc3QgYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm94TGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRpc3BsYXknKTtcbiAgICAgICAgYm94TGFiZWwudGV4dENvbnRlbnQgPSBgdGFzazogJHtvYmoudGl0bGV9IGlzIGR1ZSBieTogJHtvYmouZHVlRGF0ZX0gYW5kIGhhcyBhIHByaW9yaXR5IGxldmVsIHNldCB0byAke29iai5wcmlvcml0eX1gO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgYm94TGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBib3hMYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBoaWRkZW4gPSBkZXNjcmlwdGlvbi5nZXRBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICBpZiAoaGlkZGVuID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlZGl0SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0SXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWl0ZW0nKTtcbiAgICAgICAgZWRpdEl0ZW1CdG4uZGF0YXNldC5pbmRleCA9IGluZDtcbiAgICAgICAgZWRpdEl0ZW1CdG4udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaXRlbScpO1xuICAgICAgICBkZWxldGVJdGVtQnRuLmRhdGFzZXQuaW5kZXggPSBpbmQ7XG4gICAgICAgIGRlbGV0ZUl0ZW1CdG4udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJveExhYmVsKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZWRpdEl0ZW1CdG4pO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVJdGVtQnRuKTtcblxuICAgICAgICBwcm9qZWN0SW50cy5jaGVja0l0ZW0ob2JqLmNvbXBsZXRlZCwgYm94TGFiZWwpO1xuICAgICAgICB0b2RvSXRlbXNJbnRzLnNldFByaW9yaXR5Q2xhc3Mob2JqLnByaW9yaXR5LCBsaXN0SXRlbSk7XG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9LFxuXG59XG5cbmNvbnN0IGZvcm1CdG5zID0ge1xuICAgIHNob3dQcm9qZWN0RnJtQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKSxcbiAgICBzaG93SXRlbXNGcm1CdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctaXRlbScpLFxuICAgIGNyZWF0ZVByb2plY3RCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdCcpLFxuICAgIGNyZWF0ZUl0ZW1CdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtaXRlbScpLFxuICAgIG5ld1Byb2plY3RGcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1mb3JtJyksXG4gICAgbmV3SXRlbUZybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1pdGVtLWZvcm0nKSxcbiAgICBjYW5jZWxOZXdJdGVtRnJtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsJyksXG4gICAgY2FuY2VsTmV3UHJvamVjdEZybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1wcm9qZWN0JyksXG59XG5cbmNvbnN0IGZvcm1FbGVtZW50cyA9IHtcbiAgICBpdGVtVGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyksXG4gICAgaXRlbUR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLFxuICAgIGl0ZW1IaWdoUHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWdoJyksXG4gICAgaXRlbU1lZGl1bVByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVkaXVtJyksXG4gICAgaXRlbUxvd1ByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG93JykgICAgXG59XG5cbnJlbmRlci5yZW5kZXJTaWRlQmFyKCk7XG5yZW5kZXIucmVuZGVyTWFpbigpO1xucHJvamVjdEludHMuc2V0TWFpblByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsbC1wcm9qZWN0cycpLCByZW5kZXIudGl0bGVEaXYudGV4dENvbnRlbnQpO1xuXG5mb3JtQnRucy5zaG93UHJvamVjdEZybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgZm9ybUJ0bnNJbnRzLnNob3dGcm0oZm9ybUJ0bnMubmV3UHJvamVjdEZybSk7XG59KTtcbmZvcm1CdG5zLmNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICBpZiAoIWlucHV0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIGZvcm1CdG5zSW50cy5jcmVhdGVOZXdQcm9qZWN0KGlucHV0KTtcbiAgICBjb25zb2xlLmxvZygnYSBuZXcgcHJvamVjdCB3YXMgY3JlYXRlZCcpO1xuICAgIHN0b3JhZ2VGdW5jdGlvbnMuc2F2ZVRvU3RvcmFnZShwcm9qZWN0c0Fycik7XG4gICAgcmVuZGVyLnJlbmRlclNpZGVCYXIoKTtcbiAgICBwcm9qZWN0SW50cy5zZXRNYWluUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxsLXByb2plY3RzJyksIHJlbmRlci50aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgZm9ybUJ0bnNJbnRzLmhpZGVGcm0oZm9ybUJ0bnMubmV3UHJvamVjdEZybSk7XG59KTtcbmZvcm1CdG5zLnNob3dJdGVtc0ZybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgZm9ybUJ0bnNJbnRzLnNob3dGcm0oZm9ybUJ0bnMubmV3SXRlbUZybSk7XG4gICAgZm9ybUJ0bnMubmV3SXRlbUZybS5kYXRhc2V0LnN0YXR1cyA9ICduZXcnO1xufSk7XG5mb3JtQnRucy5jcmVhdGVJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgIGxldCBpbnB1dFRpdGxlID0gZm9ybUVsZW1lbnRzLml0ZW1UaXRsZS52YWx1ZTtcbiAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGZvcm1FbGVtZW50cy5pdGVtRGVzY3JpcHRpb24udmFsdWU7XG4gICAgbGV0IGlucHV0RHVlRGF0ZSA9IGZvcm1FbGVtZW50cy5pdGVtRHVlRGF0ZS52YWx1ZTtcbiAgICBsZXQgaW5wdXRQcmlvcml0eSA9IGZvcm1CdG5zSW50cy5nZXRQcmlvcml0eVZhbHVlKGZvcm1FbGVtZW50cy5pdGVtSGlnaFByaW9yaXR5LCBmb3JtRWxlbWVudHMuaXRlbU1lZGl1bVByaW9yaXR5LCBmb3JtRWxlbWVudHMuaXRlbUxvd1ByaW9yaXR5KTtcbiAgICBcbiAgICBpZiAoIWlucHV0VGl0bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIWlucHV0RHVlRGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0xvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KHJlbmRlci50aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHNBcnIuaW5kZXhPZihhY3RpdmVQcm9qZWN0KTtcbiAgICBsZXQgc3RhdHVzID0gZm9ybUJ0bnMubmV3SXRlbUZybS5kYXRhc2V0LnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09ICduZXcnKSB7XG4gICAgICAgIHRvZG9JdGVtc0ludHMuY3JlYXRlVG9kb0l0ZW0oaW5wdXRUaXRsZSwgaW5wdXREZXNjcmlwdGlvbiwgaW5wdXREdWVEYXRlLCBpbnB1dFByaW9yaXR5LCBhY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2EgbmV3IGl0ZW0gd2FzIGNyZWF0ZWQnKTtcbiAgICAgICAgc3RvcmFnZUZ1bmN0aW9ucy5zYXZlVG9TdG9yYWdlKHByb2plY3RzQXJyKTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2VkaXQnKSB7XG4gICAgICAgIGxldCBhY3RpdmVJdGVtID0gYWN0aXZlUHJvamVjdC50YXNrc1tmb3JtQnRucy5uZXdJdGVtRnJtLmRhdGFzZXQuZWRpdEluZGV4XTtcbiAgICAgICAgdG9kb0l0ZW1zSW50cy5lZGl0VG9kb0l0ZW0oYWN0aXZlSXRlbSwgaW5wdXRUaXRsZSwgaW5wdXREZXNjcmlwdGlvbiwgaW5wdXREdWVEYXRlLCBpbnB1dFByaW9yaXR5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FuIGl0ZW0gd2FzIGVkaXRlZCcpO1xuICAgICAgICBzdG9yYWdlRnVuY3Rpb25zLnNhdmVUb1N0b3JhZ2UocHJvamVjdHNBcnIpO1xuICAgIH1cblxuICAgIHJlbmRlci5yZW5kZXJNYWluKGluZGV4KTtcbiAgICBwcm9qZWN0SW50cy5zZXRNYWluUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxsLXByb2plY3RzJyksIHJlbmRlci50aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgZm9ybUJ0bnNJbnRzLnJlc2V0SXRlbUZybShmb3JtRWxlbWVudHMuaXRlbVRpdGxlLCBmb3JtRWxlbWVudHMuaXRlbURlc2NyaXB0aW9uLCBmb3JtRWxlbWVudHMuaXRlbUR1ZURhdGUsIFxuICAgICAgICBmb3JtRWxlbWVudHMuaXRlbUhpZ2hQcmlvcml0eSwgZm9ybUVsZW1lbnRzLml0ZW1NZWRpdW1Qcmlvcml0eSwgZm9ybUVsZW1lbnRzLml0ZW1Mb3dQcmlvcml0eSk7XG4gICAgZm9ybUJ0bnNJbnRzLmhpZGVGcm0oZm9ybUJ0bnMubmV3SXRlbUZybSk7XG59KTtcbmZvcm1CdG5zLmNhbmNlbE5ld0l0ZW1Gcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGZvcm1CdG5zSW50cy5yZXNldEl0ZW1Gcm0oZm9ybUVsZW1lbnRzLml0ZW1UaXRsZSwgZm9ybUVsZW1lbnRzLml0ZW1EZXNjcmlwdGlvbiwgZm9ybUVsZW1lbnRzLml0ZW1EdWVEYXRlLCBcbiAgICAgICAgZm9ybUVsZW1lbnRzLml0ZW1IaWdoUHJpb3JpdHksIGZvcm1FbGVtZW50cy5pdGVtTWVkaXVtUHJpb3JpdHksIGZvcm1FbGVtZW50cy5pdGVtTG93UHJpb3JpdHkpO1xuICAgIGZvcm1CdG5zSW50cy5oaWRlRnJtKGZvcm1CdG5zLm5ld0l0ZW1Gcm0pO1xufSk7XG5mb3JtQnRucy5jYW5jZWxOZXdQcm9qZWN0RnJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgZm9ybUJ0bnNJbnRzLnJlc2V0UHJvamVjdEZyb20oaW5wdXQpO1xuICAgIGZvcm1CdG5zSW50cy5oaWRlRnJtKGZvcm1CdG5zLm5ld1Byb2plY3RGcm0pO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==