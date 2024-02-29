import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container-fluid bg-white">
            <div className="row">
                <div className="col text-center text-dark my-5">
                    <h2 className="fs-1">❌ Error 404 ❌</h2>
                    <h4>Ruta desconocida. Por favor accede a una ruta válida.</h4>
                </div>
            </div>
        </div>
    )
}

export default Error404;