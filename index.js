/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Generic/Universal stuff */
* {
    box-sizing: border-box;
}

:root {
    --base: rgb(238, 238, 238);
    --green-accent: rgb(139, 154, 70);
    --brown-accent: rgb(84, 18, 18);
    --primary: rgb(15, 14, 14);
    --link-accent: rgb(255, 255, 102);
    --high-priority: rgb(255, 0, 0, 0.9);
    --medium-priority: rgb(255, 255, 102, 0.9);
    --low-priority: rgb(0, 255, 0, 0.9)
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.hidden {
    opacity: 0;
    display: none !important;
}

button {
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    font-weight: bold;
    border-radius: 10px;
}

input,
textarea {
    border-radius: 5px;
}

::-webkit-calendar-picker-indicator {
    background-color: var(--base);
}

/* svg inside button */

button svg,
button img {
    min-height: 25px;
    min-width: 25px;
    margin: 0;
    width: fit-content;
    fill: inherit;
}

button:has(svg),
button:has(img) {
    border: none;
    background: none;
    background-size: cover;
}

/* Body Outside*/
html,
body {
    height: 100dvh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
}

body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    background-color: var(--primary);
    color: var(--primary);
}

/* Header */
header {
    padding: 0 3vw;
    background-color: var(--brown-accent);
    color: var(--base);
}

/* Main */
main {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 4fr;
    overflow: auto;
}

/* Sidebar */
aside#sidebar {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    overflow: auto;
    padding: 2vmax;
    justify-items: center;
    background-color: var(--green-accent);
    /* color: var(--brown-accent); */
}

button.add-project {
    background: var(--brown-accent);
    color: var(--base);
    font-size: 1.1rem;
    padding: 1vh 2vw;
    border: 2px solid var(--primary);
}

div#project-form-section {
    min-height: 5vh;
}

div#projects-section,
ul.project-container {
    width: 100%;
    overflow: auto;
}

div#projects-section>h2 {
    text-align: center;
}

li.project {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    align-items: center;
    justify-items: center;
    border: 1px solid black;
    margin-bottom: 3vh;
    background-color: var(--brown-accent);
    color: var(--base);
    fill: var(--base);
    border-radius: 10px;
}

li.project img {
    filter: invert(100%);
}

form#edit-project-form {
    grid-column: 1 / 3;
    padding: 5vh 1vw;
}

form#edit-project-form>div.controls-section {
    margin: 2vh 0;
    text-align: center;
}

form#add-project-form {
    display: grid;
    justify-items: center;
    gap: 2vh;
}

form#add-project-form>div.form-header {
    display: grid;
    grid-template-columns: 1fr 3vw;
    align-items: center;
    justify-items: center;
    width: 100%;
}

form#add-project-form>div.controls-section {
    margin-top: 3vh;
}

/* Contents section */
div#content-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    overflow: auto;
    padding: 2vmax;
    gap: 2vh;
    max-width: 65%;
    margin: 0 auto;
    color: var(--base);
}

button.add-todo {
    background-color: var(--base);
    color: var(--primary);
    font-size: 1.1rem;
    padding: 1vh 2vw;
}

div#todo-form-section {
    display: grid;
}

div#todo-form-section>button {
    justify-self: end;
}

div#todos-section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    overflow: auto;
}

div#todos-section>h2 {
    text-align: center;
}

ul.todo-container {
    overflow: auto;
}

li.todo-item {
    border: 1px solid black;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 50px 1fr 100px;
    align-items: center;
    max-width: 500px;
    margin-bottom: 2vh;
    color: var(--primary);
    border-radius: 10px;
}

li.completed-todo {
    text-decoration: line-through;
}

li.high-priority {
    background-color: var(--high-priority);
}

li.mid-priority {
    background-color: var(--medium-priority);
}

li.low-priority {
    background-color: var(--low-priority);
}

/* Add todo form */

form#add-todo-form,
form#edit-todo-form {
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2vh;
    min-height: 60%;
    padding: 5vh 5vw;
    background-color: var(--green-accent);
    border-radius: 10px;
}

form#add-todo-form input,
form#edit-todo-form input,
form#add-todo-form textarea,
form#edit-todo-form textarea {
    background-color: var(--brown-accent);
    color: var(--base);
}

form#add-todo-form>div.form-header,
form#edit-todo-form>div.form-header {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 40px;
}

form#add-todo-form h2,
form#edit-todo-form h2 {
    text-align: center;
}

div.title-section,
div.description-section,
div.dueDate-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vh;
}

div.options-container {
    display: flex;
    gap: 1vw;
}


/* Modal */

div.modal {
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.5);
    display: grid;
    align-items: center;
    justify-items: center;
}

/* all controls section */
div.todo-controls,
div.project-controls-section {
    display: flex;
    gap: 12px;
}

div.todo-controls {
    justify-self: center;
}

form#add-todo-form>div.controls-section,
form#edit-todo-form>div.controls-section {
    text-align: center;

}

form#add-todo-form>div.controls-section button,
form#edit-todo-form>div.controls-section button {
    background-color: var(--brown-accent);
    color: var(--base);
    font-size: 1.1rem;
    padding: 5px 3vw;
}

/* Error Section */

div.modal>div {
    background-color: var(--brown-accent);
    color: var(--green-accent);
    padding: 1vmax;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

button.dismiss-error {
    background-color: var(--green-accent);
    border: 2px solid var(--green-accent);
    color: var(--primary);
    padding: 8px;
    font-size: 1.2rem;
    border-radius: 100%;
}

/* Footer */

footer {
    text-align: center;
    color: var(--base);
    background-color: var(--brown-accent);
}

footer a,
footer a:visited {
    text-decoration: none;
    color: var(--link-accent);
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* Generic/Universal stuff */\n* {\n    box-sizing: border-box;\n}\n\n:root {\n    --base: rgb(238, 238, 238);\n    --green-accent: rgb(139, 154, 70);\n    --brown-accent: rgb(84, 18, 18);\n    --primary: rgb(15, 14, 14);\n    --link-accent: rgb(255, 255, 102);\n    --high-priority: rgb(255, 0, 0, 0.9);\n    --medium-priority: rgb(255, 255, 102, 0.9);\n    --low-priority: rgb(0, 255, 0, 0.9)\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.hidden {\n    opacity: 0;\n    display: none !important;\n}\n\nbutton {\n    padding: 0;\n    cursor: pointer;\n    font-family: inherit;\n    font-weight: bold;\n    border-radius: 10px;\n}\n\ninput,\ntextarea {\n    border-radius: 5px;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-color: var(--base);\n}\n\n/* svg inside button */\n\nbutton svg,\nbutton img {\n    min-height: 25px;\n    min-width: 25px;\n    margin: 0;\n    width: fit-content;\n    fill: inherit;\n}\n\nbutton:has(svg),\nbutton:has(img) {\n    border: none;\n    background: none;\n    background-size: cover;\n}\n\n/* Body Outside*/\nhtml,\nbody {\n    height: 100dvh;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto Condensed', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr auto;\n    background-color: var(--primary);\n    color: var(--primary);\n}\n\n/* Header */\nheader {\n    padding: 0 3vw;\n    background-color: var(--brown-accent);\n    color: var(--base);\n}\n\n/* Main */\nmain {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 4fr;\n    overflow: auto;\n}\n\n/* Sidebar */\naside#sidebar {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    overflow: auto;\n    padding: 2vmax;\n    justify-items: center;\n    background-color: var(--green-accent);\n    /* color: var(--brown-accent); */\n}\n\nbutton.add-project {\n    background: var(--brown-accent);\n    color: var(--base);\n    font-size: 1.1rem;\n    padding: 1vh 2vw;\n    border: 2px solid var(--primary);\n}\n\ndiv#project-form-section {\n    min-height: 5vh;\n}\n\ndiv#projects-section,\nul.project-container {\n    width: 100%;\n    overflow: auto;\n}\n\ndiv#projects-section>h2 {\n    text-align: center;\n}\n\nli.project {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: 1fr;\n    align-items: center;\n    justify-items: center;\n    border: 1px solid black;\n    margin-bottom: 3vh;\n    background-color: var(--brown-accent);\n    color: var(--base);\n    fill: var(--base);\n    border-radius: 10px;\n}\n\nli.project img {\n    filter: invert(100%);\n}\n\nform#edit-project-form {\n    grid-column: 1 / 3;\n    padding: 5vh 1vw;\n}\n\nform#edit-project-form>div.controls-section {\n    margin: 2vh 0;\n    text-align: center;\n}\n\nform#add-project-form {\n    display: grid;\n    justify-items: center;\n    gap: 2vh;\n}\n\nform#add-project-form>div.form-header {\n    display: grid;\n    grid-template-columns: 1fr 3vw;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n}\n\nform#add-project-form>div.controls-section {\n    margin-top: 3vh;\n}\n\n/* Contents section */\ndiv#content-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr auto;\n    overflow: auto;\n    padding: 2vmax;\n    gap: 2vh;\n    max-width: 65%;\n    margin: 0 auto;\n    color: var(--base);\n}\n\nbutton.add-todo {\n    background-color: var(--base);\n    color: var(--primary);\n    font-size: 1.1rem;\n    padding: 1vh 2vw;\n}\n\ndiv#todo-form-section {\n    display: grid;\n}\n\ndiv#todo-form-section>button {\n    justify-self: end;\n}\n\ndiv#todos-section {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    overflow: auto;\n}\n\ndiv#todos-section>h2 {\n    text-align: center;\n}\n\nul.todo-container {\n    overflow: auto;\n}\n\nli.todo-item {\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 50px 1fr 100px;\n    align-items: center;\n    max-width: 500px;\n    margin-bottom: 2vh;\n    color: var(--primary);\n    border-radius: 10px;\n}\n\nli.completed-todo {\n    text-decoration: line-through;\n}\n\nli.high-priority {\n    background-color: var(--high-priority);\n}\n\nli.mid-priority {\n    background-color: var(--medium-priority);\n}\n\nli.low-priority {\n    background-color: var(--low-priority);\n}\n\n/* Add todo form */\n\nform#add-todo-form,\nform#edit-todo-form {\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 2vh;\n    min-height: 60%;\n    padding: 5vh 5vw;\n    background-color: var(--green-accent);\n    border-radius: 10px;\n}\n\nform#add-todo-form input,\nform#edit-todo-form input,\nform#add-todo-form textarea,\nform#edit-todo-form textarea {\n    background-color: var(--brown-accent);\n    color: var(--base);\n}\n\nform#add-todo-form>div.form-header,\nform#edit-todo-form>div.form-header {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 40px;\n}\n\nform#add-todo-form h2,\nform#edit-todo-form h2 {\n    text-align: center;\n}\n\ndiv.title-section,\ndiv.description-section,\ndiv.dueDate-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1vh;\n}\n\ndiv.options-container {\n    display: flex;\n    gap: 1vw;\n}\n\n\n/* Modal */\n\ndiv.modal {\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgb(0, 0, 0, 0.5);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n/* all controls section */\ndiv.todo-controls,\ndiv.project-controls-section {\n    display: flex;\n    gap: 12px;\n}\n\ndiv.todo-controls {\n    justify-self: center;\n}\n\nform#add-todo-form>div.controls-section,\nform#edit-todo-form>div.controls-section {\n    text-align: center;\n\n}\n\nform#add-todo-form>div.controls-section button,\nform#edit-todo-form>div.controls-section button {\n    background-color: var(--brown-accent);\n    color: var(--base);\n    font-size: 1.1rem;\n    padding: 5px 3vw;\n}\n\n/* Error Section */\n\ndiv.modal>div {\n    background-color: var(--brown-accent);\n    color: var(--green-accent);\n    padding: 1vmax;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton.dismiss-error {\n    background-color: var(--green-accent);\n    border: 2px solid var(--green-accent);\n    color: var(--primary);\n    padding: 8px;\n    font-size: 1.2rem;\n    border-radius: 100%;\n}\n\n/* Footer */\n\nfooter {\n    text-align: center;\n    color: var(--base);\n    background-color: var(--brown-accent);\n}\n\nfooter a,\nfooter a:visited {\n    text-decoration: none;\n    color: var(--link-accent);\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/scripts/displayComponents.ts":
/*!******************************************!*\
  !*** ./src/scripts/displayComponents.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodoComponent: () => (/* binding */ editTodoComponent),
/* harmony export */   sidebarComponent: () => (/* binding */ sidebarComponent),
/* harmony export */   todoComponent: () => (/* binding */ todoComponent)
/* harmony export */ });
/* harmony import */ var _eventsObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsObserver */ "./src/scripts/eventsObserver.ts");
/* harmony import */ var _images_note_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/note-edit.svg */ "./src/images/note-edit.svg");
/* harmony import */ var _images_delete_forever_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/delete-forever.svg */ "./src/images/delete-forever.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/close.svg */ "./src/images/close.svg");




// the edit project name form
const editProjectNameFrmComponent = (currentName, projectId) => {
    // creating the form itself
    const frm = document.createElement('form');
    frm.id = "edit-project-form";
    // a hidden input for providing projectId
    const projectIdInput = document.createElement('input');
    projectIdInput.type = "text";
    projectIdInput.name = "project-id";
    projectIdInput.value = projectId;
    projectIdInput.hidden = true;
    projectIdInput.readOnly = true;
    frm.appendChild(projectIdInput);
    // the name section
    const nameSection = document.createElement('div');
    nameSection.classList.add('name-section');
    const projectNameLabel = document.createElement('label');
    projectNameLabel.htmlFor = "project-name";
    projectNameLabel.textContent = "Project Name";
    projectNameLabel.hidden = true;
    nameSection.appendChild(projectNameLabel);
    const projectNameInput = document.createElement('input');
    projectNameInput.type = "text";
    projectNameInput.name = "project-name";
    projectNameInput.id = "edit-project-name";
    projectNameInput.value = currentName;
    nameSection.appendChild(projectNameInput);
    // cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-edit-project');
    cancelBtn.type = "button";
    cancelBtn.appendChild(cancelIconComponent());
    cancelBtn.addEventListener("click", function () {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("cancelEditProjectNameBtnClicked", this);
    });
    nameSection.appendChild(cancelBtn);
    frm.appendChild(nameSection);
    // a controls section
    const controlsSection = document.createElement('div');
    controlsSection.classList.add('controls-section');
    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.classList.add("submit-edit-project-btn");
    submitBtn.textContent = "Confirm";
    controlsSection.appendChild(submitBtn);
    frm.appendChild(controlsSection);
    return frm;
};
// the sidebar component
const sidebarComponent = (project) => {
    // the li element holding all the elements
    const projectLi = document.createElement('li');
    projectLi.dataset.projectId = project.projectId;
    // the project name
    const projectName = document.createElement('h3');
    projectName.textContent = project.projectName;
    projectName.dataset.projectId = project.projectId;
    // clicking on the project name "selects" the project to be displayed
    projectName.addEventListener("click", function () {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectChanged", { project });
    });
    projectLi.appendChild(projectName);
    // a controls section
    const projectControls = document.createElement('div');
    projectControls.classList.add('project-controls-section');
    // the edit button
    const editProjectName = document.createElement('button');
    editProjectName.classList.add('edit-project-name');
    editProjectName.value = project.projectId;
    editProjectName.appendChild(editIconComponent());
    editProjectName.addEventListener("click", function () {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("editProjectNameBtnClicked", this);
    });
    projectControls.appendChild(editProjectName);
    // the delete button
    const deleteProject = document.createElement('button');
    deleteProject.classList.add('delete-project');
    deleteProject.value = project.projectId;
    deleteProject.appendChild(deleteIconComponent());
    deleteProject.addEventListener("click", function () {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("deleteProjectClicked", { projectId: project.projectId });
    });
    projectControls.appendChild(deleteProject);
    projectLi.appendChild(projectControls);
    // the edit project name component, initially hidden
    const editNameFrm = editProjectNameFrmComponent(project.projectName, project.projectId);
    editNameFrm.classList.add('hidden');
    projectLi.appendChild(editNameFrm);
    projectLi.classList.add('project');
    return projectLi;
};
// the todo component
const todoComponent = (todo) => {
    // creating an identifier object which can be passed to any appropriate 
    // function
    const todoIdentifier = {
        parent: todo.parentProject,
        todoid: todo.uid
    };
    // creating the li element container holding the entire todo item
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-item');
    // the checkbox for marking the todo as done
    const doneStatusDisplay = document.createElement('input');
    doneStatusDisplay.type = "checkbox";
    doneStatusDisplay.checked = todo.completed;
    doneStatusDisplay.value = todo.uid;
    doneStatusDisplay.addEventListener("click", function () {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("toggleTodoStatusRequest", todoIdentifier);
    });
    todoLi.appendChild(doneStatusDisplay);
    // container for title and description
    const todoMainContent = document.createElement('div');
    todoMainContent.classList.add('todo-main-content');
    // the todo title 
    const titleDisplay = document.createElement('p');
    titleDisplay.textContent =
        `Task ${todo.title} is due by 
        ${new Date(todo.dueDate).toDateString()} 
        with a priority of ${todo.priority}`;
    todoMainContent.appendChild(titleDisplay);
    // the todo description
    const descriptionDisplay = document.createElement('p');
    descriptionDisplay.textContent = `Task Description: ${todo.description}`;
    descriptionDisplay.classList.add('hidden');
    todoMainContent.appendChild(descriptionDisplay);
    todoLi.appendChild(todoMainContent);
    // the controls section housing the edit and delete buttons
    const controlSection = document.createElement('div');
    controlSection.classList.add('todo-controls');
    // the edit button
    const editTodoBtn = document.createElement('button');
    editTodoBtn.classList.add('edit-todo-btn');
    editTodoBtn.value = JSON.stringify(todoIdentifier);
    editTodoBtn.appendChild(editIconComponent());
    editTodoBtn.addEventListener("click", () => {
        // when the edit todo button is clicked render the edit todo form
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("editTodoBtnClicked", todo);
    });
    controlSection.appendChild(editTodoBtn);
    // the delete button
    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.classList.add('delete-todo-btn');
    deleteTodoBtn.value = JSON.stringify(todoIdentifier);
    deleteTodoBtn.appendChild(deleteIconComponent());
    // event handler for deleting the todo
    deleteTodoBtn.addEventListener("click", () => {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("deleteTodoBtnClicked", todoIdentifier);
    });
    controlSection.appendChild(deleteTodoBtn);
    todoLi.appendChild(controlSection);
    //  when the todo title is clicked show the todo description
    titleDisplay.addEventListener("click", function () {
        descriptionDisplay.classList.toggle("hidden");
    });
    // based on the todo priority it will be color coded
    switch (todo.priority) {
        case ("HIGH"):
            todoLi.classList.add('high-priority');
            break;
        case ("MEDIUM"):
            todoLi.classList.add('mid-priority');
            break;
        case ("LOW"):
            todoLi.classList.add("low-priority");
            break;
    }
    // put a strikethrough on the entire todo if it's completed
    todo.completed ? todoLi.classList.add('completed-todo') : todoLi.classList.remove('completed-todo');
    return todoLi;
};
// the edit todo form
const editTodoComponent = (todo) => {
    // the form itself
    const editTodoFrm = document.createElement('form');
    editTodoFrm.id = "edit-todo-form";
    // the form header
    const frmHeader = document.createElement('div');
    frmHeader.classList.add('form-header');
    // the heading
    const frmHeading = document.createElement('h2');
    frmHeading.textContent = "Edit Todo";
    frmHeader.appendChild(frmHeading);
    // the cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.type = "button";
    cancelBtn.classList.add('cancel-edit-todo');
    cancelBtn.appendChild(cancelIconComponent());
    frmHeader.appendChild(cancelBtn);
    // a hidden input holding the todoId
    const todoId = document.createElement('input');
    todoId.type = "text";
    todoId.name = "todoId";
    todoId.value = todo.uid;
    todoId.hidden = true;
    todoId.readOnly = true;
    frmHeader.appendChild(todoId);
    editTodoFrm.appendChild(frmHeader);
    // the title section
    const titleSection = document.createElement('div');
    titleSection.classList.add('title-section');
    // the label
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = "title";
    titleLabel.textContent = "Title";
    titleSection.appendChild(titleLabel);
    // the input for the title
    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.name = "title";
    titleInput.id = "title";
    titleInput.value = todo.title;
    titleSection.appendChild(titleInput);
    editTodoFrm.appendChild(titleSection);
    // description section
    const descriptionSection = document.createElement('div');
    descriptionSection.classList.add('description-section');
    // label for dsescription
    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = "description";
    descriptionSection.appendChild(descriptionLabel);
    // descrprition input
    const descriptionInput = document.createElement('textarea');
    descriptionInput.name = "description";
    descriptionInput.id = "description";
    descriptionInput.cols = 30;
    descriptionInput.rows = 10;
    descriptionInput.value = todo.description;
    descriptionSection.appendChild(descriptionInput);
    editTodoFrm.appendChild(descriptionSection);
    // dueDate section
    const dueDateSection = document.createElement('div');
    dueDateSection.classList.add('dueDate-section');
    // label for dueDate
    const dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = "dueDate";
    dueDateLabel.textContent = "Due by";
    dueDateSection.appendChild(dueDateLabel);
    // dueDate input
    const dueDateInput = document.createElement('input');
    dueDateInput.type = "date";
    dueDateInput.name = "dueDate";
    dueDateInput.id = "dueDate";
    dueDateInput.value = new Date(todo.dueDate).toISOString().substring(0, 10);
    dueDateSection.appendChild(dueDateInput);
    editTodoFrm.appendChild(dueDateSection);
    // the priority section
    const prioritySection = document.createElement('div');
    prioritySection.classList.add('priority-section');
    // a heading indicating the priority section
    const priorityHeading = document.createElement('h3');
    priorityHeading.textContent = "Set Priority";
    prioritySection.appendChild(priorityHeading);
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');
    // A section for high option
    const highOptionContainer = document.createElement('div');
    highOptionContainer.classList.add('radio-option');
    // high option radio button
    const highOption = document.createElement('input');
    highOption.type = "radio";
    highOption.name = "priority";
    highOption.id = "high";
    highOption.value = "HIGH";
    highOptionContainer.appendChild(highOption);
    // high option label
    const highOptionLabel = document.createElement('label');
    highOptionLabel.htmlFor = "high";
    highOptionLabel.textContent = "High";
    highOptionContainer.appendChild(highOptionLabel);
    optionsContainer.appendChild(highOptionContainer);
    // A section for medium button
    const midOptionContainer = document.createElement('div');
    midOptionContainer.classList.add('radio-option');
    //  medium option radio button
    const midOption = document.createElement('input');
    midOption.type = "radio";
    midOption.name = "priority";
    midOption.id = "medium";
    midOption.value = "MEDIUM";
    midOptionContainer.appendChild(midOption);
    // medium option label
    const midOptionLabel = document.createElement('label');
    midOptionLabel.htmlFor = "medium";
    midOptionLabel.textContent = "Medium";
    midOptionContainer.appendChild(midOptionLabel);
    optionsContainer.appendChild(midOptionContainer);
    // A section for low option
    const lowOptionContainer = document.createElement('div');
    lowOptionContainer.classList.add('radio-option');
    // low option radio button
    const lowOption = document.createElement('input');
    lowOption.type = "radio";
    lowOption.name = "priority";
    lowOption.id = "low";
    lowOption.value = "LOW";
    lowOptionContainer.appendChild(lowOption);
    // a label for low option
    const lowOptionLabel = document.createElement('label');
    lowOptionLabel.htmlFor = "low";
    lowOptionLabel.textContent = "Low";
    lowOptionContainer.appendChild(lowOptionLabel);
    optionsContainer.appendChild(lowOptionContainer);
    prioritySection.appendChild(optionsContainer);
    // based on the current todo's data select appropriate option
    switch (todo.priority) {
        case ("HIGH"):
            highOption.checked = true;
            break;
        case ("MEDIUM"):
            midOption.checked = true;
            break;
        case ("LOW"):
            lowOption.checked = true;
            break;
    }
    editTodoFrm.appendChild(prioritySection);
    // a controls section
    const controlsSection = document.createElement('div');
    controlsSection.classList.add('controls-section');
    // the submit button
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-edit-todo-btn');
    submitBtn.textContent = "Confirm";
    controlsSection.appendChild(submitBtn);
    editTodoFrm.appendChild(controlsSection);
    return editTodoFrm;
};
const editIconComponent = () => {
    const icon = document.createElement('img');
    icon.src = _images_note_edit_svg__WEBPACK_IMPORTED_MODULE_1__;
    return icon;
};
const deleteIconComponent = () => {
    const icon = document.createElement('img');
    icon.src = _images_delete_forever_svg__WEBPACK_IMPORTED_MODULE_2__;
    return icon;
};
const cancelIconComponent = () => {
    const icon = document.createElement('img');
    icon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_3__;
    return icon;
};



/***/ }),

/***/ "./src/scripts/displayController.ts":
/*!******************************************!*\
  !*** ./src/scripts/displayController.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventsObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsObserver */ "./src/scripts/eventsObserver.ts");
/* harmony import */ var _domSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domSelectors */ "./src/scripts/domSelectors.ts");
/* harmony import */ var _displayComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayComponents */ "./src/scripts/displayComponents.ts");



// render the sidebar
const renderSidebar = (data) => {
    const todoList = data.list;
    const projectsSection = (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getProjectsSection)();
    // remove all current contents of the sidebar
    projectsSection.innerHTML = '';
    const heading = document.createElement('h2');
    heading.textContent = "Projects";
    projectsSection.appendChild(heading);
    const sidebarContainer = document.createElement('ul');
    sidebarContainer.classList.add('project-container');
    // create a li item by calling the sidebarComponent for each project
    todoList.forEach(project => {
        sidebarContainer.appendChild((0,_displayComponents__WEBPACK_IMPORTED_MODULE_2__.sidebarComponent)(project));
    });
    projectsSection.appendChild(sidebarContainer);
    // publish the "sidebarRendered" event
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("sidebarRendered");
};
// render the project
const renderProject = (data) => {
    var _a;
    const selectedProject = data.project;
    const todoSection = (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getTodosSection)();
    // remove the current contents of the project section
    todoSection.innerHTML = '';
    const heading = document.createElement('h2');
    heading.textContent = selectedProject.projectName;
    todoSection.appendChild(heading);
    const todoContainer = document.createElement('ul');
    todoContainer.classList.add('todo-container');
    todoContainer.dataset.projectId = selectedProject.projectId;
    // for each todo item in the project render the todoComponent as li element
    if (selectedProject.todos.length === 0) {
        todoContainer.textContent = "You don't have any todos in this project, add a new todo.";
    }
    else {
        (_a = selectedProject.todos) === null || _a === void 0 ? void 0 : _a.forEach(todo => {
            todoContainer.appendChild((0,_displayComponents__WEBPACK_IMPORTED_MODULE_2__.todoComponent)(todo));
        });
    }
    todoSection.appendChild(todoContainer);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectRendered");
};
// show/hide the add project form
const toggleAddProjectForm = () => {
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getProjectFrm)().classList.toggle('hidden');
};
// show/hide the add todo form
const toggleAddTodoForm = () => {
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getTodoFrm)().classList.toggle('hidden');
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getAddTodoModal)().classList.toggle('hidden');
    // hide the todos section when add todo form is shown
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getTodosSection)().classList.toggle('hidden');
};
// event handler when edit project name is clicked, this is getting the data from the event publisher
const handleEditProjectNameBtnClick = (btn) => {
    const projectControls = (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getProjectControls)(btn.parentElement.parentElement);
    const editFrm = projectControls.nextElementSibling;
    const projectNameDisplay = projectControls.previousElementSibling;
    editFrm.classList.remove('hidden');
    projectControls.classList.add('hidden');
    projectNameDisplay.classList.add('hidden');
    // attach the submit event listener to the form
    editFrm.addEventListener("submit", function (ev) {
        // prevent the default action of the submit event
        ev.preventDefault();
        const formData = new FormData(this);
        const payLoad = {
            projectId: formData.get("project-id").toString(),
            newName: formData.get("project-name").toString()
        };
        // publish the "projectNameChangeRequest" event with the formData as the EventData
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectNameChangeRequest", payLoad);
    });
};
// event handler when the cancel edit project name is clicked
const handleCancelEditProjectNameBtnClick = (btn) => {
    const projectControls = (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getProjectControls)(btn.parentElement.parentElement.parentElement);
    projectControls.nextElementSibling.classList.add('hidden');
    projectControls.previousElementSibling.classList.remove('hidden');
    projectControls.classList.remove('hidden');
};
// event handler for the edit todo item button is clicked, it get's the data from the event
// publisher
const handleEditTodoBtnClick = (todo) => {
    const editTodoSection = (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getEditTodoSection)();
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getTodosSection)().classList.toggle('hidden');
    editTodoSection.classList.remove('hidden');
    // remove the current contents of the editTodoSection
    editTodoSection.innerHTML = '';
    // create a modal
    const modalDisplay = document.createElement('div');
    modalDisplay.classList.add('modal');
    // render a new editTodoForm with the provided todo data
    modalDisplay.appendChild((0,_displayComponents__WEBPACK_IMPORTED_MODULE_2__.editTodoComponent)(todo));
    editTodoSection.appendChild(modalDisplay);
    // we will attach the event listeners here because the edit form is rendered only after the 
    // edit button is clicked
    // attach the submit event listener
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getEditTodoFrm)().addEventListener("submit", function (ev) {
        // prevent the default action of the submit event
        ev.preventDefault();
        const formData = new FormData(this);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value.toString();
        }
        data["parentProject"] = todo.parentProject;
        // publish the "editTodoRequest" event with the formData as EventData
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("editTodoRequest", data);
        // reset the todo form
        this.reset();
        editTodoSection.classList.add('hidden');
        (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getTodosSection)().classList.toggle('hidden');
    });
    // attach the cancel event listener
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getCancelEditTodoBtn)().addEventListener("click", function (ev) {
        editTodoSection.classList.add('hidden');
        (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getTodosSection)().classList.toggle('hidden');
    });
};
// show error message
const handleShowError = (data) => {
    const errorSection = (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getErrorSection)();
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getErrorMsgDisplay)().textContent = data.errorMsg;
    errorSection.classList.remove('hidden');
    errorSection.firstElementChild.classList.toggle('hidden');
    // attach event listener to the button to dismiss error
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getDismissErrorBtn)().addEventListener("click", function (ev) {
        errorSection.classList.add('hidden');
        errorSection.firstElementChild.classList.toggle('hidden');
    });
};
// event listener for the add new project button
(0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getAddProjectBtn)().addEventListener("click", function (ev) {
    this.classList.add('hidden');
    toggleAddProjectForm();
});
// event listener to cancel the add new project
(0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getCancelAddProjectBtn)().addEventListener("click", () => {
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getAddProjectBtn)().classList.remove('hidden');
    toggleAddProjectForm();
});
// event listener for the add new todo form
(0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getAddTodoBtn)().addEventListener("click", function (ev) {
    this.classList.add('hidden');
    toggleAddTodoForm();
});
// event listener to cancel the add new todo
(0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getCancelAddTodoBtn)().addEventListener("click", () => {
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getAddTodoBtn)().classList.remove('hidden');
    toggleAddTodoForm();
});
// attaching the submit event handler for the add new project form
(0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getProjectFrm)().addEventListener("submit", function (ev) {
    // prevent the default action of the submit event
    ev.preventDefault();
    const formData = new FormData(this);
    // publish the "newProjectCreationRequest" event with the name as the EventData
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("newProjectCreationRequest", { projectName: formData.get("project-name").toString() });
    // reset the form
    this.reset();
    toggleAddProjectForm();
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getAddProjectBtn)().classList.remove('hidden');
});
// attaching the submit event handler for the add new todo form
(0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getTodoFrm)().addEventListener("submit", function (ev) {
    // prevent the default action of the submit event
    ev.preventDefault();
    const formData = new FormData(this);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value.toString();
    }
    data["parentProject"] = (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getTodoContainer)().dataset.projectId;
    // publish the "newTodoItemCreationRequest" event with the formData as EventData
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("newTodoItemCreationRequest", data);
    // reset the form
    this.reset();
    toggleAddTodoForm();
    (0,_domSelectors__WEBPACK_IMPORTED_MODULE_1__.getAddTodoBtn)().classList.remove('hidden');
});
// subscribe to all necessary events
// whenever "listChanged" is fired we'll re-render the sidebar.
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("listChanged", renderSidebar);
// whenever "projectChanged" is fired we'll re-render the project section.
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("projectChanged", renderProject);
// event handler for edit project name button
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("editProjectNameBtnClicked", handleEditProjectNameBtnClick);
// event handler for cancel edit project name button
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("cancelEditProjectNameBtnClicked", handleCancelEditProjectNameBtnClick);
// event handler for edit todo button
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("editTodoBtnClicked", handleEditTodoBtnClick);
// we'll display errors(currently when user tries to delete default project)
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("showError", handleShowError);


/***/ }),

/***/ "./src/scripts/domSelectors.ts":
/*!*************************************!*\
  !*** ./src/scripts/domSelectors.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAddProjectBtn: () => (/* binding */ getAddProjectBtn),
/* harmony export */   getAddTodoBtn: () => (/* binding */ getAddTodoBtn),
/* harmony export */   getAddTodoModal: () => (/* binding */ getAddTodoModal),
/* harmony export */   getCancelAddProjectBtn: () => (/* binding */ getCancelAddProjectBtn),
/* harmony export */   getCancelAddTodoBtn: () => (/* binding */ getCancelAddTodoBtn),
/* harmony export */   getCancelEditTodoBtn: () => (/* binding */ getCancelEditTodoBtn),
/* harmony export */   getDismissErrorBtn: () => (/* binding */ getDismissErrorBtn),
/* harmony export */   getEditProjectNameFrms: () => (/* binding */ getEditProjectNameFrms),
/* harmony export */   getEditTodoFrm: () => (/* binding */ getEditTodoFrm),
/* harmony export */   getEditTodoSection: () => (/* binding */ getEditTodoSection),
/* harmony export */   getErrorMsgDisplay: () => (/* binding */ getErrorMsgDisplay),
/* harmony export */   getErrorSection: () => (/* binding */ getErrorSection),
/* harmony export */   getProjectControls: () => (/* binding */ getProjectControls),
/* harmony export */   getProjectFrm: () => (/* binding */ getProjectFrm),
/* harmony export */   getProjectsSection: () => (/* binding */ getProjectsSection),
/* harmony export */   getTodoContainer: () => (/* binding */ getTodoContainer),
/* harmony export */   getTodoFrm: () => (/* binding */ getTodoFrm),
/* harmony export */   getTodosSection: () => (/* binding */ getTodosSection)
/* harmony export */ });
// functions for selecting all necessary dom elements, we're doing this because if we instead declare them
// as variables, the selector will return undefined if the dom element is not yet rendered, by instead turning
// it to a function we can query them on runtime avoiding the chances of the variable being undefined.
const getProjectsSection = () => document.querySelector('div#projects-section');
const getTodosSection = () => document.querySelector('div#todos-section');
const getTodoContainer = () => document.querySelector('ul.todo-container');
const getAddProjectBtn = () => document.querySelector('button.add-project');
const getCancelAddProjectBtn = () => document.querySelector('button.cancel-add-project');
const getAddTodoModal = () => document.querySelector('div#todo-form-section>div.modal');
const getAddTodoBtn = () => document.querySelector('button.add-todo');
const getCancelAddTodoBtn = () => document.querySelector('button.cancel-add-todo');
const getProjectFrm = () => document.querySelector('form#add-project-form');
const getTodoFrm = () => document.querySelector('form#add-todo-form');
const getEditTodoSection = () => document.querySelector('div#edit-todo-form-section');
const getEditTodoFrm = () => document.querySelector('form#edit-todo-form');
const getCancelEditTodoBtn = () => document.querySelector('button.cancel-edit-todo');
const getErrorSection = () => document.querySelector('div#errors-section');
const getErrorMsgDisplay = () => document.querySelector('p.error-msg');
const getDismissErrorBtn = () => document.querySelector('button.dismiss-error');
const getProjectControls = (parent) => parent.querySelector('div.project-controls-section');
const getEditProjectNameFrms = () => document.querySelectorAll('form#edit-project-form');



/***/ }),

/***/ "./src/scripts/eventsObserver.ts":
/*!***************************************!*\
  !*** ./src/scripts/eventsObserver.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// The evnets observer object basically the pub/sub object
const EventsObserver = {
    // all the evnets subscribed to
    events: {},
    subscribe: function (eventName, eventHandler) {
        // If the provided event name is present in events object, add the passed in
        // eventHandler to that event's list, if not create a new event and add the event handler
        if (this.events[eventName] === undefined) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(eventHandler);
        console.log(`${eventHandler.name} subscribed to event ${eventName}`);
    },
    publish: function (eventName, data) {
        console.log(`event: ${eventName} was just fired`);
        const subscribers = this.events[eventName];
        // loop through the subscribers array for the published event and call each
        // function with the provided data
        subscribers === null || subscribers === void 0 ? void 0 : subscribers.forEach((fn) => fn(data));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsObserver);


/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventsObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsObserver */ "./src/scripts/eventsObserver.ts");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");


// the todoList object
const todoList = {
    // array holding all the projects
    list: [],
    // completely replace the list useful for deleting projects and loading saved data
    replaceList: (newList) => todoList.list = newList,
    // add a new project to the list
    addProject: (project) => todoList.list.push(project),
    // get a project from the list
    getProject: (projectId) => {
        return todoList.list.filter(project => project.projectId === projectId)[0];
    },
    // edit a given project name
    editProjectName: (projectId, newName) => {
        const selectedProject = todoList.getProject(projectId);
        selectedProject.projectName = newName;
    },
    // delete a project
    deleteProject: (projectId) => {
        todoList.replaceList(todoList.list.filter(project => project.projectId !== projectId));
    }
};
// create a new list with default project
const createNewList = () => {
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("newProjectCreationRequest", {
        projectName: "Home",
        projectId: "defaultHome"
    });
};
// whenever list is changed publish the event
const publishListChange = () => {
    const list = todoList.list;
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("listChanged", { list });
};
// data saved in localStorage is loaded replace current data with loaded data
const handleLoadedListFromStorage = (data) => {
    todoList.replaceList(data.savedList);
    publishListChange();
};
// a new project is created, append it to the list
const handleNewProjectCreated = (data) => {
    todoList.addProject(data.project);
    publishListChange();
};
// a request to change project name is received, update project name
const handleProjectNameChangeRequest = (data) => {
    const { projectId, newName } = data;
    todoList.editProjectName(projectId, newName);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectChanged", { project: todoList.getProject(projectId) });
    publishListChange();
};
// a request to edit a todo item received, get the relevant project and 
// publish an event requesting todo item editing
const handleEditTodoRequest = (data) => {
    const { parentProject } = data;
    const selectedProject = todoList.getProject(parentProject);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("editTodoRequestProjectFound", { parent: selectedProject, todoData: data });
};
// a request to create a new todo item received, get the relevant project and
// publish an event to create a new todo item in the project
const handleTodoCreationRequest = (todoData) => {
    const selectedProject = todoList.getProject(todoData.parentProject);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("newTodoItemCreationProjectFound", { parent: selectedProject, todoData });
};
// a request to delete a project is received, delete the project and publish 
// default project
const handleDeleteProject = (data) => {
    // preventing user from deleting the default project
    if (data.projectId === "defaultHome") {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("showError", { errorMsg: "Default Project cannot be deleted" });
        return;
    }
    todoList.deleteProject(data.projectId);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectChanged", { project: todoList.getProject("defaultHome") });
};
// a request to toggle todo completion status is received, get the relevant project
// and publish it to be toggled
const handleToggleTodoStatus = (data) => {
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("toggleTodoStatus", { parent: todoList.getProject(data.parent), todoId: data.todoid });
};
// a request to delete a todo item received, get the relevant project and publish
// it requesting to delete the todo item
const handleDeleteTodoBtnClick = (data) => {
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("deleteTodoItem", { parent: todoList.getProject(data.parent), todoId: data.todoid });
};
// if localStorage does not have a saved list create a new list
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("savedListEmpty", createNewList);
// if localStorage does have a saved list replace the current list with new one
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("savedListLoaded", handleLoadedListFromStorage);
// whenever "newProjectCreated" add it to list
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("newProjectCreated", handleNewProjectCreated);
// whenever "projectNameChangeRequest" update project name
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("projectNameChangeRequest", handleProjectNameChangeRequest);
// see above function definition
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("editTodoRequest", handleEditTodoRequest);
// see above function definition
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("newTodoItemCreationRequest", handleTodoCreationRequest);
// whenever "projectChanged" is fired publish it for saving and re-rendering
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("projectChanged", publishListChange);
// see above function definition
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("deleteProjectClicked", handleDeleteProject);
// see above function definition
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("toggleTodoStatusRequest", handleToggleTodoStatus);
// see above function definition
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("deleteTodoBtnClicked", handleDeleteTodoBtnClick);
// when script is loaded checkStorage to see if we have saved list
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("checkStorage");
// select default project to be rendered
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectChanged", { project: todoList.getProject("defaultHome") });


/***/ }),

/***/ "./src/scripts/projectController.ts":
/*!******************************************!*\
  !*** ./src/scripts/projectController.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventsObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsObserver */ "./src/scripts/eventsObserver.ts");

// project factory
const Project = (projectName, projectId) => {
    let todos = [];
    return {
        projectId,
        projectName,
        todos
    };
};
// todo item factory
const TodoItem = (title, description, dueDate, priority, completed, uid, parentProject) => {
    return {
        uid,
        title,
        description,
        dueDate,
        priority,
        completed,
        parentProject
    };
};
// return a todo item from given project
const getSingleTodo = (project, todoId) => {
    return project.todos.filter(todo => todo.uid === todoId)[0];
};
// create a new project and publish it
const createNewProject = (data) => {
    const { projectName, projectId } = data;
    const newProject = Project(projectName, projectId || Date.now() + projectName);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("newProjectCreated", { project: newProject });
};
// create a new todo and publish it
const createNewTodo = (data) => {
    const { title, description, dueDate, priority } = data.todoData;
    const newDueDate = new Date(dueDate);
    const uid = (data.parent.todos.length - 1 + Date.now()).toString();
    const newTodo = TodoItem(title, description, newDueDate, priority, false, uid, data.parent.projectId);
    data.parent.todos.push(newTodo);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectChanged", { project: data.parent });
};
// toggle the completion status of a todo item and publish it
const toggleTodoCompletion = (data) => {
    const { parent, todoId } = data;
    const selectedTodo = getSingleTodo(parent, todoId);
    selectedTodo.completed = !selectedTodo.completed;
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectChanged", { project: parent });
};
// update a given todo in the provided project and publish it
const updateTodo = (data) => {
    const { todoId, title, description, dueDate, priority } = data.todoData;
    const currentTodo = getSingleTodo(data.parent, todoId);
    currentTodo.title = title;
    currentTodo.description = description;
    currentTodo.dueDate = new Date(dueDate);
    currentTodo.priority = priority;
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectChanged", { project: data.parent });
};
// delete a given todo from provided project and publish status
const deleteTodo = (data) => {
    data.parent.todos = data.parent.todos.filter(todo => todo.uid !== data.todoId);
    _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectChanged", { project: data.parent });
};
// whenever a request to create new project is received, handle the request
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("newProjectCreationRequest", createNewProject);
// from the provided project do the necessary changes
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("editTodoRequestProjectFound", updateTodo);
// add a new todo item to provided project
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("newTodoItemCreationProjectFound", createNewTodo);
// toggle completion status of a todo in provided project
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("toggleTodoStatus", toggleTodoCompletion);
// handle deletetodoitem request
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("deleteTodoItem", deleteTodo);


/***/ }),

/***/ "./src/scripts/storageController.ts":
/*!******************************************!*\
  !*** ./src/scripts/storageController.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventsObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsObserver */ "./src/scripts/eventsObserver.ts");

// save the provided list to localStorage
const saveListToLocalStorage = (data) => {
    window.localStorage.setItem("TodoList", JSON.stringify(data.list));
};
// load the todoList from localStorage
const loadListFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("TodoList"));
};
// check if localStorage has a savedList and respond accordingly
const checkStorage = () => {
    const savedList = loadListFromLocalStorage();
    if (savedList) {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("savedListLoaded", { savedList });
    }
    else {
        _eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].publish("savedListEmpty");
    }
};
// whenever "checkStorage" event is fired check storage for saved list
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("checkStorage", checkStorage);
// whenever "listChanged" event is fired, save it to localStorage
_eventsObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("listChanged", saveListToLocalStorage);


/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/images/delete-forever.svg":
/*!***************************************!*\
  !*** ./src/images/delete-forever.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3672ce28d245c8f7bbef.svg";

/***/ }),

/***/ "./src/images/note-edit.svg":
/*!**********************************!*\
  !*** ./src/images/note-edit.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67d7ac9ac639190752c4.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/scripts/displayComponents.ts");
/******/ 	__webpack_require__("./src/scripts/displayController.ts");
/******/ 	__webpack_require__("./src/scripts/projectController.ts");
/******/ 	__webpack_require__("./src/scripts/storageController.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhGQUE4RixNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxPQUFPLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxL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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlDb21wb25lbnRzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlDb250cm9sbGVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9zY3JpcHRzL2RvbVNlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9ldmVudHNPYnNlcnZlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9pbmRleC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9wcm9qZWN0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9zdG9yYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmljL1VuaXZlcnNhbCBzdHVmZiAqL1xuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tYmFzZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICAgIC0tZ3JlZW4tYWNjZW50OiByZ2IoMTM5LCAxNTQsIDcwKTtcbiAgICAtLWJyb3duLWFjY2VudDogcmdiKDg0LCAxOCwgMTgpO1xuICAgIC0tcHJpbWFyeTogcmdiKDE1LCAxNCwgMTQpO1xuICAgIC0tbGluay1hY2NlbnQ6IHJnYigyNTUsIDI1NSwgMTAyKTtcbiAgICAtLWhpZ2gtcHJpb3JpdHk6IHJnYigyNTUsIDAsIDAsIDAuOSk7XG4gICAgLS1tZWRpdW0tcHJpb3JpdHk6IHJnYigyNTUsIDI1NSwgMTAyLCAwLjkpO1xuICAgIC0tbG93LXByaW9yaXR5OiByZ2IoMCwgMjU1LCAwLCAwLjkpXG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uaGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlKTtcbn1cblxuLyogc3ZnIGluc2lkZSBidXR0b24gKi9cblxuYnV0dG9uIHN2ZyxcbmJ1dHRvbiBpbWcge1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZmlsbDogaW5oZXJpdDtcbn1cblxuYnV0dG9uOmhhcyhzdmcpLFxuYnV0dG9uOmhhcyhpbWcpIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4vKiBCb2R5IE91dHNpZGUqL1xuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwZHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi8qIEhlYWRlciAqL1xuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDN2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcbn1cblxuLyogTWFpbiAqL1xubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIFNpZGViYXIgKi9cbmFzaWRlI3NpZGViYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAydm1heDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tYWNjZW50KTtcbiAgICAvKiBjb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTsgKi9cbn1cblxuYnV0dG9uLmFkZC1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bi1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAxdmggMnZ3O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xufVxuXG5kaXYjcHJvamVjdC1mb3JtLXNlY3Rpb24ge1xuICAgIG1pbi1oZWlnaHQ6IDV2aDtcbn1cblxuZGl2I3Byb2plY3RzLXNlY3Rpb24sXG51bC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmRpdiNwcm9qZWN0cy1zZWN0aW9uPmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxpLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcbiAgICBmaWxsOiB2YXIoLS1iYXNlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5saS5wcm9qZWN0IGltZyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbmZvcm0jZWRpdC1wcm9qZWN0LWZvcm0ge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBwYWRkaW5nOiA1dmggMXZ3O1xufVxuXG5mb3JtI2VkaXQtcHJvamVjdC1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDJ2aCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSNhZGQtcHJvamVjdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJ2aDtcbn1cblxuZm9ybSNhZGQtcHJvamVjdC1mb3JtPmRpdi5mb3JtLWhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzdnc7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmZvcm0jYWRkLXByb2plY3QtZm9ybT5kaXYuY29udHJvbHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xufVxuXG4vKiBDb250ZW50cyBzZWN0aW9uICovXG5kaXYjY29udGVudC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDJ2bWF4O1xuICAgIGdhcDogMnZoO1xuICAgIG1heC13aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcbn1cblxuYnV0dG9uLmFkZC10b2RvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogMXZoIDJ2dztcbn1cblxuZGl2I3RvZG8tZm9ybS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG5kaXYjdG9kby1mb3JtLXNlY3Rpb24+YnV0dG9uIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuZGl2I3RvZG9zLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuZGl2I3RvZG9zLXNlY3Rpb24+aDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudWwudG9kby1jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG5saS50b2RvLWl0ZW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmciAxMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5saS5jb21wbGV0ZWQtdG9kbyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmxpLmhpZ2gtcHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xufVxuXG5saS5taWQtcHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eSk7XG59XG5cbmxpLmxvdy1wcmlvcml0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcbn1cblxuLyogQWRkIHRvZG8gZm9ybSAqL1xuXG5mb3JtI2FkZC10b2RvLWZvcm0sXG5mb3JtI2VkaXQtdG9kby1mb3JtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMnZoO1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbiAgICBwYWRkaW5nOiA1dmggNXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZm9ybSNhZGQtdG9kby1mb3JtIGlucHV0LFxuZm9ybSNlZGl0LXRvZG8tZm9ybSBpbnB1dCxcbmZvcm0jYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYSxcbmZvcm0jZWRpdC10b2RvLWZvcm0gdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyb3duLWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLWJhc2UpO1xufVxuXG5mb3JtI2FkZC10b2RvLWZvcm0+ZGl2LmZvcm0taGVhZGVyLFxuZm9ybSNlZGl0LXRvZG8tZm9ybT5kaXYuZm9ybS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDBweDtcbn1cblxuZm9ybSNhZGQtdG9kby1mb3JtIGgyLFxuZm9ybSNlZGl0LXRvZG8tZm9ybSBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYudGl0bGUtc2VjdGlvbixcbmRpdi5kZXNjcmlwdGlvbi1zZWN0aW9uLFxuZGl2LmR1ZURhdGUtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXZoO1xufVxuXG5kaXYub3B0aW9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxdnc7XG59XG5cblxuLyogTW9kYWwgKi9cblxuZGl2Lm1vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLyogYWxsIGNvbnRyb2xzIHNlY3Rpb24gKi9cbmRpdi50b2RvLWNvbnRyb2xzLFxuZGl2LnByb2plY3QtY29udHJvbHMtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG59XG5cbmRpdi50b2RvLWNvbnRyb2xzIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuZm9ybSNhZGQtdG9kby1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uLFxuZm9ybSNlZGl0LXRvZG8tZm9ybT5kaXYuY29udHJvbHMtc2VjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbmZvcm0jYWRkLXRvZG8tZm9ybT5kaXYuY29udHJvbHMtc2VjdGlvbiBidXR0b24sXG5mb3JtI2VkaXQtdG9kby1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0tYmFzZSk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogNXB4IDN2dztcbn1cblxuLyogRXJyb3IgU2VjdGlvbiAqL1xuXG5kaXYubW9kYWw+ZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi1hY2NlbnQpO1xuICAgIHBhZGRpbmc6IDF2bWF4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5kaXNtaXNzLWVycm9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1hY2NlbnQpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuLWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4vKiBGb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWJhc2UpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyb3duLWFjY2VudCk7XG59XG5cbmZvb3RlciBhLFxuZm9vdGVyIGE6dmlzaXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1saW5rLWFjY2VudCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0QkFBNEI7QUFDNUI7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUM7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFl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cUM7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7O0lBSUkscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtBQUNuQzs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7OztBQUdBLFVBQVU7O0FBRVY7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUEseUJBQXlCO0FBQ3pCOztJQUVJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksa0JBQWtCOztBQUV0Qjs7QUFFQTs7SUFFSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmljL1VuaXZlcnNhbCBzdHVmZiAqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFzZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xcbiAgICAtLWdyZWVuLWFjY2VudDogcmdiKDEzOSwgMTU0LCA3MCk7XFxuICAgIC0tYnJvd24tYWNjZW50OiByZ2IoODQsIDE4LCAxOCk7XFxuICAgIC0tcHJpbWFyeTogcmdiKDE1LCAxNCwgMTQpO1xcbiAgICAtLWxpbmstYWNjZW50OiByZ2IoMjU1LCAyNTUsIDEwMik7XFxuICAgIC0taGlnaC1wcmlvcml0eTogcmdiKDI1NSwgMCwgMCwgMC45KTtcXG4gICAgLS1tZWRpdW0tcHJpb3JpdHk6IHJnYigyNTUsIDI1NSwgMTAyLCAwLjkpO1xcbiAgICAtLWxvdy1wcmlvcml0eTogcmdiKDAsIDI1NSwgMCwgMC45KVxcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UpO1xcbn1cXG5cXG4vKiBzdmcgaW5zaWRlIGJ1dHRvbiAqL1xcblxcbmJ1dHRvbiBzdmcsXFxuYnV0dG9uIGltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICAgIG1pbi13aWR0aDogMjVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZpbGw6IGluaGVyaXQ7XFxufVxcblxcbmJ1dHRvbjpoYXMoc3ZnKSxcXG5idXR0b246aGFzKGltZykge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIEJvZHkgT3V0c2lkZSovXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWYsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwIDN2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWJhc2UpO1xcbn1cXG5cXG4vKiBNYWluICovXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuYXNpZGUjc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMnZtYXg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tYWNjZW50KTtcXG4gICAgLyogY29sb3I6IHZhcigtLWJyb3duLWFjY2VudCk7ICovXFxufVxcblxcbmJ1dHRvbi5hZGQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJyb3duLWFjY2VudCk7XFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDF2aCAydnc7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG5kaXYjcHJvamVjdC1mb3JtLXNlY3Rpb24ge1xcbiAgICBtaW4taGVpZ2h0OiA1dmg7XFxufVxcblxcbmRpdiNwcm9qZWN0cy1zZWN0aW9uLFxcbnVsLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5kaXYjcHJvamVjdHMtc2VjdGlvbj5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGkucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWJhc2UpO1xcbiAgICBmaWxsOiB2YXIoLS1iYXNlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxubGkucHJvamVjdCBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuZm9ybSNlZGl0LXByb2plY3QtZm9ybSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgcGFkZGluZzogNXZoIDF2dztcXG59XFxuXFxuZm9ybSNlZGl0LXByb2plY3QtZm9ybT5kaXYuY29udHJvbHMtc2VjdGlvbiB7XFxuICAgIG1hcmdpbjogMnZoIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9ybSNhZGQtcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJ2aDtcXG59XFxuXFxuZm9ybSNhZGQtcHJvamVjdC1mb3JtPmRpdi5mb3JtLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDN2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9ybSNhZGQtcHJvamVjdC1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbn1cXG5cXG4vKiBDb250ZW50cyBzZWN0aW9uICovXFxuZGl2I2NvbnRlbnQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnIgYXV0bztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDJ2bWF4O1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBjb2xvcjogdmFyKC0tYmFzZSk7XFxufVxcblxcbmJ1dHRvbi5hZGQtdG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAxdmggMnZ3O1xcbn1cXG5cXG5kaXYjdG9kby1mb3JtLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5kaXYjdG9kby1mb3JtLXNlY3Rpb24+YnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbmRpdiN0b2Rvcy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5kaXYjdG9kb3Mtc2VjdGlvbj5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudWwudG9kby1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxubGkudG9kby1pdGVtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyIDEwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxubGkuY29tcGxldGVkLXRvZG8ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxubGkuaGlnaC1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbn1cXG5cXG5saS5taWQtcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHkpO1xcbn1cXG5cXG5saS5sb3ctcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcbn1cXG5cXG4vKiBBZGQgdG9kbyBmb3JtICovXFxuXFxuZm9ybSNhZGQtdG9kby1mb3JtLFxcbmZvcm0jZWRpdC10b2RvLWZvcm0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMnZoO1xcbiAgICBtaW4taGVpZ2h0OiA2MCU7XFxuICAgIHBhZGRpbmc6IDV2aCA1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWFjY2VudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmZvcm0jYWRkLXRvZG8tZm9ybSBpbnB1dCxcXG5mb3JtI2VkaXQtdG9kby1mb3JtIGlucHV0LFxcbmZvcm0jYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYSxcXG5mb3JtI2VkaXQtdG9kby1mb3JtIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWJhc2UpO1xcbn1cXG5cXG5mb3JtI2FkZC10b2RvLWZvcm0+ZGl2LmZvcm0taGVhZGVyLFxcbmZvcm0jZWRpdC10b2RvLWZvcm0+ZGl2LmZvcm0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwcHg7XFxufVxcblxcbmZvcm0jYWRkLXRvZG8tZm9ybSBoMixcXG5mb3JtI2VkaXQtdG9kby1mb3JtIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYudGl0bGUtc2VjdGlvbixcXG5kaXYuZGVzY3JpcHRpb24tc2VjdGlvbixcXG5kaXYuZHVlRGF0ZS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXZoO1xcbn1cXG5cXG5kaXYub3B0aW9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDF2dztcXG59XFxuXFxuXFxuLyogTW9kYWwgKi9cXG5cXG5kaXYubW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogYWxsIGNvbnRyb2xzIHNlY3Rpb24gKi9cXG5kaXYudG9kby1jb250cm9scyxcXG5kaXYucHJvamVjdC1jb250cm9scy1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG5kaXYudG9kby1jb250cm9scyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG5mb3JtI2FkZC10b2RvLWZvcm0+ZGl2LmNvbnRyb2xzLXNlY3Rpb24sXFxuZm9ybSNlZGl0LXRvZG8tZm9ybT5kaXYuY29udHJvbHMtc2VjdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuZm9ybSNhZGQtdG9kby1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uIGJ1dHRvbixcXG5mb3JtI2VkaXQtdG9kby1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyb3duLWFjY2VudCk7XFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDVweCAzdnc7XFxufVxcblxcbi8qIEVycm9yIFNlY3Rpb24gKi9cXG5cXG5kaXYubW9kYWw+ZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuLWFjY2VudCk7XFxuICAgIHBhZGRpbmc6IDF2bWF4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmRpc21pc3MtZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbi1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWJhc2UpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xcbn1cXG5cXG5mb290ZXIgYSxcXG5mb290ZXIgYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbGluay1hY2NlbnQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEV2ZW50c09ic2VydmVyIGZyb20gXCIuL2V2ZW50c09ic2VydmVyXCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4uL2ltYWdlcy9ub3RlLWVkaXQuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZS1mb3JldmVyLnN2Z1wiXG5pbXBvcnQgY2FuY2VsSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiO1xuXG4vLyB0aGUgZWRpdCBwcm9qZWN0IG5hbWUgZm9ybVxuY29uc3QgZWRpdFByb2plY3ROYW1lRnJtQ29tcG9uZW50ID0gKGN1cnJlbnROYW1lOiBzdHJpbmcsIHByb2plY3RJZDogc3RyaW5nKSA9PiB7XG4gICAgLy8gY3JlYXRpbmcgdGhlIGZvcm0gaXRzZWxmXG4gICAgY29uc3QgZnJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZybS5pZCA9IFwiZWRpdC1wcm9qZWN0LWZvcm1cIjtcblxuICAgIC8vIGEgaGlkZGVuIGlucHV0IGZvciBwcm92aWRpbmcgcHJvamVjdElkXG4gICAgY29uc3QgcHJvamVjdElkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RJZElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBwcm9qZWN0SWRJbnB1dC5uYW1lID0gXCJwcm9qZWN0LWlkXCJcbiAgICBwcm9qZWN0SWRJbnB1dC52YWx1ZSA9IHByb2plY3RJZDtcbiAgICBwcm9qZWN0SWRJbnB1dC5oaWRkZW4gPSB0cnVlO1xuICAgIHByb2plY3RJZElucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICBmcm0uYXBwZW5kQ2hpbGQocHJvamVjdElkSW5wdXQpO1xuXG4gICAgLy8gdGhlIG5hbWUgc2VjdGlvblxuICAgIGNvbnN0IG5hbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbmFtZS1zZWN0aW9uJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TmFtZUxhYmVsLmh0bWxGb3IgPSBcInByb2plY3QtbmFtZVwiO1xuICAgIHByb2plY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIHByb2plY3ROYW1lTGFiZWwuaGlkZGVuID0gdHJ1ZTtcbiAgICBuYW1lU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHByb2plY3ROYW1lSW5wdXQubmFtZSA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5pZCA9IFwiZWRpdC1wcm9qZWN0LW5hbWVcIlxuICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBjdXJyZW50TmFtZTtcbiAgICBuYW1lU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcblxuICAgIC8vIGNhbmNlbCBidXR0b25cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWVkaXQtcHJvamVjdCcpO1xuICAgIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdG4uYXBwZW5kQ2hpbGQoY2FuY2VsSWNvbkNvbXBvbmVudCgpKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICh0aGlzOiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwiY2FuY2VsRWRpdFByb2plY3ROYW1lQnRuQ2xpY2tlZFwiLCB0aGlzKTtcbiAgICB9KVxuICAgIG5hbWVTZWN0aW9uLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBmcm0uYXBwZW5kQ2hpbGQobmFtZVNlY3Rpb24pO1xuXG4gICAgLy8gYSBjb250cm9scyBzZWN0aW9uXG4gICAgY29uc3QgY29udHJvbHNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udHJvbHNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzLXNlY3Rpb24nKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1lZGl0LXByb2plY3QtYnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiXG4gICAgY29udHJvbHNTZWN0aW9uLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBmcm0uYXBwZW5kQ2hpbGQoY29udHJvbHNTZWN0aW9uKTtcblxuICAgIHJldHVybiBmcm07XG59XG5cbi8vIHRoZSBzaWRlYmFyIGNvbXBvbmVudFxuY29uc3Qgc2lkZWJhckNvbXBvbmVudCA9IChwcm9qZWN0OiBQcm9qZWN0VHlwZSkgPT4ge1xuICAgIC8vIHRoZSBsaSBlbGVtZW50IGhvbGRpbmcgYWxsIHRoZSBlbGVtZW50c1xuICAgIGNvbnN0IHByb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgcHJvamVjdExpLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5wcm9qZWN0SWQ7XG5cbiAgICAvLyB0aGUgcHJvamVjdCBuYW1lXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0TmFtZS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QucHJvamVjdElkO1xuICAgIC8vIGNsaWNraW5nIG9uIHRoZSBwcm9qZWN0IG5hbWUgXCJzZWxlY3RzXCIgdGhlIHByb2plY3QgdG8gYmUgZGlzcGxheWVkXG4gICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICh0aGlzOiBIVE1MTElFbGVtZW50KSB7XG4gICAgICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJwcm9qZWN0Q2hhbmdlZFwiLCB7IHByb2plY3QgfSk7XG4gICAgfSlcbiAgICBwcm9qZWN0TGkuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgLy8gYSBjb250cm9scyBzZWN0aW9uXG4gICAgY29uc3QgcHJvamVjdENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udHJvbHMtc2VjdGlvbicpO1xuXG4gICAgLy8gdGhlIGVkaXQgYnV0dG9uXG4gICAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdFByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdC1uYW1lJyk7XG4gICAgZWRpdFByb2plY3ROYW1lLnZhbHVlID0gcHJvamVjdC5wcm9qZWN0SWQ7XG4gICAgZWRpdFByb2plY3ROYW1lLmFwcGVuZENoaWxkKGVkaXRJY29uQ29tcG9uZW50KCkpO1xuICAgIGVkaXRQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxCdXR0b25FbGVtZW50KSB7XG4gICAgICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJlZGl0UHJvamVjdE5hbWVCdG5DbGlja2VkXCIsIHRoaXMpO1xuICAgIH0pXG4gICAgcHJvamVjdENvbnRyb2xzLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0TmFtZSk7XG5cbiAgICAvLyB0aGUgZGVsZXRlIGJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgZGVsZXRlUHJvamVjdC52YWx1ZSA9IHByb2plY3QucHJvamVjdElkO1xuICAgIGRlbGV0ZVByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkNvbXBvbmVudCgpKTtcbiAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAodGhpczogSFRNTEJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcImRlbGV0ZVByb2plY3RDbGlja2VkXCIsIHsgcHJvamVjdElkOiBwcm9qZWN0LnByb2plY3RJZCB9KTtcbiAgICB9KVxuICAgIHByb2plY3RDb250cm9scy5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcblxuICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udHJvbHMpXG5cbiAgICAvLyB0aGUgZWRpdCBwcm9qZWN0IG5hbWUgY29tcG9uZW50LCBpbml0aWFsbHkgaGlkZGVuXG4gICAgY29uc3QgZWRpdE5hbWVGcm0gPSBlZGl0UHJvamVjdE5hbWVGcm1Db21wb25lbnQocHJvamVjdC5wcm9qZWN0TmFtZSwgcHJvamVjdC5wcm9qZWN0SWQpO1xuICAgIGVkaXROYW1lRnJtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChlZGl0TmFtZUZybSk7XG5cbiAgICBwcm9qZWN0TGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgcmV0dXJuIHByb2plY3RMaTtcbn07XG5cbi8vIHRoZSB0b2RvIGNvbXBvbmVudFxuY29uc3QgdG9kb0NvbXBvbmVudCA9ICh0b2RvOiBUb2RvSXRlbVR5cGUpID0+IHtcbiAgICAvLyBjcmVhdGluZyBhbiBpZGVudGlmaWVyIG9iamVjdCB3aGljaCBjYW4gYmUgcGFzc2VkIHRvIGFueSBhcHByb3ByaWF0ZSBcbiAgICAvLyBmdW5jdGlvblxuICAgIGNvbnN0IHRvZG9JZGVudGlmaWVyID0ge1xuICAgICAgICBwYXJlbnQ6IHRvZG8ucGFyZW50UHJvamVjdCxcbiAgICAgICAgdG9kb2lkOiB0b2RvLnVpZFxuICAgIH07XG4gICAgLy8gY3JlYXRpbmcgdGhlIGxpIGVsZW1lbnQgY29udGFpbmVyIGhvbGRpbmcgdGhlIGVudGlyZSB0b2RvIGl0ZW1cbiAgICBjb25zdCB0b2RvTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRvZG9MaS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcblxuICAgIC8vIHRoZSBjaGVja2JveCBmb3IgbWFya2luZyB0aGUgdG9kbyBhcyBkb25lXG4gICAgY29uc3QgZG9uZVN0YXR1c0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRvbmVTdGF0dXNEaXNwbGF5LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgZG9uZVN0YXR1c0Rpc3BsYXkuY2hlY2tlZCA9IHRvZG8uY29tcGxldGVkO1xuICAgIGRvbmVTdGF0dXNEaXNwbGF5LnZhbHVlID0gdG9kby51aWQ7XG4gICAgZG9uZVN0YXR1c0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInRvZ2dsZVRvZG9TdGF0dXNSZXF1ZXN0XCIsIHRvZG9JZGVudGlmaWVyKTtcbiAgICB9KVxuICAgIHRvZG9MaS5hcHBlbmRDaGlsZChkb25lU3RhdHVzRGlzcGxheSk7XG5cbiAgICAvLyBjb250YWluZXIgZm9yIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICAgIGNvbnN0IHRvZG9NYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9NYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLW1haW4tY29udGVudCcpO1xuXG4gICAgLy8gdGhlIHRvZG8gdGl0bGUgXG4gICAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9XG4gICAgICAgIGBUYXNrICR7dG9kby50aXRsZX0gaXMgZHVlIGJ5IFxuICAgICAgICAke25ldyBEYXRlKHRvZG8uZHVlRGF0ZSkudG9EYXRlU3RyaW5nKCl9IFxuICAgICAgICB3aXRoIGEgcHJpb3JpdHkgb2YgJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgdG9kb01haW5Db250ZW50LmFwcGVuZENoaWxkKHRpdGxlRGlzcGxheSk7XG5cbiAgICAvLyB0aGUgdG9kbyBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbkRpc3BsYXkudGV4dENvbnRlbnQgPSBgVGFzayBEZXNjcmlwdGlvbjogJHt0b2RvLmRlc2NyaXB0aW9ufWA7XG4gICAgZGVzY3JpcHRpb25EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRvZG9NYWluQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpc3BsYXkpO1xuXG4gICAgdG9kb0xpLmFwcGVuZENoaWxkKHRvZG9NYWluQ29udGVudCk7XG5cbiAgICAvLyB0aGUgY29udHJvbHMgc2VjdGlvbiBob3VzaW5nIHRoZSBlZGl0IGFuZCBkZWxldGUgYnV0dG9uc1xuICAgIGNvbnN0IGNvbnRyb2xTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udHJvbFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250cm9scycpO1xuXG4gICAgLy8gdGhlIGVkaXQgYnV0dG9uXG4gICAgY29uc3QgZWRpdFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0VG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8tYnRuJyk7XG4gICAgZWRpdFRvZG9CdG4udmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0b2RvSWRlbnRpZmllcik7XG4gICAgZWRpdFRvZG9CdG4uYXBwZW5kQ2hpbGQoZWRpdEljb25Db21wb25lbnQoKSk7XG4gICAgZWRpdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gd2hlbiB0aGUgZWRpdCB0b2RvIGJ1dHRvbiBpcyBjbGlja2VkIHJlbmRlciB0aGUgZWRpdCB0b2RvIGZvcm1cbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcImVkaXRUb2RvQnRuQ2xpY2tlZFwiLCB0b2RvKTtcbiAgICB9KVxuICAgIGNvbnRyb2xTZWN0aW9uLmFwcGVuZENoaWxkKGVkaXRUb2RvQnRuKTtcblxuICAgIC8vIHRoZSBkZWxldGUgYnV0dG9uXG4gICAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8tYnRuJyk7XG4gICAgZGVsZXRlVG9kb0J0bi52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRvZG9JZGVudGlmaWVyKTtcbiAgICBkZWxldGVUb2RvQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb25Db21wb25lbnQoKSk7XG4gICAgLy8gZXZlbnQgaGFuZGxlciBmb3IgZGVsZXRpbmcgdGhlIHRvZG9cbiAgICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJkZWxldGVUb2RvQnRuQ2xpY2tlZFwiLCB0b2RvSWRlbnRpZmllcik7XG4gICAgfSlcbiAgICBjb250cm9sU2VjdGlvbi5hcHBlbmRDaGlsZChkZWxldGVUb2RvQnRuKTtcblxuICAgIHRvZG9MaS5hcHBlbmRDaGlsZChjb250cm9sU2VjdGlvbik7XG5cbiAgICAvLyAgd2hlbiB0aGUgdG9kbyB0aXRsZSBpcyBjbGlja2VkIHNob3cgdGhlIHRvZG8gZGVzY3JpcHRpb25cbiAgICB0aXRsZURpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVzY3JpcHRpb25EaXNwbGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSlcblxuICAgIC8vIGJhc2VkIG9uIHRoZSB0b2RvIHByaW9yaXR5IGl0IHdpbGwgYmUgY29sb3IgY29kZWRcbiAgICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSAoXCJISUdIXCIpOlxuICAgICAgICAgICAgdG9kb0xpLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChcIk1FRElVTVwiKTpcbiAgICAgICAgICAgIHRvZG9MaS5jbGFzc0xpc3QuYWRkKCdtaWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChcIkxPV1wiKTpcbiAgICAgICAgICAgIHRvZG9MaS5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gcHV0IGEgc3RyaWtldGhyb3VnaCBvbiB0aGUgZW50aXJlIHRvZG8gaWYgaXQncyBjb21wbGV0ZWRcbiAgICB0b2RvLmNvbXBsZXRlZCA/IHRvZG9MaS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtdG9kbycpIDogdG9kb0xpLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC10b2RvJyk7XG5cbiAgICByZXR1cm4gdG9kb0xpO1xufVxuXG4vLyB0aGUgZWRpdCB0b2RvIGZvcm1cbmNvbnN0IGVkaXRUb2RvQ29tcG9uZW50ID0gKHRvZG86IFRvZG9JdGVtVHlwZSkgPT4ge1xuICAgIC8vIHRoZSBmb3JtIGl0c2VsZlxuICAgIGNvbnN0IGVkaXRUb2RvRnJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGVkaXRUb2RvRnJtLmlkID0gXCJlZGl0LXRvZG8tZm9ybVwiO1xuXG4gICAgLy8gdGhlIGZvcm0gaGVhZGVyXG4gICAgY29uc3QgZnJtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJtSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taGVhZGVyJyk7XG5cbiAgICAvLyB0aGUgaGVhZGluZ1xuICAgIGNvbnN0IGZybUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGZybUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkVkaXQgVG9kb1wiXG4gICAgZnJtSGVhZGVyLmFwcGVuZENoaWxkKGZybUhlYWRpbmcpO1xuXG4gICAgLy8gdGhlIGNhbmNlbCBidXR0b25cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1lZGl0LXRvZG8nKTtcbiAgICBjYW5jZWxCdG4uYXBwZW5kQ2hpbGQoY2FuY2VsSWNvbkNvbXBvbmVudCgpKTtcbiAgICBmcm1IZWFkZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIC8vIGEgaGlkZGVuIGlucHV0IGhvbGRpbmcgdGhlIHRvZG9JZFxuICAgIGNvbnN0IHRvZG9JZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0lkLnR5cGUgPSBcInRleHRcIjtcbiAgICB0b2RvSWQubmFtZSA9IFwidG9kb0lkXCI7XG4gICAgdG9kb0lkLnZhbHVlID0gdG9kby51aWQ7XG4gICAgdG9kb0lkLmhpZGRlbiA9IHRydWU7XG4gICAgdG9kb0lkLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICBmcm1IZWFkZXIuYXBwZW5kQ2hpbGQodG9kb0lkKTtcblxuICAgIGVkaXRUb2RvRnJtLmFwcGVuZENoaWxkKGZybUhlYWRlcik7XG5cbiAgICAvLyB0aGUgdGl0bGUgc2VjdGlvblxuICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1zZWN0aW9uJyk7XG5cbiAgICAvLyB0aGUgbGFiZWxcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIlxuICAgIHRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuICAgIC8vIHRoZSBpbnB1dCBmb3IgdGhlIHRpdGxlXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgZWRpdFRvZG9Gcm0uYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcblxuICAgIC8vIGRlc2NyaXB0aW9uIHNlY3Rpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tc2VjdGlvbicpO1xuXG4gICAgLy8gbGFiZWwgZm9yIGRzZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICAvLyBkZXNjcnByaXRpb24gaW5wdXRcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNvbHMgPSAzMDtcbiAgICBkZXNjcmlwdGlvbklucHV0LnJvd3MgPSAxMDtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBlZGl0VG9kb0ZybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNlY3Rpb24pO1xuXG4gICAgLy8gZHVlRGF0ZSBzZWN0aW9uXG4gICAgY29uc3QgZHVlRGF0ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlLXNlY3Rpb24nKTtcblxuICAgIC8vIGxhYmVsIGZvciBkdWVEYXRlXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9IFwiZHVlRGF0ZVwiO1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIGJ5XCI7XG4gICAgZHVlRGF0ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcblxuICAgIC8vIGR1ZURhdGUgaW5wdXRcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImR1ZURhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbiAgICBkdWVEYXRlU2VjdGlvbi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gICAgZWRpdFRvZG9Gcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZVNlY3Rpb24pO1xuXG4gICAgLy8gdGhlIHByaW9yaXR5IHNlY3Rpb25cbiAgICBjb25zdCBwcmlvcml0eVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktc2VjdGlvbicpO1xuXG4gICAgLy8gYSBoZWFkaW5nIGluZGljYXRpbmcgdGhlIHByaW9yaXR5IHNlY3Rpb25cbiAgICBjb25zdCBwcmlvcml0eUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByaW9yaXR5SGVhZGluZy50ZXh0Q29udGVudCA9IFwiU2V0IFByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlTZWN0aW9uLmFwcGVuZENoaWxkKHByaW9yaXR5SGVhZGluZyk7XG5cblxuICAgIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgICAvLyBBIHNlY3Rpb24gZm9yIGhpZ2ggb3B0aW9uXG4gICAgY29uc3QgaGlnaE9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpZ2hPcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJyk7XG5cbiAgICAvLyBoaWdoIG9wdGlvbiByYWRpbyBidXR0b25cbiAgICBjb25zdCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoaWdoT3B0aW9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgaGlnaE9wdGlvbi5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIGhpZ2hPcHRpb24uaWQgPSBcImhpZ2hcIjtcbiAgICBoaWdoT3B0aW9uLnZhbHVlID0gXCJISUdIXCI7XG4gICAgaGlnaE9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTtcblxuICAgIC8vIGhpZ2ggb3B0aW9uIGxhYmVsXG4gICAgY29uc3QgaGlnaE9wdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBoaWdoT3B0aW9uTGFiZWwuaHRtbEZvciA9IFwiaGlnaFwiO1xuICAgIGhpZ2hPcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIGhpZ2hPcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbkxhYmVsKTtcblxuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbkNvbnRhaW5lcik7XG5cbiAgICAvLyBBIHNlY3Rpb24gZm9yIG1lZGl1bSBidXR0b25cbiAgICBjb25zdCBtaWRPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaWRPcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJyk7XG5cbiAgICAvLyAgbWVkaXVtIG9wdGlvbiByYWRpbyBidXR0b25cbiAgICBjb25zdCBtaWRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG1pZE9wdGlvbi50eXBlID0gXCJyYWRpb1wiO1xuICAgIG1pZE9wdGlvbi5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIG1pZE9wdGlvbi5pZCA9IFwibWVkaXVtXCI7XG4gICAgbWlkT3B0aW9uLnZhbHVlID0gXCJNRURJVU1cIjtcbiAgICBtaWRPcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobWlkT3B0aW9uKTtcblxuICAgIC8vIG1lZGl1bSBvcHRpb24gbGFiZWxcbiAgICBjb25zdCBtaWRPcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbWlkT3B0aW9uTGFiZWwuaHRtbEZvciA9IFwibWVkaXVtXCI7XG4gICAgbWlkT3B0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIG1pZE9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtaWRPcHRpb25MYWJlbCk7XG5cbiAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pZE9wdGlvbkNvbnRhaW5lcik7XG5cbiAgICAvLyBBIHNlY3Rpb24gZm9yIGxvdyBvcHRpb25cbiAgICBjb25zdCBsb3dPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb3dPcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJyk7XG5cbiAgICAvLyBsb3cgb3B0aW9uIHJhZGlvIGJ1dHRvblxuICAgIGNvbnN0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbG93T3B0aW9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgbG93T3B0aW9uLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgbG93T3B0aW9uLmlkID0gXCJsb3dcIjtcbiAgICBsb3dPcHRpb24udmFsdWUgPSBcIkxPV1wiO1xuICAgIGxvd09wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xuXG4gICAgLy8gYSBsYWJlbCBmb3IgbG93IG9wdGlvblxuICAgIGNvbnN0IGxvd09wdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsb3dPcHRpb25MYWJlbC5odG1sRm9yID0gXCJsb3dcIjtcbiAgICBsb3dPcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgbG93T3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvd09wdGlvbkxhYmVsKTtcblxuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobG93T3B0aW9uQ29udGFpbmVyKTtcblxuICAgIHByaW9yaXR5U2VjdGlvbi5hcHBlbmRDaGlsZChvcHRpb25zQ29udGFpbmVyKTtcblxuICAgIC8vIGJhc2VkIG9uIHRoZSBjdXJyZW50IHRvZG8ncyBkYXRhIHNlbGVjdCBhcHByb3ByaWF0ZSBvcHRpb25cbiAgICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSAoXCJISUdIXCIpOlxuICAgICAgICAgICAgaGlnaE9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChcIk1FRElVTVwiKTpcbiAgICAgICAgICAgIG1pZE9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChcIkxPV1wiKTpcbiAgICAgICAgICAgIGxvd09wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGVkaXRUb2RvRnJtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VjdGlvbik7XG5cbiAgICAvLyBhIGNvbnRyb2xzIHNlY3Rpb25cbiAgICBjb25zdCBjb250cm9sc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250cm9sc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udHJvbHMtc2VjdGlvbicpO1xuXG4gICAgLy8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWVkaXQtdG9kby1idG4nKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgICBjb250cm9sc1NlY3Rpb24uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGVkaXRUb2RvRnJtLmFwcGVuZENoaWxkKGNvbnRyb2xzU2VjdGlvbik7XG5cbiAgICByZXR1cm4gZWRpdFRvZG9Gcm07XG59XG5cbmNvbnN0IGVkaXRJY29uQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uLnNyYyA9IGVkaXRJY29uO1xuICAgIHJldHVybiBpY29uXG59XG5jb25zdCBkZWxldGVJY29uQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgcmV0dXJuIGljb25cbn1cbmNvbnN0IGNhbmNlbEljb25Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGljb24uc3JjID0gY2FuY2VsSWNvbjtcbiAgICByZXR1cm4gaWNvblxufVxuXG5leHBvcnQge1xuICAgIHNpZGViYXJDb21wb25lbnQsXG4gICAgdG9kb0NvbXBvbmVudCxcbiAgICBlZGl0VG9kb0NvbXBvbmVudFxufSIsImltcG9ydCBFdmVudHNPYnNlcnZlciBmcm9tIFwiLi9ldmVudHNPYnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgICBnZXRBZGRQcm9qZWN0QnRuLFxuICAgIGdldEFkZFRvZG9CdG4sXG4gICAgZ2V0Q2FuY2VsQWRkUHJvamVjdEJ0bixcbiAgICBnZXRDYW5jZWxBZGRUb2RvQnRuLFxuICAgIGdldENhbmNlbEVkaXRUb2RvQnRuLFxuICAgIGdldERpc21pc3NFcnJvckJ0bixcbiAgICBnZXRFZGl0VG9kb0ZybSxcbiAgICBnZXRFZGl0VG9kb1NlY3Rpb24sXG4gICAgZ2V0RXJyb3JNc2dEaXNwbGF5LFxuICAgIGdldEVycm9yU2VjdGlvbixcbiAgICBnZXRQcm9qZWN0RnJtLFxuICAgIGdldFByb2plY3RzU2VjdGlvbixcbiAgICBnZXRUb2RvQ29udGFpbmVyLFxuICAgIGdldFRvZG9Gcm0sXG4gICAgZ2V0VG9kb3NTZWN0aW9uLFxuICAgIGdldEFkZFRvZG9Nb2RhbCxcbiAgICBnZXRQcm9qZWN0Q29udHJvbHNcbn0gZnJvbSBcIi4vZG9tU2VsZWN0b3JzXCI7XG5pbXBvcnQge1xuICAgIGVkaXRUb2RvQ29tcG9uZW50LFxuICAgIHNpZGViYXJDb21wb25lbnQsXG4gICAgdG9kb0NvbXBvbmVudFxufSBmcm9tIFwiLi9kaXNwbGF5Q29tcG9uZW50c1wiXG5cbi8vIHJlbmRlciB0aGUgc2lkZWJhclxuY29uc3QgcmVuZGVyU2lkZWJhciA9IChkYXRhOiBMaXN0UGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZGF0YS5saXN0O1xuICAgIGNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGdldFByb2plY3RzU2VjdGlvbigpO1xuICAgIC8vIHJlbW92ZSBhbGwgY3VycmVudCBjb250ZW50cyBvZiB0aGUgc2lkZWJhclxuICAgIHByb2plY3RzU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgc2lkZWJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIC8vIGNyZWF0ZSBhIGxpIGl0ZW0gYnkgY2FsbGluZyB0aGUgc2lkZWJhckNvbXBvbmVudCBmb3IgZWFjaCBwcm9qZWN0XG4gICAgdG9kb0xpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyQ29tcG9uZW50KHByb2plY3QpKVxuICAgIH0pO1xuXG4gICAgcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKHNpZGViYXJDb250YWluZXIpO1xuICAgIC8vIHB1Ymxpc2ggdGhlIFwic2lkZWJhclJlbmRlcmVkXCIgZXZlbnRcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwic2lkZWJhclJlbmRlcmVkXCIpO1xufTtcblxuLy8gcmVuZGVyIHRoZSBwcm9qZWN0XG5jb25zdCByZW5kZXJQcm9qZWN0ID0gKGRhdGE6IFByb2plY3RQYXlsb2FkKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZGF0YS5wcm9qZWN0XG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBnZXRUb2Rvc1NlY3Rpb24oKTtcbiAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgY29udGVudHMgb2YgdGhlIHByb2plY3Qgc2VjdGlvblxuICAgIHRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICB0b2RvU2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcbiAgICB0b2RvQ29udGFpbmVyLmRhdGFzZXQucHJvamVjdElkID0gc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZDtcbiAgICAvLyBmb3IgZWFjaCB0b2RvIGl0ZW0gaW4gdGhlIHByb2plY3QgcmVuZGVyIHRoZSB0b2RvQ29tcG9uZW50IGFzIGxpIGVsZW1lbnRcbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0b2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgdG9kb3MgaW4gdGhpcyBwcm9qZWN0LCBhZGQgYSBuZXcgdG9kby5cIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC50b2Rvcz8uZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbXBvbmVudCh0b2RvKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJwcm9qZWN0UmVuZGVyZWRcIik7XG59O1xuXG4vLyBzaG93L2hpZGUgdGhlIGFkZCBwcm9qZWN0IGZvcm1cbmNvbnN0IHRvZ2dsZUFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGdldFByb2plY3RGcm0oKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn07XG5cbi8vIHNob3cvaGlkZSB0aGUgYWRkIHRvZG8gZm9ybVxuY29uc3QgdG9nZ2xlQWRkVG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgZ2V0VG9kb0ZybSgpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGdldEFkZFRvZG9Nb2RhbCgpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIC8vIGhpZGUgdGhlIHRvZG9zIHNlY3Rpb24gd2hlbiBhZGQgdG9kbyBmb3JtIGlzIHNob3duXG4gICAgZ2V0VG9kb3NTZWN0aW9uKCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59O1xuXG4vLyBldmVudCBoYW5kbGVyIHdoZW4gZWRpdCBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgdGhpcyBpcyBnZXR0aW5nIHRoZSBkYXRhIGZyb20gdGhlIGV2ZW50IHB1Ymxpc2hlclxuY29uc3QgaGFuZGxlRWRpdFByb2plY3ROYW1lQnRuQ2xpY2sgPSAoYnRuOiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250cm9scyA9IGdldFByb2plY3RDb250cm9scyhidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICBjb25zdCBlZGl0RnJtID0gcHJvamVjdENvbnRyb2xzLm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBwcm9qZWN0TmFtZURpc3BsYXkgPSBwcm9qZWN0Q29udHJvbHMucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBlZGl0RnJtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHByb2plY3RDb250cm9scy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBwcm9qZWN0TmFtZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgLy8gYXR0YWNoIHRoZSBzdWJtaXQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGZvcm1cbiAgICBlZGl0RnJtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxGb3JtRWxlbWVudCwgZXY6IFN1Ym1pdEV2ZW50KSB7XG4gICAgICAgIC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSBzdWJtaXQgZXZlbnRcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgICAgIGNvbnN0IHBheUxvYWQgPSB7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6IGZvcm1EYXRhLmdldChcInByb2plY3QtaWRcIikudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG5ld05hbWU6IGZvcm1EYXRhLmdldChcInByb2plY3QtbmFtZVwiKS50b1N0cmluZygpXG4gICAgICAgIH07XG4gICAgICAgIC8vIHB1Ymxpc2ggdGhlIFwicHJvamVjdE5hbWVDaGFuZ2VSZXF1ZXN0XCIgZXZlbnQgd2l0aCB0aGUgZm9ybURhdGEgYXMgdGhlIEV2ZW50RGF0YVxuICAgICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwicHJvamVjdE5hbWVDaGFuZ2VSZXF1ZXN0XCIsIHBheUxvYWQpXG4gICAgfSlcbn1cblxuLy8gZXZlbnQgaGFuZGxlciB3aGVuIHRoZSBjYW5jZWwgZWRpdCBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZFxuY29uc3QgaGFuZGxlQ2FuY2VsRWRpdFByb2plY3ROYW1lQnRuQ2xpY2sgPSAoYnRuOiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250cm9scyA9IGdldFByb2plY3RDb250cm9scyhidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIHByb2plY3RDb250cm9scy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcHJvamVjdENvbnRyb2xzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcHJvamVjdENvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG4vLyBldmVudCBoYW5kbGVyIGZvciB0aGUgZWRpdCB0b2RvIGl0ZW0gYnV0dG9uIGlzIGNsaWNrZWQsIGl0IGdldCdzIHRoZSBkYXRhIGZyb20gdGhlIGV2ZW50XG4vLyBwdWJsaXNoZXJcbmNvbnN0IGhhbmRsZUVkaXRUb2RvQnRuQ2xpY2sgPSAodG9kbzogVG9kb0l0ZW1UeXBlKSA9PiB7XG4gICAgY29uc3QgZWRpdFRvZG9TZWN0aW9uID0gZ2V0RWRpdFRvZG9TZWN0aW9uKCk7XG4gICAgZ2V0VG9kb3NTZWN0aW9uKCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgZWRpdFRvZG9TZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBjb250ZW50cyBvZiB0aGUgZWRpdFRvZG9TZWN0aW9uXG4gICAgZWRpdFRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIC8vIGNyZWF0ZSBhIG1vZGFsXG4gICAgY29uc3QgbW9kYWxEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgLy8gcmVuZGVyIGEgbmV3IGVkaXRUb2RvRm9ybSB3aXRoIHRoZSBwcm92aWRlZCB0b2RvIGRhdGFcbiAgICBtb2RhbERpc3BsYXkuYXBwZW5kQ2hpbGQoZWRpdFRvZG9Db21wb25lbnQodG9kbykpO1xuICAgIGVkaXRUb2RvU2VjdGlvbi5hcHBlbmRDaGlsZChtb2RhbERpc3BsYXkpO1xuICAgIC8vIHdlIHdpbGwgYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lcnMgaGVyZSBiZWNhdXNlIHRoZSBlZGl0IGZvcm0gaXMgcmVuZGVyZWQgb25seSBhZnRlciB0aGUgXG4gICAgLy8gZWRpdCBidXR0b24gaXMgY2xpY2tlZFxuXG4gICAgLy8gYXR0YWNoIHRoZSBzdWJtaXQgZXZlbnQgbGlzdGVuZXJcbiAgICBnZXRFZGl0VG9kb0ZybSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxGb3JtRWxlbWVudCwgZXY6IFN1Ym1pdEV2ZW50KSB7XG4gICAgICAgIC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSBzdWJtaXQgZXZlbnRcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgICAgIGNvbnN0IGRhdGE6IEdlbmVyaWNPYmogPSB7fVxuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFbXCJwYXJlbnRQcm9qZWN0XCJdID0gdG9kby5wYXJlbnRQcm9qZWN0O1xuICAgICAgICAvLyBwdWJsaXNoIHRoZSBcImVkaXRUb2RvUmVxdWVzdFwiIGV2ZW50IHdpdGggdGhlIGZvcm1EYXRhIGFzIEV2ZW50RGF0YVxuICAgICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwiZWRpdFRvZG9SZXF1ZXN0XCIsIGRhdGEpO1xuICAgICAgICAvLyByZXNldCB0aGUgdG9kbyBmb3JtXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgZWRpdFRvZG9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBnZXRUb2Rvc1NlY3Rpb24oKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgICAvLyBhdHRhY2ggdGhlIGNhbmNlbCBldmVudCBsaXN0ZW5lclxuICAgIGdldENhbmNlbEVkaXRUb2RvQnRuKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICh0aGlzOiBIVE1MQnV0dG9uRWxlbWVudCwgZXY6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgZWRpdFRvZG9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBnZXRUb2Rvc1NlY3Rpb24oKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxufVxuXG4vLyBzaG93IGVycm9yIG1lc3NhZ2VcbmNvbnN0IGhhbmRsZVNob3dFcnJvciA9IChkYXRhOiBHZW5lcmljT2JqKSA9PiB7XG4gICAgY29uc3QgZXJyb3JTZWN0aW9uID0gZ2V0RXJyb3JTZWN0aW9uKClcbiAgICBnZXRFcnJvck1zZ0Rpc3BsYXkoKS50ZXh0Q29udGVudCA9IGRhdGEuZXJyb3JNc2c7XG4gICAgZXJyb3JTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGVycm9yU2VjdGlvbi5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAvLyBhdHRhY2ggZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvbiB0byBkaXNtaXNzIGVycm9yXG4gICAgZ2V0RGlzbWlzc0Vycm9yQnRuKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICh0aGlzOiBIVE1MQnV0dG9uRWxlbWVudCwgZXY6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgZXJyb3JTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBlcnJvclNlY3Rpb24uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSlcbn1cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBhZGQgbmV3IHByb2plY3QgYnV0dG9uXG5nZXRBZGRQcm9qZWN0QnRuKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICh0aGlzOiBIVE1MQnV0dG9uRWxlbWVudCwgZXY6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRvZ2dsZUFkZFByb2plY3RGb3JtKCk7XG59KTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIGNhbmNlbCB0aGUgYWRkIG5ldyBwcm9qZWN0XG5nZXRDYW5jZWxBZGRQcm9qZWN0QnRuKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBnZXRBZGRQcm9qZWN0QnRuKCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgdG9nZ2xlQWRkUHJvamVjdEZvcm0oKTtcbn0pO1xuXG4vLyBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGFkZCBuZXcgdG9kbyBmb3JtXG5nZXRBZGRUb2RvQnRuKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICh0aGlzOiBIVE1MQnV0dG9uRWxlbWVudCwgZXY6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRvZ2dsZUFkZFRvZG9Gb3JtKClcbn0pO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gY2FuY2VsIHRoZSBhZGQgbmV3IHRvZG9cbmdldENhbmNlbEFkZFRvZG9CdG4oKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdldEFkZFRvZG9CdG4oKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB0b2dnbGVBZGRUb2RvRm9ybSgpO1xufSk7XG5cbi8vIGF0dGFjaGluZyB0aGUgc3VibWl0IGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBhZGQgbmV3IHByb2plY3QgZm9ybVxuZ2V0UHJvamVjdEZybSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxGb3JtRWxlbWVudCwgZXY6IFN1Ym1pdEV2ZW50KSB7XG4gICAgLy8gcHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gb2YgdGhlIHN1Ym1pdCBldmVudFxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgLy8gcHVibGlzaCB0aGUgXCJuZXdQcm9qZWN0Q3JlYXRpb25SZXF1ZXN0XCIgZXZlbnQgd2l0aCB0aGUgbmFtZSBhcyB0aGUgRXZlbnREYXRhXG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcIm5ld1Byb2plY3RDcmVhdGlvblJlcXVlc3RcIiwgeyBwcm9qZWN0TmFtZTogZm9ybURhdGEuZ2V0KFwicHJvamVjdC1uYW1lXCIpLnRvU3RyaW5nKCkgfSk7XG4gICAgLy8gcmVzZXQgdGhlIGZvcm1cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdG9nZ2xlQWRkUHJvamVjdEZvcm0oKTtcbiAgICBnZXRBZGRQcm9qZWN0QnRuKCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59KTtcblxuLy8gYXR0YWNoaW5nIHRoZSBzdWJtaXQgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGFkZCBuZXcgdG9kbyBmb3JtXG5nZXRUb2RvRnJtKCkuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAodGhpczogSFRNTEZvcm1FbGVtZW50LCBldjogU3VibWl0RXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiBvZiB0aGUgc3VibWl0IGV2ZW50XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBkYXRhOiBHZW5lcmljT2JqID0ge31cbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGRhdGFbXCJwYXJlbnRQcm9qZWN0XCJdID0gKGdldFRvZG9Db250YWluZXIoKSBhcyBIVE1MVUxpc3RFbGVtZW50KS5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAvLyBwdWJsaXNoIHRoZSBcIm5ld1RvZG9JdGVtQ3JlYXRpb25SZXF1ZXN0XCIgZXZlbnQgd2l0aCB0aGUgZm9ybURhdGEgYXMgRXZlbnREYXRhXG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcIm5ld1RvZG9JdGVtQ3JlYXRpb25SZXF1ZXN0XCIsIGRhdGEpO1xuICAgIC8vIHJlc2V0IHRoZSBmb3JtXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRvZ2dsZUFkZFRvZG9Gb3JtKCk7XG4gICAgZ2V0QWRkVG9kb0J0bigpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufSk7XG5cbi8vIHN1YnNjcmliZSB0byBhbGwgbmVjZXNzYXJ5IGV2ZW50c1xuXG4vLyB3aGVuZXZlciBcImxpc3RDaGFuZ2VkXCIgaXMgZmlyZWQgd2UnbGwgcmUtcmVuZGVyIHRoZSBzaWRlYmFyLlxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwibGlzdENoYW5nZWRcIiwgcmVuZGVyU2lkZWJhcik7XG4vLyB3aGVuZXZlciBcInByb2plY3RDaGFuZ2VkXCIgaXMgZmlyZWQgd2UnbGwgcmUtcmVuZGVyIHRoZSBwcm9qZWN0IHNlY3Rpb24uXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJwcm9qZWN0Q2hhbmdlZFwiLCByZW5kZXJQcm9qZWN0KTtcbi8vIGV2ZW50IGhhbmRsZXIgZm9yIGVkaXQgcHJvamVjdCBuYW1lIGJ1dHRvblxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwiZWRpdFByb2plY3ROYW1lQnRuQ2xpY2tlZFwiLCBoYW5kbGVFZGl0UHJvamVjdE5hbWVCdG5DbGljayk7XG4vLyBldmVudCBoYW5kbGVyIGZvciBjYW5jZWwgZWRpdCBwcm9qZWN0IG5hbWUgYnV0dG9uXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJjYW5jZWxFZGl0UHJvamVjdE5hbWVCdG5DbGlja2VkXCIsIGhhbmRsZUNhbmNlbEVkaXRQcm9qZWN0TmFtZUJ0bkNsaWNrKTtcbi8vIGV2ZW50IGhhbmRsZXIgZm9yIGVkaXQgdG9kbyBidXR0b25cbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcImVkaXRUb2RvQnRuQ2xpY2tlZFwiLCBoYW5kbGVFZGl0VG9kb0J0bkNsaWNrKTtcbi8vIHdlJ2xsIGRpc3BsYXkgZXJyb3JzKGN1cnJlbnRseSB3aGVuIHVzZXIgdHJpZXMgdG8gZGVsZXRlIGRlZmF1bHQgcHJvamVjdClcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcInNob3dFcnJvclwiLCBoYW5kbGVTaG93RXJyb3IpOyIsIi8vIGZ1bmN0aW9ucyBmb3Igc2VsZWN0aW5nIGFsbCBuZWNlc3NhcnkgZG9tIGVsZW1lbnRzLCB3ZSdyZSBkb2luZyB0aGlzIGJlY2F1c2UgaWYgd2UgaW5zdGVhZCBkZWNsYXJlIHRoZW1cbi8vIGFzIHZhcmlhYmxlcywgdGhlIHNlbGVjdG9yIHdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgZG9tIGVsZW1lbnQgaXMgbm90IHlldCByZW5kZXJlZCwgYnkgaW5zdGVhZCB0dXJuaW5nXG4vLyBpdCB0byBhIGZ1bmN0aW9uIHdlIGNhbiBxdWVyeSB0aGVtIG9uIHJ1bnRpbWUgYXZvaWRpbmcgdGhlIGNoYW5jZXMgb2YgdGhlIHZhcmlhYmxlIGJlaW5nIHVuZGVmaW5lZC5cblxuY29uc3QgZ2V0UHJvamVjdHNTZWN0aW9uID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I3Byb2plY3RzLXNlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGdldFRvZG9zU2VjdGlvbiA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiN0b2Rvcy1zZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBnZXRUb2RvQ29udGFpbmVyID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwudG9kby1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGdldEFkZFByb2plY3RCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYWRkLXByb2plY3QnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGdldENhbmNlbEFkZFByb2plY3RCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsLWFkZC1wcm9qZWN0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBnZXRBZGRUb2RvTW9kYWwgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjdG9kby1mb3JtLXNlY3Rpb24+ZGl2Lm1vZGFsJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBnZXRBZGRUb2RvQnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmFkZC10b2RvJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBnZXRDYW5jZWxBZGRUb2RvQnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmNhbmNlbC1hZGQtdG9kbycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgZ2V0UHJvamVjdEZybSA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jYWRkLXByb2plY3QtZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IGdldFRvZG9Gcm0gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI2FkZC10b2RvLWZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBnZXRFZGl0VG9kb1NlY3Rpb24gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjZWRpdC10b2RvLWZvcm0tc2VjdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZ2V0RWRpdFRvZG9Gcm0gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI2VkaXQtdG9kby1mb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgZ2V0Q2FuY2VsRWRpdFRvZG9CdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsLWVkaXQtdG9kbycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgZ2V0RXJyb3JTZWN0aW9uID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2Vycm9ycy1zZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBnZXRFcnJvck1zZ0Rpc3BsYXkgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLmVycm9yLW1zZycpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuY29uc3QgZ2V0RGlzbWlzc0Vycm9yQnRuID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmRpc21pc3MtZXJyb3InKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGdldFByb2plY3RDb250cm9scyA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KSA9PiBwYXJlbnQucXVlcnlTZWxlY3RvcignZGl2LnByb2plY3QtY29udHJvbHMtc2VjdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZ2V0RWRpdFByb2plY3ROYW1lRnJtcyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0jZWRpdC1wcm9qZWN0LWZvcm0nKTtcblxuZXhwb3J0IHtcbiAgICBnZXRQcm9qZWN0c1NlY3Rpb24sXG4gICAgZ2V0VG9kb3NTZWN0aW9uLFxuICAgIGdldFRvZG9Db250YWluZXIsXG4gICAgZ2V0QWRkUHJvamVjdEJ0bixcbiAgICBnZXRDYW5jZWxBZGRQcm9qZWN0QnRuLFxuICAgIGdldEFkZFRvZG9CdG4sXG4gICAgZ2V0Q2FuY2VsQWRkVG9kb0J0bixcbiAgICBnZXRQcm9qZWN0RnJtLFxuICAgIGdldFRvZG9Gcm0sXG4gICAgZ2V0RWRpdFByb2plY3ROYW1lRnJtcyxcbiAgICBnZXRFZGl0VG9kb1NlY3Rpb24sXG4gICAgZ2V0RWRpdFRvZG9Gcm0sXG4gICAgZ2V0Q2FuY2VsRWRpdFRvZG9CdG4sXG4gICAgZ2V0RXJyb3JTZWN0aW9uLFxuICAgIGdldEVycm9yTXNnRGlzcGxheSxcbiAgICBnZXREaXNtaXNzRXJyb3JCdG4sXG4gICAgZ2V0QWRkVG9kb01vZGFsLFxuICAgIGdldFByb2plY3RDb250cm9sc1xufSIsIi8vIFRoZSBldm5ldHMgb2JzZXJ2ZXIgb2JqZWN0IGJhc2ljYWxseSB0aGUgcHViL3N1YiBvYmplY3RcbmNvbnN0IEV2ZW50c09ic2VydmVyID0ge1xuICAgIC8vIGFsbCB0aGUgZXZuZXRzIHN1YnNjcmliZWQgdG9cbiAgICBldmVudHM6IHt9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IEV2ZW50SGFuZGxlclR5cGU8RXZlbnRQYXlsb2Fkcz4pIHtcbiAgICAgICAgLy8gSWYgdGhlIHByb3ZpZGVkIGV2ZW50IG5hbWUgaXMgcHJlc2VudCBpbiBldmVudHMgb2JqZWN0LCBhZGQgdGhlIHBhc3NlZCBpblxuICAgICAgICAvLyBldmVudEhhbmRsZXIgdG8gdGhhdCBldmVudCdzIGxpc3QsIGlmIG5vdCBjcmVhdGUgYSBuZXcgZXZlbnQgYW5kIGFkZCB0aGUgZXZlbnQgaGFuZGxlclxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGV2ZW50SGFuZGxlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2V2ZW50SGFuZGxlci5uYW1lfSBzdWJzY3JpYmVkIHRvIGV2ZW50ICR7ZXZlbnROYW1lfWApO1xuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24gKGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhPzogRXZlbnRQYXlsb2Fkcykge1xuICAgICAgICBjb25zb2xlLmxvZyhgZXZlbnQ6ICR7ZXZlbnROYW1lfSB3YXMganVzdCBmaXJlZGApO1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgc3Vic2NyaWJlcnMgYXJyYXkgZm9yIHRoZSBwdWJsaXNoZWQgZXZlbnQgYW5kIGNhbGwgZWFjaFxuICAgICAgICAvLyBmdW5jdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBkYXRhXG4gICAgICAgIHN1YnNjcmliZXJzPy5mb3JFYWNoKChmbjogKHg6IEV2ZW50UGF5bG9hZHMpID0+IHZvaWQpID0+IGZuKGRhdGEpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c09ic2VydmVyOyIsImltcG9ydCBFdmVudHNPYnNlcnZlciBmcm9tIFwiLi9ldmVudHNPYnNlcnZlclwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJ1xuXG4vLyB0aGUgdG9kb0xpc3Qgb2JqZWN0XG5jb25zdCB0b2RvTGlzdDogVG9kb0xpc3RUeXBlID0ge1xuICAgIC8vIGFycmF5IGhvbGRpbmcgYWxsIHRoZSBwcm9qZWN0c1xuICAgIGxpc3Q6IFtdLFxuICAgIC8vIGNvbXBsZXRlbHkgcmVwbGFjZSB0aGUgbGlzdCB1c2VmdWwgZm9yIGRlbGV0aW5nIHByb2plY3RzIGFuZCBsb2FkaW5nIHNhdmVkIGRhdGFcbiAgICByZXBsYWNlTGlzdDogKG5ld0xpc3Q6IFByb2plY3RUeXBlW10pID0+IHRvZG9MaXN0Lmxpc3QgPSBuZXdMaXN0LFxuICAgIC8vIGFkZCBhIG5ldyBwcm9qZWN0IHRvIHRoZSBsaXN0XG4gICAgYWRkUHJvamVjdDogKHByb2plY3Q6IFByb2plY3RUeXBlKSA9PiB0b2RvTGlzdC5saXN0LnB1c2gocHJvamVjdCksXG4gICAgLy8gZ2V0IGEgcHJvamVjdCBmcm9tIHRoZSBsaXN0XG4gICAgZ2V0UHJvamVjdDogKHByb2plY3RJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiB0b2RvTGlzdC5saXN0LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QucHJvamVjdElkID09PSBwcm9qZWN0SWQpWzBdO1xuICAgIH0sXG4gICAgLy8gZWRpdCBhIGdpdmVuIHByb2plY3QgbmFtZVxuICAgIGVkaXRQcm9qZWN0TmFtZTogKHByb2plY3RJZDogc3RyaW5nLCBuZXdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBzZWxlY3RlZFByb2plY3QucHJvamVjdE5hbWUgPSBuZXdOYW1lO1xuICAgIH0sXG4gICAgLy8gZGVsZXRlIGEgcHJvamVjdFxuICAgIGRlbGV0ZVByb2plY3Q6IChwcm9qZWN0SWQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0b2RvTGlzdC5yZXBsYWNlTGlzdCh0b2RvTGlzdC5saXN0LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QucHJvamVjdElkICE9PSBwcm9qZWN0SWQpKTtcbiAgICB9XG59XG5cbi8vIGNyZWF0ZSBhIG5ldyBsaXN0IHdpdGggZGVmYXVsdCBwcm9qZWN0XG5jb25zdCBjcmVhdGVOZXdMaXN0ID0gKCkgPT4ge1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJuZXdQcm9qZWN0Q3JlYXRpb25SZXF1ZXN0XCIsIHtcbiAgICAgICAgcHJvamVjdE5hbWU6IFwiSG9tZVwiLFxuICAgICAgICBwcm9qZWN0SWQ6IFwiZGVmYXVsdEhvbWVcIlxuICAgIH0pXG59XG5cbi8vIHdoZW5ldmVyIGxpc3QgaXMgY2hhbmdlZCBwdWJsaXNoIHRoZSBldmVudFxuY29uc3QgcHVibGlzaExpc3RDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IHRvZG9MaXN0Lmxpc3Q7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcImxpc3RDaGFuZ2VkXCIsIHsgbGlzdCB9KTtcbn1cblxuLy8gZGF0YSBzYXZlZCBpbiBsb2NhbFN0b3JhZ2UgaXMgbG9hZGVkIHJlcGxhY2UgY3VycmVudCBkYXRhIHdpdGggbG9hZGVkIGRhdGFcbmNvbnN0IGhhbmRsZUxvYWRlZExpc3RGcm9tU3RvcmFnZSA9IChkYXRhOiBMaXN0UGF5bG9hZCkgPT4ge1xuICAgIHRvZG9MaXN0LnJlcGxhY2VMaXN0KGRhdGEuc2F2ZWRMaXN0KTtcbiAgICBwdWJsaXNoTGlzdENoYW5nZSgpO1xufVxuXG4vLyBhIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWQsIGFwcGVuZCBpdCB0byB0aGUgbGlzdFxuY29uc3QgaGFuZGxlTmV3UHJvamVjdENyZWF0ZWQgPSAoZGF0YTogUHJvamVjdFBheWxvYWQpID0+IHtcbiAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KGRhdGEucHJvamVjdCk7XG4gICAgcHVibGlzaExpc3RDaGFuZ2UoKTtcbn1cblxuLy8gYSByZXF1ZXN0IHRvIGNoYW5nZSBwcm9qZWN0IG5hbWUgaXMgcmVjZWl2ZWQsIHVwZGF0ZSBwcm9qZWN0IG5hbWVcbmNvbnN0IGhhbmRsZVByb2plY3ROYW1lQ2hhbmdlUmVxdWVzdCA9IChkYXRhOiBHZW5lcmljT2JqKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgIG5ld05hbWVcbiAgICB9ID0gZGF0YTtcbiAgICB0b2RvTGlzdC5lZGl0UHJvamVjdE5hbWUocHJvamVjdElkLCBuZXdOYW1lKTtcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwicHJvamVjdENoYW5nZWRcIiwgeyBwcm9qZWN0OiB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCkgfSlcbiAgICBwdWJsaXNoTGlzdENoYW5nZSgpO1xufVxuXG4vLyBhIHJlcXVlc3QgdG8gZWRpdCBhIHRvZG8gaXRlbSByZWNlaXZlZCwgZ2V0IHRoZSByZWxldmFudCBwcm9qZWN0IGFuZCBcbi8vIHB1Ymxpc2ggYW4gZXZlbnQgcmVxdWVzdGluZyB0b2RvIGl0ZW0gZWRpdGluZ1xuY29uc3QgaGFuZGxlRWRpdFRvZG9SZXF1ZXN0ID0gKGRhdGE6IEdlbmVyaWNPYmopID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIHBhcmVudFByb2plY3RcbiAgICB9ID0gZGF0YTtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KHBhcmVudFByb2plY3QpO1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJlZGl0VG9kb1JlcXVlc3RQcm9qZWN0Rm91bmRcIiwgeyBwYXJlbnQ6IHNlbGVjdGVkUHJvamVjdCwgdG9kb0RhdGE6IGRhdGEgfSk7XG59XG5cbi8vIGEgcmVxdWVzdCB0byBjcmVhdGUgYSBuZXcgdG9kbyBpdGVtIHJlY2VpdmVkLCBnZXQgdGhlIHJlbGV2YW50IHByb2plY3QgYW5kXG4vLyBwdWJsaXNoIGFuIGV2ZW50IHRvIGNyZWF0ZSBhIG5ldyB0b2RvIGl0ZW0gaW4gdGhlIHByb2plY3RcbmNvbnN0IGhhbmRsZVRvZG9DcmVhdGlvblJlcXVlc3QgPSAodG9kb0RhdGE6IEdlbmVyaWNPYmopID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KHRvZG9EYXRhLnBhcmVudFByb2plY3QpO1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJuZXdUb2RvSXRlbUNyZWF0aW9uUHJvamVjdEZvdW5kXCIsIHsgcGFyZW50OiBzZWxlY3RlZFByb2plY3QsIHRvZG9EYXRhIH0pXG59XG5cbi8vIGEgcmVxdWVzdCB0byBkZWxldGUgYSBwcm9qZWN0IGlzIHJlY2VpdmVkLCBkZWxldGUgdGhlIHByb2plY3QgYW5kIHB1Ymxpc2ggXG4vLyBkZWZhdWx0IHByb2plY3RcbmNvbnN0IGhhbmRsZURlbGV0ZVByb2plY3QgPSAoZGF0YTogR2VuZXJpY09iaikgPT4ge1xuICAgIC8vIHByZXZlbnRpbmcgdXNlciBmcm9tIGRlbGV0aW5nIHRoZSBkZWZhdWx0IHByb2plY3RcbiAgICBpZiAoZGF0YS5wcm9qZWN0SWQgPT09IFwiZGVmYXVsdEhvbWVcIikge1xuICAgICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwic2hvd0Vycm9yXCIsIHsgZXJyb3JNc2c6IFwiRGVmYXVsdCBQcm9qZWN0IGNhbm5vdCBiZSBkZWxldGVkXCIgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdG9kb0xpc3QuZGVsZXRlUHJvamVjdChkYXRhLnByb2plY3RJZCk7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInByb2plY3RDaGFuZ2VkXCIsIHsgcHJvamVjdDogdG9kb0xpc3QuZ2V0UHJvamVjdChcImRlZmF1bHRIb21lXCIpIH0pO1xufVxuXG4vLyBhIHJlcXVlc3QgdG8gdG9nZ2xlIHRvZG8gY29tcGxldGlvbiBzdGF0dXMgaXMgcmVjZWl2ZWQsIGdldCB0aGUgcmVsZXZhbnQgcHJvamVjdFxuLy8gYW5kIHB1Ymxpc2ggaXQgdG8gYmUgdG9nZ2xlZFxuY29uc3QgaGFuZGxlVG9nZ2xlVG9kb1N0YXR1cyA9IChkYXRhOiBHZW5lcmljT2JqKSA9PiB7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInRvZ2dsZVRvZG9TdGF0dXNcIiwgeyBwYXJlbnQ6IHRvZG9MaXN0LmdldFByb2plY3QoZGF0YS5wYXJlbnQpLCB0b2RvSWQ6IGRhdGEudG9kb2lkIH0pO1xufVxuXG4vLyBhIHJlcXVlc3QgdG8gZGVsZXRlIGEgdG9kbyBpdGVtIHJlY2VpdmVkLCBnZXQgdGhlIHJlbGV2YW50IHByb2plY3QgYW5kIHB1Ymxpc2hcbi8vIGl0IHJlcXVlc3RpbmcgdG8gZGVsZXRlIHRoZSB0b2RvIGl0ZW1cbmNvbnN0IGhhbmRsZURlbGV0ZVRvZG9CdG5DbGljayA9IChkYXRhOiBHZW5lcmljT2JqKSA9PiB7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcImRlbGV0ZVRvZG9JdGVtXCIsIHsgcGFyZW50OiB0b2RvTGlzdC5nZXRQcm9qZWN0KGRhdGEucGFyZW50KSwgdG9kb0lkOiBkYXRhLnRvZG9pZCB9KTtcbn1cblxuLy8gaWYgbG9jYWxTdG9yYWdlIGRvZXMgbm90IGhhdmUgYSBzYXZlZCBsaXN0IGNyZWF0ZSBhIG5ldyBsaXN0XG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJzYXZlZExpc3RFbXB0eVwiLCBjcmVhdGVOZXdMaXN0KTtcbi8vIGlmIGxvY2FsU3RvcmFnZSBkb2VzIGhhdmUgYSBzYXZlZCBsaXN0IHJlcGxhY2UgdGhlIGN1cnJlbnQgbGlzdCB3aXRoIG5ldyBvbmVcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcInNhdmVkTGlzdExvYWRlZFwiLCBoYW5kbGVMb2FkZWRMaXN0RnJvbVN0b3JhZ2UpO1xuLy8gd2hlbmV2ZXIgXCJuZXdQcm9qZWN0Q3JlYXRlZFwiIGFkZCBpdCB0byBsaXN0XG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJuZXdQcm9qZWN0Q3JlYXRlZFwiLCBoYW5kbGVOZXdQcm9qZWN0Q3JlYXRlZCk7XG4vLyB3aGVuZXZlciBcInByb2plY3ROYW1lQ2hhbmdlUmVxdWVzdFwiIHVwZGF0ZSBwcm9qZWN0IG5hbWVcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcInByb2plY3ROYW1lQ2hhbmdlUmVxdWVzdFwiLCBoYW5kbGVQcm9qZWN0TmFtZUNoYW5nZVJlcXVlc3QpO1xuLy8gc2VlIGFib3ZlIGZ1bmN0aW9uIGRlZmluaXRpb25cbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcImVkaXRUb2RvUmVxdWVzdFwiLCBoYW5kbGVFZGl0VG9kb1JlcXVlc3QpO1xuLy8gc2VlIGFib3ZlIGZ1bmN0aW9uIGRlZmluaXRpb25cbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcIm5ld1RvZG9JdGVtQ3JlYXRpb25SZXF1ZXN0XCIsIGhhbmRsZVRvZG9DcmVhdGlvblJlcXVlc3QpO1xuLy8gd2hlbmV2ZXIgXCJwcm9qZWN0Q2hhbmdlZFwiIGlzIGZpcmVkIHB1Ymxpc2ggaXQgZm9yIHNhdmluZyBhbmQgcmUtcmVuZGVyaW5nXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJwcm9qZWN0Q2hhbmdlZFwiLCBwdWJsaXNoTGlzdENoYW5nZSk7XG4vLyBzZWUgYWJvdmUgZnVuY3Rpb24gZGVmaW5pdGlvblxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwiZGVsZXRlUHJvamVjdENsaWNrZWRcIiwgaGFuZGxlRGVsZXRlUHJvamVjdCk7XG4vLyBzZWUgYWJvdmUgZnVuY3Rpb24gZGVmaW5pdGlvblxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwidG9nZ2xlVG9kb1N0YXR1c1JlcXVlc3RcIiwgaGFuZGxlVG9nZ2xlVG9kb1N0YXR1cyk7XG4vLyBzZWUgYWJvdmUgZnVuY3Rpb24gZGVmaW5pdGlvblxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwiZGVsZXRlVG9kb0J0bkNsaWNrZWRcIiwgaGFuZGxlRGVsZXRlVG9kb0J0bkNsaWNrKTtcblxuLy8gd2hlbiBzY3JpcHQgaXMgbG9hZGVkIGNoZWNrU3RvcmFnZSB0byBzZWUgaWYgd2UgaGF2ZSBzYXZlZCBsaXN0XG5FdmVudHNPYnNlcnZlci5wdWJsaXNoKFwiY2hlY2tTdG9yYWdlXCIpO1xuLy8gc2VsZWN0IGRlZmF1bHQgcHJvamVjdCB0byBiZSByZW5kZXJlZFxuRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInByb2plY3RDaGFuZ2VkXCIsIHsgcHJvamVjdDogdG9kb0xpc3QuZ2V0UHJvamVjdChcImRlZmF1bHRIb21lXCIpIH0pOyIsImltcG9ydCBFdmVudHNPYnNlcnZlciBmcm9tIFwiLi9ldmVudHNPYnNlcnZlclwiO1xuXG4vLyBwcm9qZWN0IGZhY3RvcnlcbmNvbnN0IFByb2plY3QgPSAocHJvamVjdE5hbWU6IHN0cmluZywgcHJvamVjdElkOiBzdHJpbmcpOiBQcm9qZWN0VHlwZSA9PiB7XG4gICAgbGV0IHRvZG9zOiBUb2RvSXRlbVR5cGVbXSA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIHRvZG9zXG4gICAgfVxufVxuXG4vLyB0b2RvIGl0ZW0gZmFjdG9yeVxuY29uc3QgVG9kb0l0ZW0gPSAoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIGR1ZURhdGU6IERhdGUsXG4gICAgcHJpb3JpdHk6IFByaW9yaXR5RW51bSxcbiAgICBjb21wbGV0ZWQ6IGJvb2xlYW4sXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFyZW50UHJvamVjdDogc3RyaW5nXG4pOiBUb2RvSXRlbVR5cGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVpZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGVkLFxuICAgICAgICBwYXJlbnRQcm9qZWN0XG4gICAgfVxufVxuXG4vLyByZXR1cm4gYSB0b2RvIGl0ZW0gZnJvbSBnaXZlbiBwcm9qZWN0XG5jb25zdCBnZXRTaW5nbGVUb2RvID0gKHByb2plY3Q6IFByb2plY3RUeXBlLCB0b2RvSWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0LnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8udWlkID09PSB0b2RvSWQpWzBdO1xufVxuXG4vLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgcHVibGlzaCBpdFxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IChkYXRhOiBHZW5lcmljT2JqKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgcHJvamVjdElkXG4gICAgfSA9IGRhdGE7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RJZCB8fCBEYXRlLm5vdygpICsgcHJvamVjdE5hbWUpO1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJuZXdQcm9qZWN0Q3JlYXRlZFwiLCB7IHByb2plY3Q6IG5ld1Byb2plY3QgfSlcbn1cblxuLy8gY3JlYXRlIGEgbmV3IHRvZG8gYW5kIHB1Ymxpc2ggaXRcbmNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAoZGF0YTogVG9kb0RhdGFQYXlsb2FkKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5XG4gICAgfSA9IGRhdGEudG9kb0RhdGFcbiAgICBjb25zdCBuZXdEdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG4gICAgY29uc3QgdWlkID0gKGRhdGEucGFyZW50LnRvZG9zLmxlbmd0aCAtIDEgKyBEYXRlLm5vdygpKS50b1N0cmluZygpO1xuICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIChwcmlvcml0eSBhcyBQcmlvcml0eUVudW0pLCBmYWxzZSwgdWlkLCBkYXRhLnBhcmVudC5wcm9qZWN0SWQpO1xuICAgIGRhdGEucGFyZW50LnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInByb2plY3RDaGFuZ2VkXCIsIHsgcHJvamVjdDogZGF0YS5wYXJlbnQgfSk7XG59XG5cbi8vIHRvZ2dsZSB0aGUgY29tcGxldGlvbiBzdGF0dXMgb2YgYSB0b2RvIGl0ZW0gYW5kIHB1Ymxpc2ggaXRcbmNvbnN0IHRvZ2dsZVRvZG9Db21wbGV0aW9uID0gKGRhdGE6IFRvZG9JZFBheWxvYWQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgdG9kb0lkXG4gICAgfSA9IGRhdGFcbiAgICBjb25zdCBzZWxlY3RlZFRvZG8gPSBnZXRTaW5nbGVUb2RvKHBhcmVudCwgdG9kb0lkKTtcbiAgICBzZWxlY3RlZFRvZG8uY29tcGxldGVkID0gIXNlbGVjdGVkVG9kby5jb21wbGV0ZWQ7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInByb2plY3RDaGFuZ2VkXCIsIHsgcHJvamVjdDogcGFyZW50IH0pO1xufVxuXG4vLyB1cGRhdGUgYSBnaXZlbiB0b2RvIGluIHRoZSBwcm92aWRlZCBwcm9qZWN0IGFuZCBwdWJsaXNoIGl0XG5jb25zdCB1cGRhdGVUb2RvID0gKGRhdGE6IFRvZG9EYXRhUGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgdG9kb0lkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5XG4gICAgfSA9IGRhdGEudG9kb0RhdGE7XG4gICAgY29uc3QgY3VycmVudFRvZG8gPSBnZXRTaW5nbGVUb2RvKGRhdGEucGFyZW50LCB0b2RvSWQpO1xuICAgIGN1cnJlbnRUb2RvLnRpdGxlID0gdGl0bGU7XG4gICAgY3VycmVudFRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBjdXJyZW50VG9kby5kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG4gICAgY3VycmVudFRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eSBhcyBQcmlvcml0eUVudW07XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInByb2plY3RDaGFuZ2VkXCIsIHsgcHJvamVjdDogZGF0YS5wYXJlbnQgfSk7XG59XG5cbi8vIGRlbGV0ZSBhIGdpdmVuIHRvZG8gZnJvbSBwcm92aWRlZCBwcm9qZWN0IGFuZCBwdWJsaXNoIHN0YXR1c1xuY29uc3QgZGVsZXRlVG9kbyA9IChkYXRhOiBUb2RvSWRQYXlsb2FkKSA9PiB7XG4gICAgZGF0YS5wYXJlbnQudG9kb3MgPSBkYXRhLnBhcmVudC50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnVpZCAhPT0gZGF0YS50b2RvSWQpO1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJwcm9qZWN0Q2hhbmdlZFwiLCB7IHByb2plY3Q6IGRhdGEucGFyZW50IH0pO1xufVxuXG4vLyB3aGVuZXZlciBhIHJlcXVlc3QgdG8gY3JlYXRlIG5ldyBwcm9qZWN0IGlzIHJlY2VpdmVkLCBoYW5kbGUgdGhlIHJlcXVlc3RcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcIm5ld1Byb2plY3RDcmVhdGlvblJlcXVlc3RcIiwgY3JlYXRlTmV3UHJvamVjdCk7XG4vLyBmcm9tIHRoZSBwcm92aWRlZCBwcm9qZWN0IGRvIHRoZSBuZWNlc3NhcnkgY2hhbmdlc1xuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwiZWRpdFRvZG9SZXF1ZXN0UHJvamVjdEZvdW5kXCIsIHVwZGF0ZVRvZG8pO1xuLy8gYWRkIGEgbmV3IHRvZG8gaXRlbSB0byBwcm92aWRlZCBwcm9qZWN0XG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJuZXdUb2RvSXRlbUNyZWF0aW9uUHJvamVjdEZvdW5kXCIsIGNyZWF0ZU5ld1RvZG8pO1xuLy8gdG9nZ2xlIGNvbXBsZXRpb24gc3RhdHVzIG9mIGEgdG9kbyBpbiBwcm92aWRlZCBwcm9qZWN0XG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJ0b2dnbGVUb2RvU3RhdHVzXCIsIHRvZ2dsZVRvZG9Db21wbGV0aW9uKTtcbi8vIGhhbmRsZSBkZWxldGV0b2RvaXRlbSByZXF1ZXN0XG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJkZWxldGVUb2RvSXRlbVwiLCBkZWxldGVUb2RvKTsiLCJpbXBvcnQgRXZlbnRzT2JzZXJ2ZXIgZnJvbSBcIi4vZXZlbnRzT2JzZXJ2ZXJcIjtcblxuLy8gc2F2ZSB0aGUgcHJvdmlkZWQgbGlzdCB0byBsb2NhbFN0b3JhZ2VcbmNvbnN0IHNhdmVMaXN0VG9Mb2NhbFN0b3JhZ2UgPSAoZGF0YTogTGlzdFBheWxvYWQpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUb2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYXRhLmxpc3QpKTtcbn1cblxuLy8gbG9hZCB0aGUgdG9kb0xpc3QgZnJvbSBsb2NhbFN0b3JhZ2VcbmNvbnN0IGxvYWRMaXN0RnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2RvTGlzdFwiKSk7XG59XG5cbi8vIGNoZWNrIGlmIGxvY2FsU3RvcmFnZSBoYXMgYSBzYXZlZExpc3QgYW5kIHJlc3BvbmQgYWNjb3JkaW5nbHlcbmNvbnN0IGNoZWNrU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlZExpc3QgPSBsb2FkTGlzdEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAoc2F2ZWRMaXN0KSB7XG4gICAgICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJzYXZlZExpc3RMb2FkZWRcIiwgeyBzYXZlZExpc3QgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInNhdmVkTGlzdEVtcHR5XCIpXG4gICAgfVxufVxuXG4vLyB3aGVuZXZlciBcImNoZWNrU3RvcmFnZVwiIGV2ZW50IGlzIGZpcmVkIGNoZWNrIHN0b3JhZ2UgZm9yIHNhdmVkIGxpc3RcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcImNoZWNrU3RvcmFnZVwiLCBjaGVja1N0b3JhZ2UpO1xuLy8gd2hlbmV2ZXIgXCJsaXN0Q2hhbmdlZFwiIGV2ZW50IGlzIGZpcmVkLCBzYXZlIGl0IHRvIGxvY2FsU3RvcmFnZVxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwibGlzdENoYW5nZWRcIiwgc2F2ZUxpc3RUb0xvY2FsU3RvcmFnZSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9kaXNwbGF5Q29tcG9uZW50cy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2Rpc3BsYXlDb250cm9sbGVyLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvcHJvamVjdENvbnRyb2xsZXIudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9zdG9yYWdlQ29udHJvbGxlci50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=