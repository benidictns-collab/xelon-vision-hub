import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "ФИО обязательно").max(100, "ФИО должно быть короче 100 символов"),
  company: z.string().trim().max(200, "Название компании должно быть короче 200 символов"),
  phone: z.string().trim().min(1, "Телефон обязателен").max(20, "Телефон должен быть короче 20 символов"),
  email: z.string().trim().email("Неверный формат email").max(255, "Email должен быть короче 255 символов"),
  message: z.string().trim().min(1, "Текст запроса обязателен").max(1000, "Текст запроса должен быть короче 1000 символов")
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteModalProps {
  children: React.ReactNode;
}

const QuoteModal = ({ children }: QuoteModalProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

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
        title: t('quoteModal.validationError'),
        description: t('quoteModal.validationErrorDesc'),
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
- ФИО: ${formData.name}
- Компания: ${formData.company || 'Не указана'}
- Телефон: ${formData.phone}
- Email: ${formData.email}

Текст запроса:
${formData.message}

Дата запроса: ${new Date().toLocaleDateString('ru-RU')}
      `.trim();

      // Создаем mailto ссылку
      const mailtoLink = `mailto:sale@xelon-technology.ru?subject=${encodeURIComponent(
        `Запрос КП от ${formData.name}`
      )}&body=${encodeURIComponent(emailBody)}`;

      // Открываем почтовый клиент
      window.location.href = mailtoLink;

      // Показываем уведомление об успехе
      toast({
        title: t('quoteModal.successTitle'),
        description: t('quoteModal.successDesc')
      });

      // Очищаем форму и закрываем модальное окно
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: ""
      });
      setOpen(false);
      
    } catch (error) {
      console.error('Error submitting quote request:', error);
      toast({
        title: t('quoteModal.errorTitle'),
        description: t('quoteModal.errorDesc'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-accent" />
            <span>{t('quoteModal.title')}</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">
              {t('quoteModal.name')} {t('quoteModal.required')}
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder={t('quoteModal.namePlaceholder')}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="company" className="text-sm font-medium">
              {t('quoteModal.company')}
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder={t('quoteModal.companyPlaceholder')}
              className={errors.company ? "border-destructive" : ""}
            />
            {errors.company && (
              <p className="text-sm text-destructive mt-1">{errors.company}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              {t('quoteModal.phone')} {t('quoteModal.required')}
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder={t('quoteModal.phonePlaceholder')}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              {t('quoteModal.email')} {t('quoteModal.required')}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={t('quoteModal.emailPlaceholder')}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">
              {t('quoteModal.message')} {t('quoteModal.required')}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={t('quoteModal.messagePlaceholder')}
              rows={3}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent-light"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('quoteModal.submitting') : t('quoteModal.submit')}
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;