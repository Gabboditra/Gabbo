//function hide
function hide(hidingLocation) {
  let hideLocation = hidingLocation; //local variable hidelocation
  function seek() {
    return hideLocation; //nested function seek accessing hidelocation
  }
  return seek; // returning seek function and creating a closure
}

// call hide and assign the returned function to startgame variable
const hidloc = hide("Manchester");
const startGame = hidloc;

//log the result of calling startGame. Expected Output: Manchester
console.log(startGame());
// Log the result of hidelocation variable directly. It will cause an ReferenceError
// In fact, hidelocation is a local variable declared inside the hide function.
// It has function scope and cannot be accessed outside of that function.
console.log(hideLocation); // ReferenceError: hideLocation is not defined
