import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Container/Common/Landing/Landing";
import Dashboard from "./Container/Student/Dashboard/Dashboard";
import StudentOutlet from "./Container/Student/StudentOutlet";
import Report from "./Container/Student/Reports/Report";
import TeacherOutlet from "./Container/Teacher/TeacherOutlet";
import Login from "./Container/Common/Login/Login";

function App() {
  return (
    <div className="root_container">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/student" element={<StudentOutlet />}>
              <Route path="" element={<Dashboard />}></Route>
              <Route path="report" element={<Report />}></Route>
            </Route>
            <Route path="/teacher" element={<TeacherOutlet />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
