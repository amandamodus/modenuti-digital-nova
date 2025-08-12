import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const modenutiLogo = "/lovable-uploads/be073bea-6a75-444f-ab19-33bf057ee378.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'glass backdrop-blur-xl border-b border-glass-border shadow-glass' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={modenutiLogo} 
              alt="Modenuti Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-gradient">MODENUTI</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Avaliações
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="sm" 
            className="hidden md:flex"
            onClick={() => {
              const message = encodeURIComponent("Olá! Gostaria de falar com a Modenuti Informática.");
              window.open(`https://wa.me/5543991241702?text=${message}`, '_blank', 'noopener,noreferrer');
            }}
          >
            <i className="fab fa-whatsapp mr-2"></i>
            Contato Direto
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <i className="fas fa-bars text-xl"></i>
          </Button>
        </nav>
      </div>
    </header>
  );
};