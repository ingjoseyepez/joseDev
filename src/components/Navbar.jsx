import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {'{'} JoseDev {'}'}
        </div>
        
        <nav className="navbar-links">
          <ul>
            <li><a href="#inicio" className="active">Inicio</a></li>
            <li><a href="#estudios">Habilidades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#perfil">Perfil</a></li>
          </ul>
        </nav>

        <div className="navbar-actions">
          {/* Icono de luna simplificado con SVG puro */}
          <button className="theme-toggle" aria-label="Cambiar tema">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}