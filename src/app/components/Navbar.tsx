'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "Our service", href: "/" },
        { label: "Price", href: "/" },
        { label: "About us", href: "/" },
        { label: "Contact us", href: "/" },
    ];

    return(
        <div className="w-full p-6 md:p-8 flex items-center justify-between">
            <div className="relative w-32 h-12">
              <Image
                src="/webbklar-logo.png"
                alt="Webbklar agency logo"
                fill
                className="object-contain"
                />   
            </div> 
            {/* Desktop menu */}
            <nav>
                <ul className="hidden md:flex gap-6 items-center">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <Link className="mx-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>   
            </nav>
            {/* Hamburger menu */}
            <button
                className="md:hidden flex flex-col"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu">
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
            </button> 
            <nav className={`absolute right-0 top-24 w-full bg-white border-b z-50 transition-all duration-300 ease-in-out overflow-hidden md:hidden ${menuOpen ? 'max-h-screen opacity-100 py-12': 'max-h-0 opacity-0 py-0' }`}>
                <ul className="flex flex-col gap-12 items-center">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <Link className="mx-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul> 
            </nav>
        </div>
    );
}