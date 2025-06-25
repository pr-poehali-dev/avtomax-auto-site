import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Settings",
      title: "Техническое обслуживание",
      description: "Полное ТО согласно регламенту производителя",
      features: [
        "Замена масла и фильтров",
        "Проверка тормозной системы",
        "Диагностика подвески",
      ],
      price: "от 3 500 ₽",
    },
    {
      icon: "Wrench",
      title: "Ремонт двигателя",
      description: "Профессиональный ремонт любой сложности",
      features: [
        "Капитальный ремонт",
        "Замена ГРМ",
        "Ремонт топливной системы",
      ],
      price: "от 15 000 ₽",
    },
    {
      icon: "Shield",
      title: "Тормозная система",
      description: "Безопасность на дороге - наш приоритет",
      features: [
        "Замена колодок и дисков",
        "Прокачка тормозов",
        "Ремонт суппортов",
      ],
      price: "от 2 500 ₽",
    },
    {
      icon: "Zap",
      title: "Электрика и электроника",
      description: "Современная диагностика и ремонт",
      features: [
        "Компьютерная диагностика",
        "Ремонт проводки",
        "Замена датчиков",
      ],
      price: "от 1 800 ₽",
    },
    {
      icon: "Gauge",
      title: "Шиномонтаж",
      description: "Быстро и качественно в любое время",
      features: [
        "Сезонная замена шин",
        "Балансировка колес",
        "Ремонт проколов",
      ],
      price: "от 400 ₽/колесо",
    },
    {
      icon: "Paintbrush",
      title: "Кузовной ремонт",
      description: "Восстановление после ДТП и коррозии",
      features: [
        "Рихтовка и покраска",
        "Полировка кузова",
        "Антикоррозийная обработка",
      ],
      price: "от 8 000 ₽",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по обслуживанию и ремонту автомобилей с
            использованием современного оборудования
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    <Icon
                      name={service.icon as any}
                      size={28}
                      className="text-white"
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Гарантия качества
              </h3>
              <p className="text-gray-600">
                На все работы предоставляется гарантия до 12 месяцев
              </p>
            </div>
            <div>
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Icon name="Clock" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Быстрое обслуживание
              </h3>
              <p className="text-gray-600">
                Соблюдаем сроки и ценим ваше время
              </p>
            </div>
            <div>
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Icon name="Users" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Опытные мастера
              </h3>
              <p className="text-gray-600">
                Сертифицированные специалисты с опытом работы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
