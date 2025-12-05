import styles from "./Bienvenido.module.css"
import { Link } from "react-router-dom"
import botonImg from "../imagenes/BotonPerrito.jpeg"

const Bienvenido = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Best Friends</h1>
                <div className={styles.pawPrintLeft}></div>
                <div className={styles.pawPrintRight}></div>
                <div className={styles.centerContent}>
                    <Link to="/dogs-website" className={styles.imageButtonLink}>
                        <div className={styles.buttonWrapper}>
                            <img src={botonImg} alt="Home Button" className={styles.imageButton} />
                            {/* <span className={styles.buttonText}>HOME</span> */}
                        </div>
                    </Link>
                </div>
                <p className={styles.subtitle}>Conoce aquí las diferentes razas de perros y sus cualidades</p>
            </div>
            <div className={styles.rightImageSection}>
                {/* Optional: If we want to add the group of dogs on the right */}
            </div>
        </div>
    )
}

export default Bienvenido