"use client";

export default function DonateLink() {
  return (
    <button
      type="button"
      className="donateLink"
      onClick={() => window.dispatchEvent(new CustomEvent("open-donations"))}
    >
      Ver cuentas para tu detalle
      <span aria-hidden="true">→</span>
    </button>
  );
}
