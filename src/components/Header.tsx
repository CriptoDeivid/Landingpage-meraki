import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#2E86AB] via-[#A23B72] to-[#F18F01] bg-clip-text text-transparent">
              MERAKI
              <img src="./favicon-32x32.png" alt="Meraki Logo" />
            </div>
            <div className="hidden sm:block text-sm text-gray-600">
              ASESORÍA EDUCATIVA
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#2E86AB] transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-[#2E86AB] transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-[#2E86AB] transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-[#2E86AB] transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-[#2E86AB] to-[#A23B72] hover:from-[#A23B72] hover:to-[#F18F01] text-white"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-[#2E86AB] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-gray-700 hover:text-[#2E86AB] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#nosotros" 
                className="text-gray-700 hover:text-[#2E86AB] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-[#2E86AB] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button 
                className="bg-gradient-to-r from-[#2E86AB] to-[#A23B72] hover:from-[#A23B72] hover:to-[#F18F01] text-white w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Consulta Gratuita
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}