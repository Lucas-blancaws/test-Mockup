import { useState } from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { stations } from '../../data/mockData';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Plus, Search, Edit, Trash2, MapPin } from 'lucide-react';

export function AdminStationManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStations = stations.filter(station =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <main className="flex-1 ml-60">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Gestion des Stations</h1>
              <p className="text-gray-600">Gérez les stations de réservation</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Ajouter une Station
            </Button>
          </div>

          {/* Search */}
          <Card className="p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Rechercher une station..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-1">Total Stations</p>
              <p className="text-3xl font-bold">{stations.length}</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-1">Stations Actives</p>
              <p className="text-3xl font-bold text-green-600">
                {stations.filter(s => s.available).length}
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-1">Stations Inactives</p>
              <p className="text-3xl font-bold text-red-600">
                {stations.filter(s => !s.available).length}
              </p>
            </Card>
          </div>

          {/* Stations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStations.map((station) => (
              <Card key={station.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{station.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {station.location}
                    </div>
                  </div>
                  <Badge className={station.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                    {station.available ? 'Actif' : 'Inactif'}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type</span>
                    <span className="font-medium">{station.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Capacité</span>
                    <span className="font-medium">{station.capacity} places</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tarif horaire</span>
                    <span className="font-medium text-blue-600">{station.price}€</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Modifier
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredStations.length === 0 && (
            <Card className="p-12">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p>Aucune station trouvée</p>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
