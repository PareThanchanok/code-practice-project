import Link from "next/link";

interface ButtonProps {
    link: string; 
    cta: string;
    variant?: "primary" | "secondary";
}

export default function Button({ link, cta, variant = "primary", ...props } : ButtonProps) {
    const baseClass = "px-6 py-3 rounded-lg text-sm md:text-lg w-fit";
    const varientClass = 
        variant === "primary" 
            ? "bg-neutral-900 text-white"
            : "bg-neutral-100 text-black"
    return(
        <Link href={link} className={`${baseClass} ${varientClass}`}>{cta}</Link>
    );
}