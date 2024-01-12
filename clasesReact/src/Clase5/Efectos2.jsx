import { useState, useEffect } from "react";

const Efectos2 = ({numero, nombre}) => {
    const [numero2, setNumero2] = useState(numero * 2); // Inicial
    const [nombre2, setNombre2] = useState(nombre);
    console.log('Montaje');

    useEffect(() => { // Superpone/Actualiza al Inicial teniendo en cuenta el valor de la propiedad 'numero'
        setNumero2(numero * 2); 
        setNombre2(nombre); 
        console.log('Actualización');

        return () => { // Solo se ejecuta cuando se quita/desmonta el componente
            console.log('Desmontaje');
        }
    }, [numero, nombre])

    return (
        <div>
            <h1>Doble: {numero2}</h1>
            <h2>Nombre: {nombre2}</h2>
        </div>
    )
}

export default Efectos2;