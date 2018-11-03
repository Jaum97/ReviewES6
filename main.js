const array = [1, 2, 3, 6, 7, 8, 0];

const newArray = array.map(function (item, index) {
    return item * index;
});
const sumArray = array.reduce(function (total, next) {
    return total + next;
});
const filterArray = array.filter(function (item) {
    return item % 2 === 0;
});
const findArray = array.find(function (item) {
    return item === 2;
});

const arr = [2, 3, 5, 6, 7, 1, 0];

const newArr = arr.map(item => item * 2);

const user = [{
    name: 'Joao',
    age: 21,
    address: {
        city: 'campinas',
        street: 'sesame street',
        number: 355,
        ap: 201
    }

},
{
    name: 'Rodrigo',
    age: 33,
    address: {
        city: 'new york',
        street: 'street unknow',
        number: 344,
        ap: 202
    }

}
]
//const { name, ...leftover } = user[0];

const showInfo = ({ name, ...leftover } = user[0]) => console.log(leftover);


showInfo();

const sum = (...params) => params.reduce((total, next) => total + next);

const arrr1 = [1, 2, 3];
const arrr2 = [4, 5, 6];

const arrr3 = [...arrr1, ...arrr2];

const user2 = { ...user[0], name: 'Potato' };

const templateLiteral = (user) => {
    const { name: nome, age: idade } = user;
    console.log(`O ${nome} tem ${idade} anos`);
}

templateLiteral(user[0]);

const language = 'Japanese';
const country = 'Japan';

const newOBJ = {
    language,
    country,
    city: 'tokyo'
}

console.log(newOBJ);