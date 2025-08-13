import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'House Washing',
      description: 'Complete exterior house cleaning to remove dirt, mold, mildew, and salt buildup from coastal weather.',
      features: ['Soft wash technology', 'Safe for all siding types', 'Mold & mildew removal', 'Salt residue cleaning']
    },
    {
      icon: '🚗',
      title: 'Driveway Cleaning',
      description: 'Restore your driveway and walkways to their original appearance with professional pressure washing.',
      features: ['Oil stain removal', 'Concrete cleaning', 'Paver restoration', 'Sealant preparation']
    },
    {
      icon: '🪑',
      title: 'Deck & Fence Cleaning',
      description: 'Bring new life to your outdoor living spaces with gentle yet effective cleaning techniques.',
      features: ['Wood-safe cleaning', 'Mold removal', 'Stain preparation', 'Long-lasting results']
    },
    {
      icon: '🏊',
      title: 'Patio & Pool Areas',
      description: 'Clean and sanitize your outdoor entertainment areas for safe family enjoyment.',
      features: ['Algae removal', 'Safety surface cleaning', 'Pool deck restoration', 'Outdoor furniture cleaning']
    },
    {
      icon: '🏢',
      title: 'Commercial Services',
      description: 'Professional pressure washing for businesses, storefronts, and commercial properties.',
      features: ['Storefront cleaning', 'Parking lot cleaning', 'Building exteriors', 'After-hours service']
    },
    {
      icon: '🌊',
      title: 'Coastal Specialties',
      description: 'Specialized services for the unique challenges of coastal North Carolina properties.',
      features: ['Salt air protection', 'Sand removal', 'Storm damage cleanup', 'Preventive maintenance']
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          From residential to commercial, we offer comprehensive pressure washing solutions 
          that protect and enhance your property's value and appearance.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="service-cta">
                <a href="#contact" className="btn btn-secondary">Get Quote</a>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Services;
