import modenutiLogo from "@/assets/modenuti-logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-glass-border glass">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-4">
            <img 
              src={modenutiLogo} 
              alt="Modenuti Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-3xl font-bold text-gradient">MODENUTI</span>
          </div>

          {/* Tagline */}
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            "Transformando Tecnologia em Soluções"
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="#" 
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300"
            >
              <i className="fab fa-facebook text-xl text-primary"></i>
            </a>
            <a 
              href="#" 
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300"
            >
              <i className="fab fa-instagram text-xl text-primary"></i>
            </a>
            <a 
              href="#" 
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300"
            >
              <i className="fab fa-whatsapp text-xl text-primary"></i>
            </a>
            <a 
              href="#" 
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300"
            >
              <i className="fab fa-google text-xl text-primary"></i>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt text-primary"></i>
              <span>Rua Antônio Bocato, 180 - Ibiporã/PR</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fab fa-whatsapp text-primary"></i>
              <span>(43) 99999-9999</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-glass-border pt-8">
            <p className="text-muted-foreground">
              © 2024 Modenuti Informática. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};