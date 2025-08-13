import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const testimonials = [
    {
      name: 'Jasmine W.',
      text:
        "These people are always there when we need them and they do an amazing job with anything we throw at them!",
      rating: 5,
    },
    {
      name: 'Cera V.',
      text:
        "I can’t believe how above and beyond they went for me during the work! The communication was absolutely amazing from start to finish.",
      rating: 5,
    },
    {
      name: 'Mark P.',
      text:
        "Professional, on time, and our driveway and siding look brand new again. Highly recommend!",
      rating: 5,
    },
  ];

  const renderStars = (count) => '★★★★★'.slice(0, count);

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <p className="section-subtitle">Real feedback from our customers.</p>

        <div className="reviews-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="review-card">
              <div className="stars" aria-label={`${t.rating} star rating`}>
                {renderStars(t.rating)}
              </div>
              <p className="review-text">“{t.text}”</p>
              <div className="review-author">— {t.name}</div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Reviews;


