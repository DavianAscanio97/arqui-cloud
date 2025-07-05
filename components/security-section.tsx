import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, UserCheck, Search, Database } from "lucide-react"

export function SecuritySection() {
  const securityMeasures = [
    {
      icon: UserCheck,
      title: "Autenticación Multifactor (MFA)",
      description: "Garantiza acceso seguro con múltiples capas de verificación",
    },
    {
      icon: Lock,
      title: "Cifrado de Datos",
      description: "Cifrado de datos en tránsito y en reposo para proteger la información",
    },
    {
      icon: Shield,
      title: "Control Granular de Acceso",
      description: "Basado en roles y permisos específicos para cada usuario",
    },
    {
      icon: Search,
      title: "Auditorías y Monitoreo",
      description: "Constantes para detectar y mitigar riesgos de seguridad",
    },
    {
      icon: Database,
      title: "Backups Automáticos",
      description: "Planes de recuperación ante desastres y backups automáticos",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Medidas de Seguridad</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protección integral de tus datos con los más altos estándares de seguridad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityMeasures.map((measure, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <measure.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{measure.title}</h3>
                <p className="text-gray-600 leading-relaxed">{measure.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Compliance */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Cumplimiento y Certificaciones</h3>
          <p className="text-lg mb-6">
            ArquiCloud cumple con los más altos estándares de seguridad empresarial y regulatorios
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold">ISO 27001</div>
              <div className="text-green-100">Gestión de Seguridad</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold">SOC 2</div>
              <div className="text-green-100">Controles de Seguridad</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold">GDPR</div>
              <div className="text-green-100">Protección de Datos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
