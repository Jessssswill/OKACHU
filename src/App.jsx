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
        {/* Hero — logo, brand name, cursive subtitle */}
        <Hero />

        {/* Gradient divider between sections */}
        <div className="section-divider"></div>

        {/* About — "Our Story" with staggered reveals */}
        <About />

        {/* Gradient divider */}
        <div className="section-divider"></div>

        {/* Ingredients — interactive pill tags */}
        <Ingredients />

        {/* Gradient divider */}
        <div className="section-divider"></div>

        {/* Footer — branded, with links */}
        <footer id="contact" className="footer reveal">
          <p className="footer-script">Okachu</p>
          <p className="footer-tagline">Artisan Choux Pastry</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
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
