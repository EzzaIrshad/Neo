import { CarousalContent1 } from '@/constants/services-carousal-data-1'
import TitleBadge from '@/ui/components/badge/title-badge'
import ServicesFadeCarousel from '@/ui/components/carousals/services-fade-carousal'
import { EmblaOptionsType } from 'embla-carousel'


const OurServices = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 }

    return (
        <section className='section-container py-10 lg:py-20'>
            <div className="flex flex-col gap-15">
                {/* Header */}
                <div className="flex flex-col items-center md:px-13.5 md:gap-4.5">
                    {/* Tag / Badge */}
                    <TitleBadge text="Our Services" />

                    {/* Title */}
                    <h1 className="text-[clamp(26px,5vw,42px)] text-center font-medium max-w-125">
                        AI-Powered Services to Help You Get Hired Faster
                    </h1>
                </div>

                <div className='p-3 md:p-8 xl:p-12 rounded-2xl bg-white'>
                    <ServicesFadeCarousel options={OPTIONS} content={CarousalContent1} />

                </div>
            </div>
        </section>
    )
}

export default OurServices