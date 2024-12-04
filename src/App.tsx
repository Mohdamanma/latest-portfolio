import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModernNavbar from './components/ModernNavbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <BackgroundAnimation />
        <ModernNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}