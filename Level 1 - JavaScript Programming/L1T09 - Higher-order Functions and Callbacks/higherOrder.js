// create a HOF that mimics the built-in filter() method
const myFilterFunction = (array, callback) => {
  const filteredArray = []; // empty array to store the filtered words

  // loop through all array elements
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      //call the callback function. If the word meets the condition, add word to the filtered array
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

// create a callback function that checks if a word has exactly 6 letters
const sixLetters = (word) => word.length === 6;
// Define an array of 10 colours
const coloursArray = [
  "yellow",
  "purple",
  "black",
  "red",
  "white",
  "orange",
  "pink",
  "green",
  "brown",
  "blue",
];

// use the HOF (myFilterFunction) to filter only six-letters words from the array of colours
const sixLettersColours = myFilterFunction(coloursArray, sixLetters);
// log the result of colours that have exactly 6 letters
console.log(sixLettersColours);
