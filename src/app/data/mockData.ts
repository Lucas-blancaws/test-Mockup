export interface GamingStation {
  id: string;
  name: string;
  image: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    monitor: string;
    peripherals: string[];
  };
  pricePerHour: number;
  available: boolean;
}

export interface Reservation {
  id: string;
  stationId: string;
  stationName: string;
  userId: string;
  userName: string;
  userEmail: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  registeredDate: string;
  totalReservations: number;
  totalSpent: number;
}

// Postes Gaming du Hub Esport
export const gamingStations: GamingStation[] = [
  {
    id: 'station-1',
    name: 'Poste Gaming Pro #1',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800',
    specs: {
      cpu: 'Intel Core i9-13900K',
      gpu: 'NVIDIA RTX 4080',
      ram: '32GB DDR5',
      monitor: 'Écran 27" 240Hz',
      peripherals: ['Clavier mécanique', 'Souris gaming', 'Casque 7.1']
    },
    pricePerHour: 12,
    available: true
  },
  {
    id: 'station-2',
    name: 'Poste Gaming Pro #2',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800',
    specs: {
      cpu: 'Intel Core i9-13900K',
      gpu: 'NVIDIA RTX 4080',
      ram: '32GB DDR5',
      monitor: 'Écran 27" 240Hz',
      peripherals: ['Clavier mécanique', 'Souris gaming', 'Casque 7.1']
    },
    pricePerHour: 12,
    available: true
  },
  {
    id: 'station-3',
    name: 'Poste Gaming Elite #3',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800',
    specs: {
      cpu: 'AMD Ryzen 9 7950X',
      gpu: 'NVIDIA RTX 4090',
      ram: '64GB DDR5',
      monitor: 'Écran 32" 4K 144Hz',
      peripherals: ['Clavier mécanique RGB', 'Souris pro gaming', 'Casque premium']
    },
    pricePerHour: 15,
    available: false
  },
  {
    id: 'station-4',
    name: 'Poste Gaming Standard #4',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800',
    specs: {
      cpu: 'Intel Core i7-12700K',
      gpu: 'NVIDIA RTX 4070',
      ram: '16GB DDR4',
      monitor: 'Écran 24" 165Hz',
      peripherals: ['Clavier gaming', 'Souris gaming', 'Casque']
    },
    pricePerHour: 8,
    available: true
  },
  {
    id: 'station-5',
    name: 'Poste Gaming Standard #5',
    image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=800',
    specs: {
      cpu: 'Intel Core i7-12700K',
      gpu: 'NVIDIA RTX 4070',
      ram: '16GB DDR4',
      monitor: 'Écran 24" 165Hz',
      peripherals: ['Clavier gaming', 'Souris gaming', 'Casque']
    },
    pricePerHour: 8,
    available: true
  },
  {
    id: 'station-6',
    name: 'Poste Gaming Starter #6',
    image: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=800',
    specs: {
      cpu: 'Intel Core i5-12400F',
      gpu: 'NVIDIA RTX 4060',
      ram: '16GB DDR4',
      monitor: 'Écran 24" 144Hz',
      peripherals: ['Clavier', 'Souris', 'Casque']
    },
    pricePerHour: 6,
    available: true
  }
];

// Réservations exemples
export const reservations: Reservation[] = [
  {
    id: 'HUB-2026-001',
    stationId: 'station-1',
    stationName: 'Poste Gaming Pro #1',
    userId: 'user-1',
    userName: 'Alexandre Martin',
    userEmail: 'alex.martin@email.com',
    date: '2026-01-15',
    startTime: '14:00',
    endTime: '17:00',
    duration: 3,
    status: 'confirmed',
    totalPrice: 36,
    createdAt: '2026-01-10T10:30:00Z'
  },
  {
    id: 'HUB-2026-002',
    stationId: 'station-4',
    stationName: 'Poste Gaming Standard #4',
    userId: 'user-2',
    userName: 'Sophie Dubois',
    userEmail: 'sophie.dubois@email.com',
    date: '2026-01-16',
    startTime: '10:00',
    endTime: '12:00',
    duration: 2,
    status: 'pending',
    totalPrice: 16,
    createdAt: '2026-01-12T15:20:00Z'
  },
  {
    id: 'HUB-2026-003',
    stationId: 'station-2',
    stationName: 'Poste Gaming Pro #2',
    userId: 'user-1',
    userName: 'Alexandre Martin',
    userEmail: 'alex.martin@email.com',
    date: '2026-01-10',
    startTime: '18:00',
    endTime: '22:00',
    duration: 4,
    status: 'completed',
    totalPrice: 48,
    createdAt: '2026-01-08T09:15:00Z'
  }
];

// Clients
export const clients: Client[] = [
  {
    id: 'user-1',
    name: 'Alexandre Martin',
    email: 'alex.martin@email.com',
    phone: '+33 6 12 34 56 78',
    registeredDate: '2025-11-20',
    totalReservations: 12,
    totalSpent: 456
  },
  {
    id: 'user-2',
    name: 'Sophie Dubois',
    email: 'sophie.dubois@email.com',
    phone: '+33 6 23 45 67 89',
    registeredDate: '2025-12-05',
    totalReservations: 5,
    totalSpent: 180
  },
  {
    id: 'user-3',
    name: 'Thomas Petit',
    email: 'thomas.petit@email.com',
    phone: '+33 6 34 56 78 90',
    registeredDate: '2025-10-15',
    totalReservations: 18,
    totalSpent: 720
  }
];

// Statistiques
export const statsData = {
  totalReservations: 127,
  totalRevenue: 3850,
  activeStations: 5,
  totalClients: 48,
  averageSessionDuration: 2.8,
  occupationRate: 68,
  monthlyData: [
    { month: 'Juil', reservations: 15, revenue: 450 },
    { month: 'Août', reservations: 22, revenue: 660 },
    { month: 'Sept', reservations: 18, revenue: 540 },
    { month: 'Oct', reservations: 25, revenue: 750 },
    { month: 'Nov', reservations: 28, revenue: 840 },
    { month: 'Déc', reservations: 19, revenue: 610 }
  ]
};