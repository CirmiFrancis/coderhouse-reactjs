import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./productos.json";
import Breadcrumb from "./Breadcrumb";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [mensajeError, setMensajeError] = useState("");
    const {id} = useParams(); // Capturar los parámetros de la url

    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         let newProductos = id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos;
            
    //         if (newProductos.length > 0) {
    //             resolve(newProductos);
    //         } else {
    //             reject("Error! No se encontraron productos!");
    //         }
    //     })
    //     promesa.then(data => {
    //         setProductos(data)
    //     })
    //     .catch(error => {
    //         setMensajeError(error);
    //     })
    // }, [id]);

    // Ademas, se usó ItemDetailContainer en el video de la clase 13, minuto 1:29:00
    // Utilizar catch para capturar errores
    useEffect(() => {
        const db = getFirestore();
        const colRef = collection(db, "productos");

        const q = query(colRef, where("price", "==", 2000)) // Filtro
        getDocs(q).then((snapshot) => { //getDocs(colRef)
            const data = snapshot.docs.map( doc => ({ id: doc.id, ...doc.data() }) )
            setProductos(data)
            console.log(data)
        })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb page={id} />
                </div>
            </div>
            <div className="row">
                {productos.map(item => (
                    <div key={item.id} className="col-md-3">
                        <div className="card border-0 text-center">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col">
                    <h1 className="text-center text-danger">{mensajeError}</h1>
                </div>
            </div>
        </div>

    )
}

export default ItemListContainer;