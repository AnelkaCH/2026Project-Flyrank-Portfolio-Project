import type { HTMLAttributes, ReactNode } from "react";

interface Win95InsetProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  small?: boolean;
}

export default function Win95Inset({
  children,
  small = false,
  className = "",
  ...props
}: Win95InsetProps) {
  return (
    <div
      className={`${small ? "win95-inset-sm" : "win95-inset"} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
