import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface Props {
    text: string
    bgColor: string
    textColor?: string
    link: string
}

const PrimaryButton = ({text, bgColor, textColor, link}: Props) => {
    return (
        <div className="group relative flex items-center">
            {/* Left Arrow */}
            <div
                className="absolute left-0 flex items-center justify-center size-10 rounded-full bg-[linear-gradient(#4d4d4d,#000)] p-2.5
                            z-0 scale-0 group-hover:scale-100 transition-transform duration-300"
            >
                <ArrowUpRight className="text-white" />
            </div>

            {/* Button */}
            <Link
                href={link}
                className="relative z-10 text-white font-medium tracking-wide leading-6 border border-[#18181899]
                rounded-full px-3.5 py-2 transition-transform duration-300 group-hover:translate-x-10"
                style={{
                    background: bgColor, 
                    color: textColor 
                }}
            >
                {text}
            </Link>

            {/* Right Arrow */}
            <div
                className="flex items-center justify-center size-10 rounded-full bg-[linear-gradient(#4d4d4d,#000)] p-2.5
                            z-0 scale-100 group-hover:scale-0 transition-transform duration-300"
            >
                <ArrowUpRight className="text-white" />
            </div>
        </div>

    )
}

export default PrimaryButton