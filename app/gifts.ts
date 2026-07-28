// Para marcar un regalo como ya obsequiado, cambia `taken: false` a `taken: true`
// y vuelve a publicar. Los demás seguirán apareciendo como "Disponible".
// `detail` es opcional: es la aclaración que se muestra en letra pequeña debajo del nombre.
export type Gift = {
  name: string;
  detail?: string;
  taken: boolean;
};

export const gifts: Gift[] = [
  { name: "Cama Queen", detail: "Cabecera + Tarima color plomo", taken: false },
  { name: "Colchón para cama Queen", detail: "Paraíso", taken: false },
  { name: "Sofá para la sala forma L", detail: "Consultar medidas", taken: false },
  { name: "Centro de Entretenimiento", detail: "Consultar medidas", taken: false },
  { name: "Mesa de comedor + sillas", detail: "6 sillas", taken: false },
  {
    name: "Refrigeradora marca LG o Samsung",
    detail: "Consultar medidas",
    taken: false
  },
  { name: 'Televisor para Sala 65" o 75" marca LG', taken: false },
  { name: "Soundbar marca LG", taken: false },
  { name: "Olla a presión marca Record o Oster", taken: false },
  {
    name: "Microondas marca LG o Samsung",
    detail: "Consultar medidas",
    taken: true
  },
  { name: "Licuadora marca Oster", detail: "Vaso de vidrio", taken: false },
  { name: "Cafetera + Waflera + Hervidor eléctrico", taken: false },
  { name: "Freidora de aire marca Oster o Imaco", taken: false },
  { name: "Juego de ollas Tramontina", taken: false },
  { name: "Ventilador + Aspiradora", taken: false },
  { name: "Arrocera 3 Kg", taken: false },
  { name: "Tetera de acero inoxidable + Juego de Tazas", taken: false },
  { name: "Plancha de ropa marca Oster + Planchador", taken: false }
];
