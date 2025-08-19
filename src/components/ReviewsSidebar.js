import React, { useEffect, useState } from 'react';
import './ReviewsSidebar.css';
import { REVIEWS } from '../data/reviews';

const ReviewsSidebar = () => {
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
    <aside className="reviews-sidebar" aria-label="Customer reviews feed">
      <div className="sidebar-inner">
        <h4 className="sidebar-title">Customer Reviews</h4>
        <div id="reviews-feed" className="reviews-feed">
          {reviews.map((r, i) => (
            <div className="feed-item" key={`feed-${i}`}>
              <div className="feed-stars" aria-hidden>{renderStars(r.rating)}</div>
              <div className="feed-text">{r.text.length > 140 ? r.text.slice(0, 140) + '…' : r.text}</div>
              <div className="feed-meta">{r.name} • {r.date}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ReviewsSidebar;


