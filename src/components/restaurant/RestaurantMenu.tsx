import { useEffect, useRef, useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
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
          price: '18 BYN',
          image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Тартар из лосося',
          description: 'Свежий лосось с авокадо, каперсами и лимонным кремом',
          price: '22 BYN',
          image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Буррата с томатами',
          description: 'Итальянский сыр с черри-томатами и базиликовым песто',
          price: '16 BYN',
          image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Фуа-гра',
          description: 'Утиная печень с карамелизированными яблоками и бриошью',
          price: '32 BYN',
          image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    {
      title: 'Основные блюда',
      items: [
        {
          name: 'Стейк Рибай',
          description: 'Мраморная говядина 300г с овощами гриль и соусом демиглас',
          price: '45 BYN',
          image: 'https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Филе лосося',
          description: 'На подушке из шпината с лимонным маслом',
          price: '38 BYN',
          image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Каре ягненка',
          description: 'С розмарином, картофельным пюре и мятным соусом',
          price: '42 BYN',
          image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Равиоли с трюфелем',
          description: 'Домашняя паста с грибным кремом и стружкой трюфеля',
          price: '28 BYN',
          image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Утиная грудка',
          description: 'С апельсиновым соусом и картофелем гратен',
          price: '36 BYN',
          image: 'https://images.pexels.com/photos/8753657/pexels-photo-8753657.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    {
      title: 'Десерты',
      items: [
        {
          name: 'Тирамису',
          description: 'Классический итальянский десерт с маскарпоне',
          price: '12 BYN',
          image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Крем-брюле',
          description: 'Ванильный крем с карамельной корочкой',
          price: '10 BYN',
          image: 'https://images.pexels.com/photos/14477887/pexels-photo-14477887.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Шоколадный фондан',
          description: 'С жидким центром и шариком ванильного мороженого',
          price: '14 BYN',
          image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Панна-котта',
          description: 'С ягодным соусом и свежей мятой',
          price: '11 BYN',
          image: 'https://images.pexels.com/photos/5702806/pexels-photo-5702806.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    {
      title: 'Напитки',
      items: [
        {
          name: 'Эспрессо',
          description: 'Классический итальянский кофе',
          price: '4 BYN',
          image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Капучино',
          description: 'Эспрессо с взбитым молоком',
          price: '6 BYN',
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Свежевыжатый сок',
          description: 'Апельсин / грейпфрут / яблоко',
          price: '8 BYN',
          image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Домашний лимонад',
          description: 'Освежающий напиток с мятой',
          price: '7 BYN',
          image: 'https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=600'
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

        <div className="max-w-7xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-500 ${
                activeCategory === categoryIndex
                  ? 'opacity-100 block'
                  : 'opacity-0 hidden'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group transform ${
                      isVisible && activeCategory === categoryIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${0.6 + itemIndex * 0.1}s` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-light text-gray-900">{item.name}</h3>
                        <span className="text-lg text-neutral-700 font-light ml-4 whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
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
