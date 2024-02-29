import Logo from "./Logo";

const AboutUs = () => {
    return (
        <div className="container-fluid bg-dark padding-custom">
            <div className="row pt-5 pb-3">
                <div className="col-md-8 text-justify text-light pb-5">
                    <h2 className="font-gigames">GiGames...</h2>
                    <p className="font-text m-0 pb-4">
                        ...es una tienda en línea de videojuegos en formato físico ubicada en Buenos Aires, Argentina.
                    </p>
                    <p className="font-text">
                        Siguiendo nuestros sueños de niño, decidimos crear GiGames con el objetivo de convertirnos en esa tienda de confianza con la que todo gamer desea, proporcionando juegos para todo tipo de consola y con un catálogo variado. 
                    </p>
                    <p className="font-text">
                        Poco a poco iremos completando nuestro catálogo y ofreceremos, además de videojuegos, productos relacionados al mundo gaming como: consolas y accesorios, periféricos, ediciones deluxe y promociones especiales.
                    </p>
                </div>
                
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <Logo tamanio={192} />
                </div>
                <hr className="text-light" />
            </div>
        </div>
    )
}

export default AboutUs;