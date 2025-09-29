import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Rocket } from "lucide-react";

const History = () => {
  const milestones = [
    {
      year: "2015",
      title: "Основание компании",
      description: "Создание КСEЛОН с фокусом на разработку цифровых детекторов",
      icon: Rocket
    },
    {
      year: "2017",
      title: "Первый продукт",
      description: "Выпуск первого медицинского плоскопанельного детектора",
      icon: Award
    },
    {
      year: "2019",
      title: "Международная сертификация",
      description: "Получение сертификатов CE Mark и ISO 13485",
      icon: Award
    },
    {
      year: "2021",
      title: "Расширение линейки",
      description: "Запуск промышленных и научных решений",
      icon: Rocket
    },
    {
      year: "2023",
      title: "Инновационные технологии",
      description: "Внедрение AI-алгоритмов обработки изображений",
      icon: Award
    },
    {
      year: "2025",
      title: "Лидерство на рынке",
      description: "Признание ведущим российским производителем детекторов",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            История КСEЛОН
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            10 лет инноваций и развития в области цифровой визуализации
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <Card key={milestone.year} className="p-6 relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline" className="text-primary border-primary">
                            <Calendar className="h-3 w-3 mr-1" />
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-8 bg-border"></div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;