import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Registration from "./Components/Registration";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [sum, setSum]=useState(0);
  const [showTotal, setShowTotal]=useState(false);

  return (
    <div className="App">
      {/* Show header on all pages */}
      <Header username={username} />

      {showTotal && <Products sum={sum} />}

      {/* Main content with routes */}
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Cart" element={<Cart setSum={setSum} setShowTotal={setShowTotal} />} />
        <Route path="/" element={<Landing />} /> {/* optional route to homepage */}
      </Routes>
    </div>
  );
}
