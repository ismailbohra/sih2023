import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import RightSide from "../../Components/RightSide/RightSide";
import "./StudentOutlet.css";

function StudentOutlet() {
  return (
    <div className="AppGlass">
      <Sidebar type={'student'}/>
      <div className="outlet">
        <Outlet />
      </div>
      <RightSide />
    </div>
  );
}

export default StudentOutlet;
