import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
                Профессиональный
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  автосервис
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Качественное обслуживание вашего автомобиля с гарантией и
                современным оборудованием
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} className="text-green-400" />
                <span>Гарантия качества</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-green-400" />
                <span>Быстрое обслуживание</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-green-400" />
                <span>Опытные мастера</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => scrollToSection("booking")}
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на сервис
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => scrollToSection("calculator")}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-12 text-center">
                <Icon
                  name="Car"
                  size={120}
                  className="mx-auto mb-4 text-white"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Современное оборудование
                </h3>
                <p className="text-blue-100">
                  Используем только профессиональные инструменты
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
