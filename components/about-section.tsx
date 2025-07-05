import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Cog, Users, Globe } from "lucide-react"

export function AboutSection() {
  const aboutItems = [
    {
      icon: AlertTriangle,
      title: "¿Qué problema resuelve?",
      description:
        "La gestión documental en organizaciones y proyectos suele ser compleja debido a la variedad de formatos, la dispersión de archivos y la falta de herramientas colaborativas adecuadas. Esto genera pérdida de tiempo, dificultades en la búsqueda de información, riesgos de seguridad y baja productividad. ArquiCloud centraliza la documentación, ofreciendo un sistema completo para visualizar, editar, compartir y controlar versiones de documentos, facilitando la colaboración y el control de acceso.",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Cog,
      title: "¿Qué hace?",
      description:
        "La aplicación permite a usuarios gestionar, visualizar y colaborar en todo tipo de documentos digitales desde la nube. Soporta formatos variados como PDFs, imágenes, documentos Office, CAD, BIM, planos, modelos 3D, videos y otros archivos digitales. Ofrece herramientas para edición colaborativa, comentarios, control de versiones, visualización avanzada y exportación en formatos estándar.",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Users,
      title: "Usuarios Objetivo",
      description:
        "Profesionales de diversas áreas, empresas, instituciones educativas y organizaciones que requieren una gestión documental robusta y colaborativa. Incluye sectores como construcción, diseño, ingeniería, educación, salud, legal y cualquier equipo que maneje grandes volúmenes de información digital y requiera colaboración efectiva y control de versiones.",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: Globe,
      title: "¿En qué contexto se usará?",
      description:
        "ArquiCloud está diseñada para funcionar en entornos web y móviles, facilitando el acceso a la documentación desde oficinas, aulas, sitios de trabajo o en movilidad. Es aplicable en contextos empresariales, académicos y freelance, con disponibilidad 24/7 para garantizar productividad continua y comunicación eficiente entre usuarios distribuidos.",
      color: "text-purple-600 bg-purple-100",
    },
  ]

  return (
    <section id="acerca" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Acerca de ArquiCloud</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una solución integral para la gestión documental moderna
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aboutItems.map((item, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
