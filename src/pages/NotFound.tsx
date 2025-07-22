import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-black text-gradient">404</h1>
          <h2 className="text-3xl font-bold text-foreground">Página Não Encontrada</h2>
          <p className="text-xl text-muted-foreground">
            A página que você está procurando não existe.
          </p>
        </div>
        
        <a 
          href="/" 
          className="inline-flex items-center space-x-3 glass px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300"
        >
          <i className="fas fa-home text-primary"></i>
          <span className="text-foreground font-semibold">Voltar ao Início</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
