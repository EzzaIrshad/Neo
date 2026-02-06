import ServicesFadeCarousel from '@/ui/components/carousals/services-fade-carousal'
import { EmblaOptionsType } from 'embla-carousel'
import Image from 'next/image'

const CarousalContent = [
    {
        id: 1,
        title: "Career Path Mapping",
        description: "Gain a personalized roadmap designed to help you navigate your long-term career journey.",
        benefits: [
            "Role-based mock interviews",
            "AI-generated feedback",
            "Personalized Interview Preparation",
            "Skill Gap Analysis"
        ],
        imageSrc: "/assets/images/service-img-1.jpg"
    },
    {
        id: 2,
        title: "Resume & Portfolio Optimization",
        description: "We refine your resume, portfolio, and Linkedln profile so they reflect your strengths, highlight results, and capture the attention of hiring teams.",
        benefits: [
            "ATS optimized resume",
            "Portfolio structuring",
            "Keyword enhancement",
            "Professional formatting"
        ],
        imageSrc: "/assets/images/service-img-2.jpg"
    },
    {
        id: 3,
        title: "Job Matching & Shortlisting",
        description: "We connect you to job opportunities tailored to your experience, skills, and goals - without the noise or irrelevant listings.",
        benefits: [
            "Curated job matches",
            "Direct access to hiring teams",
            "Real-time job updates",
            "Skill-based shortlisting"
        ],
        imageSrc: "/assets/images/service-img-3.jpg"
    }
]

const OurServices = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 }

    return (
        <section className='section-container py-10 lg:py-20'>
            <div className="flex flex-col gap-15">
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
                        Our Services
                    </div>

                    {/* Title */}
                    <h1 className="text-[clamp(26px,5vw,42px)] text-center font-medium max-w-125">
                        AI-Powered Services to Help You Get Hired Faster
                    </h1>
                </div>

                <div className='p-3 md:p-8 xl:p-12 rounded-2xl bg-white'>
                    <ServicesFadeCarousel options={OPTIONS} content={CarousalContent} />

                </div>
            </div>
        </section>
    )
}

export default OurServices