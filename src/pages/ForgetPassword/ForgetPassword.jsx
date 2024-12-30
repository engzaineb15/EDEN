import React from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';

const ForgetPassword = () => {
  return (
    <div className="container-forgetpassword">
      <div className="form-section-forgetpassword">
        <div className="welcome-text-forgetpassword">
          <h1>Forget Your <br />Password?</h1>
        </div>
        <form id="form">
          <div className="form-field-forgetpassword">
            <input type="email" id="email" placeholder="Enter your E-mail" />
            <label htmlFor="email">E-mail</label>
            <div className="divider"></div>
            <button className="send-button">Send</button>
          </div>
          <div className="form-field-forgetpassword">
            <input type="text" id="Verification" placeholder="Enter Verification code" />
            <label htmlFor="Verification">Verification</label>
          </div>
          <Link to="/reset-password">
            <button type="button" className="next-button">Next</button>
          </Link>
        </form>
      </div>

      <div className="image-section-ForgetPassword">
      <img src={require('../../assets/images/background.jpg')} alt="Background" className="background-image-login" />
      <div className="image-overlay"></div>
      </div>

      <div className="back-icon">
        <Link to="/">
          <img src={require("../../assets/images/home.png")} alt="Back" />
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
