"use strict";

var array = [1, 2, 3, 6, 7, 8, 0];
var newArray = array.map(function (item, index) {
  return item * index;
});
console.log(newArray);
var sumArray = array.reduce(function (total, next) {
  return total + next;
});
console.log(sumArray);
var filterArray = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filterArray);
var findArray = array.find(function (item) {
  return item === 2;
});
console.log(findArray);
