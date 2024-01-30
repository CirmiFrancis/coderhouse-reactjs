import AppMobile from "./AppMobile";
import Carousel from "./Carousel";
import Coupons from "./Coupons";
import Locals from "./Locals";
import News from "./News";

const Main = () => {
  return (
    <div>
      <Carousel />
      <Coupons />
      <Locals />
      <News />
      <AppMobile /> 
    </div>
  );
}

export default Main;