import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Share2, Download } from "lucide-react";
import { toast } from "sonner";
import logoImage from "@/assets/logo.png";

const NewsDetail = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();

  const newsData: Record<string, any> = {
    "1": {
      id: 1,
      title: "КСЕЛОН будет строить завод цифровых детекторов в Технопарке \"БЕШТАУ\"",
      excerpt: "На международной выставке «Иннопром-2025» в Екатеринбурге подписано соглашение о строительстве производства цифровых плоскопанельных детекторов нового поколения",
      date: "2025-09-25",
      author: "Пресс-служба КСEЛОН",
      category: "Бизнес",
      image: "/api/placeholder/400/250",
      featured: true,
      fullContent: [
        {
          type: "paragraph",
          content: "На международной выставке «Иннопром-2025» в Екатеринбурге компания ООО «КСЕЛОН» подписала соглашение о реализации масштабного проекта по строительству производства цифровых плоскопанельных детекторов нового поколения в Технопарке \"Бештау\" на территории Ставропольского края."
        },
        {
          type: "heading",
          content: "О проекте"
        },
        {
          type: "paragraph",
          content: "КСЕЛОН получил статус резидента Технопарка \"Бештау\", что открывает новые возможности для развития высокотехнологичного производства в регионе. Проект предусматривает создание современного производственного комплекса, оснащенного передовым оборудованием и технологиями."
        },
        {
          type: "paragraph",
          content: "Цифровые плоскопанельные детекторы КСЕЛОН найдут применение в медицинской диагностике и промышленном неразрушающем контроле. Продукция будет соответствовать самым высоким международным стандартам качества и безопасности."
        },
        {
          type: "heading",
          content: "Импортозамещение и локализация"
        },
        {
          type: "paragraph",
          content: "Компания планирует постепенно переходить на отечественные компоненты, чтобы к 2030 году полностью локализовать производство. Это позволит обеспечить технологическую независимость России в критически важной отрасли медицинской техники и промышленного оборудования."
        },
        {
          type: "quote",
          content: "Создание производства цифровых детекторов на территории России - это стратегически важный шаг для обеспечения технологического суверенитета нашей страны. Мы уверены, что продукция КСЕЛОН будет конкурентоспособной как на российском, так и на международном рынках.",
          author: "Генеральный директор КСЕЛОН"
        },
        {
          type: "heading",
          content: "Инвестиции и создание рабочих мест"
        },
        {
          type: "paragraph",
          content: "Общий объем инвестиций в проект составит более 2,5 млрд рублей. Реализация проекта приведет к созданию более 250 высококвалифицированных рабочих мест в регионе, включая инженеров, технологов, специалистов по качеству и научных сотрудников."
        },
        {
          type: "list",
          items: [
            "Инвестиции: более 2,5 млрд рублей",
            "Рабочие места: более 250 специалистов",
            "Срок реализации: 2025-2030 годы",
            "Локализация: 70% к 2027 году, 100% к 2030 году",
            "Производственная мощность: до 5000 детекторов в год"
          ]
        },
        {
          type: "heading",
          content: "Поддержка государства"
        },
        {
          type: "paragraph",
          content: "Проект получил поддержку федеральных и региональных властей в рамках программы развития электронной промышленности и импортозамещения. Технопарк \"Бештау\" предоставит необходимую инфраструктуру и налоговые преференции для успешной реализации проекта."
        },
        {
          type: "paragraph",
          content: "Запуск серийного производства запланирован на март 2027 года. Первая продукция будет поставлена медицинским учреждениям и промышленным предприятиям России уже в 2027 году."
        }
      ]
    },
    "2": {
      id: 2,
      title: "КСEЛОН получил статус резидента Технопарка Бештау",
      excerpt: "Компания присоединилась к инновационной экосистеме технопарка для развития высокотехнологичного производства",
      date: "2025-08-15",
      author: "Пресс-служба КСEЛОН",
      category: "Бизнес",
      image: "/api/placeholder/400/250",
      featured: false,
      fullContent: [
        {
          type: "paragraph",
          content: "Компания ООО «КСЕЛОН» получила статус резидента Технопарка \"Бештау\", расположенного в Ставропольском крае. Это знаменательное событие открывает новые горизонты для развития производства детекторов XELON XRAY и исследовательской деятельности в области цифровой визуализации."
        },
        {
          type: "heading",
          content: "Преимущества статуса резидента"
        },
        {
          type: "paragraph",
          content: "Статус резидента Технопарка \"Бештау\" предоставляет КСЕЛОН ряд существенных преимуществ, включая доступ к современной инфраструктуре, налоговые льготы, поддержку в привлечении квалифицированных кадров и возможность участия в федеральных программах поддержки высокотехнологичных компаний."
        },
        {
          type: "list",
          items: [
            "Налоговые льготы по налогу на прибыль и на имущество",
            "Доступ к инфраструктуре технопарка",
            "Содействие в получении грантов и субсидий",
            "Доступ к научно-исследовательским центрам",
            "Поддержка в подборе персонала"
          ]
        },
        {
          type: "heading",
          content: "Планы развития"
        },
        {
          type: "paragraph",
          content: "Получение статуса резидента позволит КСЕЛОН значительно ускорить реализацию проекта по строительству завода цифровых детекторов. Компания планирует создать современный R&D-центр для разработки новых поколений детекторов с улучшенными характеристиками."
        },
        {
          type: "quote",
          content: "Технопарк \"Бештау\" предоставляет идеальные условия для развития высокотехнологичного бизнеса. Мы уверены, что это партнерство будет плодотворным и поможет нам достичь амбициозных целей по локализации производства.",
          author: "Директор по развитию КСЕЛОН"
        },
        {
          type: "paragraph",
          content: "Сотрудничество с Технопарком также откроет возможности для кооперации с другими резидентами, работающими в смежных областях электроники и материаловедения, что создаст синергетический эффект для всей отрасли."
        }
      ]
    },
    "3": {
      id: 3,
      title: "Запуск серийного производства детекторов XELON XRAY",
      excerpt: "Планируется запуск серийного производства 01.03.2027",
      date: "2025-07-20",
      author: "Производственный департамент",
      category: "Продукты",
      image: "/api/placeholder/400/250",
      featured: false,
      fullContent: [
        {
          type: "paragraph",
          content: "Компания КСЕЛОН объявляет о планах запуска серийного производства цифровых плоскопанельных детекторов XELON XRAY. Начало серийного производства намечено на 1 марта 2027 года на новом производственном комплексе в Технопарке \"Бештау\"."
        },
        {
          type: "heading",
          content: "О продукции XELON XRAY"
        },
        {
          type: "paragraph",
          content: "Детекторы XELON XRAY представляют собой продукцию нового поколения, созданную с использованием передовых российских и международных технологий. Они обеспечивают высочайшее качество изображения при минимальной дозе облучения, что делает их идеальным решением для медицинских и промышленных применений."
        },
        {
          type: "heading",
          content: "Технические характеристики"
        },
        {
          type: "list",
          items: [
            "Разрешение: до 200 мкм",
            "Размеры панели: от 17×17 до 43×43 см",
            "Частота кадров: до 30 fps",
            "Динамический диапазон: 14 бит",
            "Время готовности к работе: менее 30 секунд",
            "Срок службы: более 10 лет"
          ]
        },
        {
          type: "heading",
          content: "Соответствие стандартам"
        },
        {
          type: "paragraph",
          content: "Все детекторы XELON XRAY полностью соответствуют российским и международным стандартам качества, включая ГОСТ Р, IEC 60601 для медицинского оборудования и стандарты ISO для промышленного неразрушающего контроля."
        },
        {
          type: "paragraph",
          content: "Компания получила сертификаты соответствия и необходимые разрешительные документы для начала производства и реализации продукции на территории России и стран СНГ. Ведется работа по получению европейской сертификации CE Mark."
        },
        {
          type: "heading",
          content: "Целевые рынки"
        },
        {
          type: "paragraph",
          content: "Основными потребителями детекторов XELON XRAY станут медицинские учреждения России и стран СНГ, промышленные предприятия, выполняющие неразрушающий контроль, научно-исследовательские институты и лаборатории."
        },
        {
          type: "quote",
          content: "Запуск серийного производства XELON XRAY - это результат многолетней работы нашей команды инженеров и ученых. Мы создали продукт мирового уровня, который не уступает, а во многом превосходит зарубежные аналоги.",
          author: "Главный конструктор КСЕЛОН"
        },
        {
          type: "paragraph",
          content: "Компания планирует выпускать до 5000 детекторов ежегодно к 2030 году, что позволит существенно снизить зависимость российского рынка от импортных поставок и обеспечить доступность современного оборудования для медицинских учреждений и промышленных предприятий."
        }
      ]
    }
  };

  const newsItem = newsData[newsId || "1"];

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Новость не найдена</h1>
          <Button onClick={() => navigate('/news')} className="bg-accent hover:bg-accent-light">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться к новостям
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        text: newsItem.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Ссылка скопирована в буфер обмена");
    }
  };

  const handleDownload = () => {
    toast.success("Новость сохранена в PDF");
  };

  const renderContent = (item: any) => {
    switch (item.type) {
      case "heading":
        return <h2 className="text-2xl font-bold mb-4 mt-8">{item.content}</h2>;
      case "paragraph":
        return <p className="text-muted-foreground leading-relaxed mb-6">{item.content}</p>;
      case "quote":
        return (
          <div className="border-l-4 border-accent bg-accent/5 p-6 my-6 rounded-r-lg">
            <p className="text-lg italic mb-3">"{item.content}"</p>
            {item.author && (
              <p className="text-sm text-muted-foreground">— {item.author}</p>
            )}
          </div>
        );
      case "list":
        return (
          <ul className="space-y-3 mb-6 ml-6">
            {item.items.map((listItem: string, idx: number) => (
              <li key={idx} className="text-muted-foreground flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>{listItem}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Button 
              variant="ghost" 
              className="mb-6 text-white hover:bg-white/10"
              onClick={() => navigate('/news')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Вернуться к новостям
            </Button>
            
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              {newsItem.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {newsItem.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(newsItem.date).toLocaleDateString('ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{newsItem.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Image */}
            <div className="mb-12 animate-fade-in-up">
              <Card className="overflow-hidden corporate-shadow">
                <div className="h-96 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <img 
                    src={logoImage} 
                    alt="КСЕЛОН логотип" 
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </Card>
            </div>

            {/* Actions Bar */}
            <div className="flex items-center justify-between mb-12 pb-8 border-b animate-fade-in-up">
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleShare}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Поделиться
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleDownload}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Скачать PDF
                </Button>
              </div>
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none animate-fade-in-up">
              {newsItem.fullContent.map((item: any, index: number) => (
                <div key={index}>{renderContent(item)}</div>
              ))}
            </article>

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t">
              <h3 className="text-2xl font-bold mb-8">Читайте также</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.values(newsData)
                  .filter((item: any) => item.id !== newsItem.id)
                  .slice(0, 2)
                  .map((item: any) => (
                    <Card 
                      key={item.id}
                      className="hover-lift corporate-shadow cursor-pointer"
                      onClick={() => navigate(`/news/${item.id}`)}
                    >
                      <div className="h-48 bg-gradient-to-br from-accent/10 to-primary/10"></div>
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3 text-accent border-accent">
                          {item.category}
                        </Badge>
                        <h4 className="font-bold mb-2 line-clamp-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Хотите узнать больше?</h3>
              <p className="text-muted-foreground mb-6">
                Подпишитесь на нашу рассылку и будьте в курсе всех новостей
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light"
                onClick={() => toast.success("Спасибо за подписку!")}
              >
                Подписаться на новости
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
