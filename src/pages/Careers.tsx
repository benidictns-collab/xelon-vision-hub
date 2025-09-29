import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Award, Heart, Briefcase } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      title: "Ведущий инженер-разработчик",
      department: "R&D",
      location: "Ростов-на-Дону",
      type: "Полная занятость",
      experience: "5+ лет",
      description: "Разработка нового поколения цифровых детекторов для медицинской визуализации"
    },
    {
      title: "Инженер по качеству",
      department: "Качество",
      location: "Ростов-на-Дону",
      type: "Полная занятость",
      experience: "3+ лет",
      description: "Контроль качества продукции и соответствие международным стандартам"
    },
    {
      title: "Менеджер по продажам",
      department: "Продажи",
      location: "Москва/Удаленно",
      type: "Полная занятость",
      experience: "3+ лет",
      description: "Развитие продаж медицинского оборудования в регионах России"
    },
    {
      title: "Программист-алгоритмист",
      department: "R&D",
      location: "Ростов-на-Дону",
      type: "Полная занятость",
      experience: "4+ лет",
      description: "Разработка алгоритмов обработки и анализа медицинских изображений"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Медицинское страхование",
      description: "Полный пакет ДМС для сотрудника и семьи"
    },
    {
      icon: Award,
      title: "Профессиональное развитие",
      description: "Обучение, конференции, сертификации"
    },
    {
      icon: Users,
      title: "Командная работа",
      description: "Дружный коллектив единомышленников"
    },
    {
      icon: Briefcase,
      title: "Интересные проекты",
      description: "Работа над инновационными технологиями"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Карьера в КСEЛОН
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Создавайте будущее медицинских технологий вместе с нами
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Посмотреть вакансии
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему КСEЛОН?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Открытые вакансии</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job) => (
              <Card key={job.title} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline">{job.experience}</Badge>
                    </div>
                  </div>
                  <Button>Откликнуться</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли подходящую вакансию?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Отправьте нам свое резюме, и мы обязательно рассмотрим вашу кандидатуру при появлении подходящих позиций
          </p>
          <Button size="lg">Отправить резюме</Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;