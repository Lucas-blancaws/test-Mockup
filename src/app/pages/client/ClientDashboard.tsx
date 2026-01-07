import { Link } from 'react-router-dom';
import { ClientNavigation } from '../../components/ClientNavigation';
import { reservations } from '../../data/mockData';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Calendar, User, Mail, Phone, MapPin } from 'lucide-react';

export function ClientDashboard() {
  const userReservations = reservations.filter(r => r.userId === 'U001');
  const upcomingReservations = userReservations.filter(r => r.status !== 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Mon Tableau de Bord</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">Jean Dupont</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">jean.dupont@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Membre depuis déc. 2025</span>
                </div>
              </div>

              <Button className="w-full mt-6" variant="outline">
                Modifier le Profil
              </Button>
            </Card>

            {/* Stats */}
            <Card className="p-6 mt-6">
              <h3 className="font-semibold mb-4">Statistiques</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Réservations totales</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">À venir</span>
                  <span className="font-semibold text-blue-600">{upcomingReservations.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Complétées</span>
                  <span className="font-semibold text-green-600">
                    {userReservations.filter(r => r.status === 'completed').length}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Upcoming Reservations */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Prochaines Réservations</h2>
              <Link to="/reservations">
                <Button variant="outline" size="sm">
                  Voir Tout
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingReservations.length === 0 ? (
                <Card className="p-12 text-center">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Aucune réservation à venir</p>
                  <Link to="/booking/selection">
                    <Button>Nouvelle Réservation</Button>
                  </Link>
                </Card>
              ) : (
                upcomingReservations.map((reservation) => (
                  <Card key={reservation.id} className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{reservation.stationName}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            reservation.status === 'confirmed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {reservation.status === 'confirmed' ? 'Confirmée' : 'En attente'}
                          </span>
                        </div>
                        
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(reservation.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{reservation.startTime} - {reservation.endTime}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {reservation.totalPrice}€
                        </div>
                        <Link to={`/reservations/${reservation.id}`}>
                          <Button size="sm" variant="outline">
                            Détails
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>

            {/* Quick Actions */}
            <Card className="p-6 mt-6">
              <h3 className="font-semibold mb-4">Actions Rapides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/booking/selection">
                  <Button className="w-full" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Nouvelle Réservation
                  </Button>
                </Link>
                <Link to="/reservations">
                  <Button className="w-full" variant="outline">
                    <MapPin className="w-4 h-4 mr-2" />
                    Voir Mes Réservations
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
