import Filter from "../Filters/Filter"
import style from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import homePage from "../imagenes/homePage.jpg"
import CrearDog from "../imagenes/createDog.jpg"
import logoTipo from "../imagenes/logoTipo_dogs_modified.png"

const Navbar = () => {
  const location = useLocation()
  
  return (
    <div className={style.menu} >
          <div className={style.logo} >
              <Link to ={"/dogs-website/"}>
                <img src={logoTipo} alt={logoTipo} />  
              </Link>
          </div>
          
          { location.pathname === "/dogs" ? <Filter/> : <h1>¡ME ESTA QUEDANDO CHIDO!</h1> }
          
          
          <div className={style.homePage} >
              <Link to={"/dogs"}>
                <img src={homePage} alt={homePage} />
              </Link>
          </div>

          <div className={style.crearDog} >
              <Link to={"/dogs/add"}>
                <img src={CrearDog} alt={CrearDog} />
              </Link>
              {/* <Link to="/dogs/add">Create Dog</Link> */}
          </div>
    </div>
  );
};

export default Navbar;
