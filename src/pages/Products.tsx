import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Wrench, Microscope, Download, Eye, ShoppingCart, Monitor, MonitorSmartphone, Activity } from "lucide-react";
import detectorImage from "@/assets/detector-hero.png";
import QuoteModal from "@/components/QuoteModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { medicalDisplays, getDisplayCategoryName, getDisplayCategoryDesc } from "@/data/displays";

const Products = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("detectors");

  const productCategories = [
    {
      id: "detectors",
      name: t('products.categoryDetectors'),
      icon: Microscope,
      description: t('products.detectorsDesc')
    },
    {
      id: "medDisplays",
      name: t('products.categoryMedDisplays'),
      icon: Monitor,
      description: t('products.medicalDisplaysDesc')
    },
    {
      id: "specDisplays",
      name: t('products.categorySpecDisplays'),
      icon: MonitorSmartphone,
      description: t('products.specialDisplaysDesc')
    }
  ];

  // Detector products
  const detectorProducts = [
    {
      id: "xelon-xray-1515",
      name: "XELON X-RAY-1515",
      category: language === 'ru' ? "Рентгенография" : "Radiography",
      description: language === 'ru' ? "Активная область 153×153 мм, шаг пикселя 135 мкм" : "Active area 153×153 mm, pixel pitch 135 μm",
      specs: {
        [language === 'ru' ? "Активная область" : "Active area"]: "153×153 mm",
        [language === 'ru' ? "Шаг пикселя" : "Pixel pitch"]: "135 μm",
        [language === 'ru' ? "Матрица" : "Matrix"]: "1536×1536",
        [language === 'ru' ? "Интерфейс" : "Interface"]: "USB 3.2, Wi-Fi 6E"
      },
      applications: language === 'ru' 
        ? ["Цифровая рентгенография R&F", "Ортопедия", "Педиатрия"]
        : ["Digital R&F radiography", "Orthopedics", "Pediatrics"],
      isNew: true
    },
    {
      id: "xelon-xray-1923",
      name: "XELON X-RAY-1923",
      category: language === 'ru' ? "Рентгенография" : "Radiography",
      description: language === 'ru' ? "Активная область 190×230 мм, шаг пикселя 131 мкм" : "Active area 190×230 mm, pixel pitch 131 μm",
      specs: {
        [language === 'ru' ? "Активная область" : "Active area"]: "190×230 mm",
        [language === 'ru' ? "Шаг пикселя" : "Pixel pitch"]: "131 μm",
        [language === 'ru' ? "Матрица" : "Matrix"]: "1900×2304",
        [language === 'ru' ? "Интерфейс" : "Interface"]: "USB 3.2, Wi-Fi 6E"
      },
      applications: language === 'ru' 
        ? ["Общая рентгенография", "Грудная клетка", "Конечности"]
        : ["General radiography", "Chest", "Extremities"],
      isNew: false
    },
    {
      id: "xelon-xray-3543",
      name: "XELON X-RAY-3543",
      category: language === 'ru' ? "Рентгенография" : "Radiography",
      description: language === 'ru' ? "Активная область 358×430 мм, шаг пикселя 140 мкм" : "Active area 358×430 mm, pixel pitch 140 μm",
      specs: {
        [language === 'ru' ? "Активная область" : "Active area"]: "358×430 mm",
        [language === 'ru' ? "Шаг пикселя" : "Pixel pitch"]: "140 μm",
        [language === 'ru' ? "Матрица" : "Matrix"]: "2560×3072",
        [language === 'ru' ? "Интерфейс" : "Interface"]: "CameraLink, USB 3.2"
      },
      applications: language === 'ru' 
        ? ["Полноформатная рентгенография", "Ортопедия"]
        : ["Full-format radiography", "Orthopedics"],
      isNew: true
    },
    {
      id: "xelon-xray-55",
      name: "XELON X-RAY-55",
      category: language === 'ru' ? "NDT / Дефектоскопия" : "NDT / Defectoscopy",
      description: language === 'ru' ? "Активная область 52.8×52.8 мм, шаг пикселя 50 мкм" : "Active area 52.8×52.8 mm, pixel pitch 50 μm",
      specs: {
        [language === 'ru' ? "Активная область" : "Active area"]: "52.8×52.8 mm",
        [language === 'ru' ? "Шаг пикселя" : "Pixel pitch"]: "50 μm",
        [language === 'ru' ? "Матрица" : "Matrix"]: "1056×1056",
        [language === 'ru' ? "Разрешение" : "Resolution"]: language === 'ru' ? "до 10 ЛП/мм" : "up to 10 LP/mm"
      },
      applications: language === 'ru' 
        ? ["Микрообъекты", "Электроника", "Ювелирные изделия"]
        : ["Micro objects", "Electronics", "Jewelry"],
      isNew: true
    },
    {
      id: "xelon-xray-1212",
      name: "XELON X-RAY-1212",
      category: language === 'ru' ? "NDT / Дефектоскопия" : "NDT / Defectoscopy",
      description: language === 'ru' ? "Активная область 120×120 мм, шаг пикселя 50 мкм" : "Active area 120×120 mm, pixel pitch 50 μm",
      specs: {
        [language === 'ru' ? "Активная область" : "Active area"]: "120×120 mm",
        [language === 'ru' ? "Шаг пикселя" : "Pixel pitch"]: "50 μm",
        [language === 'ru' ? "Матрица" : "Matrix"]: "2240×2368",
        [language === 'ru' ? "Разрешение" : "Resolution"]: language === 'ru' ? "до 10 ЛП/мм" : "up to 10 LP/mm"
      },
      applications: language === 'ru' 
        ? ["Контроль сварных швов", "Литье", "Композиты"]
        : ["Weld inspection", "Casting", "Composites"],
      isNew: false
    },
    {
      id: "xelon-xray-4343",
      name: "XELON X-RAY-4343",
      category: language === 'ru' ? "Безопасность" : "Security",
      description: language === 'ru' ? "Активная область 430×430 мм, для досмотра грузов" : "Active area 430×430 mm, for cargo screening",
      specs: {
        [language === 'ru' ? "Активная область" : "Active area"]: "430×430 mm",
        [language === 'ru' ? "Шаг пикселя" : "Pixel pitch"]: "139 μm",
        [language === 'ru' ? "Матрица" : "Matrix"]: "3072×3072",
        [language === 'ru' ? "Напряжение" : "Voltage"]: "80–450 kV"
      },
      applications: language === 'ru' 
        ? ["Досмотр транспорта", "Крупногабаритные грузы"]
        : ["Vehicle inspection", "Large cargo"],
      isNew: false
    }
  ];

  // Transform medical displays data for UI
  const diagnosticDisplays = medicalDisplays.filter(d => d.category === 'diagnostic').map(d => ({
    id: d.id,
    name: d.model,
    category: language === 'ru' ? "Радиология" : "Radiology",
    description: `${d.size}, ${d.resolution}, ${d.brightness} cd/m²`,
    specs: {
      [language === 'ru' ? "Диагональ" : "Size"]: d.size,
      [language === 'ru' ? "Разрешение" : "Resolution"]: d.resolution,
      [language === 'ru' ? "Яркость" : "Brightness"]: `${d.brightness} cd/m²`,
      [language === 'ru' ? "Сенсор" : "Touch"]: d.touch === 'None' ? (language === 'ru' ? 'Нет' : 'None') : d.touch
    },
    applications: d.features.slice(0, 3),
    isNew: d.isNew
  }));

  const surgicalDisplays = medicalDisplays.filter(d => d.category === 'surgical' || d.category === 'endoscope').map(d => ({
    id: d.id,
    name: d.model,
    category: d.category === 'surgical' 
      ? (language === 'ru' ? "Хирургия" : "Surgery") 
      : (language === 'ru' ? "Эндоскопия" : "Endoscopy"),
    description: `${d.size}, ${d.resolution}, ${d.brightness} cd/m²`,
    specs: {
      [language === 'ru' ? "Диагональ" : "Size"]: d.size,
      [language === 'ru' ? "Разрешение" : "Resolution"]: d.resolution,
      [language === 'ru' ? "Яркость" : "Brightness"]: `${d.brightness} cd/m²`,
      [language === 'ru' ? "Сенсор" : "Touch"]: d.touch === 'None' ? (language === 'ru' ? 'Нет' : 'None') : d.touch
    },
    applications: d.features.slice(0, 3),
    isNew: d.isNew
  }));

  // Special displays (using surgical/endoscope as base, but could be expanded)
  const specialDisplays = [
    {
      id: "ind-2421",
      name: "IND-2421",
      category: language === 'ru' ? "Промышленный" : "Industrial",
      description: language === 'ru' ? "24\" промышленный монитор, 1920×1080" : "24\" industrial monitor, 1920×1080",
      specs: {
        [language === 'ru' ? "Диагональ" : "Size"]: "24\"",
        [language === 'ru' ? "Разрешение" : "Resolution"]: "1920×1080",
        [language === 'ru' ? "Защита" : "Protection"]: "IP65",
        [language === 'ru' ? "Температура" : "Temperature"]: "-20°C ~ +60°C"
      },
      applications: language === 'ru' 
        ? ["Заводы", "Производственные линии", "ЦУП"]
        : ["Factories", "Production lines", "Control centers"],
      isNew: true
    },
    {
      id: "cmd-5521",
      name: "CMD-5521",
      category: language === 'ru' ? "Диспетчерский" : "Command",
      description: language === 'ru' ? "55\" 4K диспетчерский дисплей" : "55\" 4K command display",
      specs: {
        [language === 'ru' ? "Диагональ" : "Size"]: "55\"",
        [language === 'ru' ? "Разрешение" : "Resolution"]: "3840×2160",
        [language === 'ru' ? "Яркость" : "Brightness"]: "700 cd/m²",
        [language === 'ru' ? "Режим работы" : "Operation"]: "24/7"
      },
      applications: language === 'ru' 
        ? ["Диспетчерские", "Ситуационные центры", "Оборона"]
        : ["Control rooms", "Situation centers", "Defense"],
      isNew: true
    },
    {
      id: "def-2743",
      name: "DEF-2743",
      category: language === 'ru' ? "Оборонный" : "Defense",
      description: language === 'ru' ? "27\" защищённый дисплей, MIL-STD" : "27\" ruggedized display, MIL-STD",
      specs: {
        [language === 'ru' ? "Диагональ" : "Size"]: "27\"",
        [language === 'ru' ? "Разрешение" : "Resolution"]: "2560×1440",
        [language === 'ru' ? "Стандарт" : "Standard"]: "MIL-STD-810G",
        [language === 'ru' ? "Защита" : "Protection"]: "IP67"
      },
      applications: language === 'ru' 
        ? ["Военные системы", "Морской флот", "Авиация"]
        : ["Military systems", "Navy", "Aviation"],
      isNew: false
    }
  ];

  const allProducts = {
    detectors: detectorProducts,
    medDisplays: [...diagnosticDisplays.slice(0, 6), ...surgicalDisplays.slice(0, 6)],
    specDisplays: specialDisplays
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white glassmorphism">
              {t('products.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              {t('products.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('products.subtitle')}
            </p>
            
            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{detectorProducts.length}+</div>
                <div className="text-white/70 text-sm">{language === 'ru' ? 'Детекторов' : 'Detectors'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{medicalDisplays.length}+</div>
                <div className="text-white/70 text-sm">{language === 'ru' ? 'Дисплеев' : 'Displays'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">DICOM</div>
                <div className="text-white/70 text-sm">{language === 'ru' ? 'Соответствие' : 'Compliance'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 max-w-3xl mx-auto h-auto p-2 bg-muted/50">
              {productCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2 py-4 px-6 data-[state=active]:bg-accent data-[state=active]:text-white transition-all"
                >
                  <category.icon className="h-5 w-5" />
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(allProducts).map(([categoryId, categoryProducts]) => (
              <TabsContent key={categoryId} value={categoryId} className="mt-0">
                <div className="text-center mb-12 animate-fade-in-up">
                  <h2 className="text-3xl font-bold mb-4">
                    {productCategories.find(c => c.id === categoryId)?.name}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {productCategories.find(c => c.id === categoryId)?.description}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {categoryProducts.map((product, index) => (
                    <Card 
                      key={product.id}
                      className="hover-lift corporate-shadow animate-fade-in-up group overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative">
                        {product.isNew && (
                          <Badge className="absolute top-4 right-4 bg-success text-white z-10 animate-pulse-glow">
                            {t('products.newBadge')}
                          </Badge>
                        )}
                        
                        <div className="h-48 bg-gradient-to-br from-accent/10 to-primary/10 p-6 flex items-center justify-center relative overflow-hidden group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                          {categoryId === 'detectors' ? (
                            <img 
                              src={detectorImage} 
                              alt={product.name}
                              className="max-h-32 max-w-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <Monitor className="h-24 w-24 text-accent/50 group-hover:scale-110 transition-transform duration-500" />
                          )}
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="mb-4">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {product.category}
                          </Badge>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
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
                          <Button variant="outline" size="sm" className="hover:bg-accent/10">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="hover:bg-accent/10"
                            asChild
                          >
                            <Link to={`/products/${categoryId}/${product.id}`}>
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

      {/* Product Lines Overview */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ru' ? 'Линейки продукции' : 'Product Lines'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ru' 
                ? 'От компактных детекторов до крупноформатных дисплеев — решения для любых задач' 
                : 'From compact detectors to large-format displays — solutions for any task'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Detectors */}
            <Card className="hover-lift corporate-shadow p-6 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold">{t('products.detectors')}</h3>
                  <p className="text-sm text-muted-foreground">{t('products.detectorsDesc')}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Диагональ' : 'Size range'}</span>
                  <span className="font-medium">5" – 43"</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Разрешение' : 'Resolution'}</span>
                  <span className="font-medium">{language === 'ru' ? 'до 50 мкм' : 'up to 50 μm'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Применение' : 'Application'}</span>
                  <span className="font-medium">{language === 'ru' ? 'Медицина, NDT' : 'Medical, NDT'}</span>
                </div>
              </div>
            </Card>

            {/* Medical Displays */}
            <Card className="hover-lift corporate-shadow p-6 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                  <Monitor className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="font-bold">{t('products.medicalDisplays')}</h3>
                  <p className="text-sm text-muted-foreground">{t('products.medicalDisplaysDesc')}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Диагональ' : 'Size range'}</span>
                  <span className="font-medium">15.6" – 55"</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Разрешение' : 'Resolution'}</span>
                  <span className="font-medium">{language === 'ru' ? 'до 8MP (4K)' : 'up to 8MP (4K)'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Яркость' : 'Brightness'}</span>
                  <span className="font-medium">{language === 'ru' ? 'до 2500 кд/м²' : 'up to 2500 cd/m²'}</span>
                </div>
              </div>
            </Card>

            {/* Special Displays */}
            <Card className="hover-lift corporate-shadow p-6 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MonitorSmartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">{t('products.specialDisplays')}</h3>
                  <p className="text-sm text-muted-foreground">{t('products.specialDisplaysDesc')}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Защита' : 'Protection'}</span>
                  <span className="font-medium">IP65 – IP67</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Режим работы' : 'Operation'}</span>
                  <span className="font-medium">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Стандарт' : 'Standard'}</span>
                  <span className="font-medium">MIL-STD</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6">{t('products.ctaTitle')}</h2>
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
              <Download className="h-4 w-4 mr-2" />
              {t('products.downloadCatalog')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
