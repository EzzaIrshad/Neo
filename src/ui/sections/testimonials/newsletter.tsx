import TitleBadge from '@/ui/components/badge/title-badge'
import { Input } from '@/ui/components/shadcn/input'
import Image from 'next/image'
import { newsletterBadgeData } from '@/constants/newsletter-badge-data'



const Newsletter = () => {

    const hiddenBadge = [1, 2, 5, 6, 8]

    return (
        <section className="section-container py-10 md:py-15 lg:py-25">
            <div className="flex max-lg:flex-col gap-4 md:gap-8 py-16 md:py-25 sm:px-5 md:px-15 bg-white rounded-2xl">
                <div className="relative w-full md:w-162 h-62.5 shrink-0 bg-cover bg-position-[100%] bg-[url(/assets/images/Hero-Bg-Image.png)]">
                    <div className="absolute sm:-left-[3%] flex justify-start items-center gap-2 sm:gap-5 flex-wrap">
                        {
                            newsletterBadgeData.map((item, idx) => (
                                <div key={idx} className={`flex items-center justify-center animate-wiggle 
                                                            ${hiddenBadge.includes(idx) && "max-sm:opacity-0"}
                                                            ${(idx === 3 || idx === 4 || idx === 5) && "flex-row-reverse"}`}>
                                    <Image
                                        src={item.companyImg}
                                        width={160}
                                        height={75}
                                        alt='company'
                                        className='object-contain w-30 md:w-40 h-auto'
                                    />
                                    <Image
                                        src={item.userImg}
                                        width={45}
                                        height={45}
                                        alt='company'
                                        className='object-contain w-8 md:w-11.25 h-auto rounded-full'
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-8 w-full">
                    <div className="flex flex-col gap-2 items-start">
                        {/* Tag / Badge */}
                        <TitleBadge text="Hire smarter. Grow Faster." />
                        {/* Title */}
                        <h1 className="text-[clamp(26px,3vw,42px)] font-medium">
                            Career Opportunities, Straight to Your Inbox
                        </h1>
                    </div>

                    <form method='get' className='flex gap-4 justify-start items-center max-w-107.5'>
                        <Input
                            placeholder="Enter your email"
                            className="border border-[#00000026] rounded-full text-base w-full py-2 px-3"
                        />
                        {/* Button */}
                        <button
                            type='submit'
                            className="shrink-0 text-white cursor-pointer font-medium tracking-wide leading-6 border border-[#18181899] bg-[linear-gradient(270deg,#434343,#000)]
                rounded-full px-3.5 py-2"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter