// A la hora de nombrar un archivo .jsx, en vez de usar camelCase, se utiliza la convención PascalCase
import Navbar from './Clase2/PrimerComponente'
import Main from './Clase2/SegundoComponente'
import './Clase2/style.css'

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App