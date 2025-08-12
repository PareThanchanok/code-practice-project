interface ProductCardProps {
    image: string;
    title: string;
    alt: string;
    subtitle: string;
    description: string;
    link: string; 
}

import Image from "next/image";
import Button from "./Button";

export default function ProductCard( {image, title, subtitle, description, alt, link}: ProductCardProps ) {
    return(
        <article className="relative cursor-pointer rounded-2xl group overflow-hidden">
            <div className="bg-black w-full min-h-[450px] md:min-h-[500px] rounded-2xl">
               <div className="w-full h-full">
                    <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover opacity-70 rounded-2xl transition-transform duration-300 group-hover:scale-105"/> 
                </div>

                <div className="absolute p-8 z-20 flex flex-col justify-end h-full">
                    <h3 className="!text-[24px] md:!text-[32px] text-neutral-100 flex flex-col mb-4">
                        <span>{title}</span>
                        <span className="text-2xl"> {subtitle}</span>
                    </h3>
                    <p className="text-neutral-300 !font-light mb-6">{description}</p>
                    <Button link={link} cta="Get started" variant="secondary"/> 
                </div>
            </div>
        </article>
    );
}