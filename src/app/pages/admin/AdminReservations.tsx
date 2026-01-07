import { useState } from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { reservations } from '../../data/mockData';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Search, Filter, Download, Eye } from 'lucide-react';

export function AdminReservations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = 
      reservation.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.stationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || reservation.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      completed: 'bg-blue-100 text-blue-700',
      cancelled: 'bg-red-100 text-red-700'
    };
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <main className="flex-1 ml-60">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Gestion des Réservations</h1>
              <p className="text-gray-600">Gérez toutes les réservations de la plateforme</p>
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Exporter
            </Button>
          </div>

          {/* Filters */}
          <Card className="p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher par client, station ou ID..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <select
                  className="w-full h-10 px-3 border border-gray-300 rounded-md"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">Tous les statuts</option>
                  <option value="confirmed">Confirmée</option>
                  <option value="pending">En attente</option>
                  <option value="completed">Complétée</option>
                  <option value="cancelled">Annulée</option>
                </select>
              </div>

              <div>
                <Button variant="outline" className="w-full">
                  <Filter className="w-4 h-4 mr-2" />
                  Plus de filtres
                </Button>
              </div>
            </div>
          </Card>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold">{reservations.length}</p>
            </Card>
            <Card className="p-4">
              <p className="text-sm text-gray-600">Confirmées</p>
              <p className="text-2xl font-bold text-green-600">
                {reservations.filter(r => r.status === 'confirmed').length}
              </p>
            </Card>
            <Card className="p-4">
              <p className="text-sm text-gray-600">En attente</p>
              <p className="text-2xl font-bold text-yellow-600">
                {reservations.filter(r => r.status === 'pending').length}
              </p>
            </Card>
            <Card className="p-4">
              <p className="text-sm text-gray-600">Complétées</p>
              <p className="text-2xl font-bold text-blue-600">
                {reservations.filter(r => r.status === 'completed').length}
              </p>
            </Card>
          </div>

          {/* Reservations Table */}
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">ID Réservation</th>
                    <th className="text-left py-3 px-4 font-semibold">Client</th>
                    <th className="text-left py-3 px-4 font-semibold">Station</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Horaires</th>
                    <th className="text-left py-3 px-4 font-semibold">Statut</th>
                    <th className="text-right py-3 px-4 font-semibold">Montant</th>
                    <th className="text-center py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReservations.map((reservation) => (
                    <tr key={reservation.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{reservation.id}</td>
                      <td className="py-3 px-4">{reservation.userName}</td>
                      <td className="py-3 px-4">{reservation.stationName}</td>
                      <td className="py-3 px-4">
                        {new Date(reservation.date).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="py-3 px-4">
                        {reservation.startTime} - {reservation.endTime}
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusBadge(reservation.status)}>
                          {reservation.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right font-semibold">
                        {reservation.totalPrice}€
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredReservations.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                Aucune réservation trouvée
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
}
