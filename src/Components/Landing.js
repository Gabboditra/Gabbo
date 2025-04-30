import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Landing() {
    const navigate=useNavigate();
    const [username, setUsername] = useState("");

const inputRef= useRef(null);
useEffect(() => {
  inputRef.current.focus();
}, []);
return (
  <div className="tab-content"> 
  <input type="text"
  placeholder="Enter your name"
  className="form-control"
  onChange={(e) => setUsername(e.target.value) }
  value={username}
  ref={inputRef}
  />
  <button classname="btn btn-primary mt-2" onClick={() =>
      
      {if (username.trim()) { navigate("/Landing", { state: { username } });
    } else {alert("Please enter a name");
    } 
    }} 
    
    >Login</button>   
</div>
);
}

