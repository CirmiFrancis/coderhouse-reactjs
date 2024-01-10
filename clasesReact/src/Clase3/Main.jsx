const Main = () => {
    // Ejemplo de JSX. Se puede usar JavaScript y HTML dentro del componente, para facilitar su manipulación.
    let stacker = {
        name: "STACKER TRIPLE",
        desc: "3 carnes a la parrilla, salsa stacker, pan, queso cheddar, panceta.",
        img: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Stacker-Triple.png"
    };

    let whopper = {
        name: "WHOPPER GUACAMOLE",
        desc: "Pan, carne a la parrilla, lechuga, tomate, cebolla, pepino, mayonesa y guacamole.", 
        img: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_Whopper-Guacamole_1200X900_210922.png"
    };

    // Estilos dentro del archivo JSX. Se puede usar de esta forma para que afecte solo a este componente (como si fuese una variable local) o se puede usar directamente el archivo CSS e importarlo. Además, hay que tener en cuenta que incluso puedo usar Bootstrap para dar estilos. Al final queda a criterio de cada uno como lo implementa.
    const tamanioCustom = {
        width: 696,
        height: 464
    }

    return (
        <div className="container-fluid bg-success">
            <div className="row text-center">
                <div className="col-6 bg-warning text-danger">
                    <img src={stacker.img} alt="Hamburguesa" className="img-fluid" />
                    <h3>{stacker.name}</h3>
                    <p>{stacker.desc}</p>
                </div>
                <div className="col-6 bg-danger text-warning">
                    <img src={whopper.img} alt="Otra hamburguesa" className="img-fluid" style={tamanioCustom} />
                    <h3>{whopper.name}</h3>
                    <p>{whopper.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Main;