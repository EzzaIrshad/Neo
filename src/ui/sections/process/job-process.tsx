import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const JobProcess = () => {
    const processCard = [
        {
            id: "1",
            title: "Prepare for Interviews",
            description: "AI-powered mock interviews, role-based questions & instant feedback."
        },
        {
            id: "2",
            title: "Apply With Confidence",
            description: "We guide you through applications with tailored resume & portfolio improvements."
        },
        {
            id: "3",
            title: "Get Shortlisted",
            description: "We connect you directly with hiring teams searching for skills like yours."
        },
    ]
    return (
        <section className='section-container py-10 lg:py-20'>
            <div className='py-10 md:py-25 px-2 md:px-5 bg-white rounded-2xl flex flex-col gap-10'>
                <div className="flex flex-col items-center md:px-13.5 md:gap-4.5">

                    {/* Tag / Badge */}
                    <div className="mb-4.5 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-muted-foreground">
                        <Image
                            src="/assets/svg/black-sparkle.svg"
                            alt="Sparkles"
                            width={23}
                            height={23}
                        />
                        Our Process
                    </div>

                    {/* Title */}
                    <h1 className="text-[clamp(26px,5vw,42px)] text-center font-medium max-w-125">
                        A Simple, Transparent Journey No Hidden Steps.
                    </h1>
                </div>

                <div className="flex flex-col gap-4 items-center z-10 relative">
                    <Image
                        src="/assets/images/process-bg.png"
                        alt='Process-Image'
                        width={1252}
                        height={425}
                        className='w-full z-0 absolute top-36.25 object-contain max-md:hidden'
                    />

                    {
                        processCard.map((card) => (
                            <div key={card.id} className="group relative z-30 border-2 border-[#fafafa] rounded-3xl p-1.75 bg-white max-md:w-full shadow-[0_4px_100px_#00000014] ">
                                <div className="rounded-3xl md:max-lg:w-80 border border-[#fafafa] px-3 lg:px-7 py-6 lg:py-7.5 flex flex-col items-start">
                                    <div className={`bg-[linear-gradient(#4d4d4d,#000)] flex items-center justify-center size-10 rounded-full ${card.id === "2" ? "rotate-45" : "group-hover:rotate-45 transition-transform duration-500"}`}>
                                        <ArrowUpRight className="text-white" strokeWidth={1} />
                                    </div>

                                    <div className="text-xl md:text-2xl mt-5.5 lg:mt-8 font-medium">
                                        {card.title}
                                    </div>

                                    <div className={`max-w-112.5 overflow-hidden text-muted-foreground md:text-xl mt-4.5 ${card.id === "2" ? "max-h-48" : "max-h-0 group-hover:max-h-48 transition-all duration-500 "}`}>
                                        {card.description}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default JobProcess