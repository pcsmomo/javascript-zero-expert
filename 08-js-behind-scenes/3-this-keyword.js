'use strict';

console.log(this);

console.log('== "this" in simple function ==');
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
  // Its own this keyword
};
calcAge(1991);

console.log('== "this" in arrow function ==');
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
  // Arrow function doesn't have this keyword
  // this from parent scope
};
calcAgeArrow(1991);

console.log('== "this" in method ==');
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // // Solution 1
    // const self = this;
    // // function expression
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    // arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.calcAge();
jonas.greet();

console.log('== Method borrwoing ==');
// method borrowing
const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// const f = jonas.calcAge;
// f();

console.log('== "this" in method in a function ==');
const testFn = () => {
  const max = {
    firstName: 'Max',
    year: 1991,
    calcAge: function () {
      console.log(this);
      console.log(2037 - this.year);
    },
    greet: () => {
      console.log(this);
      console.log(`Hey ${this.firstName}`);
    },
  };
  max.calcAge();
  max.greet();
};
testFn();

// Function expression
const isMillenial = function () {
  console.log(this); // undefined
  console.log(this.year >= 1981 && this.year <= 1996);
};
// isMillenial();

// Arrow function
const isMillenialArrow = () => {
  console.log(this); // window
  console.log(this.year >= 1981 && this.year <= 1996);
};
isMillenialArrow();

// Argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  // Arrow function doesn't have arguments
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);
