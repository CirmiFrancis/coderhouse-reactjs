// import ItemCount from "./ItemCount";

// const ItemListContainer = ({greeting}) => {
//     return (
//         <div className="container-fluid p-0">
//             <div className="row">
//                 <div className="col text-center">
//                     <div className="alert alert-danger m-0 fs-5" role="alert">
//                         {greeting}
//                     </div>
//                 </div>
//             </div>
//             <div className="row py-3 locals-bg-custom p-0 m-0">
//                 <ItemCount stock={10} />
//             </div>
//         </div>
//     )
// }

// export default ItemListContainer;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../productos.json";
// import Carousel from "./Carousel";
import ItemList from "./ItemList";
// import ItemCount from "./ItemCount";
// import ItemDetailContainer from "./ItemDetailContainer";

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
            console.log(data);
        })
    }, [id]);

    return (
        <div className="locals-bg-custom">
            {/* <Carousel /> */}
            <ItemList items={items} />
            {/* <ItemCount stock={10} />
            <ItemDetailContainer /> */}
        </div>
    )
}

export default ItemListContainer;