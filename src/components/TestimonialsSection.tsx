import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
  {
    name: "Javier López",
    role: "Padre de un niño con dificultades de lenguaje",
    content: "Las terapias de lenguaje marcaron una gran diferencia en la comunicación de mi hijo. Ahora se expresa con mayor seguridad y confianza.",
    rating: 5,
    gradient: "from-[#6A0572] to-[#FF6B6B]"
  },
  {
    name: "Camila Torres",
    role: "Estudiante de primaria",
    content: "Con el programa de lectoescritura aprendí a leer de forma más fluida y a disfrutar los libros. Ahora escribir me resulta más fácil y divertido.",
    rating: 5,
    gradient: "from-[#1E3A8A] to-[#3B82F6]"
  },
  {
    name: "Andrea Martínez",
    role: "Madre de familia",
    content: "La ludoteca es un espacio maravilloso. Mi hija aprende jugando, desarrolla su creatividad y se siente feliz cada vez que asiste.",
    rating: 5,
    gradient: "from-[#F59E0B] to-[#EF4444]"
  },
  {
    name: "Daniel Rivas",
    role: "Estudiante de secundaria",
    content: "Las clases de inglés son dinámicas y entretenidas. Ahora puedo conversar con más confianza y entiendo mucho mejor cuando escucho el idioma.",
    rating: 5,
    gradient: "from-[#0EA5E9] to-[#0369A1]"
  },
  {
    name: "Sofía Delgado",
    role: "Estudiante de bachillerato",
    content: "Gracias al refuerzo en matemáticas, entendí temas que antes me parecían imposibles. Ahora resuelvo problemas con mayor seguridad.",
    rating: 5,
    gradient: "from-[#16A34A] to-[#065F46]"
  },
  {
    name: "Roberto García",
    role: "Padre de un niño en etapa preescolar",
    content: "Con las actividades de motricidad fina, mi hijo ha mejorado mucho su coordinación y precisión. Ahora dibuja y escribe con más facilidad.",
    rating: 5,
    gradient: "from-[#9333EA] to-[#C084FC]"
  }
];

  const benefits = [
    {
      title: "Resultados Comprobados",
      description: "95% de nuestros estudiantes mejoran su rendimiento académico",
      icon: "📈"
    },
    {
      title: "Enfoque Personalizado",
      description: "Cada estudiante recibe un plan adaptado a sus necesidades únicas",
      icon: "🎯"
    },
    {
      title: "Acompañamiento Integral",
      description: "Apoyo continuo durante todo el proceso educativo",
      icon: "🤝"
    },
    {
      title: "Metodología Innovadora",
      description: "Técnicas modernas basadas en la filosofía Meraki",
      icon: "💡"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-[#2E86AB] to-[#A23B72] bg-clip-text text-transparent">estudiantes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de transformación educativa que demuestran nuestro compromiso con el éxito de cada estudiante
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient}`}></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-[#A23B72] opacity-30 mr-4" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 text-[#F18F01] fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-[#F5F5F5] to-[#E3F2FD] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#2E86AB] to-[#A23B72] bg-clip-text text-transparent">
              ¿Por qué elegir Meraki?
            </h3>
            <p className="text-lg text-gray-700">
              Nuestros resultados hablan por sí solos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 text-5xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Conoce más testimonios en nuestro Instagram</p>
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
    </section>
  );
}