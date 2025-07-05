"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Download, Trash2, Eye, Edit, Plus, Search } from "lucide-react"

interface Document {
  id: string
  name: string
  type: string
  size: string
  uploadDate: string
  status: "active" | "archived" | "processing"
  category: string
}

export function AdminDashboard() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Plano Arquitectónico - Edificio A.pdf",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      status: "active",
      category: "Arquitectura",
    },
    {
      id: "2",
      name: "Modelo 3D - Estructura.dwg",
      type: "CAD",
      size: "15.7 MB",
      uploadDate: "2024-01-14",
      status: "active",
      category: "Ingeniería",
    },
    {
      id: "3",
      name: "Especificaciones Técnicas.docx",
      type: "DOCX",
      size: "1.2 MB",
      uploadDate: "2024-01-13",
      status: "processing",
      category: "Documentación",
    },
    {
      id: "4",
      name: "Presentación Proyecto.pptx",
      type: "PPTX",
      size: "8.9 MB",
      uploadDate: "2024-01-12",
      status: "archived",
      category: "Presentaciones",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

  const stats = [
    { title: "Total Documentos", value: "1,234", change: "+12%", icon: FileText },
    { title: "Almacenamiento", value: "2.4 TB", change: "+8%", icon: Upload },
    { title: "Usuarios Activos", value: "89", change: "+5%", icon: Eye },
    { title: "Descargas Hoy", value: "156", change: "+23%", icon: Download },
  ]

  const categories = ["all", "Arquitectura", "Ingeniería", "Documentación", "Presentaciones"]

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "processing":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "archived":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const handleDeleteDocument = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Panel de Control
          </h1>
          <p className="text-gray-400 mt-2">Gestiona tus documentos y recursos</p>
        </div>
        <Button
          className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          onClick={() => setIsUploadModalOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Subir Documento
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="glass hover:neon-blue transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-green-400">{stat.change}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documents Section */}
      <Card className="glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-white">Gestión de Documentos</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar documentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-64"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white rounded-md px-3 py-2"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "Todas las categorías" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{doc.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                      <span>{doc.uploadDate}</span>
                      <Badge variant="outline" className="text-xs">
                        {doc.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={`text-xs ${getStatusColor(doc.status)}`}>{doc.status}</Badge>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-red-400"
                      onClick={() => handleDeleteDocument(doc.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="w-full max-w-md glass neon-blue">
            <CardHeader>
              <CardTitle className="text-white">Subir Nuevo Documento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 mb-2">Arrastra archivos aquí o haz clic para seleccionar</p>
                <Button variant="outline" className="border-gray-600 text-gray-300 bg-transparent">
                  Seleccionar Archivos
                </Button>
              </div>
              <div className="space-y-2">
                <Input
                  placeholder="Nombre del documento"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <select className="w-full bg-gray-800 border-gray-700 text-white rounded-md px-3 py-2">
                  <option>Seleccionar categoría</option>
                  <option>Arquitectura</option>
                  <option>Ingeniería</option>
                  <option>Documentación</option>
                  <option>Presentaciones</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                  Subir
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-600 text-gray-300 bg-transparent"
                  onClick={() => setIsUploadModalOpen(false)}
                >
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
