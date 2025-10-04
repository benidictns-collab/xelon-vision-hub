import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-accent">404</h1>
        <p className="mb-8 text-2xl text-muted-foreground">
          {language === 'ru' ? 'Страница не найдена' : 'Page not found'}
        </p>
        <Button onClick={() => navigate('/')} size="lg" className="bg-accent hover:bg-accent-light">
          {language === 'ru' ? 'Вернуться на главную' : 'Return to Home'}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
