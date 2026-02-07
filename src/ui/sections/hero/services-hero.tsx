import { CarousalContent1 } from "@/constants/services-carousal-data-1"
import { CarousalContent2 } from "@/constants/services-carousal-data-2"
import TitleBadge from "@/ui/components/badge/title-badge"
import ServicesFadeCarousel from "@/ui/components/carousals/services-fade-carousal"
import { EmblaOptionsType } from 'embla-carousel'


const ServicesHero = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 }
    return (
        <section className="section-container bg-white mt-5">
            <div className="grid grid-cols-1 grid-rows-[auto_auto] gap-10 py-10 md:py-25 md:px-5 rounded-2xl">
                {/* header */}
                <div className="flex flex-col items-center justify-start gap-4 md:px-13.5">
                    {/* header badge */}
                    <TitleBadge text="Our Services" />

                    <h1 className="text-[clamp(38px,5vw,62px)] text-center max-w-200 font-medium">
                        AI-Powered Services to Help You Get Hired Faster
                    </h1>

                    <p className="text-sm md:text-lg text-center max-w-164 mb-2.5 text-muted-foreground">From polishing your portfolio to acing interviews with AI-powered guidance, we help designers land jobs they actually love.</p>

                </div>
                <div className="py-8 px-3 md:p-5 lg:p-15">
                    <ServicesFadeCarousel options={OPTIONS} content={CarousalContent1} />
                </div>
                <div className="py-8 px-3 md:p-5 lg:p-15">
                    <ServicesFadeCarousel direction='reverse' options={OPTIONS} content={CarousalContent2} />
                </div>
            </div>
        </section>
    )
}

export default ServicesHero