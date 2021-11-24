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
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  calcAgeArrow: () => {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();
jonas.calcAgeArrow();

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
    year: 1991,
    calcAge: function () {
      console.log(this);
      console.log(2037 - this.year);
    },
    calcAgeArrow: () => {
      console.log(this);
      console.log(2037 - this.year);
    },
  };
  max.calcAge();
  max.calcAgeArrow();
};
testFn();
