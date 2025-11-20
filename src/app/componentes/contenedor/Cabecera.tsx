import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/LogoSquirroo.png";

export const Cabecera = () => {
  return (
    <nav
      className="navbar navbar-expand-lg py-3"
      style={{
        background: "#face95ff",
        borderBottom: "1px solid #ffffffff",
      }}
    >
      <div className="container">
        {/* LOGO */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={miLogo}
            alt="Logo Squirroo"
            style={{ width: "180px", height: "auto" }}
          />
        </NavLink>

        {/* BOTÓN RESPONSIVE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarProduct"
          aria-controls="navbarProduct"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENIDO */}
        <div className="collapse navbar-collapse" id="navbarProduct">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            {/* Ubicación */}
            <li className="nav-item dropdown">
              <button
                className="btn squirroo-btn-outline rounded-pill px-3 dropdown-toggle nav-hover"
                id="dropdownUbicacion"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-geo-alt me-1"></i> Barranquilla – El Prado
              </button>

              <ul
                className="dropdown-menu dropdown-menu-end squirroo-dropdown"
                aria-labelledby="dropdownUbicacion"
                style={{ width: "260px" }}
              >
                <li className="px-3 text-muted small fw-bold mt-1">
                  Barranquilla
                </li>
                <li>
                  <button className="dropdown-item">El Prado</button>
                </li>
                <li>
                  <button className="dropdown-item">Villa Country</button>
                </li>
                <li>
                  <button className="dropdown-item">Alto Prado</button>
                </li>

              </ul>
            </li>

            {/* MENÚ */}
            <li className="nav-item dropdown">
              <button
                className="btn squirroo-btn-outline rounded-pill px-3 dropdown-toggle nav-hover"
                id="navbarMenuDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-list me-1"></i> Menú
              </button>

              <ul
                className="dropdown-menu dropdown-menu-end squirroo-dropdown"
                aria-labelledby="navbarMenuDropdown"
              >
                <li>
                  <NavLink
                    to="/mencre"
                    className={({ isActive }) =>
                      `dropdown-item ${isActive ? "active-squirroo-item" : ""}`
                    }
                  >
                    Registrar Menús
                  </NavLink>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <NavLink
                    to="/menadmin"
                    className={({ isActive }) =>
                      `dropdown-item ${isActive ? "active-squirroo-item" : ""}`
                    }
                  >
                    Administrar Menús
                  </NavLink>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <NavLink
                    to="/menuacer"
                    className={({ isActive }) =>
                      `dropdown-item ${isActive ? "active-squirroo-item" : ""}`
                    }
                  >
                    Acerca de
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Iniciar sesión */}
            <li className="nav-item">
              <NavLink
                to="/login"
                className="btn rounded-pill px-3 squirroo-orange d-flex align-items-center gap-2"
              >
                <i className="bi bi-person-circle"></i>
                Iniciar sesión
              </NavLink>
            </li>

            {/* ICONO CARRITO */}
            <li className="nav-item">
              <button className="btn rounded-pill px-3 squirroo-btn-outline d-flex align-items-center gap-2">
                <i className="bi bi-cart2" style={{ fontSize: "18px" }}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* ESTILOS */}
      <style>{`
        :root {
          --squirroo-red: #800000ff; 
          --squirroo-red-dark: #5d0000ff;
        }

        .squirroo-btn-outline {
          border: 2px solid var(--squirroo-red);
          color: var(--squirroo-red) !important;
          background-color: transparent;
          transition: 0.25s;
        }
        .squirroo-btn-outline:hover {
          background-color: var(--squirroo-red) !important;
          color: white !important;
        }

        .squirroo-orange {
          background-color: #ff7b00 !important;
          color: white !important;
          transition: 0.2s;
        }
        .squirroo-orange:hover {
          background-color: #e56e00 !important;
        }

        .squirroo-dropdown {
          padding: 10px 0;
          border-radius: 12px;
          border: 1px solid #d8b48a;
        }
        .dropdown-item:hover {
          background-color: #ffe1c2 !important;
        }
        .active-squirroo-item {
          background-color: var(--squirroo-red) !important;
          color: white !important;
        }
      `}</style>
    </nav>
  );
};
