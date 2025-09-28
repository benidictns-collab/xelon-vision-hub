import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, ExternalLink } from "lucide-react";
import logoImage from "@/assets/logo.png";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "КСЕЛОН будет строить завод цифровых детекторов в Технопарке \"БЕШТАУ\"",
      excerpt: "На международной выставке «Иннопром-2025» в Екатеринбурге подписано соглашение о строительстве производства цифровых плоскопанельных детекторов нового поколения",
      content: "ООО «КСЕЛОН» намерена реализовать в Технопарке \"Бештау\" проект по производству цифровых плоскопанельных детекторов нового поколения для промышленности и медицины. КСЕЛОН получил статус резидента Технопарка Бештау. Компания планирует постепенно переходить на отечественные компоненты, чтобы к 2030 году полностью локализовать производство. Инвестиции в проект составят более 2,5 млрд рублей, будет создано более 250 рабочих мест.",
      date: "2025-09-25",
      author: "Пресс-служба КСEЛОН",
      category: "Бизнес",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "КСEЛОН получил статус резидента Технопарка Бештау",
      excerpt: "Компания присоединилась к инновационной экосистеме технопарка для развития высокотехнологичного производства",
      content: "Статус резидента открывает новые возможности для масштабирования производства детекторов XELON XRAY и развития R&D направления в области цифровой визуализации.",
      date: "2025-08-15",
      author: "Пресс-служба КСEЛОН",
      category: "Бизнес",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Запуск серийного производства детекторов XELON XRAY",
      excerpt: "Планируется запуск серийного производства 01.03.2027",
      content: "Детекторы XELON XRAY обеспечивают высочайшее качество изображения при минимальной дозе облучения и полностью соответствуют российским и международным стандартам качества.",
      date: "2025-07-20",
      author: "Производственный департамент",
      category: "Продукты",
      image: "/api/placeholder/400/250",
      featured: false
    },
  ];

  const categories = ["Все", "Продукты", "Бизнес", "Инновации", "Партнерство", "Сертификация", "Награды"];

  const events = [
    // Россия
    {
      title: "Российский форум «Микроэлектроника 2025»",
      date: "21–27 сентября 2025",
      location: "Сочи, Россия",
      description: "Российский форум по микроэлектронике",
      website: "https://microelectronica.pro/"
    },
    {
      title: "ExpoElectronica 2026",
      date: "14–16 апреля 2026",
      location: "Москва, Россия",
      description: "Выставка электроники и компонентов",
      website: "https://expoelectronica.ru/"
    },
    {
      title: "NDT Russia",
      date: "21–23 октября 2025",
      location: "Москва, Россия", 
      description: "Выставка неразрушающего контроля",
      website: "https://www.ndt-russia.ru/"
    },
    {
      title: "Дефектоскопия / NDT",
      date: "28–29 апреля 2026",
      location: "Санкт-Петербург, Россия",
      description: "Выставка по дефектоскопии",
      website: "https://www.ndt-defectoscopy.ru/"
    },
    {
      title: "RADEL",
      date: "ежегодно",
      location: "Санкт-Петербург, Россия",
      description: "Выставка радиоэлектроники",
      website: "https://radelexpo.ru/"
    },
    {
      title: "«Электроника России»",
      date: "25–27 ноября 2025",
      location: "Москва, Россия",
      description: "Выставка российской электроники",
      website: "https://rus-elektronika.ru"
    },
    {
      title: "ICEE 2026",
      date: "7–10 апреля 2026",
      location: "Москва, Россия",
      description: "Международная выставка электроники",
      website: "https://icee-expo.ru"
    },
    // Китай
    {
      title: "NEPCON China 2026 (Shanghai)",
      date: "21–23 апреля 2026",
      location: "Шанхай, Китай",
      description: "Выставка электроники в Китае",
      website: "https://www.nepconchina.com/"
    },
    {
      title: "ICET 2026",
      date: "8–11 мая 2026",
      location: "Чэнду, Китай",
      description: "Международная выставка технологий",
      website: "http://icet.net/"
    },
    // СНГ
    {
      title: "Electronica Expo Kazakhstan",
      date: "16–18 июня 2026",
      location: "Астана, Казахстан",
      description: "Выставка электроники в Казахстане",
      website: "https://electronica-expo.com/"
    },
    {
      title: "Consumer / Electronica Expo Kazakhstan",
      date: "16–18 июня 2026",
      location: "Астана, Казахстан",
      description: "Потребительская электроника",
      website: "https://expobeds.com"
    },
    {
      title: "TIHE 2026",
      date: "28–30 апреля 2026",
      location: "Ташкент, Узбекистан",
      description: "Выставка здравоохранения",
      website: "https://tihe.uz/"
    },
    {
      title: "KIHE 2026",
      date: "20–22 мая 2026",
      location: "Алматы, Казахстан",
      description: "Казахстанская выставка здравоохранения",
      website: "https://kihe.kz"
    },
    {
      title: "Eurasian Pharmaceutical Forum 2026",
      date: "26–28 января 2026",
      location: "Алматы, Казахстан",
      description: "Евразийский фармацевтический форум",
      website: "https://eurasian-pharma.com"
    },
    {
      title: "Automation. Electronics",
      date: "17–19 марта 2026",
      location: "Минск, Беларусь",
      description: "Автоматизация и электроника",
      website: "https://automation.minskexpo.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white">
              Пресс-центр
            </Badge>
            <h1 className="section-title mb-6">
              Новости и события
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Последние новости компании, анонсы продуктов, участие в выставках 
              и достижения в области инноваций
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {newsItems.filter(item => item.featured).map((item) => (
            <Card key={item.id} className="corporate-shadow mb-12 overflow-hidden animate-fade-in-up">
              <div className="grid lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <img 
                    src={logoImage} 
                    alt="КСЕЛОН логотип" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge className="mb-3 bg-accent text-white">{item.category}</Badge>
                    <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{item.author}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-fit bg-accent hover:bg-accent-light">
                    Читать полностью
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="section-title mb-6">Все новости</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === "Все" ? "default" : "outline"}
                  size="sm"
                  className={category === "Все" ? "bg-accent hover:bg-accent-light" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item, index) => (
              <Card 
                key={item.id}
                className="hover-lift corporate-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-accent/10 to-primary/10"></div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3 text-accent border-accent">
                      {item.category}
                    </Badge>
                    <h3 className="font-bold mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{item.author}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full relative z-20 pointer-events-auto"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Загрузить еще новости
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="section-title mb-6">Предстоящие события</h2>
              <p className="text-lg text-muted-foreground">
                Встретьтесь с нами на ведущих отраслевых мероприятиях
              </p>
            </div>

            <div className="space-y-6">
              {events.map((event, index) => (
                <Card 
                  key={event.title}
                  className="corporate-shadow animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <ExternalLink className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {event.description}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(event.website, '_blank')}
                        >
                          Подробнее
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                        <Button 
                          className="bg-accent hover:bg-accent-light"
                          size="sm"
                          onClick={() => window.open(event.website, '_blank')}
                        >
                          Встретиться с нами
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="section-title mb-6">Пресс-кит</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Логотипы, фотографии продукции, пресс-релизы и другие материалы 
            для СМИ и партнеров
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light">
              Скачать пресс-кит
            </Button>
            <Button variant="outline" size="lg">
              Связаться с пресс-службой
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;