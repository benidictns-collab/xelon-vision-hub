import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Monitor, Cpu, Brain } from "lucide-react";
import detectorImage from "@/assets/detector-hero.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TechnologyModal from "./TechnologyModal";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isTechnologyModalOpen, setIsTechnologyModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient"></div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient"></div>
      
      {/* Tech grid pattern */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 top-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl animate-pulse-subtle delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-light/15 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent-light rounded-full animate-float delay-300 opacity-40"></div>
      <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-float delay-700 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block glass-accent text-accent-light px-5 py-2.5 rounded-full text-sm font-medium animate-glow-pulse">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-6">
              {t('hero.title1')}
              <span className="block text-glow text-accent-light">{t('hero.title2')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light text-white px-8 py-4 h-auto group glow-accent hover-scale"
                onClick={() => navigate('/products')}
              >
                {t('hero.productsBtn')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 fast-transition" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent/50 text-accent-light hover:bg-accent/20 glass-dark px-8 py-4 h-auto group"
                onClick={() => setIsTechnologyModalOpen(true)}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 fast-transition" />
                {t('hero.technologyBtn')}
              </Button>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-light mb-1">1</div>
                <div className="text-xs md:text-sm text-white/70">{t('hero.metric1')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-light mb-1">100+</div>
                <div className="text-xs md:text-sm text-white/70">{t('hero.metric2')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-light mb-1">70%</div>
                <div className="text-xs md:text-sm text-white/70">{t('hero.metric3')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-light mb-1">6+</div>
                <div className="text-xs md:text-sm text-white/70">{t('hero.metric4')}</div>
              </div>
            </div>
          </div>

          {/* Product Showcase - Detector + Display + AI */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative">
              {/* Main glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-accent/20 via-accent-light/10 to-primary-light/20 rounded-3xl blur-3xl animate-pulse-subtle"></div>
              
              {/* Product container with glassmorphism */}
              <div className="relative glass-dark rounded-2xl p-8 border border-white/10">
                {/* Detector image */}
                <img 
                  src={detectorImage} 
                  alt="XELON Digital Detector" 
                  className="w-full h-auto max-w-md mx-auto drop-shadow-2xl hover:scale-105 smooth-transition"
                />
                
                {/* New badge */}
                <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg animate-bounce-subtle">
                  {t('hero.newBadge')}
                </div>
              </div>
            </div>

            {/* Feature cards with glassmorphism - 3 cards for Detector, AI, Display */}
            <div className="absolute -left-4 top-12 glass-dark rounded-xl p-4 border border-white/10 animate-fade-in-left delay-500 hover-scale">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-accent-light" />
                </div>
                <div>
                  <div className="text-accent-light font-semibold text-sm">{t('hero.feature1Title')}</div>
                  <div className="text-white/70 text-xs">{t('hero.feature1Desc')}</div>
                </div>
              </div>
            </div>
            
            {/* AI Feature card - center */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 glass-dark rounded-xl p-4 border border-accent/30 animate-fade-in-up delay-600 hover-scale">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="text-success font-semibold text-sm">{t('hero.feature3Title')}</div>
                  <div className="text-white/70 text-xs">{t('hero.feature3Desc')}</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 glass-dark rounded-xl p-4 border border-white/10 animate-fade-in-right delay-700 hover-scale">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-accent-light" />
                </div>
                <div>
                  <div className="text-accent-light font-semibold text-sm">{t('hero.feature2Title')}</div>
                  <div className="text-white/70 text-xs">{t('hero.feature2Desc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/60 mb-2"></div>
          <div className="text-sm">{t('hero.scroll')}</div>
        </div>
      </div>

      <TechnologyModal 
        open={isTechnologyModalOpen} 
        onOpenChange={setIsTechnologyModalOpen} 
      />
    </section>
  );
};

export default HeroSection;
