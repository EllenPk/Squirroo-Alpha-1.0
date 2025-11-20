import { Route, Routes } from "react-router-dom";

import { Acerca } from "../../componentes/Otros/Acerca";
import { MenuCrear } from "../../componentes/Menu/MenuCrear";
import { MenuAdmin } from "../../componentes/Menu/MenuAdmin";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { MenuActualizar } from "../../componentes/Menu/MenuActualizar";
import { InicioSesion } from "../../componentes/Otros/InicioSesion";


export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} /> 
      <Route path="/mencre" element={<MenuCrear/>}/>
      <Route path="/menadmin" element={<MenuAdmin />} />
      <Route path="/menactu/:codigo" element={<MenuActualizar />} />
      <Route path="/menuacer" element={<Acerca />} />
      <Route path="/login" element={<InicioSesion />} />
 
     
    </Routes>
  );
};