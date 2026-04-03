import Image from "next/image";

interface BackgroundImageProps {
  src: string;
  alt: string;
  opacity?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Full-bleed background image layer for sections.
 * Used at low opacity (5-12%) to add atmospheric depth without competing with text.
 */
export function BackgroundImage({
  src,
  alt,
  opacity = 0.08,
  className = "",
  priority = false,
}: BackgroundImageProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ opacity }}
        sizes="100vw"
        priority={priority}
        quality={60}
      />
    </div>
  );
}
