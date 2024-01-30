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
import arrayProductos from "../productos.json";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
            console.log(data);
        })
    }, []);

    return (
        <div>
            <ItemList items={items} />
            <ItemCount stock={10} />
        </div>
    )
}

export default ItemListContainer;