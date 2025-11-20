export const MenuComparar = () => {
    return (
      
       <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#FF6600", fontWeight: "700" }}>
        Comparador de Precios Squirroo
      </h2>

      <p className="text-center mb-4" style={{ fontSize: "1.1rem", color: "#444" }}>
        Selecciona un producto y compara automáticamente su precio entre 
        los supermercados disponibles.
      </p>

      <div className="card shadow p-4" style={{ borderRadius: "20px" }}>
        <h4 style={{ color: "#00A86B" }}>Productos disponibles</h4>
        <p className="text-muted">Pronto podrás comparar arroz, aceite, huevos y más.</p>

        <button className="btn mt-3"
          style={{
            backgroundColor: "#00A86B",
            color: "white",
            fontWeight: "600",
            borderRadius: "15px",
            padding: "10px 20px"
          }}
        >
          Iniciar Comparación
        </button>
      </div>
    </div>

    );
  };