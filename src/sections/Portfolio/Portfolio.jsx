// src/sections/Portfolio/Portfolio.jsx
import React, { useState } from 'react';
import { projectsData } from '../../data/mockDatas';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Portfolio.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Definimos cuántos proyectos queremos por página (3 para cumplir con el diseño)
  const projectsPerPage = 6; 
  const categories = ['All', 'Design', 'Frontend', 'Backend'];

  // 1. Primero filtramos por categoría
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  // 2. Lógica de Paginación Matemática
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  
  // Cortamos el array para mostrar solo los 3 que corresponden a esta página
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Calculamos el total de páginas necesarias
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // ¡Detalle de Senior! Si cambian el filtro, debemos resetear a la página 1
  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };

  // Generamos un array con los números de página disponibles [1, 2, ...]
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section id="proyectos" className="portfolio">
      <div className="portfolio-container">
        
        {/* Encabezado y Filtros */}
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

        {/* Cuadrícula de Proyectos Filtrados y Paginados */}
        <div className="portfolio-grid">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Paginación Dinámica (Solo se muestra si hay más de 1 página) */}
        {totalPages > 1 && (
          <div className="pagination">
            {/* Botón Anterior (<) */}
            <button 
              className="page-btn text-btn"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            
            {/* Números de páginas */}
            {pageNumbers.map(number => (
              <button
                key={number}
                className={`page-btn ${currentPage === number ? 'active' : ''}`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}

            {/* Botón Siguiente (>) */}
            <button 
              className="page-btn text-btn"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}