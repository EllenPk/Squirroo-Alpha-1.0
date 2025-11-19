import { useState } from "react";
import logoD1 from "../../../assets/img/d1.png";
import logoOlimpica from "../../../assets/img/olimpica.png";
import logoExito from "../../../assets/img/exito.png";
import logoCarulla from "../../../assets/img/carulla.png";
import logoIsimo from "../../../assets/img/isimo.png";
import logoAra from "../../../assets/img/ara.png";

// Importar imágenes de productos
import arrozDiana from "../../../assets/img/Arroz diana.png";
import lecheAlpina from "../../../assets/img/Leche medalla de oro.png";
import aceiteNatura from "../../../assets/img/Aceite.png";
import huevos from "../../../assets/img/Huevos pack x30.png";
import azucar from "../../../assets/img/Azucar.png";
import pan from "../../../assets/img/Pan tajado.png";

export const Inicio = () => {
  const [busqueda, setBusqueda] = useState("");

  const productos = [
    { nombre: "Arroz", descripcion: "Arroz Diana x 500 gr", supermercados: ["D1", "Éxito", "Ara","Olímpica"], img: arrozDiana },
    { nombre: "Leche", descripcion: "Leche entera 900 mL", supermercados: ["Olímpica", "Éxito", "Carulla"], img: lecheAlpina },
    { nombre: "Aceite", descripcion: "Aceite de soya 1 L", supermercados: ["D1", "Olímpica", "Ara"], img: aceiteNatura },
    { nombre: "Huevos", descripcion: " Carton Bandeja de 30 huevos", supermercados: ["Olímpica", "Carulla"], img: huevos },
    { nombre: "Azúcar", descripcion: "Azúcar 1 kg", supermercados: ["Éxito", "Isimo","Olímpica"], img: azucar },
    { nombre: "Pan", descripcion: "Pan Tajado 550 gr", supermercados: ["D1", "Ara", "Carulla","Olímpica"], img: pan },
  ];

  const supermercados = [
    { nombre: "D1", logo: logoD1 },
    { nombre: "Olímpica", logo: logoOlimpica },
    { nombre: "Éxito", logo: logoExito },
    { nombre: "Carulla", logo: logoCarulla },
    { nombre: "Isimo", logo: logoIsimo },
    { nombre: "Ara", logo: logoAra },
  ];

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const obtenerLogo = (nombre: string) => {
    const sup = supermercados.find((s) => s.nombre === nombre);
    return sup ? sup.logo : "";
  };

  return (
    <main className="album py-5" style={{ backgroundColor: "#fffaf0" }}>
      <div className="container">

        {/* Buscador */}
        <div className="row mb-5">
          <div className="col-md-8 mx-auto">
            <div className="p-4 rounded shadow-sm" style={{ backgroundColor: "#face95ff", color: "#5d0000ff" }}>
              <h2 className="mb-3">Busca un producto</h2>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe el producto..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  style={{ borderColor: "#5d0000ff" }}
                />
                <button
                  className="btn"
                  type="button"
                  style={{ backgroundColor: "#ff7b00", color: "#fff" }}
                >
                  Buscar
                </button>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {productos.map((p) => (
                  <button
                    key={p.nombre}
                    className="btn btn-outline-light btn-sm"
                    onClick={() => setBusqueda(p.nombre)}
                  >
                    {p.nombre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supermercados */}
        <div className="row mb-5">
          <div className="col text-center">
            <h3 className="mb-4" style={{ color: "#5d0000ff" }}>Supermercados disponibles</h3>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              {supermercados.map((s) => (
                <div
                  key={s.nombre}
                  className="card p-3 shadow-sm d-flex align-items-center justify-content-center"
                  style={{ minWidth: "120px", minHeight: "120px", backgroundColor: "#ffffff" }}
                >
                  <img 
                    src={s.logo} 
                    alt={s.nombre} 
                    style={{ width: "80px", height: "80px", objectFit: "contain" }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Productos filtrados */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {(productosFiltrados.length > 0 ? productosFiltrados : productos).map((p) => (
            <div key={p.nombre} className="col">
              <div className="card shadow-sm">
                <img 
                  src={p.img} 
                  className="card-img-top" 
                  alt={p.nombre} 
                  style={{ height: "160px", objectFit: "contain", backgroundColor: "#face95ff" }} 
                />
                <div className="card-body">
                  <p className="card-text">{p.descripcion}</p>
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    {p.supermercados.map((s) => (
                      <img
                        key={s}
                        src={obtenerLogo(s)}
                        alt={s}
                        title={s}
                        style={{ width: "50px", height: "50px", objectFit: "contain" }}
                      />
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-primary">
                        Ver
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};
