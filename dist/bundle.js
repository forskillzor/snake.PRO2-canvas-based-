/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app.js */ \"./src/modules/app.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst app = new _modules_app_js__WEBPACK_IMPORTED_MODULE_0__[\"App\"]()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/modules/game.js\");\n\nclass App{\n\n\tconstructor(){\n\t\tconst self = this\n\t\tthis.$app = document.querySelector('.app')\n\t\tthis.$record = document.querySelector('.score')\n\t\tthis.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]()\n\t\t//this.$record.textContent = 'Рекордов нет'\n\t}\n}\t\n\n\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/cell.js":
/*!*****************************!*\
  !*** ./src/modules/cell.js ***!
  \*****************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\nclass Cell{\n\n\tconstructor(x, y, m, n){\n\n\t\tthis.x = x\n\t\tthis.y = y\n\t\tthis.m = m\n\t\tthis.n = m\n\t\tthis.content = 'empty'\n\t}\n\n\trender(ctx){\n\n\t\tswitch (this.content) {\n\n\t\t\tcase 'empty':\n\n\t\t\t\tctx.fillStyle = '#fff'\n\t\t\t\tctx.strokeStyle = '#d2d2d2'; \n\t\t\t\tctx.fillRect(this.x, this.y, this.m, this.n);\n\t\t\t\tctx.strokeRect(this.x, this.y, this.m, this.n);\n\t\t\t\tbreak;\n\n\t\t\tcase 'snake':\n\n\t\t\t\tctx.fillStyle = 'green'; \n\t\t\t\tctx.fillRect(this.x, this.y, this.m, this.n);\n\t\t\t\tctx.strokeStyle = '#d2d2d2';\n\t\t\t\tctx.strokeRect(this.x, this.y, this.m, this.n); \n\t\t\t\tbreak;\n\t\t\t\t\n\t\t\tcase 'fruit':\n\n\t\t\t\tctx.fillStyle = 'red'; \n\t\t\t\tctx.fillRect(this.x, this.y, this.m, this.n);\n\t\t\t\tbreak;\n\t\t}\n\t}\n}\n\n//# sourceURL=webpack:///./src/modules/cell.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ \"./src/modules/snake.js\");\n/* harmony import */ var _matrix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix.js */ \"./src/modules/matrix.js\");\n\n\n\nclass Game{\n\t\n\tconstructor(){\n\n\t\tconst self = this\n\t\tthis.$canvas = document.querySelector('.game')\n\t\tthis.$newButton = document.querySelector('.new-game')\n\t\tthis.$record = document.querySelector('.record')\n\t\tthis.$score = document.querySelector('.score')\n\t\tthis.score = 0\n\t\tthis.lifes = 3\n\t\tthis.matrix = new _matrix_js__WEBPACK_IMPORTED_MODULE_1__[\"Matrix\"](this.$canvas);\n\t\tthis.matrix.render()\n\t\t\n\t\tthis.snake = new _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"Snake\"](this.matrix, 0,5)\n\t\tthis.isRunning = false\n\n\t\tthis.$newButton.addEventListener('click', this.newGame.bind(this))\n\t\tthis.gameInterval = setInterval(function(){\n\n\t\t\tif (self.snake.isClosed && self.isRunning){\n\t\t\t\tself.gameOver()\n\t\t\t}\n\t\t\tself.$score.textContent = self.snake.body.length-1\n\t\t},10)\n\n\t\tthis.KeyboardHandler()\n\t}\n\n\tgameOver(){\n\n\t\tclearInterval(this.snake.interval)\n\t\tthis.isRunning = false\n\t\talert('GAME OVER')\n\t\tthis.$newButton.classList.remove('hide')\n\t}\n\n\tnewGame(){\n\t\tthis.isRunning = true\n\t\tthis.matrix = new _matrix_js__WEBPACK_IMPORTED_MODULE_1__[\"Matrix\"](this.$canvas);\n\t\tthis.snake = new _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"Snake\"](this.matrix, 0,5)\n\t\tthis.snake.newFruit()\n\t\tthis.$newButton.classList.add('hide')\n\t\tconsole.log('new gamselecte')\n\t\tthis.matrix.render()\n\t}\n\n\t_crash(){\n\n\t}\n\n\tKeyboardHandler(){\n\n\t\tconst self = this\n\t\n\t\twindow.addEventListener('keydown', function(event){\n\n\t\t\tif(self.isRunning){\n\t\t\t\tswitch (event.key) {\n\t\t\t\t\tcase 'ArrowLeft':\n\t\t\t\t\t\tif(self.snake.direction == 'right') break;\n\t\t\t\t\t\tself.snake.newDirection = 'left'\n\t\t\t\t\t\tself.snake.changeMove()\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 'ArrowRight':\n\t\t\t\t\t\tif(self.snake.direction == 'left') break;\n\t\t\t\t\t\tself.snake.newDirection = 'right'\n\t\t\t\t\t\tself.snake.changeMove()\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 'ArrowUp':\n\t\t\t\t\t\tif(self.snake.direction == 'down') break;\n\t\t\t\t\t\tself.snake.newDirection = 'up'\n\t\t\t\t\t\tself.snake.changeMove()\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 'ArrowDown':\n\t\t\t\t\t\tif(self.snake.direction == 'up') break;\n\t\t\t\t\t\tself.snake.newDirection = 'down'\n\t\t\t\t\t\tself.snake.changeMove()\n\t\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t})\n\t}\n}\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/matrix.js":
/*!*******************************!*\
  !*** ./src/modules/matrix.js ***!
  \*******************************/
/*! exports provided: Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Matrix\", function() { return Matrix; });\n/* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell.js */ \"./src/modules/cell.js\");\n\n\nclass Matrix{\n\t\n\tconstructor(canvas){\n\n\t\tthis.ctx = canvas.getContext('2d')\n\t\tthis.cells = []\n\t\tthis.cellSize = 20\n\t\tthis.create()\n\t}\n\n\tcreate(){\n\n\t\tfor (let y = 0; y < 800; y+=20){\n\t\t\tfor(let x = 0; x < 800; x+=20){\n\t\t\t\tthis.cells.push(new _cell_js__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"](x, y, this.cellSize, this.cellSize))\n\t\t\t}\n\t\t}\n\t}\n\n\trender(){\n\n\t\tfor (let i = 0; i < this.cells.length; i++){\n\t\t\tthis.cells[i].render(this.ctx)\n\t\t}\n\t}\n\n\tgetCell(x, y){\n\n\t\tlet num = this._calcNum(x, y)\n\t\treturn this.cells[num]\n\t}\n\n\tclearCell(x, y){\n\n\t\tlet num = this._calcNum(x, y)\n\t\tthis.cells[num].content = \"empty\"\n\t}\n\n\tsetCell(x, y, val){\n\n\t\tlet num = this._calcNum(x, y)\n\t\tthis.cells[num].content = val\n\t\tthis.cells[num].render(this.ctx)\n\n\t}\n\n\t_calcNum(x, y){\n\n\t\treturn y*40 + x //\n\t}\n\t\n\tselect(x,y){\n\n\t\tthis.setCell(x, y, 'snake')\n\t\tthis.cells[this._calcNum(x,y)].render(this.ctx)\n\t}\n}\n\n//# sourceURL=webpack:///./src/modules/matrix.js?");

/***/ }),

/***/ "./src/modules/snake.js":
/*!******************************!*\
  !*** ./src/modules/snake.js ***!
  \******************************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\nclass Snake{\n\n\tconstructor(matrix, x, y){\n\n\t\tthis.matrix = matrix\n\t\tthis.body = []\n\t\tthis.x = x\n\t\tthis.y = y\n\t\tthis.direction = 'right'\n\t\tthis.newDirection = ''\n\t\tthis.speed = 80\n\t\tthis.interval = false\n\t\tthis.isClosed = false\n\n\t\tthis.body.push([this.x, this.y])\n\t}\n\n\tshow(){\n\n\t\tfor (let i = 0; i < this.body.length; i++){\n\t\t\tthis.matrix.setCell(this.body[i][0], this.body[i][1], 'snake')\n\t\t}\n\t}\n\n\thide(){\n\n\t} \n\n\tchangeMove(){\n\n\t\tconst self = this\n\t\tif(self)\n\t\tclearInterval(self.interval)\n\t\tself.interval = setInterval(function(){\n\t\t\tself.move(self.direction)\n\t\t}, self.speed)\n\t}\n\n\tmove(direction){\n\n\t\tthis.direction = this.newDirection\n\n\t\tswitch (direction) {\n\t\t\tcase 'left':\n\t\t\t\tthis.x--\n\t\t\t\tif (this.x < 0 ){\n\t\t\t\t\tthis.x = 39\n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t\tcase 'right':\n\t\t\t\tthis.x++\n\t\t\t\tif (this.x == 40){\n\t\t\t\t\tthis.x = 0\n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t\tcase 'up':\n\t\t\t\tthis.y--\n\t\t\t\tif (this.y < 0){\n\t\t\t\t\tthis.y = 39\n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t\tcase 'down':\n\t\t\t\tthis.y++\n\t\t\t\tif (this.y == 40){\n\t\t\t\t\tthis.y = 0\n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t}\n\n\t\tthis.onMoveHook()\n\n\t}\n\n\tonMoveHook(){\n\t\t\t\n\t\t\tthis.checkForClosed()\n\t\t\tthis.stepForward()\n\t\t\tthis.checkForFruit()\n\t\t\tthis.show()\n\t\t}\n\n\tstepForward(){\n\t\tthis.body.push([this.x, this.y])\n\t\tconst [x,y] = this.body.shift()\n\t\tthis.matrix.setCell(x, y, 'empty')\n\t}\n\n\tnewFruit(){\n\n\t\tlet {x,y} = generator()\n\n\t\tif(this.matrix.getCell(x, y).content == 'snake'){\n\t\t\tconsole.log('SNAKE!!', this.matrix.getCell(x, y).content)\n\t\t\tthis.newFruit()\n\n\t\t}\n\t\tthis.matrix.setCell(x, y, 'fruit')\n\n\t\treturn\n\n\t}\n\n\tcheckForClosed(){\n\t\t\n\t\tif(this.matrix.getCell(this.x, this.y).content == 'snake'){\n\t\t\tthis.isClosed = true\n\t\t}\n\t}\n\n\tcheckForFruit(){\n\n\t\tif(this.matrix.getCell(this.x, this.y).content == 'fruit'){\n\t\t\tconsole.log(\"om-nom-nom\")\n\t\t\tthis.body.push([this.x, this.y])\n\t\t\t//this.speed -= 1\n\t\t\tthis.matrix.setCell(this.x, this.y, 'snake')\n\t\t\tthis.newFruit()\n\t\t}\n\t\tthis.changeMove()\n\t}\n}\n\nfunction generator(){\n\treturn {\n\t\tx: parseInt(Math.random()*39),\n\t\ty: parseInt(Math.random()*39)\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/modules/snake.js?");

/***/ })

/******/ });