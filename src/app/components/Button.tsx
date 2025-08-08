import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({variant = "primary", className = "", children, ...props}: ButtonProps) {
  const primary =
    "bg-neutral-900 px-6 py-3 text-white rounded-lg text-lg";
  const secondary =
    "bg-neutral-200 px-6 py-3 rounded-lg text-lg";
  const variantClass = variant === "primary" ? primary : secondary;

  return (
    <button className={`${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}