import React from 'react';
import './AboutContactUs.css';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AboutContactUs = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
             <div className="logo">Eden</div>
             <ul className="nav-tabs">
               <li className="barbtns">
                 <a href="#">Product</a>
                 <ul className="dropdown">
                   <li><a href="#Customers">Customers</a></li>
                   <li><a href="#Features">Features</a></li>
                   <li><a href="#topbenefits">Top Benefits</a></li>
                 </ul>
               </li>
               <li className="barbtns"><a href="#">Pricing</a></li>
               <li className="barbtns"><a href="#services">Services</a></li>
               <li className="barbtns"><a href="/about">About Us</a></li>
               <li><Link to="/login"><button className="login-btn">Log In</button></Link></li>
             </ul>
           </nav>

      {/* About Section */}
      <section className="about-section">
        <h1>ABOUT US</h1>
        <p>
          Welcome to EDEN, where technology meets agriculture to revolutionize the way farms operate.
          Our mission is to empower farmers with innovative solutions that combine cutting-edge AI, IoT, and data analytics
          to optimize farm management and increase productivity.
        </p>
        <p>
          We are passionate about driving sustainability and efficiency in agriculture by offering tools that provide
          real-time monitoring, local and global market analysis, and smart fertilization management. Our goal is to make
          farming smarter, more profitable, and accessible to everyone, paving the way for a sustainable future.
        </p>
        <p>
          At EDEN, we believe in harnessing the power of technology to transform traditional farming practices and deliver
          top-quality results. Whether you're a small farm owner or managing large-scale operations, we're here to help you
          achieve your goals and thrive in an ever-changing agricultural landscape.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact<br />Us</h1>
          </div>
          <div className="contact-form">
            <form>
              <p>Contact us about anything related to our company or services. We'll do our best to get back to you as soon as possible.</p>
              <input type="text" placeholder="Name*" required />
              <input type="tel" placeholder="Phone*" required />
              <input type="email" placeholder="Email*" required />
              <input type="text" placeholder="Country" />
              <textarea placeholder="Message"></textarea>
              <button className="send-button" type="submit">Send</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>EDEN Company / Farm Management System</h2>
            <p><b>For Support:</b></p>
            <p><MdEmail style={{marginRight: '8px', fontSize: '20px'}} />Email: EdenSupport@Eden.com</p>
            <p><MdLocationOn style={{marginRight: '8px', fontSize: '20px'}} />Location: Cairo, Egypt</p>

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>About EDEN</h3>
          <ul className="footer-list">
            <li>Product</li>
            <li>Features</li>
            <li>TOP 3 Benefits</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Policies</h3>
          <ul className="footer-list">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Community</h3>
          <ul className="footer-list">

            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

      </div>
    </footer>
    </div>
  );
};

export default AboutContactUs;
