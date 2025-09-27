import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, ExternalLink } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "КСЕЛОН будет строить завод цифровых детекторов в Новочеркасске",
      excerpt: "На международной выставке «Иннопром-2025» в Екатеринбурге подписано соглашение о строительстве производства цифровых плоскопанельных детекторов нового поколения",
      content: "ООО «КСЕЛОН» намерена реализовать в особой экономической зоне «Ростовская» проект по производству цифровых плоскопанельных детекторов нового поколения для промышленности и медицины. Компания планирует постепенно переходить на отечественные компоненты, чтобы к 2030 году полностью локализовать производство. Инвестиции в проект составят более 2,5 млрд рублей, будет создано более 250 рабочих мест.",
      date: "2025-07-08",
      author: "Пресс-служба КСEЛОН",
      category: "Бизнес",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "КСEЛОН представил новую линейку детекторов на MEDICA 2024",
      excerpt: "На крупнейшей медицинской выставке в Дюссельдорфе компания представила революционные детекторы XELON-AI с искусственным интеллектом",
      content: "Детекторы нового поколения оснащены встроенными алгоритмами машинного обучения для автоматического улучшения качества изображений и снижения дозы облучения до 95%.",
      date: "2024-11-15",
      author: "Пресс-служба КСEЛОН",
      category: "Продукты",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Подписан контракт с Минздравом на поставку 500 детекторов",
      excerpt: "Крупнейший государственный контракт в истории компании на модернизацию медицинского оборудования в регионах",
      content: "В рамках национального проекта 'Здравоохранение' КСEЛОН поставит цифровые детекторы для 200 медицинских учреждений в 50 регионах России.",
      date: "2024-11-10",
      author: "Коммерческий департамент",
      category: "Бизнес",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Получен сертификат FDA для экспорта в США",
      excerpt: "КСEЛОН стал первой российской компанией, получившей одобрение FDA для цифровых детекторов медицинского назначения",
      content: "Сертификация 510(k) открывает американский рынок для продукции КСEЛОН и подтверждает соответствие самым строгим международным стандартам.",
      date: "2024-10-28",
      author: "Отдел качества",
      category: "Сертификация",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Открытие нового R&D центра в Сколково",
      excerpt: "Инвестиции в размере 2 млрд рублей в исследования и разработку технологий следующего поколения",
      content: "Новый центр будет специализироваться на разработке квантовых детекторов и систем с искусственным интеллектом.",
      date: "2024-10-20",
      author: "Департамент R&D",
      category: "Инновации",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Партнерство с Siemens Healthineers",
      excerpt: "Подписано соглашение о стратегическом партнерстве с мировым лидером медицинских технологий",
      content: "Совместные проекты по интеграции детекторов КСEЛОН в системы визуализации Siemens для глобального рынка.",
      date: "2024-10-15",
      author: "Департамент партнерств",
      category: "Партнерство",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Завод КСEЛОН признан лучшим производством года",
      excerpt: "Национальная премия 'Индустрия 4.0' в номинации 'Цифровое производство медицинского оборудования'",
      content: "Награда получена за внедрение системы полной автоматизации производства и контроля качества на базе IoT и ИИ.",
      date: "2024-10-05",
      author: "Производственный департамент",
      category: "Награды",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = ["Все", "Продукты", "Бизнес", "Инновации", "Партнерство", "Сертификация", "Награды"];

  const events = [
    {
      title: "ARAB HEALTH 2025",
      date: "27-30 января 2025",
      location: "Дубай, ОАЭ",
      description: "Крупнейшая медицинская выставка Ближнего Востока"
    },
    {
      title: "ECR 2025",
      date: "26 февраля - 2 марта 2025", 
      location: "Вена, Австрия",
      description: "Европейский конгресс радиологов"
    },
    {
      title: "RSNA 2025",
      date: "30 ноября - 5 декабря 2025",
      location: "Чикаго, США",
      description: "Ведущая конференция по медицинской визуализации"
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
                <div className="h-64 lg:h-auto bg-gradient-to-br from-accent/20 to-primary/20"></div>
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
                  
                  <Button variant="outline" size="sm" className="w-full">
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
                      
                      <Button className="bg-accent hover:bg-accent-light">
                        Встретиться с нами
                      </Button>
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