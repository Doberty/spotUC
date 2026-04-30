"use client"

import { Car, DoorOpen, Info } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

type View = "parking" | "entrances" | "info"

interface BottomNavProps {
  activeView: View
  onViewChange: (view: View) => void
}

const navItems = [
  {
    id: "parking" as const,
    label: "Estacionamientos",
    icon: Car,
  },
  {
    id: "entrances" as const,
    label: "Entradas",
    icon: DoorOpen,
  },
  {
    id: "info" as const,
    label: "Información",
    icon: Info,
  },
]

export function BottomNav({ activeView, onViewChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-area-pb">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeView === item.id
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive && "scale-110 transition-transform")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
