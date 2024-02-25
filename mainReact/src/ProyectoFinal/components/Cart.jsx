import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/icons/trash.svg";
import trash2 from "../assets/icons/trash2.svg";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (

            <div className="container-fluid bg-gradient pt-5">
                <div className="row">
                    <div className="col text-center text-light">
                        <h2 className="">No hay productos en el Carrito de Compra...</h2>
                        <Link to={"/"} className="btn btn-dark mt-3 mb-5">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid">
                <div className="row">
                    <div className="col bg-dark text-light text-center font-cart px-5 py-3">
                        <h1 className="m-0">CARRiTO DE COMPRAS</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center p-0">
                        <table className="table m-0">
                            <thead>
                                <tr>
                                    <td className="border align-middle bg-dark text-light fw-bold fs-5" scope="col"></td>
                                    <td className="border align-middle bg-dark text-light fw-bold fs-5" scope="col">Nombre del Juego</td>
                                    <td className="border align-middle bg-dark text-light fw-bold fs-5" scope="col">Precio Unitario</td>
                                    <td className="border align-middle bg-dark text-light fw-bold fs-5" scope="col">Cantidad</td>
                                    <td className="border align-middle bg-dark text-light fw-bold fs-5" scope="col">Precio Total</td>

                                    <td className="border bg-dark text-center align-middle px-0 py-3">
                                        <a href="#" onClick={clear} className="btn btn-light">Vaciar Carrito <img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="border align-middle bg-dark border"><img src={product.image} alt={product.title} width={100} /></td>
                                        <td className="border align-middle bg-dark text-light">{product.title}</td>
                                        <td className="border align-middle bg-dark text-light">${product.price}</td>
                                        <td className="border align-middle bg-dark text-light">{product.quantity}</td>
                                        <td className="border align-middle bg-dark text-light">${(product.quantity * product.price).toFixed(2)}</td>
                                        
                                        <td className="border align-middle bg-dark col-trash">
                                            <a href="#" onClick={() => {removeItem(product.id)}}><img src={trash2} width={24} className="trash" alt="Eliminar Producto" title="Eliminar Producto" /></a>
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={5} className="border bg-dark text-light fw-bold fs-4 m-0 py-3">Precio Total (Compra): ${SumaTotalProductos().toFixed(2)}</td>

                                    <td colSpan={1} className="bg-dark text-center align-middle px-0"><Link to={"/checkout"} className="btn btn-light">Confirmar Compra</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;