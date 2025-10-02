import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    const translations = language === "ru" ? translationsRu : translationsEn;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translationsRu: Record<string, string> = {
  // Navigation
  "nav.about": "О компании",
  "nav.products": "Продукция",
  "nav.solutions": "Решения",
  "nav.support": "Поддержка",
  "nav.news": "Новости",
  "nav.contacts": "Контакты",
  "nav.quote": "Запросить КП",
  
  // Hero Section
  "hero.title": "Цифровые плоскопанельные детекторы для медицинской, производственной и специализированной визуализации",
  "hero.subtitle": "Передовые решения для рентгеновской диагностики с высоким разрешением и надежностью",
  "hero.cta.products": "Продукция",
  "hero.cta.technology": "О технологии",
  
  // Advantages Section
  "advantages.title": "Преимущества наших детекторов",
  "advantages.subtitle": "Инновационные технологии для точной диагностики",
  "advantages.resolution.title": "Высокое разрешение",
  "advantages.resolution.desc": "Детальная визуализация с разрешением до 200 мкм",
  "advantages.speed.title": "Быстрая обработка",
  "advantages.speed.desc": "Мгновенное получение изображений в реальном времени",
  "advantages.reliability.title": "Надежность",
  "advantages.reliability.desc": "Проверенная временем технология с длительным сроком службы",
  "advantages.integration.title": "Легкая интеграция",
  "advantages.integration.desc": "Совместимость с существующим оборудованием",
  
  // Industries Section
  "industries.title": "Отрасли применения",
  "industries.subtitle": "Решения для различных сфер деятельности",
  "industries.medical.title": "Медицинская диагностика",
  "industries.medical.desc": "Рентгенография, флюорография, маммография",
  "industries.industrial.title": "Промышленный контроль",
  "industries.industrial.desc": "Неразрушающий контроль качества продукции",
  "industries.research.title": "Научные исследования",
  "industries.research.desc": "Высокоточная визуализация для лабораторий",
  "industries.cta": "Узнать больше",
  
  // Support Section
  "support.title": "Техническая поддержка",
  "support.subtitle": "Мы всегда готовы помочь вам",
  "support.description": "Наша команда специалистов обеспечивает круглосуточную техническую поддержку, обучение персонала и сервисное обслуживание оборудования.",
  "support.cta": "Связаться с нами",
  
  // Footer
  "footer.company": "Компания",
  "footer.about": "О нас",
  "footer.history": "История",
  "footer.team": "Команда",
  "footer.careers": "Карьера",
  "footer.certificates": "Сертификаты",
  "footer.products": "Продукция",
  "footer.support": "Поддержка",
  "footer.support.kb": "База знаний",
  "footer.support.docs": "Документация",
  "footer.support.training": "Обучение",
  "footer.support.warranty": "Гарантия",
  "footer.contacts": "Контакты",
  "footer.rights": "Все права защищены",
};

const translationsEn: Record<string, string> = {
  // Navigation
  "nav.about": "About",
  "nav.products": "Products",
  "nav.solutions": "Solutions",
  "nav.support": "Support",
  "nav.news": "News",
  "nav.contacts": "Contacts",
  "nav.quote": "Request Quote",
  
  // Hero Section
  "hero.title": "Digital Flat Panel Detectors for Medical, Industrial and Specialized Imaging",
  "hero.subtitle": "Advanced solutions for X-ray diagnostics with high resolution and reliability",
  "hero.cta.products": "Products",
  "hero.cta.technology": "About Technology",
  
  // Advantages Section
  "advantages.title": "Our Detector Advantages",
  "advantages.subtitle": "Innovative technologies for accurate diagnostics",
  "advantages.resolution.title": "High Resolution",
  "advantages.resolution.desc": "Detailed visualization with resolution up to 200 μm",
  "advantages.speed.title": "Fast Processing",
  "advantages.speed.desc": "Instant real-time image acquisition",
  "advantages.reliability.title": "Reliability",
  "advantages.reliability.desc": "Time-tested technology with long service life",
  "advantages.integration.title": "Easy Integration",
  "advantages.integration.desc": "Compatible with existing equipment",
  
  // Industries Section
  "industries.title": "Application Industries",
  "industries.subtitle": "Solutions for various fields of activity",
  "industries.medical.title": "Medical Diagnostics",
  "industries.medical.desc": "Radiography, fluorography, mammography",
  "industries.industrial.title": "Industrial Control",
  "industries.industrial.desc": "Non-destructive quality control",
  "industries.research.title": "Scientific Research",
  "industries.research.desc": "High-precision imaging for laboratories",
  "industries.cta": "Learn More",
  
  // Support Section
  "support.title": "Technical Support",
  "support.subtitle": "We are always ready to help you",
  "support.description": "Our team of specialists provides 24/7 technical support, staff training and equipment maintenance.",
  "support.cta": "Contact Us",
  
  // Footer
  "footer.company": "Company",
  "footer.about": "About Us",
  "footer.history": "History",
  "footer.team": "Team",
  "footer.careers": "Careers",
  "footer.certificates": "Certificates",
  "footer.products": "Products",
  "footer.support": "Support",
  "footer.support.kb": "Knowledge Base",
  "footer.support.docs": "Documentation",
  "footer.support.training": "Training",
  "footer.support.warranty": "Warranty",
  "footer.contacts": "Contacts",
  "footer.rights": "All rights reserved",
};
