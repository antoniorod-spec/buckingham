import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageBlockProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: '4/3' | '16/9' | '1/1'
}

export function ImageBlock({
  src,
  alt,
  className,
  aspectRatio = '4/3',
}: ImageBlockProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-border',
        aspectRatio === '4/3' && 'aspect-[4/3]',
        aspectRatio === '16/9' && 'aspect-[16/9]',
        aspectRatio === '1/1' && 'aspect-square',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}
