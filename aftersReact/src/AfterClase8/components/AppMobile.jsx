import phone from "../assets/app-mobile/app-phone.png"
import googleplay from "../assets/app-mobile/app-googleplay.png"
import appstore from "../assets/app-mobile/app-appstore.png"

const AppMobile = () => {
    return (
        <div className="container-fluid pt-5 app-bg padding-custom">
            <div className="row">
                <div className="col-md-6">
                    <img src={phone} alt="Imagen. Celular con la APP de Burger King" width={488} />
                </div>
                <div className="col-md-6 text-white d-flex flex-column justify-content-end">
                    <div className="row font-family-custom fs-2">
                        <p className="app-font-size-title">Descargá la APP y disfrutá mucho más por mucho menos</p>
                    </div>
                    <div className="row">
                        <img src={googleplay} alt="Imagen. Tienda Google Play" className="app-store-size" />
                        <img src={appstore} alt="Imagen. Tienda App Store" className="app-store-size" />
                    </div>
                    <div className="row pt-3">
                        <p className="app-font-size-desc">Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppMobile;