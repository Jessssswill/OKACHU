/* ===================================================
   Hero.jsx — Premium Brand Hero Section
   Circular logo with float animation, brand name,
   cursive script subtitle, and decorative divider.
   =================================================== */

import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Circular logo — floats gently and scales on hover */}
      <div className="hero-logo reveal-scale">
        <img
          src="https://placehold.co/180x180/6b4a3a/ffffff?text=O"
          alt="OKACHU Logo"
          className="hero-logo-img"
        />
      </div>

      {/* Brand name — large serif with wide letter-spacing */}
      <h1 className="hero-brand-name">OKACHU</h1>

      {/* Cursive script subtitle — the girly signature touch */}
      <p className="hero-script">Artisan Choux Pastry</p>

      {/* Uppercase tagline — understated elegance */}
      <p className="hero-tagline">Dumai · Riau · Indonesia</p>

      {/* Decorative line divider with diamond icon */}
      <div className="hero-divider">
        <span className="hero-divider-line"></span>
        <span className="hero-divider-icon">◆</span>
        <span className="hero-divider-line"></span>
      </div>
    </section>
  );
}

export default Hero;
