import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, MapPin, Users, BarChart3 } from 'lucide-react';

export function AdminSidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/reservations', icon: Calendar, label: 'Réservations' },
    { path: '/admin/stations', icon: MapPin, label: 'Stations' },
    { path: '/admin/clients', icon: Users, label: 'Clients' },
    { path: '/admin/statistics', icon: BarChart3, label: 'Statistiques' },
  ];

  return (
    <aside className="w-60 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-6 py-3 transition-colors ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
