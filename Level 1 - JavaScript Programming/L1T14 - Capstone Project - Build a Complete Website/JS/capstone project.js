// async function to get a random meal based on the user input
async function getRandomMeal() {
  try {
    // prompt user for main ingredient
    let userInput = prompt("What is your main ingredient?");

    //validate user input; return getRandomMeal function if empty or canceled
    if (userInput === null || userInput.trim() === "") {
      console.log("You must enter a value. Please try again.");
      return getRandomMeal(); // Recursive call
    }

    //set the user input to lowercase and replace spaces
    userInput = userInput.toLowerCase().replace(/\s/g, "_");

    // fetch meals based on the ingredients from the API
    const mealResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        userInput
      )}`
    );

    // if the data is not fetched successfully, display an error
    if (!mealResponse.ok) {
      throw new Error("could not fetch meals");
    }

    // parse the JSON response
    const mealData = await mealResponse.json();

    // if no meals are found, log a message and and prompt again
    if (!mealData.meals) {
      alert("No meals found with that ingredient. Please try again.");
      return getRandomMeal();
    }

    // generate a random meal from the list
    const randomMeal =
      mealData.meals[Math.floor(Math.random() * mealData.meals.length)];

    // Determine order number
    let lastOrderNumber = sessionStorage.getItem("lastOrderNumber");
    lastOrderNumber = lastOrderNumber ? parseInt(lastOrderNumber) : 0;
    const newOrderNumber = lastOrderNumber + 1;

    // randomly mark order as completed or not
    const isCompleted = Math.random() > 0.5;

    // create order object including properties: meal name, order number, meal ID and status
    const order = {
      mealName: randomMeal.strMeal,
      orderNumber: newOrderNumber,
      mealId: randomMeal.idMeal,
      status: isCompleted, // true: completed ; fals: incomplete
    };

    // Save order to session storage
    let orderList = JSON.parse(sessionStorage.getItem("orders")) || [];
    orderList.push(order);
    sessionStorage.setItem("orders", JSON.stringify(orderList));
    sessionStorage.setItem("lastOrderNumber", newOrderNumber.toString());

    // log order details to user
    alert(`order placed: 
      -order number:${order.orderNumber}
      -meal:${order.mealName}
      -ID:${order.mealId}
      -Status: ${order.status ? "completed" : "incomplete"}`);

// Filter incomplete orders
const incompleteOrders = orderList.filter(o => !o.status);

if (incompleteOrders.length > 0) {
  // Build display string
  let displayText = "Incomplete Orders:\n";
  incompleteOrders.forEach(o => {
    displayText += `Order Number: ${o.orderNumber}, Meal: ${o.mealName}\n`;
  });
        
   // prompt user to mark order as complete or incomplete
  let followUp = prompt(
    `${displayText}\nEnter the numeric order number to mark as complete, or 0 if you did not complete it.`
  );

  if (followUp !== null) {
    const selectedNumber = parseInt(followUp.trim()); // parse number from input

    if (selectedNumber === 0) {
      alert("thank you for your confirmation. Your order remains incompleted.");
    } else {

         // find matching order in the list
      const selectedOrder = orderList.find(
        o => o.orderNumber === selectedNumber
      );

          // if order exists and is not already completed
      if (selectedOrder && !selectedOrder.status) {
        selectedOrder.status = true; // mark as completed

        sessionStorage.setItem("orders", JSON.stringify(orderList));

        alert("thank you for your confirmation. Your order is now completed");
      } else {
        alert("Order number does not exist or is already completed.");
      }
    }

    return getRandomMeal(); // start again
  }

    }   
  } catch (error) {
    //handle error
    console.error("error fetching data", error);
  }
}
//call the function to run
getRandomMeal();
