"use client";

import JobCard from "@/ui/components/cards/job-card"
import { jobCardData } from "@/constants/job-card-data"
import { useState } from "react"

const JobListing = () => {

    const departments = [
        "All Jobs",
        "Sales",
        "Marketing",
        "Tech",
        "Design"
    ]

    const [activeDept, setActiveDept] = useState("All")
    const filteredJobs = jobCardData.filter((job) => {
        if (activeDept !== "All Jobs" && job.department !== activeDept) return false
        return true
    })

    return (
        <section className="section-container py-10 md:py-15 lg:py-25">
            <div className="flex flex-col gap-10 md:gap-15 px-2 md:px-4">
                {/* Header Section */}
                <div className="w-full flex flex-wrap items-center justify-center gap-3.75 md:gap-8 lg:gap-12.5">
                    {departments.map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setActiveDept(dept)}
                            className={`px-4 py-1 rounded-full  text-sm transition cursor-pointer
                            ${activeDept === dept
                                    ? "bg-white border border-primary"
                                    : "border-none"
                                }`}
                        >
                            {dept}
                        </button>
                    ))}

                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-5 place-content-center place-items-center">
                    {filteredJobs.map((job, index) => (
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
                {filteredJobs.length === 0 && (
                    <div className="text-center text-muted-foreground text-lg tracking-wide mt-4">
                        No jobs found
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobListing