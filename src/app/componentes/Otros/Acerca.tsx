export const Acerca = () => {
  return (
    <>
      {/* HERO PRINCIPAL */}
      <section
        className="py-5 text-center container"
        style={{
          backgroundColor: "#f7cc9e",
          borderRadius: "20px",
          marginTop: "30px",
        }}
      >
        <div className="row py-5">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 fw-bold" style={{ color: "#800000ff" }}>
              Acerca de Nosotros
            </h1>

            <p className="lead mt-3">
              Somos un equipo de ingenieros colombianos que convirtió la
              preocupación por los precios altos en una solución. Creemos que tu
              tiempo y dinero valen demasiado para perderlos en el mercado.
            </p>

            <p className="lead">
              Por eso creamos Squirroo: tu aliado para compras de la canasta
              familiar que te ayuda a ahorrar, encontrando los mejores precios
              cerca de ti.
            </p>

            {/*  SLOGAN  */}
            <p className="lead fw-bold fs-3 text-danger mt-4 fst-italic">
              Solo Squirroo sabe dónde están las mejores nueces.
            </p>

            <button
              className="btn px-4 py-2"
              style={{
                backgroundColor: "#ff7b00",
                color: "white",
                fontSize: "1.2rem",
                borderRadius: "30px",
                transition: "0.3s",
              }}
            >
              Más información
            </button>
          </div>
        </div>
      </section>

      {/* TARJETAS: MISIÓN / VISIÓN / VALORES */}
      <section className="container py-5">
        <div className="row text-center">
          {/* MISIÓN */}
          <div className="col-md-4 mb-4">
            <div
              className="p-4 shadow rounded"
              style={{ borderTop: "5px solid #ff7b00" }}
            >
              <h3 style={{ color: "#ff7b00" }}>Misión</h3>
              <p className="mt-3">
                Aliviar el bolsillo de los colombianos facilitando la
                comparación de precios de la canasta familiar para un ahorro
                inteligente.
              </p>
            </div>
          </div>

          {/* VISIÓN */}
          <div className="col-md-4 mb-4">
            <div
              className="p-4 shadow rounded"
              style={{ borderTop: "5px solid #ff7b00" }}
            >
              <h3 style={{ color: "#ff7b00" }}>Visión</h3>
              <p className="mt-3">
                Ser la comunidad de compradores más confiable de Colombia, donde
                la información empodera las decisiones de consumo.
              </p>
            </div>
          </div>

          {/* VALORES */}
          <div className="col-md-4 mb-4">
            <div
              className="p-4 shadow rounded"
              style={{ borderTop: "5px solid #ff7b00" }}
            >
              <h3 style={{ color: "#ff7b00" }}>Valores</h3>
              <p className="mt-3">
                Inteligencia Colectiva,Transparencia Total,Agilidad con
                Propósito,Compromiso Local,Empatía Activa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL DOS COLUMNAS */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Imagen (puedes cambiarla cuando quieras) */}
          <div className="col-md-6 mb-4">
            <img
              src="https://okdiario.com/img/2019/08/12/ardilla.jpg"
              alt="Squirro"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Texto */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3" style={{ color: "#800000ff" }}>
              Nuestra Historia
            </h2>

            <p className="fs-5">
              Nacimos del coraje de ver cómo los precios de la canasta familiar
              nos quitaban más de lo que podíamos gastar. Éramos estudiantes que
              convertimos nuestra frustración en una solución astuta. Cada
              comparación de precio en Squirroo está hecha con la dedicación de
              quien ha vivido el problema. Cada alerta es una pequeña victoria
              que compartimos contigo. Tu búsqueda del ahorro ya no es en
              solitario.
            </p>

            <p className="fs-5">
              Seguimos creciendo gracias a la confianza de nuestros clientes,
              quienes son el corazón de Squirroo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
