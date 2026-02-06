import { routes } from "@/app/routes";
import TitleBadge from "@/ui/components/badge/title-badge";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
    return (
        <section className="section-container bg-white mt-5">
            <div className="grid grid-cols-1 grid-rows-[auto_auto] gap-10 py-10 md:py-25 md:px-5 rounded-2xl">

                {/* header */}
                <div className="flex flex-col items-center justify-start gap-4 md:px-13.5">
                    {/* header badge */}
                    <TitleBadge text="About Us" />

                    <h1 className="text-[clamp(38px,5vw,62px)] text-center max-w-161.5 font-medium">
                        Discover <span className="text-secondary">Our Journey</span> and what drives us
                    </h1>

                    <p className="text-sm md:text-lg text-center max-w-164 mb-2.5 text-muted-foreground">Our journey started with one simple belief: every individual deserves the right opportunity — and the right support to reach it.</p>

                </div>

                <div className="flex gap-5 px-13.5">
                    <Image
                        src="/assets/images/about/hero-img.jpg"
                        alt="About Image"
                        width={700}
                        height={450}
                        className="rounded-xl object-cover w-175 h-auto"
                    />
                    <div className="flex relative bg-background rounded-2xl flex-col px-6 py-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-start gap-2">
                                <span className="text-muted-foreground">4.9/5</span>
                                <div className="flex gap-0.5">
                                    {
                                        Array.from({ length: 5 }).map((_, starIndex) => (
                                            <svg key={starIndex} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#F3B344" stroke="#F3B344" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                                        ))
                                    }
                                </div>
                            </div>
                            <p className="text-lg font-medium">Trusted by Professionals & Teams Worldwide</p>
                        </div>
                        <div className="h-full flex items-center justify-center">
                            <Image
                                src="/assets/images/about/bg-ring.png"
                                alt="Ring Image"
                                width={250}
                                height={250}
                                className="absolute z-10 w-62.5 top-36 left-[10%] object-cover h-auto"
                            />
                            {/* inner ring */}
                            <div className="z-30 rounded-full flex items-center justify-center size-23.75 md:size-33.75 absolute bg-[linear-gradient(#4d4d4d33,#0003)]">
                                <Link href={routes.landing.contact} className="relative flex flex-col items-center justify-center size-20 md:size-30 p-3.5 rounded-full bg-[linear-gradient(#4d4d4d,#000)]">
                                    <Image
                                        src="/assets/svg/star.svg"
                                        alt="Star"
                                        width={32}
                                        height={32}
                                        className="max-sm:size-5.5"
                                    />
                                    {/* pulse circle */}
                                    <div className="bg-[#00000041] absolute rounded-full size-full animate-ping animation-duration-[2s] -z-10"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero