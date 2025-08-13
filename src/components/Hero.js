import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Professional Pressure Washing Services
            <span className="hero-subtitle">Along the Beautiful North Carolina Coast</span>
          </h1>
          <p className="hero-description">
            From house washing and driveway cleaning to decks, fences, and commercial services - 
            we bring coastal properties back to life with results that last.
          </p>
          <div className="hero-cta">
            <a href="tel:586-612-7380" className="btn btn-primary hero-btn">
              📞 Call 586-612-7380
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn">
              Get Free Estimate
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
