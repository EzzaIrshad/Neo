import TitleBadge from '@/ui/components/badge/title-badge'
import PrimaryButton from '@/ui/components/buttons/primary-button'
import Image from 'next/image'
import { blogCardData } from '@/constants/blog-card-data'
import BlogCard from '@/ui/components/cards/blog-card'

const OurBlogs = () => {
    return (
        <section className="section-container py-10 md:py-15 lg:py-25">
            <div className="flex flex-col gap-4 md:gap-15 px-2 md:px-4">
                {/* Header Section */}
                <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        {/* Tag / Badge */}
                        <TitleBadge text="Our Blogs" />
                        {/* Title */}
                        <h1 className="text-[clamp(26px,5vw,42px)] font-medium max-w-139.5">
                            News & Articles
                        </h1>
                    </div>

                    {/* Action Button*/}
                    <div className='mb-5'>
                        <PrimaryButton
                            text='Browse All Articles'
                            bgColor="linear-gradient(270deg, #434343, #000)"
                        />
                    </div>
                </div>

                {/* Blogs cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">

                    <div>
                        <Image
                            src="/assets/images/blog-img.jpg"
                            alt='blog image'
                            width={636}
                            height={536}
                            className='w-full lg:h-143 lg:w-auto max-w-full rounded-2xl object-cover mb-4.5'
                        />
                        <BlogCard data={blogCardData[0]} />
                    </div>
                    <div>
                        <BlogCard data={blogCardData[1]} />
                        <BlogCard data={blogCardData[2]} />
                        <BlogCard data={blogCardData[3]} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OurBlogs