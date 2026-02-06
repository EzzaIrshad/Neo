
import PrimaryButton from "@/ui/components/buttons/primary-button"
import JobCard from "@/ui/components/cards/job-card"
import Image from "next/image"
import { jobCardData } from "../../../../constants/job-card-data"


const JobOpening = () => {
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
                            Jobs Opening
                        </div>
                        {/* Title */}
                        <h1 className="text-[clamp(26px,5vw,42px)] font-medium max-w-139.5">
                            Explore Opportunities That Match Your Skills.
                        </h1>
                    </div>

                    {/* Action Button*/}
                    <div className='mb-5'>
                        <PrimaryButton text='View all Job Openings' bgColor="white" textColor="#1f1f1f" />
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-5 place-content-center place-items-center">
                    {jobCardData.map((job, index) => (
                        <JobCard
                            key={index}
                            logo={job.logo}
                            company={job.company}
                            title={job.title}
                            salary={job.salary}
                            location={job.location}
                            tags={job.tags}
                            link={job.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JobOpening