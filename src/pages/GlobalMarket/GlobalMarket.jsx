import React from 'react';
import './GlobalMarket.css';
import { Link } from 'react-router-dom';

const GlobalMarket = () => {
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
        <div className="sidebarGlobal">
          <div className="container-88">
          <a href="/local"><img src={require("../../assets/images/local.png")} alt="icon1" /></a>
            <a href="/global"><img src={require("../../assets/images/global.png")} alt="icon2" /></a>
            <a href="/monitor"><img src={require("../../assets/images/monitor.png")} alt="icon3" /></a>
          </div>
        </div>

<div className="allcontantglobal">
        <div className="contentGlobal">
          <h1>Global</h1>
          <p><b>Advanced Dashboard:</b></p>
          <ul className="listGlobal">
            <li>Real-time analytics on crop performance and market trends for informed decision-making.</li>
          </ul>
          <p><b>Fertilization Plan:</b></p>
          <ul className="listGlobal">
            <li>Customized schedules to optimize yield and sustainability.</li>
          </ul>
          <p><b>Global Consumer Insights:</b></p>
          <ul className="listGlobal">
            <li>Data on international demand to target global markets.</li>
          </ul>
          <p><b>Harvest Time Tools:</b></p>
          <ul className="listGlobal">
            <li>Predicts optimal harvest periods for quality and profitability.</li>
          </ul>
          <p><b>Crop Selection Guidance:</b></p>
          <ul className="listGlobal">
            <li>Recommends crops based on region, demand, and profitability.</li>
          </ul>

         
        </div>

        <div className="icons">
            <img src={require("../../assets/images/photo22.png")} alt="chart icon" />
          </div>

          </div>


      </div>
    </div>
  );
};

export default GlobalMarket;
