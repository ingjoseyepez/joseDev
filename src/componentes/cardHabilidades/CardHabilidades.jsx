import React from "react";
import "./CardHabilidades.css";

const CardHabilidades = ({
  icono: Icono,
  titulo,
  descripcion,
  tecnologia,
  tema,
}) => {
  return (
    <div className="service-card">
      
      {/* Contenedor del ícono con color dinámico */}
      <div className="icon-box">
        {Icono && <Icono className={`color-${tema}`} style={{ fontSize: "1.875rem" }} />}
      </div>

      {/* Textos principales */}
      <h3 className="service-title">{titulo}</h3>
      <p className="service-desc">{descripcion}</p>

      {/* Lista dinámica de habilidades con puntitos de color */}
      <ul className="skill-list">
        {tecnologia.map((tech) => (
          <li key={tech} className="skill-item">
            <span className={`skill-dot bg-${tema}`}></span>
            {tech}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default CardHabilidades;
