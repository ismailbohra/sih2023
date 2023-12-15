import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import Profile from "../../Container/Student/Profile/Profile";

const RightSide = () => {
  return (
    <div className="RightSide">
      {/* <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div> */}
      <Profile></Profile>






    </div>
  );
};

export default RightSide;
