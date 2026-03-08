import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface FormFieldProps {
  id: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'number'
  placeholder?: string
  required?: boolean
  className?: string
  error?: string
}

export function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  required,
  className,
  error,
  ...props
}: FormFieldProps & React.ComponentProps<typeof Input>) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id} className="text-sm font-medium text-secondary">
        {label}
        {required ? <span className="ml-1 text-destructive">*</span> : null}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 rounded-2xl border-secondary/12 bg-white px-4 text-foreground shadow-none focus-visible:border-secondary/30 focus-visible:ring-secondary/12"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}

interface FormTextareaProps {
  id: string
  label: string
  placeholder?: string
  required?: boolean
  rows?: number
  className?: string
  error?: string
}

export function FormTextarea({
  id,
  label,
  placeholder,
  required,
  rows = 3,
  className,
  error,
  ...props
}: FormTextareaProps & React.ComponentProps<typeof Textarea>) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id} className="text-sm font-medium text-secondary">
        {label}
        {required ? <span className="ml-1 text-destructive">*</span> : null}
      </Label>
      <Textarea
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="min-h-28 rounded-2xl border-secondary/12 bg-white px-4 py-3 text-foreground shadow-none focus-visible:border-secondary/30 focus-visible:ring-secondary/12"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}

interface FormSelectProps {
  id: string
  label: string
  placeholder?: string
  required?: boolean
  options: { value: string; label: string }[]
  className?: string
  error?: string
}

export function FormSelect({
  id,
  label,
  placeholder,
  required,
  options,
  className,
  error,
  ...props
}: FormSelectProps & React.ComponentProps<'select'>) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id} className="text-sm font-medium text-secondary">
        {label}
        {required ? <span className="ml-1 text-destructive">*</span> : null}
      </Label>
      <select
        id={id}
        name={id}
        required={required}
        defaultValue=""
        className="flex h-11 w-full rounded-2xl border border-secondary/12 bg-white px-4 text-sm text-foreground outline-none transition-colors focus:border-secondary/30 focus:ring-2 focus:ring-secondary/12 disabled:cursor-not-allowed disabled:opacity-50"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
