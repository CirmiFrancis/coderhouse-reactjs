// Contexto: es una característica que proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
// Se declara un contexto y un componente principal. Ese componente puede tener declarado variables y funciones, y todo los componentes que estén dentro del contexto reconocen y pueden utilizar esas variables/funciones.

import Contexto from "./Contexto";

const Clase11 = () => {
    return (
        <div>
            <Contexto />
        </div>
    )
}

export default Clase11;