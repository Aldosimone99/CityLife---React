import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "h-10 rounded-xl px-4 text-sm font-medium transition active:translate-y-[1px]";
  const styles =
    variant === "ghost"
      ? "bg-transparent hover:bg-neutral-100 text-neutral-800"
      : "bg-sky-600 text-white hover:bg-sky-700 shadow-sm";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}