import React from 'react';
import './footer3.css'; // Ensure the CSS file is in the same directory or adjust the path accordingly.

const Footer = () => {
  return (
    <footer>
      <div className="footer-custom">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-content">
              <div className="footer-about">
                <div className="footer-logo">
                  <img src="logo.png" alt="DhaRti Foundation Logo" />
                </div>
                <p>DhaRti Foundation</p>
              </div>
              <ul className="social-content">
                <li className="social-item">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-facebook-square"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              <h4>Quick Link</h4>
              <ul className="footer-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-content">
              <h4>Get Help</h4>
              <ul className="footer-nav">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">Feedback & Suggestion</a></li>
              </ul>
            </div>
            <div className="footer-content">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li className="femail">
                  <i className="bx bx-envelope"></i>
                  <span>dhartifoundation@gmail.com</span>
                </li>
                <li className="fphone">
                  <i className="bx bx-phone"></i>
                  <span>1234567890</span>
                </li>
                <li className="flocation">
                  <i className="bx bxs-map"></i>
                  <span>Dharwad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-container">
          <div className="copyright">
            <div className="copyright-text">
              <p>Copyright 2024. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
