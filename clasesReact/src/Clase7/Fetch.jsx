import React, { useState, useEffect } from 'react';

const Fetch = () => {
    const [productos, setProductos] = useState([]);
    const apiURL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        fetch(apiURL)
            .then(response => {return response.json()})
            .then(data => {
                console.log(data);
                setProductos(data);
            })
            // .catch(error => {
            //     console.error('Error de fetch:', error);
            // });
    }, []);

    const acortarTitulo = (string) => {
        return string.length > 20 ? string.substring(0,20) + '...' : string;
    }

    // Podría haber usado las 'cards' de Bootstrap y 'col-3' para que solo se vean 4 productos máximo por fila.

    return (
        <div className='container-fluid bg-dark'>
            <div className="row">
                <h1 className='text-center text-white py-3'>-Fetch & Map- de los productos de la 'Fake Store API'</h1>
            </div>

            <div className='row text-center d-flex justify-content-center m-0'>
                {productos.map(producto => (     
                    <div key={producto.id} className='container-product d-flex flex-column justify-content-center'>
                        <div className="row custom-bg-title">
                            <p className='my-2'>{acortarTitulo(producto.title)}</p>
                        </div>

                        <div className="row">
                            <figure className='my-2'>
                                <img src={producto.image} alt="imagen del producto"/>
                            </figure>
                        </div>

                        <div className="row custom-bg-price">
                            <p className='my-2'>$ {producto.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fetch;