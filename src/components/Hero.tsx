export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hotel"
          loading="eager"
          fetchpriority="high"
          className="w-full h-full object-cover transition-transform duration-[10000ms] hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6 max-w-2xl leading-tight">
          Бутик-отель в историческом центре Гродно
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light">
          Искусство, культура и комфорт на улице Советская, 3
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#rooms"
            className="px-8 py-4 bg-neutral-700 text-white hover:bg-neutral-600 transition-all duration-300 hover:scale-105 text-center"
          >
            Забронировать
          </a>
        </div>
      </div>
    </section>
  );
}
