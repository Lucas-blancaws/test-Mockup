import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ClientNavigation } from '../../components/ClientNavigation';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { CreditCard, Lock } from 'lucide-react';

export function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state || {};

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  if (!totalPrice) {
    navigate('/booking/selection');
    return null;
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      navigate('/booking/confirmation', { state: location.state });
    }, 1000);
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

        <h1 className="text-3xl font-bold mb-8">Paiement Sécurisé</h1>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 text-green-600">
                <Lock className="w-5 h-5" />
                <span className="text-sm">Paiement 100% sécurisé</span>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <Label htmlFor="cardNumber">Numéro de carte</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="pl-10"
                    maxLength={19}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="cardName">Nom sur la carte</Label>
                <Input
                  id="cardName"
                  type="text"
                  placeholder="JEAN DUPONT"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Date d'expiration</Label>
                  <Input
                    id="expiry"
                    type="text"
                    placeholder="MM/AA"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    maxLength={5}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={3}
                    required
                  />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Montant total</span>
                  <span className="text-2xl font-bold text-blue-600">{totalPrice}€</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button type="submit" className="w-full" size="lg">
                  Payer {totalPrice}€
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

              <p className="text-xs text-gray-500 text-center mt-4">
                Vos informations de paiement sont cryptées et sécurisées
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
