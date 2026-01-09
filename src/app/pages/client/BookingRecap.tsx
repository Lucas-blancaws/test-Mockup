import { useNavigate, useLocation } from 'react-router-dom';
import { ClientNavigation } from '../../components/ClientNavigation';
import { gamingStations } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Calendar, Clock, MapPin, DollarSign } from 'lucide-react';

export function BookingRecap() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedStation, date, startTime, endTime } = location.state || {};

  const station = gamingStations.find(s => s.id === selectedStation);
  
  if (!station || !date || !startTime || !endTime) {
    navigate('/booking/selection');
    return null;
  }

  const calculateHours = () => {
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    return (end.getTime() - start.getTime()) / (1000 * 60 * 60);
  };

  const hours = calculateHours();
  const totalPrice = station.pricePerHour * hours;

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="flex items-center text-green-600">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="ml-2">Sélection</span>
              </div>
              <div className="w-24 h-1 bg-blue-600 mx-4"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  2
                </div>
                <span className="ml-2 font-medium text-blue-600">Récapitulatif</span>
              </div>
              <div className="w-24 h-1 bg-gray-300 mx-4"></div>
              <div className="flex items-center text-gray-400">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  3
                </div>
                <span className="ml-2">Paiement</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8">Récapitulatif de Votre Réservation</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Détails de la Réservation</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold">{station.name}</div>
                    <div className="text-gray-600">{station.location}</div>
                    <div className="text-sm text-gray-500 mt-1">Type: {station.type}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold">Date</div>
                    <div className="text-gray-600">
                      {new Date(date).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold">Horaires</div>
                    <div className="text-gray-600">
                      De {startTime} à {endTime}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Durée: {hours} heure{hours > 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Résumé</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tarif horaire</span>
                  <span className="font-medium">{station.price}€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Durée</span>
                  <span className="font-medium">{hours}h</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total</span>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      <span className="font-bold text-2xl text-blue-600">{totalPrice}€</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button
                  className="w-full"
                  onClick={() => navigate('/booking/payment', {
                    state: { selectedStation, date, startTime, endTime, totalPrice }
                  })}
                >
                  Continuer vers le Paiement
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/booking/selection')}
                >
                  Modifier
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
