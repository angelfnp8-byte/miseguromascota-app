import type { ReactNode } from "react";

const paths: Record<IconName, ReactNode> = {
  book: (
    <>
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5Z" />
      <path d="M20 5.5c0-.83-.67-1.5-1.5-1.5H12v16h6.5c.83 0 1.5-.67 1.5-1.5Z" />
    </>
  ),
  document: (
    <>
      <path d="M6 3.5h8l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4" />
      <path d="M8 12h8M8 16h8" />
    </>
  ),
  paw: (
    <>
      <ellipse cx="12" cy="16" rx="5" ry="4" />
      <ellipse cx="5.5" cy="10.5" rx="2.1" ry="2.6" />
      <ellipse cx="9.3" cy="7" rx="2.1" ry="2.7" />
      <ellipse cx="14.7" cy="7" rx="2.1" ry="2.7" />
      <ellipse cx="18.5" cy="10.5" rx="2.1" ry="2.6" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M9.5 9.7c0-1.2 1.1-2 2.5-2s2.5.8 2.5 1.9-1 1.6-2.5 1.9-2.5.9-2.5 2 1.1 1.9 2.5 1.9 2.5-.8 2.5-2" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 12.3l2.6 2.6L16 9.5" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.3 9.5a2.7 2.7 0 1 1 4 2.3c-.9.5-1.3 1-1.3 2" />
      <circle cx="12" cy="16.6" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.3 15.3 20 20" />
    </>
  ),
  message: (
    <>
      <path d="M4 5.5h16v11H9.5L5 20v-3.5H4Z" />
    </>
  ),
  heart: (
    <>
      <path d="M12 19.5c-4.8-3.1-8-6.3-8-9.9A4.4 4.4 0 0 1 12 6.9a4.4 4.4 0 0 1 8 2.7c0 3.6-3.2 6.8-8 9.9Z" />
    </>
  ),
};

export type IconName = "book" | "document" | "paw" | "coin" | "check" | "help" | "search" | "message" | "heart";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-6 w-6"}
    >
      {paths[name]}
    </svg>
  );
}
