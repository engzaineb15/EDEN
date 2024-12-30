import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Home.css';

const Home = () => {

  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate('/dashboard'); // التنقل إلى مسار Dashboard
  };

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

      {/* Hero Section */}
      <div id="firstpage" className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>Farm Management</h1>
          <p>Your digital ally for every season</p>
          <div className="buttons">
            <button className="btn btn-yellow" onClick={handleNavigateToDashboard}>PACKAGES</button>
            <button className="btn btn-green">FREE TRIAL</button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="services">
        <h1>SERVICES</h1>
        <div className="services-container">
          <div className="service-card">
            <h2>Local</h2>
            <div className="icon">
              <img src={require('../../assets/images/local.png')} alt="Local Icon" />
            </div>
            <p>Gain insights into your local agricultural market trends, demands, and pricing.</p>
            <a href="/local" className="play-btn">▶</a>
          </div>
          <div className="service-card">
            <h2>Global</h2>
            <div className="icon">
              <img src={require("../../assets/images/global.png")} alt="Global Icon" />
            </div>
            <p>Explore international trade opportunities with comprehensive global market insights.</p>
            <a href="/global" className="play-btn">▶</a>
          </div>
          <div className="service-card">
            <h2>Monitor</h2>
            <div className="icon">
              <img src={require("../../assets/images/monitor.png")} alt="Monitor Icon" />
            </div>
            <p>Revolutionize your farming operations with real-time monitoring and control.</p>
            <a href="/monitor" className="play-btn">▶</a>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section id="Customers" className="page-container">
        <div className="text-section">
          <h1>Customers</h1>
          <h2><b>Empowering Modern Farmers with Innovative Solutions</b></h2>
          <h3><b>Who We Serve</b></h3>
          <ul>
            <li>Farmers seeking to enhance their productivity through cutting-edge technology.</li>
            <li>Agribusinesses aiming to optimize farm management and increase profitability.</li>
            <li>Investors looking for sustainable and tech-driven agricultural ventures.</li>
          </ul>
        </div>
        <div className="image-section-customer">
          <img src={require("../../assets/images/customer.jpg")} alt="Hand holding a small plant" />
        </div>
      </section>

      {/* Features Section */}
      <section id="Features" className="features">
        <h1>Features</h1>
        <div className="feature-container">
          <div className="feature">
            <div className="icon-wrapper">
              <img src={require("../../assets/images/feature.png")} alt="Market Analysis Icon" />
            </div>
            <h2>Advanced Market Analysis</h2>
            <p><strong>Local Market Trends:</strong> Stay updated on regional demand and pricing.</p>
            <p><strong>Global Market Insights:</strong> Expand your reach with international opportunities.</p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <img src={require("../../assets/images/feature2.png")} alt="IoT Monitoring Icon" />
            </div>
            <h2>IoT-Based Farm Monitoring</h2>
            <p>Real-time data on soil health, temperature, humidity, and water levels.</p>
            <p>Automated alerts for anomalies in farm conditions.</p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <img src={require("../../assets/images/feature3.png")} alt="AI Insights Icon" />
            </div>
            <h2>AI-Powered Insights</h2>
            <p>Predictive analytics for yield forecasting.</p>
            <p>Personalized recommendations for crop management and resource optimization.</p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <img src={require("../../assets/images/feature4.png")} alt="User-Friendly Platform Icon" />
            </div>
            <h2>User-Friendly Platform</h2>
            <p>Interactive dashboards with visualized data.</p>
            <p>Customizable reports for informed decision-making.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="topbenefits" className="top-benefits">
        <div className="containerTop3">
          <h1>TOP 3 BENEFITS</h1>
          <p className="subtitle">Why Our Solution is a Game-Changer for Farmers</p>
          <div className="benefits">
            <div className="benefit">
              <img src={require("../../assets/images/benefit.png")} alt="Boosted Productivity" />
              <h3>Boosted Productivity</h3>
              <p>Maximize crop yield with precise recommendations tailored to your farm's needs.</p>
            </div>
            <div className="benefit">
              <img src={require("../../assets/images/benefit2.png")} alt="Cost Efficiency" />
              <h3>Cost Efficiency</h3>
              <p>Save money on labor and inputs through automation and smart management.</p>
            </div>
            <div className="benefit">
              <img src={require("../../assets/images/benefit3.png")} alt="Sustainability" />
              <h3>Sustainability</h3>
              <p>Adopt eco-friendly practices to preserve resources and reduce environmental impact.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <div className="containercont">
        <h2>Do you want a more suitable solution for you?</h2>
        <p>
          Our platform is designed to provide tailored solutions for modern farming challenges. Whether you aim to optimize resources, boost productivity, or align with market trends, we offer advanced tools and insights to help you succeed. Embrace the future of agriculture with solutions built for your unique needs.
        </p>
        <a href="/about" id="contactBtn">Contact Us</a>
      </div>

      {/* Footer */}
      {/* <footer className="footer">
        <div className="footer-section">
          <h4><u><b>About EDEN</b></u></h4>
          <ul>
            <li><a href="#firstpage">Product</a></li>
            <li><a href="#Features">Features</a></li>
            <li><a href="#topbenefits">TOP 3 Benefits</a></li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4><u><b>Policies</b></u></h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4><u><b>Community</b></u></h4>
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </footer> */}

{/* Footer Section */}
<footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>About EDEN</h3>
          <ul className="footer-list">
            <li>Product</li>
            <li><a href="#Features">Features</a></li>
            <li><a href="#topbenefits">TOP 3 Benefits</a></li>
            


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

export default Home;
