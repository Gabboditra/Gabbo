import React from "react";
import "./App.css";

{
  /*importing profile picture from Gabbo.jpg*/
}
import Gabbo from "./Gabbo.jpg";

{
  /*creating User Details object to store personal and shopping cart information*/
}
const userDetails = {
  firstName: "Gabriele",
  surname: "Di Trapani",
  dateOfBirth: "21-o4-1993",
  address: "123 Main St, Preston",
  country: "UK",
  email: "123@gmail.com",
  telephone: "1234567890",
  company: "HyperionDev",
  profilePicture: Gabbo,
  shoppingCart: [
    { item: "Smartphone", price: 500 },
    { item: "Headphones", price: 100 },
    { item: "Power Bank", price: 50 },
  ],
};

{
  /* creating a main App component to display user details and shopping cart*/
}
function App() {
  return (
    <div className="App">
      <h1> Welcome to the react-hello App. </h1>

      <div className="user-details">
        <h2> {`${userDetails.firstName} ${userDetails.surname}`} </h2>
        <img
          src={userDetails.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <p>
          {" "}
          <strong>Date of Birth: </strong> {`${userDetails.dateOfBirth}`}{" "}
        </p>
        <p>
          {" "}
          <strong>Address: </strong>{" "}
          {`${userDetails.address},${userDetails.country}`}{" "}
        </p>
        <p>
          {" "}
          <strong>Email: </strong> {`${userDetails.email}`}{" "}
        </p>
        <p>
          {" "}
          <strong> Telephone: </strong> {`${userDetails.telephone}`}{" "}
        </p>
        <p>
          {" "}
          <strong> Company: </strong> {`${userDetails.company}`}{" "}
        </p>
      </div>

      <h3>Shopping Cart:</h3>
      <ul className="shopping-cart">
        {userDetails.shoppingCart.map((item, index) => (
          <li key={index}>
            {item.item} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
