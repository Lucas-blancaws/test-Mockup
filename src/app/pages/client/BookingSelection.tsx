import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientNavigation } from '../../components/ClientNavigation';
import { gamingStations } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { MapPin, CheckCircle, XCircle } from 'lucide-react';

export function BookingSelection() {
  const navigate = useNavigate();
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleContinue = () => {
    if (selectedStation && date && startTime && endTime) {
      navigate('/booking/recap', {
        state: { selectedStation, date, startTime, endTime }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  1
                </div>
                <span className="ml-2 font-medium text-blue-600">Sélection</span>
              </div>
              <div className="w-24 h-1 bg-gray-300 mx-4"></div>
              <div className="flex items-center text-gray-400">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  2
                </div>
                <span className="ml-2">Récapitulatif</span>
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

        <h1 className="text-3xl font-bold mb-8">Sélectionnez Votre Station</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Station List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gamingStations.map((station) => (
                <Card
                  key={station.id}
                  className={`p-6 cursor-pointer transition-all ${
                    selectedStation === station.id
                      ? 'ring-2 ring-blue-600 bg-blue-50'
                      : 'hover:shadow-lg'
                  } ${!station.available ? 'opacity-50' : ''}`}
                  onClick={() => station.available && setSelectedStation(station.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{station.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {station.specs.cpu}
                      </div>
                    </div>
                    {station.available ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    GPU: {station.specs.gpu}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    Capacité: {station.capacity} places
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {station.pricePerHour}€<span className="text-sm text-gray-500">/heure</span>
                  </div>
                  {!station.available && (
                    <div className="mt-2 text-sm text-red-600">Non disponible</div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Détails de Réservation</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <Label htmlFor="startTime">Heure de début</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="endTime">Heure de fin</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>

                <Button
                  className="w-full"
                  disabled={!selectedStation || !date || !startTime || !endTime}
                  onClick={handleContinue}
                >
                  Continuer
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
