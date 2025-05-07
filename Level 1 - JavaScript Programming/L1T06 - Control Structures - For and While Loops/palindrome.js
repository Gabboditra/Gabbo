// Input user:
let word = prompt("Please enter a word:");
word = word.toLowerCase();

let start = 0;
let end = word.length - 1;

let isPalindrome = true;

// Palindrome check
while (start < end) {
  if (word[start] !== word[end]) {
    isPalindrome = false;
    break;
  }
  start++;
  end--;
}
//JS Outcome:
if (isPalindrome) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}
