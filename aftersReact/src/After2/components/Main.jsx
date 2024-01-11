import AppMobile from "./AppMobile";
import Carousel from "./Carousel";
import Coupons from "./Coupons";
import ItemListContainer from "./ItemListContainer";
import Locals from "./Locals";
import News from "./News";

const Main = () => {
  return (
    <div>
      <Carousel />
      <ItemListContainer greeting={'¿Sabías que...? Las imágenes del carrusel son de la competencia 😮 🤯'} />
      <Coupons />
      <Locals />
      <News />
      <AppMobile /> 
    </div>
  );
}

export default Main;