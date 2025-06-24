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

/***/ "./src/assets/images/cheese.png":
/*!**************************************!*\
  !*** ./src/assets/images/cheese.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cheese.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/cheese.png?");

/***/ }),

/***/ "./src/assets/images/hawaiian.png":
/*!****************************************!*\
  !*** ./src/assets/images/hawaiian.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/hawaiian.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/hawaiian.png?");

/***/ }),

/***/ "./src/assets/images/margherita.png":
/*!******************************************!*\
  !*** ./src/assets/images/margherita.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/margherita.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/margherita.png?");

/***/ }),

/***/ "./src/assets/images/pepperoni.png":
/*!*****************************************!*\
  !*** ./src/assets/images/pepperoni.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/pepperoni.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/pepperoni.png?");

/***/ }),

/***/ "./src/assets/images/pizza.png":
/*!*************************************!*\
  !*** ./src/assets/images/pizza.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/pizza.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/pizza.png?");

/***/ }),

/***/ "./src/assets/images/veggie.png":
/*!**************************************!*\
  !*** ./src/assets/images/veggie.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/veggie.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/veggie.png?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getContact)\n/* harmony export */ });\nclass Contact {\r\n  getContact() {\r\n    this.createElements();\r\n    this.setClasses();\r\n    this.setAttributes();\r\n    this.bindNodes();\r\n    return this.section;\r\n  }\r\n\r\n  createElements() {\r\n    this.section = document.createElement(\"main\");\r\n    this.container = document.createElement(\"div\");\r\n    this.title = document.createElement(\"h2\");\r\n    this.description = document.createElement(\"p\");\r\n\r\n    this.form = document.createElement(\"form\");\r\n\r\n    this.nameField = document.createElement(\"input\");\r\n    this.emailField = document.createElement(\"input\");\r\n    this.messageField = document.createElement(\"textarea\");\r\n    this.submitButton = document.createElement(\"button\");\r\n\r\n    this.address = document.createElement(\"div\");\r\n    this.phone = document.createElement(\"p\");\r\n    this.hours = document.createElement(\"p\");\r\n  }\r\n\r\n  setClasses() {\r\n    this.section.classList.add(\"section\", \"has-background-warning-light\");\r\n    this.container.classList.add(\"container\");\r\n    this.title.classList.add(\"title\", \"is-2\", \"has-text-centered\", \"mb-4\");\r\n    this.description.classList.add(\"subtitle\", \"has-text-centered\", \"mb-5\");\r\n\r\n    this.form.classList.add(\"box\");\r\n\r\n    this.nameField.classList.add(\"input\", \"mb-3\");\r\n    this.emailField.classList.add(\"input\", \"mb-3\");\r\n    this.messageField.classList.add(\"textarea\", \"mb-3\");\r\n    this.submitButton.classList.add(\"button\", \"is-danger\");\r\n\r\n    this.address.classList.add(\"mt-5\", \"has-text-centered\");\r\n    this.phone.classList.add(\"mb-2\");\r\n    this.hours.classList.add(\"mb-2\");\r\n  }\r\n\r\n  setAttributes() {\r\n    this.title.textContent = \"Contact Us\";\r\n    this.description.textContent = \"Got a question? Want to order over the phone? We’d love to hear from you!\";\r\n\r\n    this.nameField.placeholder = \"Your Name\";\r\n    this.emailField.placeholder = \"Your Email\";\r\n    this.messageField.placeholder = \"Your Message\";\r\n\r\n    this.submitButton.type = \"submit\";\r\n    this.submitButton.textContent = \"Send Message\";\r\n\r\n    this.phone.textContent = \"📞 Phone: (123) 456-7890\";\r\n    this.hours.textContent = \"🕐 Hours: Mon–Sun, 11am–11pm\";\r\n    this.address.innerHTML = `<p>📍 Address: 123 Pizza Street, Mozzarella City</p>`;\r\n  }\r\n\r\n  bindNodes() {\r\n    this.section.appendChild(this.container);\r\n    this.container.appendChild(this.title);\r\n    this.container.appendChild(this.description);\r\n\r\n    this.form.appendChild(this.nameField);\r\n    this.form.appendChild(this.emailField);\r\n    this.form.appendChild(this.messageField);\r\n    this.form.appendChild(this.submitButton);\r\n    this.container.appendChild(this.form);\r\n\r\n    this.address.appendChild(this.phone);\r\n    this.address.appendChild(this.hours);\r\n    this.container.appendChild(this.address);\r\n  }\r\n}\r\n\r\nfunction getContact() {\r\n  const contact = new Contact();\r\n  return contact.getContact();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/pizza.png */ \"./src/assets/images/pizza.png\");\n\r\n\r\nclass Home {\r\n  getHome() {\r\n    this.createElements();\r\n    this.setClasses();\r\n    this.setAttributes();\r\n    this.bindNodes();\r\n    return this.section;\r\n  }\r\n\r\n  createElements() {\r\n    this.section = document.createElement(\"main\");\r\n    this.heroBody = document.createElement(\"div\");\r\n    this.columns = document.createElement(\"div\");\r\n    this.column1 = document.createElement(\"div\");\r\n    this.column2 = document.createElement(\"div\");\r\n\r\n    // New wrapper for centering title, img, subtitle together\r\n    this.wrapper = document.createElement(\"div\");\r\n\r\n    this.title = document.createElement(\"p\");\r\n    this.subtitle = document.createElement(\"p\");\r\n    this.img = document.createElement(\"img\");\r\n  }\r\n\r\n  setClasses() {\r\n    this.section.classList.add(\"hero\");\r\n    this.heroBody.classList.add(\"hero-body\");\r\n    this.columns.classList.add(\"columns\");\r\n    this.column1.classList.add(\"column\");\r\n    this.column2.classList.add(\"column\");\r\n\r\n    this.wrapper.classList.add(\"wrapper\");\r\n    this.img.classList.add(\"is-rounded\");\r\n    this.title.classList.add(\"title\", \"is-size-1\");\r\n    this.subtitle.classList.add(\"subtitle\", \"mt-3\");\r\n  }\r\n\r\n  setAttributes() {\r\n    this.img.src = _assets_images_pizza_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    this.img.alt = \"pizza man\";\r\n    this.title.innerHTML = \"Welcome<br>to<br>Paradise!\";\r\n    this.subtitle.textContent = \"Fresh from the oven to your heart.\";\r\n  }\r\n\r\n  bindNodes() {\r\n    this.section.appendChild(this.heroBody);\r\n    this.heroBody.appendChild(this.columns);\r\n    this.columns.appendChild(this.column1);\r\n    this.columns.appendChild(this.column2);\r\n\r\n    // All content is added into wrapper\r\n    this.wrapper.appendChild(this.title);\r\n    this.wrapper.appendChild(this.img);\r\n    this.wrapper.appendChild(this.subtitle);\r\n\r\n    // Wrapper goes into the column\r\n    this.column1.appendChild(this.wrapper);\r\n  }\r\n}\r\n\r\nfunction getHome() {\r\n  const home = new Home();\r\n  return home.getHome();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n// Buttons\r\nconst homeButton = document.getElementById(\"home\");\r\nconst contactButton = document.getElementById(\"contact\");\r\nconst menuButton = document.getElementById(\"menu\");\r\n\r\n// Link array\r\nconst links = [homeButton, contactButton, menuButton];\r\n\r\n// Main content area\r\nconst main = document.querySelector(\".main\");\r\n\r\nconst switchPage = (e) => {\r\n  e.preventDefault();\r\n  const selection = e.target.id;\r\n\r\n  // Clear main content\r\n  main.innerHTML = \"\";\r\n\r\n  // Remove 'tab' class from all buttons\r\n  links.forEach((btn) => btn.classList.remove(\"tab\"));\r\n\r\n  // Add active class and load selected content\r\n  switch (selection) {\r\n    case \"home\":\r\n      homeButton.classList.add(\"tab\");\r\n      main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n      break;\r\n    case \"contact\":\r\n      contactButton.classList.add(\"tab\");\r\n      main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n      break;\r\n    case \"menu\":\r\n      menuButton.classList.add(\"tab\");\r\n      main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n      break;\r\n  }\r\n};\r\n\r\n// Add click listeners\r\nlinks.forEach((element) => {\r\n  element.addEventListener(\"click\", switchPage);\r\n});\r\n\r\n// Initial load\r\nmain.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\nhomeButton.classList.add(\"tab\");\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_margherita_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/margherita.png */ \"./src/assets/images/margherita.png\");\n/* harmony import */ var _assets_images_hawaiian_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/hawaiian.png */ \"./src/assets/images/hawaiian.png\");\n/* harmony import */ var _assets_images_veggie_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/veggie.png */ \"./src/assets/images/veggie.png\");\n/* harmony import */ var _assets_images_cheese_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/cheese.png */ \"./src/assets/images/cheese.png\");\n/* harmony import */ var _assets_images_pepperoni_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/pepperoni.png */ \"./src/assets/images/pepperoni.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Menu {\r\n  getMenu() {\r\n    this.createElements();\r\n    this.setClasses();\r\n    this.setAttributes();\r\n    this.bindNodes();\r\n    return this.section;\r\n  }\r\n\r\n  createElements() {\r\n    this.section = document.createElement(\"main\");\r\n    this.container = document.createElement(\"div\");\r\n    this.title = document.createElement(\"h2\");\r\n\r\n    this.menuList = [\r\n      { name: \"Margherita\", description: \"Classic with tomato, mozzarella, and basil.\", image: _assets_images_margherita_png__WEBPACK_IMPORTED_MODULE_0__ },\r\n      { name: \"Pepperoni\", description: \"Loaded with pepperoni and cheese.\", image: _assets_images_pepperoni_png__WEBPACK_IMPORTED_MODULE_4__ },\r\n      { name: \"Veggie Delight\", description: \"A garden mix of fresh vegetables.\", image: _assets_images_veggie_png__WEBPACK_IMPORTED_MODULE_2__ },\r\n      { name: \"Four Cheese\", description: \"Mozzarella, parmesan, gorgonzola, and goat cheese.\", image: _assets_images_cheese_png__WEBPACK_IMPORTED_MODULE_3__ },\r\n      { name: \"Hawaiian\", description: \"Ham, pineapple, and melty cheese.\", image: _assets_images_hawaiian_png__WEBPACK_IMPORTED_MODULE_1__ }\r\n    ];\r\n\r\n    this.items = this.menuList.map(pizza => {\r\n      const item = document.createElement(\"div\");\r\n      const name = document.createElement(\"h3\");\r\n      const desc = document.createElement(\"p\");\r\n      const img = document.createElement(\"img\");\r\n\r\n      name.textContent = pizza.name;\r\n      desc.textContent = pizza.description;\r\n      img.src = pizza.image;\r\n      img.alt = pizza.name;\r\n      img.classList.add(\"menu-image\");\r\n\r\n      item.appendChild(img);\r\n      item.appendChild(name);\r\n      item.appendChild(desc);\r\n      return item;\r\n    });\r\n  }\r\n\r\n  setClasses() {\r\n    this.section.classList.add(\"section\", \"has-background-light\");\r\n    this.container.classList.add(\"container\", \"has-text-centered\");\r\n    this.title.classList.add(\"title\", \"is-2\", \"mb-5\");\r\n\r\n    this.items.forEach(item => {\r\n      item.classList.add(\"box\", \"mb-4\");\r\n      item.querySelector(\"h3\").classList.add(\"title\", \"is-4\", \"has-text-danger-dark\");\r\n      item.querySelector(\"p\").classList.add(\"subtitle\", \"is-6\");\r\n    });\r\n  }\r\n\r\n  setAttributes() {\r\n    this.title.textContent = \"Our Pizza Menu\";\r\n  }\r\n\r\n  bindNodes() {\r\n    this.section.appendChild(this.container);\r\n    this.container.appendChild(this.title);\r\n    this.items.forEach(item => {\r\n      this.container.appendChild(item);\r\n    });\r\n  }\r\n}\r\n\r\nfunction getMenu() {\r\n  const menu = new Menu();\r\n  return menu.getMenu();\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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