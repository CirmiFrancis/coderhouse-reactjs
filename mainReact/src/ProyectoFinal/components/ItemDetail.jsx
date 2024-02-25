import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext); // Uso el contexto para traer la función 'addItem'

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container-fluid bg-gradient pt-3">
            <div className="row">
                <div className="col text-center">
                    <img src={item.image} alt={item.title} className="border border-light rounded" />
                </div>
            </div>
            <div className="row pt-4">
                <div className="col text-center font-family-custom text-light">
                    <h2 className="m-0 fs-1">{item.title}</h2>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col text-center font-family-custom text-light">
                    <h2 className="m-0 fs-6">{item.platform.toUpperCase()}</h2>
                </div>
            </div>
            <div className="row pt-4 pb-3">
                <div className="col text-center text-light padding-custom">
                    <p className="m-0">{item.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center text-light padding-custom fs-3 font-family-custom ">
                    <p className="m-0"><b>$ {item.price}</b></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;