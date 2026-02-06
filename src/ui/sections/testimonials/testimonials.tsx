

import TestimonialCarousal from "@/ui/components/carousals/testimonial-carousal"
import Image from "next/image"

const Testimonials = () => {
    return (
        <section className='section-container py-10 lg:py-20'>
            <div className="flex flex-col gap-22">
                {/* Header */}
                <div className="flex flex-col items-center md:px-13.5 md:gap-4.5">
                    {/* Tag / Badge */}
                    <div className="mb-4.5 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-muted-foreground">
                        <Image
                            src="/assets/svg/black-sparkle.svg"
                            alt="Sparkles"
                            width={23}
                            height={23}
                        />
                        Testimonials
                    </div>

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