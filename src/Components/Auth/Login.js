// Components/Auth/Login.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password
        });
  
        if (res.data.success) {
          localStorage.setItem('token', res.data.token);
          navigate('/home');
        } else {
          alert('Login failed: ' + res.data.message);
        }
  
      } catch (error) {
        alert('Error: ' + error.message);
      }
    };
  
    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
  
            <button type="submit" className="btn-primary">Login</button>
          </form>
  
          <p className="form-footer">
            Don't have an account? <Link to="/signup" className="link">Sign up</Link>
          </p>
        </div>
      </div>
    );
  }
  
export default Login;
