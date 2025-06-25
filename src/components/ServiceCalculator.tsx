import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface Service {
  id: string;
  name: string;
  price: number;
  category: string;
}

const services: Service[] = [
  {
    id: "oil-change",
    name: "Замена масла",
    price: 1500,
    category: "maintenance",
  },
  {
    id: "brake-pads",
    name: "Замена тормозных колодок",
    price: 3500,
    category: "brakes",
  },
  {
    id: "tire-change",
    name: "Шиномонтаж (4 колеса)",
    price: 2000,
    category: "tires",
  },
  {
    id: "battery-replacement",
    name: "Замена аккумулятора",
    price: 1000,
    category: "electrical",
  },
  {
    id: "engine-diagnostics",
    name: "Компьютерная диагностика",
    price: 2500,
    category: "diagnostics",
  },
  {
    id: "transmission-service",
    name: "Обслуживание КПП",
    price: 4500,
    category: "transmission",
  },
  {
    id: "air-filter",
    name: "Замена воздушного фильтра",
    price: 800,
    category: "maintenance",
  },
  {
    id: "spark-plugs",
    name: "Замена свечей зажигания",
    price: 1200,
    category: "engine",
  },
];

const ServiceCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [carType, setCarType] = useState<string>("");
  const [urgency, setUrgency] = useState<string>("standard");

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  const calculateTotal = () => {
    const baseTotal = services
      .filter((service) => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);

    let multiplier = 1;
    if (carType === "premium") multiplier = 1.3;
    else if (carType === "commercial") multiplier = 1.5;

    if (urgency === "urgent") multiplier *= 1.2;

    return Math.round(baseTotal * multiplier);
  };

  const total = calculateTotal();

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Калькулятор стоимости услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Рассчитайте предварительную стоимость обслуживания вашего автомобиля
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services Selection */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Settings"
                    size={24}
                    className="mr-2 text-blue-600"
                  />
                  Выберите услуги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <label
                        htmlFor={service.id}
                        className="flex-1 cursor-pointer"
                      >
                        <div className="font-medium text-gray-900">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          от {service.price.toLocaleString()} ₽
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Options */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Тип автомобиля</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={carType} onValueChange={setCarType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип авто" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">
                        Стандартный автомобиль
                      </SelectItem>
                      <SelectItem value="premium">
                        Премиум класс (+30%)
                      </SelectItem>
                      <SelectItem value="commercial">
                        Коммерческий транспорт (+50%)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Срочность</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">
                        Стандартно (2-3 дня)
                      </SelectItem>
                      <SelectItem value="urgent">Срочно (+20%)</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Price Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Calculator"
                    size={24}
                    className="mr-2 text-blue-600"
                  />
                  Итого к оплате
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedServices.length > 0 ? (
                    <>
                      <div className="space-y-2">
                        {services
                          .filter((service) =>
                            selectedServices.includes(service.id),
                          )
                          .map((service) => (
                            <div
                              key={service.id}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-gray-600">
                                {service.name}
                              </span>
                              <span>{service.price.toLocaleString()} ₽</span>
                            </div>
                          ))}
                      </div>
                      <hr />
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Итого:</span>
                        <span className="text-blue-600">
                          {total.toLocaleString()} ₽
                        </span>
                      </div>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        size="lg"
                      >
                        <Icon name="Calendar" size={20} className="mr-2" />
                        Записаться на обслуживание
                      </Button>
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Icon
                        name="Calculator"
                        size={48}
                        className="mx-auto mb-4 text-gray-300"
                      />
                      <p>Выберите услуги для расчета стоимости</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCalculator;
