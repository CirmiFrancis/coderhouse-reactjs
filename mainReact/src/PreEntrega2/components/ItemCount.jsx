import { useState, useEffect } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            alert("Agregaste " + counter + " producto/s al carrito. Quedan " + (itemStock - counter) + " producto/s disponible/s.");
            console.log("Agregaste " + counter + " producto/s al carrito. Quedan " + (itemStock - counter) + " producto/s disponible/s.");
        }
        else {
            alert("No hay stock.");
            console.log("No hay stock.");
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
                        <button type="button" className="btn btn-warning" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-warning">{counter}</button>
                        <button type="button" className="btn btn-warning" onClick={incrementar}>+</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    <button type="button" className="btn btn-warning w-25" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;