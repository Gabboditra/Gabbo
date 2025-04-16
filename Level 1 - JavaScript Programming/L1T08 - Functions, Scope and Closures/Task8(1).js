// Function to sum all elements in an array
function findSum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// Function to subtract two numbers
function subtractNumbers(num1, num2) {
  return num1 - num2;
}

// Function to multiply two numbers
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

// Function to divide two numbers and take into account division by zero
function divideNumbers(num1, num2) {
  if (num2 === 0) {
    alert("Your number cannot be divided by zero.");
    return "Error: Division by zero not allowed.";
  }
  return (num1 / num2).toFixed(2);
}

// Array of integers
const integers = [10, 4, 16];
// Log results to the console

console.log(findSum(integers));
console.log(subtractNumbers(integers[0], integers[1]));
console.log(multiplyNumbers(integers[0], integers[2]));
console.log(divideNumbers(findSum(integers), integers[2]));
