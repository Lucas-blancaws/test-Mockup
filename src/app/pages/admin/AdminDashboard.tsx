import { AdminSidebar } from '../../components/AdminSidebar';
import { Card } from '../../components/ui/card';
import { statsData, reservations } from '../../data/mockData';
import { Users, Calendar, DollarSign, MapPin, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AdminDashboard() {
  const todayReservations = reservations.filter(
    r => r.date === new Date().toISOString().split('T')[0]
  ).length;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <main className="flex-1 ml-60">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Bienvenue dans le panneau d'administration</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Réservations Totales</p>
                  <p className="text-3xl font-bold">{statsData.totalReservations}</p>
                  <div className="flex items-center text-green-600 text-sm mt-2">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+12% ce mois</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Revenus</p>
                  <p className="text-3xl font-bold">{statsData.totalRevenue}€</p>
                  <div className="flex items-center text-green-600 text-sm mt-2">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+8% ce mois</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Stations Actives</p>
                  <p className="text-3xl font-bold">{statsData.activeStations}</p>
                  <div className="flex items-center text-gray-600 text-sm mt-2">
                    <span>Sur 6 au total</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Clients Totaux</p>
                  <p className="text-3xl font-bold">{statsData.totalClients}</p>
                  <div className="flex items-center text-green-600 text-sm mt-2">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+5 ce mois</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Réservations Mensuelles</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={statsData.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="reservations" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Revenus Mensuels</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={statsData.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Recent Reservations */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Réservations Récentes</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">ID</th>
                    <th className="text-left py-3 px-4">Client</th>
                    <th className="text-left py-3 px-4">Station</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Statut</th>
                    <th className="text-right py-3 px-4">Montant</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.slice(0, 5).map((reservation) => (
                    <tr key={reservation.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{reservation.id}</td>
                      <td className="py-3 px-4">{reservation.userName}</td>
                      <td className="py-3 px-4">{reservation.stationName}</td>
                      <td className="py-3 px-4">
                        {new Date(reservation.date).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          reservation.status === 'confirmed'
                            ? 'bg-green-100 text-green-700'
                            : reservation.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {reservation.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-semibold">
                        {reservation.totalPrice}€
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
