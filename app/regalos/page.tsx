import Link from "next/link";
import FloatingPayments from "../floating-payments";
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
          <a
            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTd-mHNgLhn_oX4_dGEQ9VN-0y_wuPvEL69BAOeo0a0FMGG0avTUvXWyqFQ5iYiG9f810zBDIm1Oacg/pubhtml"
            target="_blank"
            rel="noreferrer"
          >
            Excel original
          </a>
        </div>
      </nav>

      <section className="panel giftsPanel">
        <div className="giftHeader">
          <div>
            <p className="sectionTitle">Lista de Regalos</p>
            <p className="subtle">
              Si desean acompañarnos con un detalle, estas son algunas ideas para
              nuestro nuevo hogar.
            </p>
          </div>
        </div>

        <div className="giftGrid">
          {gifts.map((gift) => (
            <div className="giftCard" key={gift}>
              {gift}
            </div>
          ))}
        </div>
      </section>

      <FloatingPayments />
    </main>
  );
}
