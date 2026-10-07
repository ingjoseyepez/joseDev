import "./CardProyecto.css";

const CardProyecto = ({
  imagen,
  tecnologia = [],
  titulo,
  descripcion,
  enlaceProyecto,
  enlaceGithub,
}) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img className="project-image" src={imagen} alt={titulo || "Proyecto"} />
      </div>
      <div className="project-body">
        <div className="project-tags">
          {tecnologia.map((tech) => (
            <span className="tag-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <h2 className="project-title">{titulo}</h2>
        <p className="project-description">{descripcion}</p>
        <div className="project-links">
          <a
            className="project-link"
            href={enlaceProyecto}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vista Previa
          </a>
          <a
            className="project-link"
            href={enlaceGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositorio
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProyecto;