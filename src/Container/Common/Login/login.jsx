import React, { useState } from "react";
import "./Login.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target; // Corrected destructuring here
    setuser((e) => ({
      ...e,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const submitlogin = () => {
    const postData = {
      email: user.username,
      password: user.password,
    };
    fetch("http://172.172.170.251:5000/api/v1/user/login", {
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
        console.log("Success:", data);
        localStorage.setItem('userId',data.user._id)
        switch (data.user.role) {
          case 'student':
            navigate("/student");
            break;
          case 'teacher':
            navigate("/teacher");
            break;
        
          default:
            break;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="login_container">
      <div className="login">
        <h1>Login</h1>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          value={user.username}
          onChange={handleChange}
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          name="password"
          value={user.password}
          variant="outlined"
          onChange={handleChange}
          sx={{ width: "100%" }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            submitlogin();
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
