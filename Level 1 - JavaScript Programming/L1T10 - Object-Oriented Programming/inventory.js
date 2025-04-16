// Defining the object constructor
function Shoes(name, productcode, quantity, valueperitem) {
  this.name = name;
  this.productcode = productcode;
  this.quantity = quantity;
  this.valueperitem = valueperitem;
}
// Creating object instances
let shoes1 = new Shoes("Timberland", "TB01", 5, "€80");
let shoes2 = new Shoes("Doc Martens", "DM02", 10, "€130");
let shoes3 = new Shoes("Nike", "NK05", 15, "€70");
let shoes4 = new Shoes("Adidas", "AD67", 20, "€65");
let shoes5 = new Shoes("Converse", "CV45", 25, "€50");
// Holding the shoes instances in an array
const ShoesBrands = [shoes1, shoes2, shoes3, shoes4, shoes5];
// Declaring a function to search for any shoe within an array
function searchShoes(ShoesArray, name) {
  for (let i = 0; i < ShoesArray.length; i++) {
    if (ShoesArray[i].name.toLowerCase() === name.toLowerCase()) {
      return ShoesArray[i];
    }
  }
  return null;
}
// Implementing a function to find the shoe with the lowest value per item
// the reduce method iterates over the array to compare prices
// The replace method removes non-numeric characters
// parseFloat converts the string price into a number
function findLowestValueShoes(ShoesArray) {
  if (ShoesArray.length === 0) return null;
  return ShoesArray.reduce(
    (lowest, shoe) =>
      parseFloat(shoe.valueperitem.replace(/[^0-9.]/g, "")) <
      parseFloat(lowest.valueperitem.replace(/[^0-9.]/g, ""))
        ? shoe
        : lowest,
    ShoesArray[0]
  );
}
// Implementing a function to find the shoe with the highest value per item
// similar logic as findLowestValueShoes but finds the maximum price instead
function findHighestValueShoes(ShoesArray) {
  if (ShoesArray.length === 0) return null;
  return ShoesArray.reduce(
    (highest, shoe) =>
      parseFloat(shoe.valueperitem.replace(/[^0-9.]/g, "")) >
      parseFloat(highest.valueperitem.replace(/[^0-9.]/g, ""))
        ? shoe
        : highest,
    ShoesArray[0]
  );
}
// Defining a function to edit all 4 properties
Shoes.prototype.editProperties = function (
  newName,
  newProductcode,
  newQuantity,
  newValueperitem
) {
  this.name = newName;
  this.productcode = newProductcode;
  this.quantity = newQuantity;
  this.valueperitem = newValueperitem;
};
// Defining a function to sort shoes by price in ascending order
function sortShoes(shoesArray) {
  return shoesArray.sort((a, b) => {
    const aValue = parseFloat(a.valueperitem.replace(/[^0-9.]/g, ""));
    const bValue = parseFloat(b.valueperitem.replace(/[^0-9.]/g, ""));
    return aValue - bValue; // Ascending order
  });
}
// Outputting results to the console
console.log("\n Searching for 'Adidas':");
console.table(searchShoes(ShoesBrands, "Adidas"));

console.log("\n Shoe with the lowest value:");
console.table(findLowestValueShoes(ShoesBrands));

console.log("\n Shoe with the highest value:");
console.table(findHighestValueShoes(ShoesBrands));

console.log("\n Shoes sorted by price in ascending order:");
console.table(sortShoes(ShoesBrands));

// Editing properties of Nike and logging updated list
shoes3.editProperties("Nike Pegasus", "NK77", 18, "€75");
console.log("\n The updated table:");
console.table(ShoesBrands);
