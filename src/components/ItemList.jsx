import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center px-md-5">
            <div className="row width-card px-md-5">
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ItemList;