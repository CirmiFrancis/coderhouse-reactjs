import fb from "../assets/rrss/fb.png"
import ig from "../assets/rrss/ig.png"
import yt from "../assets/rrss/yt.png"
import tw from "../assets/rrss/tw.png"

const FooterPart2 = () => {
    return (
        <div className="row py-4">
            <div className="col-md-6 font-size-custom">
                <p>TM © 2023 Burger King Corporation. Todos los derechos reservados.</p>
            </div>
            <div className="col-md-6 text-end">
                <img src={fb} alt="Logo de Facebook" className="rrss-logo mx-2" />
                <img src={ig} alt="Logo de Instagram" className="rrss-logo mx-2" />
                <img src={yt} alt="Logo de Youtube" className="rrss-logo mx-2" />
                <img src={tw} alt="Logo de Twitter" className="rrss-logo mx-2" />
            </div>
        </div>
    )
}

export default FooterPart2;