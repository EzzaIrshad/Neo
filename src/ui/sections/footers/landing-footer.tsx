import { routes } from '@/app/routes'
import PrimaryButton from '@/ui/components/buttons/primary-button'
import Image from 'next/image'
import Link from 'next/link'

const LandingFooter = () => {
    return (
        <footer className='bg-primary py-12.5 px-5 md:px-7.5 lg:px-13.5'>
            <div className="flex flex-col gap-4 section-container">

                {/* top links */}
                <div className="w-full flex max-lg:flex-col gap-6 items-center justify-between">
                    <Link href={routes.landing.home} className="font-bold text-4xl text-white leading-none">
                        neo
                    </Link>
                    <nav className="flex max-sm:flex-wrap items-center sm:h-7.5 font-medium justify-center sm:justify-start gap-x-4.5 gap-y-2.5 sm:gap-8 text-white/80 *:hover:text-white text-lg tracking-wide">
                        <Link href={routes.landing.home}>Home</Link>
                        <Link href={routes.landing.about}>About Us</Link>
                        <Link href={routes.landing.services}>Services</Link>
                        <Link href={routes.landing.blogs}>Blog</Link>
                        <Link href={routes.landing.career}>Career</Link>
                        <Link href={routes.landing.contact}>Contact</Link>
                    </nav>
                </div>

                {/* middle section */}
                <div className='my-[8vh] flex flex-col gap-4 px-5 sm:px-7.5 md:px-5 lg:px-13.5 items-center'>
                    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm tracking-wide font-medium text-white">
                        <Image
                            src="/assets/svg/star.svg"
                            alt="Sparkles"
                            width={23}
                            height={23}
                        />
                        Join Us Now
                    </div>

                    <h2 className='text-white text-[clamp(38px,5vw,62px)] text-center max-sm:mb-5 md:max-w-161.75 font-medium md:mt-4.5 sm:tracking-wide'>Ready to transform your career?</h2>

                    <PrimaryButton
                        text='Contact Us Now'
                        bgColor='white'
                        textColor='#1f1f1f'
                        link={routes.landing.contact}
                    />
                </div>

                {/* bottom copyright */}
                <div className='w-full text-center text-sm text-white'>© {new Date().getFullYear()} All rights reserved. Powered by <a href="https://www.paandaaa.com/" target='_blank'>Paandaaa</a>.</div>
            </div>
        </footer>
    )
}

export default LandingFooter