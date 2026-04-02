import React from "react";

export default function Head() {
  const goHome = () => {
    window.location.href = "/panelprincipal";
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="app-header" role="banner">
      <div className="app-container app-navbar">
        {/* BRAND */}
        <a href="/panelprincipal" className="brand-link" aria-label="MedicalPlus Botica - Inicio">
          <img
            src="/logo-oscuro.jpg"  
            className="brand-logo"
          />
        </a>

        {/* NAV */}
        <nav className="nav-right" aria-label="Secciones">
          <button className="btn" onClick={goHome}>Inicio</button>
          <button className="btn" onClick={() => scrollTo("materiales-laboratorio")}>Materiales de laboratorio</button>
          <button className="btn" onClick={() => scrollTo("equipo-medico")}>Equipo médico</button>
          <button className="btn" onClick={() => scrollTo("mobiliario-medico")}>Mobiliario médico</button>
          <button className="btn" onClick={() => scrollTo("ortopedia")}>Ortopedia</button>
        </nav>
      </div>
    </header>
  );
}
