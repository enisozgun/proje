import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import AddTeacherManager  from "./pages/Manager/AddTeacherManager";
import TeacherLessons from "./pages/Teacher/TeacherLessons";
import AddLessonTeacher from "./pages/Teacher/AddLessonTeacher";
import StudentLessons from "./pages/Student/StudentLessons";
import StudentMyLessons from "./pages/Student/StudentMyLessons";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-lesson" element={<AddLesson />} />

        <Route path="/manager-teachers" element={<ManagerTeachers />} />
        <Route path="/manager-students" element={<ManagerStudents />} />
        <Route path="/manager-add-student" element={<AddStudentManager />} />
        <Route path="/manager-add-teacher" element={<AddTeacherManager />} />
      
        <Route path="/teacher-lessons" element={<TeacherLessons />} />
        <Route path="/teacher-add-lesson" element={<AddLessonTeacher />} />
      
        <Route path="/student-lessons" element={<StudentLessons />} />
        <Route path="/student-my-lessons" element={<StudentMyLessons />} />
      </Routes>
    </div>
  );
}

export default App;
