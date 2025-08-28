import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-[#A23B72]" />,
      title: "Amor por la educación",
      description: "Cada proceso educativo lo abordamos con pasión genuina"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#F18F01]" />,
      title: "Creatividad",
      description: "Metodologías innovadoras adaptadas a cada estudiante"
    },
    {
      icon: <Users className="h-8 w-8 text-[#2E86AB]" />,
      title: "Dedicación personalizada",
      description: "Reconocemos la singularidad de cada persona"
    },
    {
      icon: <Target className="h-8 w-8 text-[#A23B72]" />,
      title: "Innovación educativa",
      description: "Siempre a la vanguardia en técnicas de enseñanza"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              ¿Qué significa <span className="bg-gradient-to-r from-[#2E86AB] to-[#A23B72] bg-clip-text text-transparent">Meraki</span>?
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <span className="font-semibold text-[#A23B72]">Meraki</span> es una palabra griega que significa 
                <span className="font-semibold text-[#F18F01]"> hacer algo con alma, creatividad y amor</span>. 
                Es exactamente así como abordamos cada proceso educativo: con pasión, dedicación y un enfoque 
                personalizado que reconoce la singularidad de cada estudiante.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Creemos que la educación va más allá de la simple transmisión de conocimientos. 
                Se trata de despertar el potencial único de cada persona y acompañarla en su 
                journey hacia el éxito académico y personal.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#2E86AB]/10 via-[#A23B72]/10 to-[#F18F01]/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#2E86AB] to-[#A23B72] bg-clip-text text-transparent">
                Nuestra Misión
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Transformar el futuro educativo con pasión, dedicación y amor, 
                proporcionando asesoría personalizada que empodere a cada estudiante 
                para alcanzar su máximo potencial académico y personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}