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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _js_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/settings */ \"./src/js/settings.js\");\n/* harmony import */ var _js_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/control */ \"./src/js/control.js\");\n/* harmony import */ var _js_draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/draw */ \"./src/js/draw.js\");\n/* harmony import */ var _images_vk_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/vk.svg */ \"./src/images/vk.svg\");\n/* harmony import */ var _images_instagram_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/instagram.svg */ \"./src/images/instagram.svg\");\n/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/github.svg */ \"./src/images/github.svg\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://country/./src/index.js?");

/***/ }),

/***/ "./src/js/cnv.js":
/*!***********************!*\
  !*** ./src/js/cnv.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx)\n/* harmony export */ });\nconst canvas = document.getElementById('cnv');\nconst ctx = canvas.getContext('2d');\n\n//# sourceURL=webpack://country/./src/js/cnv.js?");

/***/ }),

/***/ "./src/js/control.js":
/*!***************************!*\
  !*** ./src/js/control.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/main */ \"./src/js/map/main.js\");\n/* harmony import */ var _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/get_dom_id */ \"./src/js/menu/get_dom_id.js\");\n\n\ndocument.addEventListener('keydown', function (event) {\n  switch (event.code) {\n    case 'KeyQ':\n      if (_menu_get_dom_id__WEBPACK_IMPORTED_MODULE_1__.dom_id.position.style.display == 'none') {\n        _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_1__.dom_id.position.style.display = 'block';\n        _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_1__.dom_id.fps.style.display = 'block';\n      } else {\n        _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_1__.dom_id.position.style.display = 'none';\n        _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_1__.dom_id.fps.style.display = 'none';\n      }\n\n      break;\n\n    case 'KeyW':\n      _map_main__WEBPACK_IMPORTED_MODULE_0__.map.position.up = true;\n      break;\n\n    case 'KeyS':\n      _map_main__WEBPACK_IMPORTED_MODULE_0__.map.position.down = true;\n      break;\n\n    case 'KeyA':\n      _map_main__WEBPACK_IMPORTED_MODULE_0__.map.position.left = true;\n      break;\n\n    case 'KeyD':\n      _map_main__WEBPACK_IMPORTED_MODULE_0__.map.position.right = true;\n      break;\n  }\n});\ndocument.addEventListener('keyup', function (event) {\n  switch (event.code) {\n    case 'KeyW':\n      _map_main__WEBPACK_IMPORTED_MODULE_0__.map.position.up = false;\n      break;\n\n    case 'KeyS':\n      _map_main__WEBPACK_IMPORTED_MODULE_0__.map.position.down = false;\n      break;\n\n    case 'KeyA':\n      _map_main__WEBPACK_IMPORTED_MODULE_0__.map.position.left = false;\n      break;\n\n    case 'KeyD':\n      _map_main__WEBPACK_IMPORTED_MODULE_0__.map.position.right = false;\n      break;\n  }\n});\n\n//# sourceURL=webpack://country/./src/js/control.js?");

/***/ }),

/***/ "./src/js/draw.js":
/*!************************!*\
  !*** ./src/js/draw.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _map_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/main */ \"./src/js/map/main.js\");\n/* harmony import */ var _menu_fun_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/fun_dom */ \"./src/js/menu/fun_dom.js\");\n/* harmony import */ var _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/get_dom_id */ \"./src/js/menu/get_dom_id.js\");\n/* harmony import */ var _map_generate_world__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/generate_world */ \"./src/js/map/generate_world.js\");\n/* harmony import */ var _menu_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/loading */ \"./src/js/menu/loading.js\");\n\n\n\n\n\n\n_menu_fun_dom__WEBPACK_IMPORTED_MODULE_2__.fun_dom.check();\nlet fps;\n\nfunction draw() {\n  if (localStorage.getItem(\"player\")) {\n    _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.continue_game.style.display = 'block';\n  }\n\n  _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n  _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = 'blue';\n  _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(0, 0, 500, 500);\n  _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.fps.innerHTML = 'fps: ' + fps;\n\n  if (_menu_loading__WEBPACK_IMPORTED_MODULE_5__.loading.game) {\n    _map_main__WEBPACK_IMPORTED_MODULE_1__.map.draw();\n    _map_main__WEBPACK_IMPORTED_MODULE_1__.map.check();\n    _map_main__WEBPACK_IMPORTED_MODULE_1__.map.position.check();\n  } else {\n    _map_generate_world__WEBPACK_IMPORTED_MODULE_4__.lends.check();\n    _menu_loading__WEBPACK_IMPORTED_MODULE_5__.loading.draw();\n  }\n}\n\nconst times = [];\n\nfunction refreshLoop() {\n  draw();\n  window.requestAnimationFrame(() => {\n    const now = performance.now();\n\n    while (times.length > 0 && times[0] <= now - 1000) {\n      times.shift();\n    }\n\n    times.push(now);\n    fps = times.length;\n    refreshLoop();\n  });\n}\n\nrefreshLoop();\n\n//# sourceURL=webpack://country/./src/js/draw.js?");

/***/ }),

/***/ "./src/js/map/generate_world.js":
/*!**************************************!*\
  !*** ./src/js/map/generate_world.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lends\": () => (/* binding */ lends),\n/* harmony export */   \"Lend\": () => (/* binding */ Lend)\n/* harmony export */ });\n/* harmony import */ var _menu_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/loading */ \"./src/js/menu/loading.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ \"./src/js/settings.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/js/map/main.js\");\n\n\n\nconst lends = {\n  array: [],\n\n  check() {\n    for (let i = 0; i < this.array.length; i++) {\n      const lend = this.array[i];\n      lend.check();\n    }\n  }\n\n};\nclass Lend {\n  constructor(index) {\n    this.x = _settings__WEBPACK_IMPORTED_MODULE_1__.settings.lend.x;\n    this.y = _settings__WEBPACK_IMPORTED_MODULE_1__.settings.lend.y;\n    this.index = index;\n    this.local = true;\n    this.random = Math.floor(Math.random() * 4);\n  }\n\n  static createWord(quantity) {\n    for (let i = 0; i < quantity; i++) {\n      lends.array[i] = new Lend(i);\n    }\n  }\n\n  check() {\n    if (!this.local) return;\n\n    switch (this.random) {\n      case 0:\n        this.x += _main__WEBPACK_IMPORTED_MODULE_2__.map.cellWidth;\n        break;\n\n      case 1:\n        this.x -= _main__WEBPACK_IMPORTED_MODULE_2__.map.cellWidth;\n        break;\n\n      case 2:\n        this.y += _main__WEBPACK_IMPORTED_MODULE_2__.map.cellHeight;\n        break;\n\n      case 3:\n        this.y -= _main__WEBPACK_IMPORTED_MODULE_2__.map.cellHeight;\n        break;\n    }\n\n    for (let i = 0; i < _main__WEBPACK_IMPORTED_MODULE_2__.map.array.length; i++) {\n      this.cell = _main__WEBPACK_IMPORTED_MODULE_2__.map.array[i];\n\n      if (this.cell.x == this.x && this.cell.y == this.y) {\n        if (this.cell.who == 'cell') {\n          this.cell.who = 'lend';\n          this.local = false;\n          _menu_loading__WEBPACK_IMPORTED_MODULE_0__.loading.quantity += _menu_loading__WEBPACK_IMPORTED_MODULE_0__.loading.width;\n        } else {\n          this.random = Math.floor(Math.random() * 4);\n        }\n      }\n    }\n  }\n\n}\n\n//# sourceURL=webpack://country/./src/js/map/generate_world.js?");

/***/ }),

/***/ "./src/js/map/main.js":
/*!****************************!*\
  !*** ./src/js/map/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"Cell\": () => (/* binding */ Cell)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/get_dom_id */ \"./src/js/menu/get_dom_id.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings */ \"./src/js/settings.js\");\n\n\n\nlet map = {\n  cellWidth: 50,\n  cellHeight: 50,\n  width: [_settings__WEBPACK_IMPORTED_MODULE_2__.settings.cell.width, _settings__WEBPACK_IMPORTED_MODULE_2__.settings.cell.width],\n  height: [_settings__WEBPACK_IMPORTED_MODULE_2__.settings.cell.height, _settings__WEBPACK_IMPORTED_MODULE_2__.settings.cell.height],\n  x: [_settings__WEBPACK_IMPORTED_MODULE_2__.settings.cell.x, _settings__WEBPACK_IMPORTED_MODULE_2__.settings.cell.x],\n  y: [_settings__WEBPACK_IMPORTED_MODULE_2__.settings.cell.y, _settings__WEBPACK_IMPORTED_MODULE_2__.settings.cell.y],\n  array: [],\n  position: {\n    up: false,\n    down: false,\n    right: false,\n    left: false,\n\n    check() {\n      if (this.up) {\n        for (let i = 0; i < map.array.length; i++) {\n          const cell = map.array[i];\n          cell.y += 10;\n        }\n      }\n\n      if (this.down) {\n        for (let i = 0; i < map.array.length; i++) {\n          const cell = map.array[i];\n          cell.y -= 10;\n        }\n      }\n\n      if (this.left) {\n        for (let i = 0; i < map.array.length; i++) {\n          const cell = map.array[i];\n          cell.x += 10;\n        }\n      }\n\n      if (this.right) {\n        for (let i = 0; i < map.array.length; i++) {\n          const cell = map.array[i];\n          cell.x -= 10;\n        }\n      }\n    }\n\n  },\n\n  create() {\n    map.x[0] = map.x[1];\n    map.y[0] = map.y[1];\n    map.width[1] = map.width[0];\n    Cell.create();\n  },\n\n  check() {\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.canvas.onmousemove = function (e) {\n      var x = e.pageX - e.target.offsetLeft,\n          y = e.pageY - e.target.offsetTop;\n\n      for (let i = 0; i < map.array.length; i++) {\n        const cell = map.array[i];\n\n        if (x >= cell.x && x <= cell.x2 && y >= cell.y && y <= cell.y2) {\n          _menu_get_dom_id__WEBPACK_IMPORTED_MODULE_1__.dom_id.position.innerHTML = 'x: ' + x + ' y: ' + y + ' index cell: ' + cell.index + ' who cell: ' + cell.who;\n          cell.colar = '#90EE90';\n        } else {\n          cell.colar = 'white';\n        }\n      }\n    };\n  },\n\n  draw() {\n    for (let i = 0; i < map.array.length; i++) {\n      if (map.array[i].x >= -200 && map.array[i].x <= 700 && map.array[i].y >= -200 && map.array[i].y <= 700) map.array[i].draw();\n    }\n  }\n\n};\nclass Cell {\n  constructor(x, y, index) {\n    this.index = index;\n    this.x = x;\n    this.y = y;\n    this.colar = 'white';\n    this.who = 'cell';\n  }\n\n  static create() {\n    for (let i = 0; i < map.width[0] * map.height[0] + 1; i++) {\n      if (!i == 0) {\n        map.array[i] = new Cell(map.x[0], map.y[0], i);\n        map.x[0] += map.cellWidth;\n\n        if (i == map.width[1]) {\n          map.x[0] = map.x[1];\n          map.y[0] += map.cellHeight;\n          map.width[1] += map.width[0];\n        }\n      } else {\n        map.array[i] = new Cell(10000000000000000000, 10000000000000000000, i);\n      }\n    }\n  }\n\n  draw() {\n    if (this.who == 'lend') {\n      this.colar = 'green';\n    }\n\n    this.x2 = this.x + map.cellWidth;\n    this.y2 = this.y + map.cellHeight;\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.colar;\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(this.x, this.y, map.cellWidth, map.cellHeight);\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeRect(this.x, this.y, map.cellWidth, map.cellHeight);\n  }\n\n}\n\n//# sourceURL=webpack://country/./src/js/map/main.js?");

/***/ }),

/***/ "./src/js/map/save.js":
/*!****************************!*\
  !*** ./src/js/map/save.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStorageReturn\": () => (/* binding */ localStorageReturn)\n/* harmony export */ });\n/* harmony import */ var _menu_fun_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/fun_dom */ \"./src/js/menu/fun_dom.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/js/map/main.js\");\n\n\nfunction localStorageReturn() {\n  let storage = {\n    map: [],\n    name_country: _menu_fun_dom__WEBPACK_IMPORTED_MODULE_0__.name_country\n  };\n\n  for (let i = 0; i < _main__WEBPACK_IMPORTED_MODULE_1__.map.width[0] * _main__WEBPACK_IMPORTED_MODULE_1__.map.height[0] + 1; i++) {\n    storage.map[i] = _main__WEBPACK_IMPORTED_MODULE_1__.map.array[i];\n  }\n\n  localStorage.setItem(\"player\", JSON.stringify(storage));\n} //localStorage.clear();\n\n//# sourceURL=webpack://country/./src/js/map/save.js?");

/***/ }),

/***/ "./src/js/menu/fun_dom.js":
/*!********************************!*\
  !*** ./src/js/menu/fun_dom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"name_country\": () => (/* binding */ name_country),\n/* harmony export */   \"fun_dom\": () => (/* binding */ fun_dom)\n/* harmony export */ });\n/* harmony import */ var _map_generate_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/generate_world */ \"./src/js/map/generate_world.js\");\n/* harmony import */ var _map_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/main */ \"./src/js/map/main.js\");\n/* harmony import */ var _map_save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/save */ \"./src/js/map/save.js\");\n/* harmony import */ var _get_dom_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get_dom_id */ \"./src/js/menu/get_dom_id.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading */ \"./src/js/menu/loading.js\");\n\n\n\n\n\nlet size;\nlet name_country;\nconst fun_dom = {\n  get_id: {\n    start_menu: document.getElementById(\"button_new_game\"),\n    create: document.getElementById(\"button_create_country\"),\n    about_developer_menu: document.getElementById(\"button_about_developer\"),\n    about_developer_back: document.getElementById(\"button_back_about_developer\"),\n    start_back: document.getElementById(\"button_back_start\"),\n    cnv_div_back: document.getElementById(\"button_back_cnv_div\"),\n    continue_game: document.getElementById(\"button_continue_game\"),\n    save_game_yes: document.getElementById('button_save_game_yes'),\n    save_game_no: document.getElementById('button_save_game_no')\n  },\n\n  check() {\n    this.get_id.continue_game.addEventListener('click', event => {\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.menu.style.display = 'none';\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.cnv.style.display = 'block';\n      const raw = localStorage.getItem(\"player\");\n      const person = JSON.parse(raw);\n\n      if (localStorage.getItem(\"player\")) {\n        _map_main__WEBPACK_IMPORTED_MODULE_1__.map.create();\n\n        for (let i = 0; i < _map_main__WEBPACK_IMPORTED_MODULE_1__.map.width[0] * _map_main__WEBPACK_IMPORTED_MODULE_1__.map.height[0] + 1; i++) {\n          _map_main__WEBPACK_IMPORTED_MODULE_1__.map.array[i].x = person.map[i].x;\n          _map_main__WEBPACK_IMPORTED_MODULE_1__.map.array[i].y = person.map[i].y;\n          _map_main__WEBPACK_IMPORTED_MODULE_1__.map.array[i].who = person.map[i].who;\n        }\n\n        name_country = person.name_country;\n        _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.name_country.innerHTML = name_country;\n      }\n    });\n    this.get_id.start_menu.addEventListener('click', event => {\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.start_menu.style.display = 'block';\n    });\n    this.get_id.save_game_yes.addEventListener('click', event => {\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.save_game_menu.style.display = 'none';\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.menu.style.display = 'block';\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.cnv.style.display = 'none';\n      (0,_map_save__WEBPACK_IMPORTED_MODULE_2__.localStorageReturn)();\n    });\n    this.get_id.save_game_no.addEventListener('click', event => {\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.save_game_menu.style.display = 'none';\n    });\n    this.get_id.about_developer_back.addEventListener('click', event => {\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.about_developer_menu.style.display = 'none';\n    });\n    this.get_id.cnv_div_back.addEventListener('click', event => {\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.save_game_menu.style.display = 'block';\n    });\n    this.get_id.start_back.addEventListener('click', event => {\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.start_menu.style.display = 'none';\n    });\n    this.get_id.about_developer_menu.addEventListener('click', event => {\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.about_developer_menu.style.display = 'block';\n    });\n    this.get_id.create.addEventListener('click', event => {\n      localStorage.clear();\n      name_country = document.getElementById('name_country_input').value;\n\n      if (document.getElementById('size1').checked) {\n        size = document.getElementById('size1').value;\n      }\n\n      if (document.getElementById('size2').checked) {\n        size = document.getElementById('size2').value;\n      }\n\n      if (document.getElementById('size3').checked) {\n        size = document.getElementById('size3').value;\n      }\n\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.start_menu.style.display = 'none';\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.menu.style.display = 'none';\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.cnv.style.display = 'block';\n      _get_dom_id__WEBPACK_IMPORTED_MODULE_3__.dom_id.name_country.innerHTML = name_country;\n      _map_main__WEBPACK_IMPORTED_MODULE_1__.map.create();\n      _loading__WEBPACK_IMPORTED_MODULE_4__.loading.quantity = 0;\n      _loading__WEBPACK_IMPORTED_MODULE_4__.loading.game = false;\n      _loading__WEBPACK_IMPORTED_MODULE_4__.loading.width = 500 / size;\n      _map_generate_world__WEBPACK_IMPORTED_MODULE_0__.Lend.createWord(size);\n      (0,_map_save__WEBPACK_IMPORTED_MODULE_2__.localStorageReturn)();\n    });\n  }\n\n};\n\n//# sourceURL=webpack://country/./src/js/menu/fun_dom.js?");

/***/ }),

/***/ "./src/js/menu/get_dom_id.js":
/*!***********************************!*\
  !*** ./src/js/menu/get_dom_id.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom_id\": () => (/* binding */ dom_id)\n/* harmony export */ });\nconst dom_id = {\n  start_menu: document.getElementById('start_menu_back'),\n  cnv: document.getElementById('cnv_div'),\n  menu: document.getElementById('main'),\n  name_country: document.getElementById('name_country'),\n  position: document.getElementById('position'),\n  fps: document.getElementById('fps'),\n  about_developer_menu: document.getElementById('about_developer_menu_back'),\n  continue_game: document.getElementById('button_continue_game'),\n  save_game_menu: document.getElementById('save_game_menu_back')\n};\n\n//# sourceURL=webpack://country/./src/js/menu/get_dom_id.js?");

/***/ }),

/***/ "./src/js/menu/loading.js":
/*!********************************!*\
  !*** ./src/js/menu/loading.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loading\": () => (/* binding */ loading)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ \"./src/js/settings.js\");\n/* harmony import */ var _fun_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fun_dom */ \"./src/js/menu/fun_dom.js\");\n\n\n\nconst loading = {\n  quantity: 0,\n  local: true,\n  width: 500 / 50,\n  game: false,\n\n  draw() {\n    if (this.quantity == 500) this.game = true;\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = 'black';\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(0, 225, this.quantity, 50);\n  }\n\n};\n\n//# sourceURL=webpack://country/./src/js/menu/loading.js?");

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\nconst wh = 100;\nconst z = Math.ceil(wh * wh / 100 / (wh / 10) / 2);\nconst xy = -(wh * wh / 100 / (wh / 10) - z) * 500;\nconst settings = {\n  lend: {\n    quantity: 0,\n    x: 250,\n    y: 250\n  },\n  cell: {\n    width: wh,\n    height: wh,\n    x: xy,\n    y: xy\n  }\n};\n\n//# sourceURL=webpack://country/./src/js/settings.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"index.html\");\n\n//# sourceURL=webpack://country/./src/index.html?");

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/github.svg\");\n\n//# sourceURL=webpack://country/./src/images/github.svg?");

/***/ }),

/***/ "./src/images/instagram.svg":
/*!**********************************!*\
  !*** ./src/images/instagram.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/instagram.svg\");\n\n//# sourceURL=webpack://country/./src/images/instagram.svg?");

/***/ }),

/***/ "./src/images/vk.svg":
/*!***************************!*\
  !*** ./src/images/vk.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/vk.svg\");\n\n//# sourceURL=webpack://country/./src/images/vk.svg?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://country/./src/style/main.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;