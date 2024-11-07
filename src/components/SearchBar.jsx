import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";

const SearchBar = () => {
    const [productos, setProductos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Obtener los productos desde Firestore
    useEffect(() => {
        const db = getFirestore();
        const productosCollection = collection(db, 'productos');
        
        getDocs(productosCollection).then((querySnapshot) => {
            const productosData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProductos(productosData);
        });
    }, []);

    // Filtrar y ordenar productos según el texto de búsqueda
    useEffect(() => {
        if (searchQuery === '') {
            setFilteredProducts([]);
        } 
        else {
            const filtered = productos
                .filter(producto => producto.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
                .sort((a, b) => a.title.localeCompare(b.title)); // Orden alfabético
            setFilteredProducts(filtered);
        }
    }, [searchQuery, productos]);

    return (
        <div className="search-container container-fluid text-light bg-dark padding-custom pt-5">
            <input type="text" placeholder="Busca un juego..." className="search-input font-text form-control w-100 mx-auto" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    
            <div className="search-container position-relative text-decoration-none p-0">
                {filteredProducts.length > 0 && (
                    <ul className="suggestions-list position-absolute list-unstyled w-100 z-1 p-0 m-0">
                        {filteredProducts.map((producto, index) => (
                            <Link to={"/game/" + producto.id} className="text-decoration-none" key={index}>
                                <li className="suggestion-item d-flex justify-content-between font-text text-light bg-black border border-top-0 border-light rounded-bottom gap-5 p-3">
                                    <span className="text-truncate">{producto.title}</span>
                                    <span><b>${producto.price}</b></span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
    
};

export default SearchBar;