import { Heart, Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: "Asesoría Personalizada", href: "#servicios" },
      { name: "Consultoría Académica", href: "#servicios" },
      { name: "Orientación Vocacional", href: "#servicios" },
      { name: "Apoyo Familiar", href: "#servicios" },
      { name: "Preparación Universitaria", href: "#servicios" }
    ],
    contacto: [
      { 
        name: "Instagram", 
        href: "https://www.instagram.com/meraki.asesoriaeducativa/",
        icon: <Instagram className="h-4 w-4" />
      },
      { 
        name: "WhatsApp", 
        href: "https://wa.me/?text=Hola! Me interesa conocer más sobre Meraki Asesoría Educativa",
        icon: <MessageCircle className="h-4 w-4" />
      },
      { 
        name: "Email", 
        href: "mailto:info@merakiasesoria.com",
        icon: <Mail className="h-4 w-4" />
      }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#2E86AB] via-[#A23B72] to-[#F18F01] bg-clip-text text-transparent">
                  MERAKI🌈
                </span>
              </h3>
              <p className="text-gray-300 text-lg">
                ASESORÍA EDUCATIVA
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transformamos el futuro educativo con alma, creatividad y amor. 
              Cada estudiante es único y merece una asesoría personalizada que 
              despierte su máximo potencial.
            </p>

            <div className="flex space-x-4">
              {footerLinks.contacto.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#F18F01] transition-colors duration-300 group"
                >
                  <div className="p-2 bg-gray-800 rounded-full group-hover:bg-[#2E86AB] transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <span className="hidden sm:inline">{contact.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#F18F01]">
              Nuestros Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#F18F01]">
              Contacto Rápido
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Síguenos en Instagram</p>
                <a
                  href="https://www.instagram.com/meraki.asesoriaeducativa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A23B72] hover:text-[#F18F01] transition-colors duration-300"
                >
                  @meraki.asesoriaeducativa
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-2">Consulta gratuita</p>
                <a
                  href="https://wa.me/?text=Hola! Quiero agendar mi consulta gratuita con Meraki Asesoría Educativa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p className="flex items-center">
                © {currentYear} Meraki Asesoría Educativa. Hecho con 
                <Heart className="h-4 w-4 mx-1 text-[#A23B72] fill-current" />
                para transformar futuros.
              </p>
            </div>

            {/* Philosophy */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm italic">
                "Meraki: Hacer algo con alma, creatividad y amor"
              </p>
              <p className="text-[#F18F01] text-xs mt-1">
                🌈 Palabra griega que define nuestra filosofía
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-2 bg-gradient-to-r from-[#2E86AB] via-[#A23B72] to-[#F18F01]"></div>
    </footer>
  );
}