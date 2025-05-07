import { NavLink, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

// Navigation header with logout and routing links
export default function Header({ username, setUsername }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Amazon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Products">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Cart">
              Cart
            </Nav.Link>
            {!username && (
              <>
                <Nav.Link as={NavLink} to="/Registration">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
          {username && (
            <Nav className="ms-auto">
              <Nav.Item className="text-light me-3">
                Welcome, {username}!
              </Nav.Item>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
