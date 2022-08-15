"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["methods"],{

/***/ "./src/modules/methods.js":
/*!********************************!*\
  !*** ./src/modules/methods.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ methodsTasks)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\nclass methodsTasks {\n  constructor() {\n    this.tasks = [];\n  }\n\n  resetList(tasksList) {\n    tasksList.innerHTML = '';\n    this.tasks.forEach((task, i) => {\n      const div = document.createElement('div');\n      div.classList.add('py-1');\n      div.classList.add('li');\n      div.id = `d-${i}`;\n      div.innerHTML = `\n        <input id=\"c-${i}\" class=\"checkbox\" type=\"checkbox\">\n        <div class=\"text\">\n        <input id=\"t-${i}\" class=\"fs-4 fw-light description\" value=\"${task.description}\">\n        </div>\n        <button type=\"button\" id=\"b-${i}\" class=\"move-delete move\"><i id=\"trsh-${i}\" class=\"fa-regular fa-trash-can fa-xl hidden\"></i>\n        <i id=\"move-${i}\" class=\"fa-solid fa-ellipsis-vertical show\"></i>\n        </button>`;\n      div.style.order = task.index;\n      tasksList.appendChild(div);\n      if (task.completed) {\n        const checkbox = document.getElementById(`c-${i}`);\n        const input = document.getElementById(`t-${i}`);\n        checkbox.setAttribute('checked', '');\n        input.classList.add('text-decoration-line-through');\n        input.classList.add('text-secondary');\n        div.classList.add('checked');\n      }\n    });\n  }\n\n  addTask(description, completed, index) {\n    const object = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description, completed, index + 1);\n    this.tasks.push(object);\n  }\n\n  clickCheckbox(id) {\n    const index = id.replace('c-', '');\n    const checkbox = document.getElementById(id);\n    const input = document.getElementById(`t-${index}`);\n    const div = document.getElementById(`d-${index}`);\n    if (checkbox.hasAttribute('checked')) {\n      input.classList.remove('text-secondary');\n      input.classList.remove('text-decoration-line-through');\n      checkbox.removeAttribute('checked');\n      this.tasks[index].completed = false;\n      div.classList.remove('checked');\n    } else {\n      input.classList.add('text-decoration-line-through');\n      input.classList.add('text-secondary');\n      checkbox.setAttribute('checked', '');\n      this.tasks[index].completed = true;\n      div.classList.add('checked');\n    }\n  }\n\n  removeTask(tasksList, idIndex, task) {\n    this.tasks.splice(idIndex, 1);\n    tasksList.removeChild(task);\n    this.rearrangeOrder();\n  }\n\n  rearrangeOrder() {\n    this.tasks = this.tasks.sort((a, b) => a.index - b.index);\n    for (let i = 0; i < this.tasks.length; i += 1) this.tasks[i].index = i + 1;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/methods.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ task)\n/* harmony export */ });\nclass task {\n  constructor(description, completed = false, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/methods.js"));
/******/ }
]);