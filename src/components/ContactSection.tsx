import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";

interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  action?: string;
  actionIcon?: string;
  delay?: number;
}

const ContactCard = ({ icon, title, description, action, actionIcon, delay = 0 }: ContactCardProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Modenuti Informática.");
    window.open(`https://wa.me/5543991241702?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <ScrollReveal delay={delay}>
      <Card className="p-8 text-center group hover:scale-105 hover:rotate-y-6 cursor-pointer h-full">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <i className={`${icon} text-3xl text-primary-foreground`}></i>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {action && (
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
            onClick={title.includes('WhatsApp') ? () => window.open('https://wa.me/5543991241702', '_blank', 'noopener,noreferrer') : undefined}
          >
            {actionIcon && <i className={`${actionIcon} mr-2`}></i>}
            {action}
          </Button>
        )}
      </Card>
    </ScrollReveal>
  );
};

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Nossa Localização",
      description: "Rua Antônio Bocato, 180 - Ibiporã/PR. Atendimento presencial ou domiciliar conforme sua necessidade.",
      action: "Ver no Mapa",
      actionIcon: "fas fa-external-link-alt"
    },
    {
      icon: "fab fa-whatsapp",
      title: "Contato Direto",
      description: "WhatsApp disponível para atendimento rápido, orçamentos e agendamento de serviços.",
      action: "Chamar no WhatsApp",
      actionIcon: "fab fa-whatsapp"
    },
    {
      icon: "fas fa-clock",
      title: "Horário Flexível",
      description: "Atendimento adaptado à sua agenda. Disponibilidade para emergências e horários especiais.",
      action: "Agendar Horário",
      actionIcon: "fas fa-calendar-alt"
    },
    {
      icon: "fas fa-trophy",
      title: "Qualidade 5⭐",
      description: "Avaliação máxima no Google com mais de 50 reviews positivos de clientes satisfeitos.",
      action: "Ver Avaliações",
      actionIcon: "fab fa-google"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atender você com soluções personalizadas. 
              Entre em contato conosco e descubra como podemos ajudar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <ContactCard
              key={index}
              {...info}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Main CTA */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto glass p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Pronto para Começar?
              </h3>
              <p className="text-muted-foreground mb-6">
                Transforme seus problemas tecnológicos em soluções eficientes. 
                Fale conosco agora mesmo!
              </p>
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => {
                  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para os serviços da Modenuti Informática.");
                  window.open(`https://wa.me/5543991241702?text=${message}`, '_blank', 'noopener,noreferrer');
                }}
              >
                <i className="fab fa-whatsapp mr-3 text-2xl group-hover:animate-bounce"></i>
                Solicitar Orçamento Gratuito
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};