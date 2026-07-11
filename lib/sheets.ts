export type SheetGuest = {
  guestId: string;
  fullName: string;
  familyName: string;
  headName: string;
  maxGuests: number;
  phone: string;
  status: string;
  attendance: string;
  guestsCount: number;
  companions: string;
  message: string;
};

const guestsCsvUrl = process.env.GOOGLE_SHEETS_GUESTS_CSV_URL || "";
export const rsvpWebhookUrl = process.env.GOOGLE_SHEETS_RSVP_WEBHOOK_URL || "";

export function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function parseCsv(csv: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < csv.length; index += 1) {
    const char = csv[index];
    const next = csv[index + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      row.push(value);
      value = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
      continue;
    }

    value += char;
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  return rows.filter((currentRow) => currentRow.some((cell) => cell.trim()));
}

function getCell(record: Record<string, string>, keys: string[]) {
  const normalizedRecord = Object.fromEntries(
    Object.entries(record).map(([key, value]) => [normalize(key), value])
  );

  for (const key of keys) {
    const value = normalizedRecord[normalize(key)];
    if (value !== undefined) return value.trim();
  }

  return "";
}

export async function getGuestsFromSheet() {
  if (!guestsCsvUrl) {
    throw new Error("Falta configurar GOOGLE_SHEETS_GUESTS_CSV_URL.");
  }

  const response = await fetch(guestsCsvUrl, { next: { revalidate: 30 } });

  if (!response.ok) {
    throw new Error("No pudimos leer la lista de invitados de Google Sheets.");
  }

  const rows = parseCsv(await response.text());
  const [headers = [], ...body] = rows;

  return body.map((row, index) => {
    const record = Object.fromEntries(headers.map((header, cellIndex) => [header, row[cellIndex] || ""]));
    const fullName = getCell(record, ["fullName", "nombre", "invitacion", "familia"]);
    const familyName = getCell(record, ["familyName", "familia", "apellidoFamilia"]);
    const headName = getCell(record, ["headName", "jefeFamilia", "jefe de familia", "representante"]);

    return {
      guestId: getCell(record, ["guestId", "id", "codigo"]) || String(index + 1),
      fullName,
      familyName,
      headName,
      maxGuests: Number(getCell(record, ["maxGuests", "maxInvitados", "cantidad", "cupos"]) || 1),
      phone: getCell(record, ["phone", "telefono", "celular"]),
      status: getCell(record, ["status", "estado"]) || "pending",
      attendance: getCell(record, ["attendance", "asistencia"]),
      guestsCount: Number(getCell(record, ["guestsCount", "cantidadConfirmada"]) || 1),
      companions: getCell(record, ["companions", "acompanantes", "acompañantes"]),
      message: getCell(record, ["message", "mensaje"])
    };
  });
}

export function guestMatches(guest: SheetGuest, query: string) {
  const candidates = [
    guest.familyName,
    guest.headName,
    guest.fullName,
    guest.familyName ? `familia ${guest.familyName}` : ""
  ].filter(Boolean);

  return candidates.some((candidate) => normalize(String(candidate)) === query);
}
