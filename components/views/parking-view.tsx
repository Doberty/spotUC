"use client"

import { ParkingCard, type OccupancyStatus } from "@/components/parking-card"

interface ParkingLot {
  id: string
  name: string
  location: string
  status: OccupancyStatus
  spotsAvailable: number
  totalSpots: number
}

const parkingLots: ParkingLot[] = [
  {
    id: "1",
    name: "Estacionamiento Norte",
    location: "Edificio de Ingeniería",
    status: "low",
    spotsAvailable: 45,
    totalSpots: 60,
  },
  {
    id: "2",
    name: "Estacionamiento Central",
    location: "Biblioteca Central",
    status: "moderate",
    spotsAvailable: 12,
    totalSpots: 40,
  },
  {
    id: "3",
    name: "Estacionamiento Sur",
    location: "Facultad de Medicina",
    status: "heavy",
    spotsAvailable: 3,
    totalSpots: 50,
  },
  {
    id: "4",
    name: "Estacionamiento Deportivo",
    location: "Gimnasio Universitario",
    status: "low",
    spotsAvailable: 28,
    totalSpots: 35,
  },
  {
    id: "5",
    name: "Estacionamiento Docentes",
    location: "Rectoría",
    status: "moderate",
    spotsAvailable: 8,
    totalSpots: 25,
  },
  {
    id: "6",
    name: "Estacionamiento Visitantes",
    location: "Entrada Principal",
    status: "heavy",
    spotsAvailable: 2,
    totalSpots: 30,
  },
]

export function ParkingView() {
  const availableCount = parkingLots.reduce((acc, lot) => acc + lot.spotsAvailable, 0)
  const totalCount = parkingLots.reduce((acc, lot) => acc + lot.totalSpots, 0)

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="bg-card rounded-xl p-4 border border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Espacios disponibles</p>
            <p className="text-2xl font-bold text-foreground">
              {availableCount} <span className="text-sm font-normal text-muted-foreground">/ {totalCount}</span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-status-low" />
              <span className="text-muted-foreground">Disponible</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-status-moderate" />
              <span className="text-muted-foreground">Moderado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-status-heavy" />
              <span className="text-muted-foreground">Lleno</span>
            </div>
          </div>
        </div>
      </div>

      {/* Parking list */}
      <div className="space-y-3">
        {parkingLots.map((lot) => (
          <ParkingCard
            key={lot.id}
            name={lot.name}
            location={lot.location}
            status={lot.status}
            spotsAvailable={lot.spotsAvailable}
            totalSpots={lot.totalSpots}
          />
        ))}
      </div>
    </div>
  )
}
