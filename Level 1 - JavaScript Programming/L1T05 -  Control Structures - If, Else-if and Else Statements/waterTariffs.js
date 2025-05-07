// Input from user:
let litresUsed = parseFloat(
  prompt("Please enter the number of litres of water you have consumed:")
);
let householdType = prompt(
  "Are you an indigent or regular household?"
).toLowerCase();

// Invalid input from user:
if (isNaN(litresUsed) || litresUsed < 0) {
  console.log(
    "Invalid input. Please enter a number greater than or equal to 0."
  );
} else {
  //costperKilolitre calculation
  let kilolitresUsed = litresUsed / 1000;

  // Cost per kilolitre:
  let costPerKilolitre1 = 15.73; // 0 - 6000 litres
  let costPerKilolitre2 = 22.38; // 6001 - 10,500 litres
  let costPerKilolitre3 = 31.77; // 10,501 - 35,000 litres
  let costPerKilolitre4 = 69.76; // Above 35,000 litres

  // Totalcost variable
  let totalcost = 0;

  // Possible scenarios
  if (householdType === "indigent") {
    if (kilolitresUsed <= 10.5) {
      totalcost = 0;
      console.log("Free for indigent households.");
    } else if (kilolitresUsed > 10.5 && kilolitresUsed <= 35) {
      let remainingLitres = kilolitresUsed - 10.5;
      totalcost = remainingLitres * costPerKilolitre3; // Charge only the surplus
    } else if (kilolitresUsed > 35) {
      let surplusLitres = 35 - 10.5; // 24,500 litres at costPerKilolitre3
      let remainingLitres = kilolitresUsed - 35;
      totalcost =
        surplusLitres * costPerKilolitre3 + remainingLitres * costPerKilolitre4;
    }
    console.log("Indigent household: R" + totalcost.toFixed(2));
  } else if (householdType === "regular") {
    if (kilolitresUsed <= 6) {
      totalcost = kilolitresUsed * costPerKilolitre1;
    } else if (kilolitresUsed > 6 && kilolitresUsed <= 10.5) {
      let remainingLitres = kilolitresUsed - 6;
      totalcost = 6 * costPerKilolitre1 + remainingLitres * costPerKilolitre2;
    } else if (kilolitresUsed > 10.5 && kilolitresUsed <= 35) {
      let remainingLitres = kilolitresUsed - 10.5;
      totalcost =
        6 * costPerKilolitre1 +
        4.5 * costPerKilolitre2 +
        remainingLitres * costPerKilolitre3;
    } else {
      let remainingLitres = kilolitresUsed - 35;
      totalcost =
        6 * costPerKilolitre1 +
        4.5 * costPerKilolitre2 +
        24.5 * costPerKilolitre3 +
        remainingLitres * costPerKilolitre4;
    }
    console.log("Regular household: R" + totalcost.toFixed(2));
  } else {
    console.log(
      "Invalid household type. Please enter 'Indigent' or 'Regular'."
    );
  }
}
