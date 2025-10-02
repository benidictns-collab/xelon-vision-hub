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
  "hero.badge": "Лидер в производстве ЦПД",
  "hero.visualizing": "Визуализируем",
  "hero.future": "будущее",
  "hero.metrics.factory": "собственный завод",
  "hero.metrics.engineers": "инженеров",
  "hero.metrics.domestic": "отечественных компонентов",
  "hero.features.resolution": "Высокое разрешение",
  "hero.features.resolution.value": "до 200 мкм",
  "hero.features.production": "Российское производство",
  "hero.features.production.value": "полный цикл",
  "hero.new2025": "Новинка 2025",
  "hero.scroll": "Прокрутите вниз",
  
  // Advantages Section
  "advantages.title": "Ключевые преимущества",
  "advantages.subtitle": "Мы предлагаем не просто продукты, а комплексные решения",
  "advantages.badge": "Почему выбирают КСEЛОН",
  "advantages.production.title": "Российское производство",
  "advantages.production.desc": "Полный производственный цикл на территории России",
  "advantages.innovation.title": "Инновации",
  "advantages.innovation.desc": "Собственные НИОКР и патентованные технологии",
  "advantages.quality.title": "Качество",
  "advantages.quality.desc": "Международные сертификаты качества и соответствие стандартам",
  "advantages.support.title": "Глобальная поддержка",
  "advantages.support.desc": "Техническая поддержка и сервис во всех странах СНГ",
  "advantages.stats.engineers": "опытных инженеров",
  "advantages.stats.patents": "патентов",
  "advantages.stats.models": "моделей детекторов",
  "advantages.stats.offices": "офисов",
  
  // Industries Section
  "industries.title": "Решения для любых задач визуализации",
  "industries.subtitle": "Наши цифровые плоскопанельные детекторы применяются в самых требовательных областях",
  "industries.badge": "Отрасли применения",
  "industries.medical.title": "Медицина",
  "industries.medical.subtitle": "Диагностическая визуализация",
  "industries.medical.desc": "Цифровые детекторы для рентгенографии, маммографии, флюорографии",
  "industries.industrial.title": "Промышленность",
  "industries.industrial.subtitle": "Неразрушающий контроль",
  "industries.industrial.desc": "Решения для контроля качества в различных отраслях",
  "industries.scientific.title": "Спецвизуализация",
  "industries.scientific.subtitle": "Научные исследования",
  "industries.scientific.desc": "Высокочувствительные детекторы для научных исследований",
  "industries.cta": "Подробнее о решениях",
  "industries.cta.title": "Не нашли подходящее решение?",
  "industries.cta.desc": "Наши инженеры разработают индивидуальное решение под ваши задачи",
  "industries.cta.consultation": "Получить консультацию",
  "industries.cta.catalog": "Скачать каталог",
  
  // Support Section
  "support.title": "Мы всегда готовы помочь",
  "support.subtitle": "Профессиональная техническая поддержка на всех этапах",
  "support.badge": "Поддержка клиентов",
  "support.hotline.title": "Горячая линия",
  "support.hotline.subtitle": "Круглосуточная поддержка",
  "support.hotline.desc": "Техническая поддержка и консультации по всем вопросам",
  "support.hotline.action": "Позвонить",
  "support.chat.title": "Онлайн консультация",
  "support.chat.subtitle": "Быстрые ответы",
  "support.chat.desc": "Получите персональное коммерческое предложение",
  "support.chat.action": "Написать",
  "support.technical.title": "Техническая поддержка",
  "support.technical.subtitle": "Экспертная помощь",
  "support.technical.desc": "Поддержка по установке, настройке и обслуживанию",
  "support.technical.action": "Связаться",
  "support.stats.247": "Круглосуточная поддержка",
  "support.stats.response": "Время ответа",
  "support.stats.satisfaction": "Удовлетворенность клиентов",
  
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
  "footer.description": "Российский лидер в производстве цифровых плоскопанельных детекторов",
  "footer.newsletter.title": "Новости и обновления",
  "footer.newsletter.desc": "Подпишитесь на рассылку",
  "footer.newsletter.placeholder": "Ваш email",
  "footer.newsletter.button": "Подписаться",
  "footer.privacy": "Политика конфиденциальности",
  "footer.terms": "Условия использования",
  "footer.top": "Наверх",
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
  "hero.badge": "Leader in FPD Manufacturing",
  "hero.visualizing": "Visualizing",
  "hero.future": "the future",
  "hero.metrics.factory": "own factory",
  "hero.metrics.engineers": "engineers",
  "hero.metrics.domestic": "domestic components",
  "hero.features.resolution": "High Resolution",
  "hero.features.resolution.value": "up to 200 μm",
  "hero.features.production": "Russian Production",
  "hero.features.production.value": "full cycle",
  "hero.new2025": "New 2025",
  "hero.scroll": "Scroll down",
  
  // Advantages Section
  "advantages.title": "Key Advantages",
  "advantages.subtitle": "We offer not just products, but comprehensive solutions",
  "advantages.badge": "Why Choose XELON",
  "advantages.production.title": "Russian Production",
  "advantages.production.desc": "Full production cycle in Russia",
  "advantages.innovation.title": "Innovation",
  "advantages.innovation.desc": "Our own R&D and patented technologies",
  "advantages.quality.title": "Quality",
  "advantages.quality.desc": "International quality certificates and compliance with standards",
  "advantages.support.title": "Global Support",
  "advantages.support.desc": "Technical support and service in all CIS countries",
  "advantages.stats.engineers": "experienced engineers",
  "advantages.stats.patents": "patents",
  "advantages.stats.models": "detector models",
  "advantages.stats.offices": "offices",
  
  // Industries Section
  "industries.title": "Solutions for Any Imaging Tasks",
  "industries.subtitle": "Our digital flat panel detectors are used in the most demanding areas",
  "industries.badge": "Application Industries",
  "industries.medical.title": "Medicine",
  "industries.medical.subtitle": "Diagnostic Imaging",
  "industries.medical.desc": "Digital detectors for radiography, mammography, fluorography",
  "industries.industrial.title": "Industry",
  "industries.industrial.subtitle": "Non-Destructive Testing",
  "industries.industrial.desc": "Quality control solutions for various industries",
  "industries.scientific.title": "Special Imaging",
  "industries.scientific.subtitle": "Scientific Research",
  "industries.scientific.desc": "High-sensitivity detectors for scientific research",
  "industries.cta": "Learn More",
  "industries.cta.title": "Can't find the right solution?",
  "industries.cta.desc": "Our engineers will develop a custom solution for your needs",
  "industries.cta.consultation": "Get Consultation",
  "industries.cta.catalog": "Download Catalog",
  
  // Support Section
  "support.title": "We're Always Ready to Help",
  "support.subtitle": "Professional technical support at all stages",
  "support.badge": "Customer Support",
  "support.hotline.title": "Hotline",
  "support.hotline.subtitle": "24/7 Support",
  "support.hotline.desc": "Technical support and consultations on all issues",
  "support.hotline.action": "Call",
  "support.chat.title": "Online Consultation",
  "support.chat.subtitle": "Quick Answers",
  "support.chat.desc": "Get a personalized commercial offer",
  "support.chat.action": "Write",
  "support.technical.title": "Technical Support",
  "support.technical.subtitle": "Expert Help",
  "support.technical.desc": "Support for installation, configuration and maintenance",
  "support.technical.action": "Contact",
  "support.stats.247": "24/7 Support",
  "support.stats.response": "Response Time",
  "support.stats.satisfaction": "Customer Satisfaction",
  
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
  "footer.description": "Russian leader in digital flat panel detector manufacturing",
  "footer.newsletter.title": "News and Updates",
  "footer.newsletter.desc": "Subscribe to our newsletter",
  "footer.newsletter.placeholder": "Your email",
  "footer.newsletter.button": "Subscribe",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Use",
  "footer.top": "Back to Top",
};
