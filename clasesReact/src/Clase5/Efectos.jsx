import { useState } from "react";
import Efectos2 from "./Efectos2";

const Efectos = () => {
    const [numero, setNumero] = useState(1);
    const [nombre, setNombre] = useState('Francis');
    const [visible, setVisible] = useState(true);

    const modificarNumero = () => {
        setNumero(numero + 1)

        if (nombre == 'Francis'){
            setNombre('Nahuel')
        }
        else if (nombre == 'Nahuel'){
            setNombre('Cirmi')
        }
        else {
            setNombre('Francis')
        }
    }

    const quitarComponente = () => {
        setVisible(false);
    }

    return (
        <div className="container-fluid bg-success text-white">
            <div className="row ">
                <div className="col-6 d-flex justify-content-center p-2">
                    <h1>Simple: {numero}</h1>
                </div>
                <div className="col-6 d-flex justify-content-center p-2">
                    {visible ? <Efectos2 numero={numero} nombre={nombre} /> : '' }
                </div>
            </div>
            <div className="row p-3">
                <div className="col d-flex justify-content-center">
                    <button onClick={modificarNumero} className="btn btn-danger">Sumar</button>
                </div>
            </div>
            <div className="row">
                <button onClick={quitarComponente} className="btn btn-primary">Quitar Componente</button>
            </div>
        </div>
    )
}

export default Efectos;