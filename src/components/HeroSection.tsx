import { Button } from "@/components/ui/button";
import { ParticleCanvas } from "./ParticleCanvas";
import { ScrollReveal } from "./ScrollReveal";
import heroTech from "@/assets/hero-tech.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden bg-gradient-hero">
      {/* Particle Background */}
      <ParticleCanvas />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <ScrollReveal className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-gradient">Soluções Avançadas</span>
                <br />
                <span className="text-foreground">em Informática</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Transformamos problemas tecnológicos em soluções inteligentes. 
                Especialistas em formatação, conserto, montagem e sistemas de segurança 
                com tecnologia de ponta.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                <i className="fas fa-rocket mr-3 group-hover:animate-bounce"></i>
                Começar Agora
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => scrollToSection('services')}
                className="group"
              >
                <i className="fas fa-eye mr-3 group-hover:rotate-12"></i>
                Ver Serviços
              </Button>
            </ScrollReveal>
          </div>

          {/* Right Content - Hero Image with Floating Icons */}
          <div className="relative">
            <ScrollReveal delay={400}>
              <div className="relative rounded-2xl overflow-hidden shadow-primary border border-primary/20">
                <img 
                  src={heroTech} 
                  alt="Tecnologia Avançada" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/20"></div>
              </div>
            </ScrollReveal>

            {/* Floating Tech Icons */}
            <div className="absolute -top-6 -left-6 w-16 h-16 glass rounded-full flex items-center justify-center floating-icon">
              <i className="fas fa-microchip text-2xl text-primary"></i>
            </div>
            
            <div className="absolute -top-4 right-8 w-12 h-12 glass rounded-full flex items-center justify-center floating-icon" style={{ animationDelay: '1s' }}>
              <i className="fas fa-wifi text-lg text-accent"></i>
            </div>
            
            <div className="absolute bottom-8 -left-4 w-14 h-14 glass rounded-full flex items-center justify-center floating-icon" style={{ animationDelay: '2s' }}>
              <i className="fas fa-shield-alt text-xl text-secondary"></i>
            </div>
            
            <div className="absolute -bottom-6 right-12 w-16 h-16 glass rounded-full flex items-center justify-center floating-icon" style={{ animationDelay: '3s' }}>
              <i className="fas fa-cogs text-2xl text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};