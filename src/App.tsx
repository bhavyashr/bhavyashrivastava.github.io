import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Research from './components/Research';
import Resume from './components/Resume';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<Hero />} />
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