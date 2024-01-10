// Este componente tiene 2 parámetros, los cuales son utilizados dentro del elemento 'p'. Estos parámetros son asignados en 'Clase3.jsx', al invocar este componente.
const Footer = (props) => {
    // En el elemento 'p', podemos ver que el 'span' es utilizado para darle estilos a ese elemento en concreto. Si bien se puede usar de esta forma, no me gusta porque lo veo poco práctico. Prefiero el método utilizado en 'Main.jsx', donde creo un objeto con los estilos que quiera ponerle al elemento.
    return (
        <div className="container-fluid text-center bg-dark py-4">
            <div className="row">
                <div className="col-md-12">
                    <p style={{fontSize: 24, color: 'black', backgroundColor: 'white'}}> {props.red1} {props.red2} </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;