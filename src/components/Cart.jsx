import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/icons/trash.svg";
import trash2 from "../assets/icons/trash2.svg";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (

            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col text-center text-dark bg-white my-5">
                        <h2>No hay productos en el Carrito de Compra...</h2>
                        <Link to={"/"} className="btn btn-dark mt-3">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid bg-dark d-flex flex-column align-items-center">
            <div className="row">
                <div className="col bg-dark text-light text-center font-gigames px-5 py-3">
                    <h2 className="fs-1 m-0">CARRiTO DE COMPRAS</h2>
                </div>
            </div>
            <div className="row width-table">
                <div className="col text-center p-0">
                    <table className="table m-0">
                        <thead>
                            <tr>
                                <td className="align-middle bg-dark" scope="col"></td>
                                <td className="align-middle bg-dark text-light font-cart-head font-platform" scope="col">Nombre del Juego</td>
                                <td className="align-middle bg-dark text-light font-cart-head font-platform" scope="col">Precio Unitario</td>
                                <td className="align-middle bg-dark text-light font-cart-head font-platform" scope="col">Cantidad</td>
                                <td className="align-middle bg-dark text-light font-cart-head font-platform" scope="col">Precio Total</td>
                                <td className="  bg-dark text-center align-middle px-0 py-3">
                                    <a href="#" onClick={clear} className="btn btn-light">Vaciar Carrito <img src={trash} alt="Vaciar Carrito" title="Vaciar Carrito" /></a>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle bg-dark"><img src={product.image} alt={product.title} className="width-img-cart" /></td>
                                    <td className="align-middle bg-dark text-light font-cart-body">{product.title}</td>
                                    <td className="align-middle bg-dark text-light font-cart-body">${product.price}</td>
                                    <td className="align-middle bg-dark text-light font-cart-body">{product.quantity}</td>
                                    <td className="align-middle bg-dark text-light font-cart-body">${(product.quantity * product.price).toFixed(2)}</td>
                                    <td className="align-middle bg-dark col-trash">
                                        <a href="#" onClick={() => {removeItem(product.id)}}><img src={trash2} width={24} className="trash" alt="Eliminar Producto" title="Eliminar Producto" /></a>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={4} className="align-middle bg-dark text-light"></td>
                                <td className="bg-dark text-light font-platform fw-bold fs-5 m-0 py-3">${SumaTotalProductos().toFixed(2)}</td>
                                <td className="align-middle bg-dark text-center px-0">
                                    <Link to={"/checkout"} className="btn btn-light">Confirmar Compra</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;