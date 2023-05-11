/* eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack_tutorial/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_tutorial/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_js_saveDb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules.js/saveDb.js */ \"./src/modules.js/saveDb.js\");\n/* harmony import */ var _modules_js_saveToDo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules.js/saveToDo.js */ \"./src/modules.js/saveToDo.js\");\n/* harmony import */ var _modules_js_showDb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules.js/showDb.js */ \"./src/modules.js/showDb.js\");\n/* harmony import */ var _modules_js_changeIcons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules.js/changeIcons.js */ \"./src/modules.js/changeIcons.js\");\n/* harmony import */ var _modules_js_delete_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules.js/delete.js */ \"./src/modules.js/delete.js\");\n/* harmony import */ var _modules_js_clearList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules.js/clearList.js */ \"./src/modules.js/clearList.js\");\n// imports\n\n\n\n\n\n\n\n\n(0,_modules_js_clearList_js__WEBPACK_IMPORTED_MODULE_7__.clearList)();\n\n// general variables\n\nvar container = document.getElementById('list-item-container');\nvar form = document.getElementById('form');\nvar newTodo = document.getElementById('new-todo');\n\n// event listener\nform.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var index = 1;\n  if (localStorage.getItem('to-do-list')) {\n    index = Array.from(JSON.parse(localStorage.getItem('to-do-list')));\n  }\n  var item = {\n    index: index.length + 1 || index,\n    completed: false,\n    activity: newTodo.value\n  };\n  (0,_modules_js_saveToDo_js__WEBPACK_IMPORTED_MODULE_3__.saveToDo)(item);\n  form.reset();\n  (0,_modules_js_changeIcons_js__WEBPACK_IMPORTED_MODULE_5__.changeIcons)();\n  (0,_modules_js_saveDb_js__WEBPACK_IMPORTED_MODULE_2__.saveDb)(JSON.parse(localStorage.getItem('to-do-list')));\n});\nvar esl = _index_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\ndocument.getElementById('eslint').innerHTML = esl;\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_js_changeIcons_js__WEBPACK_IMPORTED_MODULE_5__.changeIcons)();\n  if (localStorage.getItem('to-do-list')) {\n    (0,_modules_js_showDb_js__WEBPACK_IMPORTED_MODULE_4__.showDb)(JSON.parse(localStorage.getItem('to-do-list')));\n    (0,_modules_js_changeIcons_js__WEBPACK_IMPORTED_MODULE_5__.changeIcons)();\n  }\n});\ncontainer.addEventListener('click', function (e) {\n  if (e.target.classList.contains('form-check-input')) {\n    var id = e.target.dataset.id;\n    var db = JSON.parse(localStorage.getItem('to-do-list'));\n    db[id].completed = !db[id].completed;\n    (0,_modules_js_saveDb_js__WEBPACK_IMPORTED_MODULE_2__.saveDb)(db);\n  }\n  if (e.target.classList.contains('fa-trash')) {\n    var _id = e.target.dataset.id;\n    (0,_modules_js_delete_js__WEBPACK_IMPORTED_MODULE_6__.deleteItem)(_id);\n  }\n});\n\n//# sourceURL=webpack://webpack_tutorial/./src/index.js?");

/***/ }),

/***/ "./src/modules.js/changeIcons.js":
/*!***************************************!*\
  !*** ./src/modules.js/changeIcons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeIcons\": () => (/* binding */ changeIcons),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changeIcons = function changeIcons() {\n  var allActivites = Array.from(document.querySelectorAll('.todo'));\n  allActivites.forEach(function (element) {\n    element.addEventListener('change', function (e) {\n      e.preventDefault();\n      var db = JSON.parse(localStorage.getItem('to-do-list'));\n      db[e.target.dataset.id].activity = e.target.value;\n      localStorage.setItem('to-do-list', JSON.stringify(db));\n    });\n    element.addEventListener('focus', function (e) {\n      e.target.nextElementSibling.classList.add('fa-trash');\n      e.target.nextElementSibling.classList.remove('fa-ellipsis-vertical');\n      setTimeout(function () {\n        e.target.nextElementSibling.classList.remove('trash');\n        e.target.nextElementSibling.classList.add('fa-ellipsis-vertical');\n      }, 2000);\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeIcons);\n\n//# sourceURL=webpack://webpack_tutorial/./src/modules.js/changeIcons.js?");

/***/ }),

/***/ "./src/modules.js/clearList.js":
/*!*************************************!*\
  !*** ./src/modules.js/clearList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearList\": () => (/* binding */ clearList),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _saveDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveDb.js */ \"./src/modules.js/saveDb.js\");\n\nvar clearList = function clearList() {\n  document.getElementById('clearList').addEventListener('click', function () {\n    var db = JSON.parse(localStorage.getItem('to-do-list'));\n    var incompleteTodos = db.filter(function (element) {\n      return !element.completed;\n    });\n    (0,_saveDb_js__WEBPACK_IMPORTED_MODULE_0__.saveDb)(incompleteTodos);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearList);\n\n//# sourceURL=webpack://webpack_tutorial/./src/modules.js/clearList.js?");

/***/ }),

/***/ "./src/modules.js/delete.js":
/*!**********************************!*\
  !*** ./src/modules.js/delete.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deleteItem\": () => (/* binding */ deleteItem)\n/* harmony export */ });\n/* harmony import */ var _saveDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveDb.js */ \"./src/modules.js/saveDb.js\");\n\nvar deleteItem = function deleteItem(index) {\n  var db = JSON.parse(localStorage.getItem('to-do-list'));\n  // localStorage.setItem('to-do-list', JSON.stringify(db));\n  db.splice(index, 1);\n  (0,_saveDb_js__WEBPACK_IMPORTED_MODULE_0__.saveDb)(db);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteItem);\n\n//# sourceURL=webpack://webpack_tutorial/./src/modules.js/delete.js?");

/***/ }),

/***/ "./src/modules.js/saveDb.js":
/*!**********************************!*\
  !*** ./src/modules.js/saveDb.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"saveDb\": () => (/* binding */ saveDb)\n/* harmony export */ });\n/* harmony import */ var _showDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showDb.js */ \"./src/modules.js/showDb.js\");\n/* harmony import */ var _changeIcons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeIcons.js */ \"./src/modules.js/changeIcons.js\");\n\n\nvar saveDb = function saveDb(arryOfActivities) {\n  arryOfActivities.forEach(function (element, index) {\n    element.index = index + 1;\n  });\n  localStorage.setItem('to-do-list', JSON.stringify(arryOfActivities));\n  (0,_showDb_js__WEBPACK_IMPORTED_MODULE_0__.showDb)(JSON.parse(localStorage.getItem('to-do-list')));\n  (0,_changeIcons_js__WEBPACK_IMPORTED_MODULE_1__.changeIcons)();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveDb);\n\n//# sourceURL=webpack://webpack_tutorial/./src/modules.js/saveDb.js?");

/***/ }),

/***/ "./src/modules.js/saveToDo.js":
/*!************************************!*\
  !*** ./src/modules.js/saveToDo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"saveToDo\": () => (/* binding */ saveToDo)\n/* harmony export */ });\n/* harmony import */ var _saveDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveDb.js */ \"./src/modules.js/saveDb.js\");\n\nvar saveToDo = function saveToDo(item) {\n  var arryOfActivities = [];\n  if (localStorage.getItem('to-do-list')) {\n    arryOfActivities = JSON.parse(localStorage.getItem('to-do-list'));\n  }\n  arryOfActivities.push(item);\n  (0,_saveDb_js__WEBPACK_IMPORTED_MODULE_0__.saveDb)(arryOfActivities);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveToDo);\n\n//# sourceURL=webpack://webpack_tutorial/./src/modules.js/saveToDo.js?");

/***/ }),

/***/ "./src/modules.js/showDb.js":
/*!**********************************!*\
  !*** ./src/modules.js/showDb.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"showDb\": () => (/* binding */ showDb)\n/* harmony export */ });\nvar showDb = function showDb(db) {\n  var container = document.getElementById('list-item-container');\n  container.innerHTML = '';\n  db.forEach(function (element, index) {\n    var check = '';\n    if (element.completed) {\n      check = 'checked';\n    }\n    container.innerHTML += \"         \\n           <div class=\\\"item-itself mb-3\\\">\\n    \\n                <div  class=\\\"form-check d-flex  justify-content-between align-items-center \\\">\\n    \\n                  <input \".concat(check, \" data-id=\").concat(index, \" class=\\\"form-check-input\\\" type=\\\"checkbox\\\" value=\\\"\\\" id=\\\"\\\">\\n    \\n                  \\n                    <input type=\\\"text\\\" data-id=\").concat(index, \" class=\\\"form-control todo flex-grow-1 mx-4\\\" name=\\\"\\\" id=\\\"\\\" aria-describedby=\\\"helpId\\\"\\n                      value=\\\"\").concat(element.activity, \"\\\" placeholder=\\\"\\\">\\n                  \\n                  \\n                    <i class=\\\"fa-solid fa-ellipsis-vertical\\\" data-id=\").concat(index, \" ></i>\\n                  \\n                </div>\\n              </div>     \\n     \");\n  });\n  var ArrayOfActivities = Array.from(document.querySelectorAll('.todo'));\n  db.forEach(function (element) {\n    if (element.completed) {\n      ArrayOfActivities[db.indexOf(element)].style.textDecoration = 'line-through';\n      ArrayOfActivities[db.indexOf(element)].style.opacity = 0.5;\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showDb);\n\n//# sourceURL=webpack://webpack_tutorial/./src/modules.js/showDb.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".check,\\r\\n.check * {\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"] {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.fa-solid {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_tutorial/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!doctype html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <title>Title</title>\\r\\n  <!-- Required meta tags -->\\r\\n  <meta charset=\\\"utf-8\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\">\\r\\n\\r\\n  <!-- Bootstrap CSS v5.2.1 -->\\r\\n  <link href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\"\\r\\n    integrity=\\\"sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT\\\" crossorigin=\\\"anonymous\\\">\\r\\n  <\" + \"script src='https://kit.fontawesome.com/7d931a3f92.js' crossorigin='anonymous'><\" + \"/script>\\r\\n\\r\\n\\r\\n\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <header>\\r\\n    <!-- place navbar here -->\\r\\n  </header>\\r\\n  <main class=\\\"container-fluid bg-light d-flex justify-content-center align-items-center min-vh-100\\\">\\r\\n    <div class=\\\"row bg-warning col-8\\\">\\r\\n\\r\\n      <div class=\\\"col px-3 d-flex flex-column card\\\">\\r\\n        <div class=\\\"d-flex align-items-center justify-content-between py-2\\\">\\r\\n          <h4>Demo</h4>\\r\\n          <i class=\\\"fa-solid fa-refresh\\\"></i>\\r\\n        </div>\\r\\n        <form class=\\\"mb-3\\\" id=\\\"form\\\">\\r\\n          <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"\\\" id=\\\"new-todo\\\" aria-describedby=\\\"helpId\\\"\\r\\n            placeholder=\\\"Add to your list ..\\\">\\r\\n        </form>\\r\\n\\r\\n        <div class=\\\"\\\" id=\\\"list-item-container\\\">\\r\\n\\r\\n          <div class=\\\"item-itself mb-3\\\">\\r\\n\\r\\n            <div class=\\\"form-check d-flex justify-content-between align-items-center \\\">\\r\\n\\r\\n              <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" value=\\\"\\\" id=\\\"\\\">\\r\\n\\r\\n              <span class=\\\"flex-grow-1 px-2\\\">\\r\\n                <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"\\\" id=\\\"\\\" aria-describedby=\\\"helpId\\\"\\r\\n                  value=\\\"Manage all your list in \\\" placeholder=\\\"\\\">\\r\\n              </span>\\r\\n\\r\\n              <span>\\r\\n                <i class=\\\"fa-solid fa-trash\\\"></i>\\r\\n              </span>\\r\\n            </div>\\r\\n          </div>\\r\\n          \\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"bg-light text-center py-2\\\" >          \\r\\n          <button type=\\\"button\\\" class=\\\"btn btn-light text-off\\\" id=\\\"clearList\\\">Clear completed</button>\\r\\n        </div>\\r\\n\\r\\n\\r\\n\\r\\n      </div>\\r\\n\\r\\n      <div class=\\\"d-none\\\" id=\\\"eslint\\\">\\r\\n\\r\\n      </div>\\r\\n\\r\\n    </div>\\r\\n    </div>\\r\\n  </main>\\r\\n  <footer>\\r\\n    <!-- place footer here -->\\r\\n  </footer>\\r\\n  <!-- Bootstrap JavaScript Libraries -->\\r\\n  <\" + \"script src=\\\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js\\\"\\r\\n    integrity=\\\"sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3\\\" crossorigin=\\\"anonymous\\\">\\r\\n  <\" + \"/script>\\r\\n\\r\\n  <\" + \"script src=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js\\\"\\r\\n    integrity=\\\"sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz\\\" crossorigin=\\\"anonymous\\\">\\r\\n  <\" + \"/script>\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack_tutorial/./src/index.html?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_tutorial/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_tutorial/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_tutorial/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_tutorial/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_tutorial/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_tutorial/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_tutorial/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;