import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Registration from "./Components/Registration";
import Help from './Components/Help';

export default function App() {
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [sum, setSum] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  return (
    <div className="App">
      <Header username={username} setUsername={setUsername} />

      <div className="container mt-4">
        <h1 className="text-primary mb-4">Amazon Clone</h1>

        {showTotal && <p className="lead">Cart Total: ${sum.toFixed(2)}</p>}

        <Routes>
          <Route path="/Products" element={<Products setSum={setSum} setShowTotal={setShowTotal} />} />
          <Route path="/Registration" element={<Registration setUsername={setUsername} />} />
          <Route path="/Cart" element={<Cart sum={sum} />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/" element={<Landing setUsername={setUsername} />} />
        </Routes>
      </div>
    </div>
  );
}
