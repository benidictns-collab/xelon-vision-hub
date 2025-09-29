import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Heart, Wrench, Microscope } from "lucide-react";
import detectorImage from "@/assets/detector-hero.png";
import industrialImage from "@/assets/XELON DET FINAL.png";
import medicalImage from "@/assets/XELON DET FINAL.png";
import scientificImage from "@/assets/XELON DET FINAL.png";
import QuoteModal from "@/components/QuoteModal";

const ProductDetail = () => {
  const { category, productId } = useParams();
  const navigate = useNavigate();

  const products = {
    medical: [
      {
        id: "xelon-xray-1515",
        name: "XELON X-RAY-1515",
        category: "Рентгенография",
        description: "Активная область 153×153 мм, шаг пикселя 135 мкм",
        fullDescription: "Компактный цифровой плоскопанельный детектор XELON X-RAY-1515 предназначен для цифровой рентгенографии в медицинских учреждениях. Обеспечивает высокое качество изображения при минимальной лучевой нагрузке на пациента.",
        specs: {
          "Активная область": "153×153 мм",
          "Шаг пикселя": "135 мкм",
          "Матрица": "1536×1536",
          "Интерфейс": "USB 3.2, Wi-Fi 6E",
          "Разрешение": "3.7 ЛП/мм",
          "Вес": "2.8 кг",
          "Рабочая температура": "10°C - 40°C"
        },
        applications: ["Цифровая рентгенография R&F", "Ортопедия", "Педиатрия"],
        isNew: true,
        images: [detectorImage, medicalImage, industrialImage]
      },
      {
        id: "xelon-xray-1923",
        name: "XELON X-RAY-1923",
        category: "Рентгенография",
        description: "Активная область 190×230 мм, шаг пикселя 131 мкм",
        fullDescription: "Универсальный детектор для общей рентгенографии с оптимальным соотношением размера и разрешения. Идеально подходит для исследования грудной клетки и конечностей.",
        specs: {
          "Активная область": "190×230 мм",
          "Шаг пикселя": "131 мкм",
          "Матрица": "1900×2304",
          "Интерфейс": "USB 3.2, Wi-Fi 6E",
          "Разрешение": "3.8 ЛП/мм",
          "Вес": "3.2 кг",
          "Рабочая температура": "10°C - 40°C"
        },
        applications: ["Общая рентгенография", "Грудная клетка", "Конечности"],
        isNew: false,
        images: [detectorImage, medicalImage, scientificImage]
      },
      {
        id: "xelon-xray-2020",
        name: "XELON X-RAY-2020",
        category: "Рентгенография",
        description: "Активная область 204×204 мм, шаг пикселя 150 мкм",
        fullDescription: "Универсальный детектор квадратного формата для широкого спектра медицинских применений. Поддерживает как проводные, так и беспроводные интерфейсы.",
        specs: {
          "Активная область": "204×204 мм",
          "Шаг пикселя": "150 мкм",
          "Матрица": "2048×2048",
          "Интерфейс": "USB 3.2, CoaXPress",
          "Разрешение": "3.3 ЛП/мм",
          "Вес": "3.5 кг",
          "Рабочая температура": "10°C - 40°C"
        },
        applications: ["Универсальная рентгенография", "Мобильные системы"],
        isNew: true,
        images: [detectorImage, medicalImage, industrialImage]
      },
      {
        id: "xelon-xray-2430",
        name: "XELON X-RAY-2430",
        category: "Рентгенография",
        description: "Активная область 247×307 мм, шаг пикселя 139 мкм",
        fullDescription: "Детектор для специализированных исследований грудной клетки и позвоночника. Обеспечивает отличное качество изображения для диагностики органов грудной полости.",
        specs: {
          "Активная область": "247×307 мм",
          "Шаг пикселя": "139 мкм",
          "Матрица": "2476×3072",
          "Интерфейс": "USB 3.2, Wi-Fi 6E",
          "Разрешение": "3.6 ЛП/мм",
          "Вес": "4.1 кг",
          "Рабочая температура": "10°C - 40°C"
        },
        applications: ["Рентгенография грудной клетки", "Позвоночник"],
        isNew: false,
        images: [detectorImage, medicalImage, scientificImage]
      },
      {
        id: "xelon-xray-2530",
        name: "XELON X-RAY-2530",
        category: "Рентгенография",
        description: "Активная область 250×300 мм, шаг пикселя 99 мкм",
        fullDescription: "Высокоразрешающий детектор для детской радиологии и специализированных исследований, требующих максимальной четкости изображения.",
        specs: {
          "Активная область": "250×300 мм",
          "Шаг пикселя": "99 мкм",
          "Матрица": "2524×3036",
          "Интерфейс": "USB 3.2, CoaXPress",
          "Разрешение": "5.0 ЛП/мм",
          "Вес": "4.5 кг",
          "Рабочая температура": "10°C - 40°C"
        },
        applications: ["Высокоразрешающая рентгенография", "Детская радиология"],
        isNew: true,
        images: [detectorImage, medicalImage, industrialImage]
      },
      {
        id: "xelon-xray-3543",
        name: "XELON X-RAY-3543",
        category: "Рентгенография",
        description: "Активная область 358×430 мм, шаг пикселя 140 мкм",
        fullDescription: "Полноформатный детектор для ортопедических исследований и общей рентгенографии. Большая активная область позволяет получать изображения всего тела.",
        specs: {
          "Активная область": "358×430 мм",
          "Шаг пикселя": "140 мкм",
          "Матрица": "2560×3072",
          "Интерфейс": "CameraLink, USB 3.2",
          "Разрешение": "3.6 ЛП/мм",
          "Вес": "6.2 кг",
          "Рабочая температура": "10°C - 40°C"
        },
        applications: ["Полноформатная рентгенография", "Ортопедия"],
        isNew: false,
        images: [detectorImage, medicalImage, scientificImage]
      }
    ],
    industrial: [
      {
        id: "xelon-xray-55",
        name: "XELON X-RAY-55",
        category: "Микродефектоскопия",
        description: "Активная область 52.8×52.8 мм, шаг пикселя 50 мкм",
        fullDescription: "Сверхвысокоразрешающий детектор для контроля микрообъектов. Обеспечивает детальную визуализацию внутренней структуры электронных компонентов и ювелирных изделий.",
        specs: {
          "Активная область": "52.8×52.8 мм",
          "Шаг пикселя": "50 мкм",
          "Матрица": "1056×1056",
          "Разрешение": "до 10 ЛП/мм",
          "Вес": "1.8 кг",
          "Рабочая температура": "15°C - 35°C"
        },
        applications: ["Контроль микрообъектов", "Электроника", "Ювелирные изделия"],
        isNew: true,
        images: [detectorImage, industrialImage, scientificImage]
      },
      {
        id: "xelon-xray-1212",
        name: "XELON X-RAY-1212",
        category: "Дефектоскопия",
        description: "Активная область 120×120 мм, шаг пикселя 50 мкм",
        fullDescription: "Детектор для промышленной дефектоскопии средних объектов. Высокое разрешение позволяет выявлять мельчайшие дефекты в сварных швах и литье.",
        specs: {
          "Активная область": "120×120 мм",
          "Шаг пикселя": "50 мкм",
          "Матрица": "2240×2368",
          "Разрешение": "до 10 ЛП/мм",
          "Вес": "2.5 кг",
          "Рабочая температура": "10°C - 40°C"
        },
        applications: ["Контроль сварных швов", "Литье", "Композиты"],
        isNew: false,
        images: [detectorImage, industrialImage, medicalImage]
      },
      {
        id: "xelon-xray-1723",
        name: "XELON X-RAY-1723",
        category: "Дефектоскопия",
        description: "Активная область 172.8×230.4 мм, шаг пикселя 75 мкм",
        fullDescription: "Универсальный детектор для авиакосмической отрасли и машиностроения. Работает в широком диапазоне энергий рентгеновского излучения.",
        specs: {
          "Активная область": "172.8×230.4 мм",
          "Шаг пикселя": "75 мкм",
          "Матрица": "2304×3072",
          "Напряжение": "40–200 кВ",
          "Вес": "3.8 кг",
          "Рабочая температура": "5°C - 45°C"
        },
        applications: ["Авиакосмическая отрасль", "Трубопроводы", "Машиностроение"],
        isNew: true,
        images: [detectorImage, industrialImage, scientificImage]
      },
      {
        id: "xelon-xray-2222",
        name: "XELON X-RAY-2222",
        category: "Тяжелая промышленность",
        description: "Активная область 229.1×229.1 мм, высокоэнергетический",
        fullDescription: "Детектор для контроля толстостенных объектов в тяжелой промышленности. Работает с высокоэнергетическими рентгеновскими системами до 450 кВ.",
        specs: {
          "Активная область": "229.1×229.1 мм",
          "Шаг пикселя": "179 мкм",
          "Матрица": "1280×1280",
          "Напряжение": "40–450 кВ",
          "Вес": "4.2 кг",
          "Рабочая температура": "0°C - 50°C"
        },
        applications: ["Толстые объекты", "Высокоэнергетические системы"],
        isNew: false,
        images: [detectorImage, industrialImage, medicalImage]
      }
    ],
    scientific: [
      {
        id: "xelon-xray-1723-scientific",
        name: "XELON X-RAY-1723",
        category: "Специализированная визуализация",
        description: "Активная область 172.8×230.4 мм, динамический тип",
        fullDescription: "Динамический детектор для систем досмотра багажа и грузов. Обеспечивает высокую скорость сканирования при сохранении качества изображения.",
        specs: {
          "Активная область": "172.8×230.4 мм",
          "Шаг пикселя": "95 мкм",
          "Матрица": "1792×2560",
          "Тип": "Динамический",
          "Скорость сканирования": "до 30 кадр/с",
          "Вес": "4.0 кг"
        },
        applications: ["Досмотр багажа", "Безопасность", "Таможня"],
        isNew: true,
        images: [detectorImage, scientificImage, industrialImage]
      },
      {
        id: "xelon-xray-4343",
        name: "XELON X-RAY-4343",
        category: "Досмотр транспорта",
        description: "Активная область 430×430 мм, для досмотра грузов",
        fullDescription: "Крупноформатный детектор для досмотра транспортных средств и крупногабаритных грузов. Работает в экстремальных условиях эксплуатации.",
        specs: {
          "Активная область": "430×430 мм",
          "Шаг пикселя": "139 мкм",
          "Матрица": "3072×3072",
          "Напряжение": "80–450 кВ",
          "Вес": "8.5 кг",
          "Рабочая температура": "-10°C - 60°C"
        },
        applications: ["Досмотр транспорта", "Крупногабаритные грузы"],
        isNew: false,
        images: [detectorImage, scientificImage, medicalImage]
      },
      {
        id: "xelon-xray-3025",
        name: "XELON X-RAY-3025",
        category: "Досмотр багажа",
        description: "Активная область 300×250 мм, оптимизирован для багажа",
        fullDescription: "Специализированный детектор для систем досмотра багажа в аэропортах, на вокзалах и в метро. Оптимизирован для быстрого сканирования при высокой пропускной способности.",
        specs: {
          "Активная область": "300×250 мм",
          "Шаг пикселя": "100 мкм",
          "Матрица": "3008×2512",
          "Тип": "Динамический",
          "Скорость сканирования": "до 25 кадр/с",
          "Вес": "5.2 кг"
        },
        applications: ["Аэропорты", "Вокзалы", "Метро"],
        isNew: true,
        images: [detectorImage, scientificImage, industrialImage]
      },
      {
        id: "xelon-xray-5252",
        name: "XELON X-RAY-5252",
        category: "Микродосмотр",
        description: "Активная область 52.8×52.8 мм, для микродосмотра",
        fullDescription: "Компактный детектор для досмотра мелких предметов и почтовых отправлений. Высокое разрешение обеспечивает детальную визуализацию содержимого.",
        specs: {
          "Активная область": "52.8×52.8 мм",
          "Шаг пикселя": "50 мкм",
          "Матрица": "1056×1056",
          "Разрешение": "до 10 ЛП/мм",
          "Вес": "1.5 кг",
          "Рабочая температура": "10°C - 40°C"
        },
        applications: ["Почтовые отправления", "Мелкие предметы"],
        isNew: false,
        images: [detectorImage, scientificImage, medicalImage]
      }
    ]
  };

  const categoryProducts = products[category as keyof typeof products] || [];
  const product = categoryProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Продукт не найден</h1>
          <Button onClick={() => navigate('/products')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Вернуться к каталогу
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'medical': return Heart;
      case 'industrial': return Wrench;
      case 'scientific': return Microscope;
      default: return Heart;
    }
  };

  const CategoryIcon = getCategoryIcon(category || 'medical');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              onClick={() => navigate('/products')}
              className="mb-6 bg-white/10 border-white/50 text-white hover:bg-white/20 hover:border-white/70"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Вернуться к каталогу
            </Button>
            
            <div className="flex items-center space-x-4 mb-6">
              <CategoryIcon className="h-8 w-8" />
              <div>
                <Badge variant="outline" className="border-white/30 text-white mb-2">
                  {product.category}
                </Badge>
                {product.isNew && (
                  <Badge className="bg-success text-white ml-2">
                    Новинка 2025
                  </Badge>
                )}
              </div>
            </div>
            
            <h1 className="section-title mb-4">{product.name}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Product Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Изображения продукта</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {product.images.map((image, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 p-6 flex items-center justify-center">
                  <img 
                    src={image} 
                    alt={`${product.name} изображение ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Технические характеристики</h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-border/50">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Области применения</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.applications.map((app) => (
                    <div key={app} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Заинтересовались продуктом?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Получите подробную консультацию по продукту {product.name} 
            и индивидуальное коммерческое предложение
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteModal>
              <Button size="lg" className="bg-accent hover:bg-accent-light">
                Запросить КП
              </Button>
            </QuoteModal>
            <Button variant="outline" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Скачать техническую документацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;