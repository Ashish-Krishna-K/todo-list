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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 15fr;\n    font-family: 'Roboto', sans-serif;\n}\n\nheader {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    border: 1px solid black;\n    background-color: olive;\n    padding: 12px 48px;\n    font-size: 2rem;\n    font-weight:900;\n}\n\ninput,\ntextarea {\n    background-color: beige;\n    padding: 8px;\n    font-family: 'Roboto', sans-serif;\n    font-weight:300;\n}\n\n#sidebar {\n    border: 1px solid black;\n    grid-column: 1 / 2;\n    background-color: #663300;\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n    gap: 24px;\n\n    color: beige;\n}\n\n#sidebar h2 {\n    padding: 12px;\n    text-align: center;\n\n    font-weight:700;\n    \n}\n\n#sidebar li {\n    display: flex;\n    justify-content: space-between;\n    padding: 4px;\n}\n\n#new-project-form.hide{\n    display: none;\n}\n\n#new-project-form.show{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n#create-project {\n    padding: 4px 12px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 1rem;\n    background-color: yellow;\n    color: #663300;\n}\n\n#create-project:hover {\n    background-color: blue;\n    color: greenyellow;\n    box-shadow: 0 0 5px 2px greenyellow;\n}\n\n#delete-project {\n    width: 30px;\n    height: 30px;\n    border: none;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n    background-size: cover;\n    \n}\n\n#delete-project:hover {\n    box-shadow: 0 0 10px 1px red;\n}\n\n.all-projects{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-weight:500;\n\n}\n\n.all-projects:hover {\n    box-shadow: 0 0 5px 1px beige;\n}\n\n#new-item {\n    width: 100px;\n    height: 100px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    border: none;\n    border-radius: 100px;\n}\n\n#new-item:hover {\n    box-shadow: 0 0 50px 10px black;\n    background-color: greenyellow;\n}\n\nmain {\n    border: 1px solid black;\n    background-color: beige;\n    padding: 12px;\n\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: 1fr 5fr;\n}\n\nmain h1 {\n    padding: 12px;\n    justify-self: center;\n    font-weight:700;\n}\n\n#new-item {\n    justify-self: end;\n}\n\nul {\n    list-style: none;\n}\n\n#new-item-form.hide {\n    display: none;\n}\n\n#new-item-form.show {\n    padding: 36px;\n    background-color: olive;\n    color: #663300;\n    border: 1px solid black;\n    box-shadow: 0 0 50px 10px #663300;\n    border-radius: 20px;\n\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-column: 2 / 3;\n    gap: 24px;\n    align-items: center;\n\n\n    position: absolute;\n    left: 40%;\n    top: 30%;\n\n    font: weight 400;\n}\n\n#new-item-form li {\n    display: flex;\n    gap: 12px;\n}\n\n\n#new-item-form label {\n    font-size: 1.5rem;\n}\n\n#form-heading {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n\n    font-weight: 500;\n}\n\n#form-heading>h2{\n    flex: 1;\n    text-align: center;\n    font-size: 3rem;\n}\n\n#cancel {\n    align-self: center;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    width: 40px;\n    height: 40px;\n    border: none;\n}\n\n#cancel:hover{\n    box-shadow: 0 0 5px 2px black;\n}\n\n\n#create-item-div {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#create-item {\n    padding: 8px 24px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 2rem;\n    background-color: yellow;\n    border: none;\n    color: blue;\n}\n\n\n#create-item:hover {\n    background-color: blue;\n    color: yellow;\n    box-shadow: 0 0 10px 5px yellow;\n}\n\n\n#todo-items {\n    grid-area: 2 / 1 / 3 / 2;\n}\n\n#todo-items ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n#todo-items li {\n    padding: 8px;\n\n    border: 1px solid black;\n    display: flex;\n    gap: 4px;\n\n    border-radius: 5px;\n    box-shadow: 0 0 1px 1px black;\n}\n\n#todo-items #task-display {\n    flex: 1;\n\n    font-weight:300;\n\n}\n\n#todo-items #task-display.checked {\n    text-decoration: line-through;\n\n    font-weight:300;\n    font-style: italic;\n\n}\n\n.high {\n    background-color: #ffc2b3;\n}\n\n.medium {\n    background-color: #ffffb3;\n}\n\n.low {\n    background-color: #b3ffb3;\n}\n\n.edit-item {\n    height: 20px;\n    width: 20px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: cover;\n    border: none;\n}\n\n.edit-item:hover {\n    box-shadow: 0 0 1px 1px black;\n}\n\n.delete-item {\n    height: 20px;\n    width: 20px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    border: none;\n}\n\n.delete-item:hover {\n    box-shadow: 0 0 1px 1px black;\n}\n\n.active-project {\n    font-weight:500;\n    font-style: italic;\n    border-radius: 50px;\n    box-shadow: 0 0 1px 1px beige;\n}\n\n\n#new-project {\n    border: 1px solid blue;\n    padding: 4px 12px;\n    background-color: greenyellow;\n    color: blue;\n    font-family: inherit;\n    font-weight: 700;\n    font-size: 2rem;\n    align-self: center;\n    border-radius: 100px;\n}\n\n#new-project:hover {\n    background-color: blue;\n    color: greenyellow;\n    box-shadow: 0 0 5px 2px greenyellow;\n}\n\n#project-name,\n#title,\n#due-date {\n    border-radius: 50px;\n    box-shadow: 0 0 10px 3px black;\n}\n\ntextarea {\n    box-shadow: 0 0 10px 3px black;\n}\n\ntextarea:focus,\n#project-name:focus,\n#title:focus,\n#due-date:focus,\n#textarea:focus,\n#high:focus,\n#medium:focus,\n#low:focus {\n    border: none;\n    box-shadow: 0 0 10px 5px yellow;\n}\n\n#items-parent input {\n    width: 25px;\n    height: 25px;\n    background-color: beige;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,300;1,500&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 15fr;\n    font-family: 'Roboto', sans-serif;\n}\n\nheader {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    border: 1px solid black;\n    background-color: olive;\n    padding: 12px 48px;\n    font-size: 2rem;\n    font-weight:900;\n}\n\ninput,\ntextarea {\n    background-color: beige;\n    padding: 8px;\n    font-family: 'Roboto', sans-serif;\n    font-weight:300;\n}\n\n#sidebar {\n    border: 1px solid black;\n    grid-column: 1 / 2;\n    background-color: #663300;\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n    gap: 24px;\n\n    color: beige;\n}\n\n#sidebar h2 {\n    padding: 12px;\n    text-align: center;\n\n    font-weight:700;\n    \n}\n\n#sidebar li {\n    display: flex;\n    justify-content: space-between;\n    padding: 4px;\n}\n\n#new-project-form.hide{\n    display: none;\n}\n\n#new-project-form.show{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n#create-project {\n    padding: 4px 12px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 1rem;\n    background-color: yellow;\n    color: #663300;\n}\n\n#create-project:hover {\n    background-color: blue;\n    color: greenyellow;\n    box-shadow: 0 0 5px 2px greenyellow;\n}\n\n#delete-project {\n    width: 30px;\n    height: 30px;\n    border: none;\n    background: url(./images/delete-icon.svg) no-repeat;\n    background-size: cover;\n    \n}\n\n#delete-project:hover {\n    box-shadow: 0 0 10px 1px red;\n}\n\n.all-projects{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-weight:500;\n\n}\n\n.all-projects:hover {\n    box-shadow: 0 0 5px 1px beige;\n}\n\n#new-item {\n    width: 100px;\n    height: 100px;\n    background: url(./images/add-new.svg);\n    border: none;\n    border-radius: 100px;\n}\n\n#new-item:hover {\n    box-shadow: 0 0 50px 10px black;\n    background-color: greenyellow;\n}\n\nmain {\n    border: 1px solid black;\n    background-color: beige;\n    padding: 12px;\n\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: 1fr 5fr;\n}\n\nmain h1 {\n    padding: 12px;\n    justify-self: center;\n    font-weight:700;\n}\n\n#new-item {\n    justify-self: end;\n}\n\nul {\n    list-style: none;\n}\n\n#new-item-form.hide {\n    display: none;\n}\n\n#new-item-form.show {\n    padding: 36px;\n    background-color: olive;\n    color: #663300;\n    border: 1px solid black;\n    box-shadow: 0 0 50px 10px #663300;\n    border-radius: 20px;\n\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-column: 2 / 3;\n    gap: 24px;\n    align-items: center;\n\n\n    position: absolute;\n    left: 40%;\n    top: 30%;\n\n    font: weight 400;\n}\n\n#new-item-form li {\n    display: flex;\n    gap: 12px;\n}\n\n\n#new-item-form label {\n    font-size: 1.5rem;\n}\n\n#form-heading {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n\n    font-weight: 500;\n}\n\n#form-heading>h2{\n    flex: 1;\n    text-align: center;\n    font-size: 3rem;\n}\n\n#cancel {\n    align-self: center;\n    background: url(./images/close.svg);\n    background-size: cover;\n    width: 40px;\n    height: 40px;\n    border: none;\n}\n\n#cancel:hover{\n    box-shadow: 0 0 5px 2px black;\n}\n\n\n#create-item-div {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#create-item {\n    padding: 8px 24px;\n    border-radius: 50px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 2rem;\n    background-color: yellow;\n    border: none;\n    color: blue;\n}\n\n\n#create-item:hover {\n    background-color: blue;\n    color: yellow;\n    box-shadow: 0 0 10px 5px yellow;\n}\n\n\n#todo-items {\n    grid-area: 2 / 1 / 3 / 2;\n}\n\n#todo-items ul {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n#todo-items li {\n    padding: 8px;\n\n    border: 1px solid black;\n    display: flex;\n    gap: 4px;\n\n    border-radius: 5px;\n    box-shadow: 0 0 1px 1px black;\n}\n\n#todo-items #task-display {\n    flex: 1;\n\n    font-weight:300;\n\n}\n\n#todo-items #task-display.checked {\n    text-decoration: line-through;\n\n    font-weight:300;\n    font-style: italic;\n\n}\n\n.high {\n    background-color: #ffc2b3;\n}\n\n.medium {\n    background-color: #ffffb3;\n}\n\n.low {\n    background-color: #b3ffb3;\n}\n\n.edit-item {\n    height: 20px;\n    width: 20px;\n    background: url(./images/file-edit.svg);\n    background-size: cover;\n    border: none;\n}\n\n.edit-item:hover {\n    box-shadow: 0 0 1px 1px black;\n}\n\n.delete-item {\n    height: 20px;\n    width: 20px;\n    background: url(./images/delete-icon.svg);\n    background-size: cover;\n    border: none;\n}\n\n.delete-item:hover {\n    box-shadow: 0 0 1px 1px black;\n}\n\n.active-project {\n    font-weight:500;\n    font-style: italic;\n    border-radius: 50px;\n    box-shadow: 0 0 1px 1px beige;\n}\n\n\n#new-project {\n    border: 1px solid blue;\n    padding: 4px 12px;\n    background-color: greenyellow;\n    color: blue;\n    font-family: inherit;\n    font-weight: 700;\n    font-size: 2rem;\n    align-self: center;\n    border-radius: 100px;\n}\n\n#new-project:hover {\n    background-color: blue;\n    color: greenyellow;\n    box-shadow: 0 0 5px 2px greenyellow;\n}\n\n#project-name,\n#title,\n#due-date {\n    border-radius: 50px;\n    box-shadow: 0 0 10px 3px black;\n}\n\ntextarea {\n    box-shadow: 0 0 10px 3px black;\n}\n\ntextarea:focus,\n#project-name:focus,\n#title:focus,\n#due-date:focus,\n#textarea:focus,\n#high:focus,\n#medium:focus,\n#low:focus {\n    border: none;\n    box-shadow: 0 0 10px 5px yellow;\n}\n\n#items-parent input {\n    width: 25px;\n    height: 25px;\n    background-color: beige;\n}"],"sourceRoot":""}]);
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
const projectsArr = [];

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
    }
}



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






// when page first loads sidebar and main DOM elements should be rendered

const render = {
    
    projectsListDiv: document.querySelector('#projects-list'),
    
    titleDiv: document.querySelector('#project-title'),

    itemsDiv: document.querySelector('#todo-items'),

    renderSideBar: 
    function () {
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
            render.renderSideBar();
            render.renderMain();
            _UI__WEBPACK_IMPORTED_MODULE_2__.projectInts.setMainProject(allProjectsList, render.titleDiv.textContent);
        }));
    },

    // main content will render a project tilte(default will be home) and for all the todo items of the project a checkbox will be rendered

    renderMain: 
    function(index) {
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
    } else if (status === 'edit') {
        let activeItem = activeProject.tasks[formBtns.newItemFrm.dataset.editIndex];
        _todo_items__WEBPACK_IMPORTED_MODULE_3__.todoItemsInts.editTodoItem(activeItem, inputTitle, inputDescription, inputDueDate, inputPriority);
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
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxXQUFXLGNBQWMsYUFBYSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxhQUFhLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLHVHQUF1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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQTJCO0FBQ25DO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7OztBQU1DOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0dEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQSxJQUFJLDhEQUE2QjtBQUNqQztBQUNBLElBQUksMkRBQTBCO0FBQzlCLElBQUkscURBQW9CO0FBQ3hCLENBQUM7QUFDRDtBQUNBLElBQUkscURBQW9CO0FBQ3hCO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsd0JBQXdCLHNFQUErQjtBQUN2RCxnQkFBZ0IsMERBQW1CO0FBQ25DOztBQUVBO0FBQ0EsUUFBUSxxRUFBNEI7QUFDcEMsTUFBTTtBQUNOO0FBQ0EsUUFBUSxtRUFBMEI7QUFDbEM7O0FBRUE7QUFDQSxJQUFJLDJEQUEwQjtBQUM5QixJQUFJLDBEQUF5QjtBQUM3QjtBQUNBLElBQUkscURBQW9CO0FBQ3hCLENBQUM7QUFDRDtBQUNBLElBQUksMERBQXlCO0FBQzdCO0FBQ0EsSUFBSSxxREFBb0I7QUFDeEIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZGVsZXRlLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYWRkLW5ldy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9maWxlLWVkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwOzEsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9saXZlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDQ4cHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6OTAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjMzMDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ2FwOiAyNHB4O1xcblxcbiAgICBjb2xvcjogYmVpZ2U7XFxufVxcblxcbiNzaWRlYmFyIGgyIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDo3MDA7XFxuICAgIFxcbn1cXG5cXG4jc2lkZWJhciBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtZm9ybS5oaWRle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtZm9ybS5zaG93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGNvbG9yOiAjNjYzMzAwO1xcbn1cXG5cXG4jY3JlYXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IGdyZWVueWVsbG93O1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3Qge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJlZDtcXG59XFxuXFxuLmFsbC1wcm9qZWN0c3tcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXG5cXG59XFxuXFxuLmFsbC1wcm9qZWN0czpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4IGJlaWdlO1xcbn1cXG5cXG4jbmV3LWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcblxcbiNuZXctaXRlbTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IDEwcHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuXFxubWFpbiBoMSB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDo3MDA7XFxufVxcblxcbiNuZXctaXRlbSB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNuZXctaXRlbS1mb3JtLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3LWl0ZW0tZm9ybS5zaG93IHtcXG4gICAgcGFkZGluZzogMzZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb2xpdmU7XFxuICAgIGNvbG9yOiAjNjYzMzAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggMTBweCAjNjYzMzAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgdG9wOiAzMCU7XFxuXFxuICAgIGZvbnQ6IHdlaWdodCA0MDA7XFxufVxcblxcbiNuZXctaXRlbS1mb3JtIGxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG5cXG4jbmV3LWl0ZW0tZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jZm9ybS1oZWFkaW5nIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jZm9ybS1oZWFkaW5nPmgye1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2NhbmNlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jY2FuY2VsOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCBibGFjaztcXG59XFxuXFxuXFxuI2NyZWF0ZS1pdGVtLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjcmVhdGUtaXRlbSB7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcblxcbiNjcmVhdGUtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCB5ZWxsb3c7XFxufVxcblxcblxcbiN0b2RvLWl0ZW1zIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbn1cXG5cXG4jdG9kby1pdGVtcyB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4jdG9kby1pdGVtcyBsaSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4jdG9kby1pdGVtcyAjdGFzay1kaXNwbGF5IHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xcblxcbn1cXG5cXG4jdG9kby1pdGVtcyAjdGFzay1kaXNwbGF5LmNoZWNrZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuXFxufVxcblxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzJiMztcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmYjM7XFxufVxcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNmZmIzO1xcbn1cXG5cXG4uZWRpdC1pdGVtIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZWRpdC1pdGVtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggYmxhY2s7XFxufVxcblxcbi5kZWxldGUtaXRlbSB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1pdGVtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggYmxhY2s7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCBiZWlnZTtcXG59XFxuXFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCBncmVlbnllbGxvdztcXG59XFxuXFxuI3Byb2plY3QtbmFtZSxcXG4jdGl0bGUsXFxuI2R1ZS1kYXRlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IGJsYWNrO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCBibGFjaztcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsXFxuI3Byb2plY3QtbmFtZTpmb2N1cyxcXG4jdGl0bGU6Zm9jdXMsXFxuI2R1ZS1kYXRlOmZvY3VzLFxcbiN0ZXh0YXJlYTpmb2N1cyxcXG4jaGlnaDpmb2N1cyxcXG4jbWVkaXVtOmZvY3VzLFxcbiNsb3c6Zm9jdXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCB5ZWxsb3c7XFxufVxcblxcbiNpdGVtcy1wYXJlbnQgaW5wdXQge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFF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SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwzMDA7MSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGl2ZTtcXG4gICAgcGFkZGluZzogMTJweCA0OHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OjkwMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OjMwMDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYzMzAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGdhcDogMjRweDtcXG5cXG4gICAgY29sb3I6IGJlaWdlO1xcbn1cXG5cXG4jc2lkZWJhciBoMiB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xcbiAgICBcXG59XFxuXFxuI3NpZGViYXIgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWZvcm0uaGlkZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWZvcm0uc2hvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4jY3JlYXRlLXByb2plY3Qge1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBjb2xvcjogIzY2MzMwMDtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCBncmVlbnllbGxvdztcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvZGVsZXRlLWljb24uc3ZnKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIFxcbn1cXG5cXG4jZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmVkO1xcbn1cXG5cXG4uYWxsLXByb2plY3Rze1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xcblxcbn1cXG5cXG4uYWxsLXByb2plY3RzOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggYmVpZ2U7XFxufVxcblxcbiNuZXctaXRlbSB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2FkZC1uZXcuc3ZnKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuI25ldy1pdGVtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggMTBweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbm1haW4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbn1cXG5cXG5tYWluIGgxIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcXG59XFxuXFxuI25ldy1pdGVtIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI25ldy1pdGVtLWZvcm0uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNuZXctaXRlbS1mb3JtLnNob3cge1xcbiAgICBwYWRkaW5nOiAzNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGl2ZTtcXG4gICAgY29sb3I6ICM2NjMzMDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCAxMHB4ICM2NjMzMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IDMwJTtcXG5cXG4gICAgZm9udDogd2VpZ2h0IDQwMDtcXG59XFxuXFxuI25ldy1pdGVtLWZvcm0gbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcblxcbiNuZXctaXRlbS1mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNmb3JtLWhlYWRpbmcge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNmb3JtLWhlYWRpbmc+aDJ7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jY2FuY2VsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvY2xvc2Uuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jY2FuY2VsOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCBibGFjaztcXG59XFxuXFxuXFxuI2NyZWF0ZS1pdGVtLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjcmVhdGUtaXRlbSB7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcblxcbiNjcmVhdGUtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCB5ZWxsb3c7XFxufVxcblxcblxcbiN0b2RvLWl0ZW1zIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbn1cXG5cXG4jdG9kby1pdGVtcyB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4jdG9kby1pdGVtcyBsaSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4jdG9kby1pdGVtcyAjdGFzay1kaXNwbGF5IHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xcblxcbn1cXG5cXG4jdG9kby1pdGVtcyAjdGFzay1kaXNwbGF5LmNoZWNrZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuXFxufVxcblxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzJiMztcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmYjM7XFxufVxcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNmZmIzO1xcbn1cXG5cXG4uZWRpdC1pdGVtIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2ZpbGUtZWRpdC5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5lZGl0LWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCBibGFjaztcXG59XFxuXFxuLmRlbGV0ZS1pdGVtIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2RlbGV0ZS1pY29uLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1pdGVtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggYmxhY2s7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCBiZWlnZTtcXG59XFxuXFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCBncmVlbnllbGxvdztcXG59XFxuXFxuI3Byb2plY3QtbmFtZSxcXG4jdGl0bGUsXFxuI2R1ZS1kYXRlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IGJsYWNrO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCBibGFjaztcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsXFxuI3Byb2plY3QtbmFtZTpmb2N1cyxcXG4jdGl0bGU6Zm9jdXMsXFxuI2R1ZS1kYXRlOmZvY3VzLFxcbiN0ZXh0YXJlYTpmb2N1cyxcXG4jaGlnaDpmb2N1cyxcXG4jbWVkaXVtOmZvY3VzLFxcbiNsb3c6Zm9jdXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCB5ZWxsb3c7XFxufVxcblxcbiNpdGVtcy1wYXJlbnQgaW5wdXQge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGVhY2ggcHJvamVjdCBpdGVtIHdpbGwgaGF2ZSB0aGUgZnVuY3Rpb25hbGl0eSB0byBiZSBzZWxlY3RlZCBhbmQgZGVsZXRlZFxuXG5pbXBvcnQgeyBwcm9qZWN0c0FyciwgcHJvamVjdHNMb2dpYyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IHByb2plY3RJbnRzID0ge1xuICAgIGRlbGV0ZVByb2plY3Q6IFxuICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcHJvamVjdHNBcnIuc3BsaWNlKGUsIDEpO1xuICAgIH0sXG4gICAgc2VsZWN0UHJvamVjdDpcbiAgICBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgaWYgKCFlKXtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c0FyclswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvamVjdHNBcnJbZV07XG4gICAgfSxcbiAgICBkZWxldGVJdGVtOlxuICAgIGZ1bmN0aW9uKGFyciwgaW5kKSB7XG4gICAgICAgIGFyci5zcGxpY2UoaW5kLCAxKTtcbiAgICB9LFxuICAgIGNoZWNrSXRlbTpcbiAgICBmdW5jdGlvbihzdGF0dXMsIGxhYmVsKXtcbiAgICAgICAgaWYoc3RhdHVzKXtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgfSBlbHNlIHsgICAgXG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldE1haW5Qcm9qZWN0OlxuICAgIGZ1bmN0aW9uKG5vZGVMaXN0LCB0aXRsZSkge1xuICAgIG5vZGVMaXN0LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xuXG4gICAgICAgIGlmKG5vZGUudGV4dENvbnRlbnQgPT09IHRpdGxlKXtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbn1cblxuLy8gZWFjaCB0b2RvIGl0ZW0gd2lsbCBoYXZlIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGJlIGNoZWNrZWQsIGVkaXRlZCBhbmQgZGVsZXRlZFxuXG4vLyBjbGlja2luZyBuZXcgcHJvamVjdCBpbiB0aGUgc2lkZWJhciB3aWxsIG1ha2UgYSBmb3JtIGFwcGVhciB3aGljaCB3aWxsIGFjY2VwdCBhIHByb2plY3QgbmFtZSBhbmQgYSBzdWJtaXQgYnV0dG9uXG4vLyBjbGlja2luZyB0aGUgc3VibWl0IHdpbGwgZG8gdGhlIGZvbGxvd2luZ1xuLy8gMS4gY3JlYXRlIGEgbmV3IHByb2plY3Qgb2JqZWN0IHdoaWNoIHdpbGwgaGF2ZSBhIHRpdGxlIHByb3BlcnR5KGFjY2VwdHMgdGhlIGlucHV0IHZhbHVlKSBhbmQgYSB0YXNrcyBhcnJheVxuLy8gMi4gYXBwZW5kcyB0aGUgbmV3IHByb2plY3QgdG8gdGhlIHByb2plY3RzIGFycmF5XG4vLyAzLiByZW1vdmVzIHRoZSBjdXJyZW50IHNpZGViYXIgZWxlbWVudHMgYW5kIHJlLXJlbmRlcnMgaXRcbi8vIDQuIHJlbmRlcnMgdGhlIG1haW4gY29udGVudCBhcmVhXG5cbmNvbnN0IGZvcm1CdG5zSW50cyA9IHtcblxuICAgIHNob3dGcm06XG4gICAgZnVuY3Rpb24oZnJtKSB7XG4gICAgICAgIGZybS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgZnJtLmNsYXNzTmFtZSA9ICdzaG93JztcbiAgICB9LFxuICAgIGhpZGVGcm06XG4gICAgZnVuY3Rpb24oZnJtKSB7XG4gICAgICAgIGZybS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICBmcm0uY2xhc3NOYW1lID0gJ2hpZGUnO1xuICAgIH0sXG4gICAgY3JlYXRlTmV3UHJvamVjdDpcbiAgICBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAvLyB3aGVuIGNyZWF0ZSBwcm9qZWN0IGJ1dHRvbiBpcyBwcmVzc2VkIGl0IHNob3VsZDpcbiAgICAgICAgLy8gMS4gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIHB1c2ggaXQgdG8gcHJvamVjdHMgYXJyYXlcbiAgICAgICAgLy8gMi4gY2xlYXIgdGhlIGlucHV0IGZpZWxkXG4gICAgICAgIC8vIDMuIGhpZGUgdGhlIGZvcm1cbiAgICAgICAgLy8gNC4gcmUtcmVuZGVyIHRoZSBzaWRlYmFyIHdpdGggdGhlIG5ld2x5IGNyZWF0ZWQgcHJvamVjdCB2aXNpYmxlXG4gICAgICAgIHByb2plY3RzTG9naWMuY3JlYXRlUHJvamVjdChpbnB1dC52YWx1ZSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICB9LFxuXG4gICAgLy8gdGhlIG1haW4gY29udGVudCBhcmVhIHdpbGwgaGF2ZSBhIG5ldyBpdGVtIGJ1dHRvbiB3aGljaCB3aGVuIHByZXNzZWQgd2lsbCByZW5kZXIgYSBmb3JtIHRoYXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIGlucHV0czpcbiAgICAvLyBhLiB0aXRsZVxuICAgIC8vIGIuIGRlc2NyaXB0aW9uXG4gICAgLy8gYy4gZHVlIGRhdGVcbiAgICAvLyBkLiBwcmlvcml0eVxuICAgIC8vIGUuIHByb2plY3RzIGRyb3Bkb3duXG5cbiAgICByZXNldEl0ZW1Gcm06XG4gICAgZnVuY3Rpb24odGl0bGUsIGRlc2MsIGRhdGUsIGhpZ2gsIG1lZCwgbG93LCBmcm0pIHtcbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgZGVzYy52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgICAgIGhpZ2guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBtZWQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBsb3cuY2hlY2tlZCA9IGZhbHNlXG4gICAgfSxcbiAgICBnZXRQcmlvcml0eVZhbHVlOlxuICAgIGZ1bmN0aW9uKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKGEuY2hlY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuICdoaWdoJ1xuICAgICAgICB9IGVsc2UgaWYgKGIuY2hlY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuICdtZWRpdW0nXG4gICAgICAgIH0gZWxzZSBpZiAoYy5jaGVja2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2xvdydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnbG93J1xuICAgICAgICB9XG4gICAgfSxcblxuXG59O1xuXG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdEludHMsXG4gICAgZm9ybUJ0bnNJbnRzLFxufVxuIiwiY29uc3QgcHJvamVjdHNBcnIgPSBbXTtcblxuY2xhc3MgTmV3UHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9XG59O1xuXG5wcm9qZWN0c0Fyci5wdXNoKG5ldyBOZXdQcm9qZWN0KCdIb21lJykpO1xuXG5cbmNvbnN0IHByb2plY3RzTG9naWMgPSB7XG4gICAgY3JlYXRlUHJvamVjdDpcbiAgICBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgcHJvamVjdHNBcnIucHVzaChuZXcgTmV3UHJvamVjdCh0aXRsZSkpO1xuICAgIH0sXG4gICAgZ2V0Q3VycmVudFByb2plY3Q6XG4gICAgZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBsZXQgbmV3QXJyID0gcHJvamVjdHNBcnIuZmlsdGVyKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0FyclswXTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdHNBcnIsXG4gICAgcHJvamVjdHNMb2dpY1xufSIsImNsYXNzIE5ld1RvRG9JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuXG59XG5cbmNvbnN0IHRvZG9JdGVtc0ludHMgPSB7XG4gICAgY3JlYXRlVG9kb0l0ZW06XG4gICAgZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICAgICBjb25zdCBhY3RpdmVBcnIgPSBwcm9qZWN0LnRhc2tzO1xuXG4gICAgICAgIGFjdGl2ZUFyci5wdXNoKG5ldyBOZXdUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSlcbiAgICB9LFxuICAgIGVkaXRUb2RvSXRlbTpcbiAgICBmdW5jdGlvbihhY3RpdmVJdGVtLCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgYWN0aXZlSXRlbS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBhY3RpdmVJdGVtLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICAgICAgYWN0aXZlSXRlbS5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgYWN0aXZlSXRlbS5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfSxcbiAgICBlZGl0U3RhdHVzOlxuICAgIGZ1bmN0aW9uKGFjdGl2ZVRhc2ssIHN0YXR1cykge1xuICAgICAgICBhY3RpdmVUYXNrLmNvbXBsZXRlZCA9IHN0YXR1cztcbiAgICB9LFxuICAgIHNldFByaW9yaXR5Q2xhc3M6XG4gICAgZnVuY3Rpb24ocHJpb3JpdHksIHRhc2tOb2RlKXtcbiAgICAgICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgICAgICAgICAgdGFza05vZGUuY2xhc3NOYW1lID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgICAgICB0YXNrTm9kZS5jbGFzc05hbWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICAgICAgdGFza05vZGUuY2xhc3NOYW1lID0gJ2xvdyc7XG4gICAgICAgIH0gXG4gICAgfSxcbn1cblxuXG5leHBvcnQge1xuICAgIHRvZG9JdGVtc0ludHNcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IHByb2plY3RzQXJyLCBwcm9qZWN0c0xvZ2ljIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBwcm9qZWN0SW50cywgZm9ybUJ0bnNJbnRzIH0gZnJvbSAnLi9VSSc7XG5pbXBvcnQgeyB0b2RvSXRlbXNJbnRzIH0gZnJvbSAnLi90b2RvLWl0ZW1zJztcblxuLy8gd2hlbiBwYWdlIGZpcnN0IGxvYWRzIHNpZGViYXIgYW5kIG1haW4gRE9NIGVsZW1lbnRzIHNob3VsZCBiZSByZW5kZXJlZFxuXG5jb25zdCByZW5kZXIgPSB7XG4gICAgXG4gICAgcHJvamVjdHNMaXN0RGl2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMtbGlzdCcpLFxuICAgIFxuICAgIHRpdGxlRGl2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpLFxuXG4gICAgaXRlbXNEaXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWl0ZW1zJyksXG5cbiAgICByZW5kZXJTaWRlQmFyOiBcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgYWxsUHJvamVjdHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1wYXJlbnQnKTtcblxuICAgICAgICBpZiAocmVuZGVyLnByb2plY3RzTGlzdERpdi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHJlbmRlci5wcm9qZWN0c0xpc3REaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLXBhcmVudCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNpZGViYXIgd2lsbCBpdGVyYXRlIG92ZXIgcHJvamVjdHMgYXJyYXkgYW5kIHJlbmRlciBhIGVsZW1lbnQgZm9yIGVhY2ggcHJvamVjdFxuXG4gICAgICAgIHByb2plY3RzQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERpdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3REaXZUZXh0LmNsYXNzTGlzdC5hZGQoJ2FsbC1wcm9qZWN0cycpO1xuICAgICAgICAgICAgcHJvamVjdERpdlRleHQuZGF0YXNldC5pbmRleCA9IHByb2plY3RzQXJyLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2VGV4dC5kYXRhc2V0Lm5hbWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgcHJvamVjdERpdlRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2VGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5kYXRhc2V0LmluZGV4ID0gcHJvamVjdHNBcnIuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgICAgICAgICAgcmVuZGVyLnByb2plY3RzTGlzdERpdi5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c0Rpdik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxsLXByb2plY3RzJyk7XG5cbiAgICAgICAgYWxsUHJvamVjdHNMaXN0LmZvckVhY2gobm9kZSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBsZXQgY2xpY2tlZFByb2plY3RJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICByZW5kZXIucmVuZGVyTWFpbihjbGlja2VkUHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgIHByb2plY3RJbnRzLnNldE1haW5Qcm9qZWN0KGFsbFByb2plY3RzTGlzdCwgcmVuZGVyLnRpdGxlRGl2LnRleHRDb250ZW50KTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGRlbFByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgICAgIGRlbFByb2plY3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgaW5kID0gYnRuLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICBpZiAoaW5kID09IDApIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnWW91IGNhbm5vdCBkZWxldGUgdGhlIGhvbWUgcHJvamVjdCEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvamVjdEludHMuZGVsZXRlUHJvamVjdChpbmQpO1xuICAgICAgICAgICAgcmVuZGVyLnJlbmRlclNpZGVCYXIoKTtcbiAgICAgICAgICAgIHJlbmRlci5yZW5kZXJNYWluKCk7XG4gICAgICAgICAgICBwcm9qZWN0SW50cy5zZXRNYWluUHJvamVjdChhbGxQcm9qZWN0c0xpc3QsIHJlbmRlci50aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgLy8gbWFpbiBjb250ZW50IHdpbGwgcmVuZGVyIGEgcHJvamVjdCB0aWx0ZShkZWZhdWx0IHdpbGwgYmUgaG9tZSkgYW5kIGZvciBhbGwgdGhlIHRvZG8gaXRlbXMgb2YgdGhlIHByb2plY3QgYSBjaGVja2JveCB3aWxsIGJlIHJlbmRlcmVkXG5cbiAgICByZW5kZXJNYWluOiBcbiAgICBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICBsZXQgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtcy1wYXJlbnQnKTtcblxuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgcmVuZGVyLml0ZW1zRGl2LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhbGxJdGVtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGFsbEl0ZW1zRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbXMtcGFyZW50Jyk7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJbnRzLnNlbGVjdFByb2plY3QoaW5kZXgpO1xuICAgICAgICByZW5kZXIudGl0bGVEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHJlbmRlci5yZW5kZXJDaGVja2JveCh0YXNrLCBjdXJyZW50UHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spLCBhbGxJdGVtc0RpdikpO1xuICAgICAgICByZW5kZXIuaXRlbXNEaXYuYXBwZW5kQ2hpbGQoYWxsSXRlbXNEaXYpO1xuXG4gICAgICAgIGNvbnN0IGFsbEVkaXRJdGVtQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWl0ZW0nKTtcbiAgICAgICAgYWxsRWRpdEl0ZW1CdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmb3JtQnRuc0ludHMuc2hvd0ZybShmb3JtQnRucy5uZXdJdGVtRnJtKTtcbiAgICAgICAgICAgIGZvcm1CdG5zLm5ld0l0ZW1Gcm0uZGF0YXNldC5zdGF0dXMgPSAnZWRpdCc7XG4gICAgICAgICAgICBmb3JtQnRucy5uZXdJdGVtRnJtLmRhdGFzZXQuZWRpdEluZGV4ID0gYnRuLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICBsZXQgYWN0aXZlUHJvamVjdFRhc2sgPSBjdXJyZW50UHJvamVjdC50YXNrc1tidG4uZGF0YXNldC5pbmRleF07XG4gICAgICAgICAgICBmb3JtRWxlbWVudHMuaXRlbVRpdGxlLnZhbHVlID0gYWN0aXZlUHJvamVjdFRhc2sudGl0bGU7XG4gICAgICAgICAgICBmb3JtRWxlbWVudHMuaXRlbURlc2NyaXB0aW9uLnZhbHVlID0gYWN0aXZlUHJvamVjdFRhc2suZGVzY3JpcHRpb247XG4gICAgICAgICAgICBmb3JtRWxlbWVudHMuaXRlbUR1ZURhdGUudmFsdWUgPSBhY3RpdmVQcm9qZWN0VGFzay5kdWVEYXRlO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgYWxsRGVsZXRlSXRlbUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWl0ZW0nKTtcbiAgICAgICAgYWxsRGVsZXRlSXRlbUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3RJbnRzLmRlbGV0ZUl0ZW0oY3VycmVudFByb2plY3QudGFza3MsIGJ0bi5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0xvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KHJlbmRlci50aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0c0Fyci5pbmRleE9mKGFjdGl2ZVByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgICAgIHJlbmRlci5yZW5kZXJNYWluKGluZGV4KTtcbiAgICAgICAgICAgIHByb2plY3RJbnRzLnNldE1haW5Qcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGwtcHJvamVjdHMnKSwgcmVuZGVyLnRpdGxlRGl2LnRleHRDb250ZW50KTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGFsbENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcbiAgICAgICAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gZS50YXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBsZXQgYWN0aXZlVGFzayA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzW2J0bi5kYXRhc2V0LmluZGV4XTtcbiAgICAgICAgICAgIHByb2plY3RJbnRzLmNoZWNrSXRlbShzdGF0dXMsIGxhYmVsKTtcblxuICAgICAgICAgICAgdG9kb0l0ZW1zSW50cy5lZGl0U3RhdHVzKGFjdGl2ZVRhc2ssIHN0YXR1cyk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyQ2hlY2tib3g6XG4gICAgZnVuY3Rpb24ob2JqLCBpbmQsIHBhcmVudCkge1xuICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0uZGF0YXNldC5pbmRleCA9IGluZDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG4gICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBvYmoudGl0bGUpO1xuICAgICAgICBib3guZGF0YXNldC5pbmRleCA9IGluZDtcbiAgICAgICAgYm94LmNoZWNrZWQgPSBvYmouY29tcGxldGVkO1xuXG4gICAgICAgIGNvbnN0IGJveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJveExhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kaXNwbGF5Jyk7XG4gICAgICAgIGJveExhYmVsLnRleHRDb250ZW50ID0gYHRhc2s6ICR7b2JqLnRpdGxlfSBpcyBkdWUgYnk6ICR7b2JqLmR1ZURhdGV9IGFuZCBoYXMgYSBwcmlvcml0eSBsZXZlbCBzZXQgdG8gJHtvYmoucHJpb3JpdHl9YDtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIGJveExhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgYm94TGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgaGlkZGVuID0gZGVzY3JpcHRpb24uZ2V0QXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgaWYgKGhpZGRlbiA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZWRpdEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1pdGVtJyk7XG4gICAgICAgIGVkaXRJdGVtQnRuLmRhdGFzZXQuaW5kZXggPSBpbmQ7XG4gICAgICAgIGVkaXRJdGVtQnRuLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWxldGVJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWl0ZW0nKTtcbiAgICAgICAgZGVsZXRlSXRlbUJ0bi5kYXRhc2V0LmluZGV4ID0gaW5kO1xuICAgICAgICBkZWxldGVJdGVtQnRuLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIFxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChib3hMYWJlbCk7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVkaXRJdGVtQnRuKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlSXRlbUJ0bik7XG5cbiAgICAgICAgcHJvamVjdEludHMuY2hlY2tJdGVtKG9iai5jb21wbGV0ZWQsIGJveExhYmVsKTtcbiAgICAgICAgdG9kb0l0ZW1zSW50cy5zZXRQcmlvcml0eUNsYXNzKG9iai5wcmlvcml0eSwgbGlzdEl0ZW0pO1xuXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSxcblxufVxuXG5jb25zdCBmb3JtQnRucyA9IHtcbiAgICBzaG93UHJvamVjdEZybUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0JyksXG4gICAgc2hvd0l0ZW1zRnJtQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LWl0ZW0nKSxcbiAgICBjcmVhdGVQcm9qZWN0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKSxcbiAgICBjcmVhdGVJdGVtQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWl0ZW0nKSxcbiAgICBuZXdQcm9qZWN0RnJtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtZm9ybScpLFxuICAgIG5ld0l0ZW1Gcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctaXRlbS1mb3JtJyksXG4gICAgY2FuY2VsTmV3SXRlbUZybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpLFxufVxuXG5jb25zdCBmb3JtRWxlbWVudHMgPSB7XG4gICAgaXRlbVRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKSxcbiAgICBpdGVtRGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLFxuICAgIGl0ZW1EdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKSxcbiAgICBpdGVtSGlnaFByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlnaCcpLFxuICAgIGl0ZW1NZWRpdW1Qcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lZGl1bScpLFxuICAgIGl0ZW1Mb3dQcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvdycpICAgIFxufVxuXG5yZW5kZXIucmVuZGVyU2lkZUJhcigpO1xucmVuZGVyLnJlbmRlck1haW4oKTtcbnByb2plY3RJbnRzLnNldE1haW5Qcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGwtcHJvamVjdHMnKSwgcmVuZGVyLnRpdGxlRGl2LnRleHRDb250ZW50KTtcblxuZm9ybUJ0bnMuc2hvd1Byb2plY3RGcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGZvcm1CdG5zSW50cy5zaG93RnJtKGZvcm1CdG5zLm5ld1Byb2plY3RGcm0pO1xufSk7XG5mb3JtQnRucy5jcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgaWYgKCFpbnB1dC52YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBmb3JtQnRuc0ludHMuY3JlYXRlTmV3UHJvamVjdChpbnB1dCk7XG4gICAgcmVuZGVyLnJlbmRlclNpZGVCYXIoKTtcbiAgICBwcm9qZWN0SW50cy5zZXRNYWluUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxsLXByb2plY3RzJyksIHJlbmRlci50aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgZm9ybUJ0bnNJbnRzLmhpZGVGcm0oZm9ybUJ0bnMubmV3UHJvamVjdEZybSk7XG59KTtcbmZvcm1CdG5zLnNob3dJdGVtc0ZybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgZm9ybUJ0bnNJbnRzLnNob3dGcm0oZm9ybUJ0bnMubmV3SXRlbUZybSk7XG4gICAgZm9ybUJ0bnMubmV3SXRlbUZybS5kYXRhc2V0LnN0YXR1cyA9ICduZXcnO1xufSk7XG5mb3JtQnRucy5jcmVhdGVJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgIGxldCBpbnB1dFRpdGxlID0gZm9ybUVsZW1lbnRzLml0ZW1UaXRsZS52YWx1ZTtcbiAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGZvcm1FbGVtZW50cy5pdGVtRGVzY3JpcHRpb24udmFsdWU7XG4gICAgbGV0IGlucHV0RHVlRGF0ZSA9IGZvcm1FbGVtZW50cy5pdGVtRHVlRGF0ZS52YWx1ZTtcbiAgICBsZXQgaW5wdXRQcmlvcml0eSA9IGZvcm1CdG5zSW50cy5nZXRQcmlvcml0eVZhbHVlKGZvcm1FbGVtZW50cy5pdGVtSGlnaFByaW9yaXR5LCBmb3JtRWxlbWVudHMuaXRlbU1lZGl1bVByaW9yaXR5LCBmb3JtRWxlbWVudHMuaXRlbUxvd1ByaW9yaXR5KTtcbiAgICBcbiAgICBpZiAoIWlucHV0VGl0bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIWlucHV0RHVlRGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0xvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KHJlbmRlci50aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHNBcnIuaW5kZXhPZihhY3RpdmVQcm9qZWN0KTtcbiAgICBsZXQgc3RhdHVzID0gZm9ybUJ0bnMubmV3SXRlbUZybS5kYXRhc2V0LnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09ICduZXcnKSB7XG4gICAgICAgIHRvZG9JdGVtc0ludHMuY3JlYXRlVG9kb0l0ZW0oaW5wdXRUaXRsZSwgaW5wdXREZXNjcmlwdGlvbiwgaW5wdXREdWVEYXRlLCBpbnB1dFByaW9yaXR5LCBhY3RpdmVQcm9qZWN0KTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2VkaXQnKSB7XG4gICAgICAgIGxldCBhY3RpdmVJdGVtID0gYWN0aXZlUHJvamVjdC50YXNrc1tmb3JtQnRucy5uZXdJdGVtRnJtLmRhdGFzZXQuZWRpdEluZGV4XTtcbiAgICAgICAgdG9kb0l0ZW1zSW50cy5lZGl0VG9kb0l0ZW0oYWN0aXZlSXRlbSwgaW5wdXRUaXRsZSwgaW5wdXREZXNjcmlwdGlvbiwgaW5wdXREdWVEYXRlLCBpbnB1dFByaW9yaXR5KTtcbiAgICB9XG5cbiAgICByZW5kZXIucmVuZGVyTWFpbihpbmRleCk7XG4gICAgcHJvamVjdEludHMuc2V0TWFpblByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsbC1wcm9qZWN0cycpLCByZW5kZXIudGl0bGVEaXYudGV4dENvbnRlbnQpO1xuICAgIGZvcm1CdG5zSW50cy5yZXNldEl0ZW1Gcm0oZm9ybUVsZW1lbnRzLml0ZW1UaXRsZSwgZm9ybUVsZW1lbnRzLml0ZW1EZXNjcmlwdGlvbiwgZm9ybUVsZW1lbnRzLml0ZW1EdWVEYXRlLCBcbiAgICAgICAgZm9ybUVsZW1lbnRzLml0ZW1IaWdoUHJpb3JpdHksIGZvcm1FbGVtZW50cy5pdGVtTWVkaXVtUHJpb3JpdHksIGZvcm1FbGVtZW50cy5pdGVtTG93UHJpb3JpdHkpO1xuICAgIGZvcm1CdG5zSW50cy5oaWRlRnJtKGZvcm1CdG5zLm5ld0l0ZW1Gcm0pO1xufSk7XG5mb3JtQnRucy5jYW5jZWxOZXdJdGVtRnJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBmb3JtQnRuc0ludHMucmVzZXRJdGVtRnJtKGZvcm1FbGVtZW50cy5pdGVtVGl0bGUsIGZvcm1FbGVtZW50cy5pdGVtRGVzY3JpcHRpb24sIGZvcm1FbGVtZW50cy5pdGVtRHVlRGF0ZSwgXG4gICAgICAgIGZvcm1FbGVtZW50cy5pdGVtSGlnaFByaW9yaXR5LCBmb3JtRWxlbWVudHMuaXRlbU1lZGl1bVByaW9yaXR5LCBmb3JtRWxlbWVudHMuaXRlbUxvd1ByaW9yaXR5KTtcbiAgICBmb3JtQnRuc0ludHMuaGlkZUZybShmb3JtQnRucy5uZXdJdGVtRnJtKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9