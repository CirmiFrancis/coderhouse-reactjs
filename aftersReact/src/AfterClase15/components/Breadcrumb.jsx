import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Breadcrumb = ({page}) => {
    const [pagina, setPagina] = useState("");

    useEffect(() => {
        setPagina(page);
    }, [page])

    return (
        <div className="d-flex justify-content-center align-items-center py-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><Link to={"/"}>home</Link></li>
                    <li className="breadcrumb-item"><Link to={"/productos"}>productos</Link></li>
                    {page ? <li className="breadcrumb-item active text-danger-emphasis">{pagina}</li> : "" }
                </ol>
            </nav>   
        </div>
    )
}

export default Breadcrumb;