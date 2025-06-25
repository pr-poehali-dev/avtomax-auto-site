import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <Icon name="Car" size={28} className="text-white" />
              </div>
              <span className="text-2xl font-bold font-montserrat">
                АВТОМАКС
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Профессиональный автосервис с современным оборудованием и опытными
              мастерами. Обслуживаем автомобили всех марок с гарантией качества.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Техническое обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ремонт двигателя
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Тормозная система
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Шиномонтаж
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Кузовной ремонт
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Электрика
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2 text-blue-400" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2 text-blue-400" />
                <span>info@automax.ru</span>
              </div>
              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  size={16}
                  className="mr-2 text-blue-400 mt-1"
                />
                <span>г. Москва, ул. Автомобильная, 15</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2 text-blue-400" />
                <span>
                  Пн-Пт: 9:00-19:00
                  <br />
                  Сб-Вс: 10:00-16:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 АВТОМАКС. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
