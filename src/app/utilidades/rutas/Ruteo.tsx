import { Route, Routes } from "react-router-dom";

import { Acerca } from "../../componentes/Otros/Acerca";
import { MenuComparar } from "../../componentes/Menu/MenuComparar";
import { MenuGuiaUso } from "../../componentes/Menu/MenuGuiaUso";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { MenuActualizar } from "../../componentes/Menu/MenuActualizar";
import { InicioSesion } from "../../componentes/Otros/InicioSesion";
import { UbicacionBarrio } from "../../componentes/Otros/UbicacionBarrio";


export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} /> 
      <Route path="/mencomp" element={<MenuComparar/>}/>
      <Route path="/menuso" element={<MenuGuiaUso />} />
      <Route path="/menactu/:codigo" element={<MenuActualizar />} />
      <Route path="/menuacer" element={<Acerca />} />
      <Route path="/login" element={<InicioSesion />} />
      <Route path="/ubicacion/:barrio" element={<UbicacionBarrio />} />
     
    </Routes>
  );
};