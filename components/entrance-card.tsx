"use client"

import { DoorOpen, MapPin, Clock } from "@phosphor-icons/react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type EntranceStatus = "open" | "closed" | "restricted"

interface EntranceCardProps {
  name: string
  location: string
  status: EntranceStatus
  schedule?: string
}

const statusConfig = {
  open: {
    label: "Abierta",
    bgColor: "bg-status-low/10",
    textColor: "text-status-low",
    dotColor: "bg-status-low",
  },
  closed: {
    label: "Cerrada",
    bgColor: "bg-status-heavy/10",
    textColor: "text-status-heavy",
    dotColor: "bg-status-heavy",
  },
  restricted: {
    label: "Restringida",
    bgColor: "bg-status-moderate/10",
    textColor: "text-status-moderate",
    dotColor: "bg-status-moderate",
  },
}

export function EntranceCard({
  name,
  location,
  status,
  schedule,
}: EntranceCardProps) {
  const config = statusConfig[status]

  return (
    <Card className="border-border/50 bg-card hover:bg-card/80 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
              <DoorOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-foreground truncate">{name}</h3>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mt-0.5">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>
          
          <div className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0", config.bgColor, config.textColor)}>
            <span className={cn("w-1.5 h-1.5 rounded-full", config.dotColor)} />
            {config.label}
          </div>
        </div>
        
        {schedule && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>{schedule}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
