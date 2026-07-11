import { NextResponse } from "next/server";
import { getGuestsFromSheet, guestMatches, normalize } from "@/lib/sheets";

export async function POST(request: Request) {
  const { search } = await request.json().catch(() => ({ search: "" }));
  const normalizedSearch = normalize(String(search || ""));

  if (normalizedSearch.length < 3) {
    return NextResponse.json(
      { message: "Ingresa el nombre de familia o jefe de familia." },
      { status: 400 }
    );
  }

  try {
    const guests = await getGuestsFromSheet();
    const guest = guests.find((item) => guestMatches(item, normalizedSearch));

    if (!guest) {
      return NextResponse.json(
        { message: "No encontramos ese nombre en la lista de invitados." },
        { status: 404 }
      );
    }

    return NextResponse.json({ guest });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "No pudimos leer la lista de invitados."
      },
      { status: 500 }
    );
  }
}
