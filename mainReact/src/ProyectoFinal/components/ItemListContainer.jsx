import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../productos.json";
import ItemList from "./ItemList";
// import Breadcrumb from "./Breadcrumb";
import Loading from "./Loading";
//import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // Llamada a Productos desde el archivo JSON
    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(item => item.category == id) : arrayProductos);
    //         }, 2000);
    //     })
    //     promesa.then(data => {
    //         setItems(data);
    //     })
    // }, [id]);

    // Subida de Productos a la collection "productos"
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "productos");

    //     arrayProductos.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });
    // }, []);

    // Llamada de Productos desde el Firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const consulta = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;

        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

    return (
        <div className="main-bg-color">
            {/* <div className="row m-0">
                <div className="col">
                    <Breadcrumb page={id} />
                </div>
            </div> */}
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;