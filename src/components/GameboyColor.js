import React, { useState, useEffect, useRef } from 'react';
import '../styles/style.css'; // Importation du style

const GameboyColor = () => {
  const [selectedColor, setSelectedColor] = useState('default');
  const [selectedBackColor, setSelectedBackColor] = useState('default');
  const [selectedButtonColor, setSelectedButtonColor] = useState('default');
  const [activeSection, setActiveSection] = useState(null);

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour changer l'image en fonction de la couleur sélectionnée
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // Fonction pour changer l'image en fonction de la couleur de la coque arrière
  const handleBackColorChange = (event) => {
    setSelectedBackColor(event.target.value);
  };

  // Fonction pour changer l'image en fonction de la couleur des boutons
  const handleButtonColorChange = (event) => {
    setSelectedButtonColor(event.target.value);
  };

  // Fonction pour afficher le texte de la section cliquée
  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  // Détermine le chemin de l'image en fonction de la couleur sélectionnée
  const getImageSrc = () => {
    let imageSrc = '';

    switch (selectedColor) {
      case 'bleu':
        imageSrc = 'ASSETS/GB/FRONT/GB-FRONT-Blue.jpg';
        break;
      case 'noir':
        imageSrc = 'ASSETS/GB/FRONT/GB-FRONT-Noir.jpg';
        break;
      case 'jaune':
        imageSrc = 'ASSETS/GB/FRONT/GB-FRONT-Jaune.jpg';
        break;
      case 'orange':
        imageSrc = 'ASSETS/GB/FRONT/GB-FRONT-Orange.jpg';
        break;
      case 'rouge':
        imageSrc = 'ASSETS/GB/FRONT/GB-FRONT-rouge.jpg';
        break;
      default:
        imageSrc = 'ASSETS/GBC/BACK/1.jpg'; // Image par défaut
        break;
    }

    switch (selectedBackColor) {
      case 'bleu':
        imageSrc = 'ASSETS/GBC/SIDE/ca_bleu.png';
        break;
      case 'noir':
        imageSrc = 'ASSETS/GBC/SIDE/ca_noir.png';
        break;
      case 'jaune':
        imageSrc = 'ASSETS/GBC/SIDE/ca_jaune.png';
        break;
      case 'orange':
        imageSrc = 'ASSETS/GBC/SIDE/ca_orange.png';
        break;
      case 'rouge':
        imageSrc = 'ASSETS/GBC/SIDE/ca_rouge.png';
        break;
      default:
        break;
    }

    switch (selectedButtonColor) {
      case 'bleu':
        imageSrc = 'ASSETS/GBC/FRONT/b_bleu.png';
        break;
      case 'noir':
        imageSrc = 'ASSETS/GBC/FRONT/b_noir.png';
        break;
      case 'jaune':
        imageSrc = 'ASSETS/GBC/FRONT/b_orange.png';
        break;
      case 'orange':
        imageSrc = 'ASSETS/GBC/FRONT/b_orange.png';
        break;
      case 'rouge':
        imageSrc = 'ASSETS/GBC/FRONT/b_rouge.png';
        break;
      default:
        break;
    }

    return imageSrc;
  };

  // Fonction pour faire défiler les images du carrousel
  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + 3) % 3; // Suppose 3 images dans le carrousel
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % 3; // Suppose 3 images dans le carrousel
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 600}px)`;
    }
  }, [currentIndex]);

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

          <label>
            Coque arrière:
            <div className="color-options">
              <div className="color-swatch color-red">
                <input type="radio" id="coque-arriere-rouge" name="coque-arriere" value="rouge" onChange={handleBackColorChange} />
                <label htmlFor="coque-arriere-rouge"></label>
              </div>
              <div className="color-swatch color-yellow">
                <input type="radio" id="coque-arriere-jaune" name="coque-arriere" value="jaune" onChange={handleBackColorChange} />
                <label htmlFor="coque-arriere-jaune"></label>
              </div>
              <div className="color-swatch color-black">
                <input type="radio" id="coque-arriere-noir" name="coque-arriere" value="noir" onChange={handleBackColorChange} />
                <label htmlFor="coque-arriere-noir"></label>
              </div>
              <div className="color-swatch color-blue">
                <input type="radio" id="coque-arriere-bleu" name="coque-arriere" value="bleu" onChange={handleBackColorChange} />
                <label htmlFor="coque-arriere-bleu"></label>
              </div>
              <div className="color-swatch color-orange">
                <input type="radio" id="coque-arriere-orange" name="coque-arriere" value="orange" onChange={handleBackColorChange} />
                <label htmlFor="coque-arriere-orange"></label>
              </div>
            </div>
          </label>

          <label>
            Boutons:
            <div className="color-options">
              <div className="color-swatch color-red">
                <input type="radio" id="boutons-rouge" name="boutons" value="rouge" onChange={handleButtonColorChange} />
                <label htmlFor="boutons-rouge"></label>
              </div>
              <div className="color-swatch color-yellow">
                <input type="radio" id="boutons-jaune" name="boutons" value="jaune" onChange={handleButtonColorChange} />
                <label htmlFor="boutons-jaune"></label>
              </div>
              <div className="color-swatch color-black">
                <input type="radio" id="boutons-noir" name="boutons" value="noir" onChange={handleButtonColorChange} />
                <label htmlFor="boutons-noir"></label>
              </div>
              <div className="color-swatch color-blue">
                <input type="radio" id="boutons-bleu" name="boutons" value="bleu" onChange={handleButtonColorChange} />
                <label htmlFor="boutons-bleu"></label>
              </div>
              <div className="color-swatch color-orange">
                <input type="radio" id="boutons-orange" name="boutons" value="orange" onChange={handleButtonColorChange} />
                <label htmlFor="boutons-orange"></label>
              </div>
            </div>
          </label>
        </form>
      </div>
      <div className="gameboy-color-sections">
        <section className="description">
          <h2>Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section>
        <section className="acomptes">
          <h2>Acompte</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section>
        <section className="garantie">
          <h2>Garantie</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section>
      </div>
      <section className="inspiration">
        <h2>Inspiration</h2>
        <div className="carousel">
          <div className="carousel-images" ref={carouselRef}>
          <img src="ASSETS/GB/FRONT/GB-FRONT-Blue.jpg" alt="Blue" />
  <img src="ASSETS/GB/FRONT/GB-Front-Noir.jpg" alt="Black" />
  <img src="ASSETS/GB/FRONT/GB-Front-Jaune.jpg" alt="Yellow" />
  <img src="ASSETS/GB/FRONT/GB-Front-Orange.jpg" alt="Orange" />
  <img src="ASSETS/GB/FRONT/GB-Front-rouge.jpg" alt="Red" />

          </div>
          <button className="prev" onClick={handlePrevClick}>❮</button>
          <button className="next" onClick={handleNextClick}>❯</button>
        </div>
        <p>Explications sur les boutons...</p>
      </section>
    </div>
  );
};

export default GameboyColor;
