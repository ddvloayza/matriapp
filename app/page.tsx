import Link from "next/link";
import Countdown from "./countdown";
import FloatingPayments from "./floating-payments";

const gifts = [
  "Cama Queen",
  "Colchón para cama Queen",
  "Sofá / sillón sala",
  "Mesa de comedor + sillas (4 sillas)",
  "2 Mesas de noche",
  "Sábanas + almohadas + frazada (Cama Queen)",
  "Refrigeradora",
  "Microondas",
  "Licuadora",
  "Hervidor eléctrico",
  "Plancha de ropa + Planchador",
  "Cafetera",
  "Freidora de aire",
  "Arrocera",
  "Aspiradora",
  "Waflera",
  "Ventilador",
  "Soundbar",
  "Batidora",
  "Aspiradora de mano",
  "Vajilla + cubiertos + vasos",
  "Juego de ollas + sartén",
  "Toallas (set completo) Colores Claros",
  "Juegos de Copas",
  "Organizadores (Para Closet, Baño)",
  "Juego de Cuchillos + Tabla de Picar",
  "Tetera de aluminio + Juego de Tazas"
];

export default function Home() {
  return (
    <main className="page">
      <nav className="nav" aria-label="Navegación principal">
        <div className="brand">Julio & Jackeline</div>
        <div className="navLinks">
          <a href="#detalles">Detalles</a>
          <a href="#regalos">Regalos</a>
        </div>
      </nav>

      <section className="hero" aria-labelledby="titulo-boda">
        <article className="invitationCard">
          <OrnamentCorners />
          <p className="eyebrow">Matrimonio</p>
          <p className="subtle">Con la bendición de Dios y sus familias</p>
          <Divider />
          <h1 id="titulo-boda" className="names">
            Julio Isaac
            <span>&</span>
            Jackeline Haydee
          </h1>
          <Divider />
          <p className="subtle">
            Tienen el honor de invitarte a la celebración de su matrimonio
          </p>
          <div className="dateBlock">
            <strong>14</strong>
            <span>Noviembre 2026</span>
          </div>
          <div className="detailsLine">
            <div>
              <small>Hora</small>
              <span>4:00 p.m.</span>
            </div>
            <i />
            <div>
              <small>Ceremonia</small>
              <span>Religiosa</span>
            </div>
          </div>
        </article>
      </section>

      <Countdown />

      <section id="detalles" className="sectionGrid">
        <article className="panel">
          <p className="sectionTitle">Ceremonia</p>
          <div className="infoBox">
            <h2>Basílica de María Auxiliadora</h2>
            <p>4:00 p.m. - Lima, Perú</p>
          </div>
        </article>

        <article className="panel">
          <p className="sectionTitle">Recepción</p>
          <div className="infoBox">
            <h2>Calle Osa Mayor 118</h2>
            <p>Santiago de Surco, Lima<br />6:30 p.m.<br />A espaldas del Jockey Plaza</p>
          </div>
        </article>
      </section>

      <section id="regalos" className="panel widePanel">
        <div className="giftHeader">
          <div>
            <p className="sectionTitle">Lista de Regalos</p>
            <p className="subtle">
              Si desean acompañarnos con un detalle, estas son algunas ideas para
              nuestro nuevo hogar.
            </p>
          </div>
          <a
            className="button primary"
            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTd-mHNgLhn_oX4_dGEQ9VN-0y_wuPvEL69BAOeo0a0FMGG0avTUvXWyqFQ5iYiG9f810zBDIm1Oacg/pubhtml"
            target="_blank"
            rel="noreferrer"
          >
            Ver lista completa
          </a>
        </div>

        <div className="giftGrid">
          {gifts.map((gift) => (
            <div className="giftCard" key={gift}>
              {gift}
            </div>
          ))}
        </div>
      </section>

      <footer className="footerNote">
        <p>Con amor, los esperamos</p>
        <Link href="/confirmar" aria-label="Confirmar asistencia" className="hiddenRsvpLink">
          Confirmar
        </Link>
      </footer>

      <FloatingPayments />
    </main>
  );
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <i />
      <span />
      <i />
    </div>
  );
}

function OrnamentCorners() {
  return (
    <>
      <span className="innerBorder" aria-hidden="true" />
      <span className="corner cornerTl" aria-hidden="true" />
      <span className="corner cornerTr" aria-hidden="true" />
      <span className="corner cornerBl" aria-hidden="true" />
      <span className="corner cornerBr" aria-hidden="true" />
    </>
  );
}
