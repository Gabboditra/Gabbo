// Define income objects
const income1 = { name: "Salary", amount: 2000, recurring: true };
const income2 = { name: "State Pension", amount: 700, recurring: true };
const income3 = { name: "Freelance Work", amount: 300, recurring: true };
const income4 = { name: "Gift", amount: 100, recurring: false };
const income5 = { name: "Charity Contribution", amount: 500, recurring: false };

// Store incomes in an array
const incomes = [income1, income2, income3, income4, income5];

// Define expense objects
const expense1 = { name: "Groceries", amount: 80, recurring: true };
const expense2 = { name: "Health Insurance", amount: 200, recurring: true };
const expense3 = { name: "Rent", amount: 800, recurring: true };
const expense4 = { name: "House Mortgage", amount: 900, recurring: true };
const expense5 = { name: "Gas Bill", amount: 150, recurring: true };

// Store expenses in an array
const expenses = [expense1, expense2, expense3, expense4, expense5];

// Store incomes and expenses in session storage as JSON strings
sessionStorage.setItem("incomes", JSON.stringify(incomes));
sessionStorage.setItem("expenses", JSON.stringify(expenses));

// Retrieve stored incomes and expenses from session storage or use empty arrays if not found
let incomesArray = JSON.parse(sessionStorage.getItem("incomes")) || [];
let expensesArray = JSON.parse(sessionStorage.getItem("expenses")) || [];

// Display incomes and expenses
alert("Incomes: " + JSON.stringify(incomesArray, null, 2));
alert("Expenses: " + JSON.stringify(expensesArray, null, 2));

// Function to calculate disposable income
function updateDisposableIncome() {
  let incomesSum = incomesArray.reduce((sum, income) => sum + income.amount, 0);
  let expensesSum = expensesArray.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  let disposableIncome = incomesSum - expensesSum;

  // Update the disposable income display on the webpage
  document.getElementById(
    "disposableIncome"
  ).innerHTML = `Disposable Income: $${disposableIncome}`;
  return disposableIncome;
}

// Function to add a new income
function addIncome() {
  let name = prompt("Enter new income name:");
  let amount = parseFloat(prompt("Enter the income amount:"));

  // Validate input: name must not be empty, amount must be higher than zero
  if (name && !isNaN(amount) && amount > 0) {
    let newIncome = { name, amount, recurring: false }; // New income object
    incomesArray.push(newIncome); // push the new income object to the incomes array
    sessionStorage.setItem("incomes", JSON.stringify(incomesArray)); // Update session storage
    updateDisposableIncome(); // Recalculate and update UI
  } else {
    alert("Invalid income input.");
  }
}

// Function to add a new expense
function addExpense() {
  let name = prompt("Enter new expense name:");
  let amount = parseFloat(prompt("Enter the expense amount:"));
  if (name && !isNaN(amount) && amount > 0) {
    let newExpense = { name, amount, recurring: false }; // New expense object
    expensesArray.push(newExpense); // push the new expense object to the incomes array
    sessionStorage.setItem("expenses", JSON.stringify(expensesArray)); // Update session storage
    updateDisposableIncome(); // Recalculate and update UI
  } else {
    alert("Invalid expense input.");
  }
}

// Get the latest disposable income
let disposableIncome = updateDisposableIncome();

// prompt the user to save part of their disposable income
let savings = parseFloat(
  prompt(
    `You have $${disposableIncome} disposable income.\nHow much would you like to put into savings?`,
    "0"
  )
);

// Validate the savings input and log a message accordingly
if (!isNaN(savings) && savings >= 0 && savings <= disposableIncome) {
  let totalDisposableLeft = disposableIncome - savings;
  alert(
    `You saved $${savings}!\nRemaining Disposable Income: $${totalDisposableLeft}`
  );
} else {
  alert(`Final Disposable Income: $${disposableIncome}`);
}
