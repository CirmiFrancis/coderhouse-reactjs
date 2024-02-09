import locals from "../assets/locals.png"

const Locals = () => {
    return (
        <div className="container-fluid main-bg-color py-5">
            <div className="row locals locals-bg-custom locals-margin-custom py-5">
                <div className="col d-flex flex-column justify-content-center text-danger-emphasis ps-5">
                    <div className="row font-family-custom">
                        <h3>Locales</h3>
                    </div>
                    <div className="row">
                        <h6>Encontrá el más cercano</h6>
                    </div>
                    <div className="row mt-3">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control py-3" placeholder="Tu ciudad o dirección" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span className="input-group-text" id="basic-addon2">Buscar</span>
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <img src={locals} alt="" width={230} />
                </div>
            </div>
        </div>
    )
}

export default Locals;