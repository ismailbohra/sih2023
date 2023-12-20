import React from "react";
import "./singlestudent.css";
import { useNavigate } from "react-router-dom";

export default function SingleStudent({
  id,
  name,
  enroll,
  showReport,
  setShowReport,
}) {
  const navigate = useNavigate();
  const navigateto = (id) => {
    navigate("/teacher/addfeedback", { state: { student_id: id } });
  };
  const navigatetoshow = (id) => {
    navigate("/teacher/report", { state: { student_id: id } });
  };

  return (
    <div className="SingleStudentContainer">
      <div className="studentinfo">
        <div className="name">{name}</div>
        <div className="enroll">
          <span>{enroll}</span>
          {setShowReport && (
            <button onClick={() => navigateto(id)} className="feedback">
              Give Feedback
            </button>
          )}
          {setShowReport && (
            <button
              className="viewreport"
              onClick={() => navigatetoshow(id)}
            >
              View Report
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
