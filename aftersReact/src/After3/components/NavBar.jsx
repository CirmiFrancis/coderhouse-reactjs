import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div className="container-fluid py-3 main-bg-color">
            <div className="row">
                <div className="col-md-2 text-end">
                    <Logo tamanio={48} />
                </div>
                <div className="col-md-8 d-flex align-items-center ps-0">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/productos"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/category/hamburguesas"}>Hamburguesas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/category/ensaladas"}>Ensaladas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/category/acompanamientos"}>Acompañamientos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/category/postres"}>Postres</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;