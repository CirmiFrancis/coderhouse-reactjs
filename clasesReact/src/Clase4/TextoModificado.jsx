import { useState } from "react";
import Item from "./Item";

const TextoModificado = () => {
    // const [current_state, function_to_update_state] = useState(initial_value)
    const [texto, setTexto] = useState('Hola :D');

    const modificarTexto = () => {
        setTexto(texto == 'Hola :D' ? 'Chau :(' : 'Hola :D');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{texto}</h1>
                    <p> <button onClick={modificarTexto} className="btn btn-primary">Modificar Texto</button> </p>
                    <p>Jugos:</p>
                    <ul>
                        <Item valor='Naranja' />
                        <Item valor='Manzana' />
                        <Item valor='Uva' />
                        <Item valor='Pomelo' />
                        <Item valor='Limón' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TextoModificado;