import { NextResponse } from "next/server";
import { rsvpWebhookUrl } from "@/lib/sheets";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const guestId = String(body?.guestId || "").trim();
  const fullName = String(body?.fullName || "").trim();
  const attendance = body?.attendance === "no" ? "no" : "yes";
  const guestsCount = Number(body?.guestsCount || 1);
  const phone = String(body?.phone || "").trim();
  const companions = String(body?.companions || "").trim();
  const message = String(body?.message || "").trim();

  if (!guestId || !fullName) {
    return NextResponse.json(
      { message: "Falta identificar la invitación." },
      { status: 400 }
    );
  }

  if (!Number.isInteger(guestsCount) || guestsCount < 1 || guestsCount > 10) {
    return NextResponse.json(
      { message: "La cantidad de asistentes no es válida." },
      { status: 400 }
    );
  }

  if (!rsvpWebhookUrl) {
    return NextResponse.json(
      { message: "Falta configurar GOOGLE_SHEETS_RSVP_WEBHOOK_URL." },
      { status: 500 }
    );
  }

  const response = await fetch(rsvpWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      guestId,
      fullName,
      attendance,
      guestsCount,
      phone,
      companions,
      message,
      updatedAt: new Date().toISOString()
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "No pudimos guardar la confirmación en Google Sheets." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
