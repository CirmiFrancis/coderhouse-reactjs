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
                        <p className="display-1">🍔</p>
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el Carrito!</div>
                        <Link to={"/"} className="btn btn-warning my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid">
                <div className="row">
                    <div className="col locals-bg-custom font-family-custom text-danger-emphasis text-center px-5 py-3">
                        <h1 className="m-0"><u>Productos Seleccionados</u></h1>
                    </div>
                </div>
                <div className="row cart-bg">
                    <div className="col text-center p-0">
                        <table className="table m-0">
                            <thead>
                                <tr>
                                    <th className="align-middle locals-bg-custom font-family-custom text-danger-emphasis fs-5 py-3" scope="col">Producto</th>
                                    <th className="align-middle locals-bg-custom font-family-custom text-danger-emphasis fs-5 py-3" scope="col">Nombre del Producto</th>
                                    <th className="align-middle locals-bg-custom font-family-custom text-danger-emphasis fs-5 py-3" scope="col">Precio Unitario</th>
                                    <th className="align-middle locals-bg-custom font-family-custom text-danger-emphasis fs-5 py-3" scope="col">Cantidad</th>
                                    <th className="align-middle locals-bg-custom font-family-custom text-danger-emphasis fs-5 py-3" scope="col">Precio Total</th>
                                    <th className="align-middle locals-bg-custom" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="align-middle cart-bg"><img src={product.image} alt={product.title} width={100} /></td>
                                        <td className="align-middle cart-bg">{product.title}</td>
                                        <td className="align-middle cart-bg">${product.price}</td>
                                        <td className="align-middle cart-bg">{product.quantity}</td>
                                        <td className="align-middle cart-bg">${product.quantity * product.price}</td>
                                        <td className="align-middle cart-bg"><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={4} className="locals-bg-custom font-family-custom text-danger-emphasis text-end py-3 fs-4 fw-bold m-0">Precio Total (Compra): ${SumaTotalProductos()}</td>

                                    <th className="locals-bg-custom text-end align-middle"><a href="#" onClick={clear} className="btn btn-warning">Vaciar Carrito <img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></th>

                                    <td className="locals-bg-custom text-end align-middle"><Link to={"/checkout"} className="btn btn-warning">Checkout</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;