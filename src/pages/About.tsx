import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, MapPin, Target } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2025", event: "Основание компании КСEЛОН в Ростове-на-Дону,Получение статуса резидента Технопарка Бештау,Подписание соглашения о строительстве завода в Техно-парке БЕШТАУ" },
    { year: "2026", event: "Выпущен прототип детектора" },
    { year: "2027", event: "Запуск полного цикла производства первых цифровых детекторов XELON XRAY" },
  ];

  const values = [
    {
      icon: Target,
      title: "Инновации",
      description: "Постоянные инвестиции в R&D и разработку передовых технологий"
    },
    {
      icon: Award,
      title: "Качество",
      description: "Международные стандарты и строгий контроль на каждом этапе"
    },
    {
      icon: Users,
      title: "Партнерство",
      description: "Долгосрочные отношения с клиентами и поставщиками"
    },
    {
      icon: MapPin,
      title: "Глобальность",
      description: "Присутствие на рынках более чем 50 стран мира"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white">
              О компании КСEЛОН
            </Badge>
            <h1 className="section-title mb-6">
              Лидер в производстве цифровых детекторов
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Российский лидер в области создания инновационных решений для медицинской, 
              промышленной и научной визуализации, объединяя современные 
              инженерные технологии с высоким качеством производства.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="section-title mb-6">Наша миссия</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Создавать высокотехнологичные решения для визуализации, которые 
                помогают врачам спасать жизни, инженерам обеспечивать безопасность, 
                а ученым совершать открытия.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Мы верим, что российские технологии могут конкурировать на мировом 
                уровне и делаем все для того, чтобы наши продукты становились 
                эталоном качества и надежности.
              </p>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <Card className="corporate-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Наше видение</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Стать глобальным технологическим лидером в области цифровой 
                    визуализации, создавая продукты, которые превосходят 
                    международные стандарты и делают передовые технологии 
                    доступными для всех.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title mb-6">Наши ценности</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Принципы, которые определяют наш подход к работе и развитию компании
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="hover-lift corporate-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title mb-6">История развития</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ключевые вехи нашего пути к лидерству в индустрии
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="relative flex items-center mb-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-6 z-10">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 corporate-shadow">
                    <CardContent className="p-6">
                      <p className="text-foreground leading-relaxed">
                        {milestone.event}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="section-title mb-6">Присоединяйтесь к нашей команде</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Мы всегда ищем талантливых специалистов, готовых создавать 
            технологии будущего вместе с нами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light">
              Открытые вакансии
            </Button>
            <Button variant="outline" size="lg">
              Инициативные предложения
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;