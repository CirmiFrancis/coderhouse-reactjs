import { Link } from "react-router-dom";
import game1 from "../assets/games/gowr.avif";
import game2 from "../assets/games/hifi.avif";
import game3 from "../assets/games/mario.avif";
import game4 from "../assets/games/tlou2.avif";

const games = [ // hardcodeado, esta información debería de consumirse de una base de datos
    {
        id: "ALMPwB4Ps3422p9AAGH5",
        title: "God of War: Ragnarok",
        price: "$ 69.99",
        image: game1,
        alt: "God of War: Ragnarok"
    },
    {
        id: "xTjHHbmi8o0JMK1NK8fn",
        title: "Hi-Fi Rush",
        price: "$ 29.99",
        image: game2,
        alt: "Hi-Fi Rush"
    },
    {
        id: "8rmnd3SEJRT75aGV76cO",
        title: "Super Mario Odyssey",
        price: "$ 59.99",
        image: game3,
        alt: "Super Mario Odyssey"
    },
    {
        id: "5Z5yJVX5lKXoBqg3HHMH",
        title: "The Last of Us Part II Remastered",
        price: "$ 49.99",
        image: game4,
        alt: "The Last of Us Part II Remastered"
    }
];

const Recommendations = () => {
    return (
        <div className="container-fluid text-light bg-dark padding-custom py-5">
            <h2 className="font-gigames text-center text-sm-start pb-4 m-0">RECOMENDACIONES</h2>
            <div className="row px-4">
                {games.map((game) => (
                    <div key={game.id} className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center p-2">
                        <div className="game-card border rounded">
                            <Link to={`/game/${game.id}`} className="text-decoration-none">
                                <div className="game-title d-flex justify-content-center rounded">
                                    <p className="title d-flex align-items-center text-center">{game.title}</p>
                                </div>
                                <img src={game.image} className="card-img-top border-top border-bottom border-light" alt={game.alt} />
                                <div className="game-price d-flex justify-content-center align-items-center rounded">
                                    <p className="price price-size py-2 m-0"><b>{game.price}</b></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;