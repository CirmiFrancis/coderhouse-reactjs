import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/icons/trash.svg";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger mt-5" role="alert">
                            No se encontraron productos en el Carrito!
                        </div>
                        <Link to={"/"} className="btn btn-dark my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid">
                <div className="row">
                    <div className="col bg-dark text-light text-center px-5 py-3">
                        <h1 className="m-0">Carrito de Compras</h1>
                    </div>
                </div>
                <div className="row cart-bg">
                    <div className="col text-center p-0">
                        <table className="table m-0">
                            <thead>
                                <tr>
                                    <th className="align-middle bg-dark text-light fs-5 py-3" scope="col">Juego</th>
                                    <th className="align-middle bg-dark text-light fs-5 py-3" scope="col">Nombre</th>
                                    <th className="align-middle bg-dark text-light fs-5 py-3" scope="col">Precio Unitario</th>
                                    <th className="align-middle bg-dark text-light fs-5 py-3" scope="col">Cantidad</th>
                                    <th className="align-middle bg-dark text-light fs-5 py-3" scope="col">Precio Total</th>
                                    <th className="align-middle bg-dark" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="align-middle bg-light"><img src={product.image} alt={product.title} width={100} /></td>
                                        <td className="align-middle bg-light">{product.title}</td>
                                        <td className="align-middle bg-light">${product.price}</td>
                                        <td className="align-middle bg-light">{product.quantity}</td>
                                        <td className="align-middle bg-light">${product.quantity * product.price}</td>
                                        <td className="align-middle bg-light"><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={4} className="bg-dark text-light text-end py-3 fs-4 fw-bold m-0">Precio Total (Compra): ${SumaTotalProductos()}</td>

                                    <th className="bg-dark text-end align-middle"><a href="#" onClick={clear} className="btn btn-light">Vaciar Carrito <img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></th>

                                    <td className="bg-dark text-end align-middle"><Link to={"/checkout"} className="btn btn-light">Checkout</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;