import { Link } from 'react-router-dom';
import { ClientNavigation } from '../../components/ClientNavigation';
import { Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Réservez Votre PC en Quelques Clics
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Service de réservation rapide et simple pour tous vos besoins
            </p>
            <Link to="/booking/selection">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Commencer une Réservation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Nous Choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Réservation Simple</h3>
              <p className="text-gray-600 text-sm">
                Processus de réservation en 3 étapes
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Plusieurs Emplacements</h3>
              <p className="text-gray-600 text-sm">
                Stations disponibles dans toute la France
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Disponibilité 24/7</h3>
              <p className="text-gray-600 text-sm">
                Réservez à tout moment, n'importe où
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Confirmation Instantanée</h3>
              <p className="text-gray-600 text-sm">
                Recevez votre confirmation immédiatement
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Rejoignez des milliers d'utilisateurs satisfaits
          </p>
          <Link to="/booking/selection">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Réserver Maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Hub Esport. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
