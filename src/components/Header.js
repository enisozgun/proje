import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../storage/UserContext";

function Header() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  function Logout() {
    user.logout();
    navigate("/");
  }
  function Decider() {
    if (user.user.roleName === "SYSADMIN") {
      return (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/users">Users</Link>
          <Link to="/teachers">Teachers</Link>
          <Link to="/students">Students</Link>
          <Link to="/lessons">Lessons</Link>
        </>
      );
    } else if (user.user.roleName === "MANAGER") {
      return (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/manager-teachers">Teachers</Link>
          <Link to="/manager-students">Students</Link>
        </>
      );
    } else if (user.user.roleName === "STUDENT") {
      return (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/student-lessons">Lessons</Link>
          <Link to="/student-my-lessons">My Lessons</Link>
        </>
      );
    } else if (user.user.roleName === "TEACHER") {
      return (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/teacher-lessons">Lessons</Link>
        </>
      );
    }
  }
  const header = Decider();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>School App</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">{header}</Nav>
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
