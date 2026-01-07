import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/client/HomePage';
import { BookingSelection } from './pages/client/BookingSelection';
import { BookingRecap } from './pages/client/BookingRecap';
import { Payment } from './pages/client/Payment';
import { Confirmation } from './pages/client/Confirmation';
import { ClientDashboard } from './pages/client/ClientDashboard';
import { MyReservations } from './pages/client/MyReservations';
import { ReservationDetail } from './pages/client/ReservationDetail';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminReservations } from './pages/admin/AdminReservations';
import { AdminStationManagement } from './pages/admin/AdminStationManagement';
import { AdminClients } from './pages/admin/AdminClients';
import { AdminStatistics } from './pages/admin/AdminStatistics';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/booking/selection" element={<BookingSelection />} />
        <Route path="/booking/recap" element={<BookingRecap />} />
        <Route path="/booking/payment" element={<Payment />} />
        <Route path="/booking/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/reservations/:id" element={<ReservationDetail />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/reservations" element={<AdminReservations />} />
        <Route path="/admin/stations" element={<AdminStationManagement />} />
        <Route path="/admin/clients" element={<AdminClients />} />
        <Route path="/admin/statistics" element={<AdminStatistics />} />
      </Routes>
    </BrowserRouter>
  );
}
