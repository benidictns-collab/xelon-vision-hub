import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: t('footer.products'),
      links: language === 'ru' 
        ? [
            { name: "Медицинские детекторы", href: "/products" },
            { name: "Промышленные решения", href: "/products" },
            { name: "ПО с ИИ", href: "/software" },
            { name: "Медицинские дисплеи", href: "/products" },
            { name: "Спец. дисплеи", href: "/products" }
          ]
        : [
            { name: "Medical detectors", href: "/products" },
            { name: "Industrial solutions", href: "/products" },
            { name: "AI Software", href: "/software" },
            { name: "Medical displays", href: "/products" },
            { name: "Spec. displays", href: "/products" }
          ]
    },
    {
      title: t('footer.company'),
      links: language === 'ru' 
        ? [
            { name: t('footer.about'), href: "/about" },
            { name: t('footer.history'), href: "/about" },
            { name: t('footer.team'), href: "/about" },
            { name: t('footer.careers'), href: "/about" },
            { name: t('footer.certificates'), href: "/about" }
          ]
        : [
            { name: t('footer.about'), href: "/about" },
            { name: t('footer.history'), href: "/about" },
            { name: t('footer.team'), href: "/about" },
            { name: t('footer.careers'), href: "/about" },
            { name: t('footer.certificates'), href: "/about" }
          ]
    },
    {
      title: t('footer.support'),
      links: language === 'ru' 
        ? [
            { name: t('footer.knowledge'), href: "/support" },
            { name: t('footer.docs'), href: "/support" },
            { name: "SDK и API", href: "/software" },
            { name: t('footer.training'), href: "/support" },
            { name: t('footer.warranty'), href: "/support" }
          ]
        : [
            { name: t('footer.knowledge'), href: "/support" },
            { name: t('footer.docs'), href: "/support" },
            { name: "SDK & API", href: "/software" },
            { name: t('footer.training'), href: "/support" },
            { name: t('footer.warranty'), href: "/support" }
          ]
    },
    {
      title: language === 'ru' ? "Медиа" : "Media",
      links: language === 'ru' 
        ? [
            { name: t('footer.news'), href: "/news" },
            { name: "Пресс-релизы", href: "/news" },
            { name: "Видео", href: "/news" },
            { name: "Кейсы ИИ", href: "/news" },
            { name: "Блог", href: "/news" }
          ]
        : [
            { name: t('footer.news'), href: "/news" },
            { name: "Press releases", href: "/news" },
            { name: "Video", href: "/news" },
            { name: "AI Case studies", href: "/news" },
            { name: "Blog", href: "/news" }
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
              {t('footer.description')}
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
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-white/70 hover:text-white fast-transition text-sm"
                    >
                      {link.name}
                    </Link>
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
              <h3 className="text-xl font-semibold mb-2">{t('footer.newsletterTitle')}</h3>
              <p className="text-white/70">
                {t('footer.newsletterDesc')}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder={t('footer.emailPlaceholder')}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent"
                />
              </div>
              <Button className="bg-accent hover:bg-accent-light">
                {t('footer.subscribe')}
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
            <span>© 2025 ООО «КСEЛОН». {t('footer.rights')}.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white fast-transition">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-white fast-transition">{t('footer.terms')}</a>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-white/60 hover:text-white hover:bg-white/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            {t('footer.scrollTop')}
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