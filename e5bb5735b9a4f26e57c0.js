/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 37:0-14 */
/***/ ((module) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack://lab4/./node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://lab4/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ ((module) => {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://lab4/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/regenerator-runtime/runtime.js .__esModule */
/*! other exports [maybe provided (runtime-defined)] [no usage info] -> ./node_modules/regenerator-runtime/runtime.js */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack://lab4/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Cart\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _test_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.server */ \"./src/js/test.server.js\");\n\n\n\n\n\n\nvar Cart = /*#__PURE__*/function () {\n  function Cart() {\n    var client = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Cart);\n\n    this.client = client ? client : new _test_server__WEBPACK_IMPORTED_MODULE_4__.default();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Cart, [{\n    key: \"deleteFromCart\",\n    value: function deleteFromCart(size, id) {\n      var cart = this.getCart();\n      var idx = cart.findIndex(function (el) {\n        return el.id == id && el.size == size;\n      });\n\n      if (idx != -1) {\n        // console.log(cart[idx])\n        cart[idx].count -= 1;\n        if (cart[idx].count < 1) cart.splice(idx, 1);\n      }\n\n      localStorage.setItem('cart', JSON.stringify(cart));\n    }\n  }, {\n    key: \"clearCart\",\n    value: function clearCart() {\n      localStorage.setItem('cart', []);\n    }\n  }, {\n    key: \"addToCart\",\n    value: function addToCart(size, id) {\n      var cart = this.getCart();\n      var idx = cart.findIndex(function (el) {\n        return el.id == id && el.size == size;\n      });\n\n      if (idx != -1) {\n        cart[idx].count += 1;\n      } else {\n        cart.push({\n          id: id,\n          size: size,\n          count: 1\n        });\n      }\n\n      localStorage.setItem('cart', JSON.stringify(cart));\n    }\n  }, {\n    key: \"calcTotal\",\n    value: function () {\n      var _calcTotal = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var catalog, cart, total;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.client.getData('catalog');\n\n              case 2:\n                catalog = _context.sent;\n                cart = this.getCart();\n                total = 0;\n                cart.forEach(function (el) {\n                  // console.log(catalog[el.id-1])\n                  total += catalog[el.id - 1].price[el.size] * el.count;\n                });\n                return _context.abrupt(\"return\", total);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function calcTotal() {\n        return _calcTotal.apply(this, arguments);\n      }\n\n      return calcTotal;\n    }()\n  }, {\n    key: \"getCart\",\n    value: function getCart() {\n      if (!localStorage.getItem('cart')) {\n        localStorage.setItem('cart', JSON.stringify([]));\n        return [];\n      } else {\n        return JSON.parse(localStorage.getItem('cart'));\n      }\n    }\n  }]);\n\n  return Cart;\n}();\n\n\n\n//# sourceURL=webpack://lab4/./src/js/cart.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_css_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/css.css */ \"./src/css/css.css\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/js/router.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ \"./src/js/cart.js\");\n\n\n\nvar root = document.querySelector('#root');\nvar router = new _router__WEBPACK_IMPORTED_MODULE_1__.default('root');\nvar cart = new _cart__WEBPACK_IMPORTED_MODULE_2__.default();\nvar links = document.querySelectorAll('.nav-item');\nvar brand = document.querySelector('.navbar-brand');\nvar total = document.querySelector('#cart_total');\nwindow.addEventListener('load', function () {\n  router.render();\n  cart.calcTotal().then(function (tot) {\n    return total.innerHTML = tot;\n  });\n});\nbrand.addEventListener('click', function (ev) {\n  ev.preventDefault();\n  window.history.replaceState(null, null, '#');\n  router.render();\n}); // root.addEventListener('change',()=>total.innerHTML = cart.calcTotal())\n\nlinks.forEach(function (nav_item) {\n  return nav_item.addEventListener('click', function (ev) {\n    ev.preventDefault();\n    window.history.replaceState(null, null, '#' + ev.target.id.split('_')[0]);\n    router.render();\n  });\n});\n\n//# sourceURL=webpack://lab4/./src/js/index.js?");

/***/ }),

/***/ "./src/js/makeCard.js":
/*!****************************!*\
  !*** ./src/js/makeCard.js ***!
  \****************************/
/*! namespace exports */
/*! export makeCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! export makeCartCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! export makeRow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeCard\": () => /* binding */ makeCard,\n/* harmony export */   \"makeRow\": () => /* binding */ makeRow,\n/* harmony export */   \"makeCartCard\": () => /* binding */ makeCartCard\n/* harmony export */ });\nfunction makeCard(pizza) {\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return \"\\n    <div class=\\\"container-fluid mt-4 card-container\\\" >\\n        <div class=\\\"container py-3\\\">\\n            <div class=\\\"card\\\">\\n                <img src=\\\"\".concat(pizza.img, \"\\\" alt=\\\"\\\" class=\\\"card-img-top\\\">\\n                <div class=\\\"card-body\\\">\\n                    <h4 class=\\\"card-title\\\">\\u041F\\u0438\\u0446\\u0446\\u0430 \").concat(pizza.title, \"</h4>\\n                    <p class=\\\"card-text\\\">\").concat(pizza.description, \"</p>\\n                    \").concat(action ? \"<p style=\\\"color:red\\\">Special price -\".concat(action, \"%</p>\") : '', \"\\n                    \").concat(pizza.price.reduce(function (accum, curval, idx) {\n    return accum + \"<button class=\\\"btn btn-success my-1 size-\".concat(idx, \" id-\").concat(pizza.id, \"\\\" >\").concat((idx + 1) * 150, \"\\u0433\\u0440 \").concat(curval, \"</button>\\n                                <br>\");\n  }, ''), \"\\n                    \\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n    \");\n}\nfunction makeRow(elements) {\n  return \"\\n    <div class=\\\"container-fluid\\\">\\n    <div class=\\\"row align-items-center justify-content-center text-center\\\"> \\n    \".concat(elements.reduce(function (accum, el) {\n    return accum + \"<div class=\\\"col-sm-12 col-md-5 col-xl-2 m-3 p-2\\\"> \".concat(el, \"</div>\");\n  }, ''), \"\\n    </div>\\n    </div>\\n    \");\n}\nfunction makeCartCard(pizza, size, count) {\n  return \"\\n    <div class=\\\"container w-100 m-2 text-center bg-light\\\" style=\\\"border-radius:20px\\\">\\n        <div class=\\\"row align-items-center justify-content-between\\\">\\n            <img src=\\\"\".concat(pizza.img, \"\\\" class=\\\"col-2\\\" alt=\\\"\\\">\\n            <div class=\\\"d-flex flex-column col-3\\\">\\n                <h3>\").concat(pizza.title, \"</h3>\\n                <h5>\\u0412\\u0435\\u0441: \").concat(size * 150, \" \\u0433\\u0440\\u0430\\u043C\\u043C</h5>\\n                <h5>\\u0426\\u0435\\u043D\\u0430: \").concat(pizza.price[size], \"</h5>\\n            </div>\\n            <div class=\\\"col-3\\\"> \\u041A\\u043E\\u043B-\\u0432\\u043E: <div id=\\\"count-\").concat(size, \"-\").concat(pizza.id, \"\\\"> \").concat(count, \"</div></div>\\n            <div class=\\\"row col-2\\\">\\n            <button class=\\\"btn btn-success size-\").concat(size, \" id-\").concat(pizza.id, \"\\\">+</button>\\n            <button class=\\\"btn btn-danger size-\").concat(size, \" id-\").concat(pizza.id, \"\\\">-</button>\\n            </div>\\n        </div>\\n    </div>\\n    \");\n}\n\n//# sourceURL=webpack://lab4/./src/js/makeCard.js?");

/***/ }),

/***/ "./src/js/pages/actions_page.js":
/*!**************************************!*\
  !*** ./src/js/pages/actions_page.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ actions_page\n/* harmony export */ });\n/* harmony import */ var _makeCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../makeCard */ \"./src/js/makeCard.js\");\n\nfunction actions_page(data) {\n  var title = '<div class=\"container actions-title\"><h1>Лучшие акции месяца!</h1></div>';\n  var pizzas = [];\n  data.forEach(function (pizza) {\n    pizzas.push((0,_makeCard__WEBPACK_IMPORTED_MODULE_0__.makeCard)(pizza.action_pizza, pizza.action));\n  }); // console.log(pizzas)\n\n  return title + (0,_makeCard__WEBPACK_IMPORTED_MODULE_0__.makeRow)(pizzas);\n}\n\n//# sourceURL=webpack://lab4/./src/js/pages/actions_page.js?");

/***/ }),

/***/ "./src/js/pages/cart_page.js":
/*!***********************************!*\
  !*** ./src/js/pages/cart_page.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ cart_page\n/* harmony export */ });\n/* harmony import */ var _makeCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../makeCard */ \"./src/js/makeCard.js\");\n\nfunction cart_page(data) {\n  var order = ''; // console.log(data)\n\n  data.forEach(function (el) {\n    // console.log(el)\n    order += (0,_makeCard__WEBPACK_IMPORTED_MODULE_0__.makeCartCard)(el.pizza, el.size, el.count);\n  });\n  return \"<div class=\\\"container-fluid row\\\">\\n        <div class=\\\"col-6\\\">\\n        \".concat(order, \"\\n        </div>\\n        <div class=\\\"col-6\\\">\\n        <form id=\\\"mainForm\\\">\\n        <div class=\\\"form-group\\\">\\n        <label for=\\\"email\\\">Email address</label>\\n        <input type=\\\"email\\\" class=\\\"form-control\\\" id=\\\"email\\\"  placeholder=\\\"email\\\" required>\\n        \\n</div>\\n<div class=\\\"form-group\\\">\\n        <label for=\\\"name\\\">\\u0418\\u043C\\u044F</label>\\n        <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"name\\\"  placeholder=\\\"Your name\\\" required>\\n        \\n</div>\\n<div class=\\\"form-group\\\">\\n        <label for=\\\"address\\\">\\u0410\\u0434\\u0440\\u0435\\u0441</label>\\n        <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"address\\\"  placeholder=\\\"\\u0443\\u043B...\\\" required>\\n        \\n</div>\\n<div class=\\\"form-group\\\">\\n    <label for=\\\"payType\\\">Example select</label>\\n    <select class=\\\"form-control\\\" id=\\\"payType\\\">\\n      <option>\\u041D\\u0430\\u043B\\u0438\\u0447\\u043D\\u044B\\u0435</option>\\n      <option>\\u041A\\u0430\\u0440\\u0442\\u043E\\u0439 \\u0447\\u0435\\u0440\\u0435\\u0437 \\u0442\\u0435\\u0440\\u043C\\u0438\\u043D\\u0430\\u043B \\u043A\\u0443\\u0440\\u044C\\u0435\\u0440\\u0430</option>\\n    </select>\\n  </div>\\n<button type=\\\"submit\\\" class=\\\"btn btn-primary\\\" id=\\\"submit\\\">Submit</button>\\n</form>\\n</div>\\n\\n</div>\");\n}\n\n//# sourceURL=webpack://lab4/./src/js/pages/cart_page.js?");

/***/ }),

/***/ "./src/js/pages/catalog_page.js":
/*!**************************************!*\
  !*** ./src/js/pages/catalog_page.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ catalog_page\n/* harmony export */ });\n/* harmony import */ var _makeCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../makeCard */ \"./src/js/makeCard.js\");\n\nfunction catalog_page(data) {\n  var pizzas = [];\n  data.forEach(function (pizza) {\n    pizzas.push((0,_makeCard__WEBPACK_IMPORTED_MODULE_0__.makeCard)(pizza));\n  });\n  var title = '<div class=\"container\"><h1>Наше меню</h1></div>';\n  return title + (0,_makeCard__WEBPACK_IMPORTED_MODULE_0__.makeRow)(pizzas);\n}\n\n//# sourceURL=webpack://lab4/./src/js/pages/catalog_page.js?");

/***/ }),

/***/ "./src/js/pages/main-page.js":
/*!***********************************!*\
  !*** ./src/js/pages/main-page.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ main_page\n/* harmony export */ });\n/* harmony import */ var _html_carousel_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/carousel.html */ \"./src/html/carousel.html\");\n/* harmony import */ var _html_carousel_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_carousel_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _makeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../makeCard */ \"./src/js/makeCard.js\");\n\n\nfunction main_page(data) {\n  var greeting = '<div class=\"container\"> <h1>Добро пожаловать на сайт Domino\\'s Pizza</h1></div>';\n  var title4pizzas = '<div class=\"container m-5 \"><h1>Пиццы месяца</h1></div>';\n  var recommended = [];\n  data.recommended.forEach(function (pizza_id) {\n    recommended.push((0,_makeCard__WEBPACK_IMPORTED_MODULE_1__.makeCard)(data.catalog[pizza_id]));\n  });\n  var titleActions = '<div class=\"container m-3\"><h1>Горячие акции!</h1></div>';\n  var actions = [(0,_makeCard__WEBPACK_IMPORTED_MODULE_1__.makeCard)(data.catalog[data.actions[0].pizza_id], data.actions[0].action), (0,_makeCard__WEBPACK_IMPORTED_MODULE_1__.makeCard)(data.catalog[data.actions[1].pizza_id], data.actions[1].action)];\n  return greeting + (_html_carousel_html__WEBPACK_IMPORTED_MODULE_0___default()) + title4pizzas + (0,_makeCard__WEBPACK_IMPORTED_MODULE_1__.makeRow)(recommended) + titleActions + (0,_makeCard__WEBPACK_IMPORTED_MODULE_1__.makeRow)(actions);\n}\n\n//# sourceURL=webpack://lab4/./src/js/pages/main-page.js?");

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Router\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_actions_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/actions_page */ \"./src/js/pages/actions_page.js\");\n/* harmony import */ var _html_loader_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../html/loader.html */ \"./src/html/loader.html\");\n/* harmony import */ var _html_loader_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_html_loader_html__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _test_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.server */ \"./src/js/test.server.js\");\n/* harmony import */ var _pages_main_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main-page */ \"./src/js/pages/main-page.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart */ \"./src/js/cart.js\");\n/* harmony import */ var _pages_catalog_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/catalog_page */ \"./src/js/pages/catalog_page.js\");\n/* harmony import */ var _pages_cart_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/cart_page */ \"./src/js/pages/cart_page.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar Router = /*#__PURE__*/function () {\n  function Router(rootID) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Router);\n\n    this.root = document.getElementById(rootID);\n    this.client = new _test_server__WEBPACK_IMPORTED_MODULE_6__.default();\n    this.cart = new _cart__WEBPACK_IMPORTED_MODULE_8__.default(this.client);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Router, [{\n    key: \"route\",\n    value: function route(path) {\n      var _this = this;\n\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n      switch (path) {\n        case 'catalog':\n          this.root.innerHTML = (0,_pages_catalog_page__WEBPACK_IMPORTED_MODULE_9__.default)(data);\n          this.makeListenersForButtons();\n          break;\n\n        case 'cart':\n          this.cart.calcTotal().then(function (result) {\n            if (!result) {\n              window.history.replaceState(null, null, '#');\n\n              _this.render();\n            } else {\n              // console.log(result)\n              // console.log(this.cart.calcTotal())\n              _this.root.innerHTML = (0,_pages_cart_page__WEBPACK_IMPORTED_MODULE_10__.default)(data);\n\n              _this.makeListenersForButtons();\n\n              _this.makeListenerForForm();\n            }\n          });\n          break;\n\n        case 'loading':\n          this.root.innerHTML = (_html_loader_html__WEBPACK_IMPORTED_MODULE_5___default());\n          break;\n\n        case 'actions':\n          this.root.innerHTML = (0,_pages_actions_page__WEBPACK_IMPORTED_MODULE_4__.default)(data);\n          this.makeListenersForButtons();\n          break;\n\n        case '':\n          this.root.innerHTML = (0,_pages_main_page__WEBPACK_IMPORTED_MODULE_7__.default)(data);\n          this.makeListenersForButtons();\n          break;\n\n        default:\n          window.history.replaceState(null, null, '#');\n          this.render();\n          break;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var path = window.location.hash.split('#')[1] || ''; // console.log(parseQuery(path))\n\n      this.route('loading');\n      console.log(path);\n\n      if (path != 'cart') {\n        this.client.getData(path).then(function (data) {\n          setTimeout(function () {\n            _this2.route(path.split('/')[0] || '', data);\n          }, 1000); // this.route(path.split('/')[0] || '', data)\n        })[\"catch\"](function () {\n          // console.log(\"error\")\n          _this2.route('error');\n        });\n      } else {\n        var cart = this.cart.getCart();\n        this.client.getData('catalog').then(function (catalog) {\n          // console.log(catalog)\n          var data = [];\n          cart.forEach(function (el) {\n            var data_item = {};\n            data_item.pizza = catalog[el.id - 1];\n            data_item.count = el.count;\n            data_item.size = el.size;\n            data.push(data_item);\n          }); // console.log(data)\n\n          _this2.route('cart', data);\n        });\n      }\n    }\n  }, {\n    key: \"makeListenersForButtons\",\n    value: function makeListenersForButtons() {\n      var _this3 = this;\n\n      var buttonsClasses = ['btn-success', 'btn-danger'];\n      buttonsClasses.forEach(function (btnClss) {\n        var buttons = document.getElementsByClassName(btnClss); // console.log(buttons)\n\n        var total = document.getElementById('cart_total');\n\n        for (var i = 0; i < buttons.length; i++) {\n          buttons[i].addEventListener('click', function (evt) {\n            var id = +evt.target.classList[evt.target.classList.length - 1].split('-')[1];\n            var size = +evt.target.classList[evt.target.classList.length - 2].split('-')[1]; // console.log(id,size)\n\n            var count = document.querySelector(\"#count-\".concat(size, \"-\").concat(id));\n\n            if (btnClss == buttonsClasses[0]) {\n              _this3.cart.addToCart(size, id);\n\n              if (count) count.innerHTML = +count.innerHTML + 1;\n            }\n\n            if (btnClss == buttonsClasses[1]) {\n              _this3.cart.deleteFromCart(size, id);\n\n              if (count) {\n                count.innerHTML = +count.innerHTML - 1;\n                if (+count.innerHTML <= 0) _this3.render();\n              }\n            }\n\n            _this3.cart.calcTotal().then(function (totalpr) {\n              return total.innerHTML = totalpr;\n            });\n          });\n        }\n      });\n    }\n  }, {\n    key: \"makeListenerForForm\",\n    value: function makeListenerForForm() {\n      var _this4 = this;\n\n      var formElem = document.getElementById('mainForm');\n\n      formElem.onsubmit = /*#__PURE__*/function () {\n        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  e.preventDefault();\n\n                  _this4.client.post({\n                    form: new FormData(formElem),\n                    cart: _this4.cart.getCart()\n                  });\n\n                  _this4.cart.clearCart();\n\n                  document.getElementById('cart_total').innerHTML = 0;\n\n                  _this4.render();\n\n                case 5:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }();\n    }\n  }]);\n\n  return Router;\n}();\n\n\n\n//# sourceURL=webpack://lab4/./src/js/router.js?");

/***/ }),

/***/ "./src/js/test.server.js":
/*!*******************************!*\
  !*** ./src/js/test.server.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Client\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Client = /*#__PURE__*/function () {\n  function Client() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Client);\n\n    this._urlBase = 'https://my-json-server.typicode.com/antonfiveis/OKRlab4/';\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Client, [{\n    key: \"post\",\n    value: function () {\n      var _post = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(body) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(this._urlBase + 'orders', {\n                  method: 'POST',\n                  body: body\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function post(_x) {\n        return _post.apply(this, arguments);\n      }\n\n      return post;\n    }()\n  }, {\n    key: \"getData\",\n    value: function () {\n      var _getData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(url) {\n        var urlparts, data, actions, _data, i, action_pizza;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                urlparts = url.split('/');\n                if (urlparts[0] === '') urlparts[0] = 'db';\n\n                if (!(urlparts.length > 1 && !+urlparts[1])) {\n                  _context2.next = 9;\n                  break;\n                }\n\n                _context2.next = 5;\n                return fetch(this._urlBase + urlparts[0]);\n\n              case 5:\n                _context2.next = 7;\n                return _context2.sent.json();\n\n              case 7:\n                data = _context2.sent;\n                return _context2.abrupt(\"return\", data.filter(function (item) {\n                  return item.features.includes(urlparts[1]);\n                }));\n\n              case 9:\n                if (!(urlparts[0] == 'actions')) {\n                  _context2.next = 25;\n                  break;\n                }\n\n                _context2.next = 12;\n                return fetch(this._urlBase + urlparts[0]).then(function (data) {\n                  return data.json();\n                });\n\n              case 12:\n                actions = _context2.sent;\n                console.log(actions);\n                _data = [];\n                i = 0;\n\n              case 16:\n                if (!(i < actions.length)) {\n                  _context2.next = 24;\n                  break;\n                }\n\n                _context2.next = 19;\n                return fetch(this._urlBase + 'catalog/' + actions[i].pizza_id).then(function (data) {\n                  return data.json();\n                });\n\n              case 19:\n                action_pizza = _context2.sent;\n\n                _data.push({\n                  action_pizza: action_pizza,\n                  action: actions[i].action\n                });\n\n              case 21:\n                i++;\n                _context2.next = 16;\n                break;\n\n              case 24:\n                return _context2.abrupt(\"return\", _data);\n\n              case 25:\n                return _context2.abrupt(\"return\", fetch(this._urlBase + urlparts[0]).then(function (data) {\n                  return data.json();\n                }));\n\n              case 26:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function getData(_x2) {\n        return _getData.apply(this, arguments);\n      }\n\n      return getData;\n    }()\n  }]);\n\n  return Client;\n}();\n\n\n\n//# sourceURL=webpack://lab4/./src/js/test.server.js?");

/***/ }),

/***/ "./src/pictures/1.jpg":
/*!****************************!*\
  !*** ./src/pictures/1.jpg ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d0cfaedd1f073aefeea3b2dc0b14ba69.jpg\");\n\n//# sourceURL=webpack://lab4/./src/pictures/1.jpg?");

/***/ }),

/***/ "./src/pictures/2.jpg":
/*!****************************!*\
  !*** ./src/pictures/2.jpg ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"59402e4f5e6441b785c7d7de0847c1a9.jpg\");\n\n//# sourceURL=webpack://lab4/./src/pictures/2.jpg?");

/***/ }),

/***/ "./src/pictures/3.jpg":
/*!****************************!*\
  !*** ./src/pictures/3.jpg ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0e4fd7befcd367a79db7ace5ef3aee16.jpg\");\n\n//# sourceURL=webpack://lab4/./src/pictures/3.jpg?");

/***/ }),

/***/ "./src/pictures/4.jpg":
/*!****************************!*\
  !*** ./src/pictures/4.jpg ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ae902d0bea7265be72d03f7246646706.jpg\");\n\n//# sourceURL=webpack://lab4/./src/pictures/4.jpg?");

/***/ }),

/***/ "./src/pictures/5.jpg":
/*!****************************!*\
  !*** ./src/pictures/5.jpg ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e7124088be729111997cf7de784b1356.jpg\");\n\n//# sourceURL=webpack://lab4/./src/pictures/5.jpg?");

/***/ }),

/***/ "./src/html/carousel.html":
/*!********************************!*\
  !*** ./src/html/carousel.html ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 16:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\nvar ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../pictures/1.jpg */ \"./src/pictures/1.jpg\");\nvar ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../pictures/2.jpg */ \"./src/pictures/2.jpg\");\nvar ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ../pictures/3.jpg */ \"./src/pictures/3.jpg\");\nvar ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ../pictures/4.jpg */ \"./src/pictures/4.jpg\");\nvar ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ../pictures/5.jpg */ \"./src/pictures/5.jpg\");\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);\nvar code = \"<div class=\\\"container carousel-container \\\">\\r\\n    <div id=\\\"mainCarousel\\\" class=\\\"carousel slide\\\" data-ride='carousel'>\\r\\n        <ol class=\\\"carousel-indicators\\\">\\r\\n            <li class=\\\"active\\\" data-target=\\\"#mainCarousel\\\" data-slide-to=\\\"0\\\"></li>\\r\\n            <li data-target=\\\"#mainCarousel\\\" data-slide-to=\\\"1\\\"></li>\\r\\n            <li data-target=\\\"#mainCarousel\\\" data-slide-to=\\\"2\\\"></li>\\r\\n            <li data-target=\\\"#mainCarousel\\\" data-slide-to=\\\"3\\\"></li>\\r\\n            <li data-target=\\\"#mainCarousel\\\" data-slide-to=\\\"4\\\"></li>\\r\\n        </ol>\\r\\n        <div class=\\\"carousel-inner\\\">\\r\\n            <div class=\\\"carousel-item active\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" class=\\\"d-block w-100\\\">\\r\\n            </div>\\r\\n            <div class=\\\"carousel-item\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" class=\\\"d-block w-100\\\">\\r\\n            </div>\\r\\n            <div class=\\\"carousel-item\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" class=\\\"d-block w-100\\\">\\r\\n            </div>\\r\\n            <div class=\\\"carousel-item\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\" class=\\\"d-block w-100\\\">\\r\\n            </div>\\r\\n            <div class=\\\"carousel-item\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" class=\\\"d-block w-100\\\">\\r\\n            </div>\\r\\n        </div>\\r\\n        <a href=\\\"#mainCarousel\\\" class=\\\"carousel-control-prev\\\" role=\\\"button\\\" data-slide=\\\"prev\\\">\\r\\n            <span class=\\\"carousel-control-prev-icon\\\" aria-hidden=\\\"true\\\"></span>\\r\\n        </a>\\r\\n        <a href=\\\"#mainCarousel\\\" class=\\\"carousel-control-next\\\" role=\\\"button\\\" data-slide=\\\"next\\\">\\r\\n            <span class=\\\"carousel-control-next-icon\\\" aria-hidden=\\\"true\\\"></span>\\r\\n        </a>\\r\\n    </div>\\r\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://lab4/./src/html/carousel.html?");

/***/ }),

/***/ "./src/html/loader.html":
/*!******************************!*\
  !*** ./src/html/loader.html ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"d-flex align-items-center loader-container\\\">\\r\\n    <div class=\\\"loadingio-spinner-bean-eater-s012rtor8r\\\"><div class=\\\"ldio-z5309jiu3qm\\\">\\r\\n    <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>\\r\\n</div></div></div>\\r\\n\\r\\n<style type=\\\"text/css\\\">\\r\\n    @keyframes ldio-z5309jiu3qm-1 {\\r\\n        0% { transform: rotate(0deg) }\\r\\n        50% { transform: rotate(-45deg) }\\r\\n        100% { transform: rotate(0deg) }\\r\\n    }\\r\\n    @keyframes ldio-z5309jiu3qm-2 {\\r\\n        0% { transform: rotate(180deg) }\\r\\n        50% { transform: rotate(225deg) }\\r\\n        100% { transform: rotate(180deg) }\\r\\n    }\\r\\n    .ldio-z5309jiu3qm > div:nth-child(2) {\\r\\n        transform: translate(-15px,0);\\r\\n    }\\r\\n    .ldio-z5309jiu3qm > div:nth-child(2) div {\\r\\n        position: absolute;\\r\\n        top: 40.599999999999994px;\\r\\n        left: 40.599999999999994px;\\r\\n        width: 121.79999999999998px;\\r\\n        height: 60.89999999999999px;\\r\\n        border-radius: 121.79999999999998px 121.79999999999998px 0 0;\\r\\n        background: #1c4595;\\r\\n        animation: ldio-z5309jiu3qm-1 0.9900990099009901s linear infinite;\\r\\n        transform-origin: 60.89999999999999px 60.89999999999999px\\r\\n    }\\r\\n    .ldio-z5309jiu3qm > div:nth-child(2) div:nth-child(2) {\\r\\n        animation: ldio-z5309jiu3qm-2 0.9900990099009901s linear infinite\\r\\n    }\\r\\n    .ldio-z5309jiu3qm > div:nth-child(2) div:nth-child(3) {\\r\\n        transform: rotate(-90deg);\\r\\n        animation: none;\\r\\n    }@keyframes ldio-z5309jiu3qm-3 {\\r\\n         0% { transform: translate(192.85px,0); opacity: 0 }\\r\\n         20% { opacity: 1 }\\r\\n         100% { transform: translate(71.05px,0); opacity: 1 }\\r\\n     }\\r\\n    .ldio-z5309jiu3qm > div:nth-child(1) {\\r\\n        display: block;\\r\\n    }\\r\\n    .ldio-z5309jiu3qm > div:nth-child(1) div {\\r\\n        position: absolute;\\r\\n        top: 93.38px;\\r\\n        left: -8.12px;\\r\\n        width: 16.24px;\\r\\n        height: 16.24px;\\r\\n        border-radius: 50%;\\r\\n        background: #e76a24;\\r\\n        animation: ldio-z5309jiu3qm-3 0.9900990099009901s linear infinite\\r\\n    }\\r\\n    .ldio-z5309jiu3qm > div:nth-child(1) div:nth-child(1) { animation-delay: -0.6767000000000001s }\\r\\n    .ldio-z5309jiu3qm > div:nth-child(1) div:nth-child(2) { animation-delay: -0.33330000000000004s }\\r\\n    .ldio-z5309jiu3qm > div:nth-child(1) div:nth-child(3) { animation-delay: 0s }\\r\\n    .loadingio-spinner-bean-eater-s012rtor8r {\\r\\n        width: 203px;\\r\\n        height: 203px;\\r\\n        margin: auto;\\r\\n        display: inline-block;\\r\\n        overflow: hidden;\\r\\n\\r\\n    }\\r\\n    .ldio-z5309jiu3qm {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        position: relative;\\r\\n        transform: translateZ(0) scale(1);\\r\\n        backface-visibility: hidden;\\r\\n        transform-origin: 0 0; /* see note above */\\r\\n    }\\r\\n    .ldio-z5309jiu3qm div { box-sizing: content-box; }\\r\\n    /* generated by https://loading.io/ */\\r\\n</style>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://lab4/./src/html/loader.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://lab4/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/css.css":
/*!*************************!*\
  !*** ./src/css/css.css ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab4/./src/css/css.css?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 732:31-45 */
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://lab4/./node_modules/regenerator-runtime/runtime.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;