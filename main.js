//CLASSES

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    isAdmin() {
        return this.admin === true;
    }
}
class Admin extends User {
    constructor(email, password) {
        super(email, password)
        this.admin = true;
    }
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());


// MAP, FILTER, FIND, REDUCE
const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

const ages = users.map(item => item.age);

const legalage = users.filter(item => item.age > 17 && item.company === 'Rocketseat');

const googleuser = users.find(item => item.company === 'Google');

const lessthanfifty = users.map(users => ({ ...users, age: users.age * 2 })).filter(users => users.age < 50);

console.log(ages);
console.log(legalage);
console.log(lessthanfifty);

// ARROW FUNCTIONS

const arr = [1, 2, 3, 4, 5];

const mapp = arr.map(item => item + 10);

const userino = { name: 'Joao', age: 21 };

const userinoo = { name: 'Joaoo', age: 211 };

const showage = (user = userino) => (user.age);

console.log(showage(userinoo));

const nam = 'Joao';
const ag = 21;

const nother = (name = 'Joao', age = 30) => ({ name, age });

console.log(nother(nam, ag));

const mypromise = () => new Promise((resolve, reject) => resolve());

console.log(mypromise());


// DESTRUCTURING

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome, cidade, estado);

function mostraInfo(usuario) {
    const { nome, idade } = usuario;
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// REST

const arrr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arrr;

console.log(x, y);

const sum = (...params) => params.reduce(function (item, next) {
    return item + next;
});

console.log(sum(3, 4, 5, 5, 4, 54, 45254, 25, 5, 5, 5, 5, 5, 6, 7, 8, 8, 9));

// SPREAD

const usuariorino = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuariorino, nome: 'Gabriel' };

const usuario3 = { ...usuariorino, endereco: { ...usuariorino.endereco, cidade: 'Lontras' } };

console.log(usuario2);
console.log(usuario3);

//TEMPLATE LITERALS

const usuario4 = 'Diego';
const idade4 = 23;
console.log('O usuário ' + usuario4 + ' possui ' + idade4 + ' anos');
console.log(`O usuário ${usuario4} possui ${idade4} anos`);

// OBJECT SHORT SYNTAX

const nome5 = 'Diego';
const idade5 = 23;
const usuario5 = {
    nome5,
    idade5,
    cidade: 'Rio do Sul',
};

console.log({ usuario5 });