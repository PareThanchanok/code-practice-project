'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className="w-full p-6 md:p-8 flex items-center justify-between">
            <div className="relative w-32 h-12">
              <Image
                src="/webbklar-logo.png"
                alt="Logo"
                fill
                className="object-contain"
                />   
            </div> 
            {/* Desktop menu */}
            <div className="hidden md:flex gap-6 items-center">
                <Link className="mx-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href="/">Our service</Link>
                <Link className="mx-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href="/">Price</Link>
                <Link className="mx-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href="/">About us</Link>
                <Link className="mx-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href="/">Contact us</Link> 
                
            </div>
            {/* Hamburger menu */}
            <button
                className="md:hidden flex flex-col"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu">
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
            </button>
            
            <div className={`absolute right-0 top-24 w-full bg-white border-b flex flex-col gap-12 items-center z-50 transition-all duration-300 ease-in-out overflow-hidden md:hidden ${menuOpen ? 'max-h-96 opacity-100 py-12': 'max-h-0 opacity-0 py-0' }`}>
                <Link className="my-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href="/">Our service</Link>
                <Link className="my-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href="/">Price</Link>
                <Link className="my-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href="/">About us</Link>
                <Link className="my-6 text-xl font-medium text-neutral-500 hover:text-neutral-900" href="/">Contact us</Link> 
            </div>
        </nav>
    );
}