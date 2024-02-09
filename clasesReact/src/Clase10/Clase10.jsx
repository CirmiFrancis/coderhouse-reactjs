// Eventos: onClick, onKeyUp, onKeyDown, etc... Estos eventos activan las funciones que uno les asigne. Tiene similitudes a como se lo trabaja en JavaScript, sin la necesidad, a priori, de usar el 'document.getElementBy' o el 'document.querySelector'.
// Intercambiabilidad: sirve para transformar un elemento en otro, por ejemplo: input/textarea <--> button. A través de un operador ternario (true/false), intercambiamos entre un componente (input/textarea) y otro (button).
// Abstracción: es una manera de reducir la complejidad y permitir un diseño e implementación más eficientes en sistemas de software complejos, sin embargo requiere de un nivel de programación más avanzado, ya que evita el hardcodeo y el código repetitivo innecesario.

import Eventos from "./Eventos";

const Clase10 = () => {
    return (
        <div>
            <Eventos />
        </div>
    )
}

export default Clase10;