import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import UserContext from "../../store/UserContext";
import { Table } from "react-bootstrap";

function ManagerStudents() {
  const navigate = useNavigate();
  const currentUser = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteID, setDeleteID] = useState();

  useEffect(() => {
    fetch("https://smapi.eu-west-3.elasticbeanstalk.com/management/students", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${currentUser.user.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(true);
      });
  }, [isLoading]);

  useEffect(() => {
    if (deleteID !== undefined) {
      setIsLoading(false);
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/management/student" +
          "/" +
          deleteID,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${currentUser.user.token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then(setIsLoading(false))
        .then(setIsLoading(false));
    }
  }, [deleteID]);

  return (
    <div>
      <Header />
      <h1>Students List</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Number</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Username</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>School ID</th>
              <th>School Name</th>
              <th>School Address</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.studentId}</td>
                <td>{user.studentNo}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.username}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.schoolId}</td>
                <td>{user.schoolName}</td>
                <td>{user.schoolAdress}</td>
                <td>
                  <button
                    onClick={() => {
                      setDeleteID(user.id);
                    }}
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
      <button className="btn btn-dark" onClick={() => navigate("/manager-add-student")}>
        Add New Student
      </button>
    </div>
  );
}
export default ManagerStudents;
