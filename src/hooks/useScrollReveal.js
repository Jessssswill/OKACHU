/* ===================================================
   useScrollReveal.js — Custom Hook for Scroll Animations
   Handles: scroll-triggered reveals, scroll progress bar,
   and navbar active section tracking.
   =================================================== */

import { useEffect, useCallback } from 'react';

function useScrollReveal() {
  // Throttle helper — limits how often a function can fire
  const throttle = useCallback((fn, delay) => {
    let lastCall = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn(...args);
      }
    };
  }, []);

  useEffect(() => {
    // ---- 1. IntersectionObserver for scroll reveals ----
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-scale'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    // ---- 2. Scroll progress bar ----
    const progressBar = document.querySelector('.scroll-progress');

    const updateProgress = () => {
      if (!progressBar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    };

    // Throttle the scroll handler for performance
    const handleScroll = throttle(updateProgress, 16);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ---- Cleanup ----
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [throttle]);
}

export default useScrollReveal;
