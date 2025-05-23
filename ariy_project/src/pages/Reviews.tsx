
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Олександр Михайлович",
      rating: 5,
      date: "15 листопада 2024",
      text: "Відмінна робота! Звернувся для покраски дисків на BMW. Результат перевершив всі очікування - диски виглядають краще ніж нові. Майстри професіонали, роботу виконали в строк. Рекомендую всім!",
      service: "Покраска дисків"
    },
    {
      id: 2,
      name: "Марина Коваленко",
      rating: 5,
      date: "8 листопада 2024",
      text: "Швидко, якісно, за розумну ціну. Потрібен був терміновий шиномонтаж, зробили все за годину. Персонал дуже ввічливий та професійний. Обов'язково повернуся та порекомендую друзям!",
      service: "Шиномонтаж"
    },
    {
      id: 3,
      name: "Дмитро Лисенко",
      rating: 5,
      date: "2 листопада 2024",
      text: "Професійний підхід до справи. Покрасили супорти на Audi, результат просто вражає! Сервіс на найвищому рівні, ціни адекватні. Рекомендую цей автосервіс!",
      service: "Покраска супортів"
    },
    {
      id: 4,
      name: "Анна Петренко",
      rating: 5,
      date: "28 жовтня 2024",
      text: "Дуже задоволена сервісом! Реставрували пошкоджений диск після попадання в яму. Зробили все ідеально, навіть не видно було де було пошкодження. Ціна виправдана якістю!",
      service: "Реставрація дисків"
    },
    {
      id: 5,
      name: "Василь Іванович",
      rating: 5,
      date: "22 жовтня 2024",
      text: "Звертався вже вдруге. Першого разу робили шиномонтаж, цього разу фарбували диски. В обох випадках все на найвищому рівні. Дякую за якісну роботу!",
      service: "Покраска дисків, Шиномонтаж"
    },
    {
      id: 6,
      name: "Оксана Мельник",
      rating: 5,
      date: "18 жовтня 2024",
      text: "Рекомендую на 100%! Професіонали своєї справи. Покрасили диски на Mercedes, результат просто ідеальний. Роботу виконали в строк, ціна відповідає якості.",
      service: "Покраска дисків"
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Відгуки клієнтів
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-6 h-6 ${star <= averageRating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xl font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600">({reviews.length} відгуків)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-brand-red font-medium">
                    Послуга: {review.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Залишити відгук
          </h2>
          <p className="text-gray-600 mb-6">
            Поділіться своїм досвідом співпраці з нами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-brand-red hover:bg-brand-red-dark"
            >
              <a 
                href="https://maps.app.goo.gl/qq5FstKmaAjeziW28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>Відгук на Google</span>
                <ExternalLink size={16} />
              </a>
            </Button>
            <Button 
              variant="outline"
              asChild
            >
              <a 
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>Відгук на Facebook</span>
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
