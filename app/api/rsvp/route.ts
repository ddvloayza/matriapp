import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { NextResponse } from "next/server";
import { dynamo, guestsTableName } from "@/lib/dynamodb";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const dni = String(body?.dni || "").replace(/\D/g, "");
  const attendance = body?.attendance === "no" ? "no" : "yes";
  const guestsCount = Number(body?.guestsCount || 1);
  const phone = String(body?.phone || "").trim();
  const companions = String(body?.companions || "").trim();
  const message = String(body?.message || "").trim();

  if (!/^\d{8}$/.test(dni)) {
    return NextResponse.json({ message: "DNI inválido." }, { status: 400 });
  }

  if (!Number.isInteger(guestsCount) || guestsCount < 1 || guestsCount > 10) {
    return NextResponse.json(
      { message: "La cantidad de asistentes no es válida." },
      { status: 400 }
    );
  }

  if (!guestsTableName) {
    return NextResponse.json(
      { message: "Falta configurar DYNAMODB_GUESTS_TABLE." },
      { status: 500 }
    );
  }

  try {
    await dynamo.send(
      new UpdateCommand({
        TableName: guestsTableName,
        Key: { dni },
        ConditionExpression:
          "attribute_exists(dni) AND (attribute_not_exists(maxGuests) OR maxGuests >= :guestsCount)",
        UpdateExpression:
          "SET attendance = :attendance, guestsCount = :guestsCount, phone = :phone, companions = :companions, message = :message, #status = :status, updatedAt = :updatedAt",
        ExpressionAttributeNames: {
          "#status": "status"
        },
        ExpressionAttributeValues: {
          ":attendance": attendance,
          ":guestsCount": guestsCount,
          ":phone": phone,
          ":companions": companions,
          ":message": message,
          ":status": attendance === "yes" ? "confirmed" : "declined",
          ":updatedAt": new Date().toISOString()
        }
      })
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "No pudimos guardar la confirmación para ese DNI o la cantidad excede la invitación." },
      { status: 404 }
    );
  }
}
