import { useState } from "react";
import BuscarFetch from "./components/BuscarFetch";
import AutoFetch from "./components/AutoFetch";

function App() {
  const [estado, setEstado] = useState(true);

  const mudarConteudo = () => estado === true ? setEstado(false) : setEstado(true);
  return (
    <>
      {estado ? <AutoFetch /> : <BuscarFetch />}

      <button onClick={mudarConteudo}>Usar Buscar</button>
    </>
  );
}

export default App;
