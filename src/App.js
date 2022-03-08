import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Lessons from "./pages/Lessons";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Users from "./pages/Users";
import Profile from "./components/Admin";
import AddUser from "./pages/AddUser";

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
      </Routes>
    </div>
  );
}

export default App;
