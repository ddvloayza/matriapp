import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { NextResponse } from "next/server";
import { dynamo, guestsTableName, type WeddingGuest } from "@/lib/dynamodb";

export async function POST(request: Request) {
  const { dni } = await request.json().catch(() => ({ dni: "" }));
  const normalizedDni = String(dni || "").replace(/\D/g, "");

  if (!/^\d{8}$/.test(normalizedDni)) {
    return NextResponse.json(
      { message: "Ingresa un DNI válido de 8 dígitos." },
      { status: 400 }
    );
  }

  if (!guestsTableName) {
    return NextResponse.json(
      { message: "Falta configurar DYNAMODB_GUESTS_TABLE." },
      { status: 500 }
    );
  }

  const result = await dynamo.send(
    new GetCommand({
      TableName: guestsTableName,
      Key: { dni: normalizedDni }
    })
  );

  if (!result.Item) {
    return NextResponse.json(
      { message: "No encontramos ese DNI en la lista de invitados." },
      { status: 404 }
    );
  }

  const guest = result.Item as WeddingGuest;

  return NextResponse.json({
    guest: {
      dni: guest.dni,
      fullName: guest.fullName,
      maxGuests: guest.maxGuests || 1,
      phone: guest.phone || "",
      status: guest.status || "pending",
      attendance: guest.attendance || "",
      guestsCount: guest.guestsCount || 1,
      companions: guest.companions || "",
      message: guest.message || ""
    }
  });
}
