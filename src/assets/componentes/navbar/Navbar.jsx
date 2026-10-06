import './Navbar.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Navbar = () => {
  return (
  <header>
    <nav>
        <h1 className="nav-logo">JoseDev</h1>
        <a className="nav-links" href="">Inicio</a>
        <a className="nav-links" href="">Habilidades</a>
        <a className="nav-links" href="">Proyectos</a>
        <a className="nav-links" href="">Acerca Mi</a>
        <div className="nav-actions">
            <button className="theme-toggle-btn">
             <span><DarkModeIcon/></span>
            </button>
        </div>
    </nav>
  </header>
  )
}
export default Navbar;