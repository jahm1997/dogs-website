import style from "./Dog.module.css"
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDog } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux";

function Dog() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { dog } = useSelector(state => state)
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        dispatch(getDog(id))
    }, [dispatch, id])

    useEffect(() => {
        if (dog && dog.length > 0) {
            setImageSrc(dog[0].image);
        }
    }, [dog]);

    const handleImageError = () => {
        setImageSrc("https://cdn2.thedogapi.com/images/B126vphQ7.jpg");
    };

    if (!dog || !dog.length) {
        return (
            <div className={style.loadingContainer}>
                <div className={style.spinner}></div>
            </div>
        )
    }

    const currentDog = dog[0];

    return (
        <div className={style.pageWrapper}>
            <Navbar />
            <div className={style.contentContainer}>
                <div className={style.card}>
                    <div className={style.imageSection}>
                        <img 
                            className={style.dogImage} 
                            src={imageSrc || currentDog.image} 
                            alt={currentDog.name} 
                            onError={handleImageError}
                        />
                    </div>
                    <div className={style.infoSection}>
                        <h1 className={style.title}>{currentDog.name}</h1>
                        
                        <div className={style.statGrid}>
                            <div className={style.statItem}>
                                <span className={style.statLabel}>Weight</span>
                                <span className={style.statValue}>{currentDog.weight} kg</span>
                            </div>
                            <div className={style.statItem}>
                                <span className={style.statLabel}>Height</span>
                                <span className={style.statValue}>{currentDog.height} cm</span>
                            </div>
                            <div className={style.statItem}>
                                <span className={style.statLabel}>Life Span</span>
                                <span className={style.statValue}>{currentDog.life_span}</span>
                            </div>
                        </div>

                        <div className={style.temperamentSection}>
                            <h3>Temperament</h3>
                            <div className={style.tags}>
                                {currentDog.temperament ? (
                                    currentDog.temperament.split(",").map((temp, index) => (
                                        <span key={index} className={style.tag}>
                                            {temp.trim()}
                                        </span>
                                    ))
                                ) : (
                                    <span className={style.noTemp}>Unknown Temperament</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dog
