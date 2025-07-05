import { Card, CardContent } from "@/components/ui/card"
import { Shield, Upload, Eye, Users, FolderOpen, MessageSquare, Cloud, Download, Settings } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Autenticación Segura",
      description: "Registro y autenticación de usuarios con perfiles personalizados según roles y permisos.",
    },
    {
      icon: Upload,
      title: "Gestión de Documentos",
      description:
        "Subida, edición y visualización de documentos en múltiples formatos (PDF, Office, CAD, BIM, imágenes, videos, 3D).",
    },
    {
      icon: Eye,
      title: "Visualizadores Especializados",
      description: "Visualizadores especializados para cada tipo de documento, incluyendo modelos 3D y planos.",
    },
    {
      icon: Users,
      title: "Colaboración en Tiempo Real",
      description: "Colaboración en tiempo real con comentarios, anotaciones y control de versiones.",
    },
    {
      icon: FolderOpen,
      title: "Espacios de Trabajo",
      description: "Espacios de trabajo y carpetas compartidas para equipos multidisciplinarios.",
    },
    {
      icon: MessageSquare,
      title: "Comunicación Interna",
      description: "Chat interno y sistema de notificaciones para comunicación ágil.",
    },
    {
      icon: Cloud,
      title: "Almacenamiento Seguro",
      description: "Almacenamiento seguro en la nube con backups automáticos y recuperación ante desastres.",
    },
    {
      icon: Settings,
      title: "Panel de Administración",
      description: "Panel de administración para gestión de usuarios, proyectos y permisos.",
    },
    {
      icon: Download,
      title: "Exportación",
      description: "Exportación y conversión de documentos a formatos estándar para interoperabilidad.",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicios y Funcionalidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para una gestión documental eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Valor Agregado</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Plataforma Integral</div>
              <div className="text-blue-100">Soporta una amplia variedad de formatos documentales</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Visualización Avanzada</div>
              <div className="text-blue-100">Edición en tiempo real adaptada a diversos documentos</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Control de Versiones</div>
              <div className="text-blue-100">Sistema robusto de auditoría para trazabilidad</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Seguridad Empresarial</div>
              <div className="text-blue-100">Cumple con estándares empresariales y regulatorios</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Adaptabilidad</div>
              <div className="text-blue-100">Para múltiples sectores y necesidades</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Escalabilidad</div>
              <div className="text-blue-100">Arquitectura preparada para el crecimiento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
