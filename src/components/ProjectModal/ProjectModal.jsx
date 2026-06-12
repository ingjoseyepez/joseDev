// src/components/ProjectModal/ProjectModal.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content horizontal-layout">
        
        {/* Botón de cerrar (se mantiene absoluto arriba a la derecha) */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* COLUMNA IZQUIERDA: Imagen completa */}
        <div className="modal-image-box">
          <img src={project.image} alt={project.title} className="modal-img" />
        </div>

        {/* COLUMNA DERECHA: Contenido y descripción larga */}
        <div className="modal-body">
          <div className="modal-meta">
            <div className="modal-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag-badge">{tag}</span>
              ))}
            </div>
            <span className="modal-year">{project.year}</span>
          </div>

          <h3 className="modal-title">{project.title}</h3>
          
          {/* Contenedor con scroll interno por si la descripción es extremadamente larga */}
          <div className="modal-desc-container">
            <p className="modal-desc">{project.description}</p>
          </div>

          {/* Enlaces de Acción al fondo */}
          <div className="modal-actions">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="modal-btn btn-live">
              <FontAwesomeIcon icon={faGlobe} /> Vista Previa
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-btn btn-github">
              <FontAwesomeIcon icon={faCode} /> GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}