// Agregué el archivo 'Cart.jsx', el cual muestra los productos que estén en el carrito
// Agregué el archivo 'CartContext.jsx', el cual tiene un estado del tipo array que se actualiza cuando se agrega/elimina un producto y tiene algunas funciones más como: eliminar todos los productos, saber si X producto está dentro del array, calcular el precio total, calcular la cantidad de productos
// Agregué ambos componentes a After4, es decir, al componente principal
// Modifiqué 'CartWidget.jsx', 'ItemCount.jsx', 'ItemDetail.jsx'
// Agregué el archivo 'trash.svg', el cual es un ícono de un tacho de basura

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

const After4 = () => {
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
            <Route path={"*"} element={<Error404/>}/>  
          </Routes>
          <AppMobile/> 
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default After4;