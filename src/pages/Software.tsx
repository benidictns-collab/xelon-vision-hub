import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Cpu, 
  Shield, 
  Zap, 
  Monitor, 
  Activity,
  Settings,
  Lock,
  Download,
  ArrowRight,
  CircleCheck as CheckCircle,
  Server,
  Eye,
  Gauge,
  Layers,
  Workflow
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import QuoteModal from "@/components/QuoteModal";

const Software = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const softwareProducts = [
    {
      id: "xelon-vision",
      name: "XELON VISION",
      icon: Eye,
      category: language === 'ru' ? "Медицинская рентгенография" : "Medical Radiography",
      description: language === 'ru'
        ? "ПО для медицинской визуализации с ИИ-модулем обнаружения патологий, сегментации органов и поддержки принятия решений врача."
        : "Medical imaging software with AI module for pathology detection, organ segmentation and physician decision support.",
      features: language === 'ru'
        ? ["ИИ-детекция патологий", "Сегментация органов и тканей", "Decision support система", "Сравнение с предыдущими исследованиями"]
        : ["AI pathology detection", "Organ and tissue segmentation", "Decision support system", "Previous study comparison"],
      standards: ["DICOM", "HL7", "IHE"],
      isNew: true
    },
    {
      id: "xelon-ndt",
      name: "XELON NDT",
      icon: Shield,
      category: language === 'ru' ? "Неразрушающий контроль" : "Non-Destructive Testing",
      description: language === 'ru'
        ? "ПО для промышленной дефектоскопии с ИИ-классификацией дефектов, автоматической разбраковкой и анализом структуры материалов."
        : "Industrial defectoscopy software with AI defect classification, automatic rejection and material structure analysis.",
      features: language === 'ru'
        ? ["Обнаружение трещин и пор", "Классификация по типу и критичности", "Автоматическая разбраковка", "Цифровой архив"]
        : ["Crack and pore detection", "Type and criticality classification", "Automatic rejection", "Digital archive"],
      standards: ["ASTM", "ISO 17636", "EN 13100"],
      isNew: true
    },
    {
      id: "xelon-security",
      name: "XELON SECURITY",
      icon: Lock,
      category: language === 'ru' ? "Досмотр и безопасность" : "Security Screening",
      description: language === 'ru'
        ? "ПО для досмотровых систем с ИИ-обнаружением угроз, многоэнергетической визуализацией и автоматической классификацией объектов."
        : "Screening system software with AI threat detection, multi-energy imaging and automatic object classification.",
      features: language === 'ru'
        ? ["Автообнаружение угроз", "Многоэнергетический анализ", "Распознавание материалов", "Статистика и отчёты"]
        : ["Auto threat detection", "Multi-energy analysis", "Material recognition", "Statistics and reports"],
      standards: ["TSA", "ECAC", "IATA"],
      isNew: false
    },
    {
      id: "xelon-mammo",
      name: "XELON MAMMO",
      icon: Activity,
      category: language === 'ru' ? "Маммография" : "Mammography",
      description: language === 'ru'
        ? "Специализированное ПО для маммографии с ИИ-обнаружением образований, классификацией BI-RADS и CAD-подсказками."
        : "Specialized mammography software with AI mass detection, BI-RADS classification and CAD prompts.",
      features: language === 'ru'
        ? ["ИИ-детекция образований", "Классификация BI-RADS", "CAD-подсказки врачу", "3D томосинтез"]
        : ["AI mass detection", "BI-RADS classification", "CAD prompts for physician", "3D tomosynthesis"],
      standards: ["MQSA", "DICOM", "BI-RADS"],
      isNew: true
    },
    {
      id: "xelon-display",
      name: "XELON DISPLAY",
      icon: Monitor,
      category: language === 'ru' ? "Управление дисплеями" : "Display Management",
      description: language === 'ru'
        ? "ПО управления дисплеями с ИИ-калибровкой, адаптацией под освещение и автоматической проверкой соответствия DICOM GSDF."
        : "Display management software with AI calibration, ambient light adaptation and automatic DICOM GSDF compliance check.",
      features: language === 'ru'
        ? ["Автокалибровка DICOM GSDF", "ИИ-адаптация яркости", "QA-тесты AAPM TG18", "Централизованное управление"]
        : ["Auto DICOM GSDF calibration", "AI brightness adaptation", "AAPM TG18 QA tests", "Centralized management"],
      standards: ["DICOM GSDF", "AAPM TG18", "DIN 6868-157"],
      isNew: false
    },
    {
      id: "xelon-sdk",
      name: "XELON SDK",
      icon: Settings,
      category: language === 'ru' ? "Для разработчиков" : "For Developers",
      description: language === 'ru'
        ? "Набор инструментов для интеграции детекторов XELON в сторонние системы. API, драйверы, примеры кода."
        : "Toolkit for integrating XELON detectors into third-party systems. API, drivers, code examples.",
      features: language === 'ru'
        ? ["REST API", "Драйверы Windows/Linux", "Примеры на C++/Python", "Документация OpenAPI"]
        : ["REST API", "Windows/Linux drivers", "C++/Python examples", "OpenAPI documentation"],
      standards: ["REST", "OpenAPI", "USB 3.2", "GigE"],
      isNew: false
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: language === 'ru' ? "Интеллектуальная обработка изображений" : "Intelligent Image Processing",
      features: language === 'ru'
        ? [
            "ИИ-шумоподавление без потери диагностической информации",
            "Super-resolution — повышение разрешения изображений",
            "Улучшение качества при сниженной дозе излучения",
            "Автоматическая оптимизация параметров съёмки"
          ]
        : [
            "AI noise reduction without losing diagnostic information",
            "Super-resolution — image resolution enhancement",
            "Quality improvement at reduced radiation dose",
            "Automatic shooting parameter optimization"
          ],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Activity,
      title: language === 'ru' ? "Анализ медицинских изображений" : "Medical Image Analysis",
      features: language === 'ru'
        ? [
            "Обнаружение патологий: переломы, опухоли, инфильтраты",
            "Сегментация органов и тканей",
            "Decision support — подсказки врачу",
            "Сравнение с предыдущими исследованиями (динамика)"
          ]
        : [
            "Pathology detection: fractures, tumors, infiltrates",
            "Organ and tissue segmentation",
            "Decision support — physician prompts",
            "Comparison with previous studies (dynamics)"
          ],
      color: "bg-success/10 text-success"
    },
    {
      icon: Shield,
      title: language === 'ru' ? "Анализ промышленных изображений" : "Industrial Image Analysis",
      features: language === 'ru'
        ? [
            "Обнаружение дефектов: трещины, поры, расслоения",
            "Классификация дефектов по типу и критичности",
            "Автоматическая разбраковка изделий",
            "Анализ структуры материалов"
          ]
        : [
            "Defect detection: cracks, pores, delaminations",
            "Defect classification by type and criticality",
            "Automatic product rejection",
            "Material structure analysis"
          ],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Gauge,
      title: language === 'ru' ? "Управление дозой (ALARA)" : "Dose Management (ALARA)",
      features: language === 'ru'
        ? [
            "Предсказание оптимальной экспозиции до съёмки",
            "Мониторинг накопленной дозы пациента",
            "Автоматическое предупреждение о превышениях",
            "Статистика и отчёты по дозовой нагрузке"
          ]
        : [
            "Optimal exposure prediction before shooting",
            "Patient accumulated dose monitoring",
            "Automatic excess warnings",
            "Statistics and dose load reports"
          ],
      color: "bg-accent-light/10 text-accent-light"
    }
  ];

  const displayAiFeatures = [
    {
      icon: Monitor,
      title: language === 'ru' ? "Интеллектуальное отображение" : "Intelligent Display",
      features: language === 'ru'
        ? [
            "ИИ-адаптация яркости и контраста под тип исследования",
            "Автоматическая калибровка DICOM GSDF",
            "Подстройка под освещение помещения",
            "Фокус на области интереса (ROI)"
          ]
        : [
            "AI brightness and contrast adaptation by study type",
            "Automatic DICOM GSDF calibration",
            "Ambient light adjustment",
            "Region of Interest (ROI) focus"
          ]
    },
    {
      icon: Eye,
      title: language === 'ru' ? "Поддержка врача/оператора" : "Physician/Operator Support",
      features: language === 'ru'
        ? [
            "Подсветка подозрительных зон",
            "Мультиэкранные сценарии",
            "Интерактивные оверлеи ИИ",
            "Голосовое управление (опционально)"
          ]
        : [
            "Suspicious area highlighting",
            "Multi-screen scenarios",
            "Interactive AI overlays",
            "Voice control (optional)"
          ]
    }
  ];

  const systemFeatures = [
    {
      icon: Cpu,
      title: language === 'ru' ? "Предиктивное обслуживание" : "Predictive Maintenance",
      description: language === 'ru'
        ? "ИИ-анализ состояния оборудования для предотвращения отказов"
        : "AI equipment condition analysis to prevent failures",
      features: language === 'ru'
        ? ["Раннее выявление деградации матрицы", "Статистика работы", "Удалённая диагностика"]
        : ["Early matrix degradation detection", "Work statistics", "Remote diagnostics"]
    },
    {
      icon: Lock,
      title: language === 'ru' ? "Кибербезопасность" : "Cybersecurity",
      description: language === 'ru'
        ? "Защита данных и соответствие международным стандартам"
        : "Data protection and international standards compliance",
      features: language === 'ru'
        ? ["HIPAA, GDPR, ФЗ-152", "Edge AI — обработка на устройстве", "Логирование решений ИИ"]
        : ["HIPAA, GDPR, FZ-152", "Edge AI — on-device processing", "AI decision logging"]
    },
    {
      icon: Layers,
      title: language === 'ru' ? "Интеграция" : "Integration",
      description: language === 'ru'
        ? "Бесшовная интеграция с медицинскими и промышленными системами"
        : "Seamless integration with medical and industrial systems",
      features: language === 'ru'
        ? ["PACS/RIS/HIS (медицина)", "OPC UA (промышленность)", "DICOM, HL7"]
        : ["PACS/RIS/HIS (medical)", "OPC UA (industrial)", "DICOM, HL7"]
    }
  ];

  const applications = [
    {
      title: language === 'ru' ? "Медицина" : "Medicine",
      items: language === 'ru'
        ? ["Рентгенография", "Флюороскопия", "Маммография", "Стоматология", "Мобильные комплексы"]
        : ["Radiography", "Fluoroscopy", "Mammography", "Dental", "Mobile systems"]
    },
    {
      title: language === 'ru' ? "Промышленность" : "Industry",
      items: language === 'ru'
        ? ["Неразрушающий контроль (НК)", "Контроль сварных швов", "Авиация и космос", "Литьё и композиты"]
        : ["Non-destructive testing (NDT)", "Weld inspection", "Aerospace", "Casting and composites"]
    },
    {
      title: language === 'ru' ? "Спецприменения" : "Special Applications",
      items: language === 'ru'
        ? ["Таможенный досмотр", "Безопасность", "Военные системы", "Системы двойного назначения"]
        : ["Customs screening", "Security", "Military systems", "Dual-use systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white glassmorphism">
              {language === 'ru' ? 'Программное обеспечение с ИИ' : 'AI-Powered Software'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              {language === 'ru' ? 'Интеллектуальные системы визуализации' : 'Intelligent Imaging Systems'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'ru'
                ? 'Собственное программное обеспечение XELON с встроенной ИИ-моделью и уникальными алгоритмами обработки изображений'
                : 'Proprietary XELON software with built-in AI model and unique image processing algorithms'}
            </p>
            
            {/* Key highlights */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full">
                <Brain className="h-5 w-5 text-accent-light" />
                <span className="text-sm">Edge AI</span>
              </div>
              <div className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-accent-light" />
                <span className="text-sm">HIPAA / GDPR</span>
              </div>
              <div className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full">
                <Zap className="h-5 w-5 text-accent-light" />
                <span className="text-sm">{language === 'ru' ? 'Реальное время' : 'Real-time'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ru' ? 'Линейка программного обеспечения' : 'Software Product Line'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Полный спектр ПО для медицинской, промышленной и специализированной визуализации'
                : 'Full range of software for medical, industrial and specialized imaging'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="hover-lift corporate-shadow animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {product.isNew && (
                    <Badge className="absolute top-4 right-4 bg-success text-white">
                      {language === 'ru' ? 'Новинка' : 'New'}
                    </Badge>
                  )}
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <product.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{product.name}</h3>
                      <Badge variant="outline" className="text-xs">{product.category}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.standards.map((std) => (
                      <Badge key={std} variant="secondary" className="text-xs">{std}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <QuoteModal>
                      <Button size="sm" className="flex-1 bg-accent hover:bg-accent-light">
                        {language === 'ru' ? 'Запросить' : 'Request'}
                      </Button>
                    </QuoteModal>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              {language === 'ru' ? 'Технологии ИИ' : 'AI Technologies'}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ru' ? 'Возможности встроенного ИИ' : 'Built-in AI Capabilities'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Собственные алгоритмы машинного обучения для анализа и обработки изображений'
                : 'Proprietary machine learning algorithms for image analysis and processing'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {aiFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="hover-lift corporate-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-xl">{feature.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {feature.features.map((item) => (
                      <div key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Display AI Features */}
          <div className="grid md:grid-cols-2 gap-8">
            {displayAiFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="hover-lift corporate-shadow animate-fade-in-up bg-gradient-to-br from-accent/5 to-primary/5"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.features.map((item) => (
                      <div key={item} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ru' ? 'Системные возможности' : 'System Capabilities'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Предиктивная аналитика, кибербезопасность и бесшовная интеграция'
                : 'Predictive analytics, cybersecurity and seamless integration'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {systemFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="hover-lift corporate-shadow animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item) => (
                      <Badge key={item} variant="secondary" className="mr-1 mb-1">{item}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ru' ? 'Области применения' : 'Application Areas'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card 
                key={app.title}
                className="hover-lift corporate-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4 text-accent">{app.title}</h3>
                  <div className="space-y-2">
                    {app.items.map((item) => (
                      <div key={item} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-12 animate-fade-in-up">
            <Brain className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ru' 
                ? 'Готовы внедрить ИИ в вашу систему визуализации?' 
                : 'Ready to implement AI in your imaging system?'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Получите демо-версию нашего ПО или закажите консультацию по интеграции ИИ-модулей'
                : 'Get a demo of our software or request a consultation on AI module integration'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteModal>
                <Button size="lg" className="bg-accent hover:bg-accent-light">
                  {language === 'ru' ? 'Запросить демо' : 'Request Demo'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </QuoteModal>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                {language === 'ru' ? 'Скачать SDK' : 'Download SDK'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;
