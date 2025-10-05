import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, MapPin, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const milestones = [
    { year: "2025", event: "Основание компании КСEЛОН в Ростове-на-Дону" },
    { year: "2025", event: "Получение статуса резидента Технопарка Бештау" },
    { year: "2027", event: "Запуск производства первых цифровых детекторов XELON XRAY" },
    { year: "2025", event: "Подписание соглашения о строительстве завода в Техно-парке БЕШТАУ" },
    { year: "2028", event: "Достижение 90% отечественных компонентов в производстве" },
    { year: "2027", event: "Планируемый запуск полного производственного цикла" },
  ];

  const values = [
    {
      icon: Target,
      title: t('about.innovation'),
      description: t('about.innovationDesc')
    },
    {
      icon: Award,
      title: t('about.qualityTitle'),
      description: t('about.qualityDesc')
    },
    {
      icon: Users,
      title: t('about.partnership'),
      description: t('about.partnershipDesc')
    },
    {
      icon: MapPin,
      title: t('about.globality'),
      description: t('about.globalityDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-white/30 text-white">
              {t('about.badge')}
            </Badge>
            <h1 className="section-title mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="section-title mb-6">{t('about.missionTitle')}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.missionText1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.missionText2')}
              </p>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <Card className="corporate-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent">{t('about.visionTitle')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.visionText')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title mb-6">{t('about.valuesTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('about.valuesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="hover-lift corporate-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title mb-6">{t('about.historyTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('about.historySubtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="relative flex items-center mb-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-6 z-10">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 corporate-shadow">
                    <CardContent className="p-6">
                      <p className="text-foreground leading-relaxed">
                        {milestone.event}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="section-title mb-6">{t('about.teamCta')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('about.teamText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light">
              {t('about.openPositions')}
            </Button>
            <Button variant="outline" size="lg">
              {t('about.initiativeOffers')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;