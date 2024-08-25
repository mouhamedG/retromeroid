import React from 'react';

const Accessories = () => {
  return (
    <div className="container">
      <h1>BOUTIQUE ACCESSOIRE</h1>
      <h3>Livraison offerte dès 139£</h3>
      <div className="accessory-links">
        <a href="/gameboy-color">GAMEBOY COLOR</a>
        <a href="/gameboy-advance">GAMEBOY ADVANCE</a>
        <a href="/gameboy-advance-sp">GAMEBOY ADVANCE SP</a>
        <a href="/gameboy-dmg">GAMEBOY DMG</a>
      </div>
      <div className="accessories">
        {/* Ajouter les accessoires ici */}
      </div>
    </div>
  );
};

export default Accessories;
