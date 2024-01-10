import logoBK from "../assets/bk-logo.png"

const Logo = ({tamanio}) => {
    return (
        <img src={logoBK} alt="Logo de Burger King" className="logo" width={tamanio} />
    )
}

export default Logo;