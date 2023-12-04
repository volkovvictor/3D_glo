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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./js/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./js/modules/menu.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup */ \"./js/modules/popup.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./js/modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./js/modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('2023.12.02');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_popup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n   const menuBtn = document.querySelector('.menu');\r\n   const menu = document.querySelector('menu');\r\n   const closeBtn = menu.querySelector('.close-btn');\r\n   const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n   const handlerMenu = () => {\r\n      menu.classList.toggle('active-menu');\r\n   }\r\n\r\n   menuBtn.addEventListener('click', handlerMenu);\r\n   closeBtn.addEventListener('click', handlerMenu);\r\n\r\n   menuItems.forEach(item => {\r\n      item.addEventListener('click', handlerMenu);\r\n   });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./js/modules/menu.js?");

/***/ }),

/***/ "./js/modules/popup.js":
/*!*****************************!*\
  !*** ./js/modules/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popup = () => {\r\n   const popupBtn = document.querySelectorAll('.popup-btn');\r\n   const popup = document.querySelector('.popup');\r\n   const popupClose = popup.querySelector('.popup-close');\r\n   const popupContent = popup.querySelector('.popup-content');\r\n\r\n   popup.style.opacity = \"0\";\r\n   popupContent.style.transform = \"scale(0)\";\r\n\r\n   const openPopup = () => {\r\n      let count = 0;\r\n\r\n      const animatePopup = () => {\r\n         count += 0.1;\r\n\r\n         let requestId = requestAnimationFrame(animatePopup);\r\n\r\n         if (count >= 1) {\r\n            cancelAnimationFrame(requestId);\r\n         }\r\n\r\n         popup.style.opacity = count;\r\n         popupContent.style.transform = `scale(${count})`;\r\n      }\r\n\r\n      animatePopup();\r\n   }\r\n\r\n   const closePopup = () => {\r\n      popup.style.display = \"none\";\r\n      popup.style.opacity = \"0\";\r\n      popupContent.style.transform = \"scale(0)\";\r\n   }\r\n\r\n   popupBtn.forEach(btn => {\r\n      btn.addEventListener('click', () => {\r\n         popup.style.display = \"block\";\r\n\r\n         if (screen.width < 768) {\r\n            popup.style.opacity = \"1\";\r\n            popupContent.style.transform = \"scale(1)\";\r\n         } else openPopup();\r\n      });\r\n   })\r\n\r\n   //popupClose.addEventListener('click', () => {\r\n   //   popup.style.display = \"none\";\r\n   //   popup.style.opacity = \"0\";\r\n   //   popupContent.style.transform = \"scale(0)\";\r\n   //})\r\n\r\n   popup.addEventListener('click', (e) => {\r\n      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) closePopup();\r\n   });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack:///./js/modules/popup.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n   const scrollBtn = document.querySelector('a[href=\"#service-block\"]');\r\n   const scrollMenuLinks = document.querySelectorAll('menu>ul>li>a');\r\n\r\n   const scrollToBlock = (selector) => {\r\n      const block = document.querySelector(selector);\r\n\r\n      block.scrollIntoView({behavior: \"smooth\", block: \"center\"});\r\n   };\r\n\r\n   scrollBtn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      scrollToBlock(scrollBtn.getAttribute('href'));\r\n   });\r\n\r\n   scrollMenuLinks.forEach(menuLink => {\r\n      menuLink.addEventListener('click', (e) => {\r\n         e.preventDefault();\r\n         scrollToBlock(menuLink.getAttribute('href'));\r\n      });\r\n   });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./js/modules/scroll.js?");

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n   const serviceHeader = document.querySelector('.service-header');\r\n   const serviceHeaderTabs = serviceHeader.querySelectorAll('.service-header-tab');\r\n   const serviceTabs = document.querySelectorAll('.service-tab');\r\n\r\n   serviceHeader.addEventListener('click', (e) => {\r\n      const target = e.target;\r\n\r\n      if (target.closest('.service-header-tab')) {\r\n         const tabItem = target.closest('.service-header-tab');\r\n         serviceHeaderTabs.forEach((tab, index) => {\r\n            if (tab === tabItem) {\r\n               tab.classList.add('active');\r\n               serviceTabs[index].classList.remove('d-none');\r\n            } else {\r\n               tab.classList.remove('active');\r\n               serviceTabs[index].classList.add('d-none');\r\n            }\r\n         });\r\n      }\r\n   });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./js/modules/tabs.js?");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n   const timerHours = document.getElementById('timer-hours');\r\n   const timerMinutes = document.getElementById('timer-minutes');\r\n   const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n   const addZero = (num) => {\r\n      return (num + \"\").length < 2 ? \"0\" + num : num;\r\n   }\r\n\r\n   const getRemainingTime = () => {\r\n      const stopDate = new Date(deadline).getTime();\r\n      const nowDate = new Date().getTime();\r\n      const timeRemaining = (stopDate - nowDate) / 1000;\r\n      const hours = Math.floor(timeRemaining / 60 / 60) ;\r\n      const minutes = Math.floor(timeRemaining / 60) % 60;\r\n      const seconds = Math.floor(timeRemaining) % 60;\r\n      \r\n      return {timeRemaining, hours, minutes, seconds};\r\n   };\r\n\r\n   const updateTime = () => {\r\n      const getTime = getRemainingTime();\r\n\r\n      timerHours.textContent = addZero(getTime.hours < 0 ? 0 : getTime.hours);\r\n      timerMinutes.textContent = addZero(getTime.minutes < 0 ? 0 : getTime.minutes);\r\n      timerSeconds.textContent = addZero(getTime.seconds < 0 ? 0 : getTime.seconds);\r\n\r\n      if (getTime.timeRemaining > 0) {\r\n         let idInterval = setInterval(updateTime, 1000);\r\n      }\r\n   };\r\n\r\n   updateTime();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./js/modules/timer.js?");

/***/ }),

/***/ "./js/modules/validation.js":
/*!**********************************!*\
  !*** ./js/modules/validation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n   const calcBlock = document.querySelector('.calc-block');\r\n   const calcInputs = calcBlock.querySelectorAll('input[type=\"text\"]');\r\n   const forms = document.querySelectorAll('form');\r\n\r\n   const inputNum = (str) => {\r\n      return str.replace(/\\D/gi, \"\");\r\n   };\r\n\r\n   const allValidate = (input) => {\r\n      const strArr = [];\r\n      const type = input.getAttribute(\"type\") || input.getAttribute(\"name\");\r\n      \r\n      let str = input.value;\r\n\r\n      str = str.replace(/^\\-+/gi, \"\").trim();\r\n      str = str.replace(/\\-+$/gi, \"\").trim();\r\n      str = str.replace(/\\s{2,}/gi, \" \").trim();\r\n      str = str.replace(/\\-{2,}/gi, \"-\").trim();\r\n      \r\n      if (type === \"email\") str = str.replace(/[^\\@\\-\\_\\.\\!\\~\\*\\'\\w]/gi, \"\");\r\n\r\n      if (type === \"tel\") str = str.replace(/[^\\-()\\d]/g, \"\");\r\n\r\n      if (type === \"text\" || type === \"user_message\") {\r\n         str = str.replace(/[^а-я\\-\\s]/gi, \"\").trim();\r\n         if (str === \"\") return str;\r\n\r\n         str.split(' ').forEach(item => strArr.push(item[0].toUpperCase() + item.slice(1)));\r\n         str = strArr.join(' ');\r\n      }\r\n\r\n      return str;\r\n   }\r\n\r\n   calcInputs.forEach(input => {\r\n      input.addEventListener('blur', () => {\r\n         input.value = inputNum(input.value);\r\n      });\r\n   });\r\n   \r\n\r\n   forms.forEach(form => {\r\n      const name = form.querySelector('input[name=\"user_name\"]');\r\n      const email = form.querySelector('input[type=\"email\"]');\r\n      const phone = form.querySelector('input[type=\"tel\"]');\r\n      const message = form.querySelector('input[name=\"user_message\"]');\r\n\r\n\r\n      name.addEventListener('blur', () => {\r\n         name.value = allValidate(name);\r\n      });\r\n\r\n      if (message) {\r\n         message.addEventListener('blur', () => {\r\n            message.value = allValidate(message);\r\n         });\r\n      }\r\n\r\n      email.addEventListener('blur', () => {\r\n         email.value = allValidate(email);\r\n      });\r\n\r\n      phone.addEventListener('blur', () => {\r\n         phone.value = allValidate(phone);\r\n      });\r\n      \r\n   });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./js/modules/validation.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;