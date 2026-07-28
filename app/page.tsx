import Link from "next/link";
import Countdown from "./countdown";
import FloatingPayments from "./floating-payments";

export default function Home() {
  return (
    <main className="page invitationPage">
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

          <div className="dressCode">
            <p>Estacionamiento</p>
            <span>
              El local de la recepción cuenta con estacionamiento.
            </span>
            <a
              className="giftNoteLink"
              href="https://wa.me/51951223994?text=%C2%A1Hola!%20Quisiera%20consultar%20la%20disponibilidad%20de%20estacionamiento%20para%20la%20recepci%C3%B3n%20de%20Julio%20y%20Jackeline%20%F0%9F%9A%97"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulta la disponibilidad por WhatsApp
            </a>
          </div>

          <div className="dressCode">
            <p>Código de vestimenta</p>
            <span className="dressCodeMain">Elegante</span>
            <span>
              El color <strong>blanco</strong> es solo para la novia y el color{" "}
              <strong>acero</strong> para el novio.
            </span>
            <span>Celebración solo para adultos.</span>
            <span className="dressCodeThanks">
              Con cariño, gracias por su comprensión.
            </span>
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
