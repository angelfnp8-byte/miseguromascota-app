import Image from "next/image";

/**
 * Homepage hero artwork — dog + cat duo, matching the site's paw-print
 * shield badge motif. Raster illustration (public/images/hero-pets.png)
 * rather than hand-drawn SVG shapes.
 */
export function HeroPetsIllustration({ className }: { className?: string }) {
  return (
    <Image
      src="/images/hero-pets-v3.png"
      alt="Ilustración de un perro y un gato con placas de identificación en forma de escudo"
      width={481}
      height={385}
      className={className}
      priority
    />
  );
}
