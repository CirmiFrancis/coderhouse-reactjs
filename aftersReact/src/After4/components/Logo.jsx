import { Link } from "react-router-dom";
import logoBK from "../assets/bk-logo.png";

const Logo = ({tamanio}) => {
    return (
        <Link to={"/"}>
            <img src={logoBK} alt="Logo de Burger King" className="logo" width={tamanio} />
        </Link>
    )
}

export default Logo;