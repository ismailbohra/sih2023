import React from "react";
import "./progressBar.css";
const ProgressBar = (props) => {
  const progressItems = props.progressItems;
  const currTask = props.currTask;
  return (
    <div id="container" className="container">
      <div className="progress px-1" style={{ height: "3px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${currTask * 33.33}%` }}
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="step-container d-flex justify-content-between">
        {progressItems.map((item, index) => {
          return (
            <div className={`step-circle ${index <= currTask ? "active" : ""}`}>
              {index < currTask ? "✔️" : index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
