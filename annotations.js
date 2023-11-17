"use strict";
//Binding
let b = 10;
b = 20;
console.log(b);
//function
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
//Generic
function addToArray(a, b) {
    return [a, b];
}
console.log(addToArray(10, "Ten"));
