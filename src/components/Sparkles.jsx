/* ===================================================
   Sparkles.jsx — Floating Rose Gold Sparkle Particles
   Creates lightweight decorative floating dots that
   drift upward in the background for a dreamy effect.
   =================================================== */

import { useMemo } from 'react';

function Sparkles() {
  // Generate 12 sparkle particles with random positions and timing
  const sparkles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${3 + Math.random() * 4}px`,
      duration: `${12 + Math.random() * 18}s`,
      delay: `${Math.random() * 15}s`,
      opacity: 0.15 + Math.random() * 0.25,
    }));
  }, []);

  return (
    <div className="sparkle-container">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: s.duration,
            animationDelay: s.delay,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default Sparkles;
