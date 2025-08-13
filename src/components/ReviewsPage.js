import React, { useEffect, useState } from 'react';
import './Reviews.css';
import { REVIEWS } from '../data/reviews';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', rating: '5', text: '' });
  const [ratingHover, setRatingHover] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | success | error

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('ofpp_reviews_v1') || '[]');
      if (Array.isArray(saved) && saved.length > 0) {
        setReviews(saved);
      } else {
        setReviews(REVIEWS);
      }
    } catch {
      setReviews(REVIEWS);
    }
  }, []);

  const renderStars = (count) => '★★★★★'.slice(0, Math.max(0, Math.min(5, Number(count))));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    const today = new Date();
    const date = today.toISOString().slice(0, 10);
    const newReview = {
      name: form.name.trim(),
      rating: Number(form.rating) || 5,
      text: form.text.trim(),
      date,
    };
    const next = [newReview, ...reviews];
    setReviews(next);
    try {
      localStorage.setItem('ofpp_reviews_v1', JSON.stringify(next));
      window.dispatchEvent(new CustomEvent('reviews-updated'));
    } catch {}
    setForm({ name: '', rating: '5', text: '' });
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="reviews-page" className="section reviews-section" style={{paddingTop: '120px'}}>
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <p className="section-subtitle">Real feedback from our customers.</p>

        <div className="reviews-layout">
          {/* Left sidebar feed */}
          <aside className="reviews-sidebar">
            <h4 className="sidebar-title">Latest Reviews</h4>
            <div className="reviews-feed">
              {reviews.map((r, i) => (
                <div className="feed-item" key={`feed-${i}`}>
                  <div className="feed-stars" aria-hidden>{renderStars(r.rating)}</div>
                  <div className="feed-text">{r.text.length > 140 ? r.text.slice(0, 140) + '…' : r.text}</div>
                  <div className="feed-meta">{r.name} • {r.date}</div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main column: full cards and review form at the end */}
          <div className="reviews-main">
            <div className="reviews-grid" style={{gridTemplateColumns: '1fr'}}>
              {reviews.map((r, idx) => (
                <div className="review-card" key={idx}>
                  <div className="stars" aria-label={`${r.rating} star rating`}>
                    {renderStars(r.rating)}
                  </div>
                  <p className="review-text">“{r.text}”</p>
                  <div className="review-author">— {r.name} <span style={{color:'#718096', fontWeight:400}}>• {r.date}</span></div>
                </div>
              ))}
            </div>

            {/* Leave review form pinned near bottom */}
            <form className="review-form card" onSubmit={handleSubmit}>
              <h3 style={{color:'#1a365d', marginBottom:'8px'}}>Leave a Review</h3>
              <div className="form-row">
                <div className="form-group inline-label">
                  <label htmlFor="name">Your Name *</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John D." />
                </div>
                <div className="form-group inline-label">
                  <label>Rating</label>
                  <div className="star-input" role="radiogroup" aria-label="Rating">
                    {[1,2,3,4,5].map((n) => {
                      const current = ratingHover ?? Number(form.rating);
                      const isOn = n <= current;
                      return (
                        <button
                          key={n}
                          type="button"
                          className={`star ${isOn ? 'on' : ''}`}
                          aria-label={`${n} star`}
                          aria-pressed={Number(form.rating) === n}
                          onMouseEnter={() => setRatingHover(n)}
                          onMouseLeave={() => setRatingHover(null)}
                          onClick={() => setForm((f) => ({ ...f, rating: String(n) }))}
                        >
                          ★
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="text">Your Review *</label>
                <textarea id="text" name="text" rows="3" value={form.text} onChange={handleChange} required placeholder="Tell us about your experience..." />
              </div>
              <div className="form-actions">
                <button className="btn btn-primary" type="submit" disabled={status==='loading'}>Submit Review</button>
              </div>
              {status==='success' && <div className="success-message" style={{marginTop:'10px'}}>Thank you! Your review has been added.</div>}
              {status==='error' && <div className="error-message" style={{marginTop:'10px'}}>Please fill in your name and review.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;


