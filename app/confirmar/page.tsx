"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type Guest = {
  dni: string;
  fullName: string;
  maxGuests: number;
  phone: string;
  attendance: string;
  guestsCount: number;
  companions: string;
  message: string;
};

export default function ConfirmarPage() {
  const [dni, setDni] = useState("");
  const [guest, setGuest] = useState<Guest | null>(null);
  const [attendance, setAttendance] = useState("yes");
  const [guestsCount, setGuestsCount] = useState(1);
  const [phone, setPhone] = useState("");
  const [companions, setCompanions] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);

  async function findGuest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setNotice("");

    const response = await fetch("/api/guest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dni })
    });
    const data = await response.json();
    setLoading(false);

    if (!response.ok) {
      setGuest(null);
      setNotice(data.message || "No pudimos validar el DNI.");
      return;
    }

    setGuest(data.guest);
    setAttendance(data.guest.attendance || "yes");
    setGuestsCount(data.guest.guestsCount || 1);
    setPhone(data.guest.phone || "");
    setCompanions(data.guest.companions || "");
    setMessage(data.guest.message || "");
  }

  async function submitRsvp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!guest) return;

    setLoading(true);
    setNotice("");

    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dni: guest.dni,
        attendance,
        guestsCount,
        phone,
        companions,
        message
      })
    });
    const data = await response.json().catch(() => ({}));
    setLoading(false);

    if (!response.ok) {
      setNotice(data.message || "No pudimos guardar tu confirmación.");
      return;
    }

    setNotice("Gracias. Tu confirmación fue registrada correctamente.");
  }

  return (
    <main className="page privatePage">
      <nav className="nav">
        <Link className="brand" href="/">
          Julio & Jackeline
        </Link>
      </nav>

      <section className="privateShell">
        <article className="panel privatePanel">
          <p className="sectionTitle">Confirmar Asistencia</p>
          <p className="subtle">
            Ingresa tu DNI para acceder a tu invitación registrada y confirmar tu respuesta.
          </p>

          {!guest ? (
            <form className="form" onSubmit={findGuest}>
              <label>
                DNI
                <input
                  inputMode="numeric"
                  maxLength={8}
                  pattern="[0-9]{8}"
                  placeholder="Ingresa 8 dígitos"
                  required
                  value={dni}
                  onChange={(event) => setDni(event.target.value.replace(/\D/g, ""))}
                />
              </label>
              <button className="button primary" disabled={loading} type="submit">
                {loading ? "Validando..." : "Ingresar"}
              </button>
            </form>
          ) : (
            <form className="form" onSubmit={submitRsvp}>
              <div className="guestWelcome">
                <span>Invitación para</span>
                <strong>{guest.fullName}</strong>
              </div>

              <label>
                Asistencia
                <select value={attendance} onChange={(event) => setAttendance(event.target.value)}>
                  <option value="yes">Sí asistiré</option>
                  <option value="no">No podré asistir</option>
                </select>
              </label>

              <label>
                Cantidad de asistentes
                <input
                  type="number"
                  min={1}
                  max={guest.maxGuests || 1}
                  value={guestsCount}
                  onChange={(event) => setGuestsCount(Number(event.target.value))}
                />
                <small>Máximo registrado: {guest.maxGuests || 1}</small>
              </label>

              <label>
                Celular
                <input
                  inputMode="tel"
                  placeholder="Opcional"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </label>

              <label>
                Nombres de acompañantes
                <textarea
                  placeholder="Opcional"
                  value={companions}
                  onChange={(event) => setCompanions(event.target.value)}
                />
              </label>

              <label>
                Mensaje para los novios
                <textarea
                  placeholder="Opcional"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </label>

              <button className="button primary" disabled={loading} type="submit">
                {loading ? "Guardando..." : "Guardar confirmación"}
              </button>
              <button className="button" type="button" onClick={() => setGuest(null)}>
                Usar otro DNI
              </button>
            </form>
          )}

          {notice ? <p className="notice">{notice}</p> : null}
        </article>
      </section>
    </main>
  );
}
