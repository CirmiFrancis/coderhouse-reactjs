const Map = () => {

    const usuarios = [
        {dni: 10101010, nombre:'Francis', edad: 25, dolares: 1}  ,
        {dni: 33333333, nombre:'Marco'  , edad: 5 , dolares: 10} ,
        {dni: 75757575, nombre:'Nahuel' , edad: 15, dolares: 100}
    ];

    console.log( usuarios )
    console.log( usuarios.map( usuario => usuario.dolares * 1.2 ) );
    console.log( usuarios.map( usuario => ({nombre: usuario.nombre.toUpperCase(), edad: usuario.edad}) ) );

    return (
        <>
            <h1>Método Map</h1>
            <ul>
                {usuarios.map( usuario => (
                    <li key={usuario.dni}> Nombre: <b>{usuario.nombre}</b>, Edad: <b>{usuario.edad}</b> </li>
                ))}
            </ul>
        </>
    )
}

export default Map;