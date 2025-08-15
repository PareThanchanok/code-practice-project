'use client';

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function ImageCarousel() {
    const images = [
        {image: "/design-service.png", alt: "Design Service Thumbnail"},
        {image: "/enhance-service.png", alt: "Enhance Service Thumbmail"},
        {image: "/optimize-service.png", alt: "Optimize Service Thumbnail"},
        {image: "/Fabien-profile.webp", alt: "Fabien Profile"},
        {image: "/Karl-profile.jpg", alt: "Karl Profile"},
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const goLeft = () => setCurrentIndex((prev) => prev === 0 ?  0 : prev - 1);
    const goRight = () => setCurrentIndex((prev) => prev === images.length - 1 ? images.length - 1 : prev + 1);

    return(
        <div className="section-wrapper flex flex-col items-center">
            <div className="flex gap-4 mb-8 items-center">
                <button
                    onClick={goLeft}
                    aria-label="Previous Image"
                    className="p-4 bg-neutral-200 h-fit w-fit cursor-pointer">
                    <ChevronLeft/>
                </button>
                <div className="relative w-[700px] h-[500px]">
                    <Image
                    src={images[currentIndex].image}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"/> 
                </div>
                <button
                    onClick={goRight}
                    aria-label="Previous Image"
                    className="p-4 bg-neutral-200 h-fit w-fit cursor-pointer">
                    <ChevronRight/>
                </button>
            </div>

            <div role="status">Image {currentIndex + 1} of {images.length}</div>
            
            <ul className="flex overflow-x-auto justify-center gap-4">
                {images.map((img, idx) => (
                    <li key={idx} onClick={() => setCurrentIndex(idx)} className="cursor-pointer">
                        <div className={`relative w-[200px] h-[100px] ${idx === currentIndex ? "border opacity-100" : "opacity-50 border-none"}`}>
                           <Image 
                            src={img.image}
                            alt={img.alt}
                            fill
                            className="object-cover"/> 
                        </div>
                    </li>
                ))}  
            </ul>
        </div>
    );
}