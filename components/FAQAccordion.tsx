'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={cn('space-y-3', className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="card-soft overflow-hidden border-none px-5 py-1">
          <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline hover:text-primary">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
