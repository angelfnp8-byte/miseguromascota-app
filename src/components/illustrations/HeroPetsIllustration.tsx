import Image from "next/image";

/**
 * Homepage hero artwork — dog + cat duo. Served with `unoptimized` because
 * Next's image pipeline re-encodes this flat-color artwork as a dithered,
 * palette-quantized PNG, visibly degrading the clean edges.
 */
export function HeroPetsIllustration({ className }: { className?: string }) {
  return (
    <Image
      src="/images/hero-pets.webp"
      alt="Ilustración de un perro y un gato felices sentados juntos, con collar a juego"
      width={481}
      height={385}
      className={className}
      unoptimized
      priority
    />
  );
}
