"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Cloud, Lock, Mail } from "lucide-react"
import { useAuth } from "./auth-provider"
import Link from "next/link"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(email, password)
      if (success) {
        router.push("/admin")
      } else {
        setError("Credenciales incorrectas")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Error al iniciar sesión")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"></div>
      </div>

      <Card className="w-full max-w-md glass neon-blue">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="relative">
              <Cloud className="h-10 w-10 text-indigo-400" />
              <div className="absolute inset-0 animate-pulse-slow">
                <Cloud className="h-10 w-10 text-indigo-400 opacity-50" />
              </div>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              ArquiCloud
            </span>
          </div>
          <CardTitle className="text-2xl text-white">Acceso al Sistema</CardTitle>
          <p className="text-gray-400">Ingresa tus credenciales para continuar</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {error && (
              <Alert className="border-red-500 bg-red-500/10">
                <AlertDescription className="text-red-400">{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 py-3"
              disabled={isLoading}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </form>

          <div className="text-center space-y-4">
            <div className="text-sm text-gray-400">Credenciales de prueba:</div>
            <div className="text-xs text-gray-500 space-y-1">
              <div>Email: admin@arquicloud.com</div>
              <div>Contraseña: admin123</div>
            </div>
            <Link href="/" className="text-indigo-400 hover:text-indigo-300 text-sm">
              ← Volver al inicio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
