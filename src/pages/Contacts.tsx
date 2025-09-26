import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white">
              Контакты
            </Badge>
            <h1 className="section-title mb-6">Свяжитесь с нами</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Готовы ответить на ваши вопросы и обсудить возможности сотрудничества
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
                <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Компания</label>
                      <Input placeholder="Название компании" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (xxx) xxx-xx-xx" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение *</label>
                    <Textarea 
                      placeholder="Расскажите о ваших потребностях..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-light">
                    Отправить сообщение
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
                      <h3 className="font-semibold mb-2">Головной офис</h3>
                      <p className="text-muted-foreground">
                        344006, г. Ростов-на-Дону<br/>
                        ул. Обороны, д. 49,<br/>
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
                      <h3 className="font-semibold mb-2">Телефоны</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>+7 (928) 459-38-00 (общий)</p>
                        <p>+7 (965) 477-59-39 (поддержка)</p>
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
                      <h3 className="font-semibold mb-2">Email</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>info@xelon.ru</p>
                        <p>sales@xelon.ru</p>
                        <p>support@xelon.ru</p>
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
                      <h3 className="font-semibold mb-2">Время работы</h3>
                      <div className="space-y-1 text-muted-foreground text-sm">
                        <p>Пн-Пт: 9:00 - 18:00 МСК</p>
                        <p>Сб-Вс: выходные</p>
                        <p className="text-accent font-medium">Техподдержка: 24/7</p>
                      </div>
                    </div>
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

export default Contacts;
