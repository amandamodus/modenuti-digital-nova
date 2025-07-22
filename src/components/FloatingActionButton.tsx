import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de falar com a Modenuti Informática.");
    window.open(`http://wa.me/+5543991241702?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="hero"
      size="icon"
      className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-primary transition-all duration-300 ${
        isVisible ? 'animate-pulse' : ''
      }`}
      onClick={handleWhatsAppClick}
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </Button>
  );
};