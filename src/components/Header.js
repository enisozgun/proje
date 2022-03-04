import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../store/UserContext";

function Header() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  function Logout() {
    user.logout();
    navigate("/");    
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">School App</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            {user.user.roleId == null ? (
              <></>
            ) : (
              <>
                <Link to="/admin">Admin</Link>
                <Link to="/users">Users</Link>
                <Link to="/teachers">Teachers</Link>
                <Link to="/students">Students</Link>
                <Link to="/lessons">Lessons</Link>
              </>
            )}
          </Nav>
          {user.user.id != null ? (
            <Nav>
              <NavDropdown title={user.user && user.user.firstName}>
                <NavDropdown.Item onClick={Logout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
