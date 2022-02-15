import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  let currentPage = window.location.pathname;
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">School App</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            {currentPage == "/login" ? (
              <>
                <Link to="/login">Login</Link>
              </>
            ) : (
              <>
                <Link to="/login">Log out</Link>
                <Link to="/admin">Admin</Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
