const array = [1, 2, 3, 6, 7, 8, 0];

const newArray = array.map(function (item, index) {
    return item * index;
});

console.log(newArray);

const sumArray = array.reduce(function (total, next) {
    return total + next;
});

console.log(sumArray);

const filterArray = array.filter(function (item) {
    return item % 2 === 0;
});

console.log(filterArray);

const findArray = array.find(function (item) {
    return item === 2;
});

console.log(findArray)