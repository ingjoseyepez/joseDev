import './Navbar.css'

const Navbar = () => {
  return (
  <header>
    <nav>
        <h1 className="nav-logo">JoseDev</h1>
        <a className="nav-links" href="">Inico</a>
        <a className="nav-links" href="">Hablidades</a>
        <a className="nav-links" href="">Proyectos</a>
        <a className="nav-links" href="">Acerca Mi</a>
        <div className="nav-actions">
            <button className="theme-toggle-btn">
                <span className="material-symbols-outlined"> dark_mode </span>
            </button>
        </div>
    </nav>
  </header>
  )
}
export default Navbar;