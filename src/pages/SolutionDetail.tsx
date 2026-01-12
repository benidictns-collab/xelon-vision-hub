import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, CheckCircle, Star, Users, Clock, TrendingUp, Download, 
  Phone, Mail, Building2, Cpu, Shield, Settings, FileText, Award,
  Brain, Zap, Target, Layers, BarChart3, Wrench
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import QuoteModal from "@/components/QuoteModal";

// Import images
import xelon1 from "@/assets/xelon-1.png";
import xelon2 from "@/assets/xelon-2.png";
import medicalIndustry from "@/assets/medical-industry.jpg";
import industrialNdt from "@/assets/industrial-ndt.jpg";

interface SolutionData {
  title: string;
  titleEn: string;
  industry: string;
  industryEn: string;
  description: string;
  descriptionEn: string;
  fullDescription: string;
  fullDescriptionEn: string;
  benefits: string[];
  benefitsEn: string[];
  features: string[];
  featuresEn: string[];
  aiFeatures: string[];
  aiFeaturesEn: string[];
  technicalSpecs: Record<string, string>;
  technicalSpecsEn: Record<string, string>;
  products: { name: string; description: string; link: string }[];
  productsEn: { name: string; description: string; link: string }[];
  applications: string[];
  applicationsEn: string[];
  standards: string[];
  roi: string;
  roiEn: string;
  roiDetails: string[];
  roiDetailsEn: string[];
  caseStudy: string;
  caseStudyEn: string;
  caseStudyDetails: string;
  caseStudyDetailsEn: string;
  implementation: string;
  implementationEn: string;
  implementationSteps: string[];
  implementationStepsEn: string[];
  support: string;
  supportEn: string;
  supportFeatures: string[];
  supportFeaturesEn: string[];
  testimonial: string;
  testimonialEn: string;
  customerName: string;
  customerNameEn: string;
  image: string;
}

const SolutionDetail = () => {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const solutionsData: Record<string, SolutionData> = {
    "digital-xray": {
      title: "Цифровая рентгенография R&F",
      titleEn: "Digital Radiography R&F",
      industry: "Медицина",
      industryEn: "Medicine",
      description: "Комплексное решение для цифровой рентгенографии: детектор XELON + радиологический дисплей + ПО XELON VISION с ИИ",
      descriptionEn: "Complete digital radiography solution: XELON detector + radiology display + XELON VISION AI software",
      fullDescription: "Наша система цифровой рентгенографии представляет собой полностью интегрированное решение нового поколения, которое кардинально меняет подход к рентгеновской диагностике. Система включает высокочувствительные плоскопанельные детекторы XELON с разрешением до 3.7 пл/мм, диагностические дисплеи с калибровкой DICOM GSDF и интеллектуальное ПО XELON VISION со встроенными алгоритмами искусственного интеллекта для автоматического анализа изображений и обнаружения патологий.",
      fullDescriptionEn: "Our digital radiography system is a fully integrated next-generation solution that fundamentally changes the approach to X-ray diagnostics. The system includes high-sensitivity XELON flat-panel detectors with resolution up to 3.7 lp/mm, diagnostic displays with DICOM GSDF calibration, and intelligent XELON VISION software with built-in AI algorithms for automatic image analysis and pathology detection.",
      benefits: [
        "Снижение дозы облучения пациентов до 90%",
        "Мгновенное получение цифровых изображений",
        "Автоматическое обнаружение патологий ИИ",
        "Повышение пропускной способности на 300%",
        "Полная интеграция с PACS/RIS/HIS",
        "Единая гарантия на весь комплект"
      ],
      benefitsEn: [
        "Patient radiation dose reduction up to 90%",
        "Instant digital image acquisition",
        "Automatic AI pathology detection",
        "300% throughput increase",
        "Full PACS/RIS/HIS integration",
        "Unified warranty on complete kit"
      ],
      features: [
        "Плоскопанельные детекторы с a-Si/CsI сцинтиллятором",
        "Разрешение до 3.7 пл/мм (шаг пикселя 135 мкм)",
        "Автоматическая оптимизация экспозиции (AEC)",
        "Программная фильтрация в реальном времени",
        "Беспроводная передача Wi-Fi 6E",
        "Совместимость с любыми рентген-аппаратами",
        "Диагностические дисплеи 5MP с DICOM калибровкой",
        "Система резервного копирования и архивирования"
      ],
      featuresEn: [
        "Flat-panel detectors with a-Si/CsI scintillator",
        "Resolution up to 3.7 lp/mm (135 μm pixel pitch)",
        "Automatic exposure control (AEC)",
        "Real-time software filtering",
        "Wi-Fi 6E wireless transmission",
        "Compatible with any X-ray equipment",
        "5MP diagnostic displays with DICOM calibration",
        "Backup and archiving system"
      ],
      aiFeatures: [
        "ИИ-шумоподавление без потери диагностической информации",
        "Автоматическое обнаружение переломов и патологий",
        "Сегментация органов и тканей",
        "Decision support — подсказки для врача",
        "Сравнение с предыдущими исследованиями",
        "Super-resolution для повышения детализации",
        "Интеллектуальный контроль дозы ALARA",
        "Предсказание оптимальной экспозиции"
      ],
      aiFeaturesEn: [
        "AI noise reduction without diagnostic information loss",
        "Automatic fracture and pathology detection",
        "Organ and tissue segmentation",
        "Decision support — hints for physicians",
        "Comparison with previous studies",
        "Super-resolution for enhanced detail",
        "Intelligent ALARA dose control",
        "Optimal exposure prediction"
      ],
      technicalSpecs: {
        "Активная область детектора": "до 430×430 мм",
        "Шаг пикселя": "от 135 мкм",
        "Разрешение": "до 3.7 пл/мм",
        "Динамический диапазон": "16 бит (65536 градаций)",
        "Интерфейс": "USB 3.2, Wi-Fi 6E, CameraLink",
        "Разрешение дисплея": "5MP (2560×2048)",
        "Яркость дисплея": "1000 кд/м²",
        "Контрастность": "1500:1",
        "Калибровка": "DICOM GSDF Part 14",
        "Сертификация": "РУ Росздравнадзора, CE, FDA"
      },
      technicalSpecsEn: {
        "Detector active area": "up to 430×430 mm",
        "Pixel pitch": "from 135 μm",
        "Resolution": "up to 3.7 lp/mm",
        "Dynamic range": "16 bit (65536 levels)",
        "Interface": "USB 3.2, Wi-Fi 6E, CameraLink",
        "Display resolution": "5MP (2560×2048)",
        "Display brightness": "1000 cd/m²",
        "Contrast ratio": "1500:1",
        "Calibration": "DICOM GSDF Part 14",
        "Certification": "Roszdravnadzor, CE, FDA"
      },
      products: [
        { name: "XELON X-RAY-3543", description: "Полноформатный детектор 35×43 см", link: "/products/detectors/xelon-xray-3543" },
        { name: "MC50A", description: "Диагностический дисплей 5MP цветной", link: "/products/medDisplays/mc50a" },
        { name: "XELON VISION", description: "ПО с ИИ-анализом изображений", link: "/software" }
      ],
      productsEn: [
        { name: "XELON X-RAY-3543", description: "Full-format 35×43 cm detector", link: "/products/detectors/xelon-xray-3543" },
        { name: "MC50A", description: "5MP color diagnostic display", link: "/products/medDisplays/mc50a" },
        { name: "XELON VISION", description: "AI image analysis software", link: "/software" }
      ],
      applications: ["Поликлиники", "Больницы", "Медицинские центры", "Травмпункты", "Частные клиники"],
      applicationsEn: ["Polyclinics", "Hospitals", "Medical centers", "Trauma centers", "Private clinics"],
      standards: ["ГОСТ Р МЭК 60601", "IEC 62494", "DICOM 3.0", "HL7", "HIPAA", "ФЗ-152"],
      roi: "Окупаемость 18 месяцев",
      roiEn: "ROI 18 months",
      roiDetails: [
        "Снижение затрат на расходные материалы на 100%",
        "Сокращение времени исследования в 3 раза",
        "Уменьшение повторных снимков на 70%",
        "Экономия на хранении и архивировании"
      ],
      roiDetailsEn: [
        "100% reduction in consumable costs",
        "3x reduction in examination time",
        "70% reduction in repeat shots",
        "Savings on storage and archiving"
      ],
      caseStudy: "ГКБ №1 им. Пирогова — модернизация 12 кабинетов",
      caseStudyEn: "City Hospital #1 — 12 rooms modernization",
      caseStudyDetails: "В рамках проекта модернизации было оснащено 12 рентгеновских кабинетов полным комплектом оборудования XELON. Результат: увеличение пропускной способности в 3.5 раза, снижение дозовой нагрузки на пациентов на 85%, полный переход на безплёночную технологию. ИИ-модуль обнаружения патологий повысил выявляемость на начальных стадиях на 23%.",
      caseStudyDetailsEn: "As part of the modernization project, 12 X-ray rooms were equipped with a complete set of XELON equipment. Result: 3.5x throughput increase, 85% patient dose reduction, complete transition to filmless technology. AI pathology detection module increased early-stage detection by 23%.",
      implementation: "Полное внедрение системы занимает от 2 до 4 недель в зависимости от количества рабочих мест.",
      implementationEn: "Full system implementation takes 2 to 4 weeks depending on the number of workstations.",
      implementationSteps: [
        "Аудит существующей инфраструктуры (1-2 дня)",
        "Поставка и монтаж оборудования (3-5 дней)",
        "Интеграция с PACS/RIS (2-3 дня)",
        "Настройка ПО и калибровка (1-2 дня)",
        "Обучение персонала (2-3 дня)",
        "Тестовая эксплуатация (5-7 дней)",
        "Ввод в промышленную эксплуатацию"
      ],
      implementationStepsEn: [
        "Existing infrastructure audit (1-2 days)",
        "Equipment delivery and installation (3-5 days)",
        "PACS/RIS integration (2-3 days)",
        "Software setup and calibration (1-2 days)",
        "Staff training (2-3 days)",
        "Test operation (5-7 days)",
        "Production deployment"
      ],
      support: "Круглосуточная техническая поддержка с гарантированным временем реагирования",
      supportEn: "24/7 technical support with guaranteed response time",
      supportFeatures: [
        "Горячая линия 24/7 с временем ответа до 15 минут",
        "Удалённая диагностика и обновления",
        "Выезд инженера в течение 4 часов",
        "Профилактическое обслуживание каждые 6 месяцев",
        "Обновления ПО и ИИ-моделей",
        "Расширенная гарантия до 5 лет"
      ],
      supportFeaturesEn: [
        "24/7 hotline with 15-minute response time",
        "Remote diagnostics and updates",
        "Engineer visit within 4 hours",
        "Preventive maintenance every 6 months",
        "Software and AI model updates",
        "Extended warranty up to 5 years"
      ],
      testimonial: "Переход на цифровую систему XELON позволил нам увеличить пропускную способность кабинетов в 3.5 раза и значительно улучшить качество диагностики. ИИ-модуль помогает врачам не пропустить даже малозаметные патологии.",
      testimonialEn: "Switching to the XELON digital system allowed us to increase room throughput by 3.5 times and significantly improve diagnostic quality. The AI module helps doctors not miss even subtle pathologies.",
      customerName: "Главный врач ГКБ №1 им. Н.И. Пирогова",
      customerNameEn: "Chief Physician, City Hospital #1",
      image: medicalIndustry
    },
    "surgical-suite": {
      title: "Хирургический комплекс",
      titleEn: "Surgical Suite",
      industry: "Медицина",
      industryEn: "Medicine",
      description: "Хирургические и эндоскопические дисплеи 4K/8K для операционных с сенсорным управлением и интеллектуальной визуализацией",
      descriptionEn: "4K/8K surgical and endoscopic displays for operating rooms with touch control and intelligent visualization",
      fullDescription: "Комплексное решение для операционных залов включает хирургические дисплеи высокого разрешения 4K и 8K с технологией Optical Bonding для устранения бликов, сенсорное управление в стерильных перчатках, интеграцию с хирургическими роботами и системами эндоскопии. ПО XELON DISPLAY обеспечивает ИИ-адаптацию изображения под тип операции и условия освещения.",
      fullDescriptionEn: "Comprehensive operating room solution includes 4K and 8K high-resolution surgical displays with Optical Bonding technology to eliminate glare, touch control with sterile gloves, integration with surgical robots and endoscopy systems. XELON DISPLAY software provides AI image adaptation for operation type and lighting conditions.",
      benefits: [
        "4K/8K разрешение для точной визуализации",
        "Сенсорное управление в стерильных перчатках",
        "Optical Bonding — антибликовое покрытие",
        "Интеграция с хирургическими роботами",
        "ИИ-фокус на области интереса (ROI)",
        "3G/12G SDI для HD/4K видеосигнала"
      ],
      benefitsEn: [
        "4K/8K resolution for precise visualization",
        "Touch control with sterile gloves",
        "Optical Bonding — anti-glare coating",
        "Surgical robot integration",
        "AI focus on region of interest (ROI)",
        "3G/12G SDI for HD/4K video signal"
      ],
      features: [
        "Разрешение до 8K (7680×4320)",
        "Яркость до 1000 нит",
        "Антибликовое покрытие Optical Bonding",
        "Сенсорный экран PCAP с распознаванием в перчатках",
        "Защита от жидкостей IP65 на передней панели",
        "Входы: HDMI 2.0, DisplayPort 1.4, 3G/12G SDI",
        "Поддержка HDR для реалистичной цветопередачи",
        "Режим Picture-in-Picture (PiP)"
      ],
      featuresEn: [
        "Resolution up to 8K (7680×4320)",
        "Brightness up to 1000 nits",
        "Optical Bonding anti-glare coating",
        "PCAP touchscreen with glove recognition",
        "IP65 liquid protection on front panel",
        "Inputs: HDMI 2.0, DisplayPort 1.4, 3G/12G SDI",
        "HDR support for realistic color reproduction",
        "Picture-in-Picture (PiP) mode"
      ],
      aiFeatures: [
        "ИИ-адаптация яркости под освещение операционной",
        "Автоматическая калибровка цветопередачи",
        "Подсветка критических областей (ROI)",
        "Интеллектуальное масштабирование",
        "Фильтрация шумов эндоскопического сигнала",
        "Стабилизация изображения",
        "Интерактивные ИИ-оверлеи",
        "Голосовое управление (опционально)"
      ],
      aiFeaturesEn: [
        "AI brightness adaptation to OR lighting",
        "Automatic color calibration",
        "Critical area highlighting (ROI)",
        "Intelligent scaling",
        "Endoscopic signal noise filtering",
        "Image stabilization",
        "Interactive AI overlays",
        "Voice control (optional)"
      ],
      technicalSpecs: {
        "Диагональ": "от 27\" до 55\"",
        "Разрешение": "4K UHD / 8K UHD",
        "Яркость": "до 1000 нит",
        "Контрастность": "1400:1",
        "Цветовой охват": "sRGB 100%, Adobe RGB 99%",
        "Время отклика": "< 8 мс",
        "Видеовходы": "HDMI 2.0, DP 1.4, 3G/12G SDI",
        "Защита": "IP65 (передняя панель)",
        "Сертификация": "IEC 60601-1, CE, FDA 510(k)"
      },
      technicalSpecsEn: {
        "Diagonal": "from 27\" to 55\"",
        "Resolution": "4K UHD / 8K UHD",
        "Brightness": "up to 1000 nits",
        "Contrast ratio": "1400:1",
        "Color gamut": "sRGB 100%, Adobe RGB 99%",
        "Response time": "< 8 ms",
        "Video inputs": "HDMI 2.0, DP 1.4, 3G/12G SDI",
        "Protection": "IP65 (front panel)",
        "Certification": "IEC 60601-1, CE, FDA 510(k)"
      },
      products: [
        { name: "MS8270T", description: "27\" 4K хирургический с тачскрином", link: "/products/medDisplays/ms8270t" },
        { name: "MS8320T", description: "31.5\" 4K для эндоскопии", link: "/products/medDisplays/ms8320t" },
        { name: "MS8550P", description: "55\" 4K для операционного зала", link: "/products/medDisplays/ms8550p" },
        { name: "XELON DISPLAY", description: "ПО управления дисплеями с ИИ", link: "/software" }
      ],
      productsEn: [
        { name: "MS8270T", description: "27\" 4K surgical with touchscreen", link: "/products/medDisplays/ms8270t" },
        { name: "MS8320T", description: "31.5\" 4K for endoscopy", link: "/products/medDisplays/ms8320t" },
        { name: "MS8550P", description: "55\" 4K for operating room", link: "/products/medDisplays/ms8550p" },
        { name: "XELON DISPLAY", description: "AI display management software", link: "/software" }
      ],
      applications: ["Операционные", "Эндоскопия", "Лапароскопия", "Роботическая хирургия", "Гибридные OR"],
      applicationsEn: ["Operating rooms", "Endoscopy", "Laparoscopy", "Robotic surgery", "Hybrid ORs"],
      standards: ["IEC 60601-1", "IEC 62368", "DICOM", "CE Medical", "FDA 510(k)"],
      roi: "Повышение точности операций на 40%",
      roiEn: "40% increase in surgical precision",
      roiDetails: [
        "Сокращение времени операций на 15-20%",
        "Снижение осложнений на 25%",
        "Улучшение эргономики хирургической бригады",
        "Интеграция всех видеоисточников в одну систему"
      ],
      roiDetailsEn: [
        "15-20% reduction in operation time",
        "25% reduction in complications",
        "Improved surgical team ergonomics",
        "Integration of all video sources into one system"
      ],
      caseStudy: "НМИЦ хирургии им. А.В. Вишневского",
      caseStudyEn: "Vishnevsky National Medical Research Center of Surgery",
      caseStudyDetails: "Оснащение 8 операционных залов хирургическими дисплеями XELON. Интеграция с системой Da Vinci и эндоскопическими стойками. Результат: сокращение среднего времени операции на 18%, повышение удобства работы хирургической бригады, улучшение документирования операций.",
      caseStudyDetailsEn: "Equipment of 8 operating rooms with XELON surgical displays. Integration with Da Vinci system and endoscopic towers. Result: 18% reduction in average operation time, improved surgical team convenience, better operation documentation.",
      implementation: "Установка и настройка занимает 1-2 недели на операционный блок",
      implementationEn: "Installation and setup takes 1-2 weeks per operating block",
      implementationSteps: [
        "Проектирование размещения дисплеев",
        "Монтаж и прокладка кабельной инфраструктуры",
        "Интеграция с видеоисточниками",
        "Настройка ПО и калибровка цвета",
        "Обучение персонала",
        "Приёмочные испытания"
      ],
      implementationStepsEn: [
        "Display placement design",
        "Installation and cable infrastructure",
        "Video source integration",
        "Software setup and color calibration",
        "Staff training",
        "Acceptance testing"
      ],
      support: "Специализированная поддержка медицинского оборудования",
      supportEn: "Specialized medical equipment support",
      supportFeatures: [
        "Приоритетная поддержка 24/7",
        "Замена оборудования в течение 24 часов",
        "Ежегодная калибровка и сертификация",
        "Интеграционная поддержка",
        "Обновления ПО",
        "Обучение нового персонала"
      ],
      supportFeaturesEn: [
        "24/7 priority support",
        "Equipment replacement within 24 hours",
        "Annual calibration and certification",
        "Integration support",
        "Software updates",
        "New staff training"
      ],
      testimonial: "Хирургические дисплеи XELON кардинально изменили работу нашего операционного блока. Качество изображения и удобство управления позволяют полностью сосредоточиться на операции.",
      testimonialEn: "XELON surgical displays have fundamentally changed how our operating block works. Image quality and control convenience allow complete focus on the operation.",
      customerName: "Заведующий отделением хирургии НМИЦ им. Вишневского",
      customerNameEn: "Head of Surgery Department, Vishnevsky NMRC",
      image: medicalIndustry
    },
    "ndt-inspection": {
      title: "Контроль качества NDT",
      titleEn: "NDT Quality Control",
      industry: "Промышленность",
      industryEn: "Industry",
      description: "Детекторы высокого разрешения + промышленные мониторы + ПО XELON NDT с ИИ-классификацией дефектов",
      descriptionEn: "High-resolution detectors + industrial monitors + XELON NDT software with AI defect classification",
      fullDescription: "Комплексное решение для неразрушающего контроля (NDT) в промышленности. Система включает высокоразрешающие детекторы с шагом пикселя от 50 мкм, промышленные мониторы с защитой IP65 и интеллектуальное ПО XELON NDT со встроенными ИИ-алгоритмами для автоматического обнаружения, классификации и оценки критичности дефектов. Полностью соответствует стандартам EN, ASTM, ASME.",
      fullDescriptionEn: "Comprehensive non-destructive testing (NDT) solution for industry. The system includes high-resolution detectors with pixel pitch from 50 μm, industrial monitors with IP65 protection, and intelligent XELON NDT software with built-in AI algorithms for automatic defect detection, classification, and criticality assessment. Fully compliant with EN, ASTM, ASME standards.",
      benefits: [
        "Разрешение детектора до 50 мкм (10 пл/мм)",
        "ИИ-классификация дефектов по типу и критичности",
        "Автоматическая разбраковка годен/брак",
        "Промышленные мониторы IP65",
        "Цифровой архив с поиском по параметрам",
        "Сокращение времени контроля в 5 раз"
      ],
      benefitsEn: [
        "Detector resolution up to 50 μm (10 lp/mm)",
        "AI defect classification by type and criticality",
        "Automatic pass/fail sorting",
        "Industrial IP65 monitors",
        "Digital archive with parameter search",
        "5x reduction in inspection time"
      ],
      features: [
        "Детекторы с разрешением до 10 пл/мм",
        "Рабочая энергия до 450 кВ",
        "Промышленные мониторы IP65 для цеха",
        "Интеграция с конвейерными линиями",
        "Манипуляторы для автоматизации",
        "Многоканальные системы контроля",
        "Цифровая подпись протоколов",
        "Экспорт в форматы DICONDE, PDF, XLSX"
      ],
      featuresEn: [
        "Detectors with resolution up to 10 lp/mm",
        "Operating energy up to 450 kV",
        "IP65 industrial monitors for shop floor",
        "Conveyor line integration",
        "Manipulators for automation",
        "Multi-channel inspection systems",
        "Digital protocol signing",
        "Export to DICONDE, PDF, XLSX formats"
      ],
      aiFeatures: [
        "Автоматическое обнаружение дефектов",
        "Классификация: поры, трещины, включения, непровары",
        "Оценка критичности по стандартам",
        "Автоматическая разбраковка",
        "Анализ структуры материалов",
        "Измерение геометрических параметров дефектов",
        "Статистический анализ и тренды",
        "Машинное обучение на данных заказчика"
      ],
      aiFeaturesEn: [
        "Automatic defect detection",
        "Classification: pores, cracks, inclusions, lack of fusion",
        "Criticality assessment by standards",
        "Automatic pass/fail sorting",
        "Material structure analysis",
        "Defect geometry measurement",
        "Statistical analysis and trends",
        "Machine learning on customer data"
      ],
      technicalSpecs: {
        "Активная область": "от 52×52 до 430×430 мм",
        "Шаг пикселя": "от 50 мкм",
        "Разрешение": "до 10 пл/мм",
        "Энергия рентгена": "до 450 кВ",
        "Частота кадров": "до 30 fps",
        "Защита детектора": "IP54",
        "Защита монитора": "IP65",
        "Температурный диапазон": "-10°C...+50°C",
        "Стандарты": "EN ISO 17636, ASTM E2597, ASME V"
      },
      technicalSpecsEn: {
        "Active area": "from 52×52 to 430×430 mm",
        "Pixel pitch": "from 50 μm",
        "Resolution": "up to 10 lp/mm",
        "X-ray energy": "up to 450 kV",
        "Frame rate": "up to 30 fps",
        "Detector protection": "IP54",
        "Monitor protection": "IP65",
        "Temperature range": "-10°C...+50°C",
        "Standards": "EN ISO 17636, ASTM E2597, ASME V"
      },
      products: [
        { name: "XELON X-RAY-1212", description: "Детектор 120×120 мм, 50 мкм", link: "/products/detectors/xelon-xray-1212" },
        { name: "XELON NDT-2222", description: "Детектор 229×229 мм, до 450 кВ", link: "/products/detectors/xelon-ndt-2222" },
        { name: "IND-2421", description: "Промышленный монитор 24\" IP65", link: "/products/specDisplays/ind-2421" },
        { name: "XELON NDT", description: "ПО с ИИ-анализом дефектов", link: "/software" }
      ],
      productsEn: [
        { name: "XELON X-RAY-1212", description: "120×120 mm detector, 50 μm", link: "/products/detectors/xelon-xray-1212" },
        { name: "XELON NDT-2222", description: "229×229 mm detector, up to 450 kV", link: "/products/detectors/xelon-ndt-2222" },
        { name: "IND-2421", description: "24\" IP65 industrial monitor", link: "/products/specDisplays/ind-2421" },
        { name: "XELON NDT", description: "AI defect analysis software", link: "/software" }
      ],
      applications: ["Сварные швы", "Литьё", "Композиты", "Авиакомпоненты", "Трубопроводы", "Сосуды давления"],
      applicationsEn: ["Welds", "Castings", "Composites", "Aviation components", "Pipelines", "Pressure vessels"],
      standards: ["EN ISO 17636", "ASTM E2597", "ASME Section V", "ГОСТ Р ИСО 17636", "SNT-TC-1A"],
      roi: "Сокращение времени контроля в 5 раз",
      roiEn: "5x reduction in inspection time",
      roiDetails: [
        "Снижение затрат на контроль на 70%",
        "Исключение плёночных расходных материалов",
        "Автоматизация документооборота",
        "Повышение выявляемости дефектов на 30%"
      ],
      roiDetailsEn: [
        "70% reduction in inspection costs",
        "Elimination of film consumables",
        "Document workflow automation",
        "30% increase in defect detection"
      ],
      caseStudy: "Газпром — контроль магистральных трубопроводов",
      caseStudyEn: "Gazprom — main pipeline inspection",
      caseStudyDetails: "Внедрение системы цифровой рентгенографии на 15 участках строительства магистральных газопроводов. ИИ-модуль классификации дефектов обучен на базе более 100 000 снимков сварных соединений. Результат: автоматизация 80% контрольных операций, снижение времени контроля стыка с 45 до 8 минут.",
      caseStudyDetailsEn: "Implementation of digital radiography system at 15 main gas pipeline construction sites. AI defect classification module trained on 100,000+ weld images. Result: 80% automation of inspection operations, reduction of joint inspection time from 45 to 8 minutes.",
      implementation: "Развёртывание занимает 2-4 недели в зависимости от масштаба",
      implementationEn: "Deployment takes 2-4 weeks depending on scale",
      implementationSteps: [
        "Аудит процессов контроля",
        "Проектирование системы",
        "Поставка и монтаж оборудования",
        "Интеграция с производственными системами",
        "Обучение ИИ на данных заказчика",
        "Аттестация системы и персонала",
        "Ввод в эксплуатацию"
      ],
      implementationStepsEn: [
        "Inspection process audit",
        "System design",
        "Equipment delivery and installation",
        "Production system integration",
        "AI training on customer data",
        "System and personnel certification",
        "Commissioning"
      ],
      support: "Промышленная поддержка 24/7 с выездом на объект",
      supportEn: "24/7 industrial support with on-site service",
      supportFeatures: [
        "Горячая линия 24/7",
        "Выезд на объект в течение 24 часов",
        "Удалённая диагностика",
        "Обновления ИИ-моделей",
        "Ежегодная метрологическая поверка",
        "Обучение и переаттестация персонала"
      ],
      supportFeaturesEn: [
        "24/7 hotline",
        "On-site service within 24 hours",
        "Remote diagnostics",
        "AI model updates",
        "Annual metrological verification",
        "Personnel training and recertification"
      ],
      testimonial: "Система XELON NDT позволила нам полностью автоматизировать контроль качества сварных соединений. ИИ-классификация дефектов работает точнее и быстрее опытного дефектоскописта.",
      testimonialEn: "XELON NDT system allowed us to fully automate weld quality inspection. AI defect classification works more accurately and faster than an experienced inspector.",
      customerName: "Главный инженер ООО «Газпром трансгаз»",
      customerNameEn: "Chief Engineer, Gazprom Transgaz LLC",
      image: industrialNdt
    },
    "command-center": {
      title: "Диспетчерский центр",
      titleEn: "Command Center",
      industry: "Спецприменения",
      industryEn: "Special Applications",
      description: "Командные дисплеи 24/7 для ситуационных центров, диспетчерских, оборонных и критических объектов",
      descriptionEn: "24/7 command displays for situation centers, control rooms, defense and critical infrastructure",
      fullDescription: "Решение для критически важной инфраструктуры: командные дисплеи с режимом работы 24/7/365 без выгорания, защита по военным стандартам MIL-STD-810G, видеостены любой конфигурации, интеграция с системами безопасности и мониторинга. ПО XELON DISPLAY обеспечивает интеллектуальную маршрутизацию видеопотоков и адаптацию под условия работы.",
      fullDescriptionEn: "Solution for critical infrastructure: command displays with 24/7/365 operation without burn-in, MIL-STD-810G military protection, video walls of any configuration, integration with security and monitoring systems. XELON DISPLAY software provides intelligent video stream routing and adaptation to operating conditions.",
      benefits: [
        "Режим работы 24/7/365 без выгорания",
        "Защита MIL-STD-810G/H",
        "Видеостены любой конфигурации",
        "Интеграция с СКУД и видеонаблюдением",
        "Резервирование питания и сигнала",
        "Работа в расширенном температурном диапазоне"
      ],
      benefitsEn: [
        "24/7/365 operation without burn-in",
        "MIL-STD-810G/H protection",
        "Video walls of any configuration",
        "Access control and CCTV integration",
        "Power and signal redundancy",
        "Extended temperature range operation"
      ],
      features: [
        "Дисплеи для непрерывной работы 24/7",
        "Антибликовое покрытие",
        "Широкий угол обзора 178°",
        "Узкая рамка для видеостен (< 3.5 мм)",
        "Резервированные блоки питания",
        "Вход/выход цепочки DisplayPort",
        "Удалённое управление по сети",
        "Датчики присутствия и освещённости"
      ],
      featuresEn: [
        "Displays for 24/7 continuous operation",
        "Anti-glare coating",
        "Wide viewing angle 178°",
        "Narrow bezel for video walls (< 3.5 mm)",
        "Redundant power supplies",
        "DisplayPort daisy chain in/out",
        "Remote network management",
        "Presence and ambient light sensors"
      ],
      aiFeatures: [
        "Интеллектуальная маршрутизация видеопотоков",
        "Автоподстройка под освещение помещения",
        "Приоритизация критических событий",
        "Автоматическая раскладка окон",
        "Распознавание аномалий на видео",
        "Интеграция с системами предиктивного анализа",
        "Голосовое управление",
        "Автоматическое переключение на резерв"
      ],
      aiFeaturesEn: [
        "Intelligent video stream routing",
        "Auto-adjustment to room lighting",
        "Critical event prioritization",
        "Automatic window layout",
        "Video anomaly detection",
        "Predictive analysis system integration",
        "Voice control",
        "Automatic failover to backup"
      ],
      technicalSpecs: {
        "Диагональ": "от 24\" до 98\"",
        "Разрешение": "FHD / 4K UHD",
        "Яркость": "до 700 нит",
        "Наработка на отказ": "> 100 000 часов",
        "Защита": "MIL-STD-810G/H",
        "Рабочая температура": "-20°C...+60°C",
        "Рамка видеостены": "< 3.5 мм",
        "Сертификация": "MIL-STD, ГОСТ РВ"
      },
      technicalSpecsEn: {
        "Diagonal": "from 24\" to 98\"",
        "Resolution": "FHD / 4K UHD",
        "Brightness": "up to 700 nits",
        "MTBF": "> 100,000 hours",
        "Protection": "MIL-STD-810G/H",
        "Operating temperature": "-20°C...+60°C",
        "Video wall bezel": "< 3.5 mm",
        "Certification": "MIL-STD"
      },
      products: [
        { name: "CMD-5521", description: "Командный дисплей 55\" 24/7", link: "/products/specDisplays/cmd-5521" },
        { name: "DEF-2743", description: "Защищённый монитор 27\" MIL-STD", link: "/products/specDisplays/def-2743" },
        { name: "VW-4655", description: "Видеостенная панель 46\"", link: "/products/specDisplays/vw-4655" },
        { name: "XELON DISPLAY", description: "ПО управления видеостеной", link: "/software" }
      ],
      productsEn: [
        { name: "CMD-5521", description: "55\" 24/7 command display", link: "/products/specDisplays/cmd-5521" },
        { name: "DEF-2743", description: "27\" MIL-STD ruggedized monitor", link: "/products/specDisplays/def-2743" },
        { name: "VW-4655", description: "46\" video wall panel", link: "/products/specDisplays/vw-4655" },
        { name: "XELON DISPLAY", description: "Video wall management software", link: "/software" }
      ],
      applications: ["ЦУП", "Ситуационные центры", "Диспетчерские", "Военные объекты", "Энергетика", "Транспорт"],
      applicationsEn: ["Control centers", "Situation centers", "Dispatch rooms", "Military facilities", "Energy", "Transport"],
      standards: ["MIL-STD-810G/H", "MIL-STD-461G", "ГОСТ РВ", "IEC 62368", "TEMPEST (опционально)"],
      roi: "Повышение ситуационной осведомлённости",
      roiEn: "Enhanced situational awareness",
      roiDetails: [
        "Сокращение времени реагирования на 40%",
        "Снижение ошибок оператора на 60%",
        "Централизованный мониторинг всех систем",
        "Наработка > 100 000 часов без замены"
      ],
      roiDetailsEn: [
        "40% reduction in response time",
        "60% reduction in operator errors",
        "Centralized monitoring of all systems",
        "> 100,000 hours MTBF without replacement"
      ],
      caseStudy: "МЧС — Региональный центр управления в кризисных ситуациях",
      caseStudyEn: "Emergency Services — Regional Crisis Management Center",
      caseStudyDetails: "Оснащение регионального центра управления МЧС видеостеной 6×4 (24 панели) и 18 операторскими рабочими местами. Интеграция с системами оповещения, видеонаблюдения, метеомониторинга. Режим работы 24/7. Результат: сокращение времени реагирования на ЧС на 35%.",
      caseStudyDetailsEn: "Equipment of regional emergency management center with 6×4 video wall (24 panels) and 18 operator workstations. Integration with alert, CCTV, and weather monitoring systems. 24/7 operation mode. Result: 35% reduction in emergency response time.",
      implementation: "Комплексное внедрение занимает 4-8 недель",
      implementationEn: "Comprehensive implementation takes 4-8 weeks",
      implementationSteps: [
        "Проектирование командного центра",
        "Поставка оборудования",
        "Монтаж видеостены и рабочих мест",
        "Интеграция с внешними системами",
        "Настройка ПО управления",
        "Тестирование и приёмка",
        "Обучение персонала",
        "Ввод в эксплуатацию"
      ],
      implementationStepsEn: [
        "Command center design",
        "Equipment delivery",
        "Video wall and workstation installation",
        "External system integration",
        "Management software setup",
        "Testing and acceptance",
        "Personnel training",
        "Commissioning"
      ],
      support: "Критическая поддержка с SLA 99.9%",
      supportEn: "Critical support with 99.9% SLA",
      supportFeatures: [
        "SLA 99.9% доступности",
        "Мониторинг оборудования 24/7",
        "Выезд инженера в течение 4 часов",
        "Запасное оборудование на объекте",
        "Ежеквартальное обслуживание",
        "Секретная связь для оборонных объектов"
      ],
      supportFeaturesEn: [
        "99.9% availability SLA",
        "24/7 equipment monitoring",
        "Engineer visit within 4 hours",
        "Spare equipment on site",
        "Quarterly maintenance",
        "Secure communications for defense facilities"
      ],
      testimonial: "Видеостена XELON работает в нашем центре уже 3 года в режиме 24/7 без единого сбоя. Качество изображения и надёжность системы превзошли все ожидания.",
      testimonialEn: "XELON video wall has been running in our center for 3 years in 24/7 mode without a single failure. Image quality and system reliability exceeded all expectations.",
      customerName: "Начальник регионального центра управления МЧС",
      customerNameEn: "Head of Regional Emergency Management Center",
      image: industrialNdt
    },
    "mammography": {
      title: "Цифровая маммография",
      titleEn: "Digital Mammography",
      industry: "Медицина",
      industryEn: "Medicine",
      description: "Специализированное решение для маммографии: высокоразрешающий детектор + 5MP монохромный дисплей + ПО XELON MAMMO с ИИ",
      descriptionEn: "Specialized mammography solution: high-resolution detector + 5MP monochrome display + XELON MAMMO AI software",
      fullDescription: "Комплексное решение для цифровой маммографии и томосинтеза груди. Детектор XELON MAMMO-2430 с ультравысоким разрешением 70 мкм обеспечивает детализацию микрокальцинатов. Монохромный диагностический дисплей 5MP с яркостью 2500 нит оптимизирован для маммографии. ПО XELON MAMMO включает ИИ-модуль CAD для автоматического обнаружения образований и подсказок врачу.",
      fullDescriptionEn: "Comprehensive solution for digital mammography and breast tomosynthesis. XELON MAMMO-2430 detector with ultra-high 70 μm resolution provides microcalcification detail. 5MP monochrome diagnostic display with 2500 nit brightness is optimized for mammography. XELON MAMMO software includes AI CAD module for automatic lesion detection and physician prompts.",
      benefits: [
        "Разрешение детектора 70 мкм (7.1 пл/мм)",
        "Монохромный дисплей 5MP 2500 нит",
        "ИИ-обнаружение образований и микрокальцинатов",
        "Томосинтез 3D для сложных случаев",
        "Повышение выявляемости на 25%",
        "Снижение ложноположительных результатов"
      ],
      benefitsEn: [
        "70 μm detector resolution (7.1 lp/mm)",
        "5MP 2500 nit monochrome display",
        "AI lesion and microcalcification detection",
        "3D tomosynthesis for complex cases",
        "25% increase in detection rate",
        "Reduction in false positives"
      ],
      features: [
        "Детектор с a-Se прямым преобразованием",
        "Разрешение 7.1 пл/мм",
        "Поддержка томосинтеза DBT",
        "5MP монохромный дисплей",
        "Яркость 2500 кд/м² для плотной ткани",
        "Соответствие MQSA и ACR",
        "Калибровка DICOM Part 14",
        "Двухмониторная конфигурация"
      ],
      featuresEn: [
        "a-Se direct conversion detector",
        "7.1 lp/mm resolution",
        "DBT tomosynthesis support",
        "5MP monochrome display",
        "2500 cd/m² brightness for dense tissue",
        "MQSA and ACR compliance",
        "DICOM Part 14 calibration",
        "Dual-monitor configuration"
      ],
      aiFeatures: [
        "Автоматическое обнаружение образований",
        "Детекция микрокальцинатов",
        "Оценка плотности ткани по BI-RADS",
        "CAD-подсказки для врача",
        "Сравнение с предыдущими исследованиями",
        "Автоматический анализ симметрии",
        "Измерение размеров образований",
        "Генерация структурированных отчётов"
      ],
      aiFeaturesEn: [
        "Automatic lesion detection",
        "Microcalcification detection",
        "BI-RADS tissue density assessment",
        "CAD prompts for physicians",
        "Comparison with previous studies",
        "Automatic symmetry analysis",
        "Lesion size measurement",
        "Structured report generation"
      ],
      technicalSpecs: {
        "Активная область детектора": "240×300 мм",
        "Шаг пикселя": "70 мкм",
        "Разрешение": "7.1 пл/мм",
        "Динамический диапазон": "14 бит",
        "Разрешение дисплея": "5MP (2560×2048)",
        "Яркость дисплея": "2500 кд/м²",
        "Контрастность": "2000:1",
        "Калибровка": "DICOM Part 14, MQSA",
        "Сертификация": "FDA, CE, Росздравнадзор"
      },
      technicalSpecsEn: {
        "Detector active area": "240×300 mm",
        "Pixel pitch": "70 μm",
        "Resolution": "7.1 lp/mm",
        "Dynamic range": "14 bit",
        "Display resolution": "5MP (2560×2048)",
        "Display brightness": "2500 cd/m²",
        "Contrast ratio": "2000:1",
        "Calibration": "DICOM Part 14, MQSA",
        "Certification": "FDA, CE, Roszdravnadzor"
      },
      products: [
        { name: "XELON MAMMO-2430", description: "Маммографический детектор 70 мкм", link: "/products/detectors/xelon-mammo-2430" },
        { name: "MG50A", description: "5MP монохромный маммографический дисплей", link: "/products/medDisplays/mg50a" },
        { name: "XELON MAMMO", description: "ПО с ИИ-CAD для маммографии", link: "/software" }
      ],
      productsEn: [
        { name: "XELON MAMMO-2430", description: "70 μm mammography detector", link: "/products/detectors/xelon-mammo-2430" },
        { name: "MG50A", description: "5MP monochrome mammography display", link: "/products/medDisplays/mg50a" },
        { name: "XELON MAMMO", description: "AI CAD mammography software", link: "/software" }
      ],
      applications: ["Скрининговая маммография", "Диагностическая маммография", "Томосинтез", "Онкоцентры"],
      applicationsEn: ["Screening mammography", "Diagnostic mammography", "Tomosynthesis", "Cancer centers"],
      standards: ["MQSA", "ACR", "IEC 61223-3-2", "DICOM", "BI-RADS", "EUREF"],
      roi: "Повышение выявляемости на 25%",
      roiEn: "25% increase in detection rate",
      roiDetails: [
        "Раннее выявление рака молочной железы",
        "Снижение ложноположительных биопсий",
        "Сокращение времени интерпретации на 30%",
        "Повышение уверенности врача в диагнозе"
      ],
      roiDetailsEn: [
        "Early breast cancer detection",
        "Reduction in false positive biopsies",
        "30% reduction in interpretation time",
        "Increased physician diagnostic confidence"
      ],
      caseStudy: "НМИЦ онкологии — скрининговая программа",
      caseStudyEn: "National Cancer Center — screening program",
      caseStudyDetails: "Оснащение 5 маммографических кабинетов онкологического центра. Внедрение ИИ-CAD модуля. Результат: повышение выявляемости рака на ранних стадиях на 23%, сокращение ложноположительных результатов на 18%, увеличение пропускной способности скрининга на 40%.",
      caseStudyDetailsEn: "Equipment of 5 mammography rooms at the cancer center. AI CAD module implementation. Result: 23% increase in early-stage cancer detection, 18% reduction in false positives, 40% increase in screening throughput.",
      implementation: "Внедрение занимает 2-3 недели",
      implementationEn: "Implementation takes 2-3 weeks",
      implementationSteps: [
        "Аудит существующего оборудования",
        "Поставка и установка детектора и дисплеев",
        "Интеграция с маммографом",
        "Настройка ПО и калибровка",
        "Обучение рентгенолаборантов",
        "Обучение врачей-маммологов работе с CAD",
        "Тестовая эксплуатация"
      ],
      implementationStepsEn: [
        "Existing equipment audit",
        "Detector and display delivery and installation",
        "Mammograph integration",
        "Software setup and calibration",
        "Radiographer training",
        "Mammologist CAD training",
        "Test operation"
      ],
      support: "Специализированная поддержка маммографических систем",
      supportEn: "Specialized mammography system support",
      supportFeatures: [
        "Поддержка 24/7",
        "Ежеквартальная калибровка по MQSA",
        "Обновления ИИ-моделей",
        "Консультации врачей-радиологов",
        "Участие в программах аккредитации",
        "Обучение новых специалистов"
      ],
      supportFeaturesEn: [
        "24/7 support",
        "Quarterly MQSA calibration",
        "AI model updates",
        "Radiologist consultations",
        "Accreditation program participation",
        "New specialist training"
      ],
      testimonial: "ИИ-модуль XELON MAMMO стал незаменимым помощником для наших врачей. Он помогает не пропустить даже мельчайшие образования и существенно повышает уверенность в диагнозе.",
      testimonialEn: "XELON MAMMO AI module has become an indispensable assistant for our physicians. It helps not miss even the smallest lesions and significantly increases diagnostic confidence.",
      customerName: "Заведующая отделением лучевой диагностики НМИЦ онкологии",
      customerNameEn: "Head of Radiology Department, National Cancer Center",
      image: medicalIndustry
    },
    "security-screening": {
      title: "Досмотр и безопасность",
      titleEn: "Security Screening",
      industry: "Безопасность",
      industryEn: "Security",
      description: "Рентгеновский досмотр багажа и грузов с высокоскоростными детекторами и ПО XELON SECURITY с ИИ-обнаружением угроз",
      descriptionEn: "X-ray baggage and cargo screening with high-speed detectors and XELON SECURITY AI threat detection software",
      fullDescription: "Комплексное решение для систем безопасности: высокоскоростные линейные детекторы для конвейерных сканеров, эргономичные операторские мониторы и интеллектуальное ПО XELON SECURITY со встроенными алгоритмами ИИ для автоматического обнаружения запрещённых предметов, взрывчатых веществ и оружия. Многоэнергетическое сканирование позволяет определять материалы по плотности.",
      fullDescriptionEn: "Comprehensive security solution: high-speed linear detectors for conveyor scanners, ergonomic operator monitors, and intelligent XELON SECURITY software with built-in AI algorithms for automatic detection of prohibited items, explosives, and weapons. Multi-energy scanning enables material identification by density.",
      benefits: [
        "Скорость конвейера до 0.5 м/с",
        "Многоэнергетическая визуализация материалов",
        "ИИ-обнаружение угроз в реальном времени",
        "Автоматическая сортировка подозрительного багажа",
        "Эргономичные операторские мониторы",
        "Интеграция с системами безопасности"
      ],
      benefitsEn: [
        "Conveyor speed up to 0.5 m/s",
        "Multi-energy material imaging",
        "Real-time AI threat detection",
        "Automatic suspicious baggage sorting",
        "Ergonomic operator monitors",
        "Security system integration"
      ],
      features: [
        "Линейные детекторы высокой скорости",
        "Двухэнергетическое сканирование",
        "Разрешение проволоки AWG 38",
        "Операторские мониторы с антибликовым покрытием",
        "Режим непрерывной работы 24/7",
        "Централизованное управление",
        "Интеграция с биометрией",
        "Соответствие TSA/ECAC"
      ],
      featuresEn: [
        "High-speed linear detectors",
        "Dual-energy scanning",
        "AWG 38 wire resolution",
        "Anti-glare operator monitors",
        "24/7 continuous operation mode",
        "Centralized management",
        "Biometric integration",
        "TSA/ECAC compliance"
      ],
      aiFeatures: [
        "Автоматическое обнаружение взрывчатых веществ",
        "Распознавание оружия и острых предметов",
        "Классификация по типу материала",
        "Обнаружение аномалий в грузах",
        "Подсказки оператору",
        "Автоматическая пересортировка",
        "Статистика и аналитика угроз",
        "Обучение на новых типах угроз"
      ],
      aiFeaturesEn: [
        "Automatic explosive detection",
        "Weapon and sharp object recognition",
        "Material type classification",
        "Cargo anomaly detection",
        "Operator prompts",
        "Automatic resorting",
        "Threat statistics and analytics",
        "Training on new threat types"
      ],
      technicalSpecs: {
        "Тип детектора": "Линейный, двухэнергетический",
        "Скорость конвейера": "до 0.5 м/с",
        "Разрешение": "AWG 38 (0.1 мм)",
        "Проникающая способность": "до 40 мм стали",
        "Размер туннеля": "от 600×400 до 1800×1800 мм",
        "Монитор оператора": "24-27\" FHD/4K",
        "Режим работы": "24/7/365",
        "Сертификация": "TSA, ECAC, ФСБ"
      },
      technicalSpecsEn: {
        "Detector type": "Linear, dual-energy",
        "Conveyor speed": "up to 0.5 m/s",
        "Resolution": "AWG 38 (0.1 mm)",
        "Penetration": "up to 40 mm steel",
        "Tunnel size": "from 600×400 to 1800×1800 mm",
        "Operator monitor": "24-27\" FHD/4K",
        "Operation mode": "24/7/365",
        "Certification": "TSA, ECAC"
      },
      products: [
        { name: "XELON X-RAY-4343", description: "Детектор для досмотровых систем", link: "/products/detectors/xelon-xray-4343" },
        { name: "MC40B", description: "Операторский монитор 24\" FHD", link: "/products/specDisplays/mc40b" },
        { name: "XELON SECURITY", description: "ПО с ИИ-обнаружением угроз", link: "/software" }
      ],
      productsEn: [
        { name: "XELON X-RAY-4343", description: "Detector for screening systems", link: "/products/detectors/xelon-xray-4343" },
        { name: "MC40B", description: "24\" FHD operator monitor", link: "/products/specDisplays/mc40b" },
        { name: "XELON SECURITY", description: "AI threat detection software", link: "/software" }
      ],
      applications: ["Аэропорты", "Таможня", "Логистические центры", "Режимные объекты", "Метро", "ЖД вокзалы"],
      applicationsEn: ["Airports", "Customs", "Logistics centers", "Secure facilities", "Metro", "Railway stations"],
      standards: ["TSA", "ECAC", "ФСБ России", "ГОСТ Р 54342", "IEC 62463"],
      roi: "Повышение пропускной способности на 200%",
      roiEn: "200% throughput increase",
      roiDetails: [
        "Сокращение времени досмотра единицы багажа",
        "Снижение нагрузки на операторов",
        "Повышение выявляемости угроз",
        "Уменьшение ложных срабатываний"
      ],
      roiDetailsEn: [
        "Reduced baggage screening time per unit",
        "Reduced operator workload",
        "Increased threat detection",
        "Reduced false alarms"
      ],
      caseStudy: "Аэропорт Шереметьево — модернизация системы досмотра",
      caseStudyEn: "Sheremetyevo Airport — screening system upgrade",
      caseStudyDetails: "Модернизация 24 линий досмотра багажа с установкой детекторов XELON и ПО XELON SECURITY. Интеграция с единой системой безопасности аэропорта. Результат: увеличение пропускной способности в 2 раза, повышение выявляемости запрещённых предметов на 35%, сокращение времени досмотра на 40%.",
      caseStudyDetailsEn: "Upgrade of 24 baggage screening lines with XELON detectors and XELON SECURITY software. Integration with unified airport security system. Result: 2x throughput increase, 35% increase in prohibited item detection, 40% reduction in screening time.",
      implementation: "Внедрение занимает 4-8 недель в зависимости от масштаба",
      implementationEn: "Implementation takes 4-8 weeks depending on scale",
      implementationSteps: [
        "Аудит существующей системы безопасности",
        "Проектирование решения",
        "Поставка оборудования",
        "Монтаж и интеграция",
        "Настройка ИИ и обучение моделей",
        "Обучение операторов",
        "Сертификация системы",
        "Ввод в эксплуатацию"
      ],
      implementationStepsEn: [
        "Existing security system audit",
        "Solution design",
        "Equipment delivery",
        "Installation and integration",
        "AI setup and model training",
        "Operator training",
        "System certification",
        "Commissioning"
      ],
      support: "Критическая поддержка объектов безопасности",
      supportEn: "Critical security facility support",
      supportFeatures: [
        "Поддержка 24/7/365",
        "Мониторинг работоспособности в реальном времени",
        "Выезд инженера в течение 2 часов",
        "Обновление баз угроз в реальном времени",
        "Ежемесячная калибровка",
        "Периодическая аттестация персонала"
      ],
      supportFeaturesEn: [
        "24/7/365 support",
        "Real-time health monitoring",
        "Engineer visit within 2 hours",
        "Real-time threat database updates",
        "Monthly calibration",
        "Periodic personnel certification"
      ],
      testimonial: "Система XELON SECURITY позволила нам увеличить пропускную способность в 2 раза без ущерба для безопасности. ИИ-модуль обнаружения угроз работает точнее самых опытных операторов.",
      testimonialEn: "XELON SECURITY system allowed us to double throughput without compromising security. AI threat detection module works more accurately than the most experienced operators.",
      customerName: "Начальник службы авиационной безопасности аэропорта Шереметьево",
      customerNameEn: "Head of Aviation Security, Sheremetyevo Airport",
      image: industrialNdt
    }
  };

  const solution = solutionsData[solutionId as keyof typeof solutionsData];

  if (!solution) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'ru' ? 'Решение не найдено' : 'Solution not found'}
          </h1>
          <Button onClick={() => navigate('/solutions')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'ru' ? 'Вернуться к решениям' : 'Back to solutions'}
          </Button>
        </div>
      </div>
    );
  }

  const t = (ru: string, en: string) => language === 'ru' ? ru : en;
  const getData = <T,>(ru: T, en: T) => language === 'ru' ? ru : en;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-fade-in-up">
            <div className="mb-6">
              <Button 
                variant="outline"
                className="mb-6 border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/solutions')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('Все решения', 'All solutions')}
              </Button>
            </div>
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              {getData(solution.industry, solution.industryEn)}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              {getData(solution.title, solution.titleEn)}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              {getData(solution.description, solution.descriptionEn)}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="corporate-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-accent" />
                    {t('Обзор решения', 'Solution Overview')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {getData(solution.fullDescription, solution.fullDescriptionEn)}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {getData(solution.features, solution.featuresEn).map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-success mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Features */}
              <Card className="corporate-shadow border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Brain className="h-6 w-6 mr-3 text-accent" />
                    {t('ИИ-функции', 'AI Features')}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t(
                      'Встроенные алгоритмы искусственного интеллекта для автоматизации анализа и повышения точности диагностики',
                      'Built-in artificial intelligence algorithms for analysis automation and diagnostic accuracy improvement'
                    )}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {getData(solution.aiFeatures, solution.aiFeaturesEn).map((feature, index) => (
                      <div key={index} className="flex items-start bg-background/50 p-3 rounded-lg">
                        <Cpu className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Specifications */}
              <Card className="corporate-shadow">
                <CardContent className="p-8">
                  <Tabs defaultValue="specs">
                    <TabsList className="mb-6">
                      <TabsTrigger value="specs">
                        <Settings className="h-4 w-4 mr-2" />
                        {t('Характеристики', 'Specifications')}
                      </TabsTrigger>
                      <TabsTrigger value="products">
                        <Layers className="h-4 w-4 mr-2" />
                        {t('Состав', 'Components')}
                      </TabsTrigger>
                      <TabsTrigger value="standards">
                        <Award className="h-4 w-4 mr-2" />
                        {t('Стандарты', 'Standards')}
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="specs">
                      <h3 className="text-lg font-semibold mb-4">{t('Технические характеристики', 'Technical Specifications')}</h3>
                      <div className="grid gap-3">
                        {Object.entries(getData(solution.technicalSpecs, solution.technicalSpecsEn)).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">{key}</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="products">
                      <h3 className="text-lg font-semibold mb-4">{t('Состав решения', 'Solution Components')}</h3>
                      <div className="space-y-4">
                        {getData(solution.products, solution.productsEn).map((product, index) => (
                          <Link 
                            key={index} 
                            to={product.link}
                            className="flex items-center justify-between p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors"
                          >
                            <div>
                              <h4 className="font-semibold">{product.name}</h4>
                              <p className="text-sm text-muted-foreground">{product.description}</p>
                            </div>
                            <Badge variant="outline">{t('Подробнее', 'Details')}</Badge>
                          </Link>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="standards">
                      <h3 className="text-lg font-semibold mb-4">{t('Соответствие стандартам', 'Standards Compliance')}</h3>
                      <div className="flex flex-wrap gap-2">
                        {solution.standards.map((standard, index) => (
                          <Badge key={index} variant="secondary" className="text-sm">
                            {standard}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Implementation */}
              <Card className="corporate-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Wrench className="h-6 w-6 mr-3 text-accent" />
                    {t('Внедрение и поддержка', 'Implementation & Support')}
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-accent" />
                      {t('Этапы внедрения', 'Implementation Steps')}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {getData(solution.implementation, solution.implementationEn)}
                    </p>
                    <div className="space-y-2">
                      {getData(solution.implementationSteps, solution.implementationStepsEn).map((step, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-xs font-bold text-accent">{index + 1}</span>
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-accent" />
                      {t('Техническая поддержка', 'Technical Support')}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {getData(solution.support, solution.supportEn)}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {getData(solution.supportFeatures, solution.supportFeaturesEn).map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study */}
              <Card className="corporate-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Building2 className="h-6 w-6 mr-3 text-accent" />
                    {t('Кейс внедрения', 'Case Study')}
                  </h2>
                  <h3 className="text-lg font-semibold mb-3">
                    {getData(solution.caseStudy, solution.caseStudyEn)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {getData(solution.caseStudyDetails, solution.caseStudyDetailsEn)}
                  </p>
                  
                  {/* Testimonial */}
                  <div className="bg-accent/5 p-6 rounded-lg border border-accent/20">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground italic mb-4">
                      "{getData(solution.testimonial, solution.testimonialEn)}"
                    </blockquote>
                    <cite className="text-sm font-medium">
                      — {getData(solution.customerName, solution.customerNameEn)}
                    </cite>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Key Benefits */}
              <Card className="corporate-shadow sticky top-4">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-accent" />
                    {t('Ключевые преимущества', 'Key Benefits')}
                  </h3>
                  <div className="space-y-3 mb-6">
                    {getData(solution.benefits, solution.benefitsEn).map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* ROI */}
                  <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20 mb-6">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                      <span className="font-semibold">{t('Экономический эффект', 'Economic Effect')}</span>
                    </div>
                    <div className="text-lg font-bold text-accent mb-3">
                      {getData(solution.roi, solution.roiEn)}
                    </div>
                    <div className="space-y-1">
                      {getData(solution.roiDetails, solution.roiDetailsEn).map((detail, index) => (
                        <div key={index} className="flex items-start text-xs">
                          <BarChart3 className="h-3 w-3 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-accent" />
                      {t('Области применения', 'Applications')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {getData(solution.applications, solution.applicationsEn).map((app, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-3">
                    <QuoteModal>
                      <Button className="w-full bg-accent hover:bg-accent-light">
                        <Phone className="h-4 w-4 mr-2" />
                        {t('Получить предложение', 'Get Quote')}
                      </Button>
                    </QuoteModal>
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      {t('Скачать презентацию', 'Download Presentation')}
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      {t('Заказать демо', 'Request Demo')}
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