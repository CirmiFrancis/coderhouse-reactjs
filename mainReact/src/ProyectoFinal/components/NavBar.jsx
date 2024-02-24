import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div className="container-fluid py-3 bg-dark">
            <div className="row">
                <div className="col-md-2 text-end">
                    <Logo tamanio={96} />
                </div>
                <div className="col-md-8 d-flex align-items-center ps-0">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/games"}>JUEGOS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/platform/playstation"}>PLAYSTATION</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/platform/xbox"}>XBOX</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/platform/pc"}>PC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to={"/platform/nintendo"}>NINTENDO</NavLink>
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