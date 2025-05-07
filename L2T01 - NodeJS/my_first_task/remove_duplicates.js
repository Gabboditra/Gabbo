// import lodash
const lodash = require('lodash');

// create an array of numbers with duplicates
const numbers = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];

// remove duplicates using lodash
const duplicateFreeNumbers= lodash.uniq (numbers);

// log the numbers array without duplicates
console.log ("Unique numbers:", duplicateFreeNumbers);
