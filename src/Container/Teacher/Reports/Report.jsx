import React, { useState, useEffect } from "react";
import Cards from "../../../Components/Cards/Cards";
import "./Report.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
function Report() {
  const { state } = useLocation();
  const student_id = state?.student_id;
  let id = student_id;

  const [cardData, setCardData] = useState([]);
  const [faculty, setfaculty] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://172.172.170.251:5000/api/v1/user/user-details/${id}`
        );
        const apiData = response.data.performanceMetrics;
        setfaculty(response.data.facultyFeedback);

        console.log("apiData", apiData);
        const updatedCardData = apiData.map((metric) => ({
          title: metric.title,
          color: metric.color,
          barValue: metric.barValue,
          value: "25,970", // This can be updated as per your requirement
          png: "UilUsdSquare", // This can be updated as per your requirement
          series: metric.series,
        }));
        setCardData(updatedCardData);
        // setCardData(cardData)
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {faculty == 1 ? (
        <div className="MainDash">
          <Cards cardData={cardData} />
        </div>
      ) : (
        <>
          <div className="MainDash">
            <h5>Student Test is pending</h5>
            <Cards cardData={cardData} />
          </div>
        </>
      )}
    </>
  );
}

export default Report;
