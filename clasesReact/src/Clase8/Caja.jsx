// Children
const Caja = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4 className="text-center">{props.nombre}</h4>
                    <h5 className="text-center">{props.curso}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Caja;