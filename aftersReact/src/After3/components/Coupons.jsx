import coupon1 from "../assets/coupons/coupon1.jpeg"
import coupon2 from "../assets/coupons/coupon2.jpeg"
import coupon3 from "../assets/coupons/coupon3.jpeg"

const Coupons = () => {
    return (
        <div className="container-fluid py-5 main-bg-color padding-custom">
            <div className="row mb-5">
                <div className="col-md-6 font-family-custom text-danger-emphasis"> 
                    <h3>Cupones</h3> 
                </div>
                <div className="col-md-6 text-end text-danger"> 
                    <h6>Ver todo</h6> 
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4"> 
                    <img src={coupon1} alt="Combo King de Pollo" className="coupon-custom" /> 
                </div>
                <div className="col-md-4"> 
                    <img src={coupon2} alt="Combo Hamburguesa Clásica" className="coupon-custom" /> 
                </div>
                <div className="col-md-4"> 
                    <img src={coupon3} alt="Combo Clásica Doble con Queso" className="coupon-custom" /> 
                </div>
            </div>
        </div>
    )
}

export default Coupons;