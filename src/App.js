import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BeforeAfter from './components/BeforeAfter';
import LeaveReviewForm from './components/LeaveReviewForm';
import ReviewsSidebar from './components/ReviewsSidebar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div id="page-grid" className="page-grid">
              <div id="sidebar-col">
                <ReviewsSidebar />
              </div>
              <div id="page-main" className="page-main">
                <Hero />
                <About />
                <BeforeAfter />
                <Contact />
                {/* Leave review form integrated at the end of homepage */}
                <LeaveReviewForm />
              </div>
            </div>
          }
        />
        {/* Remove route for separate reviews page */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
