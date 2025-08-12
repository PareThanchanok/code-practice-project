import Button from "../components/Button";


export default function Hero () {
    return(
        <section className="flex flex-col items-start pt-32 md:pt-52 pl-8 md:pl-16 max-w-[350px] md:max-w-[600px] min-h-[calc(100vh-112px)]">
            <h1 className="mb-8">Ready your business to stand out.</h1>
            <p className="mb-12 !text-lg md:!text-2xl text-neutral-400 !font-medium">We are a web agency helping your business visible and unique in the digital world.</p>
            <div className="flex gap-6">
                <Button link="/" cta="Contact us" variant="primary"/>
                <Button link="/" cta="Read more" variant="secondary"/>
            </div>
        </section>
    );
}