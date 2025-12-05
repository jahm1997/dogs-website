import Filter from "../Filters/Filter"
import style from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import logoTipo from "../imagenes/logoTipo_dogs_modified.png"

const Navbar = () => {
  const location = useLocation()
  
  return (
    <header className={style.navbar}>
        <div className={style.logoContainer}>
            <Link to="/" className={style.logoLink}>
                <img src={logoTipo} alt="Dogs App Logo" className={style.logoImage} />
                <span className={style.logoText}>DOGS APP</span>
            </Link>
        </div>
        
        <div className={style.centerContent}>
            {location.pathname === "/dogs-website" && <Filter/>}
        </div>
        
        <nav className={style.navLinks}>
            <Link to="/dogs-website/add" className={`${style.navLink} ${style.createButton}`}>Create Dog</Link>
        </nav>
    </header>
  );
};

export default Navbar;
