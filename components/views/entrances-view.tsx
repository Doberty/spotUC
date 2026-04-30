"use client"

import { EntranceCard, type EntranceStatus } from "@/components/entrance-card"

interface Entrance {
  id: string
  name: string
  location: string
  status: EntranceStatus
  schedule?: string
}

const entrances: Entrance[] = [
  {
    id: "1",
    name: "Entrada Principal",
    location: "Av. Universidad 1000",
    status: "open",
    schedule: "Lun-Vie 6:00 - 22:00",
  },
  {
    id: "2",
    name: "Entrada Norte",
    location: "Calle Norte 500",
    status: "open",
    schedule: "Lun-Vie 7:00 - 20:00",
  },
  {
    id: "3",
    name: "Entrada Sur",
    location: "Av. Sur 200",
    status: "restricted",
    schedule: "Solo personal autorizado",
  },
  {
    id: "4",
    name: "Entrada Deportiva",
    location: "Complejo Deportivo",
    status: "open",
    schedule: "Lun-Dom 6:00 - 21:00",
  },
  {
    id: "5",
    name: "Entrada de Servicio",
    location: "Zona de Carga",
    status: "closed",
    schedule: "En mantenimiento",
  },
  {
    id: "6",
    name: "Entrada Peatonal Este",
    location: "Jardín Botánico",
    status: "open",
    schedule: "Lun-Vie 7:00 - 19:00",
  },
]

export function EntrancesView() {
  const openCount = entrances.filter((e) => e.status === "open").length
  const closedCount = entrances.filter((e) => e.status === "closed").length
  const restrictedCount = entrances.filter((e) => e.status === "restricted").length

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="bg-card rounded-xl p-4 border border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Estado de entradas</p>
            <p className="text-2xl font-bold text-foreground">
              {openCount} <span className="text-sm font-normal text-muted-foreground">abiertas</span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-status-low" />
              <span className="text-muted-foreground">Abierta ({openCount})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-status-moderate" />
              <span className="text-muted-foreground">Restringida ({restrictedCount})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-status-heavy" />
              <span className="text-muted-foreground">Cerrada ({closedCount})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Entrances list */}
      <div className="space-y-3">
        {entrances.map((entrance) => (
          <EntranceCard
            key={entrance.id}
            name={entrance.name}
            location={entrance.location}
            status={entrance.status}
            schedule={entrance.schedule}
          />
        ))}
      </div>
    </div>
  )
}
