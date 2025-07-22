import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ icon, title, description, features, delay = 0 }: ServiceProps) => {
  return (
    <ScrollReveal delay={delay}>
      <Card className="p-8 group hover:rotate-x-6 hover:scale-105 cursor-pointer relative overflow-hidden">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className={`${icon} text-2xl text-primary-foreground`}></i>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
            <i className="fas fa-arrow-right mr-2"></i>
            Saiba Mais
          </Button>
        </div>
      </Card>
    </ScrollReveal>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-download",
      title: "Formatação & Backup",
      description: "Sistema completamente otimizado com instalação de programas essenciais e backup seguro de todos os seus dados.",
      features: [
        "Sistema otimizado",
        "Programas essenciais",
        "Backup seguro",
        "Configuração personalizada"
      ]
    },
    {
      icon: "fas fa-tools",
      title: "Conserto & Manutenção",
      description: "Diagnóstico preciso, reparo profissional e manutenção preventiva para máximo desempenho do seu equipamento.",
      features: [
        "Diagnóstico detalhado",
        "Reparo especializado",
        "Manutenção preventiva",
        "Garantia estendida"
      ]
    },
    {
      icon: "fas fa-desktop",
      title: "Montagem Personalizada",
      description: "PCs sob medida para gaming, trabalho ou uso doméstico com componentes selecionados e garantia total.",
      features: [
        "PCs para gaming",
        "Workstations profissionais",
        "Computadores domésticos",
        "Upgrade de componentes"
      ]
    },
    {
      icon: "fas fa-video",
      title: "Sistemas de Segurança",
      description: "Câmeras HD/4K com monitoramento via aplicativo, storage em nuvem e configuração profissional.",
      features: [
        "Câmeras HD/4K",
        "Monitoramento via app",
        "Storage em nuvem",
        "Instalação profissional"
      ]
    },
    {
      icon: "fas fa-wifi",
      title: "Soluções Avançadas",
      description: "Redes Wi-Fi 6, automação residencial, consultoria em TI e soluções empresariais personalizadas.",
      features: [
        "Redes Wi-Fi 6",
        "Automação residencial",
        "Consultoria TI",
        "Soluções empresariais"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas em tecnologia, desde manutenção básica até 
              implementação de sistemas avançados de segurança e automação.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};