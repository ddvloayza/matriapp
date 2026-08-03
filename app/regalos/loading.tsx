import Link from "next/link";

export default function LoadingRegalos() {
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
          </div>
        </div>

        <div className="giftsLoading" role="status" aria-live="polite">
          <span className="giftsSpinner" aria-hidden="true" />
          <p>Cargando lista de regalos…</p>
        </div>
      </section>
    </main>
  );
}
