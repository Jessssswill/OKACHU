/* ===================================================
   App.jsx — Root Application Component
   Assembles all sections with scroll animations,
   sparkle background, and scroll progress indicator.
   =================================================== */

// Styles
import './App.css';

// Custom hook for scroll-triggered animations
import useScrollReveal from './hooks/useScrollReveal';

// Components
import Sparkles from './components/Sparkles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ingredients from './components/Ingredients';
import Contact from './components/Contact';
import VoucherGacha from './components/VoucherGacha';

function App() {
  // Initialize scroll reveal animations & progress bar
  useScrollReveal();

  return (
    <div className="app">
      {/* Rose gold scroll progress bar at the very top */}
      <div className="scroll-progress"></div>

      {/* Floating sparkle particles in the background */}
      <Sparkles />

      {/* Sticky navigation bar */}
      <Navbar />

      {/* Main content — centered, max-width 820px */}
      <div className="content-wrapper">
        {/* 1. Hero — logo, brand name, cursive subtitle */}
        <Hero />

        {/* Gradient divider */}
        <div className="section-divider"></div>

        {/* 2. About — "Our Story" with staggered reveals */}
        <About />

        {/* Gradient divider */}
        <div className="section-divider"></div>

        {/* 3. Ingredients — interactive pill tags */}
        <Ingredients />

        {/* Gradient divider */}
        <div className="section-divider"></div>

        {/* 4. Contact — WhatsApp links for Joyce & Irene */}
        <Contact />

        {/* Gradient divider */}
        <div className="section-divider"></div>

        {/* 5. Voucher Gacha — enter code to win a character */}
        <VoucherGacha />

        {/* Gradient divider */}
        <div className="section-divider"></div>

        {/* Footer */}
        <footer className="footer reveal">
          <p className="footer-script">Okachu</p>
          <p className="footer-tagline">Artisan Choux Pastry</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">
            &copy; 2026 OKACHU &mdash; Dumai, Riau, Indonesia
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
