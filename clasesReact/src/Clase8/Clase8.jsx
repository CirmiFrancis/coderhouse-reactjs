// Workshop

// HOOKS: useState, useRef, useEffect, useContext.
// Los Hooks deben ser llamadas solo en el nivel superior del componente funcional y no dentro de bucles o condiciones.
// React detecta que una función es un componente, gracias a la convención PascalCase.
// CUSTOM HOOKS: React detecta que una función es un hook cuando el nombre arranca con el prefijo 'use'. Ejemplo: 'useCount'.
// CHILDREN: es la forma en que React nos permite incluir un componente dentro de otro sin que al padre le importe exactamente qué componente o componentes hijos están siendo incluidos.
// PATRONES: es una forma de crear componentes que ayudan a reutilizar y mantener código.
// Dos técnicas avanzadas son: HOC (High Order Componentes) & Render Props.
// HOC: es una función que toma un componente como argumento y devuelve un nuevo componente con una funcionalidad adicional.
// RENDER PROPS: implica pasar una función como una prop al componente hijo con el propósito de permitir al componente hijo renderizar su contenido a través de la función. Es una alternativa al patrón de diseño HOC. En clase vimos un ejemplo a medias, era algo complejo y el profesor prefirió hacer otros ejercicios más importantes.

import Botones from "./Botones";
import Caja from "./Caja";
import HOC from "./HOC";
import RenderPropParent from "./RenderPropParent";

const Clase8 = () => {
    return (
        <div>
            <Botones />
            <hr />
            <Caja nombre={'Cirmi Francis'} curso={'- React JS -'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, possimus?</p>
                <button className="btn btn-dark">Aceptar</button>
            </Caja>
            <hr />
            <HOC />
            <hr />
            <RenderPropParent />
        </div>
    )
}

export default Clase8;