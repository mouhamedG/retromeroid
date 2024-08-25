import React, { useState } from 'react';
import '../styles/style.css'; // Importation du style

const GameboyColor = () => {
  const [selectedColor, setSelectedColor] = useState('default');
  const [activeSection, setActiveSection] = useState(null);

  // Fonction pour changer l'image en fonction de la couleur sélectionnée
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // Fonction pour afficher le texte de la section cliquée
  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  // Détermine le chemin de l'image en fonction de la couleur sélectionnée
  const getImageSrc = () => {
    switch (selectedColor) {
      case 'bleu':
        return 'ASSETS/GB/FRONT/GB-FRONT-Blue.jpg';
      case 'noir':
        return 'ASSETS/GB/FRONT/GB-FRONT-Noir.jpg';
      case 'jaune':
        return 'ASSETS/GB/FRONT/GB-FRONT-Jaune.jpg';
      case 'orange':
        return 'ASSETS/GB/FRONT/GB-FRONT-Orange.jpg';
      case 'rouge':
        return 'ASSETS/GB/FRONT/GB-FRONT-rouge.jpg';
    
      default:
        return 'ASSETS/GBC/BACK/1.jpg'; // Image par défaut
    }
  };

  return (
    <div className="gameboy-color-container">
      <h1>GAMEBOY COLOR</h1>
      <h3>à partir de 149£</h3>
      <div className="gameboy-color-content">
        <img src={getImageSrc()} alt="Gameboy Color" />
        <form className="gameboy-color-form">
          <h2>Configuration</h2>

          <label>
            Coque:
            <div className="color-options">
              <div className="color-swatch color-red">
                <input type="radio" id="coque-rouge" name="coque" value="rouge" onChange={handleColorChange} />
                <label htmlFor="coque-rouge"></label>
              </div>
              <div className="color-swatch color-yellow">
                <input type="radio" id="coque-jaune" name="coque" value="jaune" onChange={handleColorChange} />
                <label htmlFor="coque-jaune"></label>
              </div>
              <div className="color-swatch color-black">
                <input type="radio" id="coque-noir" name="coque" value="noir" onChange={handleColorChange} />
                <label htmlFor="coque-noir"></label>
              </div>
              <div className="color-swatch color-blue">
                <input type="radio" id="coque-bleu" name="coque" value="bleu" onChange={handleColorChange} />
                <label htmlFor="coque-bleu"></label>
              </div>
              <div className="color-swatch color-orange">
                <input type="radio" id="coque-orange" name="coque" value="orange" onChange={handleColorChange} />
                <label htmlFor="coque-orange"></label>
              </div>
              
            </div>
          </label>
        </form>
      </div>
      <div className="gameboy-color-sections">
        <section className="description" onClick={() => handleSectionClick('description')}>
          <h2>Description</h2>
          {activeSection === 'description' && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula risus vitae purus gravida auctor.</p>}
        </section>
        <section className="acomptes" onClick={() => handleSectionClick('acomptes')}>
          <h2>Acompte</h2>
          {activeSection === 'acomptes' && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula risus vitae purus gravida auctor.</p>}
        </section>
        <section className="garantie" onClick={() => handleSectionClick('garantie')}>
          <h2>Garantie</h2>
          {activeSection === 'garantie' && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula risus vitae purus gravida auctor.</p>}
        </section>
      </div>
      <section className="inspiration">
        <h2>Inspiration</h2>
        <div className="carousel">
          {/* Carousel des images */}
        </div>
        <p>Explications sur les boutons...</p>
      </section>
    </div>
  );
};

export default GameboyColor;
