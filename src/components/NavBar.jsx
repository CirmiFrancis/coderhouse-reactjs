// usé 'npm install react-responsive' para instalarlo y usarlo con este componente
import { NavLink } from "react-router-dom";
import MediaQuery from 'react-responsive';
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div className="sticky-top">
            <MediaQuery minWidth={768}>
                <div className="container-fluid bg-dark py-3">
                    <div className="row">
                        <div className="col-md-2 text-end px-0">
                            <Logo tamanio={96} />
                        </div>
                        <div className="col-md-8 d-flex align-items-center justify-content-center px-0">
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
                        <div className="col-md-2 d-flex align-items-center justify-content-start px-0">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={767}>
                <div className="container-fluid bg-dark py-3">
                    <div className="row">
                        <div className="col-6 text-center px-0">
                            <Logo tamanio={96} />
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center px-0">
                            <CartWidget />
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <ul className="nav d-flex align-items-center justify-content-center">
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
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default NavBar;