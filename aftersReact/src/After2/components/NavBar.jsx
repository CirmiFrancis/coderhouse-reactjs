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
                            <a className="nav-link navbar-link" href="#">Pedí tu combo favorito</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link" href="#">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link a-hover" href="#">Cupones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link a-hover" href="#">Restaurantes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link a-hover" href="#">Novedades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link a-hover" href="#">Delivery</a>
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