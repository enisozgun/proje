import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import UserContext from "../store/UserContext";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const currentUser = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [deleteID,setDeleteID]=useState();
  const [isLoading,setIsLoading]=useState(false);

  useEffect(() => {
    if (deleteID != undefined) {
      setIsLoading(false)
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/admin/user" + "/" + deleteID,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.user.token}`,
          },
        }
      ).then(setIsLoading(false))
      .then(setIsLoading(false))
    }
  }, [deleteID]);

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
        setUsers(data);setIsLoading(true)
      });
  }, [isLoading]);

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
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => {setDeleteID(user.id)}}
                    className="btn btn-light"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <button className="btn btn-dark" onClick={() => navigate("/add-user")}>
        Add New User
      </button>
    </div>
  );
}
export default Users;
