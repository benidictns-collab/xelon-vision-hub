import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "О компании", href: "/about", hasSubmenu: false },
    { name: "Продукция", href: "/products", hasSubmenu: false },
    { name: "Решения", href: "/solutions", hasSubmenu: false },
    { name: "Поддержка", href: "/support", hasSubmenu: false },
    { name: "Новости", href: "/news", hasSubmenu: false },
    { name: "Контакты", href: "/contacts", hasSubmenu: false },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="КСEЛОН" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-foreground hover:text-accent fast-transition font-medium"
                >
                  <span>{item.name}</span>
                  {item.hasSubmenu && <ChevronDown className="h-4 w-4" />}
                </Link>
              </div>
            ))}
          </div>

          {/* Language & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              RU / EN
            </Button>
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent-light">
              Запросить КП
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center justify-between py-2 text-foreground hover:text-accent fast-transition"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasSubmenu && <ChevronDown className="h-4 w-4" />}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  RU / EN
                </Button>
                <Button variant="default" size="sm" className="bg-accent hover:bg-accent-light">
                  Запросить КП
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;