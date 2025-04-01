import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Masz jakieś pytania?
        <br className="sm:block hidden" /> Napisz do mnie, a z wielką chęcią odpowiem!
      </p>
      <Link to="/contact" className="btn">
        Kontakt
      </Link>
    </section>
  );
};

export default CTA;
