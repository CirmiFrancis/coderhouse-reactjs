// Instalé "react-router-dom" para poder manipular rutas (URL). Dependiendo de la ruta en la que esté, se mostrarán diferentes componentes.
// "react-router-dom"   
// <BrowserRouter />    se utiliza como componente principal, para juntar todos los componentes, incluyendo 'Routes'.
// <Routes />           se utiliza como componente para contener todas las 'Route'.
// <Route />            se utiliza para especificar cada ruta, modificando el URL y asignando un componente para ejecutar.
// <Link />             se utiliza para un link en específico.
// <NavLink />          se utiliza para un conjunto de links.
// "/:id"               es un parámetro. Indica que a esa ruta se le asignará un nombre en específico según el criterio a usar.
// useParams()          se utiliza para obtener todos los posibles valores de un parámetro en cuestión.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Error404 from "./Error404";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

function Clase9() {
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

export default Clase9;