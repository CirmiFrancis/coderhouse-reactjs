import { Link } from "react-router-dom";

const Item = ({item}) => {
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
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center p-2">
            <div className="game-card border rounded">
                <Link to={"/game/" + item.id} className="text-decoration-none">
                    <div className="game-title d-flex justify-content-center rounded">
                        <p className="title d-flex align-items-center">{item.title}</p>
                    </div>
                    <img src={item.image} className="card-img-top border-top border-bottom border-light" alt={item.title} />
                    <div className="game-price d-flex justify-content-center align-items-center rounded">
                        { price.original // Si existe un descuento, se muestra el precio con descuento
                            ? ( <>
                                    <p className="d-flex price price-size gap-2 py-2 m-0">
                                        <span className="text-secondary text-decoration-line-through m-0">$ {price.original}</span>
                                        <span><b>$ {price.discounted}</b> <span className="text-warning">({(100-(price.discounted*100/price.original)).toFixed(0)}%)</span></span>
                                    </p>
                                </> )
                            : (<p className="price price-size py-2 m-0"><b>$ {price.discounted}</b></p>)
                        }
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;