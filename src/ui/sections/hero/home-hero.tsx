import Image from "next/image"

const HomeHero = () => {
    return (
        <section className="section-container bg-white mt-5">
            <div className="grid grid-cols-1 grid-rows-[auto_auto] gap-10 py-10 md:py-25 md:px-5 rounded-2xl">

                {/* header */}
                <div className="flex flex-col items-center justify-start gap-4 md:px-13.5">
                    {/* header badge */}
                    <div className="flex items-center justify-center border rounded-full h-10 p-1.5 pl-3">

                        <div className="flex">
                            <Image
                                src="/assets/images/user-avatar-1.png"
                                alt="User-avatar"
                                width={28}
                                height={28}
                                className="static w-7 h-auto object-cover"
                            />
                            <Image
                                src="/assets/images/user-avatar-2.png"
                                alt="User-avatar"
                                width={28}
                                height={28}
                                className="relative -left-1.75 w-7 h-auto object-cover"
                            />
                            <Image
                                src="/assets/images/user-avatar-3.png"
                                alt="User-avatar"
                                width={28}
                                height={28}
                                className="relative -left-3.5 w-7 h-auto object-cover"
                            />
                        </div>

                        <div className="text-muted-foreground text-sm leading-5.25 ml-1.25 font-medium tracking-wide">
                            <span className="text-base">100% </span>
                            Transparent Process
                        </div>
                    </div>

                    <h1 className="text-[clamp(38px,5vw,62px)] text-center max-w-161.5 font-medium">
                        Find the Right Job. Get AI-Ready. <span className="text-secondary">Get Hired.</span>
                    </h1>

                    <p className="text-sm md:text-lg text-center max-w-164 mb-2.5 text-muted-foreground">Land interviews faster with a recruiting partner that connects you to roles that match your skills  and prepares you for success using powerful AI-driven tools.</p>

                </div>

                {/* apply container */}
                <div className="flex items-start justify-center h-80 md:h-100 lg:h-137.5 relative">

                    {/* outer ring */}
                    <div className="z-30 rounded-full flex items-center justify-center size-23.75 md:size-33.75 absolute bg-[linear-gradient(#4d4d4d33,#0003)]">
                        <div className="relative flex flex-col items-center justify-center size-20 md:size-30 p-3.5 rounded-full bg-[linear-gradient(#4d4d4d,#000)]">
                            <Image
                                src="/assets/svg/star.svg"
                                alt="Star"
                                width={32}
                                height={32}
                                className="max-sm:size-5.5"
                            />
                            <div className="text-white font-medium text-center max-sm:text-xs">Apply Now</div>
                            {/* pulse circle */}
                            <div className="bg-[#00000041] absolute rounded-full size-full animate-ping animation-duration-[2s] -z-10"></div>
                        </div>
                    </div>

                    {/* job cards */}
                    <Image
                        src="/assets/svg/griantx.svg"
                        alt="job-card"
                        width={242}
                        height={110}
                        className="absolute z-30 w-27.5 md:w-50 lg:w-60.5 top-10 sm:top-15.75 right-0 max-w-full"
                    />

                    <Image
                        src="/assets/images/Hero-Bg-Image.png"
                        alt="Hero-Bg-Image"
                        width={687}
                        height={687}
                        className="absolute z-0 -top-[10%] lg:-top-[29%] right-[0%] bottom-auto sm:left-[20%] lg:left-76 max-md:w-80 max-lg:w-100"
                    />

                    <Image
                        src="/assets/svg/alphawave.svg"
                        alt="job-card"
                        width={242}
                        height={110}
                        className="absolute z-30 w-27.5 md:w-50 lg:w-60.5 top-30  sm:top-60 right-[8%] xl:top-65.5 max-w-full"
                    />

                    <Image
                        src="/assets/images/bg-polygon.png"
                        alt="polygon"
                        width={868}
                        height={550}
                        className="absolute z-30 w-50 sm:w-80 md:w-120 lg:w-175! top-6 -left-5 lg:-left-42 xl:-left-25 xl:w-217 xl:h-137.5"
                    />

                    <Image
                        src="/assets/svg/tenjenx.svg"
                        alt="job-card"
                        width={242}
                        height={110}
                        className="absolute z-30 w-27.5 md:w-50 lg:w-60.5 left-5 top-60 sm:left-30 lg:top-96 lg:left-46 max-w-full"
                    />

                    <Image
                        src="/assets/svg/obenx.svg"
                        alt="job-card"
                        width={242}
                        height={92}
                        className="absolute z-30 w-27.5 md:w-50 lg:w-60.5 top-45 sm:top-88.75 lg:top-97.5  max-w-full"
                    />

                    <Image
                        src="/assets/svg/quitoro.svg"
                        alt="job-card"
                        width={200}
                        height={92}
                        className="absolute z-10 w-27.5 md:w-50 top-25 sm:top-35 lg:top-50 left-5 sm:left-22 lg:left-93.25 max-w-full"
                    />

                    <Image
                        src="/assets/svg/webflow.svg"
                        alt="job-card"
                        width={200}
                        height={92}
                        className="absolute z-10 w-27.5 md:w-50 top-6 -left-3.25 lg:left-32.5 max-w-full"
                    />
                </div>

            </div>
        </section>
    )
}

export default HomeHero