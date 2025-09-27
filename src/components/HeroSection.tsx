import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import detectorImage from "@/assets/detector-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 top-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-light/20 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block bg-accent/20 backdrop-blur-sm text-accent-light px-4 py-2 rounded-full text-sm font-medium border border-accent/30">
                Российский лидер в производстве ЦПД
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-6">
              Визуализируем
              <span className="block text-accent-light">будущее</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-lg">
              Цифровые плоскопанельные детекторы для медицинской, промышленной и специализированной визуализации
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light text-white px-8 py-4 h-auto group"
              >
                Продукция 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 fast-transition" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent/50 text-accent-light hover:bg-accent/20 backdrop-blur-sm px-8 py-4 h-auto group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 fast-transition" />
                О технологии
              </Button>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-light mb-1">1</div>
                <div className="text-sm text-white/70">собственный завод</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-light mb-1">100+</div>
                <div className="text-sm text-white/70">инженеров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-light mb-1">90%</div>
                <div className="text-sm text-white/70">отечественных компонентов</div>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl animate-pulse-glow"></div>
              
              {/* Product image */}
              <div className="relative backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src={detectorImage} 
                  alt="XELON Digital Detector" 
                  className="w-full h-auto max-w-md mx-auto drop-shadow-2xl hover:scale-105 smooth-transition"
                />
                
                {/* Product highlights */}
                <div className="absolute -top-4 -right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium">
                  Новинка 2025
                </div>
              </div>
            </div>

            {/* Floating feature cards */}
            <div className="absolute -left-4 top-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in delay-500">
              <div className="text-accent-light font-semibold text-sm">Высокое разрешение</div>
              <div className="text-white/70 text-xs">до 200 мкм</div>
            </div>
            
            <div className="absolute -right-4 bottom-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in delay-700">
              <div className="text-accent-light font-semibold text-sm">Российское производство</div>
              <div className="text-white/70 text-xs">полный цикл</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/60 mb-2"></div>
          <div className="text-sm">Прокрутите вниз</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;