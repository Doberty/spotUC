"use client"

import { ClockIcon, PhoneIcon, MapPinIcon, CreditCardIcon, ShieldIcon, CarIcon, EnvelopeIcon } from "@phosphor-icons/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InfoView() {
  return (
    <div className="space-y-4">
      {/* General Info */}
      <Card className="border-border/50 bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <CarIcon className="w-5 h-5 text-primary" />
            Información General
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            SpotUC es el sistema oficial de gestión de estacionamientos de la Universidad. 
            Consulta en tiempo real la disponibilidad de espacios y el estado de las entradas al campus.
          </p>
          <div className="grid gap-3">
            <InfoItem
              icon={ClockIcon}
              label="Horario de operación"
              value="Lunes a Viernes: 6:00 - 22:00"
            />
            <InfoItem
              icon={ClockIcon}
              label="Fines de semana"
              value="Sábado: 7:00 - 18:00"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tarifas */}
      <Card className="border-border/50 bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <CreditCardIcon className="w-5 h-5 text-primary" />
            Tarifas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Estudiantes</span>
              <span className="text-sm font-medium text-foreground">$500/mes</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Docentes</span>
              <span className="text-sm font-medium text-foreground">Gratuito</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Visitantes</span>
              <span className="text-sm font-medium text-foreground">$50/hora</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-muted-foreground">Visitantes (día)</span>
              <span className="text-sm font-medium text-foreground">$200/día</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reglas */}
      <Card className="border-border/50 bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <ShieldIcon  className="w-5 h-5 text-primary" />
            Normas de Uso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Respetar los espacios asignados y señalizaciones</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Velocidad máxima permitida: 20 km/h</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>No bloquear accesos de emergencia</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Portar siempre identificación universitaria visible</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Reportar cualquier incidente a seguridad</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Contacto */}
      <Card className="border-border/50 bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <PhoneIcon className="w-5 h-5 text-primary" />
            Contacto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <InfoItem
            icon={PhoneIcon}
            label="Emergencias"
            value="+56 2 2354 0000"
          />
          <InfoItem
            icon={EnvelopeIcon}
            label="Correo"
            value="estacionamientos@uc.cl"
          />
          <InfoItem
            icon={MapPinIcon}
            label="Oficina"
            value="Edificio de Servicios, Piso 1"
          />
        </CardContent>
      </Card>

      {/* Alert */}
      
    </div>
  )
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}
