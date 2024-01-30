// Agregar Breadcrumb

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carousel from "./components/Carousel";
import AppMobile from "./components/AppMobile";
import Error404 from "./components/Error404";

const PreEntrega2 = () => {
  return (
    <div className="m-0 p-0">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<> <Carousel/> <Main/> </>} />
          <Route path={"/productos"} element={<ItemListContainer/>} />  
          <Route path={"/category/:id"} element={<ItemListContainer/>} />  
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />  
          <Route path={"*"} element={<Error404/>} />  
        </Routes>
        <AppMobile /> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default PreEntrega2;