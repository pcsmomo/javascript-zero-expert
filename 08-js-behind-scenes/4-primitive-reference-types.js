'use strict';

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
// console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log('Before married', jessica);
// console.log('After married', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2); // shallow copy
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before married', jessica2);
console.log('After married', jessicaCopy);
