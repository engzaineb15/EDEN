import React from 'react';
import './MonitorMarket.css';
import { Link } from 'react-router-dom';
const MonitorMarket = () => {
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

      {/* Main Content */}
      <div className="containerSide">
        <div className="sidebarMonitor">
          <div className="container-88">
          <a href="/local"><img src={require("../../assets/images/local.png")} alt="icon1" /></a>
            <a href="/global"><img src={require("../../assets/images/global.png")} alt="icon2" /></a>
            <a href="/monitor"><img src={require("../../assets/images/monitor.png")} alt="icon3" /></a>
          </div>
        </div>
        
<div className="allcontantmonitor">
    
        <div className="contentMonitor">
       <h1>Monitor</h1>
          <p><b>Demand Tracking</b></p>
          <ul className="listMonitor">
            <li>Gives each plant exactly what it needs in terms of water and nutrients.</li>
            <li>Keeps plants healthier and avoids wasting resources.</li>
          </ul>
          <p><b>Smart Irrigation</b></p>
          <ul className="listMonitor">
            <li>Uses smart tools to water plants only when and where they need it.</li>
            <li>Saves water and keeps plants perfectly hydrated.</li>
          </ul>
          <p><b>Water Recycling</b></p>
          <ul className="listMonitor">
            <li>Collects and reuses water to cut down on waste.</li>
            <li>Helps you save money and be more eco-friendly.</li>
          </ul>
          <p><b>Stay Alert</b></p>
          <ul className="listMonitor">
            <li>Sends quick notifications if something goes wrong, like low water or a system glitch.</li>
            <li>Lets you fix problems before they affect your plants.</li>
          </ul>
          <p><b>Perfect Timing</b></p>
          <ul className="listMonitor">
            <li>Tells you the right time to harvest your crops.</li>
            <li>Suggests the best fertilizer mix to get the most out of your plants.</li>
          </ul>

        </div>

        
        <div className="icons">
            <img src={require("../../assets/images/photo33.png")} alt="chart icon" />
          </div>

        </div>


      </div>
    </div>
  );
};

export default MonitorMarket;
