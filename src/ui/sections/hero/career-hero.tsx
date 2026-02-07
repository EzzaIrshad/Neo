import TitleBadge from '@/ui/components/badge/title-badge'

const CareerHero = () => {
    return (
        <section className="section-container bg-white mt-5 py-10 md:py-25 rounded-2xl">

            {/* header */}
            <div className="flex flex-col items-center justify-start gap-4 md:px-13.5">
                {/* header badge */}
                <TitleBadge text="Job Listing" />

                <h1 className="text-[clamp(38px,5vw,62px)] text-center max-w-161.5 font-medium">
                    From Job Seeker to Dream Job Finder
                </h1>

                <p className="text-sm md:text-lg text-center max-w-164 mb-2.5 text-muted-foreground">
                    Find the right role, explore opportunities, and start your next career move confidently.
                </p>

            </div>
        </section>
    )
}

export default CareerHero