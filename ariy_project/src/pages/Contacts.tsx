
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";


const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.message) {
      toast({
        title: "Помилка",
        description: "Будь ласка, заповніть обов'язкові поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Надсилаємо дані на backend
      const response = await fetch(BACKEND_URL+"/api/connect-to-us-telegram", { // заміни адресу!
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone,
          message: contactForm.message,
        }),
      });

      if (!response.ok) throw new Error("Server error");
       console.log("Response:", response);
      if (response.status !== 200) {
        throw new Error("Failed to send message");
      }
      console.log("Message sent successfully");

      toast({
        title: "Повідомлення відправлено!",
        description: "Ми зв'яжемося з вами найближчим часом",
      });

      setContactForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Помилка",
        description: "Не вдалося відправити повідомлення. Спробуйте ще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Контакти
          </h1>
          <p className="text-xl text-gray-600">
            Зв'яжіться з нами зручним для вас шляхом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="text-brand-red" />
                  <span>Адреса</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  вул. Автомобільна, 123<br />
                  м. Київ, 02000<br />
                  Україна
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="text-brand-red" />
                  <span>Телефони</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700">
                  <a href="tel:+380123456789" className="hover:text-blue-600">
                    +38 (012) 345-67-89
                  </a>
                </p>
                <p className="text-gray-700">
                  <a href="tel:+380987654321" className="hover:text-blue-600">
                    +38 (098) 765-43-21
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="text-brand-red" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <a href="mailto:info@tirewheel.com" className="hover:text-blue-600">
                    info@tirewheel.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="text-brand-red" />
                  <span>Години роботи</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-gray-700">
                  <p>Понеділок - П'ятниця: 9:00 - 18:00</p>
                  <p>Субота: 9:00 - 16:00</p>
                  <p>Неділя: Вихідний</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="text-brand-red" />
                  <span>Месенджери</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex space-x-4">
                  <Button asChild className="bg-blue-500 hover:bg-blue-600">
                    <a 
                      href="https://t.me/your_telegram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="text-white font-bold py-2 px-5 shadow-lg border-0"
                    style={{
                      background: "linear-gradient(90deg, #fd5 0%, #f15 30%, #c13584 60%, #833ab4 80%, #515bd4 100%)"
                    }}
                  >
                    <a 
                      href="https://instagram.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </Button>
                  <Button asChild className="bg-purple-500 hover:bg-purple-600">
                    <a 
                      href="viber://chat?number=380123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Viber
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="space-y-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Написати нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Ім'я *</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Ваше ім'я"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input
                      id="contact-phone"
                      value={contactForm.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+38 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Повідомлення *</Label>
                    <Textarea
                      id="contact-message"
                      value={contactForm.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Ваше повідомлення..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-red hover:bg-brand-red-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Відправляємо..." : "Відправити повідомлення"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Як нас знайти</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-brand-dark h-64 rounded-lg shadow-lg border border-brand-gray overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.9811437565604!2d32.10639737649633!3d49.40926227141212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b5957e2a57b%3A0x14d5c528f53f6af!2sARIY%20garage!5e0!3m2!1sen!2sua!4v1748005127598!5m2!1sen!2sua"
                    className="w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
