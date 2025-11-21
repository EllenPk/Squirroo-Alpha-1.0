import { useState } from "react";

// Importa las imágenes de tus productos
import arrozDiana from "../../../assets/img/Arroz diana.png";
import lecheAlpina from "../../../assets/img/Leche medalla de oro.png";
import aceiteNatura from "../../../assets/img/Aceite.png";
import huevos from "../../../assets/img/Huevos pack x30.png";
import azucar from "../../../assets/img/Azucar.png";
import pan from "../../../assets/img/Pan tajado.png";

interface Producto {
  nombre: string;
  img: string;
  supermercados: { nombre: string; precio: number }[];
}

export const MenuComparar = () => {
  const productos: Producto[] = [
    {
      nombre: "Arroz",
      img: arrozDiana,
      supermercados: [
        { nombre: "D1", precio: 5000 },
        { nombre: "Éxito", precio: 5800 },
        { nombre: "Ara", precio: 5500 },
        { nombre: "Olímpica", precio: 5600 },
      ],
    },
    {
      nombre: "Leche",
      img: lecheAlpina,
      supermercados: [
        { nombre: "Olímpica", precio: 3500 },
        { nombre: "Éxito", precio: 3800 },
        { nombre: "Carulla", precio: 3950 },
      ],
    },
    {
      nombre: "Aceite",
      img: aceiteNatura,
      supermercados: [
        { nombre: "D1", precio: 8000 },
        { nombre: "Olímpica", precio: 8400 },
        { nombre: "Ara", precio: 8600 },
      ],
    },
    {
      nombre: "Huevos",
      img: huevos,
      supermercados: [
        { nombre: "Olímpica", precio: 28000 },
        { nombre: "Carulla", precio: 30000 },
      ],
    },
    {
      nombre: "Azúcar",
      img: azucar,
      supermercados: [
        { nombre: "Éxito", precio: 4000 },
        { nombre: "Isimo", precio: 4100 },
        { nombre: "Olímpica", precio: 4400 },
      ],
    },
    {
      nombre: "Pan",
      img: pan,
      supermercados: [
        { nombre: "D1", precio: 3000 },
        { nombre: "Ara", precio: 3200 },
        { nombre: "Carulla", precio: 3400 },
        { nombre: "Olímpica", precio: 3550 },
      ],
    },
  ];

  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#FF6600", fontWeight: "700" }}>
        Comparador de Precios Squirroo
      </h2>
      <p className="text-center mb-4" style={{ fontSize: "1.1rem", color: "#444" }}>
        Selecciona un producto y compara automáticamente su precio entre los supermercados disponibles.
      </p>

      <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
        {productos.map((p) => (
          <div
            key={p.nombre}
            className={`card shadow-sm p-2 text-center ${productoSeleccionado?.nombre === p.nombre ? "border border-3 border-success" : ""}`}
            style={{ width: "150px", cursor: "pointer", borderRadius: "15px" }}
            onClick={() => setProductoSeleccionado(p)}
          >
            <img src={p.img} alt={p.nombre} style={{ height: "100px", objectFit: "contain" }} />
            <h6 className="mt-2">{p.nombre}</h6>
          </div>
        ))}
      </div>

      {productoSeleccionado && (
        <div className="card shadow p-4" style={{ borderRadius: "20px" }}>
          <div className="d-flex align-items-center gap-3 mb-3">
            <img src={productoSeleccionado.img} alt={productoSeleccionado.nombre} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
            <h4 style={{ color: "#00A86B", margin: 0 }}>{productoSeleccionado.nombre}</h4>
          </div>
          <h5>Precios por supermercado:</h5>
          <div className="row mt-3">
            {productoSeleccionado.supermercados.map((s) => (
              <div key={s.nombre} className="col-md-3 col-sm-6 mb-3">
                <div className="card text-center p-2 shadow-sm" style={{ borderRadius: "15px" }}>
                  <h6>{s.nombre}</h6>
                  <strong>${s.precio}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};



 