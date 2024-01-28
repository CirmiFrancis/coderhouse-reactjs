// El Componente auxiliar recibe dos props: un 'state' y una 'function', y los manipula para que, al apretar en un botón, se active la función que actualiza el estado, provocando que el h2 sea visible o no.

import { useState } from "react";

const ComponenteAuxiliar = ({prop1, prop2}) => {
    return (
        <div className="text-center">
            <button className="btn btn-secondary" onClick={prop2}>Visible / No Visible</button>
            <h2>{prop1 ? "Hola, estoy probando el HOC" : "..."}</h2>
        </div>
    )
}

const HOC = () => {
    const [visible, setVisible] = useState(true);

    const hacerVisible = () => {
        visible ? setVisible(false) : setVisible(true)
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ComponenteAuxiliar prop1={visible} prop2={hacerVisible} />
                </div>
            </div>
        </div>
    )
}

export default HOC;