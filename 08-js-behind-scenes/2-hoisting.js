'use strict';

// =================
// == Variables ====
console.log(me); // undefined
// console.log(job); // Uncaught ReferenceError
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// =================
// == Functoins ====
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // Uncaught ReferenceError
// console.log(addArrow(2, 3)); // Uncaught TypeError with var

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

// const addArrow = (a, b) => a + b;
var addArrow = (a, b) => a + b; // undefined(2, 3)

// =================
// == Example 1 ====
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// =================
// == Example 2 ====
var x = 1; // var variable is declared in the window object
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
