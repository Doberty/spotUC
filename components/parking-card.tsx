"use client"

import { CarIcon, MapPinIcon, GraduationCapIcon } from "@phosphor-icons/react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { parkingStatusMeta, OccupancyStatus } from "@/utils/getAvailabilityStatus"


interface ParkingCardProps {
  name: string
  location: string
  facultad: string
  status: OccupancyStatus
  spotsAvailable: number
  totalSpots: number
}

export function ParkingCard({
  name,
  location,
  facultad,
  status,
  spotsAvailable,
  totalSpots,
}: ParkingCardProps) {
  const config = parkingStatusMeta[status]
  const occupancyPercentage = ((totalSpots - spotsAvailable) / totalSpots) * 100

  return (
    <Card className="border-border/50 bg-card hover:bg-card/80 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
              <CarIcon className="w-6 h-6 text-primary" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-foreground truncate">{name}</h3>

              {/* Location */}
              <div className="flex items-center gap-1 text-muted-foreground text-sm mt-0.5">
                <MapPinIcon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{location}</span>
              </div>

              {/* Facultad */}
              <div className="flex items-center gap-1 text-muted-foreground text-sm mt-0.5">
                <GraduationCapIcon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{facultad}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <div
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                config.softBgClass,
                config.textClass
              )}
            >
              <span className={cn("w-1.5 h-1.5 rounded-full", config.bgClass)} />
              {config.label}
            </div>

            <span className="text-xs text-muted-foreground">
              {spotsAvailable}/{totalSpots} espacios
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3">
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                config.bgClass
              )}
              style={{ width: `${occupancyPercentage}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}