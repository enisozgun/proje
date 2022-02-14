import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">School App</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
                <Link to="/">Main</Link>
             
                <Link to="/login">Login</Link>
     
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
