import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lightbulb, Award, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Российское производство",
      description: "Полный производственный цикл на территории России. Резидент Технопарка Бештау. Планируется внесение в Реестр отечественной продукции в соответствии с 719 ПП Минпромторга",
      features: ["Независимость от импорта", "Резидент Технопарка Бештау", "Реестр отечественной продукции"],
      color: "bg-success/10 text-success",
    },
    {
      icon: Lightbulb,
      title: "Инновации",
      description: "Собственные НИОКР и патентованные технологии, обеспечивающие превосходные характеристики",
      features: ["15+ лет R&D", "50+ патентов", "Уникальные алгоритмы"],
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Award,
      title: "Качество",
      description: "Международные сертификаты качества и соответствие медицинским и промышленным стандартам. Детекторы обладают повышенной степенью защиты IP67",
      features: ["ISO 13485", "CE Mark", "IP67 защита"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Globe,
      title: "Глобальная поддержка",
      description: "Техническая поддержка и сервис во всех странах СНГ, БРИКС, ЕАЭС",
      features: ["24/7 поддержка", "Локальные партнеры", "Обучение персонала"],
      color: "bg-accent-light/10 text-accent-light",
    },
  ];

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Почему выбирают КСEЛОН
          </Badge>
          <h2 className="section-title text-foreground mb-6">
            Ключевые преимущества
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем не просто продукты, а комплексные решения, 
            основанные на глубоком понимании потребностей каждой отрасли
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={advantage.title} 
              className="hover-lift corporate-shadow animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition`}>
                  <advantage.icon className="h-6 w-6" />
                </div>
                
                <h3 className="card-title text-foreground mb-3">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {advantage.description}
                </p>
                
                <div className="space-y-2">
                  {advantage.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "20+", label: "опытных инженеров" },
            { value: "10+", label: "патентов" },
            { value: "40+", label: "моделей детекторов" },
            { value: "5+", label: "офисов" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;