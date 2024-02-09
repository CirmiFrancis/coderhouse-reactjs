import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../productos.json";
import ItemList from "./ItemList";
import Breadcrumb from "./Breadcrumb";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category == id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]);

    return (
        <div className="main-bg-color">
            <div className="row m-0">
                <div className="col">
                    <Breadcrumb page={id} />
                </div>
            </div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;