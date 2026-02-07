import TitleBadge from "@/ui/components/badge/title-badge"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const ContactInfo = () => {
    return (

        <section className="section-container pt-25 pb-20 flex max-lg:items-end">

            {/* left content */}
            <div className="flex flex-col items-start justify-start w-full gap-3">
                {/* Header Section */}
                {/* Tag / Badge */}
                <div className="w-fit">
                    <TitleBadge text="Let's Build Something Together" />
                </div>
                {/* Title */}
                <h1 className="text-[clamp(26px,5vw,45px)] font-medium max-w-187.5">
                    We&apos;d love to learn about your goals. Visit our office or connect online
                </h1>

                {/* call widget*/}
                <div className="bg-white flex rounded-2xl items-center justify-start w-full gap-4 py-3 md:py-6 px-4.5 md:px-8 mt-10">
                    <div className="flex items-center justify-center size-10.5 md:size-13.5 rounded-full bg-[linear-gradient(#4d4d4d,#000)] p-2.5">
                        <Phone className="text-white" />
                    </div>
                    <div>
                        <p className="text-muted-foreground font-medium text-lg md:text-2xl">Call us at</p>
                        <p className="text-sm md:text-xl font-medium">(+92) 3110462772</p>
                    </div>
                </div>

                {/* email widget */}
                <div className="bg-white flex rounded-2xl items-center justify-start w-full gap-4 py-3 md:py-6 px-4.5 md:px-8 lg:ml-[15%]">
                    <div className="flex items-center justify-center size-10.5 md:size-13.5 rounded-full bg-[linear-gradient(#4d4d4d,#000)] p-2.5">
                        <Mail className="text-white" />
                    </div>
                    <div>
                        <p className="text-muted-foreground font-medium text-lg md:text-2xl">Email us on</p>
                        <p className="text-sm md:text-xl font-medium">info@paandaaa.com</p>
                    </div>
                </div>

                {/* address widget */}
                <div className="bg-white flex rounded-2xl items-center justify-start w-full gap-4 py-3 md:py-6 px-4.5 md:px-8 lg:ml-[35%]">
                    <div className="flex items-center justify-center size-10.5 md:size-13.5 rounded-full bg-[linear-gradient(#4d4d4d,#000)] p-2.5">
                        <MapPin className="text-white" />
                    </div>
                    <div>
                        <p className="text-muted-foreground font-medium text-lg md:text-2xl">Address</p>
                        <p className="text-sm md:text-xl font-medium">Multan, Pakistan</p>
                    </div>
                </div>

            </div>

            {/* right image */}
            <div className="max-md:hidden w-fit shrink-0 mt-2">
                <Image
                    src="/assets/images/contact-banner.jpg"
                    alt="Banner image"
                    width={424}
                    height={600}
                    className="rounded-xl object-cover h-103.5 lg:h-150 w-auto"
                />
            </div>
        </section>
    )
}

export default ContactInfo