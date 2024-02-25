import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-2 text-center p-2">
            <div className="border rounded game-card">
                <Link to={"/game/" + item.id} className="text-decoration-none">
                    <div className="game-title rounded d-flex justify-content-center">
                        <p className="title d-flex align-items-center">{item.title}</p>
                    </div>
                    <img src={item.image} className="card-img-top border-top border-bottom border-light" alt={item.title} />
                    <div className="game-price rounded d-flex justify-content-center">
                        <p className="price d-flex align-items-center py-2">${item.price}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;