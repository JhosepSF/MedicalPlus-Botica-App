import React, { useEffect, useState } from "react";
import {
  BeakerIcon,
  BuildingOffice2Icon,
  HeartIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

import "../../styles/Panel.css";

const catalogo = [
  {
    id: "materiales-laboratorio",
    titulo: "Material para laboratorio clínico",
    descripcion: "Cristalería y consumibles de calidad para laboratorio clínico: matraces, fiolas, tubos, pipetas y más para análisis y procedimientos en Tarapoto.",
    folder: "material-labo",
    productos: [
      { id: 1, nombre: "Matraz", archivo: "matraz.jpg" },
      { id: 2, nombre: "Pisetas", archivo: "piseta.jpg" },
      { id: 3, nombre: "Fiola", archivo: "fiola.jpg" },
      { id: 4, nombre: "Tips", archivo: "tips_pipetas.jpg" },
      { id: 5, nombre: "Tubos vacutainer", archivo: "tubos_vacutainer.png" },
      { id: 6, nombre: "Vasos de precipitación", archivo: "vasos_precipitación.jpg" },
      { id: 7, nombre: "Porta objeto y cubre objeto", archivo: "porta_objeto_cubre_objeto.jpg" },
    ],
  },
  {
    id: "equipo-medico",
    titulo: "Equipos médicos de diagnóstico",
    descripcion: "Equipos médicos profesionales para clínicas y consultorios: tensiómetros, oxímetros, glucómetros, nebulizadores y más instrumentos de diagnóstico en Tarapoto.",
    folder: "equipo-medico",
    productos: [
      { id: 8, nombre: "Camilla ginecológica", archivo: "camilla-ginecologica.png" },
      { id: 9, nombre: "Tensiómetros", archivo: "tensiometro.png" },
      { id: 10, nombre: "Nebulizador", archivo: "nebulizador.jpg" },
      { id: 11, nombre: "Aspirador de secresion", archivo: "aspirador_secrecion.jpg" },
      { id: 12, nombre: "Negatoscopio", archivo: "negatoscopio.jpg" },
      { id: 13, nombre: "Colchón antiescaras", archivo: "colchón_antiescaras.jpg" },
      { id: 14, nombre: "Oxímetros", archivo: "oximetro.jpeg" },
      { id: 15, nombre: "Glucómetros", archivo: "glucometro.png" },
      { id: 16, nombre: "Lámpara cuello de ganzo", archivo: "lampara_cuello_ganso.jpg" },
    ],
  },
  {
    id: "mobiliario-medico",
    titulo: "Mobiliario médico para consultorios",
    descripcion: "Mobiliario clínico profesional para consultorios y clínicas: camillas, vitrina, lámparas médicas y sillas de análisis en Tarapoto.",
    folder: "mobiliario",
    productos: [
      { id: 17, nombre: "Taburete silla médica", archivo: "Taburete_silla_médica.jpg" },
      { id: 18, nombre: "Vitrina médica", archivo: "vitrina_medica.jpg" },
      { id: 19, nombre: "Coche de curación", archivo: "coche_curación.jpg" },
      { id: 20, nombre: "Porta suero", archivo: "porta_suero.jpeg" },
      { id: 21, nombre: "Silla para análisis", archivo: "silla_análisis.jpg" },
      { id: 22, nombre: "Lamparas led", archivo: "lampara_led.jpg" },
      { id: 23, nombre: "Camilla tópica", archivo: "camilla_tópica.jpg" },
      { id: 24, nombre: "Biombo", archivo: "biombo.jpg" },
    ],
  },
  {
    id: "ortopedia",
    titulo: "Equipos de ortopedia y movilidad",
    descripcion: "Productos de ortopedia y ayudas de movilidad: sillas de ruedas, muletas, andadores, bastones y más para clínicas y uso domiciliario en Tarapoto.",
    folder: "ortopedia",
    productos: [
      { id: 25, nombre: "Sillas de ruedas", archivo: "silla_ruedas.jpg" },
      { id: 26, nombre: "Muletas", archivo: "muleta.jpg" },
      { id: 27, nombre: "Andador", archivo: "andador.jpg" },
      { id: 28, nombre: "Silla para ducha", archivo: "silla_ducha.jpg" },
      { id: 29, nombre: "Silla sanitario", archivo: "silla_sanitario.jpg" },
      { id: 30, nombre: "Camas clínicas", archivo: "camas_clínicas.jpg" },
      { id: 31, nombre: "Rodilleras", archivo: "rodilleras.jpg" },
      { id: 32, nombre: "Tobilleras", archivo: "tobilleras.jpg" },
      { id: 33, nombre: "Muñequeras", archivo: "muñequeras.jpg" },
      { id: 34, nombre: "Bastones", archivo: "baston.png" },
    ],
  },
];

const totalProductos = catalogo.reduce((acumulado, categoria) => acumulado + categoria.productos.length, 0);
const telefonosConsulta = [
  { numero: "51947617365", etiqueta: "WhatsApp 947 617 365" },
  { numero: "51942492716", etiqueta: "WhatsApp 942 492 716" },
];

const iconosPorCategoria = {
  "materiales-laboratorio": BeakerIcon,
  "equipo-medico": HeartIcon,
  "mobiliario-medico": BuildingOffice2Icon,
  ortopedia: ShieldCheckIcon,
};

function buildImageSrc(folder, archivo) {
  return encodeURI(`/Img/${folder}/${archivo}`);
}

export function PanelPrincipal() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setProductoSeleccionado(null);
      }
    };

    if (productoSeleccionado) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [productoSeleccionado]);

  const abrirModalProducto = (producto, categoria) => {
    setProductoSeleccionado({
      ...producto,
      categoria: categoria.titulo,
      img: buildImageSrc(categoria.folder, producto.archivo),
    });
  };

  const cerrarModalProducto = () => {
    setProductoSeleccionado(null);
  };

  const buildWhatsappLink = (numero) => {
    if (!productoSeleccionado) return `https://wa.me/${numero}`;

    const mensaje = `Quiero mas informacion del ${productoSeleccionado.nombre}`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <div className="app-shell">
      <main className="app-main">
        {/* HERO */}
        <section className="hero">
          <div className="app-container hero-inner">
            <div className="hero-copy">
              <h1>MedicalPlus Botica: equipos y suministros médicos en Tarapoto</h1>
              <p>
                MedicalPlus Botica, tu proveedor confiable de equipos médicos en Tarapoto. Catálogo completo de materiales para laboratorio clínico, 
                equipos de diagnóstico, mobiliario médico para consultorios y productos de ortopedia de calidad garantizada.
              </p>
              <div className="hero-stats" aria-label="Resumen del catálogo">
                <div className="stat-card">
                  <strong>{catalogo.length}</strong>
                  <span>Categorías</span>
                </div>
                <div className="stat-card">
                  <strong>{totalProductos}</strong>
                  <span>Productos</span>
                </div>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <img src="/Img/equipos.png" alt="" className="hero-illustration" />
            </div>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section className="app-container seccion">
          <h2>Sobre MedicalPlus Botica</h2>
          <p>
            MedicalPlus Botica es una tienda especializada en equipos médicos, mobiliario clínico,
            materiales de laboratorio y productos de ortopedia en Tarapoto. Atendemos a clínicas,
            consultorios, profesionales de la salud y público en general, brindando atención rápida
            y consulta de disponibilidad por WhatsApp.
          </p>
        </section>

        {/* CATEGORÍAS */}
        <section className="app-container seccion" id="categorias">
          <h2 className="section-title">Categorías</h2>
          <div className="grid-categorias">
            {catalogo.map((categoria) => {
              const Icono = iconosPorCategoria[categoria.id] || Squares2X2Icon;

              return (
                <a key={categoria.id} href={`#${categoria.id}`} className="cat-card">
                  <span className="cat-icon" aria-hidden="true">
                    <Icono className="cat-icon-svg" />
                  </span>
                <h3>{categoria.titulo}</h3>
                <p>{categoria.descripcion}</p>
                </a>
              );
            })}
          </div>
        </section>

        {catalogo.map((categoria) => (
          <section key={categoria.id} id={categoria.id} className="app-container seccion category-section">
            <div className="category-header">
              <div>
                <span className="section-kicker">Catálogo</span>
                <h2 className="section-title">{categoria.titulo}</h2>
                <p className="category-description">{categoria.descripcion}</p>
              </div>
              <span className="category-count">{categoria.productos.length} productos</span>
            </div>

            <div className="grid-products">
              {categoria.productos.map((producto) => (
                <article
                  key={producto.id}
                  className="card-product product-clickable"
                  role="button"
                  tabIndex={0}
                  onClick={() => abrirModalProducto(producto, categoria)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      abrirModalProducto(producto, categoria);
                    }
                  }}
                >
                  <div className="product-img">
                    <img src={buildImageSrc(categoria.folder, producto.archivo)} alt={`${producto.nombre} en MedicalPlus Botica, Tarapoto`} />
                  </div>
                  <div className="product-body">
                    <h3 className="product-title">{producto.nombre}</h3>
                    <div className="product-meta">
                      <span className="tag">{categoria.titulo}</span>
                    </div>
                    <p className="product-note">Consulta disponibilidad y presentación por WhatsApp.</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {productoSeleccionado && (
          <div className="modal-backdrop" onClick={cerrarModalProducto}>
            <div
              className="product-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`Detalle de ${productoSeleccionado.nombre}`}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="modal-close" type="button" onClick={cerrarModalProducto} aria-label="Cerrar">
                ×
              </button>

              <div className="modal-img-wrap">
                <img src={productoSeleccionado.img} alt={productoSeleccionado.nombre} className="modal-img" />
              </div>

              <div className="modal-content">
                <span className="tag">{productoSeleccionado.categoria}</span>
                <h3 className="modal-title">{productoSeleccionado.nombre}</h3>
                <p className="modal-text">Selecciona un número para solicitar información por WhatsApp.</p>

                <div className="modal-actions">
                  {telefonosConsulta.map((telefono) => (
                    <a
                      key={telefono.numero}
                      className="btn btn-primary modal-wsp-btn"
                      href={buildWhatsappLink(telefono.numero)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {telefono.etiqueta}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER / CONTACTO */}
        <section className="footer-seo">
          <div className="footer-bar">
            <div className="app-container footer-bar-inner">
              <div className="footer-top">
                <h2 className="footer-title">MedicalPlus Botica en Tarapoto</h2>

                <p className="footer-desc">
                  En <strong>MedicalPlus Botica</strong> ofrecemos equipos médicos, materiales de laboratorio,
                  mobiliario clínico y productos de ortopedia en Tarapoto.
                </p>
              </div>

              <div className="footer-grid-2">
                <div className="footer-block">
                  <h3>📍 Ubicación</h3>
                  <p>JR. Miguel Grau #501</p>
                  <p>Tarapoto, San Martín - Perú</p>
                </div>

                <div className="footer-block">
                  <h3>📧 Contacto</h3>
                  <p>
                    <a href="mailto:mdelgadoorbe@gmail.com">
                      mdelgadoorbe@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="footer-left">
                  © {new Date().getFullYear()} <strong>MedicalPlus Botica</strong>
                </div>

                <div className="footer-right">
                  <a
                    className="btn footer-btn"
                    href="https://wa.me/51947617365"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp 947 617 365
                  </a>
                  <a
                    className="btn footer-btn"
                    href="https://wa.me/51942492716"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp 942 492 716
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
