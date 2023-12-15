import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import RightSide from "../../Components/RightSide/RightSide";
import "./TeacherOutlet.css";

function StudentOutlet({showReport,setShowReport }) {
  window.onload = function() {
    if(window.location.href === "http://localhost:3000/teacher/mystudent") {
        document.body.style.overflow = "auto"; // Show scrollbar
    } else {
        document.body.style.overflow = "hidden"; // Hide scrollbar
    }
}
  return (
    <div className="AppGlassTeacher">
      <Sidebar type={'teacher'}/>
   <div className="outlet"> 
        <Outlet />
       </div> 
      
    </div>
  );
}

export default StudentOutlet;
