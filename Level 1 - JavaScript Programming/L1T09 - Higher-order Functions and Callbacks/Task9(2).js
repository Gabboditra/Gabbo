// declaring variables to select the "start" and "stop" buttons
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
// Setting a variable to hold the intervalID and also a counter starting from 1
let counter = 1;
let intervalID = null;

// Function to trigger the counter
function startCounter() {
  if (!intervalID) {
    intervalID = setInterval(() => {
      console.log("Counter:", counter++);
    }, 1000);
  }
}

// Function to stop the counter
function stopCounter() {
  clearInterval(intervalID);
  intervalID = null;
}

// this button will start the outputting of the counter to the console
startButton.addEventListener("click", startCounter);
// this button will stop the counter from outputting to the console
stopButton.addEventListener("click", stopCounter);
