import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isRestaurant = location.pathname === '/restaurant';

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
        <div className="flex md:justify-between items-center h-20 relative">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-lg md:text-2xl font-light text-gray-900 hover:text-neutral-600 transition-colors duration-300">ОТЕЛЬ КУЛЬТУРА</h1>
          </Link>

          <Link
            to={isRestaurant ? "/" : "/restaurant"}
            className="md:hidden text-xs text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            {isRestaurant ? "Отель" : "Ресторан"}
          </Link>

          <Link
            to={isRestaurant ? "/" : "/restaurant"}
            className="hidden md:block text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 border-l border-neutral-300 pl-8"
          >
            {isRestaurant ? "Отель" : "Ресторан"}
          </Link>

          <nav className="hidden md:flex items-center space-x-8 h-full">
            {!isRestaurant && (
              <>
                <button onClick={() => scrollToSection('rooms')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 h-full flex items-center">
                  Номера
                </button>
                <button onClick={() => scrollToSection('offers')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 h-full flex items-center">
                  Акции
                </button>
                <button onClick={() => scrollToSection('about')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 h-full flex items-center">
                  О нас
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 h-full flex items-center">
                  Контакты
                </button>
              </>
            )}
            {isRestaurant && (
              <>
                <button onClick={() => scrollToSection('about')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 h-full flex items-center">
                  О ресторане
                </button>
                <button onClick={() => scrollToSection('menu')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 h-full flex items-center">
                  Меню
                </button>
                <button onClick={() => scrollToSection('reservation')} className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 h-full flex items-center">
                  Бронирование
                </button>
              </>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+375333428888" className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              <Phone className="w-4 h-4 mr-2" />
              +375 33 342-88-88
            </a>
            {!isRestaurant && (
              <a
                href="#rooms"
                className="px-6 py-2 bg-neutral-700 text-white hover:bg-neutral-600 transition-all duration-300 hover:scale-105"
              >
                Забронировать
              </a>
            )}
            {isRestaurant && (
              <button
                onClick={() => scrollToSection('reservation')}
                className="px-6 py-2 bg-neutral-700 text-white hover:bg-neutral-600 transition-all duration-300 hover:scale-105"
              >
                Забронировать столик
              </button>
            )}
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
            <Link
              to={isRestaurant ? "/" : "/restaurant"}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left py-2 text-sm text-gray-700 hover:translate-x-2 transition-transform duration-300 font-medium"
            >
              {isRestaurant ? "← Отель" : "Ресторан →"}
            </Link>
            <div className="border-t border-neutral-200 pt-4">
              {!isRestaurant && (
                <>
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
                </>
              )}
              {isRestaurant && (
                <>
                  <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-sm text-gray-700 hover:translate-x-2 transition-transform duration-300">
                    О ресторане
                  </button>
                  <button onClick={() => scrollToSection('menu')} className="block w-full text-left py-2 text-sm text-gray-700 hover:translate-x-2 transition-transform duration-300">
                    Меню
                  </button>
                  <button onClick={() => scrollToSection('reservation')} className="block w-full text-left py-2 text-sm text-gray-700 hover:translate-x-2 transition-transform duration-300">
                    Бронирование
                  </button>
                </>
              )}
            </div>
            <a href="tel:+375333428888" className="flex items-center py-2 text-sm text-gray-700">
              <Phone className="w-4 h-4 mr-2" />
              +375 33 342-88-88
            </a>
            {!isRestaurant && (
              <a
                href="#rooms"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-6 py-3 bg-neutral-700 text-white text-center hover:bg-neutral-600 transition-all duration-300"
              >
                Забронировать
              </a>
            )}
            {isRestaurant && (
              <button
                onClick={() => scrollToSection('reservation')}
                className="block w-full px-6 py-3 bg-neutral-700 text-white text-center hover:bg-neutral-600 transition-all duration-300"
              >
                Забронировать столик
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
