"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { BottomNav } from "@/components/bottom-nav"
import { ParkingView } from "@/components/views/parking-view"
import { EntrancesView } from "@/components/views/entrances-view"
import { InfoView } from "@/components/views/info-view"

type View = "parking" | "entrances" | "info"

const viewConfig = {
  parking: {
    title: "SpotUC",
    subtitle: "Estacionamientos en tiempo real",
    component: ParkingView,
  },
  entrances: {
    title: "Entradas",
    subtitle: "Accesos al campus",
    component: EntrancesView,
  },
  info: {
    title: "Información",
    subtitle: "Todo lo que necesitas saber",
    component: InfoView,
  },
}

export default function HomePage() {
  const [activeView, setActiveView] = useState<View>("parking")

  const currentView = viewConfig[activeView]
  const ViewComponent = currentView.component

  return (
    <div className="h-screen bg-background overflow-hidden">
      {/* Header */}
      <AppHeader 
        title={currentView.title} 
        subtitle={currentView.subtitle} 
      />

      {/* Contenido scrolleable */}
      <main className="h-[calc(100vh-120px)] overflow-y-auto px-4 py-4 pb-28">
        <ViewComponent />
      </main>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background">
        <BottomNav 
          activeView={activeView} 
          onViewChange={setActiveView} 
        />
      </div>
    </div>
  )
}