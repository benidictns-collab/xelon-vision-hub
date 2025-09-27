import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Wrench, Microscope } from "lucide-react";
import medicalImage from "@/assets/medical-industry.jpg";
import industrialImage from "@/assets/industrial-ndt.jpg";
import scientificImage from "@/assets/scientific-research.jpg";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Heart,
      title: "Медицина",
      subtitle: "Диагностическая визуализация",
      description: "Цифровые детекторы для рентгенографии, маммографии, флюорографии, С-дуги и стоматологии",
      backgroundImage: medicalImage,
      applications: [
        "Цифровая рентгенография R&F",
        "Маммография",
        "Мобильные системы",
        "Интраоральная стоматология",
        "Ветеринарная визуализация"
      ],
      stats: { installations: "500+", countries: "30+" },
      iconColor: "text-red-500",
    },
    {
      icon: Wrench,
      title: "Промышленность",
      subtitle: "Неразрушающий контроль",
      description: "Решения для контроля качества в авиакосмической, нефтегазовой и машиностроительной отраслях",
      backgroundImage: industrialImage,
      applications: [
        "Контроль сварных швов",
        "Дефектоскопия отливок",
        "Инспекция трубопроводов",
        "Контроль композитов",
        "Безопасность и досмотр"
      ],
      stats: { installations: "300+", countries: "25+" },
      iconColor: "text-blue-500",
    },
    {
      icon: Microscope,
      title: "Спецвизуализация",
      subtitle: "Научные исследования",
      description: "Высокочувствительные детекторы для научных исследований, синхротронного излучения и микротомографии",
      backgroundImage: scientificImage,
      applications: [
        "Синхротронные исследования",
        "Микро-КТ",
        "Нейтронная визуализация",
        "Высокоэнергетическая физика",
        "Материаловедение"
      ],
      stats: { installations: "200+", countries: "20+" },
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Отрасли применения
          </Badge>
          <h2 className="section-title text-foreground mb-6">
            Решения для любых задач визуализации
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Наши цифровые плоскопанельные детекторы применяются в самых требовательных 
            областях от медицинской диагностики до научных исследований
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card 
              key={industry.title}
              className="industry-card corporate-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div 
                className="h-48 relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${industry.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{industry.title}</h3>
                  <p className="text-white/90 text-sm">{industry.subtitle}</p>
                </div>
                
                {/* Stats overlay */}
                <div className="absolute top-4 right-4 text-right text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xl font-bold">{industry.stats.installations}</div>
                    <div className="text-xs text-white/90">установок</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground">Основные применения:</h4>
                  {industry.applications.map((app) => (
                    <div key={app} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{app}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{industry.stats.installations}</div>
                    <div className="text-xs text-muted-foreground">установок</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{industry.stats.countries}</div>
                    <div className="text-xs text-muted-foreground">стран</div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group hover:bg-accent hover:text-white hover:border-accent"
                >
                  Подробнее о решениях
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 fast-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Не нашли подходящее решение?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Наши инженеры разработают индивидуальное решение под ваши задачи. 
            Консультация и техническая поддержка - бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light">
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg">
              Скачать каталог
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;