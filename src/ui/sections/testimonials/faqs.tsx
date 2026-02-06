import FaqAccordian from '@/ui/components/accordion/faq-accordian'
import TitleBadge from '@/ui/components/badge/title-badge'

const Faqs = () => {
    return (
        <section className='section-container py-10 lg:py-20'>
            <div className='py-10 md:py-25 px-2 md:px-5 bg-white rounded-2xl flex flex-col gap-10'>

                {/* Header */}
                <div className="flex flex-col items-center md:px-13.5 md:gap-4.5">
                    {/* Tag / Badge */}
                    <TitleBadge text="FAQ" />

                    {/* Title */}
                    <h1 className="text-[clamp(26px,5vw,42px)] text-center font-medium">
                        Got Questions? We&apos;ve Got Answers.
                    </h1>
                </div>

                {/* QnA accordian */}
                <FaqAccordian />
            </div>
        </section>
    )
}

export default Faqs