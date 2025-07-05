"use client"

import { Button } from "@/components/ui/button"
import { Cloud, ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">ArquiCloud</span>
                <br />
                Gestión Integral de Documentación
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Aplicación tecnológica diseñada para facilitar la gestión integral de documentación en la nube. Ayudamos
                a profesionales, empresas y equipos multidisciplinarios a almacenar, organizar, visualizar, colaborar y
                administrar todo tipo de documentos digitales de forma eficiente y segura.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("acerca")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Conocer Más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacto")}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Formatos Soportados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex items-center justify-center h-96">
                <Cloud className="h-48 w-48 text-blue-600 opacity-20" />
              </div>
            </div>
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-purple-100 rounded-full opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
