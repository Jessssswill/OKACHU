/* ===================================================
   Navbar.jsx — Mobile-First Navigation
   Features: hamburger menu on mobile, slide-in drawer,
   touch-friendly tap targets, active section tracking.
   =================================================== */

import { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  // Controls whether the mobile menu drawer is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine which section is currently in view
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

  // Close the menu when a link is tapped (mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Brand name — always visible */}
        <a href="#home" className="nav-brand" onClick={handleLinkClick}>
          Okachu
        </a>

        {/* Desktop nav links — hidden on mobile */}
        <span className="nav-separator"></span>
        <div className="nav-links nav-links-desktop">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
            Home
          </a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
            About
          </a>
          <a href="#ingredients" className={activeSection === 'ingredients' ? 'active' : ''}>
            Ingredients
          </a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
            Contact
          </a>
        </div>

        {/* Hamburger button — visible only on mobile */}
        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile overlay — dims the background when menu is open */}
      <div
        className={`mobile-overlay ${isMenuOpen ? 'visible' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile slide-in drawer menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a
          href="#home"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          About
        </a>
        <a
          href="#ingredients"
          className={activeSection === 'ingredients' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Ingredients
        </a>
        <a
          href="#contact"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Contact
        </a>

        {/* Decorative brand in the drawer */}
        <div className="mobile-menu-brand">
          <span>Okachu</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
