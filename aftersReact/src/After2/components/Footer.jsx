import FooterPart1 from "./FooterPart1"
import FooterPart2 from "./FooterPart2"

const Footer = () => {
    return (
        <div className="footer container-fluid text-white padding-custom">
            <FooterPart1 />
            <hr />
            <FooterPart2 />
        </div>
    )
}

export default Footer;