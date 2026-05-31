import type { LatLngExpression } from "leaflet"

export interface ParkingZone {
  id: string
  name: string
  location: string
  facultad: string
  coordinates: LatLngExpression[]
  totalSpots: number
  availableSpots: number
}

export const parkingZones: ParkingZone[] = [
  {
    id: "zone-a",
    name: "Estacionamiento Humanidades",
    location: "Entrada Norte",
    facultad: "Facultad de Letras",
    coordinates: [
      [-33.49625, -70.6143],
      [-33.49615, -70.61315],
      [-33.4965, -70.6131],
      [-33.49658, -70.61425],
    ] as LatLngExpression[],
    totalSpots: 60,
    availableSpots: 45,
  },
  {
    id: "zone-b",
    name: "Estacionamiento Ingeniería",
    location: "Entrada Sur",
    facultad: "Facultad de Ingeniería",
    coordinates: [
      [-33.50069, -70.61285],
      [-33.50078, -70.6118],
      [-33.50115, -70.61175],
      [-33.50105, -70.6130],
    ] as LatLngExpression[],
    totalSpots: 60,
    availableSpots: 12,
  },
  {
    id: "zone-c",
    name: "Estacionamiento College",
    location: "Entrada Sur",
    facultad: "College PUC",
    coordinates: [
      [-33.5008, -70.6115],
      [-33.5009, -70.60955],
      [-33.50135, -70.60955],
      [-33.5012, -70.61145],
    ] as LatLngExpression[],
    totalSpots: 80,
    availableSpots: 28,
  },
  {
    id: "zone-d",
    name: "Estacionamiento Deportes",
    location: "Entrada Deportiva",
    facultad: "Gimnasio PUC",
    coordinates: [
      [-33.50095, -70.6075],
      [-33.5010, -70.60670],
      [-33.50151, -70.60670],
      [-33.50145, -70.6075],
    ] as LatLngExpression[],
    totalSpots: 40,
    availableSpots: 10,
  },

  {
    id: "zone-e",
    name: "Estacionamiento Biblioteca",
    location: "Entrada Norte o Sur",
    facultad: "Biblioteca Central",
    coordinates: [
            [
                -33.49824126001157,
                -70.60958944852948
            ],
            [
                -33.49941016521096,
                -70.60945241509121
            ],
            [
                -33.49943873296157,
                -70.60994916130511
            ],
            [
                -33.49960299734259,
                -70.60993203212512
            ],
            [
                -33.49956014579576,
                -70.60932965596959
            ],
            [
                -33.49945777812343,
                -70.60933536569546
            ],
            [
                -33.49945777812343,
                -70.609272558703
            ],
            [
                -33.49859598036504,
                -70.60937818864541
            ],
            [
                -33.49859359969697,
                -70.60929254274632
            ],
            [
                -33.498210311187194,
                -70.60936105946543
            ],
            [
                -33.49824126001157,
                -70.60958944852948
            ]
      
    ] as LatLngExpression[],
    totalSpots: 60,
    availableSpots: 23,
  },

    {
    id: "zone-f",
    name: "Estacionamiento DICTUC",
    location: "Entrada Norte",
    facultad: "DICTUC",
    coordinates: [
            [
                -33.496548880901585,
              -70.60865692551272
            ],
            [
                -33.49713326317196,
              -70.60829977707003
            ],
            [
                -33.496966297211976,
              -70.60792098326614
            ],
            [
                -33.4971693638782,
              -70.6077748770847
            ],
            [
                -33.497334073157745,
              -70.60815367088857
            ],
            [
                -33.49793198777187,
              -70.60775323172498
            ],
            [
                -33.497708616380876,
              -70.60729597349031
            ],
            [
                -33.49635709435433,
                -70.60818884459853
            ],
            [
                -33.496548880901585,
                -70.60865692551272
            ]
      
    ] as LatLngExpression[],
    totalSpots: 100,
    availableSpots: 62,
  },

  {
    id: "zone-g",
    name: "Estacionamiento Comercial",
    location: "Entrada Norte",
    facultad: "Facultad de Economía y Administración",
    coordinates: [
            [
              -33.49609246120419,
              -70.61231036329791
            ],
            [
              -33.496520021869735,
              -70.61224693513442
            ],
            [
              -33.49637456332334,
              -70.6107722303351
            ],
            [
              -33.49596022551905,
              -70.61080923009688
            ],
            [
              -33.49609246120419,
              -70.61231036329791
            ]
    ] as LatLngExpression[],
    totalSpots: 100,
    availableSpots: 45,
  },
]