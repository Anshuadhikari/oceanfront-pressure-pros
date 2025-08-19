import React, { useEffect, useState } from 'react';
import './Reviews.css';
import { REVIEWS } from '../data/reviews';

const ReviewsInline = () => {
  const [reviews, setReviews] = useState([]);

  const filterOutBlocked = (list) => {
    const blockedNamesLower = ['anshu'];
    return (Array.isArray(list) ? list : []).filter((r) => {
      const nameLower = String(r?.name || '').toLowerCase();
      return !blockedNamesLower.includes(nameLower);
    });
  };

  useEffect(() => {
    const load = () => {
      try {
        const savedRaw = JSON.parse(localStorage.getItem('ofpp_reviews_v1') || '[]');
        const cleaned = filterOutBlocked(savedRaw);
        if (cleaned.length !== savedRaw.length) {
          try {
            localStorage.setItem('ofpp_reviews_v1', JSON.stringify(cleaned));
          } catch {}
        }
        setReviews(cleaned.length ? cleaned : REVIEWS);
      } catch {
        setReviews(REVIEWS);
      }
    };
    load();
    const handler = () => load();
    window.addEventListener('reviews-updated', handler);
    return () => window.removeEventListener('reviews-updated', handler);
  }, []);

  const renderStars = (count) => '★★★★★'.slice(0, Math.max(0, Math.min(5, Number(count))));

  return (
    <section id="reviews" className="section reviews-section mobile-only">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={`inline-${i}`}>
              <div className="stars" aria-hidden>{renderStars(r.rating)}</div>
              <div className="review-text">{r.text}</div>
              <div className="review-author">{r.name} • {r.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsInline;


