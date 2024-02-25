import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // Llamada de Productos desde el Firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const consulta = id ? query(itemsCollection, where("platform", "==", id)) : itemsCollection;

        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

    return (
        <div className="bg-gradient py-5">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;