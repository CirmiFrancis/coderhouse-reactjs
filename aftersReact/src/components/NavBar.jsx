const NavBar = () => {
    return (
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
    )
}

export default NavBar;