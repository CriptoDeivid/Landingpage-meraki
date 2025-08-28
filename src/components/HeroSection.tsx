import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E3F2FD] via-white to-[#F5F5F5] pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#2E86AB] via-[#A23B72] to-[#F18F01] bg-clip-text text-transparent">
              MERAKI🌈
            </span>
            <br />
            <span className="text-gray-800 text-3xl md:text-4xl">
              ASESORÍA EDUCATIVA
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Transformamos tu futuro educativo con <span className="text-[#A23B72] font-semibold">alma</span>, 
            <span className="text-[#F18F01] font-semibold"> creatividad</span> y 
            <span className="text-[#2E86AB] font-semibold"> amor</span>
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubre tu potencial con nuestra asesoría educativa personalizada. 
            Te acompañamos en cada paso de tu camino académico hacia el éxito.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#2E86AB] to-[#A23B72] hover:from-[#A23B72] hover:to-[#F18F01] text-white px-8 py-4 text-lg group"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agenda tu consulta gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-[#2E86AB] text-[#2E86AB] hover:bg-[#2E86AB] hover:text-white px-8 py-4 text-lg group"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Conoce nuestros servicios
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Síguenos en Instagram</p>
            <a 
              href="https://www.instagram.com/meraki.asesoriaeducativa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#A23B72] hover:text-[#F18F01] font-medium transition-colors text-lg"
            >
              @meraki.asesoriaeducativa
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-[#F18F01] to-[#A23B72] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-r from-[#2E86AB] to-[#A23B72] rounded-full opacity-30 animate-bounce"></div>
    </section>
  );
}