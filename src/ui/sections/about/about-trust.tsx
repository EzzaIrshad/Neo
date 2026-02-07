import { routes } from "@/app/routes"
import TitleBadge from "@/ui/components/badge/title-badge"
import PrimaryButton from "@/ui/components/buttons/primary-button"
import Image from "next/image"

const AboutTrust = () => {
    return (
        <section className="section-container pt-25 pb-20 flex">
            <div className="flex flex-col items-start justify-start w-full gap-4">
                {/* Header Section */}
                {/* Tag / Badge */}
                <div className="w-fit">
                    <TitleBadge text="Built on Trust" />
                </div>
                {/* Title */}
                <h1 className="text-[clamp(26px,5vw,45px)] font-medium max-w-175">
                    Empowering Candidates to Grow, Build, and Get Hired.
                </h1>

                {/* Action Button*/}
                <div>
                    <PrimaryButton
                        text='Book A Free Discovery Call'
                        bgColor="linear-gradient(270deg, #434343, #000)"
                        link={routes.landing.contact}
                    />
                </div>

                <div className="flex gap-5 h-full pt-10">
                    <div className="flex bg-white rounded-2xl flex-col items-start justify-between p-6 gap-38.25">
                        <Image
                            src="/assets/svg/globe.svg"
                            alt="Globe"
                            width={48}
                            height={48}
                        />
                        <div>
                            <p className="text-muted-foreground font-medium text-lg md:text-2xl mb-2">40+</p>
                            <p className="text-sm md:text-xl font-medium">Locations Worldwide</p>
                        </div>
                    </div>

                    <div className="flex bg-white rounded-2xl flex-col items-start justify-between p-6 gap-2">
                        <p className="text-muted-foreground font-medium text-2xl mb-2">500+</p>
                        <p className="text-xl font-medium">Top Companies Connected</p>
                        <div className=" relative w-full h-full">
                            <div className="absolute top-[50%] left-[40%] -rotate-[3.54deg]">
                                <Image
                                src="/assets/svg/rlezk.svg"
                                alt="Companies"
                                width={112}
                                height={38}
                                className=" "
                            />
                            </div>
                            <div className="absolute bottom-[5%] left-[25%]">
                                <Image
                                src="/assets/svg/pwettor.svg"
                                alt="Companies"
                                width={112}
                                height={38}
                            />
                            </div>
                            <div className="absolute bottom-[13%] -right-[20%] -rotate-[15.15deg]">
                                <Image
                                src="/assets/svg/enstogrem.svg"
                                alt="Companies"
                                width={112}
                                height={38}
                            />
                            </div>
                            <div className="absolute top-[40%] -right-[35%] rotate-[14.91deg]">
                                <Image
                                src="/assets/svg/forabeek.svg"
                                alt="Companies"
                                width={112}
                                height={38}
                            />
                            </div>
                            <div className="absolute top-[25%] right-0 rotate-[41.87deg]">
                                <Image
                                src="/assets/svg/pitsky.svg"
                                alt="Companies"
                                width={112}
                                height={38}
                            />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="w-fit shrink-0">
                <Image 
                src="/assets/images/about/banner-img.jpg"
                alt="Banner image"
                width={424}
                height={592}
                className="rounded-xl object-cover h-148 w-auto"
                />
            </div>
        </section>
    )
}

export default AboutTrust