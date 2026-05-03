/* ===================================================
   Ingredients.jsx — "What's Inside" Section
   Interactive pill tags with rose gold shimmer hover
   effect. The star ingredient (MOF) is highlighted.
   =================================================== */

// Ingredients data — isHighlight marks the star ingredient
const ingredients = [
  { name: 'Susu Cair' },
  { name: 'Air' },
  { name: 'Telur Ayam' },
  { name: 'Mentega' },
  { name: 'Gula Pasir' },
  { name: 'Tepung Terigu' },
  { name: 'Nanas Kampar', isHighlight: true },
  { name: 'Whipping Cream' },
  { name: 'Tepung Okara (MOF) 34%', isHighlight: true },
  { name: 'Pati Jagung (Maizena)' },
  { name: 'Garam' },
  { name: 'Bubuk Kopi Liberika Meranti', isHighlight: true },
  { name: 'Ekstrak Vanili' },
];

function Ingredients() {
  return (
    <section id="menu" className="section">
      {/* Cursive label above the title */}
      <span className="section-label reveal">Ingredients</span>

      {/* Section heading */}
      <h2 className="section-title reveal reveal-delay-1">What's Inside</h2>

      {/* Interactive pill tags — highlighted items get a special style */}
      <div className="ingredients-grid reveal reveal-delay-2">
        {ingredients.map((item, index) => (
          <span
            key={index}
            className={`ingredient-tag ${item.isHighlight ? 'highlight' : ''}`}
          >
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Ingredients;
