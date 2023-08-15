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
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA,4BAA4B;AAC5B;IACI,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;IAC1B,iCAAiC;IACjC,+BAA+B;IAC/B,0BAA0B;IAC1B,iCAAiC;IACjC,oCAAoC;IACpC,0CAA0C;IAC1C;AACJ;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA,sBAAsB;;AAEtB;;IAEI,gBAAgB;IAChB,eAAe;IACf,SAAS;IACT,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;IAEI,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA,gBAAgB;AAChB;;IAEI,cAAc;IACd,SAAS;IACT,UAAU;IACV,mLAAmL;AACvL;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,iCAAiC;IACjC,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA,WAAW;AACX;IACI,cAAc;IACd,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,uBAAuB;IACvB,8BAA8B;IAC9B,cAAc;AAClB;;AAEA,YAAY;AACZ;IACI,aAAa;IACb,0BAA0B;IAC1B,4BAA4B;IAC5B,cAAc;IACd,cAAc;IACd,qBAAqB;IACrB,qCAAqC;IACrC,gCAAgC;AACpC;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,kBAAkB;IAClB,qCAAqC;IACrC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,0BAA0B;IAC1B,sCAAsC;IACtC,cAAc;IACd,cAAc;IACd,QAAQ;IACR,cAAc;IACd,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,4BAA4B;IAC5B,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,qCAAqC;IACrC,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,qCAAqC;AACzC;;AAEA,kBAAkB;;AAElB;;IAEI,uBAAuB;IACvB,aAAa;IACb,0BAA0B;IAC1B,QAAQ;IACR,eAAe;IACf,gBAAgB;IAChB,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;;;;IAII,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;;AAGA,UAAU;;AAEV;IACI,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA,yBAAyB;AACzB;;IAEI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,kBAAkB;;AAEtB;;AAEA;;IAEI,qCAAqC;IACrC,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA,WAAW;;AAEX;IACI,kBAAkB;IAClB,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;;IAEI,qBAAqB;IACrB,yBAAyB;AAC7B","sourcesContent":["/* Generic/Universal stuff */\n* {\n    box-sizing: border-box;\n}\n\n:root {\n    --base: rgb(238, 238, 238);\n    --green-accent: rgb(139, 154, 70);\n    --brown-accent: rgb(84, 18, 18);\n    --primary: rgb(15, 14, 14);\n    --link-accent: rgb(255, 255, 102);\n    --high-priority: rgb(255, 0, 0, 0.9);\n    --medium-priority: rgb(255, 255, 102, 0.9);\n    --low-priority: rgb(0, 255, 0, 0.9)\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.hidden {\n    opacity: 0;\n    display: none !important;\n}\n\nbutton {\n    padding: 0;\n    cursor: pointer;\n    font-family: inherit;\n    font-weight: bold;\n    border-radius: 10px;\n}\n\ninput,\ntextarea {\n    border-radius: 5px;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-color: var(--base);\n}\n\n/* svg inside button */\n\nbutton svg,\nbutton img {\n    min-height: 25px;\n    min-width: 25px;\n    margin: 0;\n    width: fit-content;\n    fill: inherit;\n}\n\nbutton:has(svg),\nbutton:has(img) {\n    border: none;\n    background: none;\n    background-size: cover;\n}\n\n/* Body Outside*/\nhtml,\nbody {\n    height: 100dvh;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto Condensed', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr auto;\n    background-color: var(--primary);\n    color: var(--primary);\n}\n\n/* Header */\nheader {\n    padding: 0 3vw;\n    background-color: var(--brown-accent);\n    color: var(--base);\n}\n\n/* Main */\nmain {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 4fr;\n    overflow: auto;\n}\n\n/* Sidebar */\naside#sidebar {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    overflow: auto;\n    padding: 2vmax;\n    justify-items: center;\n    background-color: var(--green-accent);\n    /* color: var(--brown-accent); */\n}\n\nbutton.add-project {\n    background: var(--brown-accent);\n    color: var(--base);\n    font-size: 1.1rem;\n    padding: 1vh 2vw;\n    border: 2px solid var(--primary);\n}\n\ndiv#project-form-section {\n    min-height: 5vh;\n}\n\ndiv#projects-section,\nul.project-container {\n    width: 100%;\n    overflow: auto;\n}\n\ndiv#projects-section>h2 {\n    text-align: center;\n}\n\nli.project {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: 1fr;\n    align-items: center;\n    justify-items: center;\n    border: 1px solid black;\n    margin-bottom: 3vh;\n    background-color: var(--brown-accent);\n    color: var(--base);\n    fill: var(--base);\n    border-radius: 10px;\n}\n\nli.project img {\n    filter: invert(100%);\n}\n\nform#edit-project-form {\n    grid-column: 1 / 3;\n    padding: 5vh 1vw;\n}\n\nform#edit-project-form>div.controls-section {\n    margin: 2vh 0;\n    text-align: center;\n}\n\nform#add-project-form {\n    display: grid;\n    justify-items: center;\n    gap: 2vh;\n}\n\nform#add-project-form>div.form-header {\n    display: grid;\n    grid-template-columns: 1fr 3vw;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n}\n\nform#add-project-form>div.controls-section {\n    margin-top: 3vh;\n}\n\n/* Contents section */\ndiv#content-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr auto;\n    overflow: auto;\n    padding: 2vmax;\n    gap: 2vh;\n    max-width: 65%;\n    margin: 0 auto;\n    color: var(--base);\n}\n\nbutton.add-todo {\n    background-color: var(--base);\n    color: var(--primary);\n    font-size: 1.1rem;\n    padding: 1vh 2vw;\n}\n\ndiv#todo-form-section {\n    display: grid;\n}\n\ndiv#todo-form-section>button {\n    justify-self: end;\n}\n\ndiv#todos-section {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    overflow: auto;\n}\n\ndiv#todos-section>h2 {\n    text-align: center;\n}\n\nul.todo-container {\n    overflow: auto;\n}\n\nli.todo-item {\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 50px 1fr 100px;\n    align-items: center;\n    max-width: 500px;\n    margin-bottom: 2vh;\n    color: var(--primary);\n    border-radius: 10px;\n}\n\nli.completed-todo {\n    text-decoration: line-through;\n}\n\nli.high-priority {\n    background-color: var(--high-priority);\n}\n\nli.mid-priority {\n    background-color: var(--medium-priority);\n}\n\nli.low-priority {\n    background-color: var(--low-priority);\n}\n\n/* Add todo form */\n\nform#add-todo-form,\nform#edit-todo-form {\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 2vh;\n    min-height: 60%;\n    padding: 5vh 5vw;\n    background-color: var(--green-accent);\n    border-radius: 10px;\n}\n\nform#add-todo-form input,\nform#edit-todo-form input,\nform#add-todo-form textarea,\nform#edit-todo-form textarea {\n    background-color: var(--brown-accent);\n    color: var(--base);\n}\n\nform#add-todo-form>div.form-header,\nform#edit-todo-form>div.form-header {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 40px;\n}\n\nform#add-todo-form h2,\nform#edit-todo-form h2 {\n    text-align: center;\n}\n\ndiv.title-section,\ndiv.description-section,\ndiv.dueDate-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1vh;\n}\n\ndiv.options-container {\n    display: flex;\n    gap: 1vw;\n}\n\n\n/* Modal */\n\ndiv.modal {\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgb(0, 0, 0, 0.5);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n/* all controls section */\ndiv.todo-controls,\ndiv.project-controls-section {\n    display: flex;\n    gap: 12px;\n}\n\ndiv.todo-controls {\n    justify-self: center;\n}\n\nform#add-todo-form>div.controls-section,\nform#edit-todo-form>div.controls-section {\n    text-align: center;\n\n}\n\nform#add-todo-form>div.controls-section button,\nform#edit-todo-form>div.controls-section button {\n    background-color: var(--brown-accent);\n    color: var(--base);\n    font-size: 1.1rem;\n    padding: 5px 3vw;\n}\n\n/* Footer */\n\nfooter {\n    text-align: center;\n    color: var(--base);\n    background-color: var(--brown-accent);\n}\n\nfooter a,\nfooter a:visited {\n    text-decoration: none;\n    color: var(--link-accent);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4RkFBOEYsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxPQUFPLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZ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TTtRQUNILHVEQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0tBQzNDO0FBQ0wsQ0FBQztBQUVELHNFQUFzRTtBQUN0RSx1REFBYyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDdkQsaUVBQWlFO0FBQ2pFLHVEQUFjLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJoRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlDb21wb25lbnRzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlDb250cm9sbGVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9zY3JpcHRzL2RvbVNlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9ldmVudHNPYnNlcnZlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9pbmRleC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9wcm9qZWN0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9zdG9yYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmljL1VuaXZlcnNhbCBzdHVmZiAqL1xuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tYmFzZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICAgIC0tZ3JlZW4tYWNjZW50OiByZ2IoMTM5LCAxNTQsIDcwKTtcbiAgICAtLWJyb3duLWFjY2VudDogcmdiKDg0LCAxOCwgMTgpO1xuICAgIC0tcHJpbWFyeTogcmdiKDE1LCAxNCwgMTQpO1xuICAgIC0tbGluay1hY2NlbnQ6IHJnYigyNTUsIDI1NSwgMTAyKTtcbiAgICAtLWhpZ2gtcHJpb3JpdHk6IHJnYigyNTUsIDAsIDAsIDAuOSk7XG4gICAgLS1tZWRpdW0tcHJpb3JpdHk6IHJnYigyNTUsIDI1NSwgMTAyLCAwLjkpO1xuICAgIC0tbG93LXByaW9yaXR5OiByZ2IoMCwgMjU1LCAwLCAwLjkpXG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uaGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlKTtcbn1cblxuLyogc3ZnIGluc2lkZSBidXR0b24gKi9cblxuYnV0dG9uIHN2ZyxcbmJ1dHRvbiBpbWcge1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZmlsbDogaW5oZXJpdDtcbn1cblxuYnV0dG9uOmhhcyhzdmcpLFxuYnV0dG9uOmhhcyhpbWcpIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4vKiBCb2R5IE91dHNpZGUqL1xuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwZHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi8qIEhlYWRlciAqL1xuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDN2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcbn1cblxuLyogTWFpbiAqL1xubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIFNpZGViYXIgKi9cbmFzaWRlI3NpZGViYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAydm1heDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tYWNjZW50KTtcbiAgICAvKiBjb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTsgKi9cbn1cblxuYnV0dG9uLmFkZC1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bi1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAxdmggMnZ3O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xufVxuXG5kaXYjcHJvamVjdC1mb3JtLXNlY3Rpb24ge1xuICAgIG1pbi1oZWlnaHQ6IDV2aDtcbn1cblxuZGl2I3Byb2plY3RzLXNlY3Rpb24sXG51bC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmRpdiNwcm9qZWN0cy1zZWN0aW9uPmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxpLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcbiAgICBmaWxsOiB2YXIoLS1iYXNlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5saS5wcm9qZWN0IGltZyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbmZvcm0jZWRpdC1wcm9qZWN0LWZvcm0ge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBwYWRkaW5nOiA1dmggMXZ3O1xufVxuXG5mb3JtI2VkaXQtcHJvamVjdC1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDJ2aCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSNhZGQtcHJvamVjdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJ2aDtcbn1cblxuZm9ybSNhZGQtcHJvamVjdC1mb3JtPmRpdi5mb3JtLWhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzdnc7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmZvcm0jYWRkLXByb2plY3QtZm9ybT5kaXYuY29udHJvbHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xufVxuXG4vKiBDb250ZW50cyBzZWN0aW9uICovXG5kaXYjY29udGVudC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDJ2bWF4O1xuICAgIGdhcDogMnZoO1xuICAgIG1heC13aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcbn1cblxuYnV0dG9uLmFkZC10b2RvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogMXZoIDJ2dztcbn1cblxuZGl2I3RvZG8tZm9ybS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG5kaXYjdG9kby1mb3JtLXNlY3Rpb24+YnV0dG9uIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuZGl2I3RvZG9zLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuZGl2I3RvZG9zLXNlY3Rpb24+aDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudWwudG9kby1jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG5saS50b2RvLWl0ZW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmciAxMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5saS5jb21wbGV0ZWQtdG9kbyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmxpLmhpZ2gtcHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xufVxuXG5saS5taWQtcHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eSk7XG59XG5cbmxpLmxvdy1wcmlvcml0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcbn1cblxuLyogQWRkIHRvZG8gZm9ybSAqL1xuXG5mb3JtI2FkZC10b2RvLWZvcm0sXG5mb3JtI2VkaXQtdG9kby1mb3JtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMnZoO1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbiAgICBwYWRkaW5nOiA1dmggNXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZm9ybSNhZGQtdG9kby1mb3JtIGlucHV0LFxuZm9ybSNlZGl0LXRvZG8tZm9ybSBpbnB1dCxcbmZvcm0jYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYSxcbmZvcm0jZWRpdC10b2RvLWZvcm0gdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyb3duLWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLWJhc2UpO1xufVxuXG5mb3JtI2FkZC10b2RvLWZvcm0+ZGl2LmZvcm0taGVhZGVyLFxuZm9ybSNlZGl0LXRvZG8tZm9ybT5kaXYuZm9ybS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDBweDtcbn1cblxuZm9ybSNhZGQtdG9kby1mb3JtIGgyLFxuZm9ybSNlZGl0LXRvZG8tZm9ybSBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYudGl0bGUtc2VjdGlvbixcbmRpdi5kZXNjcmlwdGlvbi1zZWN0aW9uLFxuZGl2LmR1ZURhdGUtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXZoO1xufVxuXG5kaXYub3B0aW9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxdnc7XG59XG5cblxuLyogTW9kYWwgKi9cblxuZGl2Lm1vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLyogYWxsIGNvbnRyb2xzIHNlY3Rpb24gKi9cbmRpdi50b2RvLWNvbnRyb2xzLFxuZGl2LnByb2plY3QtY29udHJvbHMtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG59XG5cbmRpdi50b2RvLWNvbnRyb2xzIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuZm9ybSNhZGQtdG9kby1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uLFxuZm9ybSNlZGl0LXRvZG8tZm9ybT5kaXYuY29udHJvbHMtc2VjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbmZvcm0jYWRkLXRvZG8tZm9ybT5kaXYuY29udHJvbHMtc2VjdGlvbiBidXR0b24sXG5mb3JtI2VkaXQtdG9kby1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0tYmFzZSk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogNXB4IDN2dztcbn1cblxuLyogRm9vdGVyICovXG5cbmZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xufVxuXG5mb290ZXIgYSxcbmZvb3RlciBhOnZpc2l0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbGluay1hY2NlbnQpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEJBQTRCO0FBQzVCO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsMENBQTBDO0lBQzFDO0FBQ0o7O0FBRUE7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QUVBLGtCQUFrQjs7QUFFbEI7O0lBRUksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTs7OztJQUlJLHFDQUFxQztJQUNyQyxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOzs7QUFHQSxVQUFVOztBQUVWO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBLHlCQUF5QjtBQUN6Qjs7SUFFSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGtCQUFrQjs7QUFFdEI7O0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdlbmVyaWMvVW5pdmVyc2FsIHN0dWZmICovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1iYXNlOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxuICAgIC0tZ3JlZW4tYWNjZW50OiByZ2IoMTM5LCAxNTQsIDcwKTtcXG4gICAgLS1icm93bi1hY2NlbnQ6IHJnYig4NCwgMTgsIDE4KTtcXG4gICAgLS1wcmltYXJ5OiByZ2IoMTUsIDE0LCAxNCk7XFxuICAgIC0tbGluay1hY2NlbnQ6IHJnYigyNTUsIDI1NSwgMTAyKTtcXG4gICAgLS1oaWdoLXByaW9yaXR5OiByZ2IoMjU1LCAwLCAwLCAwLjkpO1xcbiAgICAtLW1lZGl1bS1wcmlvcml0eTogcmdiKDI1NSwgMjU1LCAxMDIsIDAuOSk7XFxuICAgIC0tbG93LXByaW9yaXR5OiByZ2IoMCwgMjU1LCAwLCAwLjkpXFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZSk7XFxufVxcblxcbi8qIHN2ZyBpbnNpZGUgYnV0dG9uICovXFxuXFxuYnV0dG9uIHN2ZyxcXG5idXR0b24gaW1nIHtcXG4gICAgbWluLWhlaWdodDogMjVweDtcXG4gICAgbWluLXdpZHRoOiAyNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZmlsbDogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uOmhhcyhzdmcpLFxcbmJ1dHRvbjpoYXMoaW1nKSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogQm9keSBPdXRzaWRlKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDAgM3Z3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tYmFzZSk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG5hc2lkZSNzaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAydm1heDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1hY2NlbnQpO1xcbiAgICAvKiBjb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTsgKi9cXG59XFxuXFxuYnV0dG9uLmFkZC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnJvd24tYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWJhc2UpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogMXZoIDJ2dztcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbmRpdiNwcm9qZWN0LWZvcm0tc2VjdGlvbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDV2aDtcXG59XFxuXFxuZGl2I3Byb2plY3RzLXNlY3Rpb24sXFxudWwucHJvamVjdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmRpdiNwcm9qZWN0cy1zZWN0aW9uPmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5saS5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tYmFzZSk7XFxuICAgIGZpbGw6IHZhcigtLWJhc2UpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5saS5wcm9qZWN0IGltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG5mb3JtI2VkaXQtcHJvamVjdC1mb3JtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBwYWRkaW5nOiA1dmggMXZ3O1xcbn1cXG5cXG5mb3JtI2VkaXQtcHJvamVjdC1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uIHtcXG4gICAgbWFyZ2luOiAydmggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb3JtI2FkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnZoO1xcbn1cXG5cXG5mb3JtI2FkZC1wcm9qZWN0LWZvcm0+ZGl2LmZvcm0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM3Z3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb3JtI2FkZC1wcm9qZWN0LWZvcm0+ZGl2LmNvbnRyb2xzLXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAzdmg7XFxufVxcblxcbi8qIENvbnRlbnRzIHNlY3Rpb24gKi9cXG5kaXYjY29udGVudC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciBhdXRvO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMnZtYXg7XFxuICAgIGdhcDogMnZoO1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlKTtcXG59XFxuXFxuYnV0dG9uLmFkZC10b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDF2aCAydnc7XFxufVxcblxcbmRpdiN0b2RvLWZvcm0tc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbmRpdiN0b2RvLWZvcm0tc2VjdGlvbj5idXR0b24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuZGl2I3RvZG9zLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmRpdiN0b2Rvcy1zZWN0aW9uPmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG51bC50b2RvLWNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5saS50b2RvLWl0ZW0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnIgMTAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5saS5jb21wbGV0ZWQtdG9kbyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5saS5oaWdoLXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XFxufVxcblxcbmxpLm1pZC1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eSk7XFxufVxcblxcbmxpLmxvdy1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eSk7XFxufVxcblxcbi8qIEFkZCB0b2RvIGZvcm0gKi9cXG5cXG5mb3JtI2FkZC10b2RvLWZvcm0sXFxuZm9ybSNlZGl0LXRvZG8tZm9ybSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAydmg7XFxuICAgIG1pbi1oZWlnaHQ6IDYwJTtcXG4gICAgcGFkZGluZzogNXZoIDV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZm9ybSNhZGQtdG9kby1mb3JtIGlucHV0LFxcbmZvcm0jZWRpdC10b2RvLWZvcm0gaW5wdXQsXFxuZm9ybSNhZGQtdG9kby1mb3JtIHRleHRhcmVhLFxcbmZvcm0jZWRpdC10b2RvLWZvcm0gdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tYmFzZSk7XFxufVxcblxcbmZvcm0jYWRkLXRvZG8tZm9ybT5kaXYuZm9ybS1oZWFkZXIsXFxuZm9ybSNlZGl0LXRvZG8tZm9ybT5kaXYuZm9ybS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDBweDtcXG59XFxuXFxuZm9ybSNhZGQtdG9kby1mb3JtIGgyLFxcbmZvcm0jZWRpdC10b2RvLWZvcm0gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi50aXRsZS1zZWN0aW9uLFxcbmRpdi5kZXNjcmlwdGlvbi1zZWN0aW9uLFxcbmRpdi5kdWVEYXRlLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxdmg7XFxufVxcblxcbmRpdi5vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXZ3O1xcbn1cXG5cXG5cXG4vKiBNb2RhbCAqL1xcblxcbmRpdi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBhbGwgY29udHJvbHMgc2VjdGlvbiAqL1xcbmRpdi50b2RvLWNvbnRyb2xzLFxcbmRpdi5wcm9qZWN0LWNvbnRyb2xzLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbmRpdi50b2RvLWNvbnRyb2xzIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmZvcm0jYWRkLXRvZG8tZm9ybT5kaXYuY29udHJvbHMtc2VjdGlvbixcXG5mb3JtI2VkaXQtdG9kby1mb3JtPmRpdi5jb250cm9scy1zZWN0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5mb3JtI2FkZC10b2RvLWZvcm0+ZGl2LmNvbnRyb2xzLXNlY3Rpb24gYnV0dG9uLFxcbmZvcm0jZWRpdC10b2RvLWZvcm0+ZGl2LmNvbnRyb2xzLXNlY3Rpb24gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24tYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWJhc2UpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogNXB4IDN2dztcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tYmFzZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyb3duLWFjY2VudCk7XFxufVxcblxcbmZvb3RlciBhLFxcbmZvb3RlciBhOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rLWFjY2VudCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRXZlbnRzT2JzZXJ2ZXIgZnJvbSBcIi4vZXZlbnRzT2JzZXJ2ZXJcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL25vdGUtZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi9pbWFnZXMvZGVsZXRlLWZvcmV2ZXIuc3ZnXCJcbmltcG9ydCBjYW5jZWxJY29uIGZyb20gXCIuLi9pbWFnZXMvY2xvc2Uuc3ZnXCI7XG5cbi8vIHRoZSBlZGl0IHByb2plY3QgbmFtZSBmb3JtXG5jb25zdCBlZGl0UHJvamVjdE5hbWVGcm1Db21wb25lbnQgPSAoY3VycmVudE5hbWU6IHN0cmluZywgcHJvamVjdElkOiBzdHJpbmcpID0+IHtcbiAgICAvLyBjcmVhdGluZyB0aGUgZm9ybSBpdHNlbGZcbiAgICBjb25zdCBmcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZnJtLmlkID0gXCJlZGl0LXByb2plY3QtZm9ybVwiO1xuXG4gICAgLy8gYSBoaWRkZW4gaW5wdXQgZm9yIHByb3ZpZGluZyBwcm9qZWN0SWRcbiAgICBjb25zdCBwcm9qZWN0SWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdElkSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHByb2plY3RJZElucHV0Lm5hbWUgPSBcInByb2plY3QtaWRcIlxuICAgIHByb2plY3RJZElucHV0LnZhbHVlID0gcHJvamVjdElkO1xuICAgIHByb2plY3RJZElucHV0LmhpZGRlbiA9IHRydWU7XG4gICAgcHJvamVjdElkSW5wdXQucmVhZE9ubHkgPSB0cnVlO1xuICAgIGZybS5hcHBlbmRDaGlsZChwcm9qZWN0SWRJbnB1dCk7XG5cbiAgICAvLyB0aGUgbmFtZSBzZWN0aW9uXG4gICAgY29uc3QgbmFtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCduYW1lLXNlY3Rpb24nKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3ROYW1lTGFiZWwuaHRtbEZvciA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgcHJvamVjdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lXCI7XG4gICAgcHJvamVjdE5hbWVMYWJlbC5oaWRkZW4gPSB0cnVlO1xuICAgIG5hbWVTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5uYW1lID0gXCJwcm9qZWN0LW5hbWVcIjtcbiAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gXCJlZGl0LXByb2plY3QtbmFtZVwiXG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IGN1cnJlbnROYW1lO1xuICAgIG5hbWVTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuXG4gICAgLy8gY2FuY2VsIGJ1dHRvblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtZWRpdC1wcm9qZWN0Jyk7XG4gICAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ0bi5hcHBlbmRDaGlsZChjYW5jZWxJY29uQ29tcG9uZW50KCkpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxCdXR0b25FbGVtZW50KSB7XG4gICAgICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJjYW5jZWxFZGl0UHJvamVjdE5hbWVCdG5DbGlja2VkXCIsIHRoaXMpO1xuICAgIH0pXG4gICAgbmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIGZybS5hcHBlbmRDaGlsZChuYW1lU2VjdGlvbik7XG5cbiAgICAvLyBhIGNvbnRyb2xzIHNlY3Rpb25cbiAgICBjb25zdCBjb250cm9sc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250cm9sc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udHJvbHMtc2VjdGlvbicpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWVkaXQtcHJvamVjdC1idG5cIik7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCJcbiAgICBjb250cm9sc1NlY3Rpb24uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGZybS5hcHBlbmRDaGlsZChjb250cm9sc1NlY3Rpb24pO1xuXG4gICAgcmV0dXJuIGZybTtcbn1cblxuLy8gdGhlIHNpZGViYXIgY29tcG9uZW50XG5jb25zdCBzaWRlYmFyQ29tcG9uZW50ID0gKHByb2plY3Q6IFByb2plY3RUeXBlKSA9PiB7XG4gICAgLy8gdGhlIGxpIGVsZW1lbnQgaG9sZGluZyBhbGwgdGhlIGVsZW1lbnRzXG4gICAgY29uc3QgcHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwcm9qZWN0TGkuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LnByb2plY3RJZDtcblxuICAgIC8vIHRoZSBwcm9qZWN0IG5hbWVcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIHByb2plY3ROYW1lLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5wcm9qZWN0SWQ7XG4gICAgLy8gY2xpY2tpbmcgb24gdGhlIHByb2plY3QgbmFtZSBcInNlbGVjdHNcIiB0aGUgcHJvamVjdCB0byBiZSBkaXNwbGF5ZWRcbiAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxMSUVsZW1lbnQpIHtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInByb2plY3RDaGFuZ2VkXCIsIHsgcHJvamVjdCB9KTtcbiAgICB9KVxuICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAvLyBhIGNvbnRyb2xzIHNlY3Rpb25cbiAgICBjb25zdCBwcm9qZWN0Q29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udHJvbHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250cm9scy1zZWN0aW9uJyk7XG5cbiAgICAvLyB0aGUgZWRpdCBidXR0b25cbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LW5hbWUnKTtcbiAgICBlZGl0UHJvamVjdE5hbWUudmFsdWUgPSBwcm9qZWN0LnByb2plY3RJZDtcbiAgICBlZGl0UHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoZWRpdEljb25Db21wb25lbnQoKSk7XG4gICAgZWRpdFByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAodGhpczogSFRNTEJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcImVkaXRQcm9qZWN0TmFtZUJ0bkNsaWNrZWRcIiwgdGhpcyk7XG4gICAgfSlcbiAgICBwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3ROYW1lKTtcblxuICAgIC8vIHRoZSBkZWxldGUgYnV0dG9uXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QnKTtcbiAgICBkZWxldGVQcm9qZWN0LnZhbHVlID0gcHJvamVjdC5wcm9qZWN0SWQ7XG4gICAgZGVsZXRlUHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVJY29uQ29tcG9uZW50KCkpO1xuICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICh0aGlzOiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwiZGVsZXRlUHJvamVjdENsaWNrZWRcIiwgeyBwcm9qZWN0SWQ6IHByb2plY3QucHJvamVjdElkIH0pO1xuICAgIH0pXG4gICAgcHJvamVjdENvbnRyb2xzLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHByb2plY3RDb250cm9scylcblxuICAgIC8vIHRoZSBlZGl0IHByb2plY3QgbmFtZSBjb21wb25lbnQsIGluaXRpYWxseSBoaWRkZW5cbiAgICBjb25zdCBlZGl0TmFtZUZybSA9IGVkaXRQcm9qZWN0TmFtZUZybUNvbXBvbmVudChwcm9qZWN0LnByb2plY3ROYW1lLCBwcm9qZWN0LnByb2plY3RJZCk7XG4gICAgZWRpdE5hbWVGcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcHJvamVjdExpLmFwcGVuZENoaWxkKGVkaXROYW1lRnJtKTtcblxuICAgIHByb2plY3RMaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICByZXR1cm4gcHJvamVjdExpO1xufTtcblxuLy8gdGhlIHRvZG8gY29tcG9uZW50XG5jb25zdCB0b2RvQ29tcG9uZW50ID0gKHRvZG86IFRvZG9JdGVtVHlwZSkgPT4ge1xuICAgIC8vIGNyZWF0aW5nIGFuIGlkZW50aWZpZXIgb2JqZWN0IHdoaWNoIGNhbiBiZSBwYXNzZWQgdG8gYW55IGFwcHJvcHJpYXRlIFxuICAgIC8vIGZ1bmN0aW9uXG4gICAgY29uc3QgdG9kb0lkZW50aWZpZXIgPSB7XG4gICAgICAgIHBhcmVudDogdG9kby5wYXJlbnRQcm9qZWN0LFxuICAgICAgICB0b2RvaWQ6IHRvZG8udWlkXG4gICAgfTtcbiAgICAvLyBjcmVhdGluZyB0aGUgbGkgZWxlbWVudCBjb250YWluZXIgaG9sZGluZyB0aGUgZW50aXJlIHRvZG8gaXRlbVxuICAgIGNvbnN0IHRvZG9MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdG9kb0xpLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuXG4gICAgLy8gdGhlIGNoZWNrYm94IGZvciBtYXJraW5nIHRoZSB0b2RvIGFzIGRvbmVcbiAgICBjb25zdCBkb25lU3RhdHVzRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZG9uZVN0YXR1c0Rpc3BsYXkudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBkb25lU3RhdHVzRGlzcGxheS5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG4gICAgZG9uZVN0YXR1c0Rpc3BsYXkudmFsdWUgPSB0b2RvLnVpZDtcbiAgICBkb25lU3RhdHVzRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwidG9nZ2xlVG9kb1N0YXR1c1JlcXVlc3RcIiwgdG9kb0lkZW50aWZpZXIpO1xuICAgIH0pXG4gICAgdG9kb0xpLmFwcGVuZENoaWxkKGRvbmVTdGF0dXNEaXNwbGF5KTtcblxuICAgIC8vIGNvbnRhaW5lciBmb3IgdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgdG9kb01haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb01haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbWFpbi1jb250ZW50Jyk7XG5cbiAgICAvLyB0aGUgdG9kbyB0aXRsZSBcbiAgICBjb25zdCB0aXRsZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID1cbiAgICAgICAgYFRhc2sgJHt0b2RvLnRpdGxlfSBpcyBkdWUgYnkgXG4gICAgICAgICR7bmV3IERhdGUodG9kby5kdWVEYXRlKS50b0RhdGVTdHJpbmcoKX0gXG4gICAgICAgIHdpdGggYSBwcmlvcml0eSBvZiAke3RvZG8ucHJpb3JpdHl9YDtcbiAgICB0b2RvTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVEaXNwbGF5KTtcblxuICAgIC8vIHRoZSB0b2RvIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uRGlzcGxheS50ZXh0Q29udGVudCA9IGBUYXNrIERlc2NyaXB0aW9uOiAke3RvZG8uZGVzY3JpcHRpb259YDtcbiAgICBkZXNjcmlwdGlvbkRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdG9kb01haW5Db250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGlzcGxheSk7XG5cbiAgICB0b2RvTGkuYXBwZW5kQ2hpbGQodG9kb01haW5Db250ZW50KTtcblxuICAgIC8vIHRoZSBjb250cm9scyBzZWN0aW9uIGhvdXNpbmcgdGhlIGVkaXQgYW5kIGRlbGV0ZSBidXR0b25zXG4gICAgY29uc3QgY29udHJvbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250cm9sU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRyb2xzJyk7XG5cbiAgICAvLyB0aGUgZWRpdCBidXR0b25cbiAgICBjb25zdCBlZGl0VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdG9kby1idG4nKTtcbiAgICBlZGl0VG9kb0J0bi52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRvZG9JZGVudGlmaWVyKTtcbiAgICBlZGl0VG9kb0J0bi5hcHBlbmRDaGlsZChlZGl0SWNvbkNvbXBvbmVudCgpKTtcbiAgICBlZGl0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyB3aGVuIHRoZSBlZGl0IHRvZG8gYnV0dG9uIGlzIGNsaWNrZWQgcmVuZGVyIHRoZSBlZGl0IHRvZG8gZm9ybVxuICAgICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwiZWRpdFRvZG9CdG5DbGlja2VkXCIsIHRvZG8pO1xuICAgIH0pXG4gICAgY29udHJvbFNlY3Rpb24uYXBwZW5kQ2hpbGQoZWRpdFRvZG9CdG4pO1xuXG4gICAgLy8gdGhlIGRlbGV0ZSBidXR0b25cbiAgICBjb25zdCBkZWxldGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdG9kby1idG4nKTtcbiAgICBkZWxldGVUb2RvQnRuLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodG9kb0lkZW50aWZpZXIpO1xuICAgIGRlbGV0ZVRvZG9CdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkNvbXBvbmVudCgpKTtcbiAgICAvLyBldmVudCBoYW5kbGVyIGZvciBkZWxldGluZyB0aGUgdG9kb1xuICAgIGRlbGV0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcImRlbGV0ZVRvZG9CdG5DbGlja2VkXCIsIHRvZG9JZGVudGlmaWVyKTtcbiAgICB9KVxuICAgIGNvbnRyb2xTZWN0aW9uLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9CdG4pO1xuXG4gICAgdG9kb0xpLmFwcGVuZENoaWxkKGNvbnRyb2xTZWN0aW9uKTtcblxuICAgIC8vICB3aGVuIHRoZSB0b2RvIHRpdGxlIGlzIGNsaWNrZWQgc2hvdyB0aGUgdG9kbyBkZXNjcmlwdGlvblxuICAgIHRpdGxlRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KVxuXG4gICAgLy8gYmFzZWQgb24gdGhlIHRvZG8gcHJpb3JpdHkgaXQgd2lsbCBiZSBjb2xvciBjb2RlZFxuICAgIHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xuICAgICAgICBjYXNlIChcIkhJR0hcIik6XG4gICAgICAgICAgICB0b2RvTGkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFwiTUVESVVNXCIpOlxuICAgICAgICAgICAgdG9kb0xpLmNsYXNzTGlzdC5hZGQoJ21pZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFwiTE9XXCIpOlxuICAgICAgICAgICAgdG9kb0xpLmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBwdXQgYSBzdHJpa2V0aHJvdWdoIG9uIHRoZSBlbnRpcmUgdG9kbyBpZiBpdCdzIGNvbXBsZXRlZFxuICAgIHRvZG8uY29tcGxldGVkID8gdG9kb0xpLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10b2RvJykgOiB0b2RvTGkuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLXRvZG8nKTtcblxuICAgIHJldHVybiB0b2RvTGk7XG59XG5cbi8vIHRoZSBlZGl0IHRvZG8gZm9ybVxuY29uc3QgZWRpdFRvZG9Db21wb25lbnQgPSAodG9kbzogVG9kb0l0ZW1UeXBlKSA9PiB7XG4gICAgLy8gdGhlIGZvcm0gaXRzZWxmXG4gICAgY29uc3QgZWRpdFRvZG9Gcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZWRpdFRvZG9Gcm0uaWQgPSBcImVkaXQtdG9kby1mb3JtXCI7XG5cbiAgICAvLyB0aGUgZm9ybSBoZWFkZXJcbiAgICBjb25zdCBmcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmcm1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1oZWFkZXInKTtcblxuICAgIC8vIHRoZSBoZWFkaW5nXG4gICAgY29uc3QgZnJtSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZnJtSGVhZGluZy50ZXh0Q29udGVudCA9IFwiRWRpdCBUb2RvXCJcbiAgICBmcm1IZWFkZXIuYXBwZW5kQ2hpbGQoZnJtSGVhZGluZyk7XG5cbiAgICAvLyB0aGUgY2FuY2VsIGJ1dHRvblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWVkaXQtdG9kbycpO1xuICAgIGNhbmNlbEJ0bi5hcHBlbmRDaGlsZChjYW5jZWxJY29uQ29tcG9uZW50KCkpO1xuICAgIGZybUhlYWRlci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgLy8gYSBoaWRkZW4gaW5wdXQgaG9sZGluZyB0aGUgdG9kb0lkXG4gICAgY29uc3QgdG9kb0lkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvSWQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRvZG9JZC5uYW1lID0gXCJ0b2RvSWRcIjtcbiAgICB0b2RvSWQudmFsdWUgPSB0b2RvLnVpZDtcbiAgICB0b2RvSWQuaGlkZGVuID0gdHJ1ZTtcbiAgICB0b2RvSWQucmVhZE9ubHkgPSB0cnVlO1xuICAgIGZybUhlYWRlci5hcHBlbmRDaGlsZCh0b2RvSWQpO1xuXG4gICAgZWRpdFRvZG9Gcm0uYXBwZW5kQ2hpbGQoZnJtSGVhZGVyKTtcblxuICAgIC8vIHRoZSB0aXRsZSBzZWN0aW9uXG4gICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXNlY3Rpb24nKTtcblxuICAgIC8vIHRoZSBsYWJlbFxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuaHRtbEZvciA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiXG4gICAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG4gICAgLy8gdGhlIGlucHV0IGZvciB0aGUgdGl0bGVcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcbiAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBlZGl0VG9kb0ZybS5hcHBlbmRDaGlsZCh0aXRsZVNlY3Rpb24pO1xuXG4gICAgLy8gZGVzY3JpcHRpb24gc2VjdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1zZWN0aW9uJyk7XG5cbiAgICAvLyBsYWJlbCBmb3IgZHNlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgIC8vIGRlc2NycHJpdGlvbiBpbnB1dFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuY29scyA9IDMwO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9IDEwO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIGVkaXRUb2RvRnJtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU2VjdGlvbik7XG5cbiAgICAvLyBkdWVEYXRlIHNlY3Rpb25cbiAgICBjb25zdCBkdWVEYXRlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUtc2VjdGlvbicpO1xuXG4gICAgLy8gbGFiZWwgZm9yIGR1ZURhdGVcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJkdWVEYXRlXCI7XG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgYnlcIjtcbiAgICBkdWVEYXRlU2VjdGlvbi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuXG4gICAgLy8gZHVlRGF0ZSBpbnB1dFxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9IFwiZHVlRGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xuICAgIGR1ZURhdGVTZWN0aW9uLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICBlZGl0VG9kb0ZybS5hcHBlbmRDaGlsZChkdWVEYXRlU2VjdGlvbik7XG5cbiAgICAvLyB0aGUgcHJpb3JpdHkgc2VjdGlvblxuICAgIGNvbnN0IHByaW9yaXR5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zZWN0aW9uJyk7XG5cbiAgICAvLyBhIGhlYWRpbmcgaW5kaWNhdGluZyB0aGUgcHJpb3JpdHkgc2VjdGlvblxuICAgIGNvbnN0IHByaW9yaXR5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJpb3JpdHlIZWFkaW5nLnRleHRDb250ZW50ID0gXCJTZXQgUHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eVNlY3Rpb24uYXBwZW5kQ2hpbGQocHJpb3JpdHlIZWFkaW5nKTtcblxuXG4gICAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy1jb250YWluZXInKTtcblxuICAgIC8vIEEgc2VjdGlvbiBmb3IgaGlnaCBvcHRpb25cbiAgICBjb25zdCBoaWdoT3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGlnaE9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nKTtcblxuICAgIC8vIGhpZ2ggb3B0aW9uIHJhZGlvIGJ1dHRvblxuICAgIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhpZ2hPcHRpb24udHlwZSA9IFwicmFkaW9cIjtcbiAgICBoaWdoT3B0aW9uLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgaGlnaE9wdGlvbi5pZCA9IFwiaGlnaFwiO1xuICAgIGhpZ2hPcHRpb24udmFsdWUgPSBcIkhJR0hcIjtcbiAgICBoaWdoT3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pO1xuXG4gICAgLy8gaGlnaCBvcHRpb24gbGFiZWxcbiAgICBjb25zdCBoaWdoT3B0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGhpZ2hPcHRpb25MYWJlbC5odG1sRm9yID0gXCJoaWdoXCI7XG4gICAgaGlnaE9wdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgaGlnaE9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoT3B0aW9uTGFiZWwpO1xuXG4gICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoT3B0aW9uQ29udGFpbmVyKTtcblxuICAgIC8vIEEgc2VjdGlvbiBmb3IgbWVkaXVtIGJ1dHRvblxuICAgIGNvbnN0IG1pZE9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZE9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nKTtcblxuICAgIC8vICBtZWRpdW0gb3B0aW9uIHJhZGlvIGJ1dHRvblxuICAgIGNvbnN0IG1pZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbWlkT3B0aW9uLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgbWlkT3B0aW9uLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgbWlkT3B0aW9uLmlkID0gXCJtZWRpdW1cIjtcbiAgICBtaWRPcHRpb24udmFsdWUgPSBcIk1FRElVTVwiO1xuICAgIG1pZE9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtaWRPcHRpb24pO1xuXG4gICAgLy8gbWVkaXVtIG9wdGlvbiBsYWJlbFxuICAgIGNvbnN0IG1pZE9wdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBtaWRPcHRpb25MYWJlbC5odG1sRm9yID0gXCJtZWRpdW1cIjtcbiAgICBtaWRPcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgbWlkT3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pZE9wdGlvbkxhYmVsKTtcblxuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobWlkT3B0aW9uQ29udGFpbmVyKTtcblxuICAgIC8vIEEgc2VjdGlvbiBmb3IgbG93IG9wdGlvblxuICAgIGNvbnN0IGxvd09wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvd09wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nKTtcblxuICAgIC8vIGxvdyBvcHRpb24gcmFkaW8gYnV0dG9uXG4gICAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsb3dPcHRpb24udHlwZSA9IFwicmFkaW9cIjtcbiAgICBsb3dPcHRpb24ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBsb3dPcHRpb24uaWQgPSBcImxvd1wiO1xuICAgIGxvd09wdGlvbi52YWx1ZSA9IFwiTE9XXCI7XG4gICAgbG93T3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG5cbiAgICAvLyBhIGxhYmVsIGZvciBsb3cgb3B0aW9uXG4gICAgY29uc3QgbG93T3B0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxvd09wdGlvbkxhYmVsLmh0bWxGb3IgPSBcImxvd1wiO1xuICAgIGxvd09wdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICBsb3dPcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG93T3B0aW9uTGFiZWwpO1xuXG4gICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dPcHRpb25Db250YWluZXIpO1xuXG4gICAgcHJpb3JpdHlTZWN0aW9uLmFwcGVuZENoaWxkKG9wdGlvbnNDb250YWluZXIpO1xuXG4gICAgLy8gYmFzZWQgb24gdGhlIGN1cnJlbnQgdG9kbydzIGRhdGEgc2VsZWN0IGFwcHJvcHJpYXRlIG9wdGlvblxuICAgIHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xuICAgICAgICBjYXNlIChcIkhJR0hcIik6XG4gICAgICAgICAgICBoaWdoT3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFwiTUVESVVNXCIpOlxuICAgICAgICAgICAgbWlkT3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKFwiTE9XXCIpOlxuICAgICAgICAgICAgbG93T3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZWRpdFRvZG9Gcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWN0aW9uKTtcblxuICAgIC8vIGEgY29udHJvbHMgc2VjdGlvblxuICAgIGNvbnN0IGNvbnRyb2xzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRyb2xzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250cm9scy1zZWN0aW9uJyk7XG5cbiAgICAvLyB0aGUgc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtZWRpdC10b2RvLWJ0bicpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICAgIGNvbnRyb2xzU2VjdGlvbi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZWRpdFRvZG9Gcm0uYXBwZW5kQ2hpbGQoY29udHJvbHNTZWN0aW9uKTtcblxuICAgIHJldHVybiBlZGl0VG9kb0ZybTtcbn1cblxuY29uc3QgZWRpdEljb25Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGljb24uc3JjID0gZWRpdEljb247XG4gICAgcmV0dXJuIGljb25cbn1cbmNvbnN0IGRlbGV0ZUljb25Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICByZXR1cm4gaWNvblxufVxuY29uc3QgY2FuY2VsSWNvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbi5zcmMgPSBjYW5jZWxJY29uO1xuICAgIHJldHVybiBpY29uXG59XG5cbmV4cG9ydCB7XG4gICAgc2lkZWJhckNvbXBvbmVudCxcbiAgICB0b2RvQ29tcG9uZW50LFxuICAgIGVkaXRUb2RvQ29tcG9uZW50XG59IiwiaW1wb3J0IEV2ZW50c09ic2VydmVyIGZyb20gXCIuL2V2ZW50c09ic2VydmVyXCI7XG5pbXBvcnQge1xuICAgIGdldEFkZFByb2plY3RCdG4sXG4gICAgZ2V0QWRkVG9kb0J0bixcbiAgICBnZXRDYW5jZWxBZGRQcm9qZWN0QnRuLFxuICAgIGdldENhbmNlbEFkZFRvZG9CdG4sXG4gICAgZ2V0Q2FuY2VsRWRpdFRvZG9CdG4sXG4gICAgZ2V0RGlzbWlzc0Vycm9yQnRuLFxuICAgIGdldEVkaXRUb2RvRnJtLFxuICAgIGdldEVkaXRUb2RvU2VjdGlvbixcbiAgICBnZXRFcnJvck1zZ0Rpc3BsYXksXG4gICAgZ2V0RXJyb3JTZWN0aW9uLFxuICAgIGdldFByb2plY3RGcm0sXG4gICAgZ2V0UHJvamVjdHNTZWN0aW9uLFxuICAgIGdldFRvZG9Db250YWluZXIsXG4gICAgZ2V0VG9kb0ZybSxcbiAgICBnZXRUb2Rvc1NlY3Rpb24sXG4gICAgZ2V0QWRkVG9kb01vZGFsLFxuICAgIGdldFByb2plY3RDb250cm9sc1xufSBmcm9tIFwiLi9kb21TZWxlY3RvcnNcIjtcbmltcG9ydCB7XG4gICAgZWRpdFRvZG9Db21wb25lbnQsXG4gICAgc2lkZWJhckNvbXBvbmVudCxcbiAgICB0b2RvQ29tcG9uZW50XG59IGZyb20gXCIuL2Rpc3BsYXlDb21wb25lbnRzXCJcblxuLy8gcmVuZGVyIHRoZSBzaWRlYmFyXG5jb25zdCByZW5kZXJTaWRlYmFyID0gKGRhdGE6IExpc3RQYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkYXRhLmxpc3Q7XG4gICAgY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZ2V0UHJvamVjdHNTZWN0aW9uKCk7XG4gICAgLy8gcmVtb3ZlIGFsbCBjdXJyZW50IGNvbnRlbnRzIG9mIHRoZSBzaWRlYmFyXG4gICAgcHJvamVjdHNTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgLy8gY3JlYXRlIGEgbGkgaXRlbSBieSBjYWxsaW5nIHRoZSBzaWRlYmFyQ29tcG9uZW50IGZvciBlYWNoIHByb2plY3RcbiAgICB0b2RvTGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJDb21wb25lbnQocHJvamVjdCkpXG4gICAgfSk7XG5cbiAgICBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRhaW5lcik7XG4gICAgLy8gcHVibGlzaCB0aGUgXCJzaWRlYmFyUmVuZGVyZWRcIiBldmVudFxuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJzaWRlYmFyUmVuZGVyZWRcIik7XG59O1xuXG4vLyByZW5kZXIgdGhlIHByb2plY3RcbmNvbnN0IHJlbmRlclByb2plY3QgPSAoZGF0YTogUHJvamVjdFBheWxvYWQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBkYXRhLnByb2plY3RcbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGdldFRvZG9zU2VjdGlvbigpO1xuICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBjb250ZW50cyBvZiB0aGUgcHJvamVjdCBzZWN0aW9uXG4gICAgdG9kb1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIHRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuICAgIHRvZG9Db250YWluZXIuZGF0YXNldC5wcm9qZWN0SWQgPSBzZWxlY3RlZFByb2plY3QucHJvamVjdElkO1xuICAgIC8vIGZvciBlYWNoIHRvZG8gaXRlbSBpbiB0aGUgcHJvamVjdCByZW5kZXIgdGhlIHRvZG9Db21wb25lbnQgYXMgbGkgZWxlbWVudFxuICAgIGlmIChzZWxlY3RlZFByb2plY3QudG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSBcIllvdSBkb24ndCBoYXZlIGFueSB0b2RvcyBpbiB0aGlzIHByb2plY3QsIGFkZCBhIG5ldyB0b2RvLlwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9zPy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29tcG9uZW50KHRvZG8pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInByb2plY3RSZW5kZXJlZFwiKTtcbn07XG5cbi8vIHNob3cvaGlkZSB0aGUgYWRkIHByb2plY3QgZm9ybVxuY29uc3QgdG9nZ2xlQWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgZ2V0UHJvamVjdEZybSgpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufTtcblxuLy8gc2hvdy9oaWRlIHRoZSBhZGQgdG9kbyBmb3JtXG5jb25zdCB0b2dnbGVBZGRUb2RvRm9ybSA9ICgpID0+IHtcbiAgICBnZXRUb2RvRnJtKCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgZ2V0QWRkVG9kb01vZGFsKCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgLy8gaGlkZSB0aGUgdG9kb3Mgc2VjdGlvbiB3aGVuIGFkZCB0b2RvIGZvcm0gaXMgc2hvd25cbiAgICBnZXRUb2Rvc1NlY3Rpb24oKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn07XG5cbi8vIGV2ZW50IGhhbmRsZXIgd2hlbiBlZGl0IHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCB0aGlzIGlzIGdldHRpbmcgdGhlIGRhdGEgZnJvbSB0aGUgZXZlbnQgcHVibGlzaGVyXG5jb25zdCBoYW5kbGVFZGl0UHJvamVjdE5hbWVCdG5DbGljayA9IChidG46IEhUTUxCdXR0b25FbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRyb2xzID0gZ2V0UHJvamVjdENvbnRyb2xzKGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIGNvbnN0IGVkaXRGcm0gPSBwcm9qZWN0Q29udHJvbHMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IHByb2plY3ROYW1lRGlzcGxheSA9IHByb2plY3RDb250cm9scy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGVkaXRGcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcHJvamVjdENvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3ROYW1lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAvLyBhdHRhY2ggdGhlIHN1Ym1pdCBldmVudCBsaXN0ZW5lciB0byB0aGUgZm9ybVxuICAgIGVkaXRGcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAodGhpczogSFRNTEZvcm1FbGVtZW50LCBldjogU3VibWl0RXZlbnQpIHtcbiAgICAgICAgLy8gcHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gb2YgdGhlIHN1Ym1pdCBldmVudFxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICAgICAgY29uc3QgcGF5TG9hZCA9IHtcbiAgICAgICAgICAgIHByb2plY3RJZDogZm9ybURhdGEuZ2V0KFwicHJvamVjdC1pZFwiKS50b1N0cmluZygpLFxuICAgICAgICAgICAgbmV3TmFtZTogZm9ybURhdGEuZ2V0KFwicHJvamVjdC1uYW1lXCIpLnRvU3RyaW5nKClcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcHVibGlzaCB0aGUgXCJwcm9qZWN0TmFtZUNoYW5nZVJlcXVlc3RcIiBldmVudCB3aXRoIHRoZSBmb3JtRGF0YSBhcyB0aGUgRXZlbnREYXRhXG4gICAgICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJwcm9qZWN0TmFtZUNoYW5nZVJlcXVlc3RcIiwgcGF5TG9hZClcbiAgICB9KVxufVxuXG4vLyBldmVudCBoYW5kbGVyIHdoZW4gdGhlIGNhbmNlbCBlZGl0IHByb2plY3QgbmFtZSBpcyBjbGlja2VkXG5jb25zdCBoYW5kbGVDYW5jZWxFZGl0UHJvamVjdE5hbWVCdG5DbGljayA9IChidG46IEhUTUxCdXR0b25FbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRyb2xzID0gZ2V0UHJvamVjdENvbnRyb2xzKGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgcHJvamVjdENvbnRyb2xzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBwcm9qZWN0Q29udHJvbHMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBwcm9qZWN0Q29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbi8vIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBlZGl0IHRvZG8gaXRlbSBidXR0b24gaXMgY2xpY2tlZCwgaXQgZ2V0J3MgdGhlIGRhdGEgZnJvbSB0aGUgZXZlbnRcbi8vIHB1Ymxpc2hlclxuY29uc3QgaGFuZGxlRWRpdFRvZG9CdG5DbGljayA9ICh0b2RvOiBUb2RvSXRlbVR5cGUpID0+IHtcbiAgICBjb25zdCBlZGl0VG9kb1NlY3Rpb24gPSBnZXRFZGl0VG9kb1NlY3Rpb24oKTtcbiAgICBnZXRUb2Rvc1NlY3Rpb24oKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBlZGl0VG9kb1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGNvbnRlbnRzIG9mIHRoZSBlZGl0VG9kb1NlY3Rpb25cbiAgICBlZGl0VG9kb1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gY3JlYXRlIGEgbW9kYWxcbiAgICBjb25zdCBtb2RhbERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAvLyByZW5kZXIgYSBuZXcgZWRpdFRvZG9Gb3JtIHdpdGggdGhlIHByb3ZpZGVkIHRvZG8gZGF0YVxuICAgIG1vZGFsRGlzcGxheS5hcHBlbmRDaGlsZChlZGl0VG9kb0NvbXBvbmVudCh0b2RvKSk7XG4gICAgZWRpdFRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKG1vZGFsRGlzcGxheSk7XG4gICAgLy8gd2Ugd2lsbCBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVycyBoZXJlIGJlY2F1c2UgdGhlIGVkaXQgZm9ybSBpcyByZW5kZXJlZCBvbmx5IGFmdGVyIHRoZSBcbiAgICAvLyBlZGl0IGJ1dHRvbiBpcyBjbGlja2VkXG5cbiAgICAvLyBhdHRhY2ggdGhlIHN1Ym1pdCBldmVudCBsaXN0ZW5lclxuICAgIGdldEVkaXRUb2RvRnJtKCkuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAodGhpczogSFRNTEZvcm1FbGVtZW50LCBldjogU3VibWl0RXZlbnQpIHtcbiAgICAgICAgLy8gcHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gb2YgdGhlIHN1Ym1pdCBldmVudFxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICAgICAgY29uc3QgZGF0YTogR2VuZXJpY09iaiA9IHt9XG4gICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtcInBhcmVudFByb2plY3RcIl0gPSB0b2RvLnBhcmVudFByb2plY3Q7XG4gICAgICAgIC8vIHB1Ymxpc2ggdGhlIFwiZWRpdFRvZG9SZXF1ZXN0XCIgZXZlbnQgd2l0aCB0aGUgZm9ybURhdGEgYXMgRXZlbnREYXRhXG4gICAgICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJlZGl0VG9kb1JlcXVlc3RcIiwgZGF0YSk7XG4gICAgICAgIC8vIHJlc2V0IHRoZSB0b2RvIGZvcm1cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICBlZGl0VG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGdldFRvZG9zU2VjdGlvbigpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICAgIC8vIGF0dGFjaCB0aGUgY2FuY2VsIGV2ZW50IGxpc3RlbmVyXG4gICAgZ2V0Q2FuY2VsRWRpdFRvZG9CdG4oKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxCdXR0b25FbGVtZW50LCBldjogTW91c2VFdmVudCkge1xuICAgICAgICBlZGl0VG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGdldFRvZG9zU2VjdGlvbigpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pXG59XG5cbi8vIHNob3cgZXJyb3IgbWVzc2FnZVxuY29uc3QgaGFuZGxlU2hvd0Vycm9yID0gKGRhdGE6IEdlbmVyaWNPYmopID0+IHtcbiAgICBjb25zdCBlcnJvclNlY3Rpb24gPSBnZXRFcnJvclNlY3Rpb24oKVxuICAgIGdldEVycm9yTXNnRGlzcGxheSgpLnRleHRDb250ZW50ID0gZGF0YS5lcnJvck1zZztcbiAgICBlcnJvclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgZXJyb3JTZWN0aW9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIC8vIGF0dGFjaCBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uIHRvIGRpc21pc3MgZXJyb3JcbiAgICBnZXREaXNtaXNzRXJyb3JCdG4oKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxCdXR0b25FbGVtZW50LCBldjogTW91c2VFdmVudCkge1xuICAgICAgICBlcnJvclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGVycm9yU2VjdGlvbi5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KVxufVxuXG4vLyBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGFkZCBuZXcgcHJvamVjdCBidXR0b25cbmdldEFkZFByb2plY3RCdG4oKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxCdXR0b25FbGVtZW50LCBldjogTW91c2VFdmVudCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdG9nZ2xlQWRkUHJvamVjdEZvcm0oKTtcbn0pO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gY2FuY2VsIHRoZSBhZGQgbmV3IHByb2plY3RcbmdldENhbmNlbEFkZFByb2plY3RCdG4oKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdldEFkZFByb2plY3RCdG4oKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB0b2dnbGVBZGRQcm9qZWN0Rm9ybSgpO1xufSk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgYWRkIG5ldyB0b2RvIGZvcm1cbmdldEFkZFRvZG9CdG4oKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKHRoaXM6IEhUTUxCdXR0b25FbGVtZW50LCBldjogTW91c2VFdmVudCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdG9nZ2xlQWRkVG9kb0Zvcm0oKVxufSk7XG4vLyBldmVudCBsaXN0ZW5lciB0byBjYW5jZWwgdGhlIGFkZCBuZXcgdG9kb1xuZ2V0Q2FuY2VsQWRkVG9kb0J0bigpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2V0QWRkVG9kb0J0bigpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHRvZ2dsZUFkZFRvZG9Gb3JtKCk7XG59KTtcblxuLy8gYXR0YWNoaW5nIHRoZSBzdWJtaXQgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGFkZCBuZXcgcHJvamVjdCBmb3JtXG5nZXRQcm9qZWN0RnJtKCkuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAodGhpczogSFRNTEZvcm1FbGVtZW50LCBldjogU3VibWl0RXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiBvZiB0aGUgc3VibWl0IGV2ZW50XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICAvLyBwdWJsaXNoIHRoZSBcIm5ld1Byb2plY3RDcmVhdGlvblJlcXVlc3RcIiBldmVudCB3aXRoIHRoZSBuYW1lIGFzIHRoZSBFdmVudERhdGFcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwibmV3UHJvamVjdENyZWF0aW9uUmVxdWVzdFwiLCB7IHByb2plY3ROYW1lOiBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0LW5hbWVcIikudG9TdHJpbmcoKSB9KTtcbiAgICAvLyByZXNldCB0aGUgZm9ybVxuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0b2dnbGVBZGRQcm9qZWN0Rm9ybSgpO1xuICAgIGdldEFkZFByb2plY3RCdG4oKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn0pO1xuXG4vLyBhdHRhY2hpbmcgdGhlIHN1Ym1pdCBldmVudCBoYW5kbGVyIGZvciB0aGUgYWRkIG5ldyB0b2RvIGZvcm1cbmdldFRvZG9Gcm0oKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uICh0aGlzOiBIVE1MRm9ybUVsZW1lbnQsIGV2OiBTdWJtaXRFdmVudCkge1xuICAgIC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSBzdWJtaXQgZXZlbnRcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgIGNvbnN0IGRhdGE6IEdlbmVyaWNPYmogPSB7fVxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgICAgZGF0YVtrZXldID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZGF0YVtcInBhcmVudFByb2plY3RcIl0gPSAoZ2V0VG9kb0NvbnRhaW5lcigpIGFzIEhUTUxVTGlzdEVsZW1lbnQpLmRhdGFzZXQucHJvamVjdElkO1xuICAgIC8vIHB1Ymxpc2ggdGhlIFwibmV3VG9kb0l0ZW1DcmVhdGlvblJlcXVlc3RcIiBldmVudCB3aXRoIHRoZSBmb3JtRGF0YSBhcyBFdmVudERhdGFcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwibmV3VG9kb0l0ZW1DcmVhdGlvblJlcXVlc3RcIiwgZGF0YSk7XG4gICAgLy8gcmVzZXQgdGhlIGZvcm1cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdG9nZ2xlQWRkVG9kb0Zvcm0oKTtcbiAgICBnZXRBZGRUb2RvQnRuKCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59KTtcblxuLy8gc3Vic2NyaWJlIHRvIGFsbCBuZWNlc3NhcnkgZXZlbnRzXG5cbi8vIHdoZW5ldmVyIFwibGlzdENoYW5nZWRcIiBpcyBmaXJlZCB3ZSdsbCByZS1yZW5kZXIgdGhlIHNpZGViYXIuXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJsaXN0Q2hhbmdlZFwiLCByZW5kZXJTaWRlYmFyKTtcbi8vIHdoZW5ldmVyIFwicHJvamVjdENoYW5nZWRcIiBpcyBmaXJlZCB3ZSdsbCByZS1yZW5kZXIgdGhlIHByb2plY3Qgc2VjdGlvbi5cbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcInByb2plY3RDaGFuZ2VkXCIsIHJlbmRlclByb2plY3QpO1xuLy8gZXZlbnQgaGFuZGxlciBmb3IgZWRpdCBwcm9qZWN0IG5hbWUgYnV0dG9uXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJlZGl0UHJvamVjdE5hbWVCdG5DbGlja2VkXCIsIGhhbmRsZUVkaXRQcm9qZWN0TmFtZUJ0bkNsaWNrKTtcbi8vIGV2ZW50IGhhbmRsZXIgZm9yIGNhbmNlbCBlZGl0IHByb2plY3QgbmFtZSBidXR0b25cbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcImNhbmNlbEVkaXRQcm9qZWN0TmFtZUJ0bkNsaWNrZWRcIiwgaGFuZGxlQ2FuY2VsRWRpdFByb2plY3ROYW1lQnRuQ2xpY2spO1xuLy8gZXZlbnQgaGFuZGxlciBmb3IgZWRpdCB0b2RvIGJ1dHRvblxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwiZWRpdFRvZG9CdG5DbGlja2VkXCIsIGhhbmRsZUVkaXRUb2RvQnRuQ2xpY2spO1xuLy8gd2UnbGwgZGlzcGxheSBlcnJvcnMoY3VycmVudGx5IHdoZW4gdXNlciB0cmllcyB0byBkZWxldGUgZGVmYXVsdCBwcm9qZWN0KVxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwic2hvd0Vycm9yXCIsIGhhbmRsZVNob3dFcnJvcik7IiwiLy8gZnVuY3Rpb25zIGZvciBzZWxlY3RpbmcgYWxsIG5lY2Vzc2FyeSBkb20gZWxlbWVudHMsIHdlJ3JlIGRvaW5nIHRoaXMgYmVjYXVzZSBpZiB3ZSBpbnN0ZWFkIGRlY2xhcmUgdGhlbVxuLy8gYXMgdmFyaWFibGVzLCB0aGUgc2VsZWN0b3Igd2lsbCByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBkb20gZWxlbWVudCBpcyBub3QgeWV0IHJlbmRlcmVkLCBieSBpbnN0ZWFkIHR1cm5pbmdcbi8vIGl0IHRvIGEgZnVuY3Rpb24gd2UgY2FuIHF1ZXJ5IHRoZW0gb24gcnVudGltZSBhdm9pZGluZyB0aGUgY2hhbmNlcyBvZiB0aGUgdmFyaWFibGUgYmVpbmcgdW5kZWZpbmVkLlxuXG5jb25zdCBnZXRQcm9qZWN0c1NlY3Rpb24gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjcHJvamVjdHMtc2VjdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZ2V0VG9kb3NTZWN0aW9uID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I3RvZG9zLXNlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGdldFRvZG9Db250YWluZXIgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC50b2RvLWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZ2V0QWRkUHJvamVjdEJ0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5hZGQtcHJvamVjdCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgZ2V0Q2FuY2VsQWRkUHJvamVjdEJ0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jYW5jZWwtYWRkLXByb2plY3QnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGdldEFkZFRvZG9Nb2RhbCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiN0b2RvLWZvcm0tc2VjdGlvbj5kaXYubW9kYWwnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGdldEFkZFRvZG9CdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYWRkLXRvZG8nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGdldENhbmNlbEFkZFRvZG9CdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsLWFkZC10b2RvJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBnZXRQcm9qZWN0RnJtID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNhZGQtcHJvamVjdC1mb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgZ2V0VG9kb0ZybSA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jYWRkLXRvZG8tZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IGdldEVkaXRUb2RvU2VjdGlvbiA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNlZGl0LXRvZG8tZm9ybS1zZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBnZXRFZGl0VG9kb0ZybSA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jZWRpdC10b2RvLWZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBnZXRDYW5jZWxFZGl0VG9kb0J0biA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jYW5jZWwtZWRpdC10b2RvJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBnZXRFcnJvclNlY3Rpb24gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjZXJyb3JzLXNlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGdldEVycm9yTXNnRGlzcGxheSA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AuZXJyb3ItbXNnJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5jb25zdCBnZXREaXNtaXNzRXJyb3JCdG4gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uZGlzbWlzcy1lcnJvcicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgZ2V0UHJvamVjdENvbnRyb2xzID0gKHBhcmVudDogSFRNTEVsZW1lbnQpID0+IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdkaXYucHJvamVjdC1jb250cm9scy1zZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBnZXRFZGl0UHJvamVjdE5hbWVGcm1zID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSNlZGl0LXByb2plY3QtZm9ybScpO1xuXG5leHBvcnQge1xuICAgIGdldFByb2plY3RzU2VjdGlvbixcbiAgICBnZXRUb2Rvc1NlY3Rpb24sXG4gICAgZ2V0VG9kb0NvbnRhaW5lcixcbiAgICBnZXRBZGRQcm9qZWN0QnRuLFxuICAgIGdldENhbmNlbEFkZFByb2plY3RCdG4sXG4gICAgZ2V0QWRkVG9kb0J0bixcbiAgICBnZXRDYW5jZWxBZGRUb2RvQnRuLFxuICAgIGdldFByb2plY3RGcm0sXG4gICAgZ2V0VG9kb0ZybSxcbiAgICBnZXRFZGl0UHJvamVjdE5hbWVGcm1zLFxuICAgIGdldEVkaXRUb2RvU2VjdGlvbixcbiAgICBnZXRFZGl0VG9kb0ZybSxcbiAgICBnZXRDYW5jZWxFZGl0VG9kb0J0bixcbiAgICBnZXRFcnJvclNlY3Rpb24sXG4gICAgZ2V0RXJyb3JNc2dEaXNwbGF5LFxuICAgIGdldERpc21pc3NFcnJvckJ0bixcbiAgICBnZXRBZGRUb2RvTW9kYWwsXG4gICAgZ2V0UHJvamVjdENvbnRyb2xzXG59IiwiLy8gVGhlIGV2bmV0cyBvYnNlcnZlciBvYmplY3QgYmFzaWNhbGx5IHRoZSBwdWIvc3ViIG9iamVjdFxuY29uc3QgRXZlbnRzT2JzZXJ2ZXIgPSB7XG4gICAgLy8gYWxsIHRoZSBldm5ldHMgc3Vic2NyaWJlZCB0b1xuICAgIGV2ZW50czoge30sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogRXZlbnRIYW5kbGVyVHlwZTxFdmVudFBheWxvYWRzPikge1xuICAgICAgICAvLyBJZiB0aGUgcHJvdmlkZWQgZXZlbnQgbmFtZSBpcyBwcmVzZW50IGluIGV2ZW50cyBvYmplY3QsIGFkZCB0aGUgcGFzc2VkIGluXG4gICAgICAgIC8vIGV2ZW50SGFuZGxlciB0byB0aGF0IGV2ZW50J3MgbGlzdCwgaWYgbm90IGNyZWF0ZSBhIG5ldyBldmVudCBhbmQgYWRkIHRoZSBldmVudCBoYW5kbGVyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnRIYW5kbGVyLm5hbWV9IHN1YnNjcmliZWQgdG8gZXZlbnQgJHtldmVudE5hbWV9YCk7XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbiAoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE/OiBFdmVudFBheWxvYWRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBldmVudDogJHtldmVudE5hbWV9IHdhcyBqdXN0IGZpcmVkYCk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXJzID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBzdWJzY3JpYmVycyBhcnJheSBmb3IgdGhlIHB1Ymxpc2hlZCBldmVudCBhbmQgY2FsbCBlYWNoXG4gICAgICAgIC8vIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGRhdGFcbiAgICAgICAgc3Vic2NyaWJlcnM/LmZvckVhY2goKGZuOiAoeDogRXZlbnRQYXlsb2FkcykgPT4gdm9pZCkgPT4gZm4oZGF0YSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzT2JzZXJ2ZXI7IiwiaW1wb3J0IEV2ZW50c09ic2VydmVyIGZyb20gXCIuL2V2ZW50c09ic2VydmVyXCI7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnXG5cbi8vIHRoZSB0b2RvTGlzdCBvYmplY3RcbmNvbnN0IHRvZG9MaXN0OiBUb2RvTGlzdFR5cGUgPSB7XG4gICAgLy8gYXJyYXkgaG9sZGluZyBhbGwgdGhlIHByb2plY3RzXG4gICAgbGlzdDogW10sXG4gICAgLy8gY29tcGxldGVseSByZXBsYWNlIHRoZSBsaXN0IHVzZWZ1bCBmb3IgZGVsZXRpbmcgcHJvamVjdHMgYW5kIGxvYWRpbmcgc2F2ZWQgZGF0YVxuICAgIHJlcGxhY2VMaXN0OiAobmV3TGlzdDogUHJvamVjdFR5cGVbXSkgPT4gdG9kb0xpc3QubGlzdCA9IG5ld0xpc3QsXG4gICAgLy8gYWRkIGEgbmV3IHByb2plY3QgdG8gdGhlIGxpc3RcbiAgICBhZGRQcm9qZWN0OiAocHJvamVjdDogUHJvamVjdFR5cGUpID0+IHRvZG9MaXN0Lmxpc3QucHVzaChwcm9qZWN0KSxcbiAgICAvLyBnZXQgYSBwcm9qZWN0IGZyb20gdGhlIGxpc3RcbiAgICBnZXRQcm9qZWN0OiAocHJvamVjdElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0Lmxpc3QuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5wcm9qZWN0SWQgPT09IHByb2plY3RJZClbMF07XG4gICAgfSxcbiAgICAvLyBlZGl0IGEgZ2l2ZW4gcHJvamVjdCBuYW1lXG4gICAgZWRpdFByb2plY3ROYW1lOiAocHJvamVjdElkOiBzdHJpbmcsIG5ld05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZSA9IG5ld05hbWU7XG4gICAgfSxcbiAgICAvLyBkZWxldGUgYSBwcm9qZWN0XG4gICAgZGVsZXRlUHJvamVjdDogKHByb2plY3RJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRvZG9MaXN0LnJlcGxhY2VMaXN0KHRvZG9MaXN0Lmxpc3QuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5wcm9qZWN0SWQgIT09IHByb2plY3RJZCkpO1xuICAgIH1cbn1cblxuLy8gY3JlYXRlIGEgbmV3IGxpc3Qgd2l0aCBkZWZhdWx0IHByb2plY3RcbmNvbnN0IGNyZWF0ZU5ld0xpc3QgPSAoKSA9PiB7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcIm5ld1Byb2plY3RDcmVhdGlvblJlcXVlc3RcIiwge1xuICAgICAgICBwcm9qZWN0TmFtZTogXCJIb21lXCIsXG4gICAgICAgIHByb2plY3RJZDogXCJkZWZhdWx0SG9tZVwiXG4gICAgfSlcbn1cblxuLy8gd2hlbmV2ZXIgbGlzdCBpcyBjaGFuZ2VkIHB1Ymxpc2ggdGhlIGV2ZW50XG5jb25zdCBwdWJsaXNoTGlzdENoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gdG9kb0xpc3QubGlzdDtcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwibGlzdENoYW5nZWRcIiwgeyBsaXN0IH0pO1xufVxuXG4vLyBkYXRhIHNhdmVkIGluIGxvY2FsU3RvcmFnZSBpcyBsb2FkZWQgcmVwbGFjZSBjdXJyZW50IGRhdGEgd2l0aCBsb2FkZWQgZGF0YVxuY29uc3QgaGFuZGxlTG9hZGVkTGlzdEZyb21TdG9yYWdlID0gKGRhdGE6IExpc3RQYXlsb2FkKSA9PiB7XG4gICAgdG9kb0xpc3QucmVwbGFjZUxpc3QoZGF0YS5zYXZlZExpc3QpO1xuICAgIHB1Ymxpc2hMaXN0Q2hhbmdlKCk7XG59XG5cbi8vIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZCwgYXBwZW5kIGl0IHRvIHRoZSBsaXN0XG5jb25zdCBoYW5kbGVOZXdQcm9qZWN0Q3JlYXRlZCA9IChkYXRhOiBQcm9qZWN0UGF5bG9hZCkgPT4ge1xuICAgIHRvZG9MaXN0LmFkZFByb2plY3QoZGF0YS5wcm9qZWN0KTtcbiAgICBwdWJsaXNoTGlzdENoYW5nZSgpO1xufVxuXG4vLyBhIHJlcXVlc3QgdG8gY2hhbmdlIHByb2plY3QgbmFtZSBpcyByZWNlaXZlZCwgdXBkYXRlIHByb2plY3QgbmFtZVxuY29uc3QgaGFuZGxlUHJvamVjdE5hbWVDaGFuZ2VSZXF1ZXN0ID0gKGRhdGE6IEdlbmVyaWNPYmopID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgbmV3TmFtZVxuICAgIH0gPSBkYXRhO1xuICAgIHRvZG9MaXN0LmVkaXRQcm9qZWN0TmFtZShwcm9qZWN0SWQsIG5ld05hbWUpO1xuICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJwcm9qZWN0Q2hhbmdlZFwiLCB7IHByb2plY3Q6IHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdElkKSB9KVxuICAgIHB1Ymxpc2hMaXN0Q2hhbmdlKCk7XG59XG5cbi8vIGEgcmVxdWVzdCB0byBlZGl0IGEgdG9kbyBpdGVtIHJlY2VpdmVkLCBnZXQgdGhlIHJlbGV2YW50IHByb2plY3QgYW5kIFxuLy8gcHVibGlzaCBhbiBldmVudCByZXF1ZXN0aW5nIHRvZG8gaXRlbSBlZGl0aW5nXG5jb25zdCBoYW5kbGVFZGl0VG9kb1JlcXVlc3QgPSAoZGF0YTogR2VuZXJpY09iaikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgcGFyZW50UHJvamVjdFxuICAgIH0gPSBkYXRhO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHRvZG9MaXN0LmdldFByb2plY3QocGFyZW50UHJvamVjdCk7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcImVkaXRUb2RvUmVxdWVzdFByb2plY3RGb3VuZFwiLCB7IHBhcmVudDogc2VsZWN0ZWRQcm9qZWN0LCB0b2RvRGF0YTogZGF0YSB9KTtcbn1cblxuLy8gYSByZXF1ZXN0IHRvIGNyZWF0ZSBhIG5ldyB0b2RvIGl0ZW0gcmVjZWl2ZWQsIGdldCB0aGUgcmVsZXZhbnQgcHJvamVjdCBhbmRcbi8vIHB1Ymxpc2ggYW4gZXZlbnQgdG8gY3JlYXRlIGEgbmV3IHRvZG8gaXRlbSBpbiB0aGUgcHJvamVjdFxuY29uc3QgaGFuZGxlVG9kb0NyZWF0aW9uUmVxdWVzdCA9ICh0b2RvRGF0YTogR2VuZXJpY09iaikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHRvZG9MaXN0LmdldFByb2plY3QodG9kb0RhdGEucGFyZW50UHJvamVjdCk7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcIm5ld1RvZG9JdGVtQ3JlYXRpb25Qcm9qZWN0Rm91bmRcIiwgeyBwYXJlbnQ6IHNlbGVjdGVkUHJvamVjdCwgdG9kb0RhdGEgfSlcbn1cblxuLy8gYSByZXF1ZXN0IHRvIGRlbGV0ZSBhIHByb2plY3QgaXMgcmVjZWl2ZWQsIGRlbGV0ZSB0aGUgcHJvamVjdCBhbmQgcHVibGlzaCBcbi8vIGRlZmF1bHQgcHJvamVjdFxuY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IChkYXRhOiBHZW5lcmljT2JqKSA9PiB7XG4gICAgLy8gcHJldmVudGluZyB1c2VyIGZyb20gZGVsZXRpbmcgdGhlIGRlZmF1bHQgcHJvamVjdFxuICAgIGlmIChkYXRhLnByb2plY3RJZCA9PT0gXCJkZWZhdWx0SG9tZVwiKSB7XG4gICAgICAgIEV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJzaG93RXJyb3JcIiwgeyBlcnJvck1zZzogXCJEZWZhdWx0IFByb2plY3QgY2Fubm90IGJlIGRlbGV0ZWRcIiB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KGRhdGEucHJvamVjdElkKTtcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwicHJvamVjdENoYW5nZWRcIiwgeyBwcm9qZWN0OiB0b2RvTGlzdC5nZXRQcm9qZWN0KFwiZGVmYXVsdEhvbWVcIikgfSk7XG59XG5cbi8vIGEgcmVxdWVzdCB0byB0b2dnbGUgdG9kbyBjb21wbGV0aW9uIHN0YXR1cyBpcyByZWNlaXZlZCwgZ2V0IHRoZSByZWxldmFudCBwcm9qZWN0XG4vLyBhbmQgcHVibGlzaCBpdCB0byBiZSB0b2dnbGVkXG5jb25zdCBoYW5kbGVUb2dnbGVUb2RvU3RhdHVzID0gKGRhdGE6IEdlbmVyaWNPYmopID0+IHtcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwidG9nZ2xlVG9kb1N0YXR1c1wiLCB7IHBhcmVudDogdG9kb0xpc3QuZ2V0UHJvamVjdChkYXRhLnBhcmVudCksIHRvZG9JZDogZGF0YS50b2RvaWQgfSk7XG59XG5cbi8vIGEgcmVxdWVzdCB0byBkZWxldGUgYSB0b2RvIGl0ZW0gcmVjZWl2ZWQsIGdldCB0aGUgcmVsZXZhbnQgcHJvamVjdCBhbmQgcHVibGlzaFxuLy8gaXQgcmVxdWVzdGluZyB0byBkZWxldGUgdGhlIHRvZG8gaXRlbVxuY29uc3QgaGFuZGxlRGVsZXRlVG9kb0J0bkNsaWNrID0gKGRhdGE6IEdlbmVyaWNPYmopID0+IHtcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwiZGVsZXRlVG9kb0l0ZW1cIiwgeyBwYXJlbnQ6IHRvZG9MaXN0LmdldFByb2plY3QoZGF0YS5wYXJlbnQpLCB0b2RvSWQ6IGRhdGEudG9kb2lkIH0pO1xufVxuXG4vLyBpZiBsb2NhbFN0b3JhZ2UgZG9lcyBub3QgaGF2ZSBhIHNhdmVkIGxpc3QgY3JlYXRlIGEgbmV3IGxpc3RcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcInNhdmVkTGlzdEVtcHR5XCIsIGNyZWF0ZU5ld0xpc3QpO1xuLy8gaWYgbG9jYWxTdG9yYWdlIGRvZXMgaGF2ZSBhIHNhdmVkIGxpc3QgcmVwbGFjZSB0aGUgY3VycmVudCBsaXN0IHdpdGggbmV3IG9uZVxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwic2F2ZWRMaXN0TG9hZGVkXCIsIGhhbmRsZUxvYWRlZExpc3RGcm9tU3RvcmFnZSk7XG4vLyB3aGVuZXZlciBcIm5ld1Byb2plY3RDcmVhdGVkXCIgYWRkIGl0IHRvIGxpc3RcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcIm5ld1Byb2plY3RDcmVhdGVkXCIsIGhhbmRsZU5ld1Byb2plY3RDcmVhdGVkKTtcbi8vIHdoZW5ldmVyIFwicHJvamVjdE5hbWVDaGFuZ2VSZXF1ZXN0XCIgdXBkYXRlIHByb2plY3QgbmFtZVxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwicHJvamVjdE5hbWVDaGFuZ2VSZXF1ZXN0XCIsIGhhbmRsZVByb2plY3ROYW1lQ2hhbmdlUmVxdWVzdCk7XG4vLyBzZWUgYWJvdmUgZnVuY3Rpb24gZGVmaW5pdGlvblxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwiZWRpdFRvZG9SZXF1ZXN0XCIsIGhhbmRsZUVkaXRUb2RvUmVxdWVzdCk7XG4vLyBzZWUgYWJvdmUgZnVuY3Rpb24gZGVmaW5pdGlvblxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwibmV3VG9kb0l0ZW1DcmVhdGlvblJlcXVlc3RcIiwgaGFuZGxlVG9kb0NyZWF0aW9uUmVxdWVzdCk7XG4vLyB3aGVuZXZlciBcInByb2plY3RDaGFuZ2VkXCIgaXMgZmlyZWQgcHVibGlzaCBpdCBmb3Igc2F2aW5nIGFuZCByZS1yZW5kZXJpbmdcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcInByb2plY3RDaGFuZ2VkXCIsIHB1Ymxpc2hMaXN0Q2hhbmdlKTtcbi8vIHNlZSBhYm92ZSBmdW5jdGlvbiBkZWZpbml0aW9uXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJkZWxldGVQcm9qZWN0Q2xpY2tlZFwiLCBoYW5kbGVEZWxldGVQcm9qZWN0KTtcbi8vIHNlZSBhYm92ZSBmdW5jdGlvbiBkZWZpbml0aW9uXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJ0b2dnbGVUb2RvU3RhdHVzUmVxdWVzdFwiLCBoYW5kbGVUb2dnbGVUb2RvU3RhdHVzKTtcbi8vIHNlZSBhYm92ZSBmdW5jdGlvbiBkZWZpbml0aW9uXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJkZWxldGVUb2RvQnRuQ2xpY2tlZFwiLCBoYW5kbGVEZWxldGVUb2RvQnRuQ2xpY2spO1xuXG4vLyB3aGVuIHNjcmlwdCBpcyBsb2FkZWQgY2hlY2tTdG9yYWdlIHRvIHNlZSBpZiB3ZSBoYXZlIHNhdmVkIGxpc3RcbkV2ZW50c09ic2VydmVyLnB1Ymxpc2goXCJjaGVja1N0b3JhZ2VcIik7XG4vLyBzZWxlY3QgZGVmYXVsdCBwcm9qZWN0IHRvIGJlIHJlbmRlcmVkXG5FdmVudHNPYnNlcnZlci5wdWJsaXNoKFwicHJvamVjdENoYW5nZWRcIiwgeyBwcm9qZWN0OiB0b2RvTGlzdC5nZXRQcm9qZWN0KFwiZGVmYXVsdEhvbWVcIikgfSk7IiwiaW1wb3J0IEV2ZW50c09ic2VydmVyIGZyb20gXCIuL2V2ZW50c09ic2VydmVyXCI7XG5cbi8vIHByb2plY3QgZmFjdG9yeVxuY29uc3QgUHJvamVjdCA9IChwcm9qZWN0TmFtZTogc3RyaW5nLCBwcm9qZWN0SWQ6IHN0cmluZyk6IFByb2plY3RUeXBlID0+IHtcbiAgICBsZXQgdG9kb3M6IFRvZG9JdGVtVHlwZVtdID0gW107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdElkLFxuICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgdG9kb3NcbiAgICB9XG59XG5cbi8vIHRvZG8gaXRlbSBmYWN0b3J5XG5jb25zdCBUb2RvSXRlbSA9IChcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgZHVlRGF0ZTogRGF0ZSxcbiAgICBwcmlvcml0eTogUHJpb3JpdHlFbnVtLFxuICAgIGNvbXBsZXRlZDogYm9vbGVhbixcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwYXJlbnRQcm9qZWN0OiBzdHJpbmdcbik6IFRvZG9JdGVtVHlwZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdWlkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjb21wbGV0ZWQsXG4gICAgICAgIHBhcmVudFByb2plY3RcbiAgICB9XG59XG5cbi8vIHJldHVybiBhIHRvZG8gaXRlbSBmcm9tIGdpdmVuIHByb2plY3RcbmNvbnN0IGdldFNpbmdsZVRvZG8gPSAocHJvamVjdDogUHJvamVjdFR5cGUsIHRvZG9JZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3QudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby51aWQgPT09IHRvZG9JZClbMF07XG59XG5cbi8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCBwdWJsaXNoIGl0XG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKGRhdGE6IEdlbmVyaWNPYmopID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0SWRcbiAgICB9ID0gZGF0YTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdElkIHx8IERhdGUubm93KCkgKyBwcm9qZWN0TmFtZSk7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcIm5ld1Byb2plY3RDcmVhdGVkXCIsIHsgcHJvamVjdDogbmV3UHJvamVjdCB9KVxufVxuXG4vLyBjcmVhdGUgYSBuZXcgdG9kbyBhbmQgcHVibGlzaCBpdFxuY29uc3QgY3JlYXRlTmV3VG9kbyA9IChkYXRhOiBUb2RvRGF0YVBheWxvYWQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHlcbiAgICB9ID0gZGF0YS50b2RvRGF0YVxuICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcbiAgICBjb25zdCB1aWQgPSAoZGF0YS5wYXJlbnQudG9kb3MubGVuZ3RoIC0gMSArIERhdGUubm93KCkpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgKHByaW9yaXR5IGFzIFByaW9yaXR5RW51bSksIGZhbHNlLCB1aWQsIGRhdGEucGFyZW50LnByb2plY3RJZCk7XG4gICAgZGF0YS5wYXJlbnQudG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwicHJvamVjdENoYW5nZWRcIiwgeyBwcm9qZWN0OiBkYXRhLnBhcmVudCB9KTtcbn1cblxuLy8gdG9nZ2xlIHRoZSBjb21wbGV0aW9uIHN0YXR1cyBvZiBhIHRvZG8gaXRlbSBhbmQgcHVibGlzaCBpdFxuY29uc3QgdG9nZ2xlVG9kb0NvbXBsZXRpb24gPSAoZGF0YTogVG9kb0lkUGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgcGFyZW50LFxuICAgICAgICB0b2RvSWRcbiAgICB9ID0gZGF0YVxuICAgIGNvbnN0IHNlbGVjdGVkVG9kbyA9IGdldFNpbmdsZVRvZG8ocGFyZW50LCB0b2RvSWQpO1xuICAgIHNlbGVjdGVkVG9kby5jb21wbGV0ZWQgPSAhc2VsZWN0ZWRUb2RvLmNvbXBsZXRlZDtcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwicHJvamVjdENoYW5nZWRcIiwgeyBwcm9qZWN0OiBwYXJlbnQgfSk7XG59XG5cbi8vIHVwZGF0ZSBhIGdpdmVuIHRvZG8gaW4gdGhlIHByb3ZpZGVkIHByb2plY3QgYW5kIHB1Ymxpc2ggaXRcbmNvbnN0IHVwZGF0ZVRvZG8gPSAoZGF0YTogVG9kb0RhdGFQYXlsb2FkKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICB0b2RvSWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHlcbiAgICB9ID0gZGF0YS50b2RvRGF0YTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IGdldFNpbmdsZVRvZG8oZGF0YS5wYXJlbnQsIHRvZG9JZCk7XG4gICAgY3VycmVudFRvZG8udGl0bGUgPSB0aXRsZTtcbiAgICBjdXJyZW50VG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGN1cnJlbnRUb2RvLmR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcbiAgICBjdXJyZW50VG9kby5wcmlvcml0eSA9IHByaW9yaXR5IGFzIFByaW9yaXR5RW51bTtcbiAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwicHJvamVjdENoYW5nZWRcIiwgeyBwcm9qZWN0OiBkYXRhLnBhcmVudCB9KTtcbn1cblxuLy8gZGVsZXRlIGEgZ2l2ZW4gdG9kbyBmcm9tIHByb3ZpZGVkIHByb2plY3QgYW5kIHB1Ymxpc2ggc3RhdHVzXG5jb25zdCBkZWxldGVUb2RvID0gKGRhdGE6IFRvZG9JZFBheWxvYWQpID0+IHtcbiAgICBkYXRhLnBhcmVudC50b2RvcyA9IGRhdGEucGFyZW50LnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8udWlkICE9PSBkYXRhLnRvZG9JZCk7XG4gICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInByb2plY3RDaGFuZ2VkXCIsIHsgcHJvamVjdDogZGF0YS5wYXJlbnQgfSk7XG59XG5cbi8vIHdoZW5ldmVyIGEgcmVxdWVzdCB0byBjcmVhdGUgbmV3IHByb2plY3QgaXMgcmVjZWl2ZWQsIGhhbmRsZSB0aGUgcmVxdWVzdFxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwibmV3UHJvamVjdENyZWF0aW9uUmVxdWVzdFwiLCBjcmVhdGVOZXdQcm9qZWN0KTtcbi8vIGZyb20gdGhlIHByb3ZpZGVkIHByb2plY3QgZG8gdGhlIG5lY2Vzc2FyeSBjaGFuZ2VzXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJlZGl0VG9kb1JlcXVlc3RQcm9qZWN0Rm91bmRcIiwgdXBkYXRlVG9kbyk7XG4vLyBhZGQgYSBuZXcgdG9kbyBpdGVtIHRvIHByb3ZpZGVkIHByb2plY3RcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcIm5ld1RvZG9JdGVtQ3JlYXRpb25Qcm9qZWN0Rm91bmRcIiwgY3JlYXRlTmV3VG9kbyk7XG4vLyB0b2dnbGUgY29tcGxldGlvbiBzdGF0dXMgb2YgYSB0b2RvIGluIHByb3ZpZGVkIHByb2plY3RcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcInRvZ2dsZVRvZG9TdGF0dXNcIiwgdG9nZ2xlVG9kb0NvbXBsZXRpb24pO1xuLy8gaGFuZGxlIGRlbGV0ZXRvZG9pdGVtIHJlcXVlc3RcbkV2ZW50c09ic2VydmVyLnN1YnNjcmliZShcImRlbGV0ZVRvZG9JdGVtXCIsIGRlbGV0ZVRvZG8pOyIsImltcG9ydCBFdmVudHNPYnNlcnZlciBmcm9tIFwiLi9ldmVudHNPYnNlcnZlclwiO1xuXG4vLyBzYXZlIHRoZSBwcm92aWRlZCBsaXN0IHRvIGxvY2FsU3RvcmFnZVxuY29uc3Qgc2F2ZUxpc3RUb0xvY2FsU3RvcmFnZSA9IChkYXRhOiBMaXN0UGF5bG9hZCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEubGlzdCkpO1xufVxuXG4vLyBsb2FkIHRoZSB0b2RvTGlzdCBmcm9tIGxvY2FsU3RvcmFnZVxuY29uc3QgbG9hZExpc3RGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRvZG9MaXN0XCIpKTtcbn1cblxuLy8gY2hlY2sgaWYgbG9jYWxTdG9yYWdlIGhhcyBhIHNhdmVkTGlzdCBhbmQgcmVzcG9uZCBhY2NvcmRpbmdseVxuY29uc3QgY2hlY2tTdG9yYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkTGlzdCA9IGxvYWRMaXN0RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChzYXZlZExpc3QpIHtcbiAgICAgICAgRXZlbnRzT2JzZXJ2ZXIucHVibGlzaChcInNhdmVkTGlzdExvYWRlZFwiLCB7IHNhdmVkTGlzdCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBFdmVudHNPYnNlcnZlci5wdWJsaXNoKFwic2F2ZWRMaXN0RW1wdHlcIilcbiAgICB9XG59XG5cbi8vIHdoZW5ldmVyIFwiY2hlY2tTdG9yYWdlXCIgZXZlbnQgaXMgZmlyZWQgY2hlY2sgc3RvcmFnZSBmb3Igc2F2ZWQgbGlzdFxuRXZlbnRzT2JzZXJ2ZXIuc3Vic2NyaWJlKFwiY2hlY2tTdG9yYWdlXCIsIGNoZWNrU3RvcmFnZSk7XG4vLyB3aGVuZXZlciBcImxpc3RDaGFuZ2VkXCIgZXZlbnQgaXMgZmlyZWQsIHNhdmUgaXQgdG8gbG9jYWxTdG9yYWdlXG5FdmVudHNPYnNlcnZlci5zdWJzY3JpYmUoXCJsaXN0Q2hhbmdlZFwiLCBzYXZlTGlzdFRvTG9jYWxTdG9yYWdlKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2Rpc3BsYXlDb21wb25lbnRzLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvZGlzcGxheUNvbnRyb2xsZXIudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9wcm9qZWN0Q29udHJvbGxlci50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL3N0b3JhZ2VDb250cm9sbGVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==