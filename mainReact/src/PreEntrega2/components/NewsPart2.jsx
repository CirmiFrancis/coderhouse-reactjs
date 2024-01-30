import news1 from "../assets/news/news1.jpeg"
import news2 from "../assets/news/news2.jpeg"
import news3 from "../assets/news/news3.jpeg"

const NewsPart2 = () => {
    return (
        <div className="row text-center">
            <div className="col-md-4"> 
                <div className="row m-0">
                    <img src={news1} alt="Champi King" className="news-custom p-0" /> 
                </div>
                <div className="row text-start text-danger-emphasis mt-4">
                    <h4 className="font-family-custom fs-3">¡Conquistá un nuevo reino de sabor con Champi King!</h4>
                    <p> Pan de papa, rúcula, cebolla rehogada, hongos, vos elegís ¿pollo o carne?. ¡Un combo que te va a hacer viajar de sabor! Para más información sobre nuestros insumos sin conservantes colorantes ni saborizantes artificiales, pueden acceder a la web: www.burgerkingcomidareal.com.ar </p>
                </div>
            </div>
            <div className="col-md-4"> 
                <div className="row m-0">
                    <img src={news2} alt="App MI BK" className="news-custom p-0" /> 
                </div>
                <div className="row text-start text-danger-emphasis mt-4">
                    <h4 className="font-family-custom fs-3">¡Mi BK, un sinfín de beneficios!</h4>
                    <p>Descargate la app, sumate a MI BK y aprovechá los mejores cupones ¡Tus favs de siempre con los mejores descuentos!</p>
                </div>
            </div>
            <div className="col-md-4"> 
                <div className="row m-0">
                    <img src={news3} alt="Arena BK" className="news-custom p-0" /> 
                </div>
                <div className="row text-start text-danger-emphasis mt-4">
                    <h4 className="font-family-custom fs-3">¡Un lugar para viciar como nunca!</h4>
                    <p>¿Sos fan de los videojuegos? Sumate a la Arena Bk para vivirlos como nunca, competencias, juegos y mucho más. ¡Unite haciendo click acá!</p>
                </div>
            </div>
        </div>
    )
}

export default NewsPart2;