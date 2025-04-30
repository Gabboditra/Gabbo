import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

export default function Products({ setSum, setShowTotal }) {
const navigate=useNavigate();
  const location = useLocation();
const state=location.state;
const username = state?.username;

const handleBuy = (price) => {
  setSum((prevSum) => prevSum + price);
  setShowTotal(true);
};

const items = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    description: "High-quality Bluetooth headphones with noise cancellation."
  },
  {
    id: 2,
    title: "Smartphone Stand",
    price: 15.49,
    description: "Adjustable stand for phones and small tablets."
  },
  {
    id: 3,
    title: "USB-C Charger",
    price: 25.00,
    description: "Fast-charging USB-C power adapter for multiple devices."
  },
  {
    id: 4,
    title: "Gaming Mouse",
    price: 49.95,
    description: "Ergonomic mouse with RGB lighting and customizable buttons."
  },
  {
    id: 5,
    title: "4K Monitor",
    price: 299.99,
    description: "Ultra HD display with vibrant color and fast refresh rate."
  },
  {
    id: 6,
    title: "Mechanical Keyboard",
    price: 89.95,
    description: "Backlit keyboard with blue switches and metal frame."
  },
  {
    id: 7,
    title: "Laptop Backpack",
    price: 45.00,
    description: "Water-resistant backpack with padded laptop compartment."
  },
  {
    id: 8,
    title: "Webcam 1080p",
    price: 39.99,
    description: "Full HD webcam with built-in microphone."
  },
  {
    id: 9,
    title: "Portable SSD 1TB",
    price: 129.00,
    description: "Compact solid-state drive with USB 3.2 for fast transfers."
  },
  {
    id: 10,
    title: "Smart LED Light Bulb",
    price: 12.99,
    description: "Color-changing bulb controllable via app or voice assistant."
  }
];

const itemsList=items.map((item) => {
  return(
      <Card style={{ width: "18rem", margin: "1rem" }} key={item.title}>
           <Card.Img variant="top" src={item.image} />
           <Card.Body>
             <Card.Title>{item.title}</Card.Title>
             <Card.Text>${item.price}</Card.Text>
             <Card.Text>{item.description}</Card.Text>

 <Button onClick={() => handleBuy(item.price)}>Buy</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      {username ? (
        <>
          <h2>Welcome to the store</h2>
          {itemsList}
        </>
      ) : (
        <p>Please log in to view products.</p>
      )}
    </div>
  );
