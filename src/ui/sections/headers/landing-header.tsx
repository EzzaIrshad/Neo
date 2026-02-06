import { routes } from "@/app/routes"
import PrimaryButton from "@/ui/components/buttons/primary-button"
import Link from "next/link"

const LandingHeader = () => {
    return (
        <div className='max-w-7xl mx-auto px-10 bg-white py-2.5 rounded-2xl'>
            <div className="flex items-center justify-between w-full my-3">
                <Link href={routes.landing.home} className="font-bold text-4xl leading-none">
                    neo
                </Link>
                <nav className="max-md:hidden flex items-center justify-start gap-12.5 text-[#222] text-lg tracking-wide">
                    <Link href={routes.about}>About</Link>
                    <Link href={routes.services}>Services</Link>
                    <Link href={routes.career}>Career</Link>
                    <Link href={routes.blog}>Blog</Link>
                </nav>

                <div className="max-md:hidden">
                    <PrimaryButton
                        text='Get Hired Today'
                        bgColor="linear-gradient(270deg, #434343, #000)" />
                </div>
            </div>
        </div>
    )
}

export default LandingHeader