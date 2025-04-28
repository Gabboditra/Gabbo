import "./App.css";
import React from "react";
import {Routes, Route, Link } from 'react-router-dom';
import Home from "./Components/Home";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Registration from "./Components/Registration";

export default function App() {
  return (
    <div className="App">
 <h1> Welcome to Amazon Website </h1>
 <nav>
    <Link to="/"> Header </Link>
    <br />
    <Link to="/Products"> Products </Link>
    <br />
    <Link to="/Registration"> Registration </Link>
    <br />
    <Link to="/Cart"> Cart </Link>
    <br />
    <Link to="/Home"> Home </Link>
    </nav>
 
   <Routes>
<Route path="/" element={<Header />} />
<Route path="/Products" element={<Products />} />
<Route path="/Registration" element={<Registration />} />
<Route path="/Cart" element={<Cart />} />
<Route path="/Home" element={<Home />} />
  </Routes>
  </div>
  );
}

