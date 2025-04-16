// Prompt user for participants
const names = prompt(
  "Who would you like to invite to the dinner party? (Please separate each name with a comma)"
);

// Convert string to an array of names
const participants = names
  .toUpperCase()
  .split(/[\s\p{P}]+/u)
  .filter(Boolean);

// Initial list of participants
console.log(participants);

// Check if the number participants is above 10
if (participants.length > 10) {
  alert("You can only add a maximum of 10 people to your guest list.");

  // Ask the user if they want to replace someone
  const response = prompt(
    "Would you like to replace someone on the list with the last person you entered? (yes/no)"
  )
    .toUpperCase()
    .trim();

  // If so, ask the user to input the name of the participant they want to replace
  if (response === "YES") {
    const replaceName = prompt(
      "Enter the name of the participant you want to replace:"
    )
      .toUpperCase()
      .trim();

    // Find the index of the participant to replace
    const index = participants.indexOf(replaceName);
    // Replace the participant or inform that the name is not found
    if (index !== -1) {
      participants[index] = participants[10];
      alert(`${replaceName} has been replaced with ${participants[10]}.`);
    } else {
      alert(`${replaceName} is not in the current list.`);
    } // No replacement or invalid input
  } else if (response === "NO") {
    participants.splice(10);
    console.log(
      "Thank you for your confirmation. Please find below the updated list with 10 participants."
    );
  } else {
    alert("Invalid response. Please enter 'yes' or 'no'.");
  }
}
// Report the final list of participants
console.log(
  "Final list of participants:",
  participants.slice(0, 10).join(", ")
);
