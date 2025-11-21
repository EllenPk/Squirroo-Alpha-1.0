import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/utilidades/rutas/Ruteo";
import { Cabecera } from "./app/componentes/contenedor/Cabecera";
import { PieDePagina } from "./app/componentes/contenedor/PiePagina";
import { LocationProvider } from "./app/contexto/LocationContext";
import { CarritoProvider } from "./app/contexto/CarritoContext";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
        <CarritoProvider>
        <LocationProvider>
          <Cabecera />
          <Ruteo />
          <PieDePagina/>
          </LocationProvider>
          </CarritoProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
