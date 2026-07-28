import Link from "next/link";
import Countdown from "./countdown";
import FloatingPayments from "./floating-payments";

export default function Home() {
  return (
    <main className="page invitationPage">
      <nav className="nav" aria-label="Navegación principal">
        <div className="brand">Julio &amp; Jackeline</div>
        <div className="navLinks">
          <Link href="/regalos">Regalos</Link>
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
            <span>&amp;</span>
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
              <span>3:30 p.m.</span>
            </div>
            <i />
            <div>
              <small>Ceremonia</small>
              <span>Religiosa</span>
            </div>
          </div>

          <div className="invitationActions">
            <Link className="button primary" href="/regalos">
              Regalos
            </Link>
          </div>

          <div className="eventSummary compactEventSummary">
            <div>
              <h2>Ceremonia</h2>
              <p>Basílica de María Auxiliadora</p>
              <small>Av. Brasil 210 - Breña · 3:30 p.m.</small>
            </div>
            <div>
              <h2>Recepción</h2>
              <p>Calle Osa Mayor 118 - Santiago de Surco</p>
              <small>Espalda del Jockey Plaza · 6:30 p.m.</small>
            </div>
          </div>
        </article>
      </section>

      <Countdown />

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
