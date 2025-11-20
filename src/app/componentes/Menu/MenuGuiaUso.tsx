export const MenuGuiaUso = () => {
  return (
    <div
      style={{
        background: "#fffaf5",
        minHeight: "100vh",
        paddingBottom: "60px",
      }}
    >
      <div className="container py-5">
        {/* CARD CENTRAL */}
        <div
          className="shadow-lg p-5 mx-auto"
          style={{
            maxWidth: "900px",
            borderRadius: "20px",
            background: "white",
            border: "1px solid #f0d6b8",
          }}
        >
          {/* TÍTULO */}
          <h1
            className="text-center mb-2"
            style={{ color: "#800000ff", fontWeight: "800", fontSize: "2.3rem" }}
          >
            📘 Guía rápida de Squirroo
          </h1>

          <p
            className="text-center mb-4"
            style={{
              color: "#6a6a6a",
              fontSize: "1.1rem",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Aprende en pocos pasos cómo comparar precios, ahorrar dinero y usar
            las funciones principales de Squirroo.
          </p>

          <hr style={{ opacity: 0.15 }} />

          {/* PASOS */}
          <div className="mt-4">

            {/* Paso 1 */}
            <div className="d-flex gap-3 mb-4">
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  background: "#ffe2c9",
                  borderRadius: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                }}
              >
                🔍
              </div>

              <div>
                <h4 style={{ color: "#800000ff", fontWeight: "700" }}>
                  1. Busca un producto
                </h4>
                <p style={{ margin: 0, color: "#555" }}>
                  En la página principal usa la barra de búsqueda para escribir
                  lo que necesitas: <strong>arroz, leche, aceite…</strong>
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="d-flex gap-3 mb-4">
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  background: "#ffe2c9",
                  borderRadius: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                }}
              >
                🛒
              </div>

              <div>
                <h4 style={{ color: "#800000ff", fontWeight: "700" }}>
                  2. Compara precios entre supermercados
                </h4>
                <p style={{ margin: 0, color: "#555" }}>
                  Squirroo te muestra el precio del mismo producto en distintos
                  supermercados. Así ves cuál es el más económico.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="d-flex gap-3 mb-4">
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  background: "#ffe2c9",
                  borderRadius: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                }}
              >
                ❤️
              </div>

              <div>
                <h4 style={{ color: "#800000ff", fontWeight: "700" }}>
                  3. Añade productos al carrito
                </h4>
                <p style={{ margin: 0, color: "#555" }}>
                  Cada producto tiene un botón para agregarlo al carrito. Puedes
                  ver tu lista desde el ícono del carrito en la cabecera.
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="d-flex gap-3 mb-4">
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  background: "#ffe2c9",
                  borderRadius: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                }}
              >
                📍
              </div>

              <div>
                <h4 style={{ color: "#800000ff", fontWeight: "700" }}>
                  4. Cambia tu ubicación
                </h4>
                <p style={{ margin: 0, color: "#555" }}>
                  Selecciona tu barrio para que Squirroo te muestre los
                  supermercados más cercanos.
                </p>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="d-flex gap-3 mb-4">
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  background: "#ffe2c9",
                  borderRadius: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                }}
              >
                🏬
              </div>

              <div>
                <h4 style={{ color: "#800000ff", fontWeight: "700" }}>
                  5. Consulta los supermercados disponibles
                </h4>
                <p style={{ margin: 0, color: "#555" }}>
                  Al final del inicio verás los supermercados donde comparamos
                  precios. Se irán ampliando con el tiempo.
                </p>
              </div>
            </div>
          </div>

          <hr style={{ opacity: 0.15 }} />

          <p className="text-center mt-4" style={{ color: "#555" }}>
            ¿Tienes dudas o quieres reportar un error?  
            <br />
            Próximamente habilitaremos el centro de soporte de Squirroo.
          </p>
        </div>
      </div>
    </div>
  );
};
