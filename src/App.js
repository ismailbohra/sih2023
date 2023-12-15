import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Container/Common/Landing/Landing";
import Dashboard from "./Container/Student/Dashboard/Dashboard";
import StudentOutlet from "./Container/Student/StudentOutlet";
import Report from "./Container/Student/Reports/Report";
import TeacherOutlet from "./Container/Teacher/TeacherOutlet";
import Login from "./Container/Common/Login/login";
import Profile from "./Container/Student/Profile/Profile";
import AddQuestion from "./Container/Teacher/AddQuestion/AddQuestion";
import MyStudent from "./Container/Teacher/My Students/MyStudent";

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
              <Route path="profile" element={<Profile />}></Route>
              <Route path="report" element={<Report />}></Route>
            </Route>
            <Route path="/teacher" element={<TeacherOutlet />}>
              <Route path="" element={<Dashboard />}></Route>
              <Route path="addquestion" element={<AddQuestion />}></Route>
              <Route path="mystudent" element={<MyStudent />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="report" element={<Report />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
