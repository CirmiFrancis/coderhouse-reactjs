// PUSH: es como imponer. El servidor envía información al usuario, sin que este la haya pedido. Ejemplo de PedidosYa cuando decide enviar una notificación para que pidas algo.
// POLLING: el usuario hace una solicitud, el servidor lo procesa y envía una respuesta. A veces lo realiza sola la aplicación (automático). Ejemplo de instagram al actualizar las publicaciones.
// URL & VERB: GET (obtener), POST (crear), PUT (crear/actualizar), DELETE (eliminar).
// QUERY PARAMS: parámetros adicionales a la URL a la cual intento acceder. '?q='
// CORS: es una medida de seguridad que permite a los servidores controlar y permitir el acceso a sus recursos desde dominios específicos.

// Paginas: https://jsonplaceholder.typicode.com/ & https://fakestoreapi.com/

import Fetch from "./Fetch";

const Clase7 = () => {
    return (
        <div>
            <Fetch />
        </div>
    )
}

export default Clase7;