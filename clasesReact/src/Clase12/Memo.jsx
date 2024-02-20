/* 
La función 'memo' sirve para cachear el componente. Lo ideal es cachear componentes vistosos, y no componentes con mucha lógica. Se utiliza para casos puntuales. 

Esta función es una optimización que se utiliza para evitar el renderizado innecesario de componentes funcionales. Al utilizar React.memo, puedes memoizar un componente funcional, lo que significa que React almacenará en caché el resultado del renderizado para un conjunto específico de propiedades y solo lo actualizará cuando esas propiedades cambien.

Cuando un componente funcional se envuelve con React.memo, React compara las props actuales con las props anteriores. Si las props no han cambiado, React reutiliza el resultado memoizado y evita volver a renderizar el componente, lo que puede mejorar el rendimiento al reducir el número de actualizaciones innecesarias.
*/

import {memo} from "react";

const Memo = memo(({item}) => {
    console.log("Item Renderizado!");

    return (
        <h3 className="text-center">{item.nombre} ${item.precio}</h3>
    )
}, (oldProps, newProps) => oldProps.item.fecha === newProps.item.fecha);

export default Memo;