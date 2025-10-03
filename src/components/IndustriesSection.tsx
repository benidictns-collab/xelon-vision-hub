import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Wrench, Microscope } from "lucide-react";
import medicalImage from "@/assets/medical-industry.jpg";
import industrialImage from "@/assets/industrial-ndt.jpg";
import scientificImage from "@/assets/scientific-research.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const IndustriesSection = () => {
  const { t } = useLanguage();
  
  const industries = [
    {
      icon: Heart,
      title: t('industries.medical.title'),
      subtitle: t('industries.medical.subtitle'),
      description: t('industries.medical.description'),
      backgroundImage: medicalImage,
      applications: [
        t('industries.medical.app1'),
        t('industries.medical.app2'),
        t('industries.medical.app3'),
        t('industries.medical.app4'),
        t('industries.medical.app5')
      ],
      iconColor: "text-red-500",
    },
    {
      icon: Wrench,
      title: t('industries.industrial.title'),
      subtitle: t('industries.industrial.subtitle'),
      description: t('industries.industrial.description'),
      backgroundImage: industrialImage,
      applications: [
        t('industries.industrial.app1'),
        t('industries.industrial.app2'),
        t('industries.industrial.app3'),
        t('industries.industrial.app4'),
        t('industries.industrial.app5')
      ],
      iconColor: "text-blue-500",
    },
    {
      icon: Microscope,
      title: t('industries.scientific.title'),
      subtitle: t('industries.scientific.subtitle'),
      description: t('industries.scientific.description'),
      backgroundImage: scientificImage,
      applications: [
        t('industries.scientific.app1'),
        t('industries.scientific.app2'),
        t('industries.scientific.app3'),
        t('industries.scientific.app4'),
        t('industries.scientific.app5')
      ],
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {t('industries.badge')}
          </Badge>
          <h2 className="section-title text-foreground mb-6">
            {t('industries.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('industries.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card 
              key={industry.title}
              className="industry-card corporate-shadow animate-fade-in-up group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div 
                className="h-48 relative overflow-hidden bg-cover bg-center group-hover:brightness-110 transition-all duration-300"
                style={{ backgroundImage: `url(${industry.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{industry.title}</h3>
                  <p className="text-white/90 text-sm">{industry.subtitle}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground">{t('industries.applications')}</h4>
                  {industry.applications.map((app) => (
                    <div key={app} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{app}</span>
                    </div>
                  ))}
                </div>


                <Button 
                  variant="outline" 
                  className="w-full group hover:bg-accent hover:text-white hover:border-accent relative z-20 pointer-events-auto"
                >
                  {t('industries.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 fast-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {t('industries.cta.title')}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('industries.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light">
              {t('industries.cta.consultation')}
            </Button>
            <Button variant="outline" size="lg">
              {t('industries.cta.catalog')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
