/* ===================================================
   About.jsx — "Our Story" Section
   Features a cursive section label, decorative quote
   mark, bold lead paragraph, and staggered reveals
   on each body paragraph.
   =================================================== */

function About() {
  return (
    <section id="about" className="section">
      {/* Cursive label above the title */}
      <span className="section-label reveal">Discover</span>

      {/* Section title with animated underline */}
      <h2 className="section-title reveal reveal-delay-1">Our Story</h2>

      {/* Bold lead paragraph with decorative quote mark */}
      <p className="lead-text reveal reveal-delay-2">
        "Okachu" lahir dari semangat untuk menjaga kelestarian Kota Dumai lewat
        kuliner yang inovatif. Di Dumai, kami sangat menghargai setiap pemberian
        alam. Kami percaya bahwa kemewahan sejati bisa tercipta dari sesuatu yang
        sederhana, bahkan dari apa yang selama ini dianggap tak bernilai.
      </p>

      {/* Body paragraphs — each reveals on scroll with delay */}
      <div className="section-text">
        <p className="reveal reveal-delay-3">
          Inilah prinsip kami dalam mengolah setiap bahan. Setelah melalui riset
          panjang untuk menyempurnakan teknik upcycling, kini kami bangga
          mempersembahkan sebuah choux pastry autentik yang memadukan kekayaan
          lokal dengan inovasi modern.
        </p>

        <p className="reveal reveal-delay-4">
          Kami mengajak kamu masuk ke dalam sebuah ekspedisi rasa untuk menikmati
          bahan-bahan segar yang diolah dengan presisi, menggunakan substitusi
          34% tepung MOF yang kami proses sendiri hingga menghasilkan tekstur
          extra crunchy yang unik di setiap gigitannya.
        </p>

        <p className="reveal reveal-delay-5">
          Kami menyajikan choux dengan bahan-bahan padat nutrisi, menghasilkan
          kudapan tinggi serat yang tidak butuh banyak tambahan rasa buatan,
          namun tetap memiliki cita rasa yang luar biasa mewah.
        </p>
      </div>

      {/* Ornamental divider */}
      <div className="ornament reveal">
        <span className="ornament-line"></span>
        <span>✦</span>
        <span className="ornament-line"></span>
      </div>
    </section>
  );
}

export default About;
