# SpotUC 🚗

SpotUC es una aplicación web para visualizar la disponibilidad de estacionamientos en el **Campus San Joaquín de la Pontificia Universidad Católica de Chile**.

La plataforma ofrece un mapa interactivo del campus con zonas de estacionamiento, estado de ocupación y visualización de espacios disponibles.

## Funcionalidades

* 🗺️ Mapa interactivo del campus usando Leaflet
* 🚘 Visualización de ocupación de estacionamientos
* 📍 Selección de estacionamientos desde el mapa o la lista
* 📱 Interfaz responsiva

## Tecnologías utilizadas

* **Next.js 15**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Leaflet / React-Leaflet**

## Cómo ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abrir `http://localhost:3000` en el navegador.

## Scripts disponibles

```bash
npm run dev         # Inicia el servidor de desarrollo
npm run build       # Genera el build de producción
npm run start       # Ejecuta la versión de producción
npm run lint        # Ejecuta ESLint
npm run typecheck   # Verifica tipos con TypeScript
npm run format      # Formatea el código con Prettier
```

## Estado del proyecto

⚠️ El proyecto se encuentra actualmente en desarrollo y utiliza datos simulados de disponibilidad de estacionamientos.

## Herramientas adicionales

Para obtener las coordenadas utilizadas en ```data/parking-zones.ts``` se utilizó [GeoJSON.io](https://geojson.io/#map=13.96/-33.49595/-70.60883)
