import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BeforeAfter from './components/BeforeAfter';
import ReviewsPage from './components/ReviewsPage';
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
            <>
              <Hero />
              <About />
              <BeforeAfter />
              <Contact />
            </>
          }
        />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
