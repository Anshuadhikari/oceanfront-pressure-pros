import React, { useState } from 'react';
import './Reviews.css';

const LeaveReviewForm = () => {
  const [form, setForm] = useState({ name: '', rating: '5', text: '' });
  const [ratingHover, setRatingHover] = useState(null);
  const [status, setStatus] = useState('idle');

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
    const today = new Date().toISOString().slice(0, 10);
    const newReview = {
      name: form.name.trim(),
      rating: Number(form.rating) || 5,
      text: form.text.trim(),
      date: today,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('ofpp_reviews_v1') || '[]');
      const next = [newReview, ...existing];
      localStorage.setItem('ofpp_reviews_v1', JSON.stringify(next));
      window.dispatchEvent(new CustomEvent('reviews-updated'));
    } catch {}

    setForm({ name: '', rating: '5', text: '' });
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="section reviews-section">
      <div className="container">
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
            <button className="btn btn-primary" type="submit">Submit Review</button>
          </div>
          {status==='success' && (
            <div className="success-message" style={{marginTop:'10px'}}>
              Thank you! Your review has been added.
            </div>
          )}
          {status==='error' && (
            <div className="error-message" style={{marginTop:'10px'}}>
              Please fill in your name and review.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default LeaveReviewForm;


