
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";
import { Shield, Award, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&brightness=1.2",
      description: "Шиномонтаж Mercedes"
    },
    {
      before: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400&h=300&fit=crop&brightness=1.2",
      description: "Покраска супортів Audi"
    }
  ];

  const services = [
    {
      title: "Шиномонтаж",
      description: "Професійний монтаж та балансування коліс",
      price: "від 150 грн",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop"
    },
    {
      title: "Покраска дисків",
      description: "Відновлення та покраска автомобільних дисків",
      price: "від 800 грн",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop"
    },
    {
      title: "Покраска супортів",
      description: "Покраска супортів та інших деталей",
      price: "від 500 грн",
      image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=300&h=200&fit=crop"
    }
  ];

  const reviews = [
    {
      name: "Олександр М.",
      rating: 5,
      text: "Відмінна робота! Диски виглядають як нові. Рекомендую всім!"
    },
    {
      name: "Марина К.", 
      rating: 5,
      text: "Швидко, якісно, за розумну ціну. Обов'язково повернуся!"
    },
    {
      name: "Дмитро Л.",
      rating: 5,
      text: "Професійний підхід до справи. Результат перевершив очікування."
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking-form');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-96 flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=1200&h=600&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Професійний сервіс шин та дисків
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Якість, швидкість, гарантія
          </p>
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-brand-red hover:bg-brand-red-dark text-white text-lg px-8 py-3 font-bold rounded-xl shadow-lg transition"
          >
            Записатися зараз
          </Button>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Чому обирають нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1 */}
          <div className="text-center">
            <div className="bg-brand-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
              <Shield className="text-brand-red" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-brand-red">Гарантія якості</h3>
            <p className="text-brand-light-gray">Надаємо гарантію на всі види робіт</p>
          </div>
          {/* 2 */}
          <div className="text-center">
            <div className="bg-brand-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
              <Award className="text-brand-red" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-brand-red">Досвід 10+ років</h3>
            <p className="text-brand-light-gray">Професійні майстри з багатолітнім досвідом</p>
          </div>
          {/* 3 */}
          <div className="text-center">
            <div className="bg-brand-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
              <Star className="text-brand-red" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-brand-red">Сучасне обладнання</h3>
            <p className="text-brand-light-gray">Використовуємо найсучасніше обладнання</p>
          </div>
        </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Наші послуги та ціни
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-brand-red">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/*
      {/* Gallery }
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Галерея робіт
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">До</h3>
                <img 
                  src={galleryImages[currentImageIndex].before}
                  alt="До роботи"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Після</h3>
                <img 
                  src={galleryImages[currentImageIndex].after}
                  alt="Після роботи"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              {galleryImages[currentImageIndex].description}
            </p>
            
            <button 
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
      */}
      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Записатися на послугу
          </h2>
          <BookingForm />
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Відгуки клієнтів
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <section className="py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Контактна інформація */}
            <div>
              <h2 className="text-3xl font-extrabold mb-6 text-brand-red">Контакти</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="font-semibold text-brand-red mr-2">Адреса:</span>
                  вул. Автомобільна, 123, Київ
                </p>
                <p className="flex items-center">
                  <span className="font-semibold text-brand-red mr-2">Телефон:</span>
                  +38 (012) 345-67-89
                </p>
                <p className="flex items-center">
                  <span className="font-semibold text-brand-red mr-2">Години роботи:</span>
                  Пн-Пт: 9:00-18:00, Сб: 9:00-16:00
                </p>
              </div>
            </div>
            {/* Карта */}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
