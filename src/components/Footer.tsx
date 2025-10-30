import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-light mb-4">ОТЕЛЬ КУЛЬТУРА</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Уединённое место для побега из шумных мегаполисов
            </p>
          </div>

          <div>
            <h4 className="text-sm font-normal mb-4">КОНТАКТЫ</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>г. Гродно, ул. Советская, 3</li>
              <li>
                <a href="tel:+375152123456" className="hover:text-white transition-colors">
                  +375 (152) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@hotelkultura.by" className="hover:text-white transition-colors">
                  info@hotelkultura.by
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-normal mb-4">СОЦИАЛЬНЫЕ СЕТИ</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Отель Культура. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
