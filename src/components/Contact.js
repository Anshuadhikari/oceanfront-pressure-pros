import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Local-only submission (no backend). Simulate success.
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
      // Auto-clear status
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get Your Free Estimate</h2>
        <p className="section-subtitle">
          Ready to bring your property back to life? Contact us today for a free, 
          no-obligation estimate on your pressure washing needs.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call or Text</h3>
              <p>Speak directly with our team</p>
              <a href="tel:586-612-7380" className="contact-link">
                586-612-7380
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Quick Response</h3>
              <p>We'll get back to you within 24 hours</p>
              <span className="contact-highlight">Professional & Reliable</span>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">🏠</div>
              <h3>Serving NC Coast</h3>
              <p>From Wilmington to the Outer Banks</p>
              <span className="contact-highlight">Local Expertise</span>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Needed *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="house-washing">House Washing</option>
                  <option value="driveway-cleaning">Driveway Cleaning</option>
                  <option value="deck-fence-cleaning">Deck & Fence Cleaning</option>
                  <option value="patio-pool-area">Patio & Pool Area</option>
                  <option value="commercial">Commercial Storefront</option>
                  <option value="other">Other (specify in message)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your project, property size, special requirements, or any questions you have..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Get Free Estimate'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you! We'll contact you within 24 hours with your free estimate.
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="emergency-contact">
          <div className="emergency-banner">
            <h3>🚨 Need Immediate Service?</h3>
            <p>For urgent pressure washing needs, call us directly:</p>
            <a href="tel:586-612-7380" className="emergency-phone">
              586-612-7380
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
