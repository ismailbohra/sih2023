import React, { useState } from "react";
import "./Regis.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const postData = {
      email: formData.email,
      password: formData.password,
      role: "student",
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
        navigate("/teacher/addstudent");
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="main_container">
      <div className="registration-container">
        <h2 className="res_head">Add Student</h2>
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

          {/* Submit button */}
          <button className="submit-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
