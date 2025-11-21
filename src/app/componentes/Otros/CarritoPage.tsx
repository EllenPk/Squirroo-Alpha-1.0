import { useCarrito } from "../../contexto/CarritoContext";

const CarritoPage = () => {
  const { carrito, quitarProducto } = useCarrito();

  const total = carrito.reduce((sum, p) => sum + p.precio, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontWeight: "bold" }}>Tu carrito</h2>

      {carrito.length === 0 ? (
        <p>No hay productos agregados.</p>
      ) : (
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {carrito.map((producto) => (
            <div
              key={producto.id}
              style={{
                border: "1px solid #face95",
                borderRadius: "12px",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {producto.img && (
                  <img src={producto.img} alt={producto.nombre} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                )}
                <span>{producto.nombre}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <strong>${producto.precio}</strong>
                <button
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                  }}
                  onClick={() => quitarProducto(producto.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "20px", fontWeight: "bold" }}>Total: ${total}</div>

          <button
            style={{
              marginTop: "10px",
              background: "green",
              color: "white",
              padding: "10px 15px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            encontrar mi ruta de compra
          </button>
        </div>
      )}
    </div>
  );
};

export default CarritoPage;
