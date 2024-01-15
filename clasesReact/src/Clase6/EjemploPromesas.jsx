const EjemploPromesas = () => {

    const productos = [
        {id: 1, name: 'Samsung Galaxy A14', desc: 'Es un samsung...'   , stock: 10, price: 150000},
        {id: 2, name: 'Motorola E13'      , desc: 'Es un motorola...'  , stock: 5 , price: 90000} ,
        {id: 3, name: 'Motorola E22'      , desc: 'Es otro motorola...', stock: 15, price: 120000}
    ];

    const cuentaAtras = () => {
        for (let i = 3; i > 0; i--) {
            setTimeout(() => {
                console.log(`${i}...`);
            }, (3 - i) * 1000);
        }
    };

    const promesa = new Promise((resolve) => {
        cuentaAtras();
        setTimeout(() => { // Se usa una sola vez, a diferencia de 'setInterval' que se ejecuta varias veces cada X tiempo
            const productosFilter = productos.filter(producto => producto.stock > 10);
            resolve(productosFilter);
        }, 3000);
    });

    promesa
        .then((resultado) => {
            console.log(resultado);
        })

    return (
        <h1>Ejemplo Promesas...</h1>
    )
}

export default EjemploPromesas;