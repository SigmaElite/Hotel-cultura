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
      title: 'Завтраки',
      items: [
        {
          name: 'Английский завтрак с глазуньей',
          description: 'Сочетаются глазунья, пармская ветчина, бекон, помидоры, грибы и картофель фри. Подается с тостами и соусом. 350 г',
          price: '21 Br',
          image: '/photo_1_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Английский завтрак со скрэмблом',
          description: 'Вкусный и полезный завтрак для всей семьи. Включает яичницу-скрэмбл, пармскую ветчину, бекон, помидоры, грибы. 350 г',
          price: '21 Br',
          image: '/photo_2_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Овсяная каша с бананом',
          description: 'Мягкая овсяная каша с кремовой текстурой арахисовой пасты и кусочками спелого банана. Украсьте медом и орехами. 220 г',
          price: '15 Br',
          image: '/photo_3_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Равиолли с творогом',
          description: 'Нежный творожный десерт с ароматными ягодами и хрустящим миндалем. Поливается медом и подается с взбитой сливкой. 190 г',
          price: '15 Br',
          image: '/photo_4_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Сырники с малиновым соусом',
          description: 'Мягкие сырники с золотистой корочкой обладают приятным творожным вкусом. Подаются с домашним малиновым соусом. 160 г',
          price: '16 Br',
          image: '/photo_5_2025-10-31_18-24-38.jpg'
        }
      ]
    },
    {
      title: 'Закуски',
      items: [
        {
          name: 'Брускетты с белыми грибами',
          description: 'Нежные белые грибы в сочетании с насыщенным вкусом кедровых орешков и тертым пармезаном на хрустящем тосте. 140 г',
          price: '16 Br',
          image: '/photo_6_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Брускетты с папоротником',
          description: 'Нежные побеги папоротника обладают слегка ореховым ароматом, который прекрасно дополняется свежей зеленью на поджаренном хлебе. 140 г',
          price: '16 Br',
          image: '/photo_7_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Брускетты с сёмгой',
          description: 'Нежная сёмга отлично сочетается с мягким сыром. Лёгкая кислинка лимона и свежая микрозелень создают идеальный баланс вкусов. 140 г',
          price: '18 Br',
          image: '/photo_8_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Драники с лососем',
          description: 'Гармонично сочетаются нежность драников, богатый вкус лосося, кремовая текстура сливочного сыра и яркий акцент красной икры. 160 г',
          price: '20 Br',
          image: '/photo_9_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Киш с форелью и брокколи',
          description: 'Нежное песочное тесто в сочетании с сочной форелью и хрустящей брокколи, запеченными в сливочно-яичной заливке. 120 г',
          price: '14 Br',
          image: '/photo_10_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Мясное антипасто',
          description: 'Нежные мясные деликатесы: ветчина, салями, прошутто и копченая грудка. Подается с оливками, маринованными овощами. 220 г',
          price: '28 Br',
          image: '/photo_11_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Обжаренные гедза с индейкой',
          description: 'Гармонично сочетаются насыщенный вкус обжаренных гедз с нежным фаршем из индейки и острым тайским соусом. 150 г',
          price: '16 Br',
          image: '/photo_12_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Пирог с лисичками и шпинатом',
          description: 'Рассыпчатое тесто гармонично сочетается с мягкой начинкой из лесных лисичек и нежного шпината, приправленных сливками. 120 г',
          price: '13 Br',
          image: '/photo_13_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Сырное антипасто',
          description: 'Нежные и ароматные сыры: бри, дор блю, пармезан и моцарелла. Подается с медом, орехами, вялеными томатами и хлебом. 220 г',
          price: '28 Br',
          image: '/photo_14_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Утиный паштет с яблоком',
          description: 'Нежный утиный паштет с кисло-сладкой ноткой от запеченного яблока и ароматом специй. Подается с тостами. 140 г',
          price: '17 Br',
          image: '/photo_15_2025-10-31_18-24-38.jpg'
        }
      ]
    },
    {
      title: 'Салаты',
      items: [
        {
          name: 'Салат с мандарином',
          description: 'Мягкие сыры прекрасно гармонируют с нежностью мандарина и сладостью манго. Пастрами добавляет пикантности. 170 г',
          price: '21 Br',
          image: '/photo_16_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Салат с тунцом',
          description: 'Тунец придаёт салату насыщенный вкус, яйцо пашот — нежную текстуру, а тыквенные семечки — хрустящую нотку. 230 г',
          price: '21 Br',
          image: '/photo_17_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Салат с филе индейки',
          description: 'Индейка придаёт салату насыщенный вкус и сытность, а микс из свежих томатов — сочность. Кунжутно-медовая заправка. 230 г',
          price: '21 Br',
          image: '/photo_18_2025-10-31_18-24-38.jpg'
        }
      ]
    },
    {
      title: 'Супы',
      items: [
        {
          name: 'Рамен с цыпленком',
          description: 'Гармонично сочетаются насыщенный кисло-сладкий вкус бульона, нежное куриное филе, рисовая лапша и свежие овощи. 500 г',
          price: '20 Br',
          image: '/photo_19_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Суп с лесными грибами и полбой',
          description: 'Гармонично сочетаются насыщенный вкус лесных грибов и ароматная полба. Приправлен свежей зеленью, подается с хлебом. 350 г',
          price: '16 Br',
          image: '/photo_20_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Том ям с морепродуктами',
          description: 'Гармонично сочетаются насыщенный кисло-острый вкус тайского бульона, нежные морепродукты и стеклянная лапша. 420 г',
          price: '24 Br',
          image: '/photo_21_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Тыквенный крем-суп',
          description: 'Гармонично сочетаются сладковатый вкус тыквы и пикантный аромат пармезана. Нежная кремовая текстура, подается с гренками. 350 г',
          price: '18 Br',
          image: '/photo_22_2025-10-31_18-24-38.jpg'
        }
      ]
    },
    {
      title: 'Горячие блюда',
      items: [
        {
          name: 'Говядина с клюквенным соусом',
          description: 'Гармонично сочетаются насыщенный вкус нежной говядины и кисло-сладкий аромат клюквенного соуса. С картофельным пюре. 300 г',
          price: '25 Br',
          image: '/photo_23_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Индейка с соусом из белых грибов',
          description: 'Индейка сочная и мягкая. Грибной соус придает глубину вкуса, а воздушный мусс из батата добавляет сладковатую нотку. 200 г',
          price: '22 Br',
          image: '/photo_24_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Пад-тай с цыпленком',
          description: 'Сочетание нежного куриного филе, хрустящих овощей и рисовой лапши в сладко-остром соусе. Посыпано обжаренным арахисом. 320 г',
          price: '24 Br',
          image: '/photo_25_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Паста фетучини с лососем',
          description: 'Фетучини идеально сочетается с нежным лососем и кремовым сливочным соусом. Ароматная зелень и немного лимонной цедры. 220 г',
          price: '24 Br',
          image: '/photo_26_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Пибимпаб с цыпленком',
          description: 'Гармонично сочетаются рис, нежное куриное филе, маринованные овощи, яичница-глазунья и острый соус. 410 г',
          price: '22 Br',
          image: '/photo_27_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Стейк из лосося',
          description: 'Лосось нежный и сочный. Грибной соус придает ему насыщенность, а свежий сезонный салат с легким заправкой освежает вкус. 230 г',
          price: '28 Br',
          image: '/photo_28_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Утиная грудка с пититимом',
          description: 'Нежное утиное мясо прекрасно гармонирует с рассыпчатым пититимом и ярким, слегка кисловатым малиновым соусом. 210 г',
          price: '22 Br',
          image: '/photo_29_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Филе цыплёнка с ежевичным соусом',
          description: 'Сочное филе цыплёнка с муссом из батата — идеальное сочетание нежности и сладковатой нотки. Ежевичный соус добавляет яркости. 200 г',
          price: '21 Br',
          image: '/photo_30_2025-10-31_18-24-38.jpg'
        }
      ]
    },
    {
      title: 'Десерты',
      items: [
        {
          name: 'Больше чем шу',
          description: 'Воздушная булочка шу дополнена нежным заварным кремом и ягодами. Посыпана сахарной пудрой, подается с черничным соусом. 120 г',
          price: '15 Br',
          image: '/photo_31_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Гедза с манго',
          description: 'Мягкие и упругие гедза с сочной начинкой гармонично сочетаются с кремом маскарпоне и кубиками спелого манго. 120 г',
          price: '15 Br',
          image: '/photo_32_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Гедза с яблоком',
          description: 'Гармонично сочетаются насыщенный вкус гедз с начинкой из яблочного джема и нежным кремом маскарпоне. 120 г',
          price: '15 Br',
          image: '/photo_6_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Павлова с маскарпоне',
          description: 'Нежный десерт с текстурой облака. Воздушный меренговый корж заполнен кремом маскарпоне и свежими сезонными ягодами. 110 г',
          price: '13 Br',
          image: '/photo_7_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Черничный тарт',
          description: 'Нежный миндальный крем гармонично сочетается с ягодной начинкой из черники. Подается с легкой взбитой сливкой. 130 г',
          price: '13 Br',
          image: '/photo_8_2025-10-31_18-24-38.jpg'
        },
        {
          name: 'Яблочный пирог',
          description: 'Десерт сочетает в себе сладость яблок и пряную нотку корицы. Подается с яблочным чатни и шариком мороженого. 150 г',
          price: '13 Br',
          image: '/photo_9_2025-10-31_18-24-38.jpg'
        }
      ]
    },
    {
      title: 'Горячие напитки',
      items: [
        {
          name: 'Американо',
          description: 'Классический кофейный напиток, обладающий крепким вкусом и ароматом свежеобжаренных зерен. 200 мл',
          price: '5 Br',
          image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Двойной американо',
          description: 'Классический напиток с более насыщенным кофейным ароматом благодаря двойной порции эспрессо. 300 мл',
          price: '7 Br',
          image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Какао с маршмеллоу',
          description: 'Обладает насыщенным вкусом, в котором гармонично сочетаются шоколадная нотка и сладость воздушных маршмеллоу. 350 мл',
          price: '8 Br',
          image: 'https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Капучино',
          description: 'Популярный кофейный напиток, состоящий из эспрессо и горячего молока с густой пенкой. Идеально для уютного утра. 200 мл',
          price: '6 Br',
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Латте',
          description: 'Популярный кофейный напиток, состоящий из эспрессо и горячего молока с тонкой пенкой. Более мягкий и молочный. 300 мл',
          price: '7 Br',
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Мокачино',
          description: 'Популярный кофейный напиток, состоящий из эспрессо и горячего молока с добавлением шоколада. Сладкий и бархатистый. 200 мл',
          price: '7 Br',
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Раф',
          description: 'Кофейный напиток, который сочетает в себе эспрессо и пенку из ванильного молока. Нежный, сладкий и ароматный. 200 мл',
          price: '7 Br',
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          name: 'Флет уайт',
          description: 'Кофейный напиток с эспрессо и молоком с очень тонкой, почти невидимой пенкой. Идеален для мягкого баланса вкусов. 200 мл',
          price: '7 Br',
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600'
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
                    className={`bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-gray-300 group transform ${
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
      </div>
    </section>
  );
}
