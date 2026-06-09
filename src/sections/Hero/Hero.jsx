// src/sections/Hero/Hero.jsx
import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        
        {/* Columna Izquierda: Presentación */}
        <div className="hero-content">
          <h1 className="hero-title">
            Soy <br />
            Desarrollador <br />
            <span className="highlight">Web Junior</span>
          </h1>
          <p className="hero-description">
            Construyendo arquitecturas digitales escalables y experiencias de usuario excepcionales. 
            Manteniendo la visión de un producto unificada hasta el final.
          </p>
          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contacto" className="btn btn-secondary">Contáctame</a>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Proyecto Destacado */}
        <div className="hero-image-container">
          {/* Fondo decorativo azul claro desfasado */}
          <div className="hero-card-bg"></div>
          
          {/* Tarjeta real */}
          <div className="hero-card">
            <div className="hero-card-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Proyecto Destacado Nexus Analytics" 
                className="hero-card-img"
              />
            </div>
            <div className="hero-card-body">
              <div className="hero-card-meta">
                <span className="hero-card-tag">Proyecto Destacado</span>
                <span className="hero-card-year">2023</span>
              </div>
              <h3 className="hero-card-title">Nexus Analytics Ecosystem</h3>
              <p className="hero-card-text">
                Dashboards interactivos para procesamiento de datos y visualización en tiempo real.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}