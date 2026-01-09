import { useParams, Link, useNavigate } from 'react-router-dom';
import { ClientNavigation } from '../../components/ClientNavigation';
import { reservations, gamingStations } from '../../data/mockData';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Calendar, MapPin, Clock, DollarSign, User, ChevronLeft, Download } from 'lucide-react';

export function ReservationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const reservation = reservations.find(r => r.id === id);
  const station = reservation ? gamingStations.find(s => s.id === reservation.stationId) : null;

  if (!reservation) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ClientNavigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-600 mb-4">Réservation non trouvée</p>
          <Link to="/reservations">
            <Button>Retour aux réservations</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/reservations')}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Retour aux réservations
        </Button>

        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Détails de la Réservation</h1>
            <p className="text-gray-600">Numéro : {reservation.id}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1">{reservation.stationName}</h3>
              <p className="text-sm text-gray-600">{station?.location || 'Emplacement'}</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1">
                {new Date(reservation.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
              </h3>
              <p className="text-sm text-gray-600">
                {new Date(reservation.date).toLocaleDateString('fr-FR', { weekday: 'long' })}
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">{reservation.startTime}</h3>
              <p className="text-sm text-gray-600">à {reservation.endTime}</p>
            </div>
          </Card>
        </div>

        <Card className="p-8 mb-6">
          <h2 className="text-xl font-semibold mb-6">Informations Complètes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-sm text-gray-500 mb-2">STATION</h3>
              <p className="text-lg">{reservation.stationName}</p>
              <p className="text-gray-600">{station?.location}</p>
              {station && <p className="text-sm text-gray-500 mt-1">Type {station.type}</p>}
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-500 mb-2">DATE & HEURE</h3>
              <p className="text-lg">
                {new Date(reservation.date).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-600">
                {reservation.startTime} - {reservation.endTime}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-500 mb-2">CLIENT</h3>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <p className="text-lg">{reservation.userName}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-500 mb-2">MONTANT</h3>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <p className="text-2xl font-bold text-blue-600">{reservation.totalPrice}€</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Télécharger
          </Button>
          {reservation.status === 'confirmed' && (
            <Button variant="outline" className="text-red-600 hover:text-red-700">
              Annuler la Réservation
            </Button>
          )}
          <Link to="/booking/selection">
            <Button className="w-full">
              Nouvelle Réservation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
