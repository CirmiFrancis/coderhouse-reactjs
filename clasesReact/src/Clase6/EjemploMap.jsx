import { useState } from 'react';

const EjemploMap = () => {
    const [productosPagina, setProductosPagina] = useState([]);

    const productos = [
        {id: 1, name: 'Samsung Galaxy A14', desc: 'Es un samsung...'   , stock: 10, price: 150000, img: 'https://http2.mlstatic.com/D_NQ_NP_2X_787735-MLU73363657372_122023-F.webp'},

        {id: 2, name: 'Motorola E13'      , desc: 'Es un motorola...'  , stock: 5 , price: 90000 , img: 'https://http2.mlstatic.com/D_NQ_NP_2X_953005-MLA54432455362_032023-F.webp'},

        {id: 3, name: 'Motorola E22'      , desc: 'Es otro motorola...', stock: 15, price: 120000, img: 'https://http2.mlstatic.com/D_NQ_NP_2X_973921-MLA73734184832_012024-F.webp'}
    ];

    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })

    promesa
        .then(result => {
            setProductosPagina(result);
        })

    return (
        <div className="container">
            <div className="row">
                {productosPagina.map(producto => (
                    <div key={producto.id} className="col-md-4">
                        <div className="card text=center">
                            <img src={producto.img} className="img-fluid" alt={producto.desc} />
                            <div className="card-body">
                                <h5 className="card-title"><b>{producto.name}</b></h5>
                                <p className="card-text">${producto.price}</p>
                                <a href="#" className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EjemploMap;