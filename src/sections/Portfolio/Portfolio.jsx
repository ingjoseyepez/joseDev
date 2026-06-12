// src/sections/Portfolio/Portfolio.jsx
import React, { useState } from 'react';
import { projectsData } from '../../data/mockDatas';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal'; // Importación de la modal
import './Portfolio.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null); // Estado clave para la modal
  
  const projectsPerPage = 6; 
  const categories = ['All', 'Design', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section id="proyectos" className="portfolio">
      <div className="portfolio-container">
        
        <div className="portfolio-header">
          <h2 className="portfolio-title">Portfolio Projects</h2>
          <div className="filter-bar">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {currentProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} // Abre la modal guardando el proyecto seleccionado
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="page-btn text-btn"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            
            {pageNumbers.map(number => (
              <button
                key={number}
                className={`page-btn ${currentPage === number ? 'active' : ''}`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}

            <button 
              className="page-btn text-btn"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        )}

        {/* Renderizado Condicional de la Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} // Cierra la modal limpiando el estado
          />
        )}

      </div>
    </section>
  );
}