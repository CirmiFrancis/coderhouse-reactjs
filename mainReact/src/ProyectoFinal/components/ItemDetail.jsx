import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext); // Uso el contexto para traer la función 'addItem'

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container-fluid main-bg-color">
            <div className="row">
                <div className="col text-center">
                    <img src={item.image} alt={item.title} className="w-auto product-detail border border-light rounded" />
                </div>
            </div>
            <div className="row">
                <div className="col text-center font-family-custom text-light">
                    <h2 className="fs-1 p-3 ">{item.title}</h2>
                </div>
            </div>
            <div className="row py-3">
                <div className="col text-center text-light padding-detail">
                    <p className="m-0">{item.description}</p>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col text-center text-light padding-detail fs-3 font-family-custom ">
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