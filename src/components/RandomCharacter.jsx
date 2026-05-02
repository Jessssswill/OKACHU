/* ===================================================
   RandomCharacter.jsx — Surprise Character Feature
   Picks 1 random OKACHU character on load and asks
   the user to screenshot it for loyalty points.
   =================================================== */

// React hooks
import { useState, useEffect } from 'react';

// Import character images from assets
import Char1 from '../assets/Char1.png';
import Char2 from '../assets/Char2.png';
import Char3 from '../assets/Char3.png';

// Inline styles (kept in-file for simplicity and portability)
import './RandomCharacter.css';

// --------------------------------------------------
// 1. Array of 3 character image URLs
//    Each entry has a `src` (the imported image)
//    and a friendly `name` shown under the image.
// --------------------------------------------------
const CHARACTER_LIST = [
  { src: Char1, name: 'Okachu x Kurung Tulang Belut' },
  { src: Char2, name: 'Okachu x Kurung Cekak Musang' },
  { src: Char3, name: 'Okachu x Kebaya Laboh' },
];

function RandomCharacter() {
  // --------------------------------------------------
  // 2. State: holds the randomly chosen character.
  //    Starts as `null` so nothing shows until the
  //    random pick runs inside useEffect.
  // --------------------------------------------------
  const [character, setCharacter] = useState(null);

  // --------------------------------------------------
  // 3. useEffect runs ONCE when the component loads.
  //    It picks a random index using Math.random()
  //    and sets the character into state.
  // --------------------------------------------------
  useEffect(() => {
    // Math.random() → number between 0 and 1
    // Multiply by the array length, then Math.floor
    // to get a whole-number index (0, 1, or 2).
    const randomIndex = Math.floor(Math.random() * CHARACTER_LIST.length);

    // Save the picked character to state
    setCharacter(CHARACTER_LIST[randomIndex]);
  }, []); // ← empty array = run only once on mount

  // --------------------------------------------------
  // 4. While the character hasn't been picked yet,
  //    show nothing (avoids a flash of empty content).
  // --------------------------------------------------
  if (!character) return null;

  // --------------------------------------------------
  // 5. Render the card with text, image, and
  //    screenshot instruction.
  // --------------------------------------------------
  return (
    <section className="random-character section" id="surprise">
      {/* Section label + title (matches site style) */}
      <span className="section-label">✨ Surprise!</span>
      <h2 className="section-title reveal visible">Karakter Spesial</h2>

      {/* Card wrapper with entrance animation */}
      <div className="rc-card reveal visible">
        {/* Headline text */}
        <p className="rc-heading">
          Yeay! Ini Karakter Spesial Kamu Hari Ini:
        </p>

        {/* The randomly picked character image */}
        <div className="rc-image-wrapper">
          <img
            className="rc-image"
            src={character.src}
            alt={character.name}
          />
        </div>

        {/* Character name badge */}
        <span className="rc-name">{character.name}</span>

        {/* ------------------------------------------------
            6. Screenshot instruction / fake button.
               Styled to stand out so users notice it.
            ------------------------------------------------ */}
        <div className="rc-instruction">
          <span className="rc-instruction-icon">📸</span>
          <p className="rc-instruction-text">
            Jangan lupa di-Screenshot!<br />
            Tunjukkan gambar ini ke admin kami untuk ditukar dengan poin.
          </p>
        </div>

        {/* Decorative fake button (not clickable, just visual) */}
        <div className="rc-fake-button" role="presentation">
          🎁 Klaim Poin Kamu!
        </div>
      </div>
    </section>
  );
}

export default RandomCharacter;
