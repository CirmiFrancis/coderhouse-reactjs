import slide1 from "../assets/carousel/slide1-ori.webp"
import slide2 from "../assets/carousel/slide2-ff7.webp"
import slide3 from "../assets/carousel/slide3-aoe4.webp"
import slide4 from "../assets/carousel/slide4-zelda.webp"
import platformNS from "../assets/platforms/platform-ns.webp"
import platformPS from "../assets/platforms/platform-ps.webp"
import platformSTEAM from "../assets/platforms/platform-steam.webp"
import platformXBOX from "../assets/platforms/platform-xbox.webp"
import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide border-top border-bottom" data-bs-ride="carousel">
            <div className="carousel-indicators bg-indicators m-0">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Link to={"/game/bCNG5fhdg7aPnZECpjkn"} className="text-decoration-none">
                        <img src={platformXBOX} className="carousel-platform" alt="Ícono de Xbox"/>
                        <p className="d-flex flex-column justify-content-center align-items-center carousel-img-disc font-gigames">
                        <span className="carousel-disc">50%</span>
                            <span className="d-flex justify-content-center align-items-center gap-3">
                                <span className="font-size-price-og text-decoration-line-through text-secondary">$ 29.99</span>
                                <span className="font-size-price-discount text-white">$ 14.99</span>
                            </span>
                        </p>
                        <img src={slide1} className="d-block w-100 carousel-img" alt="Ori and the Will of the Wisps"/>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={"/game/FQhvwsnq0oFOgjw9ltmb"} className="text-decoration-none">
                        <img src={platformPS} className="carousel-platform" alt="Ícono de Playstation"/>
                        <p className="d-flex flex-column justify-content-center align-items-center carousel-img-disc font-gigames">
                        <span className="carousel-disc">20%</span>
                            <span className="d-flex justify-content-center align-items-center gap-3">
                                <span className="font-size-price-og text-decoration-line-through text-secondary">$ 69.99</span>
                                <span className="font-size-price-discount text-white">$ 55.99</span>
                            </span>
                        </p>
                        <img src={slide2} className="d-block w-100 carousel-img" alt="Final Fantasy VII Rebirth"/>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={"/game/6wed6KJpNwFwLqLHwiYu"} className="text-decoration-none">
                        <img src={platformSTEAM} className="carousel-platform" alt="Ícono de Steam"/>
                        <p className="d-flex flex-column justify-content-center align-items-center carousel-img-disc font-gigames">
                            <span className="carousel-disc">50%</span>
                            <span className="d-flex justify-content-center align-items-center gap-3">
                                <span className="font-size-price-og text-decoration-line-through text-secondary">$ 39.99</span>
                                <span className="font-size-price-discount text-white">$ 19.99</span>
                            </span>
                        </p>                        
                        <img src={slide3} className="d-block w-100 carousel-img" alt="Age of Empires IV"/>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={"/game/SFXjGLOE1YLfal63NQ90"} className="text-decoration-none">
                        <img src={platformNS} className="carousel-platform" alt="Ícono de Nintendo Switch"/>
                        <p className="d-flex flex-column justify-content-center align-items-center carousel-img-disc font-gigames">
                        <span className="carousel-disc">30%</span>
                            <span className="d-flex justify-content-center align-items-center gap-3">
                                <span className="font-size-price-og text-decoration-line-through text-secondary">$ 69.99</span>
                                <span className="font-size-price-discount text-white">$ 48.99</span>
                            </span>
                        </p>                        
                        <img src={slide4} className="d-block w-100 carousel-img" alt="Legend of Zelda: Tears of the Kingdom"/>
                    </Link>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;