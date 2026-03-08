'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { FormField, FormSelect, FormTextarea } from '@/components/FormField'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { cn } from '@/lib/utils'

const levelOptions = [
  { value: 'maternal', label: 'Maternal (1 a 3 años)' },
  { value: 'preescolar', label: 'Preescolar (3 a 6 años)' },
  { value: 'primaria', label: 'Primaria (6 a 12 años)' },
]

interface LeadFormProps {
  variant?: 'default' | 'compact'
  className?: string
}

export function LeadForm({ variant = 'default', className }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="card-soft border-secondary/10 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/6">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
          Gracias por escribirnos
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Recibimos tu solicitud y el equipo de admisiones se pondrá en contacto contigo a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-5', className)}>
      <FormField id="parentName" label="Nombre del padre, madre o tutor" placeholder="Tu nombre completo" required />
      <FormField id="childName" label="Nombre del alumno" placeholder="Nombre de tu hijo o hija" required />
      {variant !== 'compact' ? (
        <FormField id="childAge" label="Edad" type="number" placeholder="Edad en años" />
      ) : null}
      <FormSelect
        id="level"
        label="Nivel de interés"
        placeholder="Selecciona un nivel"
        required
        options={levelOptions}
      />
      <FormField id="phone" label="Teléfono" type="tel" placeholder="Tu número de contacto" required />
      <FormField id="email" label="Correo electrónico" type="email" placeholder="tu@email.com" required />
      <FormTextarea id="message" label="Mensaje" placeholder="Cuéntanos qué te gustaría conocer" rows={variant === 'compact' ? 3 : 4} />
      <div className="space-y-3 pt-2">
        <Button type="submit" size="lg" className="h-12 w-full gap-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner className="h-4 w-4" />
              Enviando solicitud...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Solicitar informes
            </>
          )}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Al enviar este formulario, tu información será utilizada únicamente para dar seguimiento a tu solicitud.
        </p>
      </div>
    </form>
  )
}
