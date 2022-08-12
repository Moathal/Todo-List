"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["interact"],{

/***/ "./src/modules/interact.js":
/*!*********************************!*\
  !*** ./src/modules/interact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"descriptFocusIn\": () => (/* binding */ descriptFocusIn),\n/* harmony export */   \"descriptFocusOut\": () => (/* binding */ descriptFocusOut)\n/* harmony export */ });\nfunction descriptFocusIn(id) {\n  const index = id.replace('t-', '');\n  const button = document.getElementById(`b-${index}`);\n  const trash = document.getElementById(`trsh-${index}`);\n  const move = document.getElementById(`move-${index}`);\n  const div = document.getElementById(`d-${index}`);\n  div.style.backgroundColor = '#ffc107';\n  button.classList.remove('move');\n  button.classList.add('delete');\n  trash.classList.remove('hidden');\n  trash.classList.add('show');\n  move.classList.remove('show');\n  move.classList.add('hidden');\n  document.getElementById(id).style.cursor = 'text';\n}\n\nfunction descriptFocusOut(id) {\n  const index = id.replace('t-', '');\n  const button = document.getElementById(`b-${index}`);\n  const trash = document.getElementById(`trsh-${index}`);\n  const move = document.getElementById(`move-${index}`);\n  const div = document.getElementById(`d-${index}`);\n  div.style.backgroundColor = 'white';\n  button.classList.remove('delete');\n  button.classList.add('move');\n  trash.classList.remove('show');\n  trash.classList.add('hidden');\n  move.classList.remove('hidden');\n  move.classList.add('show');\n  document.getElementById(id).style.cursor = 'default';\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/interact.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/interact.js"));
/******/ }
]);