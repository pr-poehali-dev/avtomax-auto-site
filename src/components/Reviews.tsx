import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Александр Петров",
      rating: 5,
      date: "15 декабря 2024",
      text: "Отличный сервис! Быстро поменяли масло и провели диагностику. Мастера профессиональные, все объяснили понятно. Цены адекватные, буду обращаться еще.",
      service: "Замена масла + диагностика",
    },
    {
      name: "Мария Соколова",
      rating: 5,
      date: "12 декабря 2024",
      text: "Записывалась через сайт - очень удобно! Приехала точно в назначенное время, никого не ждала. Шиномонтаж сделали быстро и качественно.",
      service: "Шиномонтаж",
    },
    {
      name: "Дмитрий Васильев",
      rating: 5,
      date: "8 декабря 2024",
      text: "После ДТП делал кузовной ремонт. Работой доволен на 100% - как новая машина! Сроки соблюдены, цена как договаривались. Рекомендую АВТОМАКС!",
      service: "Кузовной ремонт",
    },
    {
      name: "Елена Морозова",
      rating: 5,
      date: "5 декабря 2024",
      text: "Понравилось внимательное отношение к клиентам. Мастер все показал, объяснил что и зачем делает. Калькулятор на сайте помог заранее рассчитать стоимость.",
      service: "Техническое обслуживание",
    },
    {
      name: "Игорь Сидоров",
      rating: 4,
      date: "2 декабря 2024",
      text: "Хороший автосервис, современное оборудование. Единственное - немного долго ждал запчасти, но мастера предупредили заранее. В целом рекомендую.",
      service: "Ремонт двигателя",
    },
    {
      name: "Анна Козлова",
      rating: 5,
      date: "28 ноября 2024",
      text: "Спасибо за качественную работу! Тормоза работают отлично, чувствую себя за рулем уверенно. Приятные цены и хорошее обслуживание.",
      service: "Ремонт тормозной системы",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 1000 довольных клиентов доверяют нам обслуживание своих
            автомобилей
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              4.9
            </div>
            <div className="flex justify-center mb-2">{renderStars(5)}</div>
            <div className="text-gray-600">Средняя оценка</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              1000+
            </div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              5
            </div>
            <div className="text-gray-600">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              98%
            </div>
            <div className="text-gray-600">Рекомендуют нас</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex">{renderStars(review.rating)}</div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">{review.text}</p>

                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Проверенный отзыв
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Оставьте свой отзыв
            </h3>
            <p className="text-gray-600 mb-6">
              Поделитесь опытом обслуживания в нашем автосервисе
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://yandex.ru/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
              >
                <Icon name="Star" size={20} className="mr-2" />
                Яндекс.Карты
              </a>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Icon name="Star" size={20} className="mr-2" />
                Google Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
