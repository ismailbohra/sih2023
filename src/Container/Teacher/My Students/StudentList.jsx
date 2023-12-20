import React, { useEffect, useState } from "react";
import SingleStudent from "./StudentInfo/SingleStudent/SingleStudent"; // make sure to import SingleStudent
import Report from "./StudentInfo/Report/Report";
import "./StudentList.css";
import { useNavigate } from "react-router-dom";

function MyStudent() {
  const [showReport, setShowReport] = useState(false);

  
  const [student, setstudent] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/faculty/getstudent`)
      .then((response) => response.json())
      .then((resp) => {
        setstudent(resp.data);
        console.log(resp);
      })
      .catch((error) => {
        console.error("Error during GET request:", error);
      });
  }, []);
  console.log(student);

  return (
    <>
      <h1 className="StudentListHeading">MyStudent</h1>

      <div className="container">
        <div className="Students">
          {/* <SingleStudent className="Heading" name={"NAME"} enroll={"Enrollment Number"} showReport={false} setShowReport={false}></SingleStudent> */}
          <SingleStudent
            className="Heading first-student"
            name={"NAME"}
            enroll={"E-mail"}
            showReport={false}
            setShowReport={false}
          ></SingleStudent>

          {student &&
            student.length > 0 &&
            student.map((student, index) => (
             
                <SingleStudent
                  key={index}
                  name={student.username}
                  enroll={student.email}
                  id={student._id}
                  showReport={showReport}
                  setShowReport={setShowReport}
                />
            ))}
        </div>

        {showReport && (
          <div className="SReport">
            <Report></Report>
          </div>
        )}
      </div>
    </>
  );
}

export default MyStudent;
