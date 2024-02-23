import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../productos.json";
import ItemDetail from "./ItemDetail";
import Breadcrumb from "./Breadcrumb";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // Llamada al Producto desde el archivo JSON
    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             let producto = arrayProductos.find(item => item.id === parseInt(id));
    //             resolve(producto);
    //         }, 2000);
    //     })
    //     promesa.then(data => {
    //         setItem(data);
    //     })
    // }, [id]);

    // Llamada del Producto desde el Firestore
    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "productos", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id:resultado.id, ...resultado.data()});
        });
    }, [id]);

    return (
        <div className="main-bg-color">
            <div className="row m-0">
                <div className="col">
                    <Breadcrumb page={id} />
                </div>
            </div>
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;