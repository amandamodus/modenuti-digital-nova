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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="hero"
      size="icon"
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-primary transition-all duration-300 ${
        isVisible ? 'animate-bounce' : ''
      }`}
      onClick={scrollToTop}
    >
      <i className="fas fa-chevron-up text-xl"></i>
    </Button>
  );
};