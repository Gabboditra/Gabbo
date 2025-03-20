// Input from user:
let litresUsed = parseFloat(
  prompt("Please enter the number of litres of water you have consumed:")
);
let householdtype = prompt(
  "Are you an indigent or regular household?"
).toLowerCase();

// Invalid input from user:
if (isNaN(litresUsed) || litresUsed < 0) {
  console.log(
    "Invalid input. Please enter a number greater than or equal to 0."
  );
} else {
  // Output Cost per kilolitre:
  let costPerKilolitre1 = 15.73; // 0 - 6000 litres
  let costPerKilolitre2 = 22.38; // 6001 - 10,500 litres
  let costPerKilolitre3 = 31.77; // 10,501 - 35,000 litres
  let costPerKilolitre4 = 69.76; // Above 35,000 litres
  // Totalcost variable
  let totalcost = 0;
  // Calculation Kilolitres used
  let kilolitresUsed = litresUsed / 1000;

  // Possible pricing outcomes for the given scenarios:
  if (householdtype === "indigent") {
    if (litresUsed >= 0 && litresUsed <= 10500) {
      totalcost = 0;
      console.log("Free for indigent households.");
    }
  } else if (householdtype === "regular") {
    if (litresUsed >= 0 && litresUsed <= 6000) {
      totalcost = kilolitresUsed * costPerKilolitre1;
    } else if (litresUsed > 6000 && litresUsed <= 10500) {
      totalcost = kilolitresUsed * costPerKilolitre2;
    }
    if (householdtype === "regular" || householdtype === "indigent") {
    }
    if (litresUsed > 10500 && litresUsed <= 35000) {
      totalcost = kilolitresUsed * costPerKilolitre3;
    } else if (litresUsed > 35000) {
      totalcost = kilolitresUsed * costPerKilolitre4;
    }
    console.log("R" + totalcost.toFixed(2));
  } else {
    console.log(
      "Invalid household type. Please enter 'Indigent' or 'Regular'."
    );
  }
}
