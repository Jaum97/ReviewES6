"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//CLASSES
var User =
/*#__PURE__*/
function () {
  function User(email, password) {
    _classCallCheck(this, User);

    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return User;
}();

var Admin =
/*#__PURE__*/
function (_User) {
  _inherits(Admin, _User);

  function Admin(email, password) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, password));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);

var User1 = new User('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin()); // MAP, FILTER, FIND, REDUCE

var users = [{
  name: 'Diego',
  age: 23,
  company: 'Rocketseat'
}, {
  name: 'Gabriel',
  age: 15,
  company: 'Rocketseat'
}, {
  name: 'Lucas',
  age: 30,
  company: 'Facebook'
}];
var ages = users.map(function (item) {
  return item.age;
});
var legalage = users.filter(function (item) {
  return item.age > 17 && item.company === 'Rocketseat';
});
var googleuser = users.find(function (item) {
  return item.company === 'Google';
});
var lessthanfifty = users.map(function (users) {
  return _objectSpread({}, users, {
    age: users.age * 2
  });
}).filter(function (users) {
  return users.age < 50;
});
console.log(ages);
console.log(legalage);
console.log(lessthanfifty); // ARROW FUNCTIONS

var arr = [1, 2, 3, 4, 5];
var mapp = arr.map(function (item) {
  return item + 10;
});
var userino = {
  name: 'Joao',
  age: 21
};
var userinoo = {
  name: 'Joaoo',
  age: 211
};

var showage = function showage() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userino;
  return user.age;
};

console.log(showage(userinoo));
var nam = 'Joao';
var ag = 21;

var nother = function nother() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Joao';
  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  return {
    name: name,
    age: age
  };
};

console.log(nother(nam, ag));

var mypromise = function mypromise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(mypromise()); // DESTRUCTURING

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome, cidade, estado);

function mostraInfo(usuario) {
  var nome = usuario.nome,
      idade = usuario.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); // REST

var arrr = [1, 2, 3, 4, 5, 6];
var x = arrr[0],
    y = arrr.slice(1);
console.log(x, y);

var sum = function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (item, next) {
    return item + next;
  });
};

console.log(sum(3, 4, 5, 5, 4, 54, 45254, 25, 5, 5, 5, 5, 5, 6, 7, 8, 8, 9)); // SPREAD

var usuariorino = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuariorino, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread({}, usuariorino, {
  endereco: _objectSpread({}, usuariorino.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario2);
console.log(usuario3); //TEMPLATE LITERALS

var usuario4 = 'Diego';
var idade4 = 23;
console.log('O usuário ' + usuario4 + ' possui ' + idade4 + ' anos');
console.log("O usu\xE1rio ".concat(usuario4, " possui ").concat(idade4, " anos")); // OBJECT SHORT SYNTAX

var nome5 = 'Diego';
var idade5 = 23;
var usuario5 = {
  nome5: nome5,
  idade5: idade5,
  cidade: 'Rio do Sul'
};
console.log({
  usuario5: usuario5
});
