import Link from "next/link";
import type { ReactNode } from "react";

interface Win95ButtonProps {
  href?: string;
  children: ReactNode;
  accent?: boolean;
  active?: boolean;
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

export default function Win95Button({
  href,
  children,
  accent = false,
  active = false,
  size = "md",
  className = "",
  onClick,
  type = "button",
  "aria-label": ariaLabel,
}: Win95ButtonProps) {
  const sizeClasses = size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm";
  const baseClasses = `inline-block select-none border-2 font-mono font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${sizeClasses} ${
    accent
      ? "bg-[#000080] text-white hover:bg-[#0000a0]"
      : "bg-[#c0c0c0] text-black"
  } ${
    active
      ? "border-t-[#808080] border-l-[#808080] border-r-white border-b-white translate-x-px translate-y-px"
      : "border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white active:translate-x-px active:translate-y-px"
  } ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={baseClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} aria-label={ariaLabel}>
      {children}
    </button>
  );
}