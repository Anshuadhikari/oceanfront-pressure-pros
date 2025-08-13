import React, { useState } from 'react';
import './BeforeAfter.css';

const BeforeAfter = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Real before/after transformations using your actual side-by-side images
  const transformations = [
    {
      id: 1,
      category: 'driveway',
      title: 'Concrete Driveway Transformation',
      location: 'Wilmington, NC',
      image: '/images/Bafore after 3.png',
      description: 'Dramatic driveway restoration removing years of dirt, grime, and algae buildup'
    },
    {
      id: 2,
      category: 'driveway',
      title: 'Residential Driveway & Walkway',
      location: 'Outer Banks, NC',
      image: '/images/BaforeAfter2.webp',
      description: 'Complete driveway and walkway cleaning with brick border restoration'
    },
    {
      id: 3,
      category: 'driveway',
      title: 'Curved Driveway Restoration',
      location: 'Carolina Beach, NC',
      image: '/images/baforeAfter6.webp',
      description: 'Professional pressure washing revealing original concrete aggregate and color'
    },
    {
      id: 4,
      category: 'driveway',
      title: 'Driveway & Patio Cleaning',
      location: 'Wrightsville Beach, NC',
      image: '/images/baforeafter8.webp',
      description: 'Comprehensive driveway and patio area restoration'
    },
    {
      id: 5,
      category: 'driveway',
      title: 'Professional Driveway Service',
      location: 'Kure Beach, NC',
      image: '/images/beforeafter4.webp',
      description: 'Expert pressure washing service for residential driveways'
    },
    {
      id: 6,
      category: 'driveway',
      title: 'Complete Driveway Restoration',
      location: 'Carolina Beach, NC',
      image: '/images/beforeAfter5.png',
      description: 'Full driveway cleaning and restoration service'
    },
    {
      id: 7,
      category: 'walkway',
      title: 'Brick Walkway Restoration',
      location: 'Wilmington, NC',
      image: '/images/brickwalkway.webp',
      description: 'Professional brick walkway and patio cleaning service'
    },
    {
      id: 8,
      category: 'driveway',
      title: 'Driveway Restoration',
      location: 'Outer Banks, NC',
      image: '/images/Driveway1.webp',
      description: 'Professional driveway cleaning and restoration service'
    }
  ];

  const items = transformations;

  const openImageModal = (transformation) => {
    setSelectedImage(transformation);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="before-after" className="section before-after-section">
      <div className="container">
        <h2 className="section-title">Before & After Transformations</h2>
        <p className="section-subtitle">
          See the dramatic difference our professional pressure washing services make. 
          From salt-damaged exteriors to stained driveways, we bring properties back to life.
        </p>

        {/* Transformations Grid */}
        <div className="transformations-grid">
          {items.map(transformation => (
            <div key={transformation.id} className="transformation-card">
              <div className="transformation-images">
                <div className="transformation-image-container">
                  <div className="before-after-labels">
                    <span className="label before">BEFORE</span>
                    <span className="label after">AFTER</span>
                  </div>
                  <img
                    src={transformation.image}
                    alt={`Before and After: ${transformation.title}`}
                    className="transformation-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-placeholder" style={{display: 'none'}}>
                    <span>📷</span>
                    <p>Before & After Photo</p>
                  </div>
                </div>
              </div>
              
              <div className="transformation-info">
                <h3>{transformation.title}</h3>
                <p className="location">📍 {transformation.location}</p>
                <p className="description">{transformation.description}</p>
                <button 
                  className="btn btn-secondary view-details-btn"
                  onClick={() => openImageModal(transformation)}
                >
                  View Full Size
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="before-after-cta">
          <h3>Ready to Transform Your Property?</h3>
          <p>Get the same professional results for your home or business</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get Free Estimate</a>
            <a href="tel:586-612-7380" className="btn btn-secondary">Call Now</a>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={closeImageModal}>×</button>
              <h3>{selectedImage.title}</h3>
              <div className="modal-images">
                <div className="modal-image-container" style={{width: '100%'}}>
                  <img
                    src={selectedImage.image}
                    alt={`Before and After: ${selectedImage.title}`}
                    style={{width: '100%', height: 'auto', borderRadius: '8px'}}
                  />
                </div>
              </div>
              <p className="modal-description">{selectedImage.description}</p>
              <p className="modal-location">📍 {selectedImage.location}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BeforeAfter;
