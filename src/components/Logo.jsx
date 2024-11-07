import { Link } from "react-router-dom";
import LogoGG from "../assets/gigames.png";

const Logo = ({ tamanio }) => {
    const handleScrollToTop = () => { // Para que al clickear en el logo, nos lleve arriba de la página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Link to={"/"} onClick={handleScrollToTop}>
            <img src={LogoGG} alt="Logo de GiGames" className="logo" width={tamanio} />
        </Link>
    );
};

export default Logo;