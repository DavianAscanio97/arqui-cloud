import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechnologySection() {
  const technologies = [
    { name: "NestJS", category: "Backend", description: "API robusto, seguro y modular" },
    { name: "Angular", category: "Frontend", description: "Experiencia de usuario interactiva y dinámica" },
    { name: "PostgreSQL", category: "Base de Datos", description: "Flexibilidad en almacenamiento documental" },
    { name: "AWS", category: "Cloud", description: "Almacenamiento, cómputo y balanceo de carga" },
    { name: "Docker", category: "DevOps", description: "Contenerización y despliegue consistente" },
    { name: "WebSockets", category: "Comunicación", description: "Colaboración en tiempo real" },
  ]

  const devopsFeatures = [
    "Arquitectura basada en microservicios",
    "Despliegue automatizado con AWS Elastic Beanstalk",
    "Pipeline CI/CD con GitHub Actions",
    "Monitoreo centralizado con AWS CloudWatch",
    "Backup y recuperación automatizados",
    "Orquestación con Kubernetes",
  ]

  return (
    <section id="tecnologia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tecnología y Arquitectura</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construido con las mejores tecnologías para garantizar rendimiento y escalabilidad
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                  <Badge variant="secondary">{tech.category}</Badge>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* DevOps Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Modelo de Servicio y DevOps</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {devopsFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Provider */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Proveedor de Nube Sugerido</h3>
            <p className="text-lg">
              <strong>AWS</strong> es la mejor opción por su ecosistema completo de servicios para almacenamiento,
              cómputo, seguridad y DevOps, facilitando el desarrollo y escalabilidad de aplicaciones empresariales
              modernas y seguras.
            </p>
          </div>
        </div>

        {/* Scalability */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Expectativas de Escalabilidad</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Arquitectura Escalable</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Arquitectura modular y basada en microservicios</li>
                <li>• Balanceadores de carga y autoescalado en la nube</li>
                <li>• Capacidad para miles de usuarios concurrentes</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Alta Disponibilidad</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Disponibilidad 24/7 garantizada</li>
                <li>• Soporte global y acceso continuo</li>
                <li>• Redundancia y recuperación automática</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
