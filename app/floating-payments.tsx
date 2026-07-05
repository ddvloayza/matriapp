"use client";

import { useState } from "react";

type Payment = {
  label: string;
  account: string;
  cci?: string;
  name: string;
};

const payments: Payment[] = [
  { label: "Yape", account: "980 131 532", name: "Jackeline Gonzales" },
  { label: "Plin", account: "951 223 994", name: "Julio Martinez" },
  {
    label: "Interbank",
    account: "0413285023634",
    cci: "00304101328502363411",
    name: "Julio Martinez"
  },
  {
    label: "BBVA",
    account: "0011-0814-0265334453",
    cci: "01181400026533445317",
    name: "Julio Martinez"
  },
  {
    label: "BCP",
    account: "19139796502085",
    cci: "00219113979650208551",
    name: "Jackeline Gonzales"
  }
];

export default function FloatingPayments() {
  const [copied, setCopied] = useState("");

  async function copyText(value: string, label: string) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = document.createElement("textarea");
        input.value = value;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }

      setCopied(`${label} copiado`);
      window.setTimeout(() => setCopied(""), 2200);
    } catch {
      setCopied("No se pudo copiar");
      window.setTimeout(() => setCopied(""), 2200);
    }
  }

  return (
    <aside className="floatingPayments" aria-label="Medios de pago">
      <div className="floatingPaymentsTitle">
        <span>Yape, Plin y cuentas</span>
        {copied ? <strong role="status">{copied}</strong> : null}
      </div>
      <div className="floatingPaymentsTrack">
        {payments.map((payment) => (
          <PaymentCard key={payment.label} payment={payment} copyText={copyText} />
        ))}
      </div>
    </aside>
  );
}

function PaymentCard({
  payment,
  copyText
}: {
  payment: Payment;
  copyText: (value: string, label: string) => void;
}) {
  if (!payment.cci) {
    return (
      <button
        className="paymentCard paymentCardButton"
        type="button"
        onClick={() => copyText(payment.account.replace(/\s/g, ""), payment.label)}
        aria-label={`Copiar número de ${payment.label}`}
      >
        <span>
          {payment.label}
          <i aria-hidden="true">⧉</i>
        </span>
        <strong>{payment.account}</strong>
        <small>{payment.name}</small>
      </button>
    );
  }

  return (
    <div className="paymentCard">
      <span>{payment.label}</span>
      <strong>{payment.account}</strong>
      <em>CCI: {payment.cci}</em>
      <small>{payment.name}</small>
      <div className="paymentActions">
        <button type="button" onClick={() => copyText(payment.account, `${payment.label} cuenta`)}>
          Cuenta <i aria-hidden="true">⧉</i>
        </button>
        <button type="button" onClick={() => copyText(payment.cci || "", `${payment.label} CCI`)}>
          CCI <i aria-hidden="true">⧉</i>
        </button>
      </div>
    </div>
  );
}
