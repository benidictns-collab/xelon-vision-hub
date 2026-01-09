// Medical Display Products from Excel data
export interface DisplayProduct {
  id: string;
  model: string;
  category: 'diagnostic' | 'surgical' | 'endoscope' | 'clinical';
  application: string;
  size: string;
  resolution: string;
  brightness: number;
  touch: 'Touch' | '3A Glass' | 'None';
  features: string[];
  isNew: boolean;
}

export const medicalDisplays: DisplayProduct[] = [
  // Diagnostic Displays (Control)
  {
    id: 'ms2151t',
    model: 'MS2151T',
    category: 'clinical',
    application: 'Diagnostic (Control)',
    size: '15.6"',
    resolution: '1920×1080',
    brightness: 350,
    touch: 'Touch',
    features: ['Optical bonding', 'DC12V', 'DP+HDMI', 'Metal housing'],
    isNew: true
  },
  // 2MP Color Diagnostic
  {
    id: 'mc20a',
    model: 'MC20A',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '21.3"',
    resolution: '1600×1200',
    brightness: 1000,
    touch: 'None',
    features: ['2M color', 'AC220V', 'DVI+HDMI+DP+VGA', 'Plastic housing'],
    isNew: false
  },
  // 2MP Mono Diagnostic
  {
    id: 'mg20a',
    model: 'MG20A',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '21.3"',
    resolution: '1600×1200',
    brightness: 2000,
    touch: 'None',
    features: ['2M mono', 'AC220V', 'DVI+HDMI+DP+VGA', 'Plastic housing'],
    isNew: false
  },
  // 3MP Color Diagnostic
  {
    id: 'mc30a',
    model: 'MC30A',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '21.3"',
    resolution: '2048×1536',
    brightness: 1000,
    touch: 'None',
    features: ['3M color', 'AC220V', 'DVI+HDMI+DP+VGA', 'Plastic housing'],
    isNew: true
  },
  // 3MP Mono Diagnostic
  {
    id: 'mg30a',
    model: 'MG30A',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '21.3"',
    resolution: '2048×1536',
    brightness: 2000,
    touch: 'None',
    features: ['3M mono', 'AC220V', 'DVI+HDMI+DP+VGA', 'Plastic housing'],
    isNew: false
  },
  // 4MP Color Diagnostic
  {
    id: 'mc40b',
    model: 'MC40B',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '27"',
    resolution: '2560×1440',
    brightness: 600,
    touch: 'None',
    features: ['4M color', 'DC24V', 'DVI+HDMI+DP+VGA', 'Plastic housing'],
    isNew: true
  },
  // 5MP Color Diagnostic
  {
    id: 'mc50a',
    model: 'MC50A',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '21.3"',
    resolution: '2560×2048',
    brightness: 1100,
    touch: 'None',
    features: ['5M color', 'AC220V', 'DVI+HDMI+DP', 'Plastic housing'],
    isNew: false
  },
  // 5MP Mono Diagnostic
  {
    id: 'mg50a',
    model: 'MG50A',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '21.3"',
    resolution: '2560×2048',
    brightness: 2500,
    touch: 'None',
    features: ['5M mono', 'AC220V', 'DVI+HDMI+DP', 'Plastic housing'],
    isNew: true
  },
  // Endoscope Displays
  {
    id: 'ms2270p',
    model: 'MS2270P',
    category: 'endoscope',
    application: 'Endoscope',
    size: '27"',
    resolution: '1920×1080',
    brightness: 1000,
    touch: '3A Glass',
    features: ['Optical bonding', 'DC24V', '3G SDI(in/out)+DVI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: true
  },
  // Surgical Robot Displays
  {
    id: 'ms2270t',
    model: 'MS2270T',
    category: 'surgical',
    application: 'Surgical Robot',
    size: '27"',
    resolution: '1920×1080',
    brightness: 1000,
    touch: 'Touch',
    features: ['Optical bonding', 'DC24V', '3G SDI(in/out)+DVI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: true
  },
  {
    id: 'ms4270t',
    model: 'MS4270T',
    category: 'endoscope',
    application: 'Endoscope',
    size: '27"',
    resolution: '2560×1440',
    brightness: 600,
    touch: 'Touch',
    features: ['Optical bonding', 'DC24V', '3G SDI(in/out)+DVI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: false
  },
  // 8MP (4K) Displays
  {
    id: 'ms8270a',
    model: 'MS8270A',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '27"',
    resolution: '3840×2160',
    brightness: 1000,
    touch: 'None',
    features: ['DC24V', '3G SDI(in/out)+DVI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: true
  },
  {
    id: 'ms8270p',
    model: 'MS8270P',
    category: 'endoscope',
    application: 'Endoscope',
    size: '27"',
    resolution: '3840×2160',
    brightness: 1000,
    touch: '3A Glass',
    features: ['Optical bonding', 'DC24V', '3G SDI(in/out)+DVI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: true
  },
  {
    id: 'ms8270t',
    model: 'MS8270T',
    category: 'surgical',
    application: 'Surgical Robot',
    size: '27"',
    resolution: '3840×2160',
    brightness: 1000,
    touch: 'Touch',
    features: ['Optical bonding', 'DC24V', '3G SDI(in/out)+DVI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: true
  },
  {
    id: 'ms8275t',
    model: 'MS8275T',
    category: 'surgical',
    application: 'Surgical Robot',
    size: '27"',
    resolution: '3840×2160',
    brightness: 650,
    touch: 'Touch',
    features: ['Optical bonding', 'DC24V', '3G SDI(in/out)+DVI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: false
  },
  {
    id: 'ms8275t-001',
    model: 'MS8275T-001',
    category: 'surgical',
    application: 'Surgical Robot',
    size: '27"',
    resolution: '3840×2160',
    brightness: 400,
    touch: 'Touch',
    features: ['Optical bonding', 'DC24V', 'DVI(in/out)+DP+HDMI+VGA', 'Plastic housing'],
    isNew: false
  },
  // 6MP Display
  {
    id: 'mc60a',
    model: 'MC60A',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '30"',
    resolution: '3280×2048',
    brightness: 1000,
    touch: 'None',
    features: ['6M color', 'AC220V', 'DVI+DP+HDMI+VGA', 'Plastic housing'],
    isNew: true
  },
  // 8MP Diagnostic Displays
  {
    id: 'mc80a',
    model: 'MC80A',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '31.5"',
    resolution: '3840×2160',
    brightness: 1000,
    touch: 'None',
    features: ['8M color', 'DC24V', 'DVI+DP+HDMI+VGA', 'Plastic housing'],
    isNew: true
  },
  {
    id: 'mc81b',
    model: 'MC81B',
    category: 'diagnostic',
    application: 'Diagnostic',
    size: '27"',
    resolution: '3840×2160',
    brightness: 1000,
    touch: 'None',
    features: ['8M color', 'AC220V', 'DVI+DP+HDMI+VGA', 'Plastic housing'],
    isNew: false
  },
  // Large Surgical/Endoscope Displays
  {
    id: 'ms8320p',
    model: 'MS8320P',
    category: 'endoscope',
    application: 'Endoscope',
    size: '31.5"',
    resolution: '3840×2160',
    brightness: 1000,
    touch: '3A Glass',
    features: ['Optical bonding', 'DC24V', '3G SDI(in/out)+DVI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: true
  },
  {
    id: 'ms8320t',
    model: 'MS8320T',
    category: 'surgical',
    application: 'Surgical Robot',
    size: '31.5"',
    resolution: '3840×2160',
    brightness: 1000,
    touch: 'Touch',
    features: ['Optical bonding', 'DC24V', '3G SDI(in/out)+DVI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: true
  },
  {
    id: 'ms8321p-s1',
    model: 'MS8321P-S1',
    category: 'surgical',
    application: 'Surgical Robot',
    size: '31.5"',
    resolution: '3840×2160',
    brightness: 600,
    touch: '3A Glass',
    features: ['Optical bonding', 'DC24V', '12G SDI(in/out)+DP+HDMI', 'Plastic housing'],
    isNew: true
  },
  // Large Display
  {
    id: 'ms8550p',
    model: 'MS8550P',
    category: 'endoscope',
    application: 'Endoscope',
    size: '55"',
    resolution: '3840×2160',
    brightness: 700,
    touch: '3A Glass',
    features: ['Optical bonding', 'AC220V', '12G SDI(in/out)+DP+HDMI', 'Metal housing'],
    isNew: true
  }
];

// Display categories for UI
export const displayCategories = {
  diagnostic: {
    nameRu: 'Радиологические дисплеи',
    nameEn: 'Radiology Displays',
    descRu: 'Для диагностики и просмотра медицинских изображений',
    descEn: 'For diagnostics and medical image viewing'
  },
  surgical: {
    nameRu: 'Хирургические дисплеи',
    nameEn: 'Surgical Displays',
    descRu: 'Для операционных и хирургических роботов',
    descEn: 'For operating rooms and surgical robots'
  },
  endoscope: {
    nameRu: 'Эндоскопические дисплеи',
    nameEn: 'Endoscope Displays',
    descRu: 'Для эндоскопии и малоинвазивной хирургии',
    descEn: 'For endoscopy and minimally invasive surgery'
  },
  clinical: {
    nameRu: 'Клинические дисплеи',
    nameEn: 'Clinical Displays',
    descRu: 'Для рабочих станций и контроля',
    descEn: 'For workstations and control'
  }
};

// Get display category name based on language
export const getDisplayCategoryName = (category: string, language: 'ru' | 'en'): string => {
  const cat = displayCategories[category as keyof typeof displayCategories];
  return language === 'ru' ? cat?.nameRu : cat?.nameEn;
};

export const getDisplayCategoryDesc = (category: string, language: 'ru' | 'en'): string => {
  const cat = displayCategories[category as keyof typeof displayCategories];
  return language === 'ru' ? cat?.descRu : cat?.descEn;
};
