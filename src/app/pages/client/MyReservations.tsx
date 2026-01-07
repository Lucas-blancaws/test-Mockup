import { Link } from 'react-router-dom';
import { ClientNavigation } from '../../components/ClientNavigation';
import { reservations } from '../../data/mockData';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Calendar, MapPin } from 'lucide-react';

export function MyReservations() {
  const userReservations = reservations.filter(r => r.userId === 'U001');
  const upcoming = userReservations.filter(r => r.status !== 'completed' && r.status !== 'cancelled');
  const past = userReservations.filter(r => r.status === 'completed');
  const cancelled = userReservations.filter(r => r.status === 'cancelled');

  const ReservationCard = ({ reservation }: { reservation: typeof reservations[0] }) => (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-semibold text-lg">{reservation.stationName}</h3>
            <span className={`px-2 py-1 rounded-full text-xs ${
              reservation.status === 'confirmed'
                ? 'bg-green-100 text-green-700'
                : reservation.status === 'pending'
                ? 'bg-yellow-100 text-yellow-700'
                : reservation.status === 'completed'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {reservation.status === 'confirmed' ? 'Confirmée' : 
               reservation.status === 'pending' ? 'En attente' :
               reservation.status === 'completed' ? 'Complétée' : 'Annulée'}
            </span>
          </div>
          
          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(reservation.date).toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{reservation.startTime} - {reservation.endTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Réservation N° {reservation.id}</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600 mb-3">
            {reservation.totalPrice}€
          </div>
          <Link to={`/reservations/${reservation.id}`}>
            <Button size="sm" variant="outline">
              Voir Détails
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Mes Réservations</h1>
          <Link to="/booking/selection">
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Nouvelle Réservation
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="upcoming">
              À venir ({upcoming.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Passées ({past.length})
            </TabsTrigger>
            <TabsTrigger value="cancelled">
              Annulées ({cancelled.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4">
            {upcoming.length === 0 ? (
              <Card className="p-12 text-center">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Aucune réservation à venir</p>
              </Card>
            ) : (
              upcoming.map(reservation => (
                <ReservationCard key={reservation.id} reservation={reservation} />
              ))
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            {past.length === 0 ? (
              <Card className="p-12 text-center">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Aucune réservation passée</p>
              </Card>
            ) : (
              past.map(reservation => (
                <ReservationCard key={reservation.id} reservation={reservation} />
              ))
            )}
          </TabsContent>
          
          <TabsContent value="cancelled" className="space-y-4">
            {cancelled.length === 0 ? (
              <Card className="p-12 text-center">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Aucune réservation annulée</p>
              </Card>
            ) : (
              cancelled.map(reservation => (
                <ReservationCard key={reservation.id} reservation={reservation} />
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
