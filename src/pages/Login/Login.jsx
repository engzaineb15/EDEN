import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate('/forget-password');
  };

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

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" id="remember-me" />
              Remember me
            </label>
            <span className="forgot-password" onClick={handleForgotPassword}>
              Forget Password?
            </span>
          </div>

          <button type="submit" className="login-button">Login</button>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
      <div className="image-section-login">
        <img src={require('../../assets/images/background.jpg')} alt="Background" className="background-image-login" />
        <div className="image-overlay"></div>

      </div>
    </div>
  );
};

export default Login;
