import { useState, useEffect } from "react";

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
                toast: true,
                position: "bottom-end",
                timer: 3000,
                title: "Agregaste " + `<b style="color: darkred;"> ${counter} </b>` + " producto/s al Carrito de Compra.",
                text: "Stock: " + (itemStock - counter),
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true
            });
        }
        else {
            Swal.fire({
                toast: true,
                position: "bottom-end",
                timer: 3000,
                title: "Lo sentimos, no hay stock.",
                icon: "error",
                showConfirmButton: false,
                timerProgressBar: true
            });
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <div className="container-fluid my-4">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-start gap-2">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light text-dark" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-light text-dark">{counter}</button>
                        <button type="button" className="btn btn-light text-dark" onClick={incrementar}>+</button>
                    </div>
                    <button type="button" className="btn btn-light text-dark" onClick={addToCart}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;