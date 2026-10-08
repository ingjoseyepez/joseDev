// src/components/proyectos/Proyectos.jsx
import React, { useState } from "react";
import CardProyecto from "../cardProyecto/CardProyecto";
import { proyectosData } from "../../data/data"; // 👈 Importamos la información aquí
import "./Proyecto.css";

const Proyectos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  // Filtramos la lista importada desde el archivo externo
  const proyectosFiltrados = proyectosData.filter((proyecto) => {
    if (categoriaSeleccionada === "todos") return true;
    return proyecto.categoria === categoriaSeleccionada;
  });

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Mis Proyectos</h2>

        {/* Botones de filtro */}
        <div className="filter-container">
          <button
            className={`filter-btn ${
              categoriaSeleccionada === "todos" ? "active" : ""
            }`}
            onClick={() => setCategoriaSeleccionada("todos")}
          >
            Todos
          </button>

          <button
            className={`filter-btn ${
              categoriaSeleccionada === "frontend" ? "active" : ""
            }`}
            onClick={() => setCategoriaSeleccionada("frontend")}
          >
            Frontend
          </button>

          <button
            className={`filter-btn ${
              categoriaSeleccionada === "backend" ? "active" : ""
            }`}
            onClick={() => setCategoriaSeleccionada("backend")}
          >
            Backend
          </button>
        </div>
      </div>

      {/* Tarjetas filtradas */}
      <div className="projects-grid">
        {proyectosFiltrados.map((proyecto) => (
          <CardProyecto
            key={proyecto.id}
            imagen={proyecto.imagen}
            titulo={proyecto.titulo}
            tecnologia={proyecto.tecnologia}
            descripcion={proyecto.descripcion}
            enlaceProyecto={proyecto.enlaceProyecto}
            enlaceGithub={proyecto.enlaceGithub}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
