import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Error404 from "./Error404";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

function Clase14() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/productos"} element={<ItemListContainer />} />
        <Route path={"/categoria/:id"} element={<ItemListContainer />} />
        <Route path={"/contenido"} element={<Main />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Clase14;