/* ===================================================
   Navbar.jsx — Elegant Navigation with Active Tracking
   Features: brand name in cursive, rose gold accents,
   scroll-based shrink, and active section highlighting.
   =================================================== */

import { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Shrink navbar after scrolling 50px
      setIsScrolled(window.scrollY > 50);

      // Determine which section is currently visible
      const sections = ['contact', 'menu', 'about', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Brand name in cursive script */}
      <a href="#home" className="nav-brand">Okachu</a>

      {/* Small decorative dot separator */}
      <span className="nav-separator"></span>

      {/* Navigation links */}
      <div className="nav-links">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
          Home
        </a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
          About
        </a>
        <a href="#menu" className={activeSection === 'menu' ? 'active' : ''}>
          Menu
        </a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
