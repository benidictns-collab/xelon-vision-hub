import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, Clock, Calendar, Video, FileText, Award } from "lucide-react";

const Training = () => {
  const trainingTypes = [
    {
      id: "online",
      name: "Онлайн обучение",
      icon: Video,
      description: "Дистанционные курсы и вебинары"
    },
    {
      id: "onsite",
      name: "Очное обучение",
      icon: Users,
      description: "Обучение на месте установки оборудования"
    },
    {
      id: "certification",
      name: "Сертификация",
      icon: Award,
      description: "Программы сертификации специалистов"
    }
  ];

  const courses = {
    online: [
      {
        title: "Основы работы с детекторами XELON",
        duration: "4 часа",
        level: "Начальный",
        participants: "До 20 человек",
        format: "Интерактивный вебинар",
        price: "Бесплатно",
        nextDate: "25.01.2025"
      },
      {
        title: "Продвинутые функции программного обеспечения",
        duration: "6 часов",
        level: "Продвинутый",
        participants: "До 15 человек",
        format: "Практический курс",
        price: "15 000 ₽",
        nextDate: "30.01.2025"
      },
      {
        title: "Устранение неполадок и техническое обслуживание",
        duration: "8 часов",
        level: "Экспертный",
        participants: "До 10 человек",
        format: "Мастер-класс",
        price: "25 000 ₽",
        nextDate: "05.02.2025"
      }
    ],
    onsite: [
      {
        title: "Установка и настройка оборудования",
        duration: "1-2 дня",
        level: "Любой",
        participants: "До 5 человек",
        format: "Практическое обучение",
        price: "По запросу",
        nextDate: "По согласованию"
      },
      {
        title: "Обучение медицинского персонала",
        duration: "1 день",
        level: "Начальный",
        participants: "До 10 человек",
        format: "Групповое обучение",
        price: "По запросу",
        nextDate: "По согласованию"
      },
      {
        title: "Техническое обслуживание для инженеров",
        duration: "2-3 дня",
        level: "Продвинутый",
        participants: "До 5 человек",
        format: "Интенсив",
        price: "По запросу",
        nextDate: "По согласованию"
      }
    ],
    certification: [
      {
        title: "Сертифицированный оператор XELON",
        duration: "40 часов",
        level: "Начальный",
        participants: "До 12 человек",
        format: "Смешанный формат",
        price: "50 000 ₽",
        nextDate: "15.02.2025"
      },
      {
        title: "Сертифицированный техник XELON",
        duration: "80 часов",
        level: "Продвинутый",
        participants: "До 8 человек",
        format: "Очно + практика",
        price: "95 000 ₽",
        nextDate: "01.03.2025"
      },
      {
        title: "Сертифицированный инструктор XELON",
        duration: "120 часов",
        level: "Экспертный",
        participants: "До 6 человек",
        format: "Очно + стажировка",
        price: "150 000 ₽",
        nextDate: "15.03.2025"
      }
    ]
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начальный":
        return "bg-green-100 text-green-800";
      case "Продвинутый":
        return "bg-blue-100 text-blue-800";
      case "Экспертный":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Обучение и сертификация
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Профессиональные программы обучения для эффективного использования оборудования XELON
          </p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="online" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              {trainingTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <TabsTrigger key={type.id} value={type.id} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{type.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {trainingTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{type.name}</h2>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses[type.id as keyof typeof courses].map((course) => (
                    <Card key={course.title} className="p-6 h-full flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3">{course.title}</h3>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{course.participants}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{course.format}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{course.nextDate}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={getLevelColor(course.level)} variant="secondary">
                            {course.level}
                          </Badge>
                          <Badge variant="outline" className="font-semibold">
                            {course.price}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button className="flex-1">Записаться</Button>
                        <Button variant="outline" size="sm">
                          Подробнее
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества обучения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Экспертные знания</h3>
              <p className="text-muted-foreground text-sm">
                Обучение от разработчиков оборудования
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Сертификация</h3>
              <p className="text-muted-foreground text-sm">
                Официальные сертификаты XELON
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Поддержка</h3>
              <p className="text-muted-foreground text-sm">
                Постоянная техническая поддержка
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Video className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Гибкость</h3>
              <p className="text-muted-foreground text-sm">
                Онлайн и офлайн форматы обучения
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Training CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Индивидуальное обучение</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Разработаем программу обучения специально для ваших потребностей и задач
          </p>
          <Button size="lg">Заказать индивидуальное обучение</Button>
        </div>
      </section>
    </div>
  );
};

export default Training;