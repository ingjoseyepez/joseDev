import React from "react";
import CardHabilidades from "../cardHabilidades/CardHabilidades";
import FormatShapesIcon from '@mui/icons-material/FormatShapes';
import TerminalIcon from '@mui/icons-material/Terminal';
import "./Habilidades.css";

const frontend = ["React", "Tailwind CSS", "Next.js", "React Native"];
const backend = [
  "Java",
  "PostgreSQL",
  "Spring Boot",
  "Git",
  "Docker",
  "Node.js",
];

const Habilidades = () => {
  return (
    <section className="value-proposition-section">
      <div className="value-container">
        
        {/* Encabezado estructurado según el CSS */}
        <div className="section-header">
          <div className="title-wrapper">
            <h2 className="section-title">¿Qué me hace diferente?</h2>       
          </div>
          
          <p className="section-subtitle">
            Una perspectiva integral que abarca desde la conceptualización
            visual hasta la implementación técnica de alto rendimiento.
          </p>
        </div>

        {/* Grilla de tarjetas */}
        <div className="cards-grid">
          <CardHabilidades
            icono={FormatShapesIcon}
            titulo="Frontend Developer"
            descripcion="Interfaces reactivas y fluidas construidas con React y Vue, priorizando el rendimiento, la accesibilidad y el SEO."
            tecnologia={frontend.slice(0, 4)}
            tema="front"
          />
          <CardHabilidades
            icono={TerminalIcon}
            titulo="Backend Developer"
            descripcion="Lógica de servidor robusta y escalable con Node.js y Python. Arquitectura de APIs seguras y gestión de datos eficiente."
            tecnologia={backend.slice(0, 5)}
            tema="back"
          />
        </div>

      </div>
    </section>
  );
};

export default Habilidades;