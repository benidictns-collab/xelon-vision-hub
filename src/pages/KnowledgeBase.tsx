import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, FileText, Video, Download } from "lucide-react";

const KnowledgeBase = () => {
  const categories = [
    {
      name: "Руководства пользователя",
      icon: BookOpen,
      count: 15,
      description: "Подробные инструкции по использованию оборудования"
    },
    {
      name: "Техническая документация",
      icon: FileText,
      count: 8,
      description: "Спецификации, схемы и техническая информация"
    },
    {
      name: "Видеоуроки",
      icon: Video,
      count: 12,
      description: "Пошаговые видеоинструкции и обучающие материалы"
    }
  ];

  const articles = [
    {
      title: "Установка и настройка детектора XELON-XRAY-1515",
      category: "Руководства",
      type: "PDF",
      size: "2.3 MB",
      updated: "15.01.2025",
      downloads: 342
    },
    {
      title: "Калибровка детектора для медицинской визуализации",
      category: "Видеоуроки",
      type: "MP4",
      size: "45 MB",
      updated: "12.01.2025",
      downloads: 128
    },
    {
      title: "Устранение неполадок: артефакты изображения",
      category: "Техническая документация",
      type: "PDF",
      size: "1.8 MB",
      updated: "10.01.2025",
      downloads: 256
    },
    {
      title: "Интеграция с PACS системами",
      category: "Руководства",
      type: "PDF",
      size: "3.1 MB",
      updated: "08.01.2025",
      downloads: 189
    },
    {
      title: "Обслуживание и профилактика оборудования",
      category: "Видеоуроки",
      type: "MP4",
      size: "38 MB",
      updated: "05.01.2025",
      downloads: 94
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            База знаний
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Полная библиотека документации, руководств и обучающих материалов
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Поиск по базе знаний..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/50"
                />
              </div>
              <Button className="bg-white text-primary hover:bg-white/90">
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Категории</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.name} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Badge variant="secondary">{category.count} материалов</Badge>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные материалы</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {articles.map((article) => (
              <Card key={article.title} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold">{article.title}</h3>
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{article.type} • {article.size}</span>
                      <span>Обновлено: {article.updated}</span>
                      <span>{article.downloads} загрузок</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Скачать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли нужную информацию?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Обратитесь к нашим специалистам за персональной консультацией
          </p>
          <Button size="lg">Связаться с поддержкой</Button>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;