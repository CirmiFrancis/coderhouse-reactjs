// usé 'npm install react-responsive' para instalarlo y usarlo con este componente
import { NavLink } from "react-router-dom";
import MediaQuery from 'react-responsive';
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark py-2 py-lg-3 px-lg-5">
            <div className="container-fluid px-md-5">
                <div className="navbar-brand m-0 p-0" href="/">
                    <Logo tamanio={80} />
                </div>

                <MediaQuery maxWidth={991}>
                    <CartWidget />
                </MediaQuery>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to="/games">JUEGOS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to="/platform/playstation">PLAYSTATION</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to="/platform/nintendo">NINTENDO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to="/platform/xbox">XBOX</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-link" to="/platform/pc">PC</NavLink>
                        </li>
                    </ul>

                    <MediaQuery minWidth={992}>
                        <CartWidget />
                    </MediaQuery>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;