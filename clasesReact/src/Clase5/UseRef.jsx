import {useRef} from 'react';

// A diferencia del 'useState', el 'useRef' trabaja sobre el DOM y evitar tener que re-renderizar los cambios.
const UseRef = () => {
    const divRef1 = useRef(null);
    const divRef2 = useRef(null);

    const modificarDivRef1 = () => {
        divRef1.current.innerHTML = 'Hola :D';
        divRef1.current.className = 'row d-flex justify-content-center text-dark py-3';
    }

    const modificarDivRef2 = () => {
        divRef2.current.innerHTML = 'Chau :(';
        divRef2.current.className = 'row d-flex justify-content-center text-white py-3';
    }
    
    return (
        <div className="row m-0 p-0">
            <div className="col-6 bg-danger">

                <div ref={divRef1} className="row d-flex justify-content-center text-white py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, porro.
                </div>
                <div className="row d-flex justify-content-center py-2"> 
                    <button onClick={modificarDivRef1} className='btn btn-secondary w-25'>Modificar 'useRef1'</button> 
                </div>  
            </div>
            <div className="col-6 bg-warning">
                <div ref={divRef2} className="row d-flex justify-content-center py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, necessitatibus!
                </div>
                <div className="row d-flex justify-content-center py-2"> 
                    <button onClick={modificarDivRef2} className='btn btn-primary w-25'>Modificar 'useRef2'</button> 
                </div>    
            </div>
        </div>
    )
}

export default UseRef;