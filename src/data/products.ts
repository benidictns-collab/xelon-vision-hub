// Unified Product Data with Industry Subcategories

export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  industryApplication: string;
  shortDescription: string;
  fullDescription: string;
  specs: ProductSpecs;
  features: string[];
  applications: string[];
  images: string[];
  isNew: boolean;
}

export interface IndustrySubcategory {
  id: string;
  nameRu: string;
  nameEn: string;
  descRu: string;
  descEn: string;
  icon: string;
}

// Detector Subcategories by Industry
export const detectorSubcategories: IndustrySubcategory[] = [
  {
    id: 'medical',
    nameRu: 'Медицина',
    nameEn: 'Medical',
    descRu: 'Рентгенография, флюороскопия, маммография',
    descEn: 'Radiography, fluoroscopy, mammography',
    icon: 'Heart'
  },
  {
    id: 'ndt',
    nameRu: 'Промышленный NDT',
    nameEn: 'Industrial NDT',
    descRu: 'Дефектоскопия, контроль качества',
    descEn: 'Defectoscopy, quality control',
    icon: 'Wrench'
  },
  {
    id: 'security',
    nameRu: 'Безопасность',
    nameEn: 'Security',
    descRu: 'Досмотр, таможня, контроль доступа',
    descEn: 'Screening, customs, access control',
    icon: 'Shield'
  },
  {
    id: 'veterinary',
    nameRu: 'Ветеринария',
    nameEn: 'Veterinary',
    descRu: 'Ветеринарная рентгенография',
    descEn: 'Veterinary radiography',
    icon: 'Cat'
  }
];

// Medical Display Subcategories
export const medDisplaySubcategories: IndustrySubcategory[] = [
  {
    id: 'radiology',
    nameRu: 'Радиология',
    nameEn: 'Radiology',
    descRu: 'Диагностические дисплеи для PACS',
    descEn: 'Diagnostic displays for PACS',
    icon: 'Scan'
  },
  {
    id: 'surgery',
    nameRu: 'Хирургия',
    nameEn: 'Surgery',
    descRu: 'Операционные и хирургические роботы',
    descEn: 'Operating rooms and surgical robots',
    icon: 'Scissors'
  },
  {
    id: 'endoscopy',
    nameRu: 'Эндоскопия',
    nameEn: 'Endoscopy',
    descRu: 'Малоинвазивная хирургия',
    descEn: 'Minimally invasive surgery',
    icon: 'Eye'
  },
  {
    id: 'clinical',
    nameRu: 'Клинический',
    nameEn: 'Clinical',
    descRu: 'Рабочие станции и контроль',
    descEn: 'Workstations and control',
    icon: 'Stethoscope'
  }
];

// Special Display Subcategories
export const specDisplaySubcategories: IndustrySubcategory[] = [
  {
    id: 'industrial',
    nameRu: 'Промышленность',
    nameEn: 'Industrial',
    descRu: 'Заводы, производственные линии',
    descEn: 'Factories, production lines',
    icon: 'Factory'
  },
  {
    id: 'command',
    nameRu: 'Диспетчерские',
    nameEn: 'Command Centers',
    descRu: 'ЦУП, ситуационные центры',
    descEn: 'Control rooms, situation centers',
    icon: 'LayoutDashboard'
  },
  {
    id: 'defense',
    nameRu: 'Оборона',
    nameEn: 'Defense',
    descRu: 'Военные системы, MIL-STD',
    descEn: 'Military systems, MIL-STD',
    icon: 'Shield'
  },
  {
    id: 'transport',
    nameRu: 'Транспорт',
    nameEn: 'Transport',
    descRu: 'Железные дороги, авиация, флот',
    descEn: 'Railways, aviation, navy',
    icon: 'Plane'
  }
];

// Detector Products with Full Details
export const detectorProducts: Product[] = [
  // Medical Detectors
  {
    id: 'xelon-xray-1515',
    name: 'XELON X-RAY-1515',
    category: 'detectors',
    subcategory: 'medical',
    industryApplication: 'medical',
    shortDescription: 'Активная область 153×153 мм, шаг пикселя 135 мкм',
    fullDescription: 'Компактный цифровой плоскопанельный детектор XELON X-RAY-1515 предназначен для цифровой рентгенографии в медицинских учреждениях. Сочетает высокое разрешение с минимальной дозовой нагрузкой. Интегрированные алгоритмы ИИ обеспечивают автоматическую оптимизацию качества изображения и предварительный анализ патологий.',
    specs: {
      'Активная область': '153×153 мм',
      'Шаг пикселя': '135 мкм',
      'Матрица': '1536×1536',
      'Интерфейс': 'USB 3.2, Wi-Fi 6E',
      'Разрешение': '3.7 ЛП/мм',
      'Вес': '2.8 кг',
      'Рабочая температура': '10°C - 40°C',
      'Энергия рентгена': '40–150 кВ'
    },
    features: [
      'ИИ-шумоподавление без потери диагностической информации',
      'Автокалибровка dark/flat field',
      'Беспроводная передача через Wi-Fi 6E',
      'DICOM-совместимость',
      'Интеграция с PACS/RIS'
    ],
    applications: ['Цифровая рентгенография R&F', 'Ортопедия', 'Педиатрия', 'Травматология'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'xelon-xray-1923',
    name: 'XELON X-RAY-1923',
    category: 'detectors',
    subcategory: 'medical',
    industryApplication: 'medical',
    shortDescription: 'Активная область 190×230 мм, шаг пикселя 131 мкм',
    fullDescription: 'Универсальный детектор для общей рентгенографии с оптимальным соотношением размера и разрешения. Идеально подходит для исследования грудной клетки и конечностей. Поддерживает как проводное, так и беспроводное подключение.',
    specs: {
      'Активная область': '190×230 мм',
      'Шаг пикселя': '131 мкм',
      'Матрица': '1900×2304',
      'Интерфейс': 'USB 3.2, Wi-Fi 6E',
      'Разрешение': '3.8 ЛП/мм',
      'Вес': '3.2 кг',
      'Рабочая температура': '10°C - 40°C',
      'Энергия рентгена': '40–150 кВ'
    },
    features: [
      'Super-resolution для повышения детализации',
      'Автоматическая оптимизация экспозиции',
      'Коррекция дефектных пикселей в реальном времени',
      'Поддержка мобильных аппаратов'
    ],
    applications: ['Общая рентгенография', 'Грудная клетка', 'Конечности', 'Мобильные системы'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  },
  {
    id: 'xelon-xray-3543',
    name: 'XELON X-RAY-3543',
    category: 'detectors',
    subcategory: 'medical',
    industryApplication: 'medical',
    shortDescription: 'Активная область 358×430 мм, шаг пикселя 140 мкм',
    fullDescription: 'Полноформатный детектор для ортопедических исследований и общей рентгенографии. Большая активная область позволяет получать изображения всего тела. ИИ-модуль анализирует изображения на предмет переломов и других патологий.',
    specs: {
      'Активная область': '358×430 мм',
      'Шаг пикселя': '140 мкм',
      'Матрица': '2560×3072',
      'Интерфейс': 'CameraLink, USB 3.2',
      'Разрешение': '3.6 ЛП/мм',
      'Вес': '6.2 кг',
      'Рабочая температура': '10°C - 40°C',
      'Энергия рентгена': '40–150 кВ'
    },
    features: [
      'ИИ-детекция переломов и патологий',
      'Сегментация органов и тканей',
      'Интеллектуальный контроль дозы ALARA',
      'Сравнение с предыдущими исследованиями'
    ],
    applications: ['Полноформатная рентгенография', 'Ортопедия', 'Травматология', 'Ревматология'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'xelon-mammo-2430',
    name: 'XELON MAMMO-2430',
    category: 'detectors',
    subcategory: 'medical',
    industryApplication: 'medical',
    shortDescription: 'Специализированный маммографический детектор 240×300 мм',
    fullDescription: 'Высокоразрешающий детектор для цифровой маммографии с ИИ-модулем обнаружения образований. Обеспечивает максимальную детализацию при минимальной дозе облучения.',
    specs: {
      'Активная область': '240×300 мм',
      'Шаг пикселя': '70 мкм',
      'Матрица': '3429×4286',
      'Интерфейс': 'CameraLink HS',
      'Разрешение': '7.1 ЛП/мм',
      'Вес': '4.5 кг',
      'Рабочая температура': '18°C - 28°C',
      'Энергия рентгена': '20–49 кВ'
    },
    features: [
      'ИИ-обнаружение образований и микрокальцинатов',
      'CAD-подсказки для врача',
      'Томосинтез 3D',
      'Автоматическое определение плотности ткани'
    ],
    applications: ['Цифровая маммография', 'Томосинтез', 'Скрининг', 'Диагностика'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  // Veterinary Detectors
  {
    id: 'xelon-vet-1417',
    name: 'XELON VET-1417',
    category: 'detectors',
    subcategory: 'veterinary',
    industryApplication: 'veterinary',
    shortDescription: 'Портативный ветеринарный детектор 140×170 мм',
    fullDescription: 'Компактный и прочный детектор для ветеринарной рентгенографии. Водонепроницаемый корпус, устойчивость к ударам, беспроводная передача данных.',
    specs: {
      'Активная область': '140×170 мм',
      'Шаг пикселя': '140 мкм',
      'Матрица': '1000×1214',
      'Интерфейс': 'Wi-Fi 6, USB 3.0',
      'Защита': 'IP65, ударопрочный',
      'Вес': '2.1 кг',
      'Рабочая температура': '0°C - 45°C'
    },
    features: [
      'Влагозащищённый корпус IP65',
      'Автономная работа до 8 часов',
      'ИИ-анализ ветеринарных патологий',
      'Специализированные протоколы для животных'
    ],
    applications: ['Мелкие животные', 'Лошади', 'Экзотические животные', 'Полевые условия'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'xelon-vet-3543',
    name: 'XELON VET-3543',
    category: 'detectors',
    subcategory: 'veterinary',
    industryApplication: 'veterinary',
    shortDescription: 'Полноформатный ветеринарный детектор 350×430 мм',
    fullDescription: 'Крупноформатный детектор для ветеринарных клиник, зоопарков и конных центров. Позволяет снимать крупных животных целиком.',
    specs: {
      'Активная область': '350×430 мм',
      'Шаг пикселя': '140 мкм',
      'Матрица': '2500×3071',
      'Интерфейс': 'GigE, Wi-Fi 6E',
      'Защита': 'IP54',
      'Вес': '5.8 кг',
      'Рабочая температура': '5°C - 40°C'
    },
    features: [
      'Увеличенная активная зона',
      'Усиленный корпус для работы с крупными животными',
      'Мобильная тележка опционально',
      'ИИ-оптимизация качества'
    ],
    applications: ['Крупные животные', 'Лошади', 'Зоопарки', 'Конные клубы'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  },
  // NDT Detectors
  {
    id: 'xelon-xray-55',
    name: 'XELON X-RAY-55',
    category: 'detectors',
    subcategory: 'ndt',
    industryApplication: 'ndt',
    shortDescription: 'Активная область 52.8×52.8 мм, шаг пикселя 50 мкм',
    fullDescription: 'Сверхвысокоразрешающий детектор для контроля микрообъектов. Обеспечивает детальную визуализацию внутренней структуры электронных компонентов, ювелирных изделий и прецизионных деталей.',
    specs: {
      'Активная область': '52.8×52.8 мм',
      'Шаг пикселя': '50 мкм',
      'Матрица': '1056×1056',
      'Разрешение': 'до 10 ЛП/мм',
      'Интерфейс': 'CameraLink, USB 3.2',
      'Вес': '1.8 кг',
      'Рабочая температура': '15°C - 35°C',
      'Энергия рентгена': '20–160 кВ'
    },
    features: [
      'ИИ-классификация дефектов по типу',
      'Автоматическая разбраковка',
      'Анализ структуры материалов',
      'Интеграция с промышленными системами'
    ],
    applications: ['Микрообъекты', 'Электроника', 'Ювелирные изделия', 'Прецизионные детали'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'xelon-xray-1212',
    name: 'XELON X-RAY-1212',
    category: 'detectors',
    subcategory: 'ndt',
    industryApplication: 'ndt',
    shortDescription: 'Активная область 120×120 мм, шаг пикселя 50 мкм',
    fullDescription: 'Детектор для промышленной дефектоскопии средних объектов. Высокое разрешение позволяет выявлять мельчайшие дефекты в сварных швах, литье и композитных материалах.',
    specs: {
      'Активная область': '120×120 мм',
      'Шаг пикселя': '50 мкм',
      'Матрица': '2240×2368',
      'Разрешение': 'до 10 ЛП/мм',
      'Интерфейс': 'CameraLink, GigE',
      'Вес': '2.5 кг',
      'Рабочая температура': '10°C - 40°C',
      'Энергия рентгена': '40–225 кВ'
    },
    features: [
      'Обнаружение трещин, пор и расслоений',
      'Классификация дефектов по критичности',
      'Интеграция с конвейерными линиями',
      'Соответствие стандартам EN, ASTM'
    ],
    applications: ['Контроль сварных швов', 'Литье', 'Композиты', 'Авиакомпоненты'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  },
  {
    id: 'xelon-ndt-2222',
    name: 'XELON NDT-2222',
    category: 'detectors',
    subcategory: 'ndt',
    industryApplication: 'ndt',
    shortDescription: 'Высокоэнергетический детектор 229×229 мм, до 450 кВ',
    fullDescription: 'Детектор для контроля толстостенных объектов в тяжёлой промышленности. Работает с высокоэнергетическими рентгеновскими системами до 450 кВ.',
    specs: {
      'Активная область': '229.1×229.1 мм',
      'Шаг пикселя': '179 мкм',
      'Матрица': '1280×1280',
      'Энергия рентгена': '40–450 кВ',
      'Интерфейс': 'CameraLink HS',
      'Вес': '4.2 кг',
      'Рабочая температура': '0°C - 50°C'
    },
    features: [
      'Работа с высокоэнергетическими источниками',
      'Контроль толстостенных объектов',
      'ИИ-анализ внутренней структуры',
      'Промышленный корпус IP54'
    ],
    applications: ['Толстостенные объекты', 'Трубопроводы', 'Сосуды давления', 'Металлургия'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  },
  {
    id: 'xelon-ndt-aero-1723',
    name: 'XELON AERO-1723',
    category: 'detectors',
    subcategory: 'ndt',
    industryApplication: 'ndt',
    shortDescription: 'Авиакосмический детектор 172.8×230.4 мм',
    fullDescription: 'Универсальный детектор для авиакосмической отрасли с сертификацией для применения в критически важных системах контроля.',
    specs: {
      'Активная область': '172.8×230.4 мм',
      'Шаг пикселя': '75 мкм',
      'Матрица': '2304×3072',
      'Энергия рентгена': '40–200 кВ',
      'Сертификация': 'AS9100, NADCAP',
      'Вес': '3.8 кг',
      'Рабочая температура': '5°C - 45°C'
    },
    features: [
      'Сертификация для авиакосмоса',
      'ИИ-детекция критических дефектов',
      'Интеграция с MES/ERP системами',
      'Полная трассируемость результатов'
    ],
    applications: ['Авиакосмос', 'Турбины', 'Лопатки двигателей', 'Композитные конструкции'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  // Security Detectors
  {
    id: 'xelon-xray-4343',
    name: 'XELON X-RAY-4343',
    category: 'detectors',
    subcategory: 'security',
    industryApplication: 'security',
    shortDescription: 'Активная область 430×430 мм, для досмотра грузов',
    fullDescription: 'Крупноформатный детектор для досмотра транспортных средств и крупногабаритных грузов. ИИ-модуль автоматически обнаруживает угрозы и контрабанду.',
    specs: {
      'Активная область': '430×430 мм',
      'Шаг пикселя': '139 мкм',
      'Матрица': '3072×3072',
      'Энергия рентгена': '80–450 кВ',
      'Режим работы': '24/7',
      'Вес': '8.5 кг',
      'Рабочая температура': '-10°C - 60°C'
    },
    features: [
      'ИИ-обнаружение оружия и взрывчатки',
      'Автоматическая классификация угроз',
      'Двухэнергетический режим',
      'Интеграция с системами безопасности'
    ],
    applications: ['Досмотр транспорта', 'Крупногабаритные грузы', 'Контейнеры', 'Пограничный контроль'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  },
  {
    id: 'xelon-sec-3025',
    name: 'XELON SEC-3025',
    category: 'detectors',
    subcategory: 'security',
    industryApplication: 'security',
    shortDescription: 'Динамический детектор 300×250 мм для досмотра багажа',
    fullDescription: 'Специализированный детектор для систем досмотра багажа в аэропортах, на вокзалах и в метро. Оптимизирован для быстрого сканирования.',
    specs: {
      'Активная область': '300×250 мм',
      'Шаг пикселя': '100 мкм',
      'Матрица': '3008×2512',
      'Тип': 'Динамический',
      'Скорость': 'до 25 кадр/с',
      'Вес': '5.2 кг',
      'Рабочая температура': '5°C - 45°C'
    },
    features: [
      'Высокая пропускная способность',
      'ИИ-детекция запрещённых предметов',
      'Цветовое кодирование материалов',
      'Интеграция с EDS системами'
    ],
    applications: ['Аэропорты', 'Вокзалы', 'Метро', 'Стадионы'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'xelon-sec-mail',
    name: 'XELON MAIL-5252',
    category: 'detectors',
    subcategory: 'security',
    industryApplication: 'security',
    shortDescription: 'Компактный детектор 52.8×52.8 мм для почты',
    fullDescription: 'Компактный детектор для досмотра почтовых отправлений и мелких предметов. Высокое разрешение для детальной визуализации.',
    specs: {
      'Активная область': '52.8×52.8 мм',
      'Шаг пикселя': '50 мкм',
      'Матрица': '1056×1056',
      'Разрешение': 'до 10 ЛП/мм',
      'Вес': '1.5 кг',
      'Рабочая температура': '10°C - 40°C'
    },
    features: [
      'Обнаружение порошков и жидкостей',
      'ИИ-анализ содержимого',
      'Компактные размеры',
      'USB-подключение'
    ],
    applications: ['Почтовые отправления', 'Посылки', 'Офисы', 'Правительственные здания'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  }
];

// Medical Display Products with Full Details
export const medicalDisplayProducts: Product[] = [
  // Radiology
  {
    id: 'mc50a',
    name: 'MC50A',
    category: 'medDisplays',
    subcategory: 'radiology',
    industryApplication: 'radiology',
    shortDescription: '21.3" 5MP цветной радиологический дисплей',
    fullDescription: 'Профессиональный 5-мегапиксельный цветной дисплей для радиологических рабочих станций. Калибровка DICOM GSDF, высокая яркость и контрастность для точной диагностики.',
    specs: {
      'Диагональ': '21.3"',
      'Разрешение': '2560×2048',
      'Яркость': '1100 кд/м²',
      'Контраст': '1500:1',
      'Цветовой охват': '99% sRGB',
      'Питание': 'AC220V',
      'Интерфейсы': 'DVI+HDMI+DP',
      'Калибровка': 'DICOM GSDF'
    },
    features: [
      'Калибровка DICOM GSDF',
      'ИИ-адаптация под тип исследования',
      'Стабильность яркости 10 000+ часов',
      'Антибликовое покрытие'
    ],
    applications: ['PACS рабочие станции', 'Рентгенология', 'КТ', 'МРТ'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  },
  {
    id: 'mg50a',
    name: 'MG50A',
    category: 'medDisplays',
    subcategory: 'radiology',
    industryApplication: 'radiology',
    shortDescription: '21.3" 5MP монохромный радиологический дисплей',
    fullDescription: 'Профессиональный 5-мегапиксельный монохромный дисплей для радиологии и маммографии. Сверхвысокая яркость 2500 кд/м² для максимальной детализации.',
    specs: {
      'Диагональ': '21.3"',
      'Разрешение': '2560×2048',
      'Яркость': '2500 кд/м²',
      'Контраст': '2000:1',
      'Градаций серого': '16 384',
      'Питание': 'AC220V',
      'Интерфейсы': 'DVI+HDMI+DP',
      'Калибровка': 'DICOM GSDF'
    },
    features: [
      'Сверхвысокая яркость 2500 кд/м²',
      'Монохромная матрица для точной диагностики',
      'Автоматическая стабилизация яркости',
      'Интеграция с PACS'
    ],
    applications: ['Маммография', 'Рентгенология', 'Денситометрия'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'mc80a',
    name: 'MC80A',
    category: 'medDisplays',
    subcategory: 'radiology',
    industryApplication: 'radiology',
    shortDescription: '31.5" 8MP (4K) цветной радиологический дисплей',
    fullDescription: 'Премиальный 8-мегапиксельный дисплей для комплексной диагностики. 4K разрешение позволяет просматривать несколько изображений одновременно.',
    specs: {
      'Диагональ': '31.5"',
      'Разрешение': '3840×2160',
      'Яркость': '1000 кд/м²',
      'Контраст': '1400:1',
      'Цветовой охват': '100% sRGB',
      'Питание': 'DC24V',
      'Интерфейсы': 'DVI+DP+HDMI+VGA',
      'Калибровка': 'DICOM GSDF'
    },
    features: [
      '4K разрешение для мультимодальности',
      'Одновременный просмотр 4+ изображений',
      'ИИ-фокус на области интереса',
      'Поддержка HDR'
    ],
    applications: ['Мультимодальная диагностика', 'Консилиумы', 'Телерадиология'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  // Surgery
  {
    id: 'ms8270t',
    name: 'MS8270T',
    category: 'medDisplays',
    subcategory: 'surgery',
    industryApplication: 'surgery',
    shortDescription: '27" 4K хирургический дисплей с сенсорным управлением',
    fullDescription: 'Премиальный хирургический дисплей с 4K разрешением и сенсорным управлением. Разработан для интеграции с хирургическими роботами и навигационными системами.',
    specs: {
      'Диагональ': '27"',
      'Разрешение': '3840×2160',
      'Яркость': '1000 кд/м²',
      'Сенсор': 'Touch',
      'Покрытие': 'Optical bonding',
      'Питание': 'DC24V',
      'Интерфейсы': '3G SDI(in/out)+DVI+DP+HDMI',
      'Защита': 'IP54'
    },
    features: [
      'Сенсорное управление в стерильных перчатках',
      'Optical bonding для контраста',
      'ИИ-подсветка ROI',
      'Интеграция с навигацией'
    ],
    applications: ['Операционные', 'Хирургические роботы', 'Нейрохирургия', 'Кардиохирургия'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'ms8320t',
    name: 'MS8320T',
    category: 'medDisplays',
    subcategory: 'surgery',
    industryApplication: 'surgery',
    shortDescription: '31.5" 4K хирургический дисплей для операционных',
    fullDescription: 'Большой хирургический дисплей для просмотра хирургической бригадой. Высокая яркость и широкие углы обзора.',
    specs: {
      'Диагональ': '31.5"',
      'Разрешение': '3840×2160',
      'Яркость': '1000 кд/м²',
      'Сенсор': 'Touch',
      'Покрытие': 'Optical bonding',
      'Угол обзора': '178°/178°',
      'Интерфейсы': '3G SDI(in/out)+DVI+DP+HDMI'
    },
    features: [
      'Большой экран для всей бригады',
      'Широкие углы обзора',
      'Низкая латентность <10мс',
      'Поддержка картинка-в-картинке'
    ],
    applications: ['Операционные', 'Гибридные залы', 'Обучение', 'Трансляции'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  // Endoscopy
  {
    id: 'ms8270p',
    name: 'MS8270P',
    category: 'medDisplays',
    subcategory: 'endoscopy',
    industryApplication: 'endoscopy',
    shortDescription: '27" 4K эндоскопический дисплей с 3A Glass',
    fullDescription: 'Специализированный эндоскопический дисплей с защитным стеклом 3A Glass и высокой яркостью для работы в освещённых операционных.',
    specs: {
      'Диагональ': '27"',
      'Разрешение': '3840×2160',
      'Яркость': '1000 кд/м²',
      'Стекло': '3A Glass',
      'Покрытие': 'Optical bonding',
      'Питание': 'DC24V',
      'Интерфейсы': '3G SDI(in/out)+DVI+DP+HDMI'
    },
    features: [
      '3A Glass для защиты и антибликовости',
      'Optical bonding для контраста',
      'Совместимость с 4K эндоскопами',
      'ИИ-улучшение эндоскопического изображения'
    ],
    applications: ['Эндоскопия', 'Лапароскопия', 'Колоноскопия', 'Гастроскопия'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'ms8550p',
    name: 'MS8550P',
    category: 'medDisplays',
    subcategory: 'endoscopy',
    industryApplication: 'endoscopy',
    shortDescription: '55" 4K большой эндоскопический дисплей',
    fullDescription: 'Крупноформатный эндоскопический дисплей для обучения, конференций и сложных процедур с участием большой бригады.',
    specs: {
      'Диагональ': '55"',
      'Разрешение': '3840×2160',
      'Яркость': '700 кд/м²',
      'Стекло': '3A Glass',
      'Покрытие': 'Optical bonding',
      'Питание': 'AC220V',
      'Интерфейсы': '12G SDI(in/out)+DP+HDMI',
      'Корпус': 'Metal housing'
    },
    features: [
      'Большой экран для бригады',
      '12G SDI для 4K 60fps',
      'Металлический корпус',
      'Настенный/мобильный монтаж'
    ],
    applications: ['Эндоскопические центры', 'Обучение', 'Конференции', 'Сложные операции'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  // Clinical
  {
    id: 'ms2151t',
    name: 'MS2151T',
    category: 'medDisplays',
    subcategory: 'clinical',
    industryApplication: 'clinical',
    shortDescription: '15.6" клинический дисплей с сенсорным управлением',
    fullDescription: 'Компактный клинический дисплей для рабочих станций медперсонала, палат и процедурных. Сенсорное управление и DC питание.',
    specs: {
      'Диагональ': '15.6"',
      'Разрешение': '1920×1080',
      'Яркость': '350 кд/м²',
      'Сенсор': 'Touch',
      'Покрытие': 'Optical bonding',
      'Питание': 'DC12V',
      'Интерфейсы': 'DP+HDMI',
      'Корпус': 'Metal housing'
    },
    features: [
      'Компактные размеры',
      'Сенсорное управление',
      'Низкое энергопотребление',
      'Металлический корпус'
    ],
    applications: ['Палаты', 'Процедурные', 'Рабочие станции', 'Регистратуры'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'mc40b',
    name: 'MC40B',
    category: 'medDisplays',
    subcategory: 'clinical',
    industryApplication: 'clinical',
    shortDescription: '27" 4MP клинический дисплей',
    fullDescription: 'Универсальный клинический дисплей 4MP для просмотра медицинских изображений, документации и работы с HIS/RIS.',
    specs: {
      'Диагональ': '27"',
      'Разрешение': '2560×1440',
      'Яркость': '600 кд/м²',
      'Контраст': '1000:1',
      'Питание': 'DC24V',
      'Интерфейсы': 'DVI+HDMI+DP+VGA'
    },
    features: [
      'Универсальное применение',
      'Поддержка DICOM',
      'Широкий выбор интерфейсов',
      'Энергоэффективность'
    ],
    applications: ['Клинические рабочие станции', 'HIS/RIS', 'Телемедицина', 'Обучение'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  }
];

// Special Display Products with Full Details
export const specialDisplayProducts: Product[] = [
  // Industrial
  {
    id: 'ind-2421',
    name: 'IND-2421',
    category: 'specDisplays',
    subcategory: 'industrial',
    industryApplication: 'industrial',
    shortDescription: '24" промышленный дисплей IP65',
    fullDescription: 'Промышленный дисплей для жёстких условий эксплуатации. Защита IP65, расширенный температурный диапазон, устойчивость к вибрациям.',
    specs: {
      'Диагональ': '24"',
      'Разрешение': '1920×1080',
      'Яркость': '1000 кд/м²',
      'Защита': 'IP65',
      'Температура': '-20°C ~ +60°C',
      'Вибростойкость': '2G',
      'Питание': 'DC24V'
    },
    features: [
      'Полная защита от пыли и воды IP65',
      'Расширенный температурный диапазон',
      'Читаемость при солнечном свете',
      'Антивандальное стекло'
    ],
    applications: ['Заводы', 'Производственные линии', 'ЦУП', 'Наружное размещение'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'ind-3221',
    name: 'IND-3221',
    category: 'specDisplays',
    subcategory: 'industrial',
    industryApplication: 'industrial',
    shortDescription: '32" промышленный дисплей для NDT',
    fullDescription: 'Промышленный дисплей для рабочих станций неразрушающего контроля. Высокая детализация и точность цветопередачи.',
    specs: {
      'Диагональ': '32"',
      'Разрешение': '2560×1440',
      'Яркость': '800 кд/м²',
      'Защита': 'IP54',
      'Температура': '-10°C ~ +50°C',
      'Калибровка': 'Заводская'
    },
    features: [
      'Оптимизирован для NDT изображений',
      'Заводская калибровка',
      'Антибликовое покрытие',
      'ИИ-адаптация под освещение'
    ],
    applications: ['NDT рабочие станции', 'Контроль качества', 'Лаборатории'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  },
  // Command Centers
  {
    id: 'cmd-5521',
    name: 'CMD-5521',
    category: 'specDisplays',
    subcategory: 'command',
    industryApplication: 'command',
    shortDescription: '55" 4K диспетчерский дисплей 24/7',
    fullDescription: 'Профессиональный диспетчерский дисплей для круглосуточной работы. Высокая яркость, защита от выгорания, видеостена.',
    specs: {
      'Диагональ': '55"',
      'Разрешение': '3840×2160',
      'Яркость': '700 кд/м²',
      'Режим работы': '24/7',
      'MTBF': '100 000 часов',
      'Рамка': '1.8 мм',
      'Питание': 'AC220V'
    },
    features: [
      'Работа 24/7 без деградации',
      'Защита от выгорания',
      'Минимальные рамки для видеостен',
      'Daisy chain подключение'
    ],
    applications: ['Диспетчерские', 'Ситуационные центры', 'Видеостены', 'Мониторинг'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  {
    id: 'cmd-4921-curved',
    name: 'CMD-4921C',
    category: 'specDisplays',
    subcategory: 'command',
    industryApplication: 'command',
    shortDescription: '49" изогнутый диспетчерский дисплей',
    fullDescription: 'Изогнутый сверхширокий дисплей для индивидуальных операторских постов. Эргономичное изображение, меньше нагрузка на глаза.',
    specs: {
      'Диагональ': '49"',
      'Разрешение': '3840×1080',
      'Соотношение': '32:9',
      'Изгиб': '1800R',
      'Яркость': '450 кд/м²',
      'Режим работы': '24/7'
    },
    features: [
      'Эргономичный изогнутый дизайн',
      'Заменяет 2 монитора',
      'Снижение нагрузки на глаза',
      'Picture-by-Picture'
    ],
    applications: ['Операторские посты', 'Трейдинг', 'Диспетчерские', 'SCADA'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  // Defense
  {
    id: 'def-2743',
    name: 'DEF-2743',
    category: 'specDisplays',
    subcategory: 'defense',
    industryApplication: 'defense',
    shortDescription: '27" защищённый дисплей MIL-STD-810G',
    fullDescription: 'Военный защищённый дисплей, соответствующий стандартам MIL-STD-810G. Устойчивость к ударам, вибрациям, экстремальным температурам.',
    specs: {
      'Диагональ': '27"',
      'Разрешение': '2560×1440',
      'Стандарт': 'MIL-STD-810G',
      'Защита': 'IP67',
      'Температура': '-40°C ~ +70°C',
      'Удар': '75G',
      'ЭМС': 'MIL-STD-461G'
    },
    features: [
      'Полное соответствие MIL-STD',
      'Устойчивость к ЭМИ',
      'Читаемость при ярком солнце',
      'Работа в перчатках'
    ],
    applications: ['Военные системы', 'Командные пункты', 'Полевые условия'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  },
  {
    id: 'def-naval-2143',
    name: 'DEF-NAVAL-2143',
    category: 'specDisplays',
    subcategory: 'defense',
    industryApplication: 'defense',
    shortDescription: '21" морской защищённый дисплей',
    fullDescription: 'Защищённый дисплей для морского применения. Устойчивость к солёному туману, вибрациям корабля, работа при качке.',
    specs: {
      'Диагональ': '21"',
      'Разрешение': '1920×1080',
      'Стандарт': 'MIL-STD-810G, MIL-S-901D',
      'Защита': 'IP67',
      'Солевой туман': '500 часов',
      'Температура': '-30°C ~ +60°C'
    },
    features: [
      'Устойчивость к солёному туману',
      'Виброзащита для морских судов',
      'Антикоррозийное покрытие',
      'Ночной режим'
    ],
    applications: ['Военно-морской флот', 'Корабли', 'Подводные лодки', 'Береговая охрана'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  },
  // Transport
  {
    id: 'trn-railway-1521',
    name: 'TRN-RAIL-1521',
    category: 'specDisplays',
    subcategory: 'transport',
    industryApplication: 'transport',
    shortDescription: '15" железнодорожный дисплей EN50155',
    fullDescription: 'Дисплей для железнодорожного транспорта, сертифицированный по EN50155. Устойчивость к вибрациям, перепадам напряжения, температур.',
    specs: {
      'Диагональ': '15"',
      'Разрешение': '1024×768',
      'Стандарт': 'EN50155',
      'Защита': 'IP54',
      'Температура': '-25°C ~ +55°C',
      'Вибрация': '2G',
      'Питание': 'DC24V/48V/72V/110V'
    },
    features: [
      'Сертификация EN50155',
      'Широкий диапазон питания',
      'Читаемость на солнце',
      'Антивандальное стекло'
    ],
    applications: ['Поезда', 'Метро', 'Трамваи', 'Железнодорожные станции'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: false
  },
  {
    id: 'trn-avionics-1221',
    name: 'TRN-AVIO-1221',
    category: 'specDisplays',
    subcategory: 'transport',
    industryApplication: 'transport',
    shortDescription: '12" авиационный дисплей DO-160G',
    fullDescription: 'Авиационный дисплей, сертифицированный по DO-160G. Для кабины пилотов и бортовых систем.',
    specs: {
      'Диагональ': '12"',
      'Разрешение': '1024×768',
      'Стандарт': 'DO-160G, MIL-STD-810G',
      'Защита': 'IP65',
      'Высота': 'до 15 000 м',
      'Температура': '-40°C ~ +85°C'
    },
    features: [
      'Авиационная сертификация DO-160G',
      'Работа на высоте',
      'NVIS-совместимость',
      'Читаемость в кабине'
    ],
    applications: ['Авиация', 'Вертолёты', 'БПЛА', 'Космические аппараты'],
    images: ['xelon-1.png', 'xelon-2.png', 'xelon-3.jpeg'],
    isNew: true
  }
];

// Get all products
export const getAllProducts = () => ({
  detectors: detectorProducts,
  medDisplays: medicalDisplayProducts,
  specDisplays: specialDisplayProducts
});

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  const allProducts = [...detectorProducts, ...medicalDisplayProducts, ...specialDisplayProducts];
  return allProducts.find(p => p.id === id);
};

// Get products by subcategory
export const getProductsBySubcategory = (category: string, subcategory: string): Product[] => {
  const products = getAllProducts()[category as keyof ReturnType<typeof getAllProducts>];
  if (!products) return [];
  return products.filter(p => p.subcategory === subcategory);
};
