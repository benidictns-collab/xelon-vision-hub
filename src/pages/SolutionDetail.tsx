import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Star, Users, Clock, TrendingUp } from "lucide-react";

const SolutionDetail = () => {
  const { solutionId } = useParams();
  const navigate = useNavigate();

  const solutionsData = {
    "digital-xray": {
      title: "Цифровая рентгенография R&F",
      industry: "Медицина",
      description: "Комплексное решение для перехода от аналоговой к цифровой рентгенографии с максимальной эффективностью и безопасностью для пациентов",
      fullDescription: "Наша система цифровой рентгенографии представляет собой полностью интегрированное решение, которое кардинально меняет подход к рентгеновской диагностике. Система включает в себя высокочувствительные детекторы последнего поколения, интеллектуальную систему обработки изображений и полную интеграцию с больничными информационными системами.",
      benefits: [
        "Снижение дозы облучения до 90%",
        "Мгновенное получение изображений", 
        "Интеграция с DICOM и RIS/PACS",
        "Повышение пропускной способности на 300%"
      ],
      features: [
        "Плоскопанельные детекторы с разрешением до 3.5 пл/мм",
        "Автоматическая оптимизация экспозиции (AEC)",
        "Программная фильтрация изображений в реальном времени",
        "Беспроводная передача данных по защищенному каналу",
        "Совместимость с любыми рентгеновскими аппаратами",
        "Система резервного копирования и архивирования"
      ],
      applications: ["Поликлиники", "Больницы", "Медицинские центры"],
      roi: "Окупаемость 18 месяцев",
      caseStudy: "ГКБ №1 им. Пирогова - модернизация 12 кабинетов",
      implementation: "Полное внедрение системы занимает от 2 до 4 недель в зависимости от количества рабочих мест. Включает установку оборудования, настройку ПО, обучение персонала и техническую поддержку в течение первого месяца работы.",
      support: "Круглосуточная техническая поддержка, регулярные обновления ПО, профилактическое обслуживание каждые 6 месяцев",
      testimonial: "Переход на цифровую систему позволил нам увеличить пропускную способность кабинетов в 3 раза и значительно улучшить качество диагностики",
      customerName: "Главврач ГКБ №1 им. Пирогова"
    },
    "welding-control": {
      title: "Контроль качества сварных швов",
      industry: "Промышленность", 
      description: "Автоматизированная система контроля сварных соединений для критически важных конструкций с использованием передовых алгоритмов анализа",
      fullDescription: "Система представляет собой комплексное решение для неразрушающего контроля сварных соединений, использующее цифровую рентгенографию и искусственный интеллект для автоматического обнаружения и классификации дефектов. Система способна работать в полевых условиях и интегрируется с существующими системами качества предприятия.",
      benefits: [
        "Обнаружение дефектов от 0.5 мм",
        "Автоматическая классификация дефектов",
        "Цифровой архив результатов",
        "Сокращение времени контроля в 5 раз"
      ],
      features: [
        "ИИ-алгоритмы для автоматического анализа дефектов",
        "Портативные детекторы для полевых условий",
        "Цифровая система учета и отчетности",
        "Интеграция с 1С и корпоративными системами",
        "Соответствие ГОСТ и международным стандартам",
        "Система электронной подписи протоколов"
      ],
      applications: ["Трубопроводы", "Авиастроение", "Судостроение"],
      roi: "Экономия до 2 млн руб/год",
      caseStudy: "Газпром - контроль магистральных трубопроводов",
      implementation: "Развертывание системы происходит поэтапно: пилотный участок (2 недели), масштабирование (1-2 месяца), полная интеграция с корпоративными системами (до 3 месяцев)",
      support: "Техническая поддержка 24/7, ежегодная калибровка оборудования, обновления алгоритмов ИИ",
      testimonial: "Система позволила нам полностью автоматизировать процесс контроля качества и снизить количество брака на 85%",
      customerName: "Главный инженер ООО 'Газпром трансгаз'"
    },
    "synchrotron-tomography": {
      title: "Синхротронная томография",
      industry: "Наука",
      description: "Решение для высокоразрешающей 3D визуализации внутренней структуры материалов с субмикронным разрешением",
      fullDescription: "Наша система синхротронной томографии предназначена для передовых научных исследований, требующих максимального разрешения и точности. Система использует синхротронное излучение для получения детальных 3D-изображений внутренней структуры образцов без их разрушения, что критически важно для изучения уникальных материалов и биологических объектов.",
      benefits: [
        "Разрешение до 0.1 мкм",
        "Неразрушающий анализ",
        "3D реконструкция в реальном времени",
        "Совместимость с любыми источниками излучения"
      ],
      features: [
        "Высокоскоростные детекторы (до 1000 кадров/сек)",
        "Алгоритмы реконструкции на GPU",
        "Система климат-контроля для образцов",
        "Автоматизированная смена образцов",
        "Возможность томографии in-situ процессов",
        "Экспортв стандартные форматы анализа"
      ],
      applications: ["Исследовательские центры", "Университеты", "R&D лаборатории"],
      roi: "Увеличение эффективности исследований на 400%",
      caseStudy: "РАН - изучение композитных материалов",
      implementation: "Установка и наладка занимает 4-6 недель, включая калибровку оборудования, настройку ПО реконструкции и обучение операторов работе с системой",
      support: "Специализированная техподдержка научного оборудования, регулярные калибровки, консультации по методикам исследований",
      testimonial: "Благодаря системе мы смогли впервые в мире визуализировать процессы разрушения на микроуровне в реальном времени",
      customerName: "Руководитель лаборатории материаловедения РАН"
    },
    "mobile-xray": {
      title: "Мобильная рентгенография",
      industry: "Медицина",
      description: "Беспроводное решение для рентгенографии в палатах и операционных с максимальной мобильностью и качеством изображения",
      fullDescription: "Мобильная система рентгенографии разработана специально для работы в условиях, где традиционные стационарные системы неприменимы. Полностью беспроводной детектор обеспечивает максимальную свободу действий медперсонала, а интеллектуальная система обработки гарантирует высокое качество изображений даже в сложных условиях съемки.",
      benefits: [
        "Полная беспроводная свобода",
        "Время автономной работы 8 часов",
        "Мгновенная передача изображений",
        "Защита от жидкостей IP54"
      ],
      features: [
        "Беспроводной детектор весом всего 2.3 кг",
        "Wi-Fi 6 для мгновенной передачи данных",
        "Ударопрочный корпус военного стандарта",
        "Интеграция с больничными Wi-Fi сетями",
        "Система экстренного оповещения при критических находках",
        "Совместимость с любыми мобильными рентген-аппаратами"
      ],
      applications: ["Реанимация", "Операционные", "Педиатрия"],
      roi: "Экономия времени медперсонала 40%",
      caseStudy: "Бурденко - оснащение отделения нейрохирургии",
      implementation: "Быстрое развертывание за 1-2 дня: настройка Wi-Fi подключения, интеграция с PACS, обучение медперсонала работе с мобильной системой",
      support: "Круглосуточная горячая линия, выездное обслуживание в течение 4 часов, профилактика каждые 3 месяца",
      testimonial: "Мобильная система кардинально изменила работу нашего отделения - теперь мы можем делать рентген прямо у постели тяжелых пациентов",
      customerName: "Заведующий отделением реанимации НИИ им. Бурденко"
    },
    "security-screening": {
      title: "Досмотр багажа и грузов",
      industry: "Безопасность",
      description: "Высокоскоростная система рентгеновского досмотра для аэропортов и таможни с автоматическим обнаружением угроз",
      fullDescription: "Система безопасности представляет собой комплексное решение для досмотра багажа и грузов, использующее передовые алгоритмы искусственного интеллекта для автоматического обнаружения запрещенных предметов. Система обеспечивает высокую пропускную способность при максимальном уровне безопасности.",
      benefits: [
        "Скорость конвейера до 0.5 м/с",
        "Автоматическое обнаружение угроз",
        "Многоэнергетическая визуализация",
        "Интеграция с системами безопасности"
      ],
      features: [
        "ИИ-система распознавания запрещенных предметов",
        "Двухэнергетическое сканирование для анализа материалов",
        "Автоматическая сортировка подозрительного багажа",
        "Интеграция с биометрическими системами",
        "Централизованная система мониторинга",
        "Соответствие международным стандартам безопасности"
      ],
      applications: ["Аэропорты", "Таможня", "Логистические центры"],
      roi: "Повышение пропускной способности на 200%",
      caseStudy: "Шереметьево - модернизация системы досмотра",
      implementation: "Поэтапное внедрение: тестирование на одной линии (1 неделя), масштабирование (2-4 недели), интеграция с существующими системами безопасности",
      support: "24/7 мониторинг работоспособности, обновления базы угроз в реальном времени, техобслуживание без остановки работы",
      testimonial: "Новая система позволила нам увеличить пропускную способность в 2 раза при повышении уровня безопасности",
      customerName: "Руководитель службы авиационной безопасности Шереметьево"
    },
    "veterinary-imaging": {
      title: "Ветеринарная визуализация",
      industry: "Ветеринария",
      description: "Специализированное решение для диагностики мелких и крупных животных с адаптивными алгоритмами обработки",
      fullDescription: "Ветеринарная система визуализации разработана с учетом специфики работы с животными различных размеров и видов. Система включает специальные алгоритмы обработки изображений, адаптированные под анатомические особенности животных, и интегрируется с ветеринарными информационными системами.",
      benefits: [
        "Адаптация под любые размеры пациентов",
        "Быстрая диагностика без седации",
        "Специальные алгоритмы обработки",
        "Ветеринарная DICOM интеграция"
      ],
      features: [
        "Предустановленные протоколы для разных видов животных",
        "Система фиксации для беспокойных пациентов",
        "Специальные фильтры для анализа костной ткани животных",
        "Интеграция с ветеринарными LIS системами",
        "База данных анатомических норм по видам",
        "Система телеконсультаций с ветеринарными радиологами"
      ],
      applications: ["Ветклиники", "Зоопарки", "Сельхозпредприятия"],
      roi: "Увеличение потока пациентов на 150%",
      caseStudy: "Московский зоопарк - диагностика экзотических животных",
      implementation: "Установка занимает 1-2 недели, включая настройку под специфику клиники, загрузку анатомических шаблонов и обучение ветеринарного персонала",
      support: "Специализированная ветеринарная поддержка, консультации ветрадиологов, регулярные обновления анатомических баз данных",
      testimonial: "Система позволила нам диагностировать редкие заболевания у экзотических животных с точностью, недоступной ранее",
      customerName: "Главный ветврач Московского зоопарка"
    }
  };

  const solution = solutionsData[solutionId as keyof typeof solutionsData];

  if (!solution) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Решение не найдено</h1>
          <Button onClick={() => navigate('/solutions')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться к решениям
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="mb-6">
              <Button 
                variant="outline" 
                className="mb-6 border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/solutions')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Вернуться к решениям
              </Button>
              <Badge variant="outline" className="border-white/30 text-white">
                {solution.industry}
              </Badge>
            </div>
            <h1 className="hero-title mb-6">{solution.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <Card className="mb-8 corporate-shadow">
                <CardContent className="p-8">
                  <h2 className="section-title mb-6">Подробное описание</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.fullDescription}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Технические особенности:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Implementation */}
              <Card className="mb-8 corporate-shadow">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold mb-4">Внедрение и поддержка</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-accent" />
                        Сроки внедрения
                      </h3>
                      <p className="text-muted-foreground text-sm">{solution.implementation}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-accent" />
                        Техническая поддержка
                      </h3>
                      <p className="text-muted-foreground text-sm">{solution.support}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="corporate-shadow">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold mb-4">Отзыв клиента</h2>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <blockquote className="text-muted-foreground italic mb-3">
                        "{solution.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-medium">— {solution.customerName}</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              {/* Key Benefits */}
              <Card className="mb-6 corporate-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Ключевые преимущества</h3>
                  <div className="space-y-3">
                    {solution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ROI */}
              <Card className="mb-6 corporate-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-accent" />
                    Экономический эффект
                  </h3>
                  <div className="text-lg font-bold text-accent">{solution.roi}</div>
                </CardContent>
              </Card>

              {/* Applications */}
              <Card className="mb-6 corporate-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Области применения</h3>
                  <div className="space-y-2">
                    {solution.applications.map((app, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="corporate-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Заинтересованы в решении?</h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-accent hover:bg-accent-light">
                      Получить коммерческое предложение
                    </Button>
                    <Button variant="outline" className="w-full">
                      Заказать демонстрацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;