import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import cart from "../assets/icons/cart.svg";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        <Link to={"/cart"} className="btn btn-light position-relative">
            <img src={cart} alt="Carrito de compras." width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> 
    )
}

export default CartWidget;