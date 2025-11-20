import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/utilidades/rutas/Ruteo";
import { Cabecera } from "./app/componentes/contenedor/Cabecera";
import { PieDePagina } from "./app/componentes/contenedor/PiePagina";
import { LocationProvider } from "./app/contexto/LocationContext";
function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
        <LocationProvider>
          <Cabecera />
          <Ruteo />
          <PieDePagina/>
          </LocationProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
