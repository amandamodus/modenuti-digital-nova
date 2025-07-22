import { ScrollReveal } from "./ScrollReveal";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 glass px-8 py-4 rounded-2xl mb-8 animate-bounce">
              <i className="fas fa-sparkles text-3xl text-accent"></i>
              <span className="text-xl font-bold text-gradient">Satisfação ou Reembolso</span>
            </div>

            {/* Main Title */}
            <h2 className="text-6xl font-black text-gradient mb-6">
              Garantia Total
            </h2>

            {/* Description */}
            <p className="text-2xl text-muted-foreground leading-relaxed mb-8">
              Trabalhamos com total transparência e confiança. Se não ficar 100% satisfeito 
              com nosso serviço, devolvemos seu dinheiro. Essa é nossa garantia de qualidade.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-handshake text-3xl text-primary-foreground"></i>
                </div>
                <h3 className="text-xl font-bold text-foreground">Confiança</h3>
                <p className="text-muted-foreground">
                  Transparência total em todos os processos e orçamentos claros
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-medal text-3xl text-secondary-foreground"></i>
                </div>
                <h3 className="text-xl font-bold text-foreground">Qualidade</h3>
                <p className="text-muted-foreground">
                  Serviços executados com os mais altos padrões de qualidade
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-clock text-3xl text-primary-foreground"></i>
                </div>
                <h3 className="text-xl font-bold text-foreground">Pontualidade</h3>
                <p className="text-muted-foreground">
                  Cumprimos rigorosamente os prazos estabelecidos
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};