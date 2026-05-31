"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Polygon, Popup, useMap } from "react-leaflet"
import type { LatLngExpression } from "leaflet"
import { parkingZones } from "@/data/parking-zones"
import { getAvailabilityStatus, parkingStatusMeta } from "@/utils/getAvailabilityStatus"

const CAMPUS_CENTER: LatLngExpression = [-33.4989, -70.6133]
const DEFAULT_ZOOM = 17

function MapController() {
  const map = useMap()
  
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize()
    }, 100)
  }, [map])
  
  return null
}

interface ParkingLotMapProps {
  selectedZone: string | null
  onSelectZone: (id: string) => void
}
 

export function ParkingLotMap({
  selectedZone,
  onSelectZone
}: ParkingLotMapProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const totalAvailable = parkingZones.reduce((sum, z) => sum + z.availableSpots, 0)
  const totalSpots = parkingZones.reduce((sum, z) => sum + z.totalSpots, 0)

  if (!isClient) {
    return (
      <div className="flex h-[600px] items-center justify-center rounded-lg border bg-muted">
        <p className="text-muted-foreground">Cargando mapa...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">

      {/* Map Container */}
      <div className="overflow-hidden rounded-lg border">
        <MapContainer
          key = "parking-map"
          center={CAMPUS_CENTER}
          zoom={DEFAULT_ZOOM}
          style={{ height: "500px", width: "100%" }}
          scrollWheelZoom={true}
        >
          <MapController />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {parkingZones.map((zone) => {
            const occupancy = getAvailabilityStatus(
              zone.availableSpots,
              zone.totalSpots
            )
            const status = parkingStatusMeta[occupancy]
            return (
              <Polygon
                key={zone.id}
                positions={zone.coordinates}
                pathOptions={{
                  color: status.color,
                  fillColor: status.color,
                  fillOpacity: selectedZone === zone.id ? 0.6 : 0.4,
                  weight: selectedZone === zone.id ? 3 : 2,
                }}
                eventHandlers={{
                  click: () => onSelectZone(zone.id),
                  mouseover: (e) => {
                    e.target.setStyle({ fillOpacity: 0.6 })
                  },
                  mouseout: (e) => {
                    if (selectedZone !== zone.id) {
                      e.target.setStyle({ fillOpacity: 0.4 })
                    }
                  },
                }}
              >
                <Popup>
                  <div className="min-w-[180px]">
                    <h3 className="font-semibold">{zone.name}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`inline-block h-2 w-2 rounded-full ${status.className}`} />
                      <span className="text-sm">{status.label}</span>
                    </div>
                    <p className="mt-1 text-sm">
                      <span className="font-medium">{zone.availableSpots}</span> de{" "}
                      <span className="font-medium">{zone.totalSpots}</span> espacios disponibles
                    </p>
                  </div>
                </Popup>
              </Polygon>
            )
          })}
        </MapContainer>
      </div>

    </div>
  )
}
