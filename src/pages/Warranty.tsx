import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Shield, Clock, CheckCircle, Phone, Mail, Search } from "lucide-react";

const Warranty = () => {
  const warrantyPlans = [
    {
      name: "Стандартная гарантия",
      duration: "2 года",
      description: "Базовая гарантия на все детекторы XELON",
      features: [
        "Бесплатный ремонт",
        "Замена дефектных деталей",
        "Техническая поддержка",
        "Удаленная диагностика"
      ],
      color: "border-blue-200",
      badge: "Включена в стоимость"
    },
    {
      name: "Расширенная гарантия",
      duration: "3 года",
      description: "Расширенное покрытие с дополнительными услугами",
      features: [
        "Все возможности стандартной гарантии",
        "Приоритетная поддержка",
        "Профилактическое обслуживание",
        "Обновления программного обеспечения",
        "Выездное обслуживание"
      ],
      color: "border-green-200",
      badge: "Рекомендуется"
    },
    {
      name: "Премиум гарантия",
      duration: "5 лет",
      description: "Максимальная защита для критически важного оборудования",
      features: [
        "Все возможности расширенной гарантии",
        "24/7 техническая поддержка",
        "Замена оборудования в течение 24 часов",
        "Обучение персонала",
        "Персональный менеджер"
      ],
      color: "border-purple-200",
      badge: "Максимальная защита"
    }
  ];

  const serviceSteps = [
    {
      step: "1",
      title: "Обращение",
      description: "Свяжитесь с нами по телефону или email"
    },
    {
      step: "2",
      title: "Диагностика",
      description: "Наши специалисты проведут диагностику проблемы"
    },
    {
      step: "3",
      title: "Решение",
      description: "Выполним ремонт или замену в рамках гарантии"
    },
    {
      step: "4",
      title: "Тестирование",
      description: "Убедимся в корректной работе оборудования"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Гарантия и сервис
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Надежная защита вашего оборудования и профессиональный сервис
          </p>
        </div>
      </section>

      {/* Warranty Check */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Проверить гарантию</h2>
            <p className="text-muted-foreground mb-6">
              Введите серийный номер вашего устройства для проверки гарантийного статуса
            </p>
            <div className="flex space-x-4">
              <Input 
                placeholder="Серийный номер (например: XL-2024-001234)"
                className="flex-1"
              />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Проверить
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Warranty Plans */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Гарантийные планы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {warrantyPlans.map((plan) => (
              <Card key={plan.name} className={`p-6 ${plan.color} relative`}>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {plan.badge}
                  </Badge>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{plan.duration}</div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" variant={plan.name === "Премиум гарантия" ? "default" : "outline"}>
                  {plan.name === "Стандартная гарантия" ? "Активировать" : "Приобрести"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Процесс гарантийного обслуживания</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {serviceSteps.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < serviceSteps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-8 w-full h-0.5 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты службы поддержки</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Горячая линия</h3>
                  <p className="text-muted-foreground">Круглосуточная поддержка</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">24/7</Badge>
                  <span className="font-medium">8-800-555-35-66</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Бесплатно по России</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email поддержка</h3>
                  <p className="text-muted-foreground">Техническая документация</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Ответ в течение 4 часов</Badge>
                </div>
                <div className="text-sm">
                  <span className="font-medium">support@xelon-technology.ru</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ответы на популярные вопросы о гарантии и обслуживании
          </p>
          <Button size="lg" variant="outline">
            Перейти к FAQ
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Warranty;