import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="row w-card-custom">
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ItemList;