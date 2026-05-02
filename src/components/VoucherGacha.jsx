/* ===================================================
   VoucherGacha.jsx — One-Time Voucher Gacha Feature
   
   How it works:
   1. User types a secret voucher code
   2. Clicks "Tukar Kode" to submit
   3. Backend validates the code and picks a character
   4. Frontend shows the winning character!
   
   Three UI states: INPUT → LOADING → RESULT/ERROR
   =================================================== */

import { useState } from 'react';

// Import character images (same ones used in RandomCharacter)
import Char1 from '../assets/Char1.png';
import Char2 from '../assets/Char2.png';
import Char3 from '../assets/Char3.png';

// Component-specific styles
import './VoucherGacha.css';

// --------------------------------------------------
// Map character index (from backend) to image file
// --------------------------------------------------
const CHARACTER_IMAGES = [Char1, Char2, Char3];

// --------------------------------------------------
// API URL — uses env variable in production,
// falls back to localhost for development.
// --------------------------------------------------
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function VoucherGacha() {
  // ---- State Management ----
  const [code, setCode] = useState('');           // The voucher code input
  const [loading, setLoading] = useState(false);   // Is the API call in progress?
  const [result, setResult] = useState(null);      // The winning character data
  const [error, setError] = useState('');           // Error message to display

  // --------------------------------------------------
  // handleSubmit — Called when user clicks "Tukar Kode"
  // Sends the voucher code to the backend API.
  // --------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Don't submit if input is empty
    if (!code.trim()) {
      setError('Silakan masukkan kode voucher.');
      return;
    }

    // Reset previous state
    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Call the backend API
      const response = await fetch(`${API_URL}/voucher/claim`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim() }),
      });

      const data = await response.json();

      // If the server returned an error (400 or 404)
      if (!response.ok) {
        setError(data.message || data.error || 'Terjadi kesalahan.');
        return;
      }

      // Success! Save the result
      setResult(data);
    } catch (err) {
      // Network error or server is down
      setError('Gagal menghubungi server. Coba lagi nanti.');
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // handleReset — Let the user try another code
  // --------------------------------------------------
  const handleReset = () => {
    setCode('');
    setResult(null);
    setError('');
  };

  // --------------------------------------------------
  // RENDER — Three possible states
  // --------------------------------------------------
  return (
    <section id="surprise" className="section vg-section">
      <span className="section-label reveal">Gacha</span>
      <h2 className="section-title reveal reveal-delay-1">Voucher Gacha</h2>

      <div className="vg-card reveal reveal-delay-2">
        {/* ============================================
            STATE 1: RESULT — Show the winning character
            ============================================ */}
        {result ? (
          <div className="vg-result">
            {/* Celebration text */}
            <p className="vg-congrats">🎉</p>
            <p className="vg-heading">{result.message}</p>

            {/* The character image */}
            <div className="vg-image-wrapper">
              <img
                className="vg-image"
                src={CHARACTER_IMAGES[result.index]}
                alt={result.character}
              />
            </div>

            {/* Character name */}
            <span className="vg-character-name">{result.character}</span>

            {/* Screenshot instruction */}
            <div className="vg-instruction">
              <span className="vg-instruction-icon">📸</span>
              <p className="vg-instruction-text">
                Jangan lupa di-Screenshot!<br />
                Tunjukkan ke admin untuk ditukar dengan poin.
              </p>
            </div>

            {/* Try another code button */}
            <button className="vg-reset-btn" onClick={handleReset}>
              Coba Kode Lain
            </button>
          </div>
        ) : (
          /* ============================================
             STATE 2 & 3: INPUT FORM or LOADING
             ============================================ */
          <form className="vg-form" onSubmit={handleSubmit}>
            {/* Heading */}
            <p className="vg-heading">
              Masukkan Kode Voucher
            </p>
            <p className="vg-subtext">
              Ketik kode rahasia yang ada di dalam kotak pastry-mu
            </p>

            {/* Code input field */}
            <input
              type="text"
              className="vg-input"
              placeholder="Contoh: OKACHU-ABCDEF"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.toUpperCase());
                setError(''); // Clear error when typing
              }}
              disabled={loading}
              autoComplete="off"
            />

            {/* Error message */}
            {error && (
              <p className="vg-error">⚠️ {error}</p>
            )}

            {/* Submit button — shows spinner when loading */}
            <button
              type="submit"
              className="vg-submit-btn"
              disabled={loading}
            >
              {loading ? (
                <span className="vg-spinner"></span>
              ) : (
                '🎁 Tukar Kode'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default VoucherGacha;
