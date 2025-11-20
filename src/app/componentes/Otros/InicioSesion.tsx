import { useState } from "react";

export const InicioSesion = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inicio de sesión enviado (falta backend)");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff7ee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "white",
          borderRadius: "20px",
          padding: "35px 30px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
          border: "2px solid #face95",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-4">
         
          <h4
            style={{
              color: "#800000",
              fontWeight: "700",
              letterSpacing: "0.5px",
              marginTop: "10px",
            }}
          >
            Bienvenido
          </h4>
          <p style={{ fontSize: "14px", color: "#6a6a6a" }}>
            Ingresa para continuar ahorrando 
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#800000" }}>
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              style={{
                borderRadius: "12px",
                padding: "12px",
                border: "2px solid #face95",
              }}
            />
          </div>

          <div className="mb-2">
            <label className="form-label fw-bold" style={{ color: "#800000" }}>
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                borderRadius: "12px",
                padding: "12px",
                border: "2px solid #face95",
              }}
            />
          </div>

          {/* ¿Olvidaste tu contraseña? */}
          <div className="text-end mb-3">
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                fontSize: "14px",
                color: "#800000",
                textDecoration: "none",
              }}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="btn w-100 rounded-pill"
            style={{
              background: "#ff7b00",
              color: "white",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            Entrar
          </button>
        </form>

        {/* Registro */}
        <p className="text-center mt-4" style={{ fontSize: "14px" }}>
          ¿No tienes cuenta?
          <span
            style={{
              color: "#800000",
              fontWeight: "600",
              marginLeft: "5px",
              cursor: "pointer",
            }}
          >
            Crear cuenta
          </span>
        </p>
      </div>
    </div>
  );
};