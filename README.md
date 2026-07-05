# Matriapp

Landing de boda en Next.js para Julio & Jackeline, con una vista oculta de confirmación por DNI respaldada por DynamoDB.

## Desarrollo

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

La vista pública es `/`. La confirmación queda en `/confirmar` y valida el DNI contra DynamoDB antes de mostrar el formulario.

## Variables de entorno

Copia `env.example` a `.env.local` y completa:

```bash
AWS_REGION=us-east-1
DYNAMODB_GUESTS_TABLE=WeddingGuests
```

En local puedes usar `AWS_ACCESS_KEY_ID` y `AWS_SECRET_ACCESS_KEY`. En producción es mejor usar un rol IAM del proveedor donde despliegues.

## DynamoDB

Tabla sugerida: `WeddingGuests`

Partition key:

- `dni` string

Atributos usados por la app:

- `fullName` string
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
  "dni": "12345678",
  "fullName": "Maria Perez",
  "maxGuests": 2,
  "status": "pending"
}
```
