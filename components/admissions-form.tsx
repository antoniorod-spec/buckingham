"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { CheckCircle, Send } from "lucide-react"

export function AdmissionsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="admisiones" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/30">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-background sm:text-4xl">
              ¡Gracias por contactarnos!
            </h2>
            <p className="mt-4 text-lg text-background/80">
              Hemos recibido tu solicitud. Nos pondremos en contacto contigo muy pronto para agendar una visita.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="admisiones" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Comienza el camino hacia una educación excepcional
            </h2>
            <p className="mt-4 text-lg text-background/80">
              Estamos listos para conocer a tu familia. Completa el formulario y nos pondremos en contacto 
              contigo para agendar una visita personalizada a nuestras instalaciones.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/30">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <p className="text-background/90">Completa el formulario con tus datos</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/30">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <p className="text-background/90">Te contactaremos en menos de 24 horas</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/30">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <p className="text-background/90">Agenda tu visita y conoce nuestras instalaciones</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-xl ring-1 ring-primary/20 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="parent-name" className="text-secondary">Nombre del padre/madre</FieldLabel>
                  <Input
                    id="parent-name"
                    name="parentName"
                    placeholder="Tu nombre completo"
                    required
                    className="border-primary/30 focus:border-primary focus:ring-primary"
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="child-name" className="text-secondary">Nombre del niño(a)</FieldLabel>
                  <Input
                    id="child-name"
                    name="childName"
                    placeholder="Nombre de tu hijo(a)"
                    required
                    className="border-primary/30 focus:border-primary focus:ring-primary"
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="level" className="text-secondary">Nivel de interés</FieldLabel>
                  <Select name="level" required>
                    <SelectTrigger id="level" className="border-primary/30 focus:border-primary focus:ring-primary">
                      <SelectValue placeholder="Selecciona un nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maternal">Maternal (1-3 años)</SelectItem>
                      <SelectItem value="preescolar">Preescolar (3-6 años)</SelectItem>
                      <SelectItem value="primaria">Primaria (6-12 años)</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="phone" className="text-secondary">Teléfono de contacto</FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Tu número de teléfono"
                    required
                    className="border-primary/30 focus:border-primary focus:ring-primary"
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="message" className="text-secondary">Mensaje (opcional)</FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="¿Tienes alguna pregunta o comentario?"
                    rows={3}
                    className="border-primary/30 focus:border-primary focus:ring-primary"
                  />
                </Field>
              </FieldGroup>

              <Button type="submit" size="lg" className="w-full gap-2 bg-primary text-secondary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Spinner className="h-4 w-4" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Quiero informes
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-secondary/60">
                Al enviar este formulario, aceptas que nos comuniquemos contigo para brindarte información sobre admisiones.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
