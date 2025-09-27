import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Youtube, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Продукция",
      links: [
        "Медицинские детекторы",
        "Промышленные решения",
        "Спецвизуализация",
        "Запчасти и аксессуары",
        "Программное обеспечение"
      ]
    },
    {
      title: "Компания",
      links: [
        "О нас",
        "История",
        "Команда",
        "Карьера",
        "Сертификаты"
      ]
    },
    {
      title: "Поддержка",
      links: [
        "База знаний",
        "Документация",
        "Техподдержка",
        "Обучение",
        "Гарантия"
      ]
    },
    {
      title: "Медиа",
      links: [
        "Новости",
        "Пресс-релизы",
        "Видео",
        "Отзывы клиентов",
        "Кейсы"
      ]
    }
  ];

  return (
    <footer className="bg-primary text-white relative">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="КСEЛОН" className="h-8 brightness-0 invert" />
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Мировой лидер в производстве цифровых плоскопанельных детекторов 
              для медицинской, промышленной и специализированной визуализации.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+7 (928) 459-38-00</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@xelon-technology.ru</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Ростов-на-Дону, Россия</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white fast-transition text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Новости и обновления</h3>
              <p className="text-white/70">
                Подпишитесь на рассылку, чтобы первыми узнавать о новых продуктах и технологиях
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent"
                />
              </div>
              <Button className="bg-accent hover:bg-accent-light">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/70">
            <span>© 2025 ООО «КСEЛОН». Все права защищены.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white fast-transition">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white fast-transition">Условия использования</a>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-white/60 hover:text-white hover:bg-white/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Наверх
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-light/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;