import fb from "../assets/rrss/fb.png"
import ig from "../assets/rrss/ig.png"
import yt from "../assets/rrss/yt.png"
import tw from "../assets/rrss/tw.png"

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light padding-custom">
            <div className="row pb-4">
                <div className="col-md-8">
                    <p>Copyright © 2023 GiGames</p>
                    <p>El uso de este sitio web implica la aceptación de los <u>Términos y condiciones</u>  y <u>Política de privacidad</u>. Todos los derechos de autor, marcas comerciales y marcas de servicio pertenecen a sus correspondientes propietarios.</p>
                </div>
                <div className="col-md-4 text-center">
                    <img src={fb} alt="Logo de Facebook" className="mx-2" width={24} />
                    <img src={ig} alt="Logo de Instagram" className="mx-2" width={24} />
                    <img src={yt} alt="Logo de Youtube" className="mx-2" width={24} />
                    <img src={tw} alt="Logo de Twitter" className="mx-2" width={24} />
                </div>
            </div>
        </div>
    )
}

export default Footer;