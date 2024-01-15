// Una Promesa sirve para manipular operaciones asincrónicas. A través de una promesa, podemos esperar una respuesta tanto negativa como positiva, sin embargo, no sabemos cuando obtendremos esa respuesta, es por eso que la Promesa sirve para esperar esta respuesta de forma aislada sin necesidad de interrumpir el flujo normal del sistema.
// Para CREAR una Promesa, debemos declarar en una variable la función 'new Promise' con sus parámetros 'resolve' para la respuesta positiva y 'reject' para la negativa. Dentro de esta función, hay que escribir la lógica detrás de ambos casos. 
// Para USAR una Promesa, tenemos que usar los métodos '.then' en caso de ser positivo y '.catch' en caso de ser negativo.

const Promesas = () => {
    // const promesa = new Promise((resolve,reject) => { // Función que recibe como parámetro una función que devuelve un valor
    //     let tengoHambre = true;

    //     tengoHambre ? resolve('Comete un sanguchito...') : reject('tenés que hacer dieta...');
    // });

    // promesa.then(resultado => {
    //     console.log(resultado)
    // }).catch(resultado => {
    //     console.log('Mejor, ' + resultado)
    // });

    // return (
    //     <h1>Promesas...</h1>
    // )

    //=======================================================================================================

    const productos = [
        {id: 1, nombre: 'Coca Cola', precio:1500},
        {id: 2, nombre: 'Pepsi'    , precio:1400},
        {id: 3, nombre: 'Manaos'   , precio:1000}
    ];

    const mostrarResultados = true;

    const promesa = new Promise((resolve, reject) => {
        mostrarResultados ? resolve(productos) : reject('No se encontraron productos.')
    })

    promesa
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            console.log('Segundo .then para demostrar que se pueden encadenar los .catch y los .then');
        })
        .finally(() => {
            console.log('Existe un .finally que se ejecuta al final de la Promesa');
        })
        
    return (
        <h1>Promesas...</h1>
    )
}

export default Promesas;