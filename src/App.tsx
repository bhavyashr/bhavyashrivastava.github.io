import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Research from './components/Research';
import Resume from './components/Resume';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/research" element={<Research />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;