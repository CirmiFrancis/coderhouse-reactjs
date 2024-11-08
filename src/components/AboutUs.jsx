import Logo from "./Logo";

const AboutUs = () => {
    return (
        <div className="container-fluid bg-dark padding-custom">
            <div className="row py-5">
                <div className="col-lg-6 col-xl-8 text-justify text-light">
                    <h2 className="font-gigames">GiGames</h2>
                    <p className="font-text m-0 pb-4">
                        es una tienda ficticia de videojuegos en formato físico.
                    </p>
                    <p className="font-text">
                        Siguiendo nuestros sueños de niños, decidimos crear <b>GiGames</b> con el objetivo de convertirnos en esa tienda de confianza con la que todo gamer desea, proporcionando juegos para todo tipo de consola y con un catálogo variado. 
                    </p>
                    <p className="font-text">
                        Poco a poco iremos completando nuestro catálogo y ofreceremos, además de videojuegos, productos relacionados al mundo gaming como: consolas y accesorios, periféricos, ediciones deluxe y promociones especiales.
                    </p>
                    <p className="text-secondary">
                        Godoy Cruz 2800, CABA, Argentina
                    </p>
                </div>
                
                <div className="col-lg-6 col-xl-4 pt-4 pt-lg-0 d-flex justify-content-center align-items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5098.322292734388!2d-58.42655205349009!3d-34.578335407661044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59b74948cd5%3A0xbf28528db11e3430!2sGodoy%20Cruz%202800%2C%20C1425%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1731096211783!5m2!1ses-419!2sar" width="640" height="320" className="border-0 rounded" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <hr className="text-light m-0 p-0" />
        </div>
    )
}

export default AboutUs;