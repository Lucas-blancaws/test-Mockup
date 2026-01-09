import { useNavigate, useLocation } from 'react-router-dom';
import { ClientNavigation } from '../../components/ClientNavigation';
import { gamingStations } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { CreditCard, Lock, DollarSign, Calendar, Clock, MapPin } from 'lucide-react';

export function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedStation, date, startTime, endTime, totalPrice } = location.state || {};

  const station = gamingStations.find(s => s.id === selectedStation);

  if (!totalPrice || !station) {
    navigate('/booking/selection');
    return null;
  }

  const handleStripeRedirect = () => {
    // Simulation de la redirection vers Stripe
    // En production, ceci serait remplacé par une vraie redirection Stripe Checkout
    console.log('Redirection vers Stripe Checkout...');
    
    // Simulation d'un délai de traitement
    setTimeout(() => {
      navigate('/booking/confirmation', { state: location.state });
    }, 1500);
  };

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
              <div className="w-24 h-1 bg-green-600 mx-4"></div>
              <div className="flex items-center text-green-600">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="ml-2">Récapitulatif</span>
              </div>
              <div className="w-24 h-1 bg-blue-600 mx-4"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  3
                </div>
                <span className="ml-2 font-medium text-blue-600">Paiement</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">Paiement Sécurisé</h1>

        <div className="max-w-2xl mx-auto">
          {/* Récapitulatif de commande */}
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Récapitulatif de votre réservation</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold">{station.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {station.specs.cpu} • {station.specs.gpu}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
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
                <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Horaires</div>
                  <div className="text-gray-600">
                    De {startTime} à {endTime}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">Total à payer</span>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-2xl text-blue-600">{totalPrice}€</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Carte de paiement Stripe */}
          <Card className="p-8">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
                <Lock className="w-5 h-5" />
                <span className="text-sm font-medium">Paiement 100% sécurisé par Stripe</span>
              </div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
                alt="Stripe" 
                className="h-8 mx-auto opacity-75"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Redirection vers Stripe Checkout
                  </h3>
                  <p className="text-sm text-blue-800">
                    En cliquant sur "Procéder au paiement", vous serez redirigé vers la page de 
                    paiement sécurisée Stripe pour finaliser votre réservation.
                  </p>
                  <p className="text-xs text-blue-700 mt-2">
                    Aucune donnée bancaire n'est stockée sur nos serveurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleStripeRedirect}
                className="w-full" 
                size="lg"
              >
                <Lock className="w-4 h-4 mr-2" />
                Payer {totalPrice}€ avec Stripe
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => navigate(-1)}
              >
                Retour
              </Button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
              <span>🔒 SSL/TLS</span>
              <span>•</span>
              <span>PCI-DSS Compliant</span>
              <span>•</span>
              <span>3D Secure</span>
            </div>
          </Card>

          {/* Note informative */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              💡 <strong>Note :</strong> Ceci est une démonstration. En production, vous seriez redirigé 
              vers la vraie page Stripe Checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
