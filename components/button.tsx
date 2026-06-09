import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-neutral-800 text-white dark:bg-neutral-100 dark:text-black shadow-[var(--shadow-brand)]  ",
  secondary: "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white  ",
};

export default function Button({
  className,
  children,
  variant = "primary",
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "py-1 px-4 rounded-sm font-sans text-base ",
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
