import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import UserContext from "../store/UserContext";
import { Table } from 'react-bootstrap';

function Users() {
  const currentUser = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${currentUser.user.token}`,
    },
  };
  useEffect(() => {
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/admin/users",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>User List</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) =>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Users;
