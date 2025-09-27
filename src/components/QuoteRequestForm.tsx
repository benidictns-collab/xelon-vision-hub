import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Building, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Имя обязательно").max(100, "Имя должно быть короче 100 символов"),
  email: z.string().trim().email("Неверный формат email").max(255, "Email должен быть короче 255 символов"),
  phone: z.string().trim().min(1, "Телефон обязателен").max(20, "Телефон должен быть короче 20 символов"),
  company: z.string().trim().max(200, "Название компании должно быть короче 200 символов"),
  productType: z.string().min(1, "Выберите тип продукта"),
  quantity: z.string().min(1, "Укажите количество"),
  specifications: z.string().trim().max(2000, "Технические требования должны быть короче 2000 символов"),
  comments: z.string().trim().max(1000, "Комментарии должны быть короче 1000 символов")
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteRequestForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    quantity: "",
    specifications: "",
    comments: ""
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const productTypes = [
    "Медицинские детекторы",
    "Промышленные детекторы", 
    "Детекторы для научных исследований",
    "Портативные решения",
    "Программное обеспечение",
    "Запчасти и аксессуары",
    "Комплексное решение"
  ];

  const handleInputChange = (field: keyof QuoteFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    try {
      quoteSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof QuoteFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Ошибка валидации",
        description: "Пожалуйста, исправьте ошибки в форме",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Формируем текст письма
      const emailBody = `
Запрос коммерческого предложения от ${formData.name}

Контактная информация:
- Имя: ${formData.name}
- Email: ${formData.email}
- Телефон: ${formData.phone}
- Компания: ${formData.company || 'Не указана'}

Детали запроса:
- Тип продукта: ${formData.productType}
- Количество: ${formData.quantity}
- Технические требования: ${formData.specifications || 'Не указаны'}
- Дополнительные комментарии: ${formData.comments || 'Нет'}

Дата запроса: ${new Date().toLocaleDateString('ru-RU')}
      `.trim();

      // Создаем mailto ссылку
      const mailtoLink = `mailto:sales@xelon-technology.ru?subject=${encodeURIComponent(
        `Запрос КП - ${formData.productType} от ${formData.name}`
      )}&body=${encodeURIComponent(emailBody)}`;

      // Открываем почтовый клиент
      window.location.href = mailtoLink;

      // Показываем уведомление об успехе
      toast({
        title: "Запрос отправлен",
        description: "Ваш запрос на коммерческое предложение направлен нашему отделу продаж. Мы свяжемся с вами в течение 24 часов."
      });

      // Очищаем форму
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productType: "",
        quantity: "",
        specifications: "",
        comments: ""
      });
      
    } catch (error) {
      console.error('Error submitting quote request:', error);
      toast({
        title: "Ошибка отправки",
        description: "Не удалось отправить запрос. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="corporate-shadow">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Запрос коммерческого предложения</h2>
              <p className="text-muted-foreground">Получите персональное предложение на наши продукты</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Контактная информация */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                Имя *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Ваше имя"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="company" className="text-sm font-medium">
                Компания
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Название компании"
                className={errors.company ? "border-destructive" : ""}
              />
              {errors.company && (
                <p className="text-sm text-destructive mt-1">{errors.company}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-sm font-medium">
                Телефон *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+7 (xxx) xxx-xx-xx"
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Информация о продукте */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="productType" className="text-sm font-medium">
                Тип продукта *
              </Label>
              <Select value={formData.productType} onValueChange={(value) => handleInputChange('productType', value)}>
                <SelectTrigger className={errors.productType ? "border-destructive" : ""}>
                  <SelectValue placeholder="Выберите тип продукта" />
                </SelectTrigger>
                <SelectContent>
                  {productTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.productType && (
                <p className="text-sm text-destructive mt-1">{errors.productType}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="quantity" className="text-sm font-medium">
                Количество *
              </Label>
              <Input
                id="quantity"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
                placeholder="Например: 5 шт, 1 комплект"
                className={errors.quantity ? "border-destructive" : ""}
              />
              {errors.quantity && (
                <p className="text-sm text-destructive mt-1">{errors.quantity}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="specifications" className="text-sm font-medium">
              Технические требования
            </Label>
            <Textarea
              id="specifications"
              value={formData.specifications}
              onChange={(e) => handleInputChange('specifications', e.target.value)}
              placeholder="Опишите ваши технические требования, размеры детекторов, условия эксплуатации..."
              rows={4}
              className={errors.specifications ? "border-destructive" : ""}
            />
            {errors.specifications && (
              <p className="text-sm text-destructive mt-1">{errors.specifications}</p>
            )}
          </div>

          <div>
            <Label htmlFor="comments" className="text-sm font-medium">
              Дополнительные комментарии
            </Label>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => handleInputChange('comments', e.target.value)}
              placeholder="Сроки поставки, особые условия, дополнительные вопросы..."
              rows={3}
              className={errors.comments ? "border-destructive" : ""}
            />
            {errors.comments && (
              <p className="text-sm text-destructive mt-1">{errors.comments}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              type="submit" 
              size="lg" 
              className="flex-1 bg-accent hover:bg-accent-light"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить запрос КП"}
              <Mail className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              type="button"
              variant="outline" 
              size="lg"
              onClick={() => window.open('tel:+79284593800')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Позвонить
            </Button>
          </div>

          <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
            <strong>Что происходит после отправки:</strong>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Наш менеджер свяжется с вами в течение 24 часов</li>
              <li>Проведем техническую консультацию по вашим требованиям</li>
              <li>Подготовим персональное коммерческое предложение</li>
              <li>Организуем демонстрацию оборудования при необходимости</li>
            </ul>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteRequestForm;