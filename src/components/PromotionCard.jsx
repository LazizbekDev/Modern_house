import React from 'react';
import promo from "/promo.png";
import "./promocard.css"

export default function PromotionalCard() {
  return (
    <div className="promo-card-container">
      <div className="promo-card">
        <div className="promo-image-wrapper">
          <img src={promo} alt="promo" className="promo-image" />
        </div>
        <div className="promo-text">
          <h2 className="promo-title">MAXSUS SOVG'A</h2>
          <p className="promo-paragraph">
            Onlayn taqdimotda qatnashganlar orasidan bitta tasodifiy insonga <span>Namozgoh City
            T.JMidan xonadon sovg'a qilinadi!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
