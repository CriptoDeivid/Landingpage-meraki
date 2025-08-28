import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      name: "Asesoría Educativa Personalizada",
      description: "Orientación individualizada según las necesidades específicas de cada estudiante",
      icon: "👨‍🎓",
      color: "from-[#2E86AB] to-[#A23B72]",
      features: ["Evaluación personalizada", "Plan de estudios adaptado", "Seguimiento continuo"]
    },
    {
      name: "Terapias de Lenguaje",
      description: "Apoyo especializado para el desarrollo de la comunicación y el habla",
      icon: "🗣️",
      color: "from-[#6A0572] to-[#FF6B6B]",
      features: ["Corrección de pronunciación", "Desarrollo del lenguaje", "Terapias personalizadas"]
    },
    {
      name: "Lectoescritura",
      description: "Desarrollo de habilidades para leer y escribir de manera efectiva",
      icon: "📖",
      color: "from-[#1E3A8A] to-[#3B82F6]",
      features: ["Comprensión lectora", "Escritura creativa", "Técnicas de alfabetización"]
    },
    {
      name: "Ludoteca",
      description: "Espacios de aprendizaje a través del juego y la creatividad",
      icon: "🧩",
      color: "from-[#F59E0B] to-[#EF4444]",
      features: ["Juegos educativos", "Actividades recreativas", "Desarrollo socioemocional"]
    },
    {
      name: "Inglés",
      description: "Clases dinámicas para el aprendizaje del idioma inglés",
      icon: "🌍",
      color: "from-[#0EA5E9] to-[#0369A1]",
      features: ["Vocabulario y gramática", "Conversación práctica", "Comprensión auditiva"]
    },
    {
      name: "Matemáticas",
      description: "Refuerzo y desarrollo de habilidades lógico-matemáticas",
      icon: "➗",
      color: "from-[#16A34A] to-[#065F46]",
      features: ["Resolución de problemas", "Razonamiento lógico", "Refuerzo escolar"]
    },
    {
      name: "Motricidad fina",
      description: "Actividades para mejorar la coordinación y precisión de movimientos",
      icon: "✋",
      color: "from-[#9333EA] to-[#C084FC]",
      features: ["Coordinación ojo-mano", "Trazos y escritura", "Actividades manuales"]
    }


  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros <span className="bg-gradient-to-r from-[#2E86AB] to-[#A23B72] bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones educativas integrales para cada etapa de tu desarrollo académico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className={`w-16 h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-[#2E86AB] transition-colors">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-[#2E86AB] text-[#2E86AB] hover:bg-[#2E86AB] hover:text-white group"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2E86AB]/10 via-[#A23B72]/10 to-[#F18F01]/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#2E86AB] to-[#A23B72] bg-clip-text text-transparent">
              Creemos en el potencial de cada niño.
            </h3> 
            <p className="text-lg text-gray-700 mb-8">
              Agenda una consulta gratuita y descubramos juntos cómo ayudar a tu hijo a brillar.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#2E86AB] to-[#A23B72] hover:from-[#A23B72] hover:to-[#F18F01] text-white px-8 py-4"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}