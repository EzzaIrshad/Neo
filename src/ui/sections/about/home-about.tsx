import Image from 'next/image';
import PrimaryButton from '@/ui/components/buttons/primary-button';

const HomeAbout: React.FC = () => {
    return (
        <section className="section-container py-10 md:py-15 lg:py-25">
            <div className="flex flex-col gap-4 md:gap-15 px-2 md:px-4">
                {/* Header Section */}
                <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        {/* Tag / Badge */}
                        <div className="mb-4.5 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-muted-foreground">
                            <Image
                                src="/assets/svg/black-sparkle.svg"
                                alt="Sparkles"
                                width={23}
                                height={23}
                            />
                            What We Stand For
                        </div>
                        {/* Title */}
                        <h1 className="text-[clamp(26px,5vw,42px)] font-medium max-w-139.5">
                            Empowering Job Seekers to Grow, Upskill, and Get Hired.
                        </h1>
                    </div>

                    {/* Action Button*/}
                    <div className='mb-5'>
                        <PrimaryButton
                            text='Learn More About Us'
                            bgColor="linear-gradient(270deg, #434343, #000)"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2 lg:grid-cols-12 lg:gap-5">

                    <div className="flex flex-col md:max-lg:flex-row sm:gap-5 lg:col-span-3">
                        {/* Successful Placements Card */}
                        <div className="flex flex-1 flex-col items-start lg:items-end justify-between max-md:gap-6 md:min-h-37.5 lg:min-h-95 p-5 sm:p-6 rounded-2xl bg-white">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium sm:text-right tracking-wide">
                                Successful Placements
                            </h3>
                            <p className="leading-relaxed tracking-wide lg:text-lg text-muted-foreground">
                                Strong industry partnerships driving quality placements
                            </p>
                        </div>

                        {/* 50+ Stats Card */}
                        <div className="flex flex-1 items-start justify-between md:min-h-37.5 p-5 sm:p-6 rounded-2xl bg-white">
                            <span className="text-2xl md:text-4xl font-semibold text-right">50+</span>
                            <span className="text-muted-foreground text-right sm:text-lg">01</span>
                        </div>
                    </div>

                    {/* CENTRAL IMAGE */}
                    <div className="w-full overflow-hidden lg:shrink rounded-2xl lg:col-span-6">
                        <Image
                            src="/assets/images/about-img.png"
                            alt="Job seeker"
                            width={646}
                            height={550}
                            className="w-full h-auto lg:h-full lg:w-auto object-cover"
                        />
                    </div>

                    <div className="flex flex-col md:max-lg:flex-row sm:gap-5 lg:col-span-3">
                        {/* 95% Stats Card */}
                        <div className="flex flex-1 items-start justify-between md:min-h-37.5 p-5 sm:p-6 rounded-2xl bg-white">
                            <span className="text-2xl md:text-4xl font-semibold text-right">95%</span>
                            <span className="text-muted-foreground text-right sm:text-lg">02</span>
                        </div>

                        {/* Candidate Satisfaction Card */}
                        <div className="flex flex-1 flex-col sm:items-end justify-between max-md:gap-6 md:min-h-37.5 lg:min-h-95 p-5 sm:p-6 rounded-2xl bg-white">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium sm:text-right tracking-wide">
                                Candidate Satisfaction
                            </h3>
                            <p className=" lg:text-lg text-muted-foreground">
                                Personalized guidance boosting overall candidate satisfaction
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeAbout;