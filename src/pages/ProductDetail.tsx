import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, Download, Heart, Wrench, Microscope, Shield, Monitor,
  ChevronLeft, ChevronRight, Check, FileText, Package, Cpu, Settings
} from "lucide-react";
import xelon1515 from "@/assets/xelon-1515.png";
import xelon1613 from "@/assets/xelon-1613.png";
import xelon1930 from "@/assets/xelon-1930.png";
import xelon2430 from "@/assets/xelon-2430.png";
import xelon3543 from "@/assets/xelon-3543.png";
import display21 from "@/assets/display-21.png";
import display21b from "@/assets/display-21b.png";
import display27 from "@/assets/display-27.png";
import display27b from "@/assets/display-27b.png";
import display31 from "@/assets/display-31.png";
import display31b from "@/assets/display-31b.png";
import display55 from "@/assets/display-55.png";
import display55b from "@/assets/display-55b.png";
import detectorHero from "@/assets/detector-hero.png";
import QuoteModal from "@/components/QuoteModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProductById, type Product } from "@/data/products";

// Image mapping for product detail
const productImageMap: Record<string, string> = {
  'xelon-1515.png': xelon1515,
  'xelon-1613.png': xelon1613,
  'xelon-1930.png': xelon1930,
  'xelon-2430.png': xelon2430,
  'xelon-3543.png': xelon3543,
  'display-21.png': display21,
  'display-21b.png': display21b,
  'display-27.png': display27,
  'display-27b.png': display27b,
  'display-31.png': display31,
  'display-31b.png': display31b,
  'display-55.png': display55,
  'display-55b.png': display55b,
};

const getProductImage = (imageName: string): string => {
  return productImageMap[imageName] || detectorHero;
};

const ProductDetail = () => {
  const { category, productId } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get product from unified data
  const product = productId ? getProductById(productId) : undefined;

  // Get images for current product
  const productImages = product ? product.images.map(img => getProductImage(img)) : [detectorHero];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'ru' ? 'Продукт не найден' : 'Product not found'}
          </h1>
          <Button onClick={() => navigate('/products')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'ru' ? 'Вернуться к каталогу' : 'Back to catalog'}
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'detectors': return Microscope;
      case 'medDisplays': return Heart;
      case 'specDisplays': return Shield;
      default: return Monitor;
    }
  };

  const CategoryIcon = getCategoryIcon(category || 'detectors');

  const getSubcategoryLabel = (sub: string) => {
    if (language === 'ru') {
      const labels: Record<string, string> = {
        medical: 'Медицина',
        ndt: 'NDT',
        security: 'Безопасность',
        veterinary: 'Ветеринария',
        radiology: 'Радиология',
        surgery: 'Хирургия',
        endoscopy: 'Эндоскопия',
        clinical: 'Клинический',
        industrial: 'Промышленность',
        command: 'Диспетчерские',
        defense: 'Оборона',
        transport: 'Транспорт'
      };
      return labels[sub] || sub;
    }
    return sub.charAt(0).toUpperCase() + sub.slice(1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button 
              variant="outline" 
              onClick={() => navigate('/products')}
              className="mb-6 bg-white/10 border-white/50 text-white hover:bg-white/20 hover:border-white/70"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'ru' ? 'Вернуться к каталогу' : 'Back to catalog'}
            </Button>
            
            <div className="flex items-center space-x-4 mb-6">
              <CategoryIcon className="h-8 w-8" />
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-white/30 text-white">
                  {getSubcategoryLabel(product.subcategory)}
                </Badge>
                {product.isNew && (
                  <Badge className="bg-success text-white">
                    {language === 'ru' ? 'Новинка 2025' : 'New 2025'}
                  </Badge>
                )}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl overflow-hidden group">
                  <img 
                    src={productImages[currentImageIndex]} 
                    alt={`${product.name} - ${language === 'ru' ? 'Изображение' : 'Image'} ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {productImages.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 justify-center">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex 
                          ? 'border-accent ring-2 ring-accent/30' 
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${language === 'ru' ? 'Миниатюра' : 'Thumbnail'} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'ru' ? 'Описание' : 'Description'}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    {language === 'ru' ? 'Ключевые особенности' : 'Key Features'}
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    {language === 'ru' ? 'Области применения' : 'Applications'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <Badge key={idx} variant="secondary" className="px-3 py-1">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <QuoteModal>
                    <Button size="lg" className="flex-1 bg-accent hover:bg-accent-light">
                      {language === 'ru' ? 'Запросить цену' : 'Request Quote'}
                    </Button>
                  </QuoteModal>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    {language === 'ru' ? 'Скачать спецификацию' : 'Download Spec'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Tabs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 h-auto p-1">
                <TabsTrigger value="specs" className="py-3 flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === 'ru' ? 'Характеристики' : 'Specifications'}</span>
                </TabsTrigger>
                <TabsTrigger value="features" className="py-3 flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === 'ru' ? 'ИИ-функции' : 'AI Features'}</span>
                </TabsTrigger>
                <TabsTrigger value="docs" className="py-3 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === 'ru' ? 'Документация' : 'Documentation'}</span>
                </TabsTrigger>
                <TabsTrigger value="accessories" className="py-3 flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === 'ru' ? 'Аксессуары' : 'Accessories'}</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specs">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">
                      {language === 'ru' ? 'Технические характеристики' : 'Technical Specifications'}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground">{t(`specs.${key}`)}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">
                      {language === 'ru' ? 'Функции на базе ИИ' : 'AI-Powered Features'}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-accent">
                          {language === 'ru' ? 'Обработка изображений' : 'Image Processing'}
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-success mt-1" />
                            <span className="text-sm text-muted-foreground">
                              {language === 'ru' ? 'ИИ-шумоподавление без потери информации' : 'AI noise reduction without information loss'}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-success mt-1" />
                            <span className="text-sm text-muted-foreground">
                              {language === 'ru' ? 'Super-resolution для повышения разрешения' : 'Super-resolution for enhanced detail'}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-success mt-1" />
                            <span className="text-sm text-muted-foreground">
                              {language === 'ru' ? 'Автоматическая оптимизация параметров' : 'Automatic parameter optimization'}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-accent">
                          {language === 'ru' ? 'Анализ и интерпретация' : 'Analysis & Interpretation'}
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-success mt-1" />
                            <span className="text-sm text-muted-foreground">
                              {language === 'ru' ? 'Автоматическое обнаружение патологий/дефектов' : 'Automatic pathology/defect detection'}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-success mt-1" />
                            <span className="text-sm text-muted-foreground">
                              {language === 'ru' ? 'Классификация по типу и критичности' : 'Classification by type and severity'}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-success mt-1" />
                            <span className="text-sm text-muted-foreground">
                              {language === 'ru' ? 'Decision support для специалистов' : 'Decision support for specialists'}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="docs">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">
                      {language === 'ru' ? 'Документация' : 'Documentation'}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline" className="justify-start h-auto py-4">
                        <FileText className="h-5 w-5 mr-3" />
                        <div className="text-left">
                          <div className="font-medium">{language === 'ru' ? 'Спецификация' : 'Specification'}</div>
                          <div className="text-xs text-muted-foreground">PDF, 2.4 MB</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-4">
                        <FileText className="h-5 w-5 mr-3" />
                        <div className="text-left">
                          <div className="font-medium">{language === 'ru' ? 'Руководство пользователя' : 'User Manual'}</div>
                          <div className="text-xs text-muted-foreground">PDF, 8.1 MB</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-4">
                        <FileText className="h-5 w-5 mr-3" />
                        <div className="text-left">
                          <div className="font-medium">{language === 'ru' ? 'Сертификаты' : 'Certificates'}</div>
                          <div className="text-xs text-muted-foreground">PDF, 1.2 MB</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-4">
                        <FileText className="h-5 w-5 mr-3" />
                        <div className="text-left">
                          <div className="font-medium">{language === 'ru' ? 'API документация' : 'API Documentation'}</div>
                          <div className="text-xs text-muted-foreground">PDF, 3.5 MB</div>
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="accessories">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">
                      {language === 'ru' ? 'Совместимые аксессуары' : 'Compatible Accessories'}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="p-4">
                        <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                          <Package className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h4 className="font-medium mb-1">
                          {language === 'ru' ? 'Защитный кейс' : 'Protective Case'}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {language === 'ru' ? 'Для транспортировки' : 'For transportation'}
                        </p>
                      </Card>
                      <Card className="p-4">
                        <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                          <Package className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h4 className="font-medium mb-1">
                          {language === 'ru' ? 'Кабельный комплект' : 'Cable Kit'}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {language === 'ru' ? 'USB 3.2 + питание' : 'USB 3.2 + power'}
                        </p>
                      </Card>
                      <Card className="p-4">
                        <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                          <Package className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h4 className="font-medium mb-1">
                          {language === 'ru' ? 'Держатель' : 'Mounting Kit'}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {language === 'ru' ? 'Настенный/настольный' : 'Wall/desk mount'}
                        </p>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">
              {language === 'ru' ? 'Похожие продукты' : 'Related Products'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Placeholder for related products */}
              {[1, 2, 3].map((i) => (
                <Card key={i} className="hover-lift">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                    <Monitor className="h-12 w-12 text-accent/50" />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-1">XELON Product {i}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === 'ru' ? 'Краткое описание продукта' : 'Brief product description'}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      {language === 'ru' ? 'Подробнее' : 'Learn More'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
