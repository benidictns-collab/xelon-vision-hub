import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, Wrench, Microscope, Download, Eye, ShoppingCart, Monitor, MonitorSmartphone, 
  Activity, Shield, Cat, Scan, Scissors, Stethoscope, Factory, LayoutDashboard, Plane,
  ChevronRight, Grid3X3, List
} from "lucide-react";
import detectorImage from "@/assets/detector-hero.png";
import xelon1515 from "@/assets/xelon-1515.png";
import xelon1613 from "@/assets/xelon-1613.png";
import xelon1930 from "@/assets/xelon-1930.png";
import xelon2430 from "@/assets/xelon-2430.png";
import xelon3543 from "@/assets/xelon-3543.png";
import industrialNdt from "@/assets/industrial-ndt.jpg";
import medicalIndustry from "@/assets/medical-industry.jpg";
import QuoteModal from "@/components/QuoteModal";

// Image mapping for products
const productImages: Record<string, string> = {
  'xelon-1515.png': xelon1515,
  'xelon-1613.png': xelon1613,
  'xelon-1930.png': xelon1930,
  'xelon-2430.png': xelon2430,
  'xelon-3543.png': xelon3543,
  'detector-hero.png': detectorImage,
  'industrial-ndt.jpg': industrialNdt,
  'medical-industry.jpg': medicalIndustry,
};

const getProductImage = (imageName: string): string => {
  return productImages[imageName] || detectorImage;
};
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  detectorProducts, 
  medicalDisplayProducts, 
  specialDisplayProducts,
  detectorSubcategories,
  medDisplaySubcategories,
  specDisplaySubcategories,
  type Product,
  type IndustrySubcategory
} from "@/data/products";

const Products = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("detectors");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  const getSubcategories = (categoryId: string): IndustrySubcategory[] => {
    switch (categoryId) {
      case 'detectors': return detectorSubcategories;
      case 'medDisplays': return medDisplaySubcategories;
      case 'specDisplays': return specDisplaySubcategories;
      default: return [];
    }
  };

  const getProducts = (categoryId: string): Product[] => {
    switch (categoryId) {
      case 'detectors': return detectorProducts;
      case 'medDisplays': return medicalDisplayProducts;
      case 'specDisplays': return specialDisplayProducts;
      default: return [];
    }
  };

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, React.ElementType> = {
      Heart, Wrench, Shield, Cat, Scan, Scissors, Eye, Stethoscope,
      Factory, LayoutDashboard, Plane, Monitor
    };
    return icons[iconName] || Heart;
  };

  const filteredProducts = (categoryId: string) => {
    const products = getProducts(categoryId);
    if (!selectedSubcategory) return products;
    return products.filter(p => p.subcategory === selectedSubcategory);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
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
                <div className="text-3xl font-bold text-white">{medicalDisplayProducts.length + specialDisplayProducts.length}+</div>
                <div className="text-white/70 text-sm">{language === 'ru' ? 'Дисплеев' : 'Displays'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">DICOM</div>
                <div className="text-white/70 text-sm">{language === 'ru' ? 'Соответствие' : 'Compliance'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">AI</div>
                <div className="text-white/70 text-sm">{language === 'ru' ? 'Интеграция' : 'Integration'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 max-w-3xl mx-auto h-auto p-2 bg-muted/50">
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

            {Object.entries({ detectors: detectorProducts, medDisplays: medicalDisplayProducts, specDisplays: specialDisplayProducts }).map(([categoryId]) => (
              <TabsContent key={categoryId} value={categoryId} className="mt-0">
                {/* Category Header */}
                <div className="text-center mb-8 animate-fade-in-up">
                  <h2 className="text-3xl font-bold mb-4">
                    {productCategories.find(c => c.id === categoryId)?.name}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {productCategories.find(c => c.id === categoryId)?.description}
                  </p>
                </div>

                {/* Subcategories Filter */}
                <div className="mb-8">
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <Button
                      variant={selectedSubcategory === null ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSubcategory(null)}
                      className={selectedSubcategory === null ? "bg-accent hover:bg-accent-light" : ""}
                    >
                      {language === 'ru' ? 'Все' : 'All'}
                    </Button>
                    {getSubcategories(categoryId).map((sub) => {
                      const IconComponent = getIconComponent(sub.icon);
                      return (
                        <Button
                          key={sub.id}
                          variant={selectedSubcategory === sub.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedSubcategory(sub.id)}
                          className={selectedSubcategory === sub.id ? "bg-accent hover:bg-accent-light" : ""}
                        >
                          <IconComponent className="h-4 w-4 mr-2" />
                          {language === 'ru' ? sub.nameRu : sub.nameEn}
                        </Button>
                      );
                    })}
                  </div>

                  {/* Selected subcategory description */}
                  {selectedSubcategory && (
                    <div className="text-center mb-6 animate-fade-in">
                      <p className="text-muted-foreground">
                        {language === 'ru' 
                          ? getSubcategories(categoryId).find(s => s.id === selectedSubcategory)?.descRu
                          : getSubcategories(categoryId).find(s => s.id === selectedSubcategory)?.descEn
                        }
                      </p>
                    </div>
                  )}

                  {/* View mode toggle */}
                  <div className="flex justify-end gap-2 mb-4">
                    <Button
                      variant={viewMode === 'grid' ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className={viewMode === 'grid' ? "bg-accent" : ""}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className={viewMode === 'list' ? "bg-accent" : ""}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Products Grid/List */}
                <div className={viewMode === 'grid' 
                  ? "grid lg:grid-cols-2 xl:grid-cols-3 gap-8" 
                  : "space-y-4"
                }>
                  {filteredProducts(categoryId).map((product, index) => (
                    viewMode === 'grid' ? (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        categoryId={categoryId}
                        index={index}
                        language={language}
                        t={t}
                      />
                    ) : (
                      <ProductListItem
                        key={product.id}
                        product={product}
                        categoryId={categoryId}
                        index={index}
                        language={language}
                        t={t}
                      />
                    )
                  ))}
                </div>

                {filteredProducts(categoryId).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      {language === 'ru' ? 'Продукты в этой категории скоро появятся' : 'Products in this category coming soon'}
                    </p>
                  </div>
                )}
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
                  <span>{language === 'ru' ? 'Отрасли' : 'Industries'}</span>
                  <span className="font-medium">{language === 'ru' ? '4 направления' : '4 directions'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Разрешение' : 'Resolution'}</span>
                  <span className="font-medium">{language === 'ru' ? 'до 50 мкм' : 'up to 50 μm'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'ИИ-функции' : 'AI Features'}</span>
                  <span className="font-medium">{language === 'ru' ? 'Встроенные' : 'Built-in'}</span>
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
                  <span>{language === 'ru' ? 'Применения' : 'Applications'}</span>
                  <span className="font-medium">{language === 'ru' ? '4 направления' : '4 directions'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Разрешение' : 'Resolution'}</span>
                  <span className="font-medium">{language === 'ru' ? 'до 8MP (4K)' : 'up to 8MP (4K)'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Калибровка' : 'Calibration'}</span>
                  <span className="font-medium">DICOM GSDF</span>
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
                  <span>{language === 'ru' ? 'Отрасли' : 'Industries'}</span>
                  <span className="font-medium">{language === 'ru' ? '4 направления' : '4 directions'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Защита' : 'Protection'}</span>
                  <span className="font-medium">IP54 – IP67</span>
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

// Product Card Component
interface ProductCardProps {
  product: Product;
  categoryId: string;
  index: number;
  language: 'ru' | 'en';
  t: (key: string) => string;
}

const ProductCard = ({ product, categoryId, index, language, t }: ProductCardProps) => {
  return (
    <Card 
      className="hover-lift corporate-shadow animate-fade-in-up group overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        {product.isNew && (
          <Badge className="absolute top-4 right-4 bg-success text-white z-10 animate-pulse-glow">
            {t('products.newBadge')}
          </Badge>
        )}
        
        <div className="h-56 bg-gradient-to-br from-accent/5 to-primary/5 relative overflow-hidden group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          <img 
            src={getProductImage(product.images[0])} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs">
              {language === 'ru' 
                ? (product.subcategory === 'medical' ? 'Медицина' :
                   product.subcategory === 'ndt' ? 'NDT' :
                   product.subcategory === 'security' ? 'Безопасность' :
                   product.subcategory === 'veterinary' ? 'Ветеринария' :
                   product.subcategory === 'radiology' ? 'Радиология' :
                   product.subcategory === 'surgery' ? 'Хирургия' :
                   product.subcategory === 'endoscopy' ? 'Эндоскопия' :
                   product.subcategory === 'clinical' ? 'Клинический' :
                   product.subcategory === 'industrial' ? 'Промышленность' :
                   product.subcategory === 'command' ? 'Диспетчерские' :
                   product.subcategory === 'defense' ? 'Оборона' :
                   product.subcategory === 'transport' ? 'Транспорт' :
                   product.subcategory)
                : product.subcategory
              }
            </Badge>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Key Specifications */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">{t('products.specs')}</h4>
          <div className="grid grid-cols-1 gap-1 text-xs">
            {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
              <div key={key} className="flex justify-between py-1 border-b border-border/50">
                <span className="text-muted-foreground">{key}:</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-sm">{t('products.applications')}</h4>
          <div className="flex flex-wrap gap-1">
            {product.applications.slice(0, 3).map((app) => (
              <Badge key={app} variant="secondary" className="text-xs">
                {app}
              </Badge>
            ))}
            {product.applications.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{product.applications.length - 3}
              </Badge>
            )}
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
  );
};

// Product List Item Component
const ProductListItem = ({ product, categoryId, index, language, t }: ProductCardProps) => {
  return (
    <Card 
      className="hover-lift corporate-shadow animate-fade-in-up group overflow-hidden"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-56 h-48 md:h-auto bg-gradient-to-br from-accent/5 to-primary/5 flex-shrink-0 overflow-hidden">
          <img 
            src={getProductImage(product.images[0])} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <CardContent className="p-6 flex-1">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {language === 'ru' 
                    ? (product.subcategory === 'medical' ? 'Медицина' :
                       product.subcategory === 'ndt' ? 'NDT' :
                       product.subcategory === 'security' ? 'Безопасность' :
                       product.subcategory === 'veterinary' ? 'Ветеринария' :
                       product.subcategory === 'radiology' ? 'Радиология' :
                       product.subcategory === 'surgery' ? 'Хирургия' :
                       product.subcategory === 'endoscopy' ? 'Эндоскопия' :
                       product.subcategory === 'clinical' ? 'Клинический' :
                       product.subcategory === 'industrial' ? 'Промышленность' :
                       product.subcategory === 'command' ? 'Диспетчерские' :
                       product.subcategory === 'defense' ? 'Оборона' :
                       product.subcategory === 'transport' ? 'Транспорт' :
                       product.subcategory)
                    : product.subcategory
                  }
                </Badge>
                {product.isNew && (
                  <Badge className="bg-success text-white text-xs">
                    {t('products.newBadge')}
                  </Badge>
                )}
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">
                {product.shortDescription}
              </p>
              <div className="flex flex-wrap gap-1">
                {product.applications.slice(0, 4).map((app) => (
                  <Badge key={app} variant="secondary" className="text-xs">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <QuoteModal>
                <Button size="sm" className="bg-accent hover:bg-accent-light">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {t('products.requestQuote')}
                </Button>
              </QuoteModal>
              <Button 
                variant="outline" 
                size="sm"
                className="hover:bg-accent/10"
                asChild
              >
                <Link to={`/products/${categoryId}/${product.id}`}>
                  {language === 'ru' ? 'Подробнее' : 'Details'}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Products;
