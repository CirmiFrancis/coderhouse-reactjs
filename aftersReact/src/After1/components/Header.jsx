import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="container-fluid py-3 main-bg-color">
            <div className="row">
                <div className="col-md-2 text-end">
                    <Logo tamanio={48} />
                </div>
                <div className="col-md-10 d-flex align-items-center ps-0">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}

export default Header;