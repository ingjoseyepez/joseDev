// src/sections/Services/Services.jsx
import React from 'react';
import { servicesData } from '../../data/mockData';
import './Services.css';

// Importaciones de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

// Mapeamos el string de mockData con el objeto del icono de FontAwesome
const iconMap = {
  design: faPalette,
  frontend: faCode,
  backend: faDatabase
};

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">
        
        <div className="services-header">
          <h2 className="services-title">¿Qué Me Hace Diferente?</h2>
          <div className="title-underline"></div>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">
                {/* Reemplazo del SVG por el componente de FontAwesome */}
                <FontAwesomeIcon 
                  icon={iconMap[service.iconType]} 
                  className="fa-icon" 
                />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}