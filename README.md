# Matriapp

Landing de boda en Next.js para Julio & Jackeline, con una vista de confirmación por familia respaldada por Google Sheets.

## Desarrollo

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

La vista pública es `/`. La confirmación queda en `/confirmar` y valida el nombre de familia o jefe de familia contra Google Sheets antes de mostrar el formulario.

## Variables de entorno

Copia `env.example` a `.env.local` y completa:

```bash
GOOGLE_SHEETS_GUESTS_CSV_URL=https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/export?format=csv&gid=0
GOOGLE_SHEETS_GIFTS_API_URL=https://script.google.com/macros/s/AKfycbzSyqCQqzMAOeNASjDR30XfARkPSmsn8n-LJ2SpmBzCvjV2qd7VifDXWIOE3hpWxGOWDg/exec
GOOGLE_SHEETS_RSVP_WEBHOOK_URL=https://script.google.com/macros/s/APPS_SCRIPT_DEPLOYMENT_ID/exec
```

`GOOGLE_SHEETS_GUESTS_CSV_URL` debe apuntar a la pestaña pública de invitados en formato CSV. `GOOGLE_SHEETS_GIFTS_API_URL` debe apuntar a un Apps Script publicado como web app para leer regalos sin hacer publica la hoja. La hoja de regalos acepta las columnas `Regalo`, `Detalle`, `Estado` y `Separado por`; cuando `Estado` sea `Separado`, el regalo se muestra tachado y aparece el nombre de la persona. `GOOGLE_SHEETS_RSVP_WEBHOOK_URL` debe apuntar a un Apps Script publicado como web app para registrar confirmaciones.

El Apps Script de regalos debe ejecutarse como `Yo` y permitir acceso a `Cualquier persona`. Eso no hace publico el archivo completo; solo expone los datos que devuelve el script.

## Google Sheets

Pestaña sugerida para invitados:

Columnas usadas por la app:

- `guestId` string
- `fullName` string
- `familyName` string
- `headName` string
- `maxGuests` number
- `phone` string opcional
- `status` string
- `attendance` string
- `guestsCount` number
- `companions` string
- `message` string
- `updatedAt` string

Ejemplo de item:

```json
{
  "guestId": "1",
  "fullName": "Familia Martinez",
  "familyName": "Martinez",
  "headName": "Julio Martinez",
  "maxGuests": 2,
  "status": "pending"
}
```
