import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);

            Swal.fire({
                title: "Agregaste " + counter + " producto/s al carrito.",
                text: "Quedan " + (itemStock - counter) + " producto/s disponible/s.",
                icon: "success"
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos, no hay stock.",
                showConfirmButton: false,
                showCancelButton: true
            });
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-end">
                    <div className="btn-group w-25" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light text-danger-emphasis" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-light text-danger-emphasis">{counter}</button>
                        <button type="button" className="btn btn-light text-danger-emphasis" onClick={incrementar}>+</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {itemAdded ? 
                        <Link to={"/cart"} className="btn btn-light w-25 text-danger-emphasis">Terminar Mi Compra</Link> : 
                        <button type="button" className="btn btn-light w-25 text-danger-emphasis" onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;