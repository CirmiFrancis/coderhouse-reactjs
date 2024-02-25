import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container-fluid bg-gradient py-5">
            <div className="row">
                <div className="col text-center text-light">
                    <h1 className="">❌ Error 404 ❌</h1>
                    <h4>Ruta desconocida. Por favor accede a una ruta válida.</h4>
                    <Link to={"/"} className="btn btn-dark mt-3 mb-5">Volver al Inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default Error404;