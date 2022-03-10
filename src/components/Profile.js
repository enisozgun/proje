import { useContext } from "react";
import Header from "./Header";
import UserContext from "../storage/UserContext";
import { Table } from "react-bootstrap";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <Header />
      <div className="col-sm-8 offset-sm-20">
        <Table striped bordered hover>
            <tr>
              <tr>{"ID: " + user.user.id}</tr>
              <tr>{"Username: " + user.user.username}</tr>
              <tr>{"First Name: " + user.user.firstName}</tr>
              <tr>{"Last Name: " + user.user.lastName}</tr>
              <tr>{"Role Name: " + user.user.roleName}</tr>
            </tr>
        </Table>
      </div>
    </div>
  );
}

export default Profile;
