import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function Hero () {
    return(
        <section className="flex flex-col items-start pt-32 md:pt-52 pl-8 md:pl-16 max-w-[600px] min-h-[calc(100vh-112px)]">
            <main>
                <h1 className="mb-8">Ready your business to stand out.</h1>
                <p className="mb-12 !text-xl md:!text-2xl text-neutral-400 !font-medium">We are a web agency helping your business visible and unique in the digital world.</p>
                <div className="flex gap-6">
                    <PrimaryButton link="/" cta="Contact us"/>
                    <SecondaryButton link="/" cta="Read more"/>
                </div>
            </main>
        </section>
    );
}