import { Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import BookingModal from './BookingModal';

export default function FloatingBooking() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`fixed bottom-8 right-8 z-50 px-6 py-4 bg-gray-900 text-white shadow-2xl hover:bg-gray-800 hover:scale-110 hover:shadow-3xl transition-all duration-300 flex items-center gap-3 group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-sm tracking-widest font-normal">ЗАБРОНИРОВАТЬ</span>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </button>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
