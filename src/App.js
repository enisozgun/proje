import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Admin from "./components/Admin";
import Lessons from "./pages/Lessons";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/users" element={<Users />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
