import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { useLanguage } from "@/contexts/LanguageContext";

const Contacts = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white">
              {t('contacts.badge')}
            </Badge>
            <h1 className="section-title mb-6">{t('contacts.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('contacts.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="corporate-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">{t('contacts.sendMessage')}</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contacts.name')} *</label>
                      <Input placeholder={t('contacts.name')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contacts.company')}</label>
                      <Input placeholder={t('contacts.company')} />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contacts.email')} *</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contacts.phone')}</label>
                      <Input placeholder="+7 (xxx) xxx-xx-xx" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contacts.message')} *</label>
                    <Textarea 
                      placeholder={t('contacts.messagePlaceholder')}
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-light">
                    {t('contacts.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6 animate-fade-in-up delay-200">
              <Card className="corporate-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{t('contacts.headOffice')}</h3>
                      <p className="text-muted-foreground">
                        344006, г. Ростов-на-Дону<br/>
                        ул. Обороны, д. 49<br/>
                        Технопарк Бештау
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="corporate-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{t('contacts.phones')}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>+7 (928) 459-38-00 ({t('contacts.general')})</p>
                        <p>+7 (928) 459-38-00 ({t('contacts.sales')})</p>
                        <p>+7 (928) 459-38-00 ({t('contacts.supportPhone')})</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="corporate-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{t('contacts.email')}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>info@xelon-technology.ru</p>
                        <p>sales@xelon-technology.ru</p>
                        <p>support@xelon-technology.ru</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="corporate-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{t('contacts.workingHours')}</h3>
                      <div className="space-y-1 text-muted-foreground text-sm">
                        <p>{t('contacts.mondayFriday')}</p>
                        <p>{t('contacts.weekend')}</p>
                        <p className="text-accent font-medium">{t('contacts.support247')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <QuoteRequestForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;