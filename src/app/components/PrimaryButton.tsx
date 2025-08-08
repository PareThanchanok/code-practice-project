import Link from "next/link";

interface PrimaryButtonProps {
    link: string; 
    cta: string;
}

export default function PrimaryButton({ link, cta } : PrimaryButtonProps) {
    return(
        <Link href={link} className="bg-neutral-900 px-6 py-3 text-white rounded-lg text-lg">{cta}</Link>
    );
}