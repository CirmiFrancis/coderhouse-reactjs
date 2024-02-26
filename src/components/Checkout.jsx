import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {cart, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }
        if (email.length === 0) {
            return false;
        }
        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.idx, title:item.title, price:item.price, quantity:item.quantity}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumaTotalProductos().toFixed(2);
        // Orden a generar con toda la información
        const order = {buyer:buyer, items:items, date:date, total:total};

        // Generar ORDEN en Firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });
    }

    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col text-center text-light font-gigames">
                    <h2 className="fs-1">Confirmar Compra</h2>
                </div>
            </div>
            {orderId ? 
                "" :
                <div className="m-0 p-0">
                    <div className="row d-flex justify-content-center m-0 pt-5">
                        <div className="col-md-6 m-0 p-0">
                            <table className="table">
                                <tbody>
                                    {cart.map(product =>
                                        <tr key={product.id}>
                                            <td className="bg-dark align-middle"><img src={product.image} alt={product.title} width={80} /></td>
                                            <td className="bg-dark text-light text-start align-middle">{product.title}</td>
                                            <td className="bg-dark text-light text-start align-middle">${product.price}</td>
                                            <td className="bg-dark text-light text-start align-middle">{product.quantity}</td>
                                            <td className="bg-dark text-light text-start align-middle">${(product.quantity * product.price).toFixed(2)}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td className="bg-dark text-center align-middle" colSpan={4}>&nbsp;</td>
                                        <td className="bg-dark text-light text-start align-middle">${SumaTotalProductos().toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center m-0 p-0">
                        <div className="col-md-6 bg-dark text-light m-0 py-5">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                                </div>
                                <button type="button" className="btn btn-light mt-5 mb-3" onClick={generarOrden}>Generar Orden</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
            
            <div className="row">
                {orderId ? 
                    <div className="div bg-light text-dark text-center py-5 my-5">
                        <h2 className="fs-1 m-0">¡Gracias por comprar en GiGames!</h2>
                        <p className="fs-5 m-2">Tu ID de Compra es: <b>{orderId}</b></p>
                    </div>
                    : ""}
            </div>
        </div>
    )
}

export default Checkout;