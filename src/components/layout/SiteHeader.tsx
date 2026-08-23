import Link from "next/link";
import { LogoMark } from "@/components/logo/LogoMark";
import { MobileNav } from "@/components/layout/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" aria-label="Mi Seguro Mascota" className="flex items-center">
          <LogoMark />
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
