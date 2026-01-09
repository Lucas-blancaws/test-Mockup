import { Link, useLocation } from 'react-router-dom';
import { ClientNavigation } from '../../components/ClientNavigation';
import { gamingStations } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { CheckCircle, Calendar, MapPin, Clock, Download } from 'lucide-react';

export function Confirmation() {
  const location = useLocation();
  const { selectedStation, date, startTime, endTime, totalPrice } = location.state || {};

  const station = gamingStations.find(s => s.id === selectedStation);
  const confirmationNumber = `RES${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Réservation Confirmée !</h1>
          <p className="text-gray-600">
            Votre numéro de confirmation : <span className="font-semibold">{confirmationNumber}</span>
          </p>
        </div>

        <Card className="p-8 mb-6">
          <h2 className="text-xl font-semibold mb-6">Détails de Votre Réservation</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <div className="font-semibold">{station?.name}</div>
                <div className="text-gray-600">{station?.location}</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <div className="font-semibold">Date</div>
                <div className="text-gray-600">
                  {date && new Date(date).toLocaleDateString('fr-FR', {
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
              </div>
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">Montant payé</span>
                <span className="font-bold text-2xl text-blue-600">{totalPrice}€</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Prochaines étapes</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ Un email de confirmation a été envoyé à votre adresse</li>
            <li>✓ Vous pouvez consulter votre réservation dans votre tableau de bord</li>
            <li>✓ En cas de modification, contactez-nous au moins 24h à l'avance</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="w-full">
            <Download className="w-4 h-4 mr-2" />
            Télécharger
          </Button>
          <Link to="/reservations" className="w-full">
            <Button variant="outline" className="w-full">
              Mes Réservations
            </Button>
          </Link>
          <Link to="/" className="w-full">
            <Button className="w-full">
              Retour à l'Accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
