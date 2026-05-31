"use client"

import { ParkingCard } from "@/components/parking-card"
import { parkingZones } from "@/data/parking-zones"
import dynamic from "next/dynamic"
import { useState } from "react"
import { getAvailabilityStatus, parkingStatusMeta } from "@/utils/getAvailabilityStatus"

const ParkingLotMap = dynamic(
  () =>
    import("@/components/parking-lot-map").then(
      (mod) => mod.ParkingLotMap
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] rounded-xl border bg-card flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Cargando mapa...
        </p>
      </div>
    ),
  }
)

export function ParkingView() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)
  const availableCount = parkingZones.reduce((acc, lot) => acc + lot.availableSpots, 0)
  const totalCount = parkingZones.reduce((acc, lot) => acc + lot.totalSpots, 0)

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="bg-card rounded-xl p-4 border border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Campus San Joaquín</h2>
            <p className="text-sm text-muted-foreground">Espacios disponibles</p>
            <p className="text-2xl font-bold text-foreground">
              {availableCount} <span className="text-sm font-normal text-muted-foreground">/ {totalCount}</span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            {Object.entries(parkingStatusMeta).map(
              ([key, meta]) => (
                <div
                  key={key}
                  className="flex items-center gap-1.5"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${meta.bgClass}`}
                  />
                  <span className="text-muted-foreground">
                    {meta.label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <ParkingLotMap 
        selectedZone={selectedZone}
        onSelectZone={setSelectedZone}
      />

      {/* Parking list */}
      <div className="space-y-3">
        {parkingZones.map((lot) => (
          <div
            key={lot.id}
            onClick={() => setSelectedZone(lot.id)}
            className={`cursor-pointer transition ${
              selectedZone === lot.id
                ? "ring-2 ring-primary"
                : ""
            }`}
          >
            <ParkingCard
              name={lot.name}
              facultad={lot.facultad}
              location={lot.location}
              status={getAvailabilityStatus(
                lot.availableSpots,
                lot.totalSpots
              )}
              spotsAvailable={lot.availableSpots}
              totalSpots={lot.totalSpots}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
