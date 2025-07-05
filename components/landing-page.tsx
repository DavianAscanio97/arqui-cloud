"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Cloud,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Users,
  Database,
  Lock,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Cloud className="h-8 w-8 text-indigo-400" />
                <div className="absolute inset-0 animate-pulse-slow">
                  <Cloud className="h-8 w-8 text-indigo-400 opacity-50" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ArquiCloud
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("tecnologia")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Tecnología
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contacto
              </button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white bg-transparent"
                >
                  Acceder
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                Comenzar
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden glass rounded-lg mt-2 p-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection("inicio")} className="text-left text-gray-300 hover:text-white">
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-left text-gray-300 hover:text-white"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("tecnologia")}
                  className="text-left text-gray-300 hover:text-white"
                >
                  Tecnología
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-left text-gray-300 hover:text-white"
                >
                  Contacto
                </button>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
                  <Link href="/login">
                    <Button variant="outline" className="w-full border-indigo-500 text-indigo-400 bg-transparent">
                      Acceder
                    </Button>
                  </Link>
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500">Comenzar</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="border-indigo-500 text-indigo-400 px-4 py-2">
                Tecnología del Futuro
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                  Gestión Documental
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  del Futuro
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Plataforma integral para almacenar, organizar y colaborar en documentos digitales con tecnología de
                vanguardia
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 px-8 py-4 text-lg neon-blue"
                onClick={() => scrollToSection("servicios")}
              >
                Explorar Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
                onClick={() => scrollToSection("contacto")}
              >
                Contactar
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">24/7</div>
                <div className="text-gray-400">Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100+</div>
                <div className="text-gray-400">Formatos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Servicios Avanzados
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tecnología de vanguardia para la gestión documental del futuro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Seguridad Cuántica",
                desc: "Protección avanzada con cifrado de última generación",
              },
              { icon: Zap, title: "Procesamiento IA", desc: "Análisis inteligente y categorización automática" },
              { icon: Globe, title: "Acceso Global", desc: "Disponibilidad mundial con latencia ultra-baja" },
              { icon: Users, title: "Colaboración Real", desc: "Trabajo en equipo sin límites geográficos" },
              { icon: Database, title: "Almacenamiento Infinito", desc: "Escalabilidad automática sin restricciones" },
              { icon: Lock, title: "Control Granular", desc: "Permisos precisos y auditoría completa" },
            ].map((service, index) => (
              <Card key={index} className="glass hover:neon-blue transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stack Tecnológico
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "NestJS", category: "Backend" },
              { name: "Angular", category: "Frontend" },
              { name: "PostgreSQL", category: "Database" },
              { name: "AWS", category: "Cloud" },
              { name: "Docker", category: "DevOps" },
              { name: "Kubernetes", category: "Orchestration" },
              { name: "WebSockets", category: "Real-time" },
              { name: "AI/ML", category: "Intelligence" },
            ].map((tech, index) => (
              <Card key={index} className="glass-dark hover:neon-purple transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <Badge variant="outline" className="border-purple-500 text-purple-400">
                    {tech.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Conecta con el Futuro
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">info@arquicloud.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Teléfono</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Ubicación</div>
                    <div className="text-gray-400">Ciudad, País</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="glass">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Nombre"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <Input
                    placeholder="Empresa"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Textarea
                    placeholder="Mensaje"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[120px]"
                  />
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 py-3">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Cloud className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ArquiCloud
              </span>
            </div>
            <p className="text-gray-400 mb-8">Transformando la gestión documental con tecnología del futuro</p>
            <div className="text-gray-500">© 2024 ArquiCloud. Todos los derechos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
