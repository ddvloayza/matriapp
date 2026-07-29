import Link from "next/link";
import FloatingPayments from "../floating-payments";
import DonateLink from "./donate-link";
import { getGiftsFromSheet, type SheetGift } from "@/lib/sheets";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RegalosPage() {
  // La hoja de Google Sheets es la única fuente de la lista de regalos.
  let listedGifts: SheetGift[] = [];
  let sheetWarning = "";

  try {
    listedGifts = await getGiftsFromSheet();
  } catch (error) {
    sheetWarning =
      error instanceof Error
        ? error.message
        : "No pudimos leer la lista de regalos de Google Sheets.";
  }

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
            <div className="giftNote" role="note">
              <span className="giftNoteIcon" aria-hidden="true">✦</span>
              <p>
                ¿Elegiste uno de la lista?{" "}
                <a
                  className="giftNoteLink"
                  href="https://wa.me/51951223994?text=%C2%A1Hola!%20Quisiera%20reservar%20un%20regalo%20de%20la%20lista%20de%20Julio%20y%20Jackeline%20%F0%9F%8E%81"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Avísanos por WhatsApp
                </a>{" "}
                para reservarlo a tu nombre y así evitamos que se repita.
              </p>
            </div>
            <p className="subtle">
              Y si prefieres apoyarnos con un detalle en efectivo según tu
              posibilidad, también lo recibiremos con el mismo amor para poder
              elegirlo juntos a nuestro gusto y así iniciar esta nueva etapa.
            </p>
            <DonateLink />
            {sheetWarning ? (
              <p className="sheetWarning" role="status">
                {sheetWarning}
              </p>
            ) : null}
          </div>
        </div>

        {listedGifts.length === 0 ? (
          <p className="giftsEmpty" role="status">
            La lista de regalos no está disponible en este momento. Vuelve a
            intentarlo en unos minutos.
          </p>
        ) : (
        <div className="giftGrid">
          {listedGifts.map((gift) => (
            <div
              className={`giftCard${gift.taken ? " giftCardTaken" : ""}`}
              key={gift.name}
            >
              <span className="giftName">
                <span className="giftNameText">{gift.name}</span>
                {gift.detail ? (
                  <small className="giftDetail">{gift.detail}</small>
                ) : null}
                {gift.taken && gift.reservedBy ? (
                  <small className="giftReservedBy">Separado por: {gift.reservedBy}</small>
                ) : null}
              </span>

              <span
                className={`giftStatus ${gift.taken ? "giftStatusTaken" : "giftStatusAvailable"
                  }`}
              >
                <span className="giftStatusDot" aria-hidden="true" />
                {gift.taken ? "Separado" : "Disponible"}
              </span>
            </div>
          ))}
        </div>
        )}
      </section>

      <FloatingPayments />
    </main>
  );
}
