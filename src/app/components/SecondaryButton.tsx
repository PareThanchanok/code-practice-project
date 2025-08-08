import Link from "next/link";

interface SecondaryButtonProps {
    link: string; 
    cta: string;
}

export default function SecondaryButton({ link, cta } : SecondaryButtonProps) {
    return(
        <Link href={link} className="bg-neutral-200 px-6 py-3 rounded-lg text-lg">{cta}</Link>
    );
}