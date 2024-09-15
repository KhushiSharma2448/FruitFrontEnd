import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css"

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    tasks: [],
    isActive: true,
    created_at: new Date()
  });

  const validatePassword = (password) => {
    const re = /(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,}/;
    return re.test(password);
  }

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
        console.log('Login successfully');
        navigate('/home');
        
      
    } catch (err) {
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
              <input type="email" name="email" placeholder="Email" className="inputform" required onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" className="inputform" required onChange={handleChange} />
              <button className="sub-button" >Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;