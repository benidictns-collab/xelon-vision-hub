import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Calendar } from "lucide-react";

const Company = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            О компании КСEЛОН
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Российский лидер в разработке и производстве цифровых плоскопанельных детекторов 
            для медицинской, промышленной и специализированной визуализации
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Мы создаем передовые технологии цифровой визуализации, которые помогают 
                медицинским специалистам спасать жизни, а промышленным предприятиям 
                обеспечивать безопасность и качество продукции.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">2015</div>
                  <div className="text-sm text-muted-foreground">Год основания</div>
                </Card>
                <Card className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Специалистов</div>
                </Card>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Наши достижения</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">
                      <Award className="h-4 w-4 mr-1" />
                      ISO 13485
                    </Badge>
                    <span className="text-sm">Сертификация системы менеджмента качества</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">
                      <Award className="h-4 w-4 mr-1" />
                      CE Mark
                    </Badge>
                    <span className="text-sm">Европейское соответствие</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">
                      <Award className="h-4 w-4 mr-1" />
                      FDA
                    </Badge>
                    <span className="text-sm">Регистрация FDA</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;