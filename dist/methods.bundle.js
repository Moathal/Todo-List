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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ methodsTasks)\n/* harmony export */ });\nclass methodsTasks {\n  constructor() {\n    this.tasks = [];\n  }\n\n  resetList(tasksList) {\n    this.tasks.forEach((task, i) => {\n      const div = document.createElement('div');\n      div.classList.add('py-1');\n      div.classList.add('li');\n      div.id = `d-${i}`;\n      div.innerHTML = `\n        <input id=\"c-${i}\" class=\"checkbox\" type=\"checkbox\">\n        <div class=\"text\">\n        <textarea id=\"t-${i}\" class=\"fs-3 fw-light description\">${task.description}</textarea>\n        </div>\n        <button id=\"b-${i}\" class=\"move-delete move\"><i id=\"trash-${i}\" class=\"fa-regular fa-trash-can fa-xl hidden\"></i>\n        <i id=\"move-${i}\" class=\"fa-solid fa-ellipsis-vertical show\"></i>\n        </button>`;\n      div.style.order = task.index;\n      tasksList.appendChild(div);\n      if (task.completed) {\n        const checkbox = document.getElementById(`c-${i}`);\n        const textarea = document.getElementById(`t-${i}`);\n        checkbox.setAttribute('checked', '');\n        textarea.classList.add('text-decoration-line-through');\n        textarea.classList.add('text-secondary');\n      }\n    });\n  }\n\n  addTask(task) {\n    this.tasks.push(task);\n  }\n\n  clickCheckbox(id) {\n    const index = id.replace('c-', '');\n    const checkbox = document.getElementById(id);\n    const textarea = document.getElementById(`t-${index}`);\n    if (checkbox.hasAttribute('checked')) {\n      textarea.classList.remove('text-secondary');\n      textarea.classList.remove('text-decoration-line-through');\n      checkbox.removeAttribute('checked');\n      this.tasks[index].completed = false;\n    } else {\n      textarea.classList.add('text-decoration-line-through');\n      textarea.classList.add('text-secondary');\n      checkbox.setAttribute('checked', '');\n      this.tasks[index].completed = true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/methods.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/methods.js"));
/******/ }
]);