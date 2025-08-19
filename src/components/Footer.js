import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Oceanfront Pressure Pros</h3>
            <p>Professional pressure washing services along the beautiful North Carolina coast.</p>
            <div className="footer-contact">
              <p>📍 Serving Jacksonville, New Bern, Wilmington and surrounding areas</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>House Washing</li>
              <li>Driveway Cleaning</li>
              <li>Deck & Fence Cleaning</li>
              <li>Commercial Services</li>
              <li>Coastal Specialties</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Why Choose Us</h4>
            <ul>
              <li>Marine-Owned Business</li>
              <li>Coastal Expertise</li>
              <li>First-Time Quality</li>
              <li>Free Estimates</li>
              <li>Professional Service</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get Started</h4>
            <p>Ready to transform your property?</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Oceanfront Pressure Pros. All rights reserved.</p>
          <p>Active-Duty U.S. Marine–Owned Business</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
