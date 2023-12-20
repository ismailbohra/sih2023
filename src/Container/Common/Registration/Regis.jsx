import React, { useState } from "react";
import "./Regis.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectedOption: "", // New state for radio buttons
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, selectedOption: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const postData = {
      email: formData.email,
      password: formData.password,
      role: formData.selectedOption,
      username: formData.username,
    };
    fetch("http://172.172.170.251:5000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="registration-container">
      <h2 className="res_head">Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* ... */}

        {/* Radio buttons */}
        <div className="form-group">
          <label>Select the Role:</label>
          <div>
            <label>
              <input
                type="radio"
                name="selectedOption"
                value="student"
                checked={formData.selectedOption === "student"}
                onChange={handleRadioChange}
              />
              Student
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="selectedOption"
                value="teacher"
                checked={formData.selectedOption === "teacher"}
                onChange={handleRadioChange}
              />
              Teacher
            </label>
          </div>
        </div>

        {/* Submit button */}
        <button className="submit-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
