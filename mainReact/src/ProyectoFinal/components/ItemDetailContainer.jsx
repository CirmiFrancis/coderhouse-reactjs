import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../productos.json";
import ItemDetail from "./ItemDetail";
import Breadcrumb from "./Breadcrumb";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id === parseInt(id));
                resolve(producto);
            }, 2000);
        })
        promesa.then(data => {
            setItem(data);
        })
    }, [id]);

    return (
        <div className="main-bg-color">
            <div className="row m-0">
                <div className="col">
                    <Breadcrumb page={id} />
                </div>
            </div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;