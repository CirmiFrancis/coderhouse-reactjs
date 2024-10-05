import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/icons/trash.svg";
import trash2 from "../assets/icons/trash2.svg";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    window.scrollTo({top: 0, behavior: 'smooth'}); // al hacer clic en una sección, te lleva al inicio de la página

    if (CantTotalProductos() == 0) {
        return (

            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col text-center text-dark bg-white my-5">
                        <h2>No hay productos en el carrito...</h2>
                        <Link to={"/"} className="btn btn-dark mt-3">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        }
        return text.slice(0, maxLength) + '...';
    };

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
                                <th className="align-middle bg-dark" scope="col"></th>
                                <th className="align-middle bg-dark text-light font-cart-head font-platform" scope="col">Nombre</th>
                                <th className="align-middle bg-dark text-light font-cart-head font-platform" scope="col">Precio Unitario</th>
                                <th className="align-middle bg-dark text-light font-cart-head font-platform" scope="col">Cantidad</th>
                                <th className="align-middle bg-dark text-light font-cart-head font-platform" scope="col">Precio Total</th>
                                <th className="width-last-td bg-dark text-center align-middle px-0 py-3">
                                    <a href="#" onClick={clear} className="btn btn-light empty-custom-padding">Vaciar <img src={trash} alt="Vaciar Carrito" title="Vaciar Carrito" /></a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle bg-dark"><img src={product.image} alt={product.title} className="width-img-cart" /></td>
                                    <td className="align-middle bg-dark text-light font-cart-body">{truncateText(product.title,15)}</td>
                                    <td className="align-middle bg-dark text-light font-cart-body">${product.price}</td>
                                    <td className="align-middle bg-dark text-light font-cart-body">{product.quantity}</td>
                                    <td className="align-middle bg-dark text-light font-cart-body">${(product.quantity * product.price).toFixed(2)}</td>
                                    <td className="width-last-td align-middle bg-dark col-trash">
                                        <a href="#" onClick={() => {removeItem(product.id)}}><img src={trash2} className="trash" alt="Eliminar Producto" title="Eliminar Producto" /></a>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={4} className="align-middle bg-dark text-light border-0"></td>
                                <td className="total-price bg-dark text-light font-platform fw-bold fs-5 border-0 m-0 py-3">${SumaTotalProductos().toFixed(2)}</td>
                                <td className="width-last-td align-middle bg-dark text-center border-0 px-0">
                                    <Link to={"/checkout"} className="btn btn-light confirm-custom-padding">Confirmar</Link>
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