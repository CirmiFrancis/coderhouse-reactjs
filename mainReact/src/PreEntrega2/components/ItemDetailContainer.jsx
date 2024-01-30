import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id === parseInt(id)); // Obtenemos el producto con id:1
                resolve(producto);
            }, 2000);
        })
        promesa.then(data => {
            setItem(data);
            // console.log(data);
        })
    }, [id]);

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;