import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, MessageCircle, Phone, Mail, Download, Users, Clock, Shield } from "lucide-react";

const Support = () => {
  const supportTypes = [
    {
      icon: MessageCircle,
      title: "Техническая поддержка",
      description: "Помощь в настройке, эксплуатации и обслуживании оборудования",
      response: "24 часа",
      availability: "24/7"
    },
    {
      icon: BookOpen,
      title: "База знаний",
      description: "Документация, руководства и часто задаваемые вопросы",
      response: "Мгновенно",
      availability: "24/7"
    },
    {
      icon: Users,
      title: "Обучение персонала",
      description: "Программы подготовки операторов и инженеров",
      response: "7 дней",
      availability: "По расписанию"
    },
    {
      icon: Shield,
      title: "Гарантийное обслуживание",
      description: "Полная гарантия на все компоненты и программное обеспечение",
      response: "48 часов",
      availability: "Рабочее время"
    }
  ];

  const faqData = [
    {
      question: "Какая гарантия предоставляется на детекторы?",
      answer: "Мы предоставляем 2-летнюю гарантию на все цифровые детекторы, включая замену компонентов и программные обновления. Расширенная гарантия до 5 лет доступна по запросу."
    },
    {
      question: "Как происходит интеграция с существующим оборудованием?",
      answer: "Наши детекторы совместимы с большинством рентгеновских аппаратов. Мы предоставляем полный комплект для интеграции и техническую поддержку на всех этапах установки."
    },
    {
      question: "Доступна ли техническая поддержка на английском языке?",
      answer: "Да, наша служба технической поддержки работает на русском и английском языках. Также доступна поддержка на китайском языке для азиатских клиентов."
    },
    {
      question: "Можно ли получить демо-версию программного обеспечения?",
      answer: "Демо-версия нашего ПО доступна для скачивания на 30 дней. Для получения полнофункциональной версии обратитесь к нашим специалистам."
    },
    {
      question: "Как происходит калибровка детекторов?",
      answer: "Калибровка выполняется при установке и регулярно в процессе эксплуатации. Мы предоставляем специальные фантомы и ПО для автоматической калибровки."
    },
    {
      question: "Доступны ли запчасти для детекторов старых моделей?",
      answer: "Мы поддерживаем все модели детекторов в течение 10 лет после снятия с производства. Критически важные компоненты всегда в наличии."
    }
  ];

  const downloads = [
    { name: "Руководство пользователя XELON-RF", size: "15 MB", type: "PDF" },
    { name: "Инструкция по установке", size: "8 MB", type: "PDF" },
    { name: "Драйверы для Windows 11", size: "45 MB", type: "EXE" },
    { name: "SDK для разработчиков", size: "120 MB", type: "ZIP" },
    { name: "Белая книга по технологиям ЦПД", size: "25 MB", type: "PDF" },
    { name: "Сертификаты соответствия", size: "3 MB", type: "PDF" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white">
              Техническая поддержка
            </Badge>
            <h1 className="section-title mb-6">
              Всегда готовы помочь
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Круглосуточная поддержка, обучение персонала и полная документация 
              для эффективной работы с нашим оборудованием
            </p>
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title mb-6">Виды поддержки</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Комплексная поддержка на всех этапах - от установки до сервисного обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTypes.map((type, index) => (
              <Card 
                key={type.title}
                className="hover-lift corporate-shadow animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h3 className="font-bold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ответ:</span>
                      <span className="font-medium text-accent">{type.response}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доступность:</span>
                      <span className="font-medium">{type.availability}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="section-title mb-6">Обратиться в поддержку</h2>
              <p className="text-lg text-muted-foreground">
                Опишите вашу проблему, и мы свяжемся с вами в кратчайшие сроки
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="corporate-shadow animate-fade-in-up">
                <CardContent className="p-8">
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
                      <label className="block text-sm font-medium mb-2">Модель оборудования</label>
                      <Input placeholder="XELON-RF, XELON-MAMMO и т.д." />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Описание проблемы *</label>
                      <Textarea 
                        placeholder="Подробно опишите вашу проблему или вопрос..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-light">
                      Отправить запрос
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6 animate-fade-in-up delay-300">
                <Card className="corporate-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Горячая линия</h3>
                        <p className="text-muted-foreground">24/7 техподдержка</p>
                      </div>
                    </div>
                    <p className="text-lg font-mono">+7 (495) 123-45-67</p>
                  </CardContent>
                </Card>

                <Card className="corporate-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email поддержка</h3>
                        <p className="text-muted-foreground">Ответ в течение 4 часов</p>
                      </div>
                    </div>
                    <p className="text-lg">support@xelon.ru</p>
                    <p className="text-lg">support@xelon-technology.ru</p>
                  </CardContent>
                </Card>

                <Card className="corporate-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Время работы</h3>
                        <p className="text-muted-foreground">Московское время</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p>Пн-Пт: 9:00 - 18:00</p>
                      <p>Сб-Вс: 10:00 - 16:00</p>
                      <p className="text-accent font-medium">Аварийная поддержка: 24/7</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="section-title mb-6">Часто задаваемые вопросы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на самые популярные вопросы наших клиентов
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full animate-fade-in-up">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Support;