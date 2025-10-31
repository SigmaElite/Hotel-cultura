import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HotelPage from './pages/HotelPage';
import RestaurantPage from './pages/RestaurantPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HotelPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
