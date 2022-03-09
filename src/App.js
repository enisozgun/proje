import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Lessons from "./pages/Admin/Lessons";
import Teachers from "./pages//Admin/Teachers";
import Students from "./pages/Admin/Students";
import Users from "./pages/Admin/Users";
import Profile from "./components/Profile";
import AddUser from "./pages/Admin/AddUser";
import AddTeacher from "./pages/Admin/AddTeacher";
import AddStudent from "./pages/Admin/AddStudent";
import AddLesson from "./pages/Admin/AddLesson";
import ManagerTeachers from "./pages/Manager/ManagerTeachers";
import ManagerStudents from "./pages/Manager/ManagerStudents";
import AddStudentManager from "./pages/Manager/AddStudentManager";
import AddTeacherManager from "./pages/Manager/AddTeacherManager";
import TeacherLessons from "./pages/Teacher/TeacherLessons";
import AddLessonTeacher from "./pages/Teacher/AddLessonTeacher";
import StudentLessons from "./pages/Student/StudentLessons";
import StudentMyLessons from "./pages/Student/StudentMyLessons";
import UserContext from "./store/UserContext";
import { useContext } from "react";

function App() {
  const currentUser = useContext(UserContext);

  function validation(roleName) {
    if (currentUser.user.roleName === roleName) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={validation("SYSADMIN")?<Users />:<LoginPage />} />
        <Route path="/lessons" element={validation("SYSADMIN")?<Lessons />:<LoginPage />} />
        <Route path="/teachers" element={validation("SYSADMIN")?<Teachers />:<LoginPage />} />
        <Route path="/students" element={validation("SYSADMIN")?<Students />:<LoginPage />} />
        <Route path="/add-user" element={validation("SYSADMIN")?<AddUser />:<LoginPage />} />
        <Route path="/add-teacher" element={validation("SYSADMIN")?<AddTeacher />:<LoginPage />} />
        <Route path="/add-student" element={validation("SYSADMIN")?<AddStudent />:<LoginPage />} />
        <Route path="/add-lesson" element={validation("SYSADMIN")?<AddLesson />:<LoginPage />} />

        <Route path="/manager-teachers" element={validation("MANAGER")?<ManagerTeachers />:<LoginPage />} />
        <Route path="/manager-students" element={validation("MANAGER")?<ManagerStudents />:<LoginPage />} />
        <Route path="/manager-add-student" element={validation("MANAGER")?<AddStudentManager />:<LoginPage />} />
        <Route path="/manager-add-teacher" element={validation("MANAGER")?<AddTeacherManager />:<LoginPage />} />

        <Route path="/teacher-lessons" element={validation("TEACHER")?<TeacherLessons />:<LoginPage />} />
        <Route path="/teacher-add-lesson" element={validation("TEACHER")?<AddLessonTeacher />:<LoginPage />} />

        <Route path="/student-lessons" element={validation("STUDENT")?<StudentLessons />:<LoginPage />} />
        <Route path="/student-my-lessons" element={validation("STUDENT")?<StudentMyLessons />:<LoginPage />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
