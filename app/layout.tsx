import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boda Julio & Jackeline",
  description:
    "Invitación de boda de Julio Isaac y Jackeline Haydee. Detalles de ceremonia, recepción y regalos."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Cormorant+Garamond:wght@300;400;600&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
