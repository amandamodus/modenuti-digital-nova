import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";

interface StatProps {
  icon: string;
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatCard = ({ icon, value, label, suffix = "", delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const targetValue = parseInt(value.replace(/[^\d]/g, ''));
            
            let current = 0;
            const increment = targetValue / 60; // 60 frames for smooth animation
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= targetValue) {
                setCount(targetValue);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 50);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [value, hasAnimated]);

  return (
    <ScrollReveal delay={delay}>
      <Card ref={elementRef} className="p-6 text-center group hover:rotate-y-12 cursor-pointer">
        <div className="mb-4">
          <i className={`${icon} text-4xl text-primary group-hover:scale-110 transition-transform duration-300`}></i>
        </div>
        
        <div className="space-y-2">
          <div className="text-3xl font-bold text-gradient">
            {value.includes('.') ? value : count.toLocaleString()}{suffix}
          </div>
          <p className="text-muted-foreground font-medium">{label}</p>
        </div>
      </Card>
    </ScrollReveal>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      icon: "fas fa-star",
      value: "5.0",
      label: "Avaliação Google",
      suffix: " ⭐"
    },
    {
      icon: "fas fa-shield-check",
      value: "100",
      label: "Garantia",
      suffix: "%"
    },
    {
      icon: "fas fa-clock",
      value: "24",
      label: "Horas Atendimento",
      suffix: "h"
    },
    {
      icon: "fas fa-users",
      value: "500",
      label: "Clientes",
      suffix: "+"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Resultados que Falam por Si
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Números que demonstram nossa excelência e compromisso com a qualidade
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};