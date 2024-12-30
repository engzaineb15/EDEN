import React from 'react';
import './LocalMarket.css';
import { Link } from 'react-router-dom';

const LocalMarket = () => {
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

        <div className="sidebarLocal">
          <div className="container-88">
            <a href="/local"><img src={require("../../assets/images/local.png")} alt="icon1" /></a>
            <a href="/global"><img src={require("../../assets/images/global.png")} alt="icon2" /></a>
            <a href="/monitor"><img src={require("../../assets/images/monitor.png")} alt="icon3" /></a>
          </div>
        </div>



     

<div className='allcontantlocal' >

        <div className="contentLocal">
          <h1>Local</h1>
          <p className="pLocal" ><b>Demand Tracking:</b></p>
          <ul className="listLocal">
            <li>Monitors real-time demand for crops to help align production with market needs.</li>
          </ul>
          <p  className="pLocal" ><b>Profit Focus:</b></p>
          <ul className="listLocal">
            <li>Analyzes costs and revenue to maximize profitability for farmers and businesses.</li>
          </ul>
          <p  className="pLocal"  ><b>Market Updates:</b></p>
          <ul className="listLocal">
            <li>Provides timely updates on market trends, pricing, and competitor activity.</li>
          </ul>
          <p  className="pLocal" ><b>Auto-Reports:</b></p>
          <ul className="listLocal">
            <li>Automatically generates detailed performance and productivity reports for decision-making.</li>
          </ul>
          <p  className="pLocal"  ><b>Location Insights:</b></p>
          <ul className="listLocal">
            <li>Delivers tailored recommendations based on geographic conditions and regional data.</li>
          </ul>

       
        </div>


        <div className="icons">
            <img src={require("../../assets/images/photo11.png" )}alt="chart icon" />
          </div>  

          </div>

      </div>
    </div>
  );
};

export default LocalMarket;
