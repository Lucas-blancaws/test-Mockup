import { Link, useLocation } from 'react-router-dom';
import { Calendar, Home, User, Menu } from 'lucide-react';

export function ClientNavigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
            Hub Esport
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <Link
              to="/booking/selection"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/booking/selection') 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Réserver
            </Link>
            <Link
              to="/reservations"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/reservations') 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Mes Réservations
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/dashboard') 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <User className="w-4 h-4" />
              Mon Compte
            </Link>
          </div>

          <div className="md:hidden">
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
