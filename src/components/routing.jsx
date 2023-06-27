import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/bookingPage';
import HomePage from './pages/HomePage';
import Confirmed from './pages/confirmed';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/confirmed" element={<Confirmed />} />
    </Routes>
  );
}