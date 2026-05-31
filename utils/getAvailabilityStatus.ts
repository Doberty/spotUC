export type OccupancyStatus =
  | "low"
  | "moderate"
  | "heavy"

export function getAvailabilityStatus(    
  available: number,
  total: number
): OccupancyStatus {
  const ratio = available / total

  if (ratio > 0.5) return "low"
  if (ratio > 0.2) return "moderate"

  return "heavy"
}

export const parkingStatusMeta = {
  // color -> mapa
  // bgClass, textClass, softBgClass -> clases UI
  low: {
    label: "Disponible",
    className: "bg-status-low",
    color: "#50c148",
    bgClass: "bg-status-low",
    textClass: "text-status-low",
    softBgClass: "bg-status-low/10",
  },

  moderate: {
    label: "Moderado",
    className: "bg-status-moderate",
    color: "#fbc700",
    bgClass: "bg-status-moderate",
    textClass: "text-status-moderate",
    softBgClass: "bg-status-moderate/10",
},

heavy: {
    label: "Lleno",
    className: "bg-status-heavy",
    color: "#f9291e",
    bgClass: "bg-status-heavy",
    textClass: "text-status-heavy",
    softBgClass: "bg-status-heavy/10",
  },
} as const