import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import UserContext from "../../store/UserContext";

function AddStudent() {
  const navigate = useNavigate();
  const currentUser = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState();
  const [schoolId, setSchoolId] = useState();
  const [studentNo, setStudentNo] = useState();
  const student = { studentNo: studentNo, schoolId: schoolId, userId: userId };

  function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
  }

  useEffect(() => {
    if (isLoading) {
      fetch("https://smapi.eu-west-3.elasticbeanstalk.com/admin/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.user.token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          studentNo: student.studentNo,
          schoolId: student.schoolId,
          userId: student.userId,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          if (data.title === "One or more validation errors occurred.") {
            setIsLoading(false);
            alert("Validation error");
          }
          if (data === "Student added") {
            navigate("/students");
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
            id="StudentNo"
            className="form-control"
            placeholder="student no"
            required
            type="text"
            onChange={(e) => setStudentNo(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            id="SchoolId"
            className="form-control"
            placeholder="school ID"
            required
            type="text"
            onChange={(e) => setSchoolId(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            id="UserId"
            className="form-control"
            placeholder="user ID"
            required
            type="text"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button className="btn btn-dark">Add Student</button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
