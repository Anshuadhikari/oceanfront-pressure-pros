import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '💪',
      title: 'Marine Discipline',
      description: 'Active-duty U.S. Marine–owned business bringing military precision and attention to detail to every job.'
    },
    {
      icon: '🌊',
      title: 'Coastal Expertise',
      description: 'We understand the unique challenges of salt air, sand, and ocean weather that coastal properties face.'
    },
    {
      icon: '🎯',
      title: 'First-Time Quality',
      description: 'We take pride in doing the job right the first time, saving you time and money.'
    },
    {
      icon: '🛡️',
      title: 'Safe & Effective',
      description: 'Using proven techniques that restore surfaces without causing damage to your property.'
    },
    {
      icon: '💰',
      title: 'Honest Pricing',
      description: 'Transparent, competitive pricing with no hidden fees or surprise charges.'
    },
    {
      icon: '⏰',
      title: 'Reliable Service',
      description: 'On-time arrivals, professional communication, and results you can see immediately.'
    }
  ];

  return (
    <section id="why-choose-us" className="section why-choose-us-section">
      <div className="container">
        <h2 className="section-title">Why Choose Oceanfront Pressure Pros?</h2>
        <p className="section-subtitle">
          When it comes to pressure washing along the North Carolina coast, 
          we bring unmatched expertise, reliability, and results.
        </p>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
