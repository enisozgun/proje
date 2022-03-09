import UserContext from "../../store/UserContext";
import CourseContext from "../../store/CourseContext";
import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import { Table } from "react-bootstrap";

function StudentMyLessons() {
  const currentUser = useContext(UserContext);
  const courseContext = useContext(CourseContext);
  const [items, setItems] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/student/" +
        currentUser.user.id +
        "/lessons",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.user.token}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((json) => {
        setItems(json);
        setIsLoading(true);
      });
  }, [isLoading]);

  useEffect(() => {
    if (deleteId != undefined) {
      setIsLoading(false);
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/student/" +
          currentUser.user.id +
          "/lesson" +
          "/" +
          deleteId,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.user.token}`,
          },
        }
      )
        .then(setIsLoading(false))
        .then(setIsLoading(false));
    }
  }, [deleteId]);

  useEffect(() => {
    courseContext.removeLesson(deleteId);
  }, [deleteId]);

  return (
    <div>
      <Header />
      <h1>My Lessons</h1>
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
            {items.map((lesson) => (
              <tr>
                <td>{lesson.id}</td>
                <td>{lesson.name}</td>
                <td>{lesson.subject}</td>
                <td>{lesson.teacherName}</td>
                <td>{lesson.teacherId}</td>
                <td>
                  <button
                    onClick={() => {setDeleteId(lesson.id)}}
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
    </div>
  );
}
export default StudentMyLessons;
