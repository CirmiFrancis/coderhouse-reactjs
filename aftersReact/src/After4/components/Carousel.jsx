import slide1 from "../assets/carousel/slide1.jpeg"
import slide2 from "../assets/carousel/slide2.jpeg"
import slide3 from "../assets/carousel/slide3.jpeg"

const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="Hamburguesa, Grand Tasty"/>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="McCafé, Aguas Frutadas"/>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="McFlurry, Chocotorta con Chocolinas"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;