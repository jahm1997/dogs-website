import style from "./Dogs.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";

const Dogs = (props) => {
   const [imageSrc, setImageSrc] = useState(props.image);
   
   const handleImageError = () => {
       // Si falla la imagen (ej. porque era .png en vez de .jpg), ponemos una por defecto
       setImageSrc("https://cdn2.thedogapi.com/images/B126vphQ7.jpg"); 
   };

   return (
      <div className={style.container}>
         <Link to={`/dogs-website/${props.id}`} className={style.link}>
            <div className={style.imageContainer}>
                <img 
                    className={style.imagen} 
                    src={imageSrc} 
                    alt={props.name}
                    onError={handleImageError}
                />
            </div>
            <div className={style.info}>
                <h3 className={style.name}>{props.name}</h3>
                <div className={style.details}>
                    <p className={style.weight}>⚖️ {props.weight} Kg</p>
                    {props.temperament && (
                        <p className={style.temperament}>
                           🎭 {props.temperament.split(",").slice(0, 3).join(", ")}
                           {props.temperament.split(",").length > 3 ? "..." : ""}
                        </p>
                    )}
                </div>
            </div>
         </Link>
      </div>
    );
}

export default Dogs
