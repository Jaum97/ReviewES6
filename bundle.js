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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.soma = soma;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _funcoes = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar User =\n/*#__PURE__*/\nfunction () {\n  function User(email, password) {\n    _classCallCheck(this, User);\n\n    this.email = email;\n    this.password = password;\n  }\n\n  _createClass(User, [{\n    key: \"isAdmin\",\n    value: function isAdmin() {\n      return this.admin === true;\n    }\n  }]);\n\n  return User;\n}();\n\nvar Admin =\n/*#__PURE__*/\nfunction (_User) {\n  _inherits(Admin, _User);\n\n  function Admin(email, password) {\n    var _this;\n\n    _classCallCheck(this, Admin);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, password));\n    _this.admin = true;\n    return _this;\n  }\n\n  return Admin;\n}(User);\n\nvar User1 = new User('email@teste.com', 'senha123');\nvar Adm1 = new Admin('email@teste.com', 'senha123');\nconsole.log(User1.isAdmin());\nconsole.log(Adm1.isAdmin()); // MAP, FILTER, FIND, REDUCE\n\nvar users = [{\n  name: 'Diego',\n  age: 23,\n  company: 'Rocketseat'\n}, {\n  name: 'Gabriel',\n  age: 15,\n  company: 'Rocketseat'\n}, {\n  name: 'Lucas',\n  age: 30,\n  company: 'Facebook'\n}];\nvar ages = users.map(function (item) {\n  return item.age;\n});\nvar legalage = users.filter(function (item) {\n  return item.age > 17 && item.company === 'Rocketseat';\n});\nvar googleuser = users.find(function (item) {\n  return item.company === 'Google';\n});\nvar lessthanfifty = users.map(function (users) {\n  return _objectSpread({}, users, {\n    age: users.age * 2\n  });\n}).filter(function (users) {\n  return users.age < 50;\n});\nconsole.log(ages);\nconsole.log(legalage);\nconsole.log(lessthanfifty); // ARROW FUNCTIONS\n\nvar arr = [1, 2, 3, 4, 5];\nvar mapp = arr.map(function (item) {\n  return item + 10;\n});\nvar userino = {\n  name: 'Joao',\n  age: 21\n};\nvar userinoo = {\n  name: 'Joaoo',\n  age: 211\n};\n\nvar showage = function showage() {\n  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userino;\n  return user.age;\n};\n\nconsole.log(showage(userinoo));\nvar nam = 'Joao';\nvar ag = 21;\n\nvar nother = function nother() {\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Joao';\n  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;\n  return {\n    name: name,\n    age: age\n  };\n};\n\nconsole.log(nother(nam, ag));\n\nvar mypromise = function mypromise() {\n  return new Promise(function (resolve, reject) {\n    return resolve();\n  });\n};\n\nconsole.log(mypromise()); // DESTRUCTURING\n\nvar empresa = {\n  nome: 'Rocketseat',\n  endereco: {\n    cidade: 'Rio do Sul',\n    estado: 'SC'\n  }\n};\nvar nome = empresa.nome,\n    _empresa$endereco = empresa.endereco,\n    cidade = _empresa$endereco.cidade,\n    estado = _empresa$endereco.estado;\nconsole.log(nome, cidade, estado);\n\nfunction mostraInfo(usuario) {\n  var nome = usuario.nome,\n      idade = usuario.idade;\n  return \"\".concat(nome, \" tem \").concat(idade, \" anos.\");\n}\n\nconsole.log(mostraInfo({\n  nome: 'Diego',\n  idade: 23\n})); // REST\n\nvar arrr = [1, 2, 3, 4, 5, 6];\nvar x = arrr[0],\n    y = arrr.slice(1);\nconsole.log(x, y);\n\nvar sum = function sum() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (item, next) {\n    return item + next;\n  });\n};\n\nconsole.log(sum(3, 4, 5, 5, 4, 54, 45254, 25, 5, 5, 5, 5, 5, 6, 7, 8, 8, 9)); // SPREAD\n\nvar usuariorino = {\n  nome: 'Diego',\n  idade: 23,\n  endereco: {\n    cidade: 'Rio do Sul',\n    uf: 'SC',\n    pais: 'Brasil'\n  }\n};\n\nvar usuario2 = _objectSpread({}, usuariorino, {\n  nome: 'Gabriel'\n});\n\nvar usuario3 = _objectSpread({}, usuariorino, {\n  endereco: _objectSpread({}, usuariorino.endereco, {\n    cidade: 'Lontras'\n  })\n});\n\nconsole.log(usuario2);\nconsole.log(usuario3); //TEMPLATE LITERALS\n\nvar usuario4 = 'Diego';\nvar idade4 = 23;\nconsole.log('O usuário ' + usuario4 + ' possui ' + idade4 + ' anos');\nconsole.log(\"O usu\\xE1rio \".concat(usuario4, \" possui \").concat(idade4, \" anos\")); // OBJECT SHORT SYNTAX\n\nvar nome5 = 'Diego';\nvar idade5 = 23;\nvar usuario5 = {\n  nome5: nome5,\n  idade5: idade5,\n  cidade: 'Rio do Sul'\n};\nconsole.log({\n  usuario5: usuario5\n});\nconsole.log((0, _funcoes.soma)(3, 4));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });