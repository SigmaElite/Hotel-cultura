import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HotelPage from './pages/HotelPage';
import RestaurantPage from './pages/RestaurantPage';

function App() {
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
