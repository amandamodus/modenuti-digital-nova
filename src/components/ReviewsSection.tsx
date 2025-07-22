import { Card } from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";

interface ReviewProps {
  name: string;
  service: string;
  rating: number;
  comment: string;
  delay?: number;
}

const ReviewCard = ({ name, service, rating, comment, delay = 0 }: ReviewProps) => {
  return (
    <ScrollReveal delay={delay}>
      <Card className="p-8 group hover:rotate-y-12 cursor-pointer review-card relative">
        <div className="relative z-10">
          {/* Rating Stars */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
              ></i>
            ))}
          </div>

          {/* Comment */}
          <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
            "{comment}"
          </blockquote>

          {/* Author Info */}
          <div className="border-t border-glass-border pt-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <i className="fas fa-user text-primary-foreground"></i>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{name}</h4>
                <p className="text-muted-foreground text-sm">{service}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
};

export const ReviewsSection = () => {
  const reviews = [
    {
      name: "Carlos Silva",
      service: "Formatação Completa",
      rating: 5,
      comment: "Serviço impecável! Meu computador ficou como novo, muito mais rápido e organizado. Recomendo para todos!"
    },
    {
      name: "Maria Santos",
      service: "Sistema de Segurança",
      rating: 5,
      comment: "Instalaram câmeras 4K na minha empresa. Qualidade excelente e posso monitorar tudo pelo celular. Perfeito!"
    },
    {
      name: "João Oliveira",
      service: "PC Gamer",
      rating: 5,
      comment: "Montaram um PC gamer incrível para mim. Roda todos os jogos no máximo sem travamentos. Atendimento nota 10!"
    }
  ];

  return (
    <section id="reviews" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-6">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Depoimentos reais de clientes satisfeitos que confiaram em nossos serviços 
              e obtiveram resultados excepcionais.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Google Reviews CTA */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-3 glass px-8 py-4 rounded-2xl">
              <i className="fab fa-google text-3xl text-primary"></i>
              <div className="text-left">
                <p className="text-foreground font-semibold">5.0 ⭐⭐⭐⭐⭐</p>
                <p className="text-muted-foreground text-sm">Baseado em 50+ avaliações</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};