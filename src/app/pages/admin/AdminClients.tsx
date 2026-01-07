import { useState } from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { clients } from '../../data/mockData';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Search, Mail, Phone, Eye } from 'lucide-react';

export function AdminClients() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <main className="flex-1 ml-60">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Gestion des Clients</h1>
            <p className="text-gray-600">Gérez les clients de la plateforme</p>
          </div>

          {/* Search */}
          <Card className="p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Rechercher un client..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-1">Total Clients</p>
              <p className="text-3xl font-bold">{clients.length}</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-1">Nouveaux ce mois</p>
              <p className="text-3xl font-bold text-green-600">5</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-gray-600 mb-1">Clients Actifs</p>
              <p className="text-3xl font-bold text-blue-600">{clients.length}</p>
            </Card>
          </div>

          {/* Clients Table */}
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">ID</th>
                    <th className="text-left py-3 px-4 font-semibold">Nom</th>
                    <th className="text-left py-3 px-4 font-semibold">Email</th>
                    <th className="text-left py-3 px-4 font-semibold">Téléphone</th>
                    <th className="text-left py-3 px-4 font-semibold">Date d'inscription</th>
                    <th className="text-center py-3 px-4 font-semibold">Réservations</th>
                    <th className="text-center py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{client.id}</td>
                      <td className="py-3 px-4">{client.name}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          {client.email}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          {client.phone}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        {new Date(client.registeredDate).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {client.totalReservations}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center">
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

            {filteredClients.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                Aucun client trouvé
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
}
