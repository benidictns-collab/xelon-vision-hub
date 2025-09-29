import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Download, ExternalLink, Shield, Globe } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      name: "ISO 13485:2016",
      type: "Система менеджмента качества",
      description: "Международный стандарт для медицинских изделий",
      issued: "2023",
      validUntil: "2026",
      authority: "TÜV SÜD",
      category: "quality"
    },
    {
      name: "CE Mark",
      type: "Европейское соответствие",
      description: "Соответствие требованиям ЕС для медицинских изделий",
      issued: "2023",
      validUntil: "2028",
      authority: "Notified Body 0123",
      category: "regulatory"
    },
    {
      name: "FDA 510(k)",
      type: "Регистрация FDA",
      description: "Разрешение на продажу в США",
      issued: "2024",
      validUntil: "Бессрочно",
      authority: "U.S. FDA",
      category: "regulatory"
    },
    {
      name: "Росздравнадзор",
      type: "Регистрационное удостоверение",
      description: "Разрешение на медицинское применение в РФ",
      issued: "2023",
      validUntil: "2028",
      authority: "Росздравнадзор",
      category: "regulatory"
    },
    {
      name: "IEC 60601-1",
      type: "Электробезопасность",
      description: "Безопасность медицинского электрооборудования",
      issued: "2023",
      validUntil: "2026",
      authority: "TÜV Rheinland",
      category: "safety"
    },
    {
      name: "ГОСТ ISO 9001-2015",
      type: "Система менеджмента качества",
      description: "Российский стандарт качества",
      issued: "2023",
      validUntil: "2026",
      authority: "Ростест",
      category: "quality"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "quality":
        return Award;
      case "regulatory":
        return Shield;
      case "safety":
        return Shield;
      default:
        return Globe;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "quality":
        return "bg-blue-100 text-blue-800";
      case "regulatory":
        return "bg-green-100 text-green-800";
      case "safety":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Сертификаты и лицензии
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Наши продукты соответствуют самым строгим международным стандартам качества и безопасности
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => {
              const Icon = getCategoryIcon(cert.category);
              return (
                <Card key={cert.name} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.type}</p>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(cert.category)} variant="secondary">
                      {cert.category === "quality" && "Качество"}
                      {cert.category === "regulatory" && "Регуляторное"}
                      {cert.category === "safety" && "Безопасность"}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{cert.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Выдан:</span>
                      <span>{cert.issued}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Действует до:</span>
                      <span>{cert.validUntil}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Орган:</span>
                      <span>{cert.authority}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Скачать
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Приверженность качеству</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания КСEЛОН строго следует международным стандартам качества и безопасности. 
                Все наши продукты проходят многоступенчатый контроль качества и соответствуют 
                требованиям ведущих регулирующих органов мира. Мы постоянно совершенствуем 
                наши процессы и внедряем лучшие практики индустрии.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Certificates;