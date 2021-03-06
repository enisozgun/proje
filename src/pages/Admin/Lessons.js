import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import UserContext from "../../storage/UserContext";
import { Table } from 'react-bootstrap';

function Lessons() {

  const navigate= useNavigate();
  const currentUser=useContext(UserContext);
  const [lessons,setLessons]=useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const [deleteID,setDeleteID]=useState();

  useEffect(() => {
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/admin/lessons",{
      method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${currentUser.user.token}`}}
    )
      .then((response) => response.json())
      .then((data) => {
        setLessons(data);setIsLoading(true)
      });
  }, [isLoading]);

  useEffect(() => {
    if (deleteID !== undefined) {
      setIsLoading(false)
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/admin/lesson" + "/" + deleteID,
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

  return (
    <div>
      <Header />
      <h1>Lessons List</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Teacher Name</th>
              <th>Teacher ID</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <tr>
                <td>{lesson.id}</td>
                <td>{lesson.name}</td>
                <td>{lesson.subject}</td>
                <td>{lesson.teacherName}</td>
                <td>{lesson.teacherId}</td>
                <td>
                  <button
                    onClick={() => {setDeleteID(lesson.id)}}
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
      <button className="btn btn-dark" onClick={() => navigate("/add-lesson")}>
        Add New Lesson
      </button>
    </div>
  );
}
export default Lessons;
