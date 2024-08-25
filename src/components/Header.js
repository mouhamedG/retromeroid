import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav>
        <ul>
          <li
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            style={{ position: 'relative' }}
          >
            <Link to="#">PERSONNALISATION</Link>
            {isDropdownOpen && (
              <ul style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                listStyleType: 'none',
                padding: '0',
                margin: '0',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                width: '500px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}>
                <li style={{ display: 'block' }}>
                  <Link to="/gameboy-color" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: '#333',
                    fontSize: '10px',
                    textDecoration: 'none'
                  }}>GAMEBOY COLOR</Link>
                </li>
              
                <li style={{ display: 'block' }}>
                  <Link to="/gameboy-advance" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: '#333',
                    fontSize: '10px',

                    textDecoration: 'none'
                  }}>GAMEBOY ADVANCE</Link>
                </li>
                <li style={{ display: 'block' }}>
                  <Link to="/gameboy-advance-sp" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: '#333',
                    fontSize: '10px',

                    textDecoration: 'none'
                  }}>GAMEBOY ADVANCE-SP</Link>
                </li>
                <li style={{ display: 'block' }}>
                  <Link to="/gameboy-dmg" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: '#333',
                    fontSize: '10px',

                    textDecoration: 'none'
                  }}>GAMEBOY DMG</Link>
                </li>
              </ul>
            )}
          </li>
          <li><Link to="/psvita-oled">PSVITA-OLED</Link></li>
          <li><Link to="/limited-editions">EDITIONS LIMITES</Link></li>
          <li><Link to="/accessories">ACCESSOIRES</Link></li>
          <li><Link to="/wallpapers">FONDS D'ECRAN</Link></li>
        </ul>
      </nav>

      <style>{`
        header {
          background-color: #f4f4f4;
          padding: 10px;
        }
        nav ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        nav ul li {
          display: inline-block;
          position: relative;
          margin-right: 15px;
        }
        nav ul li a {
          text-decoration: none;
          color: #333;
          padding: 10px;
          display: inline-block;
        }
        nav ul li a:hover {
          background-color: #ddd;
        }
      `}</style>
    </header>
  );
};

export default Header;
