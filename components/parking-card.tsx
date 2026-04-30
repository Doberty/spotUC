"use client"

import { CarIcon, MapPinIcon } from "@phosphor-icons/react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type OccupancyStatus = "low" | "moderate" | "heavy"

interface ParkingCardProps {
  name: string
  location: string
  status: OccupancyStatus
  spotsAvailable: number
  totalSpots: number
}

const statusConfig = {
  low: {
    label: "Disponible",
    bgColor: "bg-status-low/10",
    textColor: "text-status-low",
    dotColor: "bg-status-low",
  },
  moderate: {
    label: "Moderado",
    bgColor: "bg-status-moderate/10",
    textColor: "text-status-moderate",
    dotColor: "bg-status-moderate",
  },
  heavy: {
    label: "Lleno",
    bgColor: "bg-status-heavy/10",
    textColor: "text-status-heavy",
    dotColor: "bg-status-heavy",
  },
}

export function ParkingCard({
  name,
  location,
  status,
  spotsAvailable,
  totalSpots,
}: ParkingCardProps) {
  const config = statusConfig[status]
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
              <div className="flex items-center gap-1 text-muted-foreground text-sm mt-0.5">
                <MapPinIcon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2 shrink-0">
            <div className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", config.bgColor, config.textColor)}>
              <span className={cn("w-1.5 h-1.5 rounded-full", config.dotColor)} />
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
              className={cn("h-full rounded-full transition-all duration-500", config.dotColor)}
              style={{ width: `${occupancyPercentage}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
