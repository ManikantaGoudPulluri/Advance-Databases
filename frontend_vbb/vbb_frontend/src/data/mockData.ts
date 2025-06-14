import { Transport } from '../types'

export const transports: Transport[] = [
  {
    id: "ICE1234",
    type: "ice",
    line: "ICE 724",
    origin: "Berlin",
    destination: "Munich",
    departureTime: "2024-03-20T08:00:00",
    arrivalTime: "2024-03-20T12:30:00",
    status: "on-time",
    platform: "5A",
    route: ["Berlin", "Leipzig", "Nuremberg", "Munich"],
  },
  {
    id: "TR5678",
    type: "train",
    line: "RE 1",
    origin: "Hamburg",
    destination: "Bremen",
    departureTime: "2024-03-20T09:15:00",
    arrivalTime: "2024-03-20T10:45:00",
    status: "delayed",
    platform: "3",
    estimatedDelay: 15,
    statusMessage: "Delay due to signal failure",
  },
  {
    id: "BUS901",
    type: "bus",
    line: "100",
    origin: "Central Station",
    destination: "Airport",
    departureTime: "2024-03-20T08:30:00",
    arrivalTime: "2024-03-20T09:15:00",
    status: "on-time",
    gate: "B4",
  },
  {
    id: "TRM432",
    type: "tram",
    line: "M10",
    origin: "Warschauer Str.",
    destination: "Nordbahnhof",
    departureTime: "2024-03-20T08:45:00",
    arrivalTime: "2024-03-20T09:30:00",
    status: "boarding",
    platform: "1",
  },
  {
    id: "ICE789",
    type: "ice",
    line: "ICE 581",
    origin: "Frankfurt",
    destination: "Berlin",
    departureTime: "2024-03-20T10:00:00",
    arrivalTime: "2024-03-20T13:45:00",
    status: "cancelled",
    platform: "7",
    statusMessage: "Cancelled due to technical issues",
  },
  {
    id: "BUS234",
    type: "bus",
    line: "200",
    origin: "Main Station",
    destination: "Shopping Mall",
    departureTime: "2024-03-20T09:00:00",
    arrivalTime: "2024-03-20T09:45:00",
    status: "delayed",
    gate: "A2",
    estimatedDelay: 10,
  }
]