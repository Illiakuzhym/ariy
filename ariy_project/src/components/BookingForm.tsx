
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const BookingForm = ({ className }: { className?: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    datetime: "",
    comment: "",
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Шиномонтаж",
    "Покраска дисків",
    "Покраска супортів та деталей",
    "Комплексне обслуговування"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Помилка",
        description: "Будь ласка, заповніть обов'язкові поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Заявка відправлена!",
        description: "Ми зв'яжемося з вами найближчим часом",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        service: "",
        datetime: "",
        comment: "",
      });
      setPhoto(null);
    } catch (error) {
      toast({
        title: "Помилка",
        description: "Не вдалося відправити заявку. Спробуйте ще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={`w-full max-w-md mx-auto ${className}`} id="booking-form">
      <CardHeader>
        <CardTitle className="text-center text-gray-900">Швидке замовлення</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Ім'я *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Ваше ім'я"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон/Месенджер *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+38 (___) ___-__-__"
              required
            />
          </div>

          <div>
            <Label htmlFor="service">Послуга *</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Оберіть послугу" />
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

          <div>
            <Label htmlFor="datetime">Бажані дата та час</Label>
            <Input
              id="datetime"
              type="datetime-local"
              value={formData.datetime}
              onChange={(e) => handleInputChange("datetime", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="photo">Фото (необов'язково)</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>

          <div>
            <Label htmlFor="comment">Коментар</Label>
            <Textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => handleInputChange("comment", e.target.value)}
              placeholder="Додаткова інформація..."
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-5 py-2 rounded-xl shadow-xl transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Відправляємо..." : "Відправити заявку"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
