"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var array = [1, 2, 3, 6, 7, 8, 0];
var newArray = array.map(function (item, index) {
  return item * index;
});
var sumArray = array.reduce(function (total, next) {
  return total + next;
});
var filterArray = array.filter(function (item) {
  return item % 2 === 0;
});
var findArray = array.find(function (item) {
  return item === 2;
});
var arr = [2, 3, 5, 6, 7, 1, 0];
var newArr = arr.map(function (item) {
  return item * 2;
});
var user = [{
  name: 'Joao',
  age: 21,
  address: {
    city: 'campinas',
    street: 'sesame street',
    number: 355,
    ap: 201
  }
}, {
  name: 'Rodrigo',
  age: 33,
  address: {
    city: 'new york',
    street: 'street unknow',
    number: 344,
    ap: 202
  }
}]; //const { name, ...leftover } = user[0];

var showInfo = function showInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : user[0];

  var name = _ref.name,
      leftover = _objectWithoutProperties(_ref, ["name"]);

  return console.log(leftover);
};

showInfo();

var sum = function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

var arrr1 = [1, 2, 3];
var arrr2 = [4, 5, 6];
var arrr3 = arrr1.concat(arrr2);

var user2 = _objectSpread({}, user[0], {
  name: 'Potato'
});

var templateLiteral = function templateLiteral(user) {
  var nome = user.name,
      idade = user.age;
  console.log("O ".concat(nome, " tem ").concat(idade, " anos"));
};

templateLiteral(user[0]);
var language = 'Japanese';
var country = 'Japan';
var newOBJ = {
  language: language,
  country: country,
  city: 'tokyo'
};
console.log(newOBJ);
