// Prompt the user to enter a number with at least 3 digits
let number = prompt("please enter a number with at least 3 digits:");
let originalNumber = number;
// Function to swap the second and last digits of number provided by the user
function swapSecondAndLast(num) {
  let digits = num.split("");
  // Check if the number has at least 3 digits; if not, display a message and return the original number
  if (digits.length < 3) {
    console.log("The number must have at least 3 digits.");
    return num;
  }
  // Swap the second and last digits
  for (let i = 0; i < digits.length; i++) {
    if (i === 1) {
      let temp = digits[1];
      digits[1] = digits[digits.length - 1];
      digits[digits.length - 1] = temp;
    }
  }
  // Join the modified array back into a string, convert it to a number, and return the result
  return Number(digits.join(""));
}
// Log the original number
console.log("Output 1:" + originalNumber);
// Call the function and display the modified number with swapped digits
console.log("Output 2:" + swapSecondAndLast(originalNumber));
