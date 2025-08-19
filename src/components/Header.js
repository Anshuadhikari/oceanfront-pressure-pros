import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 250);
    } else {
      doScroll();
    }
    setIsMenuOpen(false);
  };

  const toggleReviewsSidebar = () => {
    const ev = new CustomEvent('toggle-reviews-sidebar');
    window.dispatchEvent(ev);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="/" className="brand" onClick={handleLogoClick}>
              <img src="/images/logo.png" alt="Oceanfront Pressure Pros logo" className="logo-img" />
              <span className="brand-text">Oceanfront Pressure Pros</span>
            </a>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('before-after')}>Before & After</button></li>
              <li><button onClick={toggleReviewsSidebar}>Reviews</button></li>
            </ul>
          </nav>
          
          <div className="header-cta">
            <a href="tel:586-612-7380" className="btn btn-primary">Call Now</a>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
