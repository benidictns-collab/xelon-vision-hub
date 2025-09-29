import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, ExternalLink, Book, Wrench, Shield } from "lucide-react";

const Documentation = () => {
  const documentTypes = [
    {
      id: "user-manuals",
      name: "Руководства пользователя",
      icon: Book,
      description: "Подробные инструкции по эксплуатации"
    },
    {
      id: "technical",
      name: "Техническая документация",
      icon: Wrench,
      description: "Технические спецификации и схемы"
    },
    {
      id: "safety",
      name: "Документы по безопасности",
      icon: Shield,
      description: "Инструкции по безопасности и соответствию"
    }
  ];

  const documents = {
    "user-manuals": [
      {
        name: "XELON-XRAY-1515 - Руководство пользователя",
        version: "v2.1",
        language: "RU",
        size: "4.2 MB",
        updated: "15.01.2025",
        type: "PDF"
      },
      {
        name: "XELON-INDUSTRIAL-2020 - Руководство оператора",
        version: "v1.8",
        language: "RU/EN",
        size: "3.8 MB",
        updated: "12.01.2025",
        type: "PDF"
      },
      {
        name: "Программное обеспечение XELON Viewer",
        version: "v3.0",
        language: "RU",
        size: "2.1 MB",
        updated: "10.01.2025",
        type: "PDF"
      }
    ],
    "technical": [
      {
        name: "Техническая спецификация XELON-XRAY-1515",
        version: "v1.5",
        language: "RU/EN",
        size: "1.9 MB",
        updated: "08.01.2025",
        type: "PDF"
      },
      {
        name: "Схема подключения и интерфейсы",
        version: "v2.0",
        language: "EN",
        size: "2.3 MB",
        updated: "05.01.2025",
        type: "PDF"
      },
      {
        name: "API документация для интеграции",
        version: "v1.2",
        language: "EN",
        size: "1.4 MB",
        updated: "03.01.2025",
        type: "PDF"
      }
    ],
    "safety": [
      {
        name: "Инструкция по радиационной безопасности",
        version: "v1.0",
        language: "RU",
        size: "3.2 MB",
        updated: "01.01.2025",
        type: "PDF"
      },
      {
        name: "Сертификат соответствия CE",
        version: "v1.0",
        language: "EN",
        size: "0.8 MB",
        updated: "28.12.2024",
        type: "PDF"
      },
      {
        name: "Декларация о соответствии ТР ТС",
        version: "v1.0",
        language: "RU",
        size: "1.1 MB",
        updated: "25.12.2024",
        type: "PDF"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Документация
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Вся необходимая техническая документация для наших продуктов
          </p>
        </div>
      </section>

      {/* Documentation Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="user-manuals" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              {documentTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <TabsTrigger key={type.id} value={type.id} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{type.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {documentTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{type.name}</h2>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
                
                <div className="grid gap-4">
                  {documents[type.id as keyof typeof documents].map((doc) => (
                    <Card key={doc.name} className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-1">{doc.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge variant="outline">Версия {doc.version}</Badge>
                              <Badge variant="outline">{doc.language}</Badge>
                              <Badge variant="outline">{doc.type}</Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>Размер: {doc.size}</span>
                              <span>Обновлено: {doc.updated}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Просмотр
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Скачать
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* API Documentation CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">API Документация</h2>
            <p className="text-muted-foreground mb-6">
              Для разработчиков доступна подробная API документация для интеграции наших решений
            </p>
            <div className="flex justify-center space-x-4">
              <Button>
                <ExternalLink className="h-4 w-4 mr-2" />
                Открыть API Docs
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Скачать SDK
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Documentation;