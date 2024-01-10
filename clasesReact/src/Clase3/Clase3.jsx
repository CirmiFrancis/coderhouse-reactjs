import Main from "./Main";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Clase3 = () => {
    // Asignamos el contenido a los parámetros del componente 'Footer'.
    let fb = 'Facebook';

    return (
        <div>
            <NavBar />
            <Main />
            <Footer red1={fb} red2={'Instagram'} />
        </div>
    )
}

export default Clase3;