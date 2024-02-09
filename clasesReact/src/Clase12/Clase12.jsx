import Memo from "./Memo";

const Clase12 = () => {
    const producto = {id:1, nombre:"Coca Cola", precio:1300, fecha:"02-02-2024"};

    return (
        <div>
            <Memo item={producto} />
        </div>
    )
}

export default Clase12;