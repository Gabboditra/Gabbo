import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header({ username }) {
  const location=useLocation();
  const navigate=useNavigate();

  return (
    <header>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Registration">Register</Link>
      </nav>
      {username && <p>Welcome, {username}!</p>}
    </header>
  );
}
