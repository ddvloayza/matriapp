import Link from "next/link";
import FloatingPayments from "../floating-payments";
import DonateLink from "./donate-link";
import { gifts } from "../gifts";

export default function RegalosPage() {
  return (
    <main className="page giftsPage">
      <nav className="nav" aria-label="Navegación principal">
        <Link className="brand" href="/">
          Julio & Jackeline
        </Link>
        <div className="navLinks">
          <Link href="/">Invitación</Link>
        </div>
      </nav>

      <section className="panel giftsPanel">
        <div className="giftHeader">
          <div>
            <p className="sectionTitle">Lista de Regalos</p>
            <p className="subtle">
              Con mucho cariño hemos preparado esta lista con cosas que nos
              encantaría tener para nuestro nuevo hogar.
            </p>
            <p className="subtle">
              Si alguno de los obsequios te gusta, puedes hacérnoslo saber para
              reservarlo.
            </p>
            <p className="subtle">
              Y si prefieres apoyarnos con un detalle en efectivo según tu
              posibilidad, también lo recibiremos con el mismo amor para poder
              elegirlo juntos a nuestro gusto y así iniciar esta nueva etapa.
            </p>
            <DonateLink />
          </div>
        </div>

        <div className="giftGrid">
          {gifts.map((gift) => (
            <div
              className={`giftCard${gift.taken ? " giftCardTaken" : ""}`}
              key={gift.name}
            >
              <span className="giftName">{gift.name}</span>

              <span
                className={`giftStatus ${gift.taken ? "giftStatusTaken" : "giftStatusAvailable"
                  }`}
              >
                <span className="giftStatusDot" aria-hidden="true" />
                {gift.taken ? "No Disponible" : "Disponible"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <FloatingPayments />
    </main>
  );
}
