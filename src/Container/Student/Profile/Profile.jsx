import { useState } from "react";
import ProgressChart from "./Progress/ProgressChart";
import './profile.css'
export default (props) => {
  const profilePic = props.profilePic;
  const name = props.name || "Riya";
  const designation = props.designation || "Student";
  const age = props.age || "22";
  const description =
    props.description ||
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            urna eu turpis viverra posuere nec at libero.`;
  const progressItems = ["Address", "Payment", "Shipping", "Summary"];
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="card shadow-sm" style={{ width: "350px" }}>
        <div>
          <div className="text-center justify-content-center">
            <img
              className="bd-placeholder-img rounded-circle m-4 mb-3"
              width="70"
              height="70"
              src={profilePic}
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></img>
            <h5 className="fw-bolder p-0">{name}</h5>
            <p className="m-0">{designation}</p>

            <p>{age}</p>
          </div>
        </div>

        <hr className="p-0 m-0" />
        <div className="card-body">
          <h6>Description</h6>
          <p className="card-text">{description}</p>
        </div>
        <hr className="p-0 m-0" />
        <div className="card-body p-0">
          {/* <ProgressBar progressItems={progressItems} currTask={2} />
          <p
            className="d-flex justify-content-between p-0 m-0"
            style={{ color: "#5e0989" }}
          >
            {progressItems.map((item, index) => {
              return <span>{item}</span>;
            })}
          </p> */}
          <ProgressChart />
          <button
            type="button"
            className="btn btn-primary p-1 px-3 mb-2"
            style={{ position: "relative", left: "250px" }}
            onClick={{}}
          >
            Report
          </button>
        </div>
      </div>
    </div>
  );
};
