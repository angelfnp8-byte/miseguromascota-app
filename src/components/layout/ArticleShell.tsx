import Link from "next/link";
import type { ReactNode } from "react";

export function ArticleShell({
  crumb,
  title,
  children,
  maxWidth = "820px",
}: {
  crumb: string;
  title: string;
  children: ReactNode;
  maxWidth?: string;
}) {
  return (
    <div className="mx-auto px-5 pt-10 pb-14" style={{ maxWidth }}>
      <p className="mb-1.5 text-[0.85rem] text-(--color-text-light)">
        <Link href="/" className="hover:underline">
          Inicio
        </Link>{" "}
        / {crumb}
      </p>
      <h1>{title}</h1>
      <div className="prose-content mt-4">{children}</div>
    </div>
  );
}
