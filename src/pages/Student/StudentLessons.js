import { useContext, useEffect, useState } from "react";
import UserContext from "../../storage/UserContext";
import CourseContext from "../../storage/CourseContext";
import Header from "../../components/Header";
import TypeItemListStudent from "../../components/StudentComp/TypeItemListStudent";

function StudentLessons() {
  const currentUser = useContext(UserContext);
  const courseContext = useContext(CourseContext);
  const [lessons, setLessons] = useState([]);
  const [takeLessonId, setTakeLessonId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isExecute, setIsExecute] = useState(false);
  const tableItems = [
    "Course ID",
    "Name",
    "Subject",
    "Teacher ID",
    "Teacher Name",
  ];

  useEffect(() => {
    fetch("https://smapi.eu-west-3.elasticbeanstalk.com/student/lessons", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.user.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        setLessons(json);
        setIsLoading(true);
      });
  }, [isLoading]);

  useEffect(() => {
    if (isExecute) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.user.token}`,
          Accept: "application/json",
        },
      };
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/student/" +
          currentUser.user.id +
          "/lesson/" +
          takeLessonId,
        requestOptions
      )
        .then((resp) => resp.json())
        .then((data) => {
          if (data === "Lesson created") {
            setIsExecute(false);
          }
        })
        .catch((err) => {
          alert("Error");
        });
    }
  }, [isExecute]);

  return (
    <div>
      <Header />
      <h1>Lesson List</h1>
      <TypeItemListStudent
        setIsExecute={setIsExecute}
        typeItems={lessons}
        courseContext={courseContext}
        tableItems={tableItems}
        setTakeLessonId={setTakeLessonId}
      />
    </div>
  );
}
export default StudentLessons;
