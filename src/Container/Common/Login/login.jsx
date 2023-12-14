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
    if (user.username == "student" && user.password == "12345") {
      navigate('../student')
    } else if (user.username == "teacher" && user.password == "12345") {
      navigate('../teacher')
    }
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
          Success
        </Button>
      </div>
    </div>
  );
}

export default Login;
