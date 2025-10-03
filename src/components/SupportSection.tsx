import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Wrench } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import { useLanguage } from "@/contexts/LanguageContext";

const SupportSection = () => {
  const { t } = useLanguage();
  
  const supportOptions = [
    {
      icon: Phone,
      title: t('support.hotline.title'),
      subtitle: t('support.hotline.subtitle'),
      description: t('support.hotline.description'),
      contact: t('support.hotline.contact'),
      action: t('support.hotline.action'),
      actionType: "phone" as const,
      iconColor: "text-green-500",
    },
    {
      icon: MessageCircle,
      title: t('support.consultation.title'),
      subtitle: t('support.consultation.subtitle'),
      description: t('support.consultation.description'),
      contact: t('support.consultation.contact'),
      action: t('support.consultation.action'),
      actionType: "quote" as const,
      iconColor: "text-blue-500",
    },
    {
      icon: Wrench,
      title: t('support.technical.title'),
      subtitle: t('support.technical.subtitle'),
      description: t('support.technical.description'),
      contact: t('support.technical.contact'),
      action: t('support.technical.action'),
      actionType: "support" as const,
      iconColor: "text-purple-500",
    }
  ];

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {t('support.badge')}
          </Badge>
          <h2 className="section-title text-foreground mb-6">
            {t('support.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('support.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card 
              key={option.title}
              className="corporate-shadow animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className={`h-8 w-8 ${option.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-accent font-medium mb-4">{option.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <div className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-foreground">{option.contact}</p>
                  </div>
                  
                  {option.actionType === "phone" && (
                    <Button 
                      className="w-full bg-accent hover:bg-accent-light"
                      onClick={() => window.open('tel:+79284593800')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {option.action}
                    </Button>
                  )}
                  
                  {option.actionType === "quote" && (
                    <QuoteModal>
                      <Button className="w-full bg-accent hover:bg-accent-light">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {option.action}
                      </Button>
                    </QuoteModal>
                  )}
                  
                  {option.actionType === "support" && (
                    <Button 
                      className="w-full bg-accent hover:bg-accent-light"
                      onClick={() => window.open('mailto:support@xelon-technology.ru')}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      {option.action}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <p className="text-muted-foreground">{t('support.stat1')}</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <div className="text-3xl font-bold text-accent mb-2">&lt;1ч</div>
            <p className="text-muted-foreground">{t('support.stat2')}</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <div className="text-3xl font-bold text-accent mb-2">99%</div>
            <p className="text-muted-foreground">{t('support.stat3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
