import Proyect from "../../assets/img/Proyect.jpg";
import CardProyecto from "../cardProyecto/CardProyecto";
import "./Proyecto.css";

const tecnologias = ["React", "CSS", "JavaScript", "Java"];

const Proyectos = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid">
        <CardProyecto
          imagen={Proyect}
          titulo="Landing Page"
          tecnologia={tecnologias.slice(0, 3)}
          descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, incidunt?"
          enlaceProyecto="https://ejemplo.com"
          enlaceGithub="https://github.com"
        />
         <CardProyecto
          imagen={Proyect}
          titulo="Landing Page"
          tecnologia={tecnologias.slice(0, 3)}
          descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, incidunt?"
          enlaceProyecto="https://ejemplo.com"
          enlaceGithub="https://github.com"
        />
         <CardProyecto
          imagen={Proyect}
          titulo="Landing Page"
          tecnologia={tecnologias.slice(0, 3)}
          descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, incidunt?"
          enlaceProyecto="https://ejemplo.com"
          enlaceGithub="https://github.com"
        />
         <CardProyecto
          imagen={Proyect}
          titulo="Landing Page"
          tecnologia={tecnologias.slice(0, 3)}
          descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, incidunt?"
          enlaceProyecto="https://ejemplo.com"
          enlaceGithub="https://github.com"
        />
         <CardProyecto
          imagen={Proyect}
          titulo="Landing Page"
          tecnologia={tecnologias.slice(0, 3)}
          descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, incidunt?"
          enlaceProyecto="https://ejemplo.com"
          enlaceGithub="https://github.com"
        />
         <CardProyecto
          imagen={Proyect}
          titulo="Landing Page"
          tecnologia={tecnologias.slice(0, 3)}
          descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, incidunt?"
          enlaceProyecto="https://ejemplo.com"
          enlaceGithub="https://github.com"
        />
      </div>
    </section>
  );
};

export default Proyectos;