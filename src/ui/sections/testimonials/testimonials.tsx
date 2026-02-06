

import TitleBadge from "@/ui/components/badge/title-badge"
import TestimonialCarousal from "@/ui/components/carousals/testimonial-carousal"

const Testimonials = () => {
    return (
        <section className='section-container py-10 lg:py-20'>
            <div className="flex flex-col gap-22">
                {/* Header */}
                <div className="flex flex-col items-center md:px-13.5 md:gap-4.5">
                    {/* Tag / Badge */}
                    <TitleBadge text="Testimonials" />

                    {/* Title */}
                    <h1 className="text-[clamp(26px,5vw,42px)] text-center font-medium max-w-125">
                        Transparent Processes, No Hidden Fees.
                    </h1>
                </div>

                {/* testimonial slider */}
                <TestimonialCarousal />
            </div>
        </section>
    )
}

export default Testimonials