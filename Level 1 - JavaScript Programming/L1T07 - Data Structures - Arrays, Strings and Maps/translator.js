// prompt user for a translation
let word = prompt(
  "what word would you like to translate from English to Italian?"
)
  .toLowerCase()
  .trim();
// Words mapping
let translationMap = new Map([
  ["son", "figlio"],
  ["year", "anno"],
  ["day", "giorno"],
  ["home", "casa"],
  ["people", "gente"],
  ["power", "forza"],
  ["sun", "sole"],
  ["wine", "vino"],
  ["game", "gioco"],
  ["tree", "albero"],
]);
//check if the user´s input is included in the translation map
if (translationMap.has(word)) {
  // display the translation {
  let translation = translationMap.get(word);
  console.log(`the translation of ${word} is ${translation}`);
  // missing translation
} else {
  alert("sorry, there is no translation available for your input.");
}
