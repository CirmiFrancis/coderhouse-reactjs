import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carousel from "./components/Carousel";
import AppMobile from "./components/AppMobile";
import Error404 from "./components/Error404";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import Checkout from "./components/Checkout";

const AfterClase15 = () => {
  return (
    <div className="m-0 p-0">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<> <Carousel/> <Main/> </>}/>
            <Route path={"/productos"} element={<ItemListContainer/>}/>  
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>  
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/> 
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/checkout"} element={<Checkout/>}/>    
            <Route path={"*"} element={<Error404/>}/>  
          </Routes>
          <AppMobile/> 
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default AfterClase15;