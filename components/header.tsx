"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Cloud } from "lucide-react"

export function Header() {
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ArquiCloud</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("acerca")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Acerca de
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("tecnologia")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Tecnología
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contacto")} className="bg-blue-600 hover:bg-blue-700">
              Comenzar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("acerca")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Acerca de
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("tecnologia")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Tecnología
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contacto
              </button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection("contacto")} className="w-full bg-blue-600 hover:bg-blue-700">
                  Comenzar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
