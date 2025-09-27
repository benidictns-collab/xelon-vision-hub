import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Wrench, Microscope, Download, Eye, ShoppingCart } from "lucide-react";
import detectorImage from "@/assets/detector-hero.png";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("medical");

  const productCategories = [
    {
      id: "medical",
      name: "Медицина",
      icon: Heart,
      description: "Детекторы для медицинской диагностики"
    },
    {
      id: "industrial",
      name: "Промышленность", 
      icon: Wrench,
      description: "Решения для неразрушающего контроля"
    },
    {
      id: "scientific",
      name: "Наука",
      icon: Microscope,
      description: "Высокочувствительные научные детекторы"
    }
  ];

  const products = {
    medical: [
      {
        name: "XELON-RF",
        category: "Рентгенография",
        description: "Цифровой детектор для общей рентгенографии с высоким разрешением",
        specs: {
          size: "35x43 см",
          resolution: "150 мкм",
          sensitivity: "4000:1",
          interface: "Gigabit Ethernet"
        },
        applications: ["Рентгенография грудной клетки", "Ортопедия", "Педиатрия"],
        isNew: true
      },
      {
        name: "XELON-MAMMO",
        category: "Маммография",
        description: "Специализированный детектор для цифровой маммографии",
        specs: {
          size: "24x30 см",
          resolution: "85 мкм",
          sensitivity: "5000:1",
          interface: "Fiber Optic"
        },
        applications: ["Скрининг рака молочной железы", "Диагностическая маммография"],
        isNew: false
      },
      {
        name: "XELON-MOBILE",
        category: "Мобильные системы",
        description: "Беспроводной детектор для мобильной рентгенографии",
        specs: {
          size: "35x43 см",
          resolution: "150 мкм",
          battery: "4 часа работы",
          interface: "WiFi 6"
        },
        applications: ["Палатная рентгенография", "Операционная", "Реанимация"],
        isNew: true
      }
    ],
    industrial: [
      {
        name: "XELON-NDT",
        category: "Дефектоскопия",
        description: "Промышленный детектор для неразрушающего контроля",
        specs: {
          size: "40x40 см",
          resolution: "100 мкм",
          energy: "До 450 кВ",
          protection: "IP65"
        },
        applications: ["Контроль сварных швов", "Инспекция отливок", "Авиакосмическая отрасль"],
        isNew: false
      },
      {
        name: "XELON-SECURITY",
        category: "Безопасность",
        description: "Детектор для систем досмотра и безопасности",
        specs: {
          size: "60x45 см",
          resolution: "400 мкм",
          speed: "0.5 м/с",
          interface: "Dual Gigabit"
        },
        applications: ["Досмотр багажа", "Инспекция грузов", "Таможенный контроль"],
        isNew: true
      }
    ],
    scientific: [
      {
        name: "XELON-SYNC",
        category: "Синхротрон",
        description: "Высокочувствительный детектор для синхротронных исследований",
        specs: {
          size: "20x20 см",
          resolution: "50 мкм",
          framerate: "1000 fps",
          sensitivity: "Высокоэнергетические фотоны"
        },
        applications: ["Структурная биология", "Материаловедение", "Физика высоких энергий"],
        isNew: false
      },
      {
        name: "XELON-MICRO",
        category: "Микротомография",
        description: "Детектор для высокоразрешающей микротомографии",
        specs: {
          size: "10x10 см",
          resolution: "25 мкм",
          magnification: "До 100х",
          cooling: "Пельтье"
        },
        applications: ["3D микроскопия", "Анализ пористости", "Биомедицинские исследования"],
        isNew: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white">
              Каталог продукции
            </Badge>
            <h1 className="section-title mb-6">
              Цифровые плоскопанельные детекторы
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Полная линейка детекторов для любых задач визуализации - 
              от медицинской диагностики до научных исследований
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 max-w-2xl mx-auto">
              {productCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2 py-3"
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(products).map(([categoryId, categoryProducts]) => (
              <TabsContent key={categoryId} value={categoryId} className="mt-0">
                <div className="text-center mb-12 animate-fade-in-up">
                  <h2 className="section-title mb-4">
                    {productCategories.find(c => c.id === categoryId)?.name}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {productCategories.find(c => c.id === categoryId)?.description}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {categoryProducts.map((product, index) => (
                    <Card 
                      key={product.name}
                      className="hover-lift corporate-shadow animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative">
                        {product.isNew && (
                          <Badge className="absolute top-4 right-4 bg-success text-white z-10">
                            Новинка
                          </Badge>
                        )}
                        
                        <div className="h-48 bg-gradient-to-br from-accent/10 to-primary/10 p-6 flex items-center justify-center">
                          <img 
                            src={detectorImage} 
                            alt={product.name}
                            className="max-h-32 max-w-32 object-contain opacity-80"
                          />
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="mb-4">
                          <Badge variant="outline" className="mb-2">
                            {product.category}
                          </Badge>
                          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        {/* Specifications */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-sm">Основные характеристики:</h4>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {Object.entries(product.specs).map(([key, value]) => (
                              <div key={key} className="flex justify-between py-1 border-b border-border/50">
                                <span className="text-muted-foreground capitalize">{key}:</span>
                                <span className="font-medium">{String(value)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Applications */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2 text-sm">Применения:</h4>
                          <div className="space-y-1">
                            {product.applications.map((app) => (
                              <div key={app} className="flex items-start text-xs">
                                <div className="w-1 h-1 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{app}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-accent hover:bg-accent-light">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Запросить КП
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="section-title mb-6">Нужна консультация?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Наши специалисты помогут подобрать оптимальное решение 
            для ваших задач и предоставят техническую поддержку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light">
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg">
              Скачать полный каталог
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;