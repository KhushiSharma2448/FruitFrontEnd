import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const signIn = async (e) => {
    e.preventDefault();
    
    try {
      // Check if the login was successful
      if (response.status == 200) {
        console.log('Login successful');
        // Navigate to home page or dashboard
        navigate('/home');
      } else {
        console.log('Login failed');
      }
    } catch (err) {
      console.error("Error during login", err);
      console.log("Wrong credentials");
    }
  };

  return (
    <>
      <div className="body">
        <div className="main">
          <div className="login">
            <form onSubmit={signIn}>
              <label htmlFor="chk" aria-hidden="true" className="label-login">Login</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="inputform"
                required
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="inputform"
                required
                onChange={handleChange}
              />
              <button className="sub-button" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
