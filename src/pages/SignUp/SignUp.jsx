import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [companyField, setCompanyField] = useState(false);

  const handleSwitchForm = (type) => {
    setActiveTab(type);
    setCompanyField(type === 'corporate');
  };

  return (
    <div className="container-singup">
      <div className="form-section-singup">
        <div className="welcome-text-singup">
          <h1>Get Started Now!</h1>
        </div>
        <div className="tabs-singup">
          <div
            className={`tab ${activeTab === 'individual' ? 'active' : ''}`}
            onClick={() => handleSwitchForm('individual')}
          >
            Individual
          </div>
          <div
            className={`tab ${activeTab === 'corporate' ? 'active' : ''}`}
            onClick={() => handleSwitchForm('corporate')}
          >
            Corporate
          </div>
        </div>
        <form id="form">
          <div className="form-field-singup">
            <input type="text" id="name" placeholder="Type your name here" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-field-singup">
            <input type="email" id="email" placeholder="Enter your E-mail" />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="form-field-singup">
            <input type="text" id="phone" placeholder="Enter your phone number" />
            <label htmlFor="phone">Phone</label>
          </div>
          {companyField && (
            <div className="form-field-singup">
              <input type="text" id="company" placeholder="Enter company name" />
              <label htmlFor="company">Company</label>
            </div>
          )}
          <div className="form-field-singup">
            <input type="password" id="password" placeholder="Enter your password" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="terms-link-singup">
            <label className="terms-label">
              <input type="checkbox" id="terms" />
              <span>
                I agree to the <a href="#">terms & policy</a>
              </span>
            </label>
          </div>


          <button type="submit" className="SignUp-button">Sign Up</button>


          <p className="login-link-singup">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className="image-section-singup"></div>

      <div className="image-section-singup">
        <img src={require('../../assets/images/background.jpg')} alt="Background" className="background-image-login" />
        <div className="image-overlay"></div>

      </div>


      <div className="back-icon">
    
        <a href="/">
          <img src={require("../../assets/images/home.png" )}alt="Back" />
        </a>

      </div>

    </div>
  );
};

export default SignUp;
