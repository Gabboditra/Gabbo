// Input from user:
let name = prompt("Enter the user's mother's first name: ");
let street = prompt("Enter the name of the street they grew up in: ");
let colour = prompt("Enter their favourite colour as a child: ");
let age = Number(prompt("Enter their current age: "));
let number = Number(prompt("Enter a number between 1 and 10: "));
// Output JS with Template literals:
console.log(`In ${number} years you are going to meet your best friend named ${name} ${street}.\n
You will get married in ${age + number} years and have ${
  age % number
} children.\n
In ${Math.round(age / number)} years you are going to dye your hair blue.`);
