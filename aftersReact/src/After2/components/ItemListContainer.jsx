const ItemListContainer = ({greeting}) => {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-danger m-0 fs-5" role="alert">
                        {greeting}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;