// Para marcar un regalo como ya obsequiado, cambia `taken: false` a `taken: true`
// y vuelve a publicar. Los demás seguirán apareciendo como "Disponible".
// `detail` es opcional: es la aclaración que se muestra en letra pequeña debajo del nombre.
export type Gift = {
  name: string;
  detail?: string;
  taken: boolean;
  reservedBy?: string;
};

export const gifts: Gift[] = [
  { name: "Cama Queen", detail: "Cabecera + Tarima color plomo", taken: false },
  { name: "Colchón para cama Queen", detail: "Paraíso", taken: true },
  { name: "Sofá para la sala forma L", detail: "Consultar medidas", taken: false },
  { name: "Centro de Entretenimiento", detail: "Consultar medidas", taken: false },
  { name: "Mesa de comedor + sillas", detail: "6 sillas", taken: true },
  {
    name: "Refrigeradora marca LG o Samsung",
    detail: "Consultar medidas",
    taken: false
  },
  { name: 'Televisor para Sala 65" o 75" marca LG', taken: true },
  { name: "Soundbar marca LG", taken: false },
  { name: "Terma a Gas marca Sole", taken: false },
  { name: "Olla a presión marca Record o Oster", taken: false },
  {
    name: "Microondas marca LG o Samsung",
    detail: "Consultar medidas",
    taken: false
  },
  { name: "Licuadora marca Oster", detail: "Vaso de vidrio", taken: false },
  { name: "Cafetera + Waflera + Hervidor eléctrico", taken: false },
  { name: "Freidora de aire marca Oster o Imaco", taken: true },
  { name: "Juego de ollas Tramontina", taken: false },
  { name: "Juego de Sartenes de Teflón", taken: false },
  { name: "Ventilador + Aspiradora", taken: false },
  { name: "Arrocera 3 Kg + Batidora", taken: false },
  { name: "Tetera de acero inoxidable + Juego de Tazas", taken: false },
  { name: "Plancha de ropa marca Oster + Planchador", taken: false },
  { name: "Juego de Cuchillos de Acero Inoxidable marca Tramontina", taken: false },
  { name: "Juego de Cubiertos marca Tramontina", taken: false },
  { name: "Toallas", detail: "Set completo · Colores claros", taken: false },
  { name: "Juego de Copas para vino y champán", taken: false },
  {
    name: "Organizadores de Bambú",
    detail: "Para clóset, baño y dormitorio",
    taken: false
  },
  { name: "2 Mesas de noche o veladores", taken: false },
  {
    name: "Juego de Sábanas + cubrecama para Cama Queen",
    detail: "Colores claros",
    taken: false
  },
  { name: "Mesa de Centro para Sala", detail: "Consultar medidas", taken: false }
];
