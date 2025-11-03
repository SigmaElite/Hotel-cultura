import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RestaurantMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'kids'>('main');
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const mainMenuPages = [
    '/photo_1_2025-11-03_22-04-02.jpg',
    '/photo_2_2025-11-03_22-04-02.jpg'
  ];

  const kidsMenuPages = [
    '/photo_4_2025-11-03_22-04-02.jpg',
    '/photo_3_2025-11-03_22-04-02.jpg'
  ];

  const currentPages = activeMenu === 'main' ? mainMenuPages : kidsMenuPages;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % currentPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + currentPages.length) % currentPages.length);
  };

  const handleMenuChange = (menu: 'main' | 'kids') => {
    setActiveMenu(menu);
    setCurrentPage(0);
  };

  return (
    <section id="menu" className="min-h-screen bg-white flex flex-col" ref={sectionRef}>
      <div className="w-full px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl md:text-4xl font-light text-gray-900 text-center mb-4 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Меню
          </h2>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleMenuChange('main')}
              className={`px-6 py-2 text-sm transition-all duration-300 ${
                activeMenu === 'main'
                  ? 'bg-neutral-700 text-white'
                  : 'border border-neutral-700 text-neutral-700 hover:bg-neutral-700 hover:text-white'
              }`}
            >
              Основное меню
            </button>
            <button
              onClick={() => handleMenuChange('kids')}
              className={`px-6 py-2 text-sm transition-all duration-300 ${
                activeMenu === 'kids'
                  ? 'bg-neutral-700 text-white'
                  : 'border border-neutral-700 text-neutral-700 hover:bg-neutral-700 hover:text-white'
              }`}
            >
              Детское меню
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center px-2">
              <img
                src={currentPages[currentPage]}
                alt={`${activeMenu === 'main' ? 'Основное меню' : 'Детское меню'} - страница ${currentPage + 1}`}
                className="w-full h-full object-contain"
                style={{ maxHeight: 'calc(100vh - 120px)', maxWidth: '100%' }}
              />
            </div>

            {currentPages.length > 1 && (
              <>
                <button
                  onClick={prevPage}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Предыдущая страница"
                >
                  <ChevronLeft size={28} className="text-gray-900" />
                </button>

                <button
                  onClick={nextPage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Следующая страница"
                >
                  <ChevronRight size={28} className="text-gray-900" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/80 px-3 py-1.5 rounded-full z-10">
                  {currentPages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentPage === index
                          ? 'bg-neutral-700 w-6'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Страница ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
