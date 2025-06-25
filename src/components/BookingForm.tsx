import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carBrand: "",
    carModel: "",
    year: "",
    service: "",
    date: "",
    time: "",
    comments: "",
    agreement: false,
  });

  const services = [
    "Техническое обслуживание",
    "Диагностика двигателя",
    "Ремонт тормозной системы",
    "Шиномонтаж",
    "Замена масла",
    "Кузовной ремонт",
    "Электрика",
    "Другое",
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("Необходимо согласие на обработку персональных данных");
      return;
    }
    console.log("Booking submitted:", formData);
    alert(
      "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.",
    );
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Онлайн-запись на сервис
          </h2>
          <p className="text-xl text-gray-600">
            Заполните форму и мы перезвоним вам для подтверждения записи
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Icon
                name="Calendar"
                size={28}
                className="mr-3 text-orange-500"
              />
              Форма записи
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>

              {/* Car Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Icon name="Car" size={20} className="mr-2 text-orange-500" />
                  Информация об автомобиле
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="carBrand">Марка *</Label>
                    <Input
                      id="carBrand"
                      placeholder="Toyota, BMW, Lada..."
                      value={formData.carBrand}
                      onChange={(e) =>
                        handleInputChange("carBrand", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carModel">Модель *</Label>
                    <Input
                      id="carModel"
                      placeholder="Camry, X5, Vesta..."
                      value={formData.carModel}
                      onChange={(e) =>
                        handleInputChange("carModel", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Год выпуска</Label>
                    <Input
                      id="year"
                      type="number"
                      placeholder="2020"
                      min="1980"
                      max={new Date().getFullYear()}
                      value={formData.year}
                      onChange={(e) =>
                        handleInputChange("year", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Service and Schedule */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Icon
                    name="Settings"
                    size={20}
                    className="mr-2 text-orange-500"
                  />
                  Услуга и время
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Тип услуги *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Желаемая дата *</Label>
                    <Input
                      id="date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Время *</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) =>
                        handleInputChange("time", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="space-y-2">
                <Label htmlFor="comments">Комментарии к заявке</Label>
                <Textarea
                  id="comments"
                  placeholder="Опишите проблему или особые пожелания..."
                  rows={3}
                  value={formData.comments}
                  onChange={(e) =>
                    handleInputChange("comments", e.target.value)
                  }
                />
              </div>

              {/* Agreement */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreement"
                  checked={formData.agreement}
                  onCheckedChange={(checked) =>
                    handleInputChange("agreement", checked as boolean)
                  }
                />
                <label
                  htmlFor="agreement"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Я согласен на обработку персональных данных и принимаю условия
                  пользовательского соглашения
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
