import Image from 'next/image'
import { cn } from '@/lib/utils'

interface GalleryItemProps {
  src: string
  alt: string
  className?: string
}

export function GalleryItem({ src, alt, className }: GalleryItemProps) {
  return (
    <div className={cn('card-soft group relative aspect-[4/3] overflow-hidden p-2', className)}>
      <div className="relative h-full w-full overflow-hidden rounded-[1.2rem]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}
