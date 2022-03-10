import { useState, useContext, useEffect } from "react";
import UserContext from "../../storage/UserContext";
import { useNavigate } from "react-router";
import Header from "../../components/Header";

function AddLesson() {
  const navigate = useNavigate();
  const currentUser = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [teacherId, setTeacherId] = useState();
  const course = { name: name, subject: subject, teacherId: teacherId };

  function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
  }

  useEffect(() => {
    if (isLoading) {
      fetch("https://smapi.eu-west-3.elasticbeanstalk.com/admin/lesson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.user.token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: course.name,
          subject: course.subject,
          teacherId: course.teacherId,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.title === "Validation error") {
            setIsLoading(false);
            alert("Validation error");
          } else if (data === "Lesson added") {
            navigate("/lessons");
          } else if (data === "Lesson created") {
            console.log(data);
            navigate("/lessons");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error");
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  return (
    <div>
      <Header />
      <form onSubmit={submitHandler} className="col-sm-6 offset-sm-3">
        <br />
        <div>
          <input
            id="Name"
            className="form-control"
            placeholder="name"
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            id="Subject"
            className="form-control"
            placeholder="subject"
            required
            type="text"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            id="TeacherId"
            className="form-control"
            placeholder="teacher ID"
            required
            type="text"
            onChange={(e) => setTeacherId(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button className="btn btn-dark">Add Lesson</button>
        </div>
      </form>
    </div>
  );
}
export default AddLesson;
