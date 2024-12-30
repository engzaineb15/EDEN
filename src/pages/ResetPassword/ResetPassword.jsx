import React from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
  return (
    <div className="container-Reset">
      <div className="form-section-Reset">
        <div className="welcome-text-Reset">
          <h1>Reset Password</h1>
        </div>
        <form id="form">
          <div className="form-field-Reset">
            <input type="password" id="new-password" placeholder="Enter your new password" />
            <label htmlFor="new-password">New Password</label>
          </div>
          <div className="form-field-Reset">
            <input type="password" id="confirm-password" placeholder="Confirm your new password" />
            <label htmlFor="confirm-password">Confirm Password</label>
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
      <div className="image-section-Reset">
      <img src={require('../../assets/images/background.jpg')} alt="Background" className="background-image-login" />
      <div className="image-overlay"></div>
      </div>
      <div className="back-icon">
        <Link to="/">
          <img src={require('../../assets/images/home.png')} alt="Back" />
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
