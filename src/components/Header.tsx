import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 transform transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-light text-gray-900">ОТЕЛЬ КУЛЬТУРА</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('rooms')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Номера
            </button>
            <button onClick={() => scrollToSection('offers')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Акции
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              О нас
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Контакты
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+375152123456" className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              <Phone className="w-4 h-4 mr-2" />
              +375 (152) 123-45-67
            </a>
            <a
              href="https://ostrovok.ru/hotel/belarus/grodna/mid13284772/boutique_hotel_kultura/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-neutral-700 text-white hover:bg-neutral-600 transition-all duration-300 hover:scale-105"
            >
              Забронировать
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:scale-110 transition-transform duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            <button onClick={() => scrollToSection('rooms')} className="block w-full text-left py-2 text-sm text-gray-700 hover:translate-x-2 transition-transform duration-300">
              Номера
            </button>
            <button onClick={() => scrollToSection('offers')} className="block w-full text-left py-2 text-sm text-gray-700 hover:translate-x-2 transition-transform duration-300">
              Акции
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-sm text-gray-700 hover:translate-x-2 transition-transform duration-300">
              О нас
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-sm text-gray-700 hover:translate-x-2 transition-transform duration-300">
              Контакты
            </button>
            <a href="tel:+375152123456" className="flex items-center py-2 text-sm text-gray-700">
              <Phone className="w-4 h-4 mr-2" />
              +375 (152) 123-45-67
            </a>
            <a
              href="https://ostrovok.ru/hotel/belarus/grodna/mid13284772/boutique_hotel_kultura/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-neutral-700 text-white text-center hover:bg-neutral-600 transition-all duration-300"
            >
              Забронировать
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
