import { AdminSidebar } from '../../components/AdminSidebar';
import { statsData, reservations, stations } from '../../data/mockData';
import { Card } from '../../components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Users, Calendar, MapPin } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export function AdminStatistics() {
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  const stationUsageData = stations.map(station => ({
    name: station.name,
    usage: Math.floor(Math.random() * 100) + 20
  }));

  const statusData = [
    { name: 'Confirmées', value: reservations.filter(r => r.status === 'confirmed').length },
    { name: 'En attente', value: reservations.filter(r => r.status === 'pending').length },
    { name: 'Complétées', value: reservations.filter(r => r.status === 'completed').length },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <main className="flex-1 ml-60">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Statistiques & Analyses</h1>
            <p className="text-gray-600">Vue d'ensemble des performances de la plateforme</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Taux d'Occupation</p>
                  <p className="text-3xl font-bold">78%</p>
                  <div className="flex items-center text-green-600 text-sm mt-2">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+5% vs mois dernier</span>
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
                  <p className="text-sm text-gray-600 mb-1">Revenu Moyen</p>
                  <p className="text-3xl font-bold">52€</p>
                  <div className="flex items-center text-green-600 text-sm mt-2">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+3% vs mois dernier</span>
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
                  <p className="text-sm text-gray-600 mb-1">Taux de Conversion</p>
                  <p className="text-3xl font-bold">65%</p>
                  <div className="flex items-center text-red-600 text-sm mt-2">
                    <TrendingDown className="w-4 h-4 mr-1" />
                    <span>-2% vs mois dernier</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Durée Moyenne</p>
                  <p className="text-3xl font-bold">2.4h</p>
                  <div className="flex items-center text-green-600 text-sm mt-2">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+0.3h vs mois dernier</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </Card>
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Évolution des Réservations</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={statsData.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="reservations" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    name="Réservations"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Évolution des Revenus</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={statsData.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    name="Revenus (€)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Utilisation par Station</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stationUsageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="usage" fill="#3b82f6" name="Taux d'utilisation (%)" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Répartition par Statut</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
