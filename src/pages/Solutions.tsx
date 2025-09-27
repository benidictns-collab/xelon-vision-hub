import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleCheck as CheckCircle, ArrowRight, Download } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      title: "Цифровая рентгенография R&F",
      industry: "Медицина",
      description: "Комплексное решение для перехода от аналоговой к цифровой рентгенографии",
      benefits: [
        "Снижение дозы облучения до 90%",
        "Мгновенное получение изображений", 
        "Интеграция с DICOM и RIS/PACS",
        "Повышение пропускной способности на 300%"
      ],
      applications: ["Поликлиники", "Больницы", "Медицинские центры"],
      roi: "Окупаемость 18 месяцев",
      caseStudy: "ГКБ №1 им. Пирогова - модернизация 12 кабинетов"
    },
    {
      title: "Контроль качества сварных швов",
      industry: "Промышленность",
      description: "Автоматизированная система контроля сварных соединений для критически важных конструкций",
      benefits: [
        "Обнаружение дефектов от 0.5 мм",
        "Автоматическая классификация дефектов",
        "Цифровой архив результатов",
        "Сокращение времени контроля в 5 раз"
      ],
      applications: ["Трубопроводы", "Авиастроение", "Судостроение"],
      roi: "Экономия до 2 млн руб/год",
      caseStudy: "Газпром - контроль магистральных трубопроводов"
    },
    {
      title: "Синхротронная томография",
      industry: "Наука",
      description: "Решение для высокоразрешающей 3D визуализации внутренней структуры материалов",
      benefits: [
        "Разрешение до 0.1 мкм",
        "Неразрушающий анализ",
        "3D реконструкция в реальном времени",
        "Совместимость с любыми источниками излучения"
      ],
      applications: ["Исследовательские центры", "Университеты", "R&D лаборатории"],
      roi: "Увеличение эффективности исследований на 400%",
      caseStudy: "РАН - изучение композитных материалов"
    },
    {
      title: "Мобильная рентгенография",
      industry: "Медицина",
      description: "Беспроводное решение для рентгенографии в палатах и операционных",
      benefits: [
        "Полная беспроводная свобода",
        "Время автономной работы 8 часов",
        "Мгновенная передача изображений",
        "Защита от жидкостей IP54"
      ],
      applications: ["Реанимация", "Операционные", "Педиатрия"],
      roi: "Экономия времени медперсонала 40%",
      caseStudy: "Бурденко - оснащение отделения нейрохирургии"
    },
    {
      title: "Досмотр багажа и грузов",
      industry: "Безопасность",
      description: "Высокоскоростная система рентгеновского досмотра для аэропортов и таможни",
      benefits: [
        "Скорость конвейера до 0.5 м/с",
        "Автоматическое обнаружение угроз",
        "Многоэнергетическая визуализация",
        "Интеграция с системами безопасности"
      ],
      applications: ["Аэропорты", "Таможня", "Логистические центры"],
      roi: "Повышение пропускной способности на 200%",
      caseStudy: "Шереметьево - модернизация системы досмотра"
    },
    {
      title: "Ветеринарная визуализация",
      industry: "Ветеринария",
      description: "Специализированное решение для диагностики мелких и крупных животных",
      benefits: [
        "Адаптация под любые размеры пациентов",
        "Быстрая диагностика без седации",
        "Специальные алгоритмы обработки",
        "Ветеринарная DICOM интеграция"
      ],
      applications: ["Ветклиники", "Зоопарки", "Сельхозпредприятия"],
      roi: "Увеличение потока пациентов на 150%",
      caseStudy: "Московский зоопарк - диагностика экзотических животных"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white">
              Готовые решения
            </Badge>
            <h1 className="section-title mb-6">
              Проверенные кейсы и решения
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Реальные примеры внедрения наших технологий с измеримыми результатами 
              и конкретной экономической эффективностью
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.title}
                className="hover-lift corporate-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Badge variant="outline" className="mb-3 text-accent border-accent">
                      {solution.industry}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Ключевые преимущества:</h4>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Применения:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.applications.map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="mb-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Экономический эффект:</span>
                      <span className="text-accent font-bold">{solution.roi}</span>
                    </div>
                  </div>


                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-accent hover:bg-accent-light relative z-20 pointer-events-auto">
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="section-title mb-6">Индивидуальные решения</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Не нашли подходящий кейс? Наши инженеры разработают уникальное решение 
              специально под ваши требования и бюджет
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-light">
                Обсудить проект
              </Button>
              <Button variant="outline" size="lg">
                Техническое задание
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;