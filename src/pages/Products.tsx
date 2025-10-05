import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Wrench, Microscope, Download, Eye, ShoppingCart } from "lucide-react";
import detectorImage from "@/assets/detector-hero.png";
import QuoteModal from "@/components/QuoteModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("medical");

  const productCategories = [
    {
      id: "medical",
      name: t('products.medical'),
      icon: Heart,
      description: t('products.medicalDesc')
    },
    {
      id: "industrial",
      name: t('products.industrial'), 
      icon: Wrench,
      description: t('products.industrialDesc')
    },
    {
      id: "scientific",
      name: t('products.scientific'),
      icon: Microscope,
      description: t('products.scientificDesc')
    }
  ];

  const products = {
    medical: [
      {
        id: "xelon-xray-1515",
        name: "XELON X-RAY-1515",
        category: "Рентгенография",
        description: "Активная область 153×153 мм, шаг пикселя 135 мкм",
        specs: {
          "Активная область": "153×153 мм",
          "Шаг пикселя": "135 мкм",
          "Матрица": "1536×1536",
          "Интерфейс": "USB 3.2, Wi-Fi 6E"
        },
        applications: ["Цифровая рентгенография R&F", "Ортопедия", "Педиатрия"],
        isNew: true
      },
      {
        id: "xelon-xray-1923",
        name: "XELON X-RAY-1923",
        category: "Рентгенография",
        description: "Активная область 190×230 мм, шаг пикселя 131 мкм",
        specs: {
          "Активная область": "190×230 мм",
          "Шаг пикселя": "131 мкм",
          "Матрица": "1900×2304",
          "Интерфейс": "USB 3.2, Wi-Fi 6E"
        },
        applications: ["Общая рентгенография", "Грудная клетка", "Конечности"],
        isNew: false
      },
      {
        id: "xelon-xray-2020",
        name: "XELON X-RAY-2020",
        category: "Рентгенография",
        description: "Активная область 204×204 мм, шаг пикселя 150 мкм",
        specs: {
          "Активная область": "204×204 мм",
          "Шаг пикселя": "150 мкм",
          "Матрица": "2048×2048",
          "Интерфейс": "USB 3.2, CoaXPress"
        },
        applications: ["Универсальная рентгенография", "Мобильные системы"],
        isNew: true
      },
      {
        id: "xelon-xray-2430",
        name: "XELON X-RAY-2430",
        category: "Рентгенография",
        description: "Активная область 247×307 мм, шаг пикселя 139 мкм",
        specs: {
          "Активная область": "247×307 мм",
          "Шаг пикселя": "139 мкм",
          "Матрица": "2476×3072",
          "Интерфейс": "USB 3.2, Wi-Fi 6E"
        },
        applications: ["Рентгенография грудной клетки", "Позвоночник"],
        isNew: false
      },
      {
        id: "xelon-xray-2530",
        name: "XELON X-RAY-2530",
        category: "Рентгенография",
        description: "Активная область 250×300 мм, шаг пикселя 99 мкм",
        specs: {
          "Активная область": "250×300 мм",
          "Шаг пикселя": "99 мкм",
          "Матрица": "2524×3036",
          "Интерфейс": "USB 3.2, CoaXPress"
        },
        applications: ["Высокоразрешающая рентгенография", "Детская радиология"],
        isNew: true
      },
      {
        id: "xelon-xray-3543",
        name: "XELON X-RAY-3543",
        category: "Рентгенография",
        description: "Активная область 358×430 мм, шаг пикселя 140 мкм",
        specs: {
          "Активная область": "358×430 мм",
          "Шаг пикселя": "140 мкм",
          "Матрица": "2560×3072",
          "Интерфейс": "CameraLink, USB 3.2"
        },
        applications: ["Полноформатная рентгенография", "Ортопедия"],
        isNew: false
      }
    ],
    industrial: [
      {
        id: "xelon-xray-55",
        name: "XELON X-RAY-55",
        category: "Микродефектоскопия",
        description: "Активная область 52.8×52.8 мм, шаг пикселя 50 мкм",
        specs: {
          "Активная область": "52.8×52.8 мм",
          "Шаг пикселя": "50 мкм",
          "Матрица": "1056×1056",
          "Разрешение": "до 10 ЛП/мм"
        },
        applications: ["Контроль микрообъектов", "Электроника", "Ювелирные изделия"],
        isNew: true
      },
      {
        id: "xelon-xray-1212",
        name: "XELON X-RAY-1212",
        category: "Дефектоскопия",
        description: "Активная область 120×120 мм, шаг пикселя 50 мкм",
        specs: {
          "Активная область": "120×120 мм",
          "Шаг пикселя": "50 мкм",
          "Матрица": "2240×2368",
          "Разрешение": "до 10 ЛП/мм"
        },
        applications: ["Контроль сварных швов", "Литье", "Композиты"],
        isNew: false
      },
      {
        id: "xelon-xray-1723",
        name: "XELON X-RAY-1723",
        category: "Дефектоскопия",
        description: "Активная область 172.8×230.4 мм, шаг пикселя 75 мкм",
        specs: {
          "Активная область": "172.8×230.4 мм",
          "Шаг пикселя": "75 мкм",
          "Матрица": "2304×3072",
          "Напряжение": "40–200 кВ"
        },
        applications: ["Авиакосмическая отрасль", "Трубопроводы", "Машиностроение"],
        isNew: true
      },
      {
        id: "xelon-xray-2222",
        name: "XELON X-RAY-2222",
        category: "Тяжелая промышленность",
        description: "Активная область 229.1×229.1 мм, высокоэнергетический",
        specs: {
          "Активная область": "229.1×229.1 мм",
          "Шаг пикселя": "179 мкм",
          "Матрица": "1280×1280",
          "Напряжение": "40–450 кВ"
        },
        applications: ["Толстые объекты", "Высокоэнергетические системы"],
        isNew: false
      }
    ],
    scientific: [
      {
        id: "xelon-xray-1723-scientific",
        name: "XELON X-RAY-1723",
        category: "Специализированная визуализация",
        description: "Активная область 172.8×230.4 мм, динамический тип",
        specs: {
          "Активная область": "172.8×230.4 мм",
          "Шаг пикселя": "95 мкм",
          "Матрица": "1792×2560",
          "Тип": "Динамический"
        },
        applications: ["Досмотр багажа", "Безопасность", "Таможня"],
        isNew: true
      },
      {
        id: "xelon-xray-4343",
        name: "XELON X-RAY-4343",
        category: "Досмотр транспорта",
        description: "Активная область 430×430 мм, для досмотра грузов",
        specs: {
          "Активная область": "430×430 мм",
          "Шаг пикселя": "139 мкм",
          "Матрица": "3072×3072",
          "Напряжение": "80–450 кВ"
        },
        applications: ["Досмотр транспорта", "Крупногабаритные грузы"],
        isNew: false
      },
      {
        id: "xelon-xray-3025",
        name: "XELON X-RAY-3025",
        category: "Досмотр багажа",
        description: "Активная область 300×250 мм, оптимизирован для багажа",
        specs: {
          "Активная область": "300×250 мм",
          "Шаг пикселя": "100 мкм",
          "Матрица": "3008×2512",
          "Тип": "Динамический"
        },
        applications: ["Аэропорты", "Вокзалы", "Метро"],
        isNew: true
      },
      {
        id: "xelon-xray-5252",
        name: "XELON X-RAY-5252",
        category: "Микродосмотр",
        description: "Активная область 52.8×52.8 мм, для микродосмотра",
        specs: {
          "Активная область": "52.8×52.8 мм",
          "Шаг пикселя": "50 мкм",
          "Матрица": "1056×1056",
          "Разрешение": "до 10 ЛП/мм"
        },
        applications: ["Почтовые отправления", "Мелкие предметы"],
        isNew: false
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
              {t('products.badge')}
            </Badge>
            <h1 className="section-title mb-6">
              {t('products.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('products.subtitle')}
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
                            {t('products.newBadge')}
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
                          <h4 className="font-semibold mb-2 text-sm">{t('products.specs')}</h4>
                          <div className="grid grid-cols-1 gap-2 text-xs">
                            {Object.entries(product.specs).map(([key, value]) => (
                              <div key={key} className="flex justify-between py-1 border-b border-border/50">
                                <span className="text-muted-foreground">{key}:</span>
                                <span className="font-medium">{String(value)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Applications */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2 text-sm">{t('products.applications')}</h4>
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
                          <QuoteModal>
                            <Button size="sm" className="flex-1 bg-accent hover:bg-accent-light">
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              {t('products.requestQuote')}
                            </Button>
                          </QuoteModal>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            asChild
                          >
                            <Link to={`/products/${selectedCategory}/${product.id}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
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
          <h2 className="section-title mb-6">{t('products.ctaTitle')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('products.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteModal>
              <Button size="lg" className="bg-accent hover:bg-accent-light">
                {t('products.consultation')}
              </Button>
            </QuoteModal>
            <Button variant="outline" size="lg">
              {t('products.downloadCatalog')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;