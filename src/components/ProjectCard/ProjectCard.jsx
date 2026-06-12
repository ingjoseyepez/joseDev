// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project, onClick }) {
  return (
    // Añadimos el evento onClick aquí
    <article className="project-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="project-card-image-box">
        <img src={project.image} alt={project.title} className="project-card-img" />
      </div>
      
      <div className="project-card-content">
        <div className="project-card-meta">
          <div className="project-card-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag-badge">{tag}</span>
            ))}
          </div>
          <span className="project-card-year">{project.year}</span>
        </div>
        
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
      </div>
    </article>
  );
}