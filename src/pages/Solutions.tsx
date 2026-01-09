import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleCheck as CheckCircle, ArrowRight, Download, Monitor, Activity, Shield, Microscope } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Solutions = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const solutions = [
    {
      id: "digital-xray",
      title: language === 'ru' ? "Цифровая рентгенография" : "Digital Radiography",
      industry: language === 'ru' ? "Медицина" : "Medicine",
      icon: Activity,
      description: language === 'ru' 
        ? "Комплексное решение: детектор XELON + радиологический дисплей. Полный цикл визуализации от захвата до отображения."
        : "Complete solution: XELON detector + radiology display. Full imaging cycle from capture to display.",
      benefits: language === 'ru' 
        ? [
            "Детектор + дисплей от одного производителя",
            "Калиброванная цветопередача DICOM",
            "Снижение дозы облучения до 90%",
            "Единая гарантия на комплект"
          ]
        : [
            "Detector + display from one manufacturer",
            "Calibrated DICOM color reproduction",
            "Radiation dose reduction up to 90%",
            "Unified warranty on the kit"
          ],
      products: language === 'ru' 
        ? ["Детектор XELON X-RAY-3543", "Дисплей MC50A (5MP)", "ПО XELON VISION"]
        : ["XELON X-RAY-3543 detector", "MC50A display (5MP)", "XELON VISION software"],
      roi: language === 'ru' ? "Окупаемость 18 месяцев" : "ROI 18 months",
      caseStudy: language === 'ru' ? "ГКБ №1 им. Пирогова - модернизация 12 кабинетов" : "City Hospital #1 - 12 rooms modernization"
    },
    {
      id: "surgical-suite",
      title: language === 'ru' ? "Хирургический комплекс" : "Surgical Suite",
      industry: language === 'ru' ? "Медицина" : "Medicine",
      icon: Monitor,
      description: language === 'ru'
        ? "Хирургические и эндоскопические дисплеи 4K для операционных. Сенсорное управление, защита от жидкостей."
        : "4K surgical and endoscopic displays for operating rooms. Touch control, liquid protection.",
      benefits: language === 'ru'
        ? [
            "4K разрешение для точной визуализации",
            "Сенсорное управление в стерильных перчатках",
            "Optical bonding — антибликовое покрытие",
            "3G/12G SDI для хирургических роботов"
          ]
        : [
            "4K resolution for precise visualization",
            "Touch control with sterile gloves",
            "Optical bonding — anti-glare coating",
            "3G/12G SDI for surgical robots"
          ],
      products: language === 'ru'
        ? ["Дисплей MS8270T (27\" 4K Touch)", "Дисплей MS8320T (31.5\" 4K)", "Дисплей MS8550P (55\" 4K)"]
        : ["MS8270T display (27\" 4K Touch)", "MS8320T display (31.5\" 4K)", "MS8550P display (55\" 4K)"],
      roi: language === 'ru' ? "Повышение точности операций на 40%" : "40% increase in surgical precision",
      caseStudy: language === 'ru' ? "НМИЦ хирургии им. Вишневского" : "National Surgery Center"
    },
    {
      id: "ndt-inspection",
      title: language === 'ru' ? "Контроль качества NDT" : "NDT Quality Control",
      industry: language === 'ru' ? "Промышленность" : "Industry",
      icon: Shield,
      description: language === 'ru'
        ? "Детекторы высокого разрешения + промышленные мониторы для неразрушающего контроля сварных швов и отливок."
        : "High-resolution detectors + industrial monitors for non-destructive testing of welds and castings.",
      benefits: language === 'ru'
        ? [
            "Разрешение детектора до 50 мкм",
            "Промышленные мониторы IP65",
            "Автоматическая классификация дефектов",
            "Цифровой архив результатов"
          ]
        : [
            "Detector resolution up to 50 μm",
            "Industrial IP65 monitors",
            "Automatic defect classification",
            "Digital results archive"
          ],
      products: language === 'ru'
        ? ["Детектор XELON X-RAY-1212", "Промышленный монитор IND-2421", "ПО XELON NDT"]
        : ["XELON X-RAY-1212 detector", "IND-2421 industrial monitor", "XELON NDT software"],
      roi: language === 'ru' ? "Сокращение времени контроля в 5 раз" : "5x reduction in inspection time",
      caseStudy: language === 'ru' ? "Газпром - контроль магистральных трубопроводов" : "Gazprom - main pipeline inspection"
    },
    {
      id: "command-center",
      title: language === 'ru' ? "Диспетчерский центр" : "Command Center",
      industry: language === 'ru' ? "Спецприменения" : "Special Applications",
      icon: Microscope,
      description: language === 'ru'
        ? "Командные дисплеи 24/7 для ситуационных центров, диспетчерских и оборонных объектов."
        : "24/7 command displays for situation centers, control rooms and defense facilities.",
      benefits: language === 'ru'
        ? [
            "Режим работы 24/7 без выгорания",
            "Защита до MIL-STD-810G",
            "Видеостены любой конфигурации",
            "Интеграция с системами безопасности"
          ]
        : [
            "24/7 operation without burn-in",
            "Protection up to MIL-STD-810G",
            "Video walls of any configuration",
            "Security system integration"
          ],
      products: language === 'ru'
        ? ["Командный дисплей CMD-5521", "Защищённый монитор DEF-2743", "Контроллер видеостены"]
        : ["CMD-5521 command display", "DEF-2743 ruggedized monitor", "Video wall controller"],
      roi: language === 'ru' ? "Повышение ситуационной осведомлённости" : "Enhanced situational awareness",
      caseStudy: language === 'ru' ? "МЧС - региональный центр управления" : "Emergency Services - regional control center"
    },
    {
      id: "mammography",
      title: language === 'ru' ? "Маммография" : "Mammography",
      industry: language === 'ru' ? "Медицина" : "Medicine",
      icon: Activity,
      description: language === 'ru'
        ? "Специализированное решение для маммографии: высокоразрешающий детектор + 5MP монохромный дисплей."
        : "Specialized mammography solution: high-resolution detector + 5MP monochrome display.",
      benefits: language === 'ru'
        ? [
            "5MP монохромный дисплей для маммографии",
            "Яркость 2500 кд/м² для точной диагностики",
            "Соответствие DICOM Part 14",
            "Автоматическая калибровка"
          ]
        : [
            "5MP monochrome mammography display",
            "2500 cd/m² brightness for accurate diagnosis",
            "DICOM Part 14 compliance",
            "Automatic calibration"
          ],
      products: language === 'ru'
        ? ["Детектор XELON MAMMO-2430", "Дисплей MG50A (5MP mono)", "ПО XELON MAMMO"]
        : ["XELON MAMMO-2430 detector", "MG50A display (5MP mono)", "XELON MAMMO software"],
      roi: language === 'ru' ? "Повышение выявляемости на 25%" : "25% increase in detection rate",
      caseStudy: language === 'ru' ? "Онкологический центр - скрининговая программа" : "Cancer Center - screening program"
    },
    {
      id: "security-screening",
      title: language === 'ru' ? "Досмотр и безопасность" : "Security Screening",
      industry: language === 'ru' ? "Безопасность" : "Security",
      icon: Shield,
      description: language === 'ru'
        ? "Рентгеновский досмотр багажа и грузов с высокоскоростными детекторами и операторскими мониторами."
        : "X-ray baggage and cargo screening with high-speed detectors and operator monitors.",
      benefits: language === 'ru'
        ? [
            "Скорость конвейера до 0.5 м/с",
            "Многоэнергетическая визуализация",
            "Эргономичные операторские мониторы",
            "Автоматическое обнаружение угроз"
          ]
        : [
            "Conveyor speed up to 0.5 m/s",
            "Multi-energy imaging",
            "Ergonomic operator monitors",
            "Automatic threat detection"
          ],
      products: language === 'ru'
        ? ["Детектор XELON X-RAY-4343", "Операторский монитор MC40B", "ПО XELON SECURITY"]
        : ["XELON X-RAY-4343 detector", "MC40B operator monitor", "XELON SECURITY software"],
      roi: language === 'ru' ? "Повышение пропускной способности на 200%" : "200% throughput increase",
      caseStudy: language === 'ru' ? "Шереметьево - модернизация системы досмотра" : "Sheremetyevo - screening system upgrade"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white glassmorphism">
              {t('solutions.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              {t('solutions.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('solutions.subtitle')}
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
                key={solution.id}
                className="hover-lift corporate-shadow animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <solution.icon className="h-6 w-6 text-accent" />
                      </div>
                      <Badge variant="outline" className="text-accent border-accent">
                        {solution.industry}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">{t('solutions.benefits')}</h4>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Products in solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">{language === 'ru' ? 'Состав решения:' : 'Solution includes:'}</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.products.map((product) => (
                        <Badge key={product} variant="secondary" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border border-accent/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t('solutions.roi')}</span>
                      <span className="text-accent font-bold">{solution.roi}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-accent hover:bg-accent-light relative z-20 pointer-events-auto"
                      onClick={() => navigate(`/solution/${solution.id}`)}
                    >
                      {t('solutions.details')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="hover:bg-accent/10">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Integrated Solutions */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ru' ? 'Преимущества комплексных решений' : 'Integrated Solution Benefits'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Детектор + дисплей от одного производителя — максимальная эффективность'
                : 'Detector + display from one manufacturer — maximum efficiency'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift corporate-shadow p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="font-bold mb-2">{language === 'ru' ? 'Единый поставщик' : 'Single Vendor'}</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'ru' 
                  ? 'Один контракт, одна точка контакта, единая ответственность за результат'
                  : 'One contract, one point of contact, unified responsibility for results'}
              </p>
            </Card>

            <Card className="hover-lift corporate-shadow p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-success">2</span>
              </div>
              <h3 className="font-bold mb-2">{language === 'ru' ? 'Калибровка' : 'Calibration'}</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'ru'
                  ? 'Детектор и дисплей калиброваны для совместной работы — точная цветопередача'
                  : 'Detector and display calibrated for joint operation — accurate color reproduction'}
              </p>
            </Card>

            <Card className="hover-lift corporate-shadow p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-bold mb-2">{language === 'ru' ? 'Единая гарантия' : 'Unified Warranty'}</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'ru'
                  ? 'Гарантия и сервис на весь комплект — быстрое решение любых вопросов'
                  : 'Warranty and service for the entire kit — quick resolution of any issues'}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">{t('solutions.customTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('solutions.customDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-light">
                {t('solutions.discussProject')}
              </Button>
              <Button variant="outline" size="lg">
                <Download className="h-4 w-4 mr-2" />
                {t('solutions.technicalTask')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
