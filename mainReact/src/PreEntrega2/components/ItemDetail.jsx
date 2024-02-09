import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container-fluid main-bg-color">
            <div className="row">
                <div className="col text-center">
                    <img src={item.image} alt={item.title} className="product-detail" />
                </div>
            </div>
            <div className="row">
                <div className="col text-center font-family-custom text-danger-emphasis">
                    <h2 className="fs-1 m-0">{item.title}</h2>
                </div>
            </div>
            <div className="row py-3">
                <div className="col text-center text-danger-emphasis padding-detail">
                    <p className="m-0">{item.description}</p>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col text-center text-danger-emphasis padding-detail fs-3 font-family-custom ">
                    <p className="m-0"><b>$ {item.price}</b></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;