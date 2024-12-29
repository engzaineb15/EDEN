import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className="form-section">
        <div className="welcome-text">
          <h1>Welcome back!</h1>
          <p>Enter your Credentials to access your account</p>
        </div>
        <form id="form">
          <div className="form-field">
            <input type="email" id="email" placeholder="Enter your E-mail" />
            <label htmlFor="email">E-mail</label>
          </div>

          <div className="form-field">
            <input type="password" id="password" placeholder="Enter your password" />
            <label htmlFor="password">Password</label>
          </div>

          <div className="terms-link">
            <label className="terms-label">
              <input type="checkbox" id="remember" />
              <span>Remember me</span>
            </label>
            <a href="/forget-password" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
          <hr />
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
      <div className="image-section" />
    </div>
  );
};

export default Login;