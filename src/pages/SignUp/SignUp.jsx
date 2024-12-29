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
    <div className="container">
      <div className="form-section">
        <div className="welcome-text">
          <h1>Get Started Now!</h1>
        </div>
        <div className="tabs">
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
          <div className="form-field">
            <input type="text" id="name" placeholder="Type your name here" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-field">
            <input type="email" id="email" placeholder="Enter your E-mail" />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="form-field">
            <input type="text" id="phone" placeholder="Enter your phone number" />
            <label htmlFor="phone">Phone</label>
          </div>
          {companyField && (
            <div className="form-field">
              <input type="text" id="company" placeholder="Enter company name" />
              <label htmlFor="company">Company</label>
            </div>
          )}
          <div className="form-field">
            <input type="password" id="password" placeholder="Enter your password" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="terms-link">
            <label className="terms-label">
              <input type="checkbox" id="terms" />
              <span>
                I agree to the <a href="#">terms & policy</a>
              </span>
            </label>
          </div>
          <button type="submit">Sign Up</button>
          <hr />
          <p className="login-link">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
      <div className="image-section"></div>
      <div className="back-icon">
        <a href="/">
          <img src="../../assets/images/home.png" alt="Back" />
        </a>
      </div>
    </div>
  );
};

export default SignUp;
