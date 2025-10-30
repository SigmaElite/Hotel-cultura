import { MapPin, Phone, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
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

  return (
    <section id="contact" className="py-32 bg-[#e8e5e0]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2
            className={`text-3xl md:text-5xl font-light text-gray-900 mb-4 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Где мы находимся
          </h2>
          <p
            className={`text-gray-600 text-lg mt-6 max-w-2xl transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            В самом сердце исторического Гродно, на улице Советская
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="space-y-10">
              <div
                className={`flex items-start gap-6 group hover:translate-x-4 transition-all duration-500 cursor-pointer transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-gray-900 mb-2">АДРЕС</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    г. Гродно, ул. Советская, 3<br />
                    Беларусь
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-6 group hover:translate-x-4 transition-all duration-500 cursor-pointer transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.8s' }}
              >
                <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-gray-900 mb-2">ТЕЛЕФОН</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    +375 (152) 123-45-67<br />
                    +375 (29) 123-45-67
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-6 group hover:translate-x-4 transition-all duration-500 cursor-pointer transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1s' }}
              >
                <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-gray-900 mb-2">EMAIL</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    info@hotelkultura.by<br />
                    booking@hotelkultura.by
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`h-[600px] overflow-hidden bg-neutral-100 transform transition-all duration-1000 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.0634707395957!2d24.14298!3d53.677754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfdfe0758b93c3%3A0x4f28a1e4b9c6f1a8!2z0YPQuy4g0KHQvtCy0LXRgtGB0LrQsNGPIDMsINCT0YDQvtC00L3Qvg!5e0!3m2!1sru!2sby!4v1234567890!5m2!1sru!2sby"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
