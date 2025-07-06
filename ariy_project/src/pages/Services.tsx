
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BookingForm from "@/components/BookingForm";

const Services = () => {
  const services = [
    {
      title: "Шиномонтаж",
      description: "Повний спектр послуг з монтажу та обслуговування шин",
      image: "..//public/gallery/шинка.png",
      prices: [
        "R13-15 - 200 грн/шт",
        "R16-18 - 300 грн/шт", 
        "R19-22 - 300-400 грн/шт",
        "Додаткові витрати - від 100 грн"
      ]
    },
    {
      title: "Фарбування дисків",
      description: "Професійне фарбування та відновлення автомобільних дисків",
      image: "..//public/gallery/диск.JPEG",
      prices: [
        "Фарбування дисків R13-R16 - від 1000 грн/шт",
        "Фарбування дисків R17-R19 - від 1400 грн/шт",
        "Фарбування дисків R20+ - від 1750 грн/шт",
        "Відновлення після пошкодження - від 600 грн"
      ]
    },
    {
      title: "Фарбування супортів та деталей",
      description: "Фарбування гальмівних супортів та інших деталей підвіски",
      image: "..//public/gallery/супорт.jpg",
      prices: [
        "Фарбування супортів (комплект) - від 800 грн",
        "Фарбування деталей підвіски - від 300 грн",
        "Комплексна фарбування - від 1200 грн"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Скільки часу займає покраска дисків?",
      answer: "Покраска дисків займає від 2 до 4 робочих днів в залежності від складності роботи та кількості дисків."
    },
    {
      question: "Яка гарантія на виконані роботи?",
      answer: "Ми надаємо гарантію 3 місяців на покраску та 1 місяць на шиномонтажні роботи."
    },
    {
      question: "Чи можна залишити автомобіль на час виконання робіт?",
      answer: "Так, ви можете залишити автомобіль у нас. Ми маємо охоронювану парковку."
    },
    {
      question: "Які фарби ви використовуєте?",
      answer: "Ми використовуємо тільки якісні порошкові та рідкі фарби провідних виробників з високою стійкістю до зношування."
    },
    {
      question: "Чи працюєте ви з легковими та вантажними автомобілями?",
      answer: "Так, ми обслуговуємо як легкові автомобілі, так і легкі вантажівки та позашляховики."
    },
    {
      question: "Як можна оплатити послуги?",
      answer: "Приймаємо оплату готівкою та банківською картою. Можлива оплата частинами для дорогих послуг."
    },
    {
      question: "Чи можна подивитися на роботу в процесі?",
      answer: "Так, ми з радістю покажемо процес роботи та проконсультуємо з усіх питань."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Послуги та ціни
          </h1>
          <p className="text-xl text-gray-600">
            Детальна інформація про наші послуги
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
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
                <CardTitle className="mb-3 text-xl">{service.title}</CardTitle>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-red">Ціни:</h4>
                  <ul className="space-y-1">
                    {service.prices.map((price, priceIndex) => (
                      <li key={priceIndex} className="text-sm text-gray-700">
                        • {price}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Часті питання
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Записатися на послугу
          </h2>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Services;
