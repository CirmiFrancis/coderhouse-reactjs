import { Link } from "react-router-dom";
import catalogue from "../assets/catalogue.webp"

const Catalogue = () => {
    return (
        <div className="container-fluid catalogue-brightness text-light bg-black p-0">
            <div className="position-relative">
                <Link to={"/games"} className="text-decoration-none">
                    <img className="d-block w-100 catalogue-img" src={catalogue} alt="Ícono de Playstation"/>
                    <div className="catalogue-info container-fluid padding-custom">
                        <h2 className="font-gigames text-light pb-4">CATÁLOGO</h2>
                        <p className="font-text text-light">Hay muchos juegos que esperan a ser jugados. <br/> ¡Explora nuestro catálogo ahora! </p>
                        <button className="button-info font-gigames text-light bg-dark border-0 rounded px-4 py-3">VER TODOS</button>
                    </div>
                </Link> 
            </div>
        </div>
    );
};

export default Catalogue;