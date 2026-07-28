// Para marcar un regalo como ya obsequiado, cambia `taken: false` a `taken: true`
// y vuelve a publicar. Los demás seguirán apareciendo como "Disponible".
export type Gift = {
  name: string;
  taken: boolean;
};

export const gifts: Gift[] = [
  { name: "Cama Queen", taken: false },
  { name: "Colchón para cama Queen", taken: false },
  { name: "Sofá / sillón sala", taken: false },
  { name: "Mesa de comedor + sillas (4 sillas)", taken: false },
  { name: "2 Mesas de noche", taken: false },
  { name: "Sábanas + almohadas + frazada (Cama Queen)", taken: false },
  { name: "Refrigeradora", taken: false },
  { name: "Microondas", taken: true },
  { name: "Licuadora", taken: false },
  { name: "Hervidor eléctrico", taken: false },
  { name: "Plancha de ropa + Planchador", taken: false },
  { name: "Cafetera", taken: false },
  { name: "Freidora de aire", taken: false },
  { name: "Arrocera", taken: false },
  { name: "Aspiradora", taken: false },
  { name: "Waflera", taken: false },
  { name: "Ventilador", taken: false },
  { name: "Soundbar", taken: false },
  { name: "Batidora", taken: false },
  { name: "Aspiradora de mano", taken: false },
  { name: "Vajilla + cubiertos + vasos", taken: false },
  { name: "Juego de ollas + sartén", taken: false },
  { name: "Toallas (set completo) Colores Claros", taken: false },
  { name: "Juegos de Copas", taken: false },
  { name: "Organizadores (Para Closet, Baño)", taken: false },
  { name: "Juego de Cuchillos + Tabla de Picar", taken: false },
  { name: "Tetera de aluminio + Juego de Tazas", taken: false }
];
