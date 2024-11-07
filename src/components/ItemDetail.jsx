import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    const customBg = { // Objeto que define estilos
        background: `url(${item.background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderBlock: '1px solid white'
    };

    const originalPrices = { // hardcodeado
        "bCNG5fhdg7aPnZECpjkn": 29.99, // ori
        "FQhvwsnq0oFOgjw9ltmb": 69.99, // ff7
        "6wed6KJpNwFwLqLHwiYu": 39.99, // aoe4
        "SFXjGLOE1YLfal63NQ90": 69.99  // zelda
    };

    const price = item.id in originalPrices 
        ? { original: originalPrices[item.id], discounted: item.price }
        : { original: null, discounted: item.price };

    return (
        <div className="container-fluid py-5 padding-custom" style={customBg}>
            <div className="row">
                <div className="col-md-5 text-center">
                    <img src={item.image} alt={item.title} className="img-size border border-light rounded" />
                </div>

                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <div className="row text-light font-gigames">
                        <h2 className="title-size m-0">{item.title}</h2>
                    </div>
                    <div className="row text-light font-platform pt-1">
                        <h2 className="platform-size m-0">{item.platform.toUpperCase()}</h2>
                    </div>
                    <div className="row text-light font-platform fs-3 pt-3">
                        { price.original // Si existe un descuento, se muestra el precio con descuento
                            ? ( <>
                                    <p className="d-flex gap-3 m-0">
                                        <span className="text-secondary price-size m-0 text-decoration-line-through">$ {price.original}</span>
                                        <span className="price-size m-0"><b>$ {price.discounted}</b></span>
                                    </p>
                                    <p className="fs-5 text-warning m-0">¡{(100-(price.discounted*100/price.original)).toFixed(0)}% de descuento!</p>
                                </> )
                            : (<p className="price-size m-0"><b>$ {price.discounted}</b></p>)
                        }
                    </div>
                    <div className="row text-light font-text text-justify pt-5 pb-2">
                        <p className="description-size m-0">{item.description}</p>
                    </div>
                    <div className="row">
                        <ItemCount stock={item.stock} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;