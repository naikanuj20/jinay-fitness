'use client';

import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[650px] md:h-[750px] lg:h-[850px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
          alt="Fitness training"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 max-w-5xl leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Transform Your Body,
          <span className="italic"> Elevate Your Life</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Build strength, master technique, and achieve your fitness goals with personalized coaching designed for real results
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          
          
          <button 
            onClick={scrollToServices}
            className={buttonVariants({ 
              size: "lg",
              variant: "outline",
              className: "bg-transparent backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black shadow-xl transition-all duration-300 text-lg px-8 font-semibold"
            })}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
