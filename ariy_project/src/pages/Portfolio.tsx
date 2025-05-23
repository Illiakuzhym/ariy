
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "tire-service",
      title: "BMW 5 Series - Шиномонтаж",
      beforeImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&brightness=1.2",
      description: "Заміна літньої гуми на зимову з балансуванням"
    },
    {
      id: 2,
      category: "wheel-painting",
      title: "Mercedes AMG - Покраска дисків",
      beforeImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&brightness=1.2",
      description: "Відновлення та покраска в чорний матовий колір"
    },
    {
      id: 3,
      category: "caliper-painting",
      title: "Audi S4 - Покраска супортів",
      beforeImage: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400&h=300&fit=crop&brightness=1.2",
      description: "Покраска супортів у яскраво-червоний колір"
    },
    {
      id: 4,
      category: "wheel-painting",
      title: "Volkswagen Golf - Реставрація дисків",
      beforeImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop&brightness=1.2",
      description: "Повна реставрація після пошкодження"
    },
    {
      id: 5,
      category: "tire-service",
      title: "Range Rover - Ремонт проколу",
      beforeImage: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=400&h=300&fit=crop&brightness=1.2",
      description: "Ремонт бокового пошкодження шини"
    },
    {
      id: 6,
      category: "caliper-painting",
      title: "Porsche 911 - Комплексна покраска",
      beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop&brightness=1.2",
      description: "Покраска супортів та деталей підвіски"
    }
  ];

  const filters = [
    { id: "all", name: "Всі роботи" },
    { id: "tire-service", name: "Шиномонтаж" },
    { id: "wheel-painting", name: "Покраска дисків" },
    { id: "caliper-painting", name: "Покраска супортів" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Портфоліо робіт
          </h1>
          <p className="text-xl text-gray-600">
            Приклади наших виконаних проектів
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={activeFilter === filter.id ? "bg-brand-red hover:bg-brand-red-dark" : ""}
            >
              {filter.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-2 gap-4 p-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">ДО</h3>
                  <img 
                    src={item.beforeImage} 
                    alt={`${item.title} - до`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">ПІСЛЯ</h3>
                  <img 
                    src={item.afterImage} 
                    alt={`${item.title} - після`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Немає робіт у цій категорії
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
