const Main = () => {
    return (
        // Solo puede haber una etiqueta padre
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-6 bg-warning text-danger">
                    <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Stacker-Triple.png" alt="Hamburguesa" className="img-fluid" />
                    <h3>STACKER TRIPLE</h3>
                    <p>3 carnes a la parrilla, salsa stacker, pan, queso cheddar, panceta.</p>
                </div>
                <div className="col-6 bg-danger text-warning">
                    <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_Whopper-Guacamole_1200X900_210922.png" alt="Otra hamburguesa" className="img-fluid tamanio-custom" />
                    <h3>WHOPPER GUACAMOLE</h3>
                    <p>Pan, carne a la parrilla, lechuga, tomate, cebolla, pepino, mayonesa y guacamole.</p>
                </div>
            </div>
        </div>
    )
}

export default Main;