import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RestaurantMenu() {
  const [isVisible, setIsVisible] = useState(false);
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

  const menuPages = [
    {
      title: 'Основное меню',
      image: '/photo_1_2025-11-03_22-04-02.jpg'
    },
    {
      title: 'Напитки',
      image: '/photo_2_2025-11-03_22-04-02.jpg'
    },
    {
      title: 'Детское меню',
      image: '/photo_3_2025-11-03_22-04-02.jpg'
    },
    {
      title: 'Детское меню',
      image: '/photo_4_2025-11-03_22-04-02.jpg'
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % menuPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + menuPages.length) % menuPages.length);
  };

  return (
    <section id="menu" className="min-h-screen bg-white flex flex-col" ref={sectionRef}>
      <div className="w-full px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl md:text-5xl font-light text-gray-900 text-center transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Меню
          </h2>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 md:px-12 pb-12">
        <div className="w-full max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            {menuPages.map((page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`px-6 py-3 text-sm transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-neutral-700 text-white'
                    : 'border border-neutral-700 text-neutral-700 hover:bg-neutral-700 hover:text-white'
                }`}
              >
                {page.title}
              </button>
            ))}
          </div>

          <div className="relative w-full">
            <div className="relative w-full aspect-[3/4] md:aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                src={menuPages[currentPage].image}
                alt={menuPages[currentPage].title}
                className="w-full h-full object-contain"
              />
            </div>

            <button
              onClick={prevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Предыдущая страница"
            >
              <ChevronLeft size={32} className="text-gray-900" />
            </button>

            <button
              onClick={nextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Следующая страница"
            >
              <ChevronRight size={32} className="text-gray-900" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {menuPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-neutral-700 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Страница ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-lg">
              Страница {currentPage + 1} из {menuPages.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
