import { useParams } from "react-router-dom";

export const UbicacionBarrio = () => {
  const { barrio } = useParams();

  // RUTAS DIFERENTES PARA CADA BARRIO
  const rutasPorBarrio: Record<string, string> = {
    elprado: "https://i0.wp.com/agendacolombia.com/wp-content/uploads/2021/08/prado-barranquilla.jpg?resize=690%2C540&ssl=1",
    lasdelicias: "https://i0.wp.com/agendacolombia.com/wp-content/uploads/2021/08/prado-barranquilla.jpg?resize=690%2C540&ssl=1",
    losalpes: "https://i0.wp.com/agendacolombia.com/wp-content/uploads/2021/08/prado-barranquilla.jpg?resize=690%2C540&ssl=1",
  };

  // Supermercados por barrio
  const supermercadosPorBarrio: Record<string, any[]> = {
    elprado: [
      { nombre: "Tienda D1 El Prado", img: "https://estaticos.elcolombiano.com/binrepository/848x565/34c0/780d565/none/11101/DIGH/cvd1-4_43589022_20231025073003.jpg" },
      { nombre: "Tiendas Ara Cra 54", img: "https://www.eesmsas.com/wp-content/uploads/2017/09/ARAGAIRA13A.jpg" },
      { nombre: "Olímpica CC Portal Del Prado", img: "https://laminaire.net/wp-content/uploads/2019/06/cc_portal_del_prado.jpg" }
    ],
    lasdelicias: [
      { nombre: "Isimo de las mercedes", img: "https://360radio.com.co/wp-content/uploads/2023/04/Isimo-696x523.jpeg" },
      { nombre: "Éxito San Francisco", img: "https://colombiabz.com/photo/2478.jpg" },
      { nombre: "Supertiendas Olímpica calle 73", img: "https://colombiabz.com/photo/21436.jpg" }
    ],
    losalpes: [
      { nombre: "Exito Viva Centro Comercial", img: "https://exiplast.com/wp-content/uploads/2021/06/CC-Viva-Barranquilla-Plano-General-Exterior-min-1024x768.jpg" },
      { nombre: "Ara avenida 20 de julio", img: "https://img.lalr.co/cms/2021/06/29120335/Tiendas-Ara.png" },
      { nombre: "D1 calle 90", img: "https://d2yoo3qu6vrk5d.cloudfront.net/images/20190707104633/d1-google-maps-900x485.jpg" }
    ],
  };

  const supermercados = supermercadosPorBarrio[barrio ?? ""] ?? [];
  const ruta = rutasPorBarrio[barrio ?? ""] ?? "";

  return (
    <div
      className="container py-4"
      style={{ maxWidth: "900px", marginTop: "20px" }}
    >
      {/* Título */}
      <h2 className="fw-bold text-center mb-3 text-dark">
        Supermercados cerca de{" "}
        <span className="text-danger">{barrio?.toUpperCase()}</span>
      </h2>

      {/* Imagen de ruta diferente para cada barrio */}
      <div className="text-center mb-4">
        <img
          src={ruta}
          alt={`Ruta de geolocalización de ${barrio}`}
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "15px",
            border: "2px solid #face95",
          }}
        />
        <p className="text-muted small mt-2">
          *Ruta generada según tu ubicación seleccionada*
        </p>
      </div>

      {/* Lista de supermercados */}
      <h4 className="fw-semibold mt-4 mb-3">Supermercados cercanos:</h4>

      <div className="row g-3">
        {supermercados.map((m, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div
              className="card h-100"
              style={{
                borderRadius: "15px",
                border: "1px solid #face95",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={m.img}
                alt={m.nombre}
                style={{ width: "100%", height: "130px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h6 className="fw-bold">{m.nombre}</h6>
                <button className="btn btn-warning rounded-pill px-3 mt-2">
                  Ver productos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
