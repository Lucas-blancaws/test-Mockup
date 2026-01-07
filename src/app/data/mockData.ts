export interface Station {
  id: string;
  name: string;
  location: string;
  type: string;
  price: number;
  available: boolean;
  capacity: number;
}

export interface Reservation {
  id: string;
  stationId: string;
  stationName: string;
  userId: string;
  userName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  registeredDate: string;
  totalReservations: number;
}

export const stations: Station[] = [
  { id: '1', name: 'Station Alpha', location: 'Paris Centre', type: 'Type A', price: 25, available: true, capacity: 10 },
  { id: '2', name: 'Station Beta', location: 'Lyon Part-Dieu', type: 'Type B', price: 30, available: true, capacity: 15 },
  { id: '3', name: 'Station Gamma', location: 'Marseille Vieux-Port', type: 'Type A', price: 22, available: false, capacity: 8 },
  { id: '4', name: 'Station Delta', location: 'Toulouse Capitole', type: 'Type C', price: 35, available: true, capacity: 12 },
  { id: '5', name: 'Station Epsilon', location: 'Nice Promenade', type: 'Type B', price: 28, available: true, capacity: 10 },
  { id: '6', name: 'Station Zeta', location: 'Bordeaux Centre', type: 'Type A', price: 26, available: true, capacity: 14 },
];

export const reservations: Reservation[] = [
  {
    id: 'R001',
    stationId: '1',
    stationName: 'Station Alpha',
    userId: 'U001',
    userName: 'Jean Dupont',
    date: '2026-01-15',
    startTime: '10:00',
    endTime: '12:00',
    status: 'confirmed',
    totalPrice: 50,
  },
  {
    id: 'R002',
    stationId: '2',
    stationName: 'Station Beta',
    userId: 'U002',
    userName: 'Marie Martin',
    date: '2026-01-16',
    startTime: '14:00',
    endTime: '16:00',
    status: 'pending',
    totalPrice: 60,
  },
  {
    id: 'R003',
    stationId: '4',
    stationName: 'Station Delta',
    userId: 'U003',
    userName: 'Pierre Dubois',
    date: '2026-01-14',
    startTime: '09:00',
    endTime: '11:00',
    status: 'completed',
    totalPrice: 70,
  },
];

export const clients: Client[] = [
  {
    id: 'U001',
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    phone: '+33 1 23 45 67 89',
    registeredDate: '2025-12-01',
    totalReservations: 5,
  },
  {
    id: 'U002',
    name: 'Marie Martin',
    email: 'marie.martin@email.com',
    phone: '+33 2 34 56 78 90',
    registeredDate: '2025-11-15',
    totalReservations: 3,
  },
  {
    id: 'U003',
    name: 'Pierre Dubois',
    email: 'pierre.dubois@email.com',
    phone: '+33 3 45 67 89 01',
    registeredDate: '2025-10-20',
    totalReservations: 8,
  },
];

export const statsData = {
  totalReservations: 127,
  totalRevenue: 3850,
  activeStations: 5,
  totalClients: 48,
  monthlyData: [
    { month: 'Jul', reservations: 15, revenue: 450 },
    { month: 'Aug', reservations: 22, revenue: 660 },
    { month: 'Sep', reservations: 18, revenue: 540 },
    { month: 'Oct', reservations: 25, revenue: 750 },
    { month: 'Nov', reservations: 28, revenue: 840 },
    { month: 'Dec', reservations: 19, revenue: 610 },
  ],
};
