import { useEffect, useRef, useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export default function RestaurantMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
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

  const menuCategories: MenuCategory[] = [
    {
      title: 'Закуски',
      items: [
        {
          name: 'Карпаччо из говядины',
          description: 'Тонко нарезанная мраморная говядина с рукколой и пармезаном',
          price: '18 BYN'
        },
        {
          name: 'Тартар из лосося',
          description: 'Свежий лосось с авокадо, каперсами и лимонным кремом',
          price: '22 BYN'
        },
        {
          name: 'Буррата с томатами',
          description: 'Итальянский сыр с черри-томатами и базиликовым песто',
          price: '16 BYN'
        },
        {
          name: 'Фуа-гра',
          description: 'Утиная печень с карамелизированными яблоками и бриошью',
          price: '32 BYN'
        }
      ]
    },
    {
      title: 'Основные блюда',
      items: [
        {
          name: 'Стейк Рибай',
          description: 'Мраморная говядина 300г с овощами гриль и соусом демиглас',
          price: '45 BYN'
        },
        {
          name: 'Филе лосося',
          description: 'На подушке из шпината с лимонным маслом',
          price: '38 BYN'
        },
        {
          name: 'Каре ягненка',
          description: 'С розмарином, картофельным пюре и мятным соусом',
          price: '42 BYN'
        },
        {
          name: 'Равиоли с трюфелем',
          description: 'Домашняя паста с грибным кремом и стружкой трюфеля',
          price: '28 BYN'
        },
        {
          name: 'Утиная грудка',
          description: 'С апельсиновым соусом и картофелем гратен',
          price: '36 BYN'
        }
      ]
    },
    {
      title: 'Десерты',
      items: [
        {
          name: 'Тирамису',
          description: 'Классический итальянский десерт с маскарпоне',
          price: '12 BYN'
        },
        {
          name: 'Крем-брюле',
          description: 'Ванильный крем с карамельной корочкой',
          price: '10 BYN'
        },
        {
          name: 'Шоколадный фондан',
          description: 'С жидким центром и шариком ванильного мороженого',
          price: '14 BYN'
        },
        {
          name: 'Панна-котта',
          description: 'С ягодным соусом и свежей мятой',
          price: '11 BYN'
        }
      ]
    },
    {
      title: 'Напитки',
      items: [
        {
          name: 'Эспрессо',
          description: 'Классический итальянский кофе',
          price: '4 BYN'
        },
        {
          name: 'Капучино',
          description: 'Эспрессо с взбитым молоком',
          price: '6 BYN'
        },
        {
          name: 'Свежевыжатый сок',
          description: 'Апельсин / грейпфрут / яблоко',
          price: '8 BYN'
        },
        {
          name: 'Домашний лимонад',
          description: 'Освежающий напиток с мятой',
          price: '7 BYN'
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-32 bg-[#e8e5e0]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2
            className={`text-3xl md:text-5xl font-light text-gray-900 mb-4 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Наше меню
          </h2>
          <p
            className={`text-gray-600 text-lg mt-6 max-w-2xl mx-auto transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Тщательно подобранные блюда для истинных гурманов
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          {menuCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-8 py-3 text-sm transition-all duration-300 hover:scale-105 ${
                activeCategory === index
                  ? 'bg-neutral-700 text-white'
                  : 'border border-neutral-700 text-neutral-700 hover:bg-neutral-700 hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-500 ${
                activeCategory === categoryIndex
                  ? 'opacity-100 block'
                  : 'opacity-0 hidden'
              }`}
            >
              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`bg-white p-8 hover:shadow-xl transition-all duration-500 hover:translate-x-2 transform ${
                      isVisible && activeCategory === categoryIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${0.6 + itemIndex * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-light text-gray-900">{item.name}</h3>
                      <span className="text-lg text-neutral-700 font-light ml-4">{item.price}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <p className="text-gray-600 text-sm">
            * Цены указаны в белорусских рублях и могут быть изменены
          </p>
        </div>
      </div>
    </section>
  );
}
