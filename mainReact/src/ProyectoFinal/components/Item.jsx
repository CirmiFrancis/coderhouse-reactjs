import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 text-center product-card p-1">
            <div className="card border-0 locals-bg-custom">
                <Link to={"/item/" + item.id} className="text-decoration-none">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body font-family-custom text-danger-emphasis fs-5">
                        <p className="card-text">{item.title}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;