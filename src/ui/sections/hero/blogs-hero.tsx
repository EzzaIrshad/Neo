import TitleBadge from '@/ui/components/badge/title-badge'

const BlogsHero = () => {
    return (
        <section className="section-container bg-white mt-5 py-10 md:py-25 rounded-2xl">

            {/* header */}
            <div className="flex flex-col items-center justify-start gap-4 md:px-13.5">
                {/* header badge */}
                <TitleBadge text="Blogs" />

                <h1 className="text-[clamp(38px,5vw,62px)] text-center max-w-161.5 font-medium">
                    Latest Stories & News
                </h1>

                <p className="text-sm md:text-lg text-center max-w-100 mb-2.5 text-muted-foreground">
                    Discover career insights, hiring trends, and expert guidance—all in one place.
                </p>

            </div>
        </section>
    )
}

export default BlogsHero