import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Instagram, MessageCircle, Mail, Clock, Users, Heart } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola! Me interesa conocer más sobre los servicios de Meraki Asesoría Educativa.

*Información de contacto:*
- Nombre: ${formData.nombre}
- Email: ${formData.email}
- Teléfono: ${formData.telefono}
- Servicio de interés: ${formData.servicio}

*Mensaje:*
${formData.mensaje}`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      description: "Síguenos para contenido educativo",
      value: "@meraki.asesoriaeducativa",
      link: "https://www.instagram.com/meraki.asesoriaeducativa/",
      color: "from-[#A23B72] to-[#F18F01]"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      value: "Escríbenos ahora",
      link: "https://wa.me/?text=Hola! Me interesa conocer más sobre Meraki Asesoría Educativa",
      color: "from-[#2E86AB] to-[#A23B72]"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Contáctanos por correo",
      value: "info@merakiasesoria.com",
      link: "mailto:info@merakiasesoria.com",
      color: "from-[#F18F01] to-[#2E86AB]"
    }
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-[#2E86AB]" />,
      number: "500+",
      label: "Estudiantes asesorados"
    },
    {
      icon: <Heart className="h-8 w-8 text-[#A23B72]" />,
      number: "95%",
      label: "Satisfacción familiar"
    },
    {
      icon: <Clock className="h-8 w-8 text-[#F18F01]" />,
      number: "24h",
      label: "Tiempo de respuesta"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tu hijo merece crecer con  <span className="bg-gradient-to-r from-[#2E86AB] to-[#A23B72] bg-clip-text text-transparent">confianza y alegría.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agenda una consulta gratuita y diseñemos juntos el apoyo que necesita para alcanzar su máximo potencial.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#2E86AB] to-[#A23B72] bg-clip-text text-transparent">
                  Solicita tu Consulta Gratuita
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="text-gray-700 font-medium">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        className="mt-2 border-gray-300 focus:border-[#2E86AB]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-gray-700 font-medium">Teléfono</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        className="mt-2 border-gray-300 focus:border-[#2E86AB]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-[#2E86AB]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="servicio" className="text-gray-700 font-medium">Servicio de interés</Label>
                    <Select onValueChange={(value) => setFormData({...formData, servicio: value})}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-[#2E86AB]">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asesoria-personalizada">Asesoría Educativa Personalizada</SelectItem>
                        <SelectItem value="terapia-lenguaje">Terapia de Lenguaje</SelectItem>
                        <SelectItem value="lectoescritura">Lectoescritura</SelectItem>
                        <SelectItem value="ludoteca">Ludoteca</SelectItem>
                        <SelectItem value="ingles">Inglés</SelectItem>
                        <SelectItem value="motricidad">Motricidad Fina</SelectItem>
                        <SelectItem value="no estoy seguro">No estoy seguro</SelectItem>

                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-gray-700 font-medium">Cuéntanos sobre tu situación</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-[#2E86AB] min-h-[120px]"
                      placeholder="Describe brevemente tu situación actual y qué te gustaría lograr..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2E86AB] to-[#A23B72] hover:from-[#A23B72] hover:to-[#F18F01] text-white py-3 text-lg font-medium"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 bg-gradient-to-r ${method.color} rounded-full text-white group-hover:scale-110 transition-transform`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 text-lg">{method.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                          <a 
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2E86AB] hover:text-[#A23B72] font-medium transition-colors"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Stats */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-[#2E86AB]/10 via-[#A23B72]/10 to-[#F18F01]/10">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-center mb-8 bg-gradient-to-r from-[#2E86AB] to-[#A23B72] bg-clip-text text-transparent">
                    Nuestros Números
                  </h4>
                  <div className="grid grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-3">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-800 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  🌈 ¡Tu futuro educativo comienza hoy!
                </h4>
                <p className="text-gray-600 mb-6">
                  No esperes más para transformar tu experiencia académica. 
                  Estamos aquí para acompañarte con alma, creatividad y amor.
                </p>
                <Button 
                  className="bg-gradient-to-r from-[#F18F01] to-[#A23B72] hover:from-[#A23B72] hover:to-[#2E86AB] text-white px-8 py-3"
                  onClick={() => window.open("https://wa.me/?text=Hola! Quiero agendar mi consulta gratuita con Meraki Asesoría Educativa", '_blank')}
                >
                  Agenda tu Consulta GRATIS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}