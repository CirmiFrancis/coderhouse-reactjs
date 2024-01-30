import { useState } from "react";

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
            alert("Agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " productos disponibles.");
            console.log("Agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " productos disponibles.");
        }
        else {
            alert("No hay stock.");
            console.log("No hay stock.");
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="btn-group w-100" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-warning" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-warning">{counter}</button>
                        <button type="button" className="btn btn-warning" onClick={incrementar}>+</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <button type="button" className="btn btn-warning w-100" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;