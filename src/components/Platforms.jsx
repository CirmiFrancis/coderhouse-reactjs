import { Link } from "react-router-dom";
import platformNS from "../assets/platforms/platform-ns.webp"
import platformPS from "../assets/platforms/platform-ps.webp"
import platformSTEAM from "../assets/platforms/platform-steam.webp"
import platformXBOX from "../assets/platforms/platform-xbox.webp"

const Platforms = () => {
    return (
        <div className="container-fluid text-dark bg-light padding-custom py-5">
            <h2 className="font-gigames text-center text-sm-start pb-4 m-0">PLATAFORMAS</h2>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-6 col-lg-3 d-flex justify-content-end justify-content-lg-center align-items-center p-0">
                    <Link to={"/platform/playstation"} className="text-decoration-none">
                        <img className="img-platform" src={platformPS} alt="Ícono de Playstation"/>
                    </Link>                </div>
                <div className="col-6 col-lg-3 d-flex justify-content-start justify-content-lg-center align-items-center p-0">
                    <Link to={"/platform/nintendo"} className="text-decoration-none">
                        <img className="img-platform" src={platformNS} alt="Ícono de Nintendo Switch"/>
                    </Link>                </div>
                <div className="col-6 col-lg-3 d-flex justify-content-end justify-content-lg-center align-items-center p-0">
                    <Link to={"/platform/xbox"} className="text-decoration-none">
                        <img className="img-platform" src={platformXBOX} alt="Ícono de Xbox" />
                    </Link>                </div>
                <div className="col-6 col-lg-3 d-flex justify-content-start justify-content-lg-center align-items-center p-0">
                    <Link to={"/platform/pc"} className="text-decoration-none">
                        <img className="img-platform" src={platformSTEAM} alt="Ícono de Steam" />
                    </Link>                
                </div>
            </div>
        </div>
    );
};

export default Platforms;