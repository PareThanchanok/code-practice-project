import ProductCard from "../components/ProductCard";

export default function ProductList () {
    const productCards = [
        {image: "/design-service.png", title: "Design", alt: "Design service thumbnail", subtitle: "web and branding", description: "Personalize your brand with creative and seamless web design to improve your brand visibility in digital world.", link: "/" },
        {image: "/enhance-service.png", title: "Enhance", alt: "Enhance service thumbnail", subtitle: "business strategies", description: "Boost your business strategies with data-driven insights from booking system and customer visit statistic analysis.", link: "/" },
        {image: "/optimize-service.png", title: "Optimize", alt: "Optimize service thumbnail", subtitle: "scalable systems", description: "Expand your business with CMS for full customization and long-term scalability.", link: "/" },
    ]
    return(
        <section className="section-wrapper">
            <h2 className="!text-[32px] md:!text-[42px]">Our service</h2>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                {productCards.map((card) => (
                    <li key={card.title}>
                      <ProductCard 
                        image={card.image}
                        alt={card.alt}
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        link={card.link}/>  
                    </li>
                ))}
            </ul>
        </section>
    );
}