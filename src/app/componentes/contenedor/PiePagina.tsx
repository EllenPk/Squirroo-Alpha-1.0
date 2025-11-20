export const PieDePagina = () => {
  return (
    <footer
      className="squirroo-footer mt-5 pt-4 pb-3"
      style={{
        background: "#face95ff",
        borderTop: "2px solid #face95ff",
      }}
    >
      <div className="container text-center">

        {/* LOGO */}
        <h4
          style={{
            fontWeight: 800,
            color: "#800000ff",
            letterSpacing: "1px",
            fontSize: "22px",
          }}
        >
          Squirroo 🐿️
        </h4>

        {/* LEMA */}
        <p
          style={{
            marginTop: "8px",
            color: "#e56e00;",
            fontSize: "15px",
          }}
        >
          <i>Tu aliado para ahorrar en la canasta familiar</i>
        </p>

        {/* ICONOS */}
        <div className="d-flex justify-content-center gap-4 mt-3 mb-3">
          <a href="#" className="footer-icon">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="footer-icon">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="footer-icon">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>

        <hr style={{ opacity: 0.25 }} />

        {/* COPYRIGHT */}
        <p style={{ color: "#b44a00;", fontSize: "14px" }}>
          © 2025 Squirroo — Todos los derechos reservados.
        </p>
      </div>

      {/* ESTILOS */}
      <style>{`
        .footer-icon {
          font-size: 22px;
          color: #800000ff;
          transition: 0.3s;
        }

        .footer-icon:hover {
          color: #e56e00;
          transform: scale(1.15);
        }

        @media (max-width: 576px) {
          .squirroo-footer h4 {
            font-size: 20px;
          }
        }
      `}</style>
    </footer>
  );
};
