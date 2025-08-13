import React from 'react';
import './Reviews.css';
import { REVIEWS } from '../data/reviews';

const ReviewsPage = () => {
  const renderStars = (count) => '★★★★★'.slice(0, count);

  return (
    <section id="reviews-page" className="section reviews-section" style={{paddingTop: '120px'}}>
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <p className="section-subtitle">Real feedback from our customers.</p>

        <div className="reviews-grid" style={{gridTemplateColumns: '1fr'}}>
          {REVIEWS.map((r, idx) => (
            <div className="review-card" key={idx}>
              <div className="stars" aria-label={`${r.rating} star rating`}>
                {renderStars(r.rating)}
              </div>
              <p className="review-text">“{r.text}”</p>
              <div className="review-author">— {r.name} <span style={{color:'#718096', fontWeight:400}}>• {r.date}</span></div>
            </div>
          ))}
        </div>

        <div className="card" style={{marginTop:'24px', textAlign:'center'}}>
          <h3 style={{color:'#1a365d', marginBottom:'8px'}}>Have we completed a job for you?</h3>
          <p style={{color:'#4a5568', marginBottom:'16px'}}>Share your experience and help others choose with confidence.</p>
          <a href="#contact" className="btn btn-primary">Leave a Review</a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;


