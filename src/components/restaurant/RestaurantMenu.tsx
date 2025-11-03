import { useEffect, useRef, useState } from 'react';

export default function RestaurantMenu() {
  const [isVisible, setIsVisible] = useState(false);
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

  const menuImages = [
    '/photo_1_2025-11-03_22-04-02.jpg',
    '/photo_2_2025-11-03_22-04-02.jpg',
    '/photo_3_2025-11-03_22-04-02.jpg',
    '/photo_4_2025-11-03_22-04-02.jpg'
  ];

  return (
    <section id="menu" className="py-32 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-6xl font-light text-gray-900 mb-8 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Меню
          </h2>
          <p
            className={`text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Изысканные блюда от нашего шеф-повара. Каждое блюдо создано с любовью и вниманием к деталям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {menuImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden aspect-[4/3] group transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
            >
              <img
                src={image}
                alt={`Меню ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#e8e5e0] p-12 rounded-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                Наше меню
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                В нашем ресторане мы предлагаем широкий выбор блюд европейской и авторской кухни.
                От завтраков до изысканных ужинов — каждое блюдо приготовлено из свежих продуктов
                с особым вниманием к деталям.
              </p>
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center py-3 border-b border-gray-300">
                  <span className="text-gray-900 font-light text-lg">Завтраки</span>
                  <span className="text-gray-600">8:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-300">
                  <span className="text-gray-900 font-light text-lg">Закуски и салаты</span>
                  <span className="text-gray-600">13:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-300">
                  <span className="text-gray-900 font-light text-lg">Супы</span>
                  <span className="text-gray-600">13:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-300">
                  <span className="text-gray-900 font-light text-lg">Горячие блюда</span>
                  <span className="text-gray-600">13:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-300">
                  <span className="text-gray-900 font-light text-lg">Десерты</span>
                  <span className="text-gray-600">8:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900 font-light text-lg">Напитки</span>
                  <span className="text-gray-600">8:00 - 23:00</span>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-300">
                <p className="text-gray-700 text-base leading-relaxed italic">
                  Полное меню с фотографиями и подробным описанием блюд доступно в нашем ресторане.
                  Мы с радостью ответим на все ваши вопросы и поможем с выбором.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
